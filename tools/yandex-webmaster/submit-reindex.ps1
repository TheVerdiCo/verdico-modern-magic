Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$RepoRoot = Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '..\..')
$EnvPath = Join-Path $RepoRoot '.yandex-webmaster.env'
$UrlsPath = Join-Path $PSScriptRoot 'priority-urls.txt'
$ReportPath = Join-Path $PSScriptRoot 'reindex-report.json'
$ApiBase = 'https://api.webmaster.yandex.net/v4'
$TargetHost = 'https://www.verdico.ru'

function Read-EnvFile {
  param([Parameter(Mandatory = $true)][string]$Path)

  if (-not (Test-Path -LiteralPath $Path)) {
    throw 'Missing .yandex-webmaster.env. Copy .yandex-webmaster.env.example, fill it locally, and do not commit it.'
  }

  $envValues = @{}
  foreach ($line in Get-Content -LiteralPath $Path) {
    $trimmed = $line.Trim()
    if ($trimmed.Length -eq 0 -or $trimmed.StartsWith('#')) {
      continue
    }

    $separator = $trimmed.IndexOf('=')
    if ($separator -lt 1) {
      throw 'Invalid env file line. Expected KEY=value.'
    }

    $key = $trimmed.Substring(0, $separator).Trim()
    $value = $trimmed.Substring($separator + 1).Trim()
    if ($key -notmatch '^[A-Z0-9_]+$') {
      throw 'Invalid env file key.'
    }

    $envValues[$key] = $value
  }

  return $envValues
}

function ConvertFrom-JsonOrNull {
  param([string]$Text)

  if ([string]::IsNullOrWhiteSpace($Text)) {
    return $null
  }

  try {
    return $Text | ConvertFrom-Json
  }
  catch {
    return $null
  }
}

function Invoke-YandexRequest {
  param(
    [Parameter(Mandatory = $true)][ValidateSet('GET', 'POST')][string]$Method,
    [Parameter(Mandatory = $true)][string]$Uri,
    [Parameter(Mandatory = $true)][hashtable]$Headers,
    [hashtable]$Body
  )

  $request = @{
    Uri         = $Uri
    Method      = $Method
    Headers     = $Headers
    ContentType = 'application/json'
  }

  if ($null -ne $Body) {
    $request.Body = ($Body | ConvertTo-Json -Compress)
  }

  if ($PSVersionTable.PSVersion.Major -lt 6) {
    $request.UseBasicParsing = $true
  }

  try {
    $response = Invoke-WebRequest @request
    return [pscustomobject]@{
      StatusCode = [int]$response.StatusCode
      BodyText   = [string]$response.Content
    }
  }
  catch {
    $response = $_.Exception.Response
    if ($null -eq $response) {
      throw 'Yandex API request failed before receiving an HTTP response.'
    }

    $statusCode = $null
    $bodyText = ''

    if ($response -is [System.Net.Http.HttpResponseMessage]) {
      $statusCode = [int]$response.StatusCode
      $bodyText = $response.Content.ReadAsStringAsync().GetAwaiter().GetResult()
    }
    else {
      $statusCode = [int]$response.StatusCode
      $stream = $response.GetResponseStream()
      if ($null -ne $stream) {
        $reader = New-Object System.IO.StreamReader($stream)
        try {
          $bodyText = $reader.ReadToEnd()
        }
        finally {
          $reader.Dispose()
        }
      }
    }

    return [pscustomobject]@{
      StatusCode = $statusCode
      BodyText   = $bodyText
    }
  }
}

function Normalize-DisplayUrl {
  param([AllowNull()][string]$Url)

  if ([string]::IsNullOrWhiteSpace($Url)) {
    return ''
  }

  return $Url.Trim().TrimEnd('/').ToLowerInvariant()
}

function Get-HostDisplayUrls {
  param([Parameter(Mandatory = $true)]$HostRecord)

  $urls = New-Object System.Collections.Generic.List[string]

  foreach ($propertyName in @('ascii_host_url', 'unicode_host_url')) {
    if ($HostRecord.PSObject.Properties.Name -contains $propertyName) {
      $value = [string]$HostRecord.$propertyName
      if (-not [string]::IsNullOrWhiteSpace($value)) {
        $urls.Add($value)
      }
    }
  }

  if ($HostRecord.PSObject.Properties.Name -contains 'main_mirror' -and $null -ne $HostRecord.main_mirror) {
    foreach ($propertyName in @('ascii_host_url', 'unicode_host_url')) {
      if ($HostRecord.main_mirror.PSObject.Properties.Name -contains $propertyName) {
        $value = [string]$HostRecord.main_mirror.$propertyName
        if (-not [string]::IsNullOrWhiteSpace($value)) {
          $urls.Add($value)
        }
      }
    }
  }

  return $urls
}

function Test-HostMatchesTarget {
  param([Parameter(Mandatory = $true)]$HostRecord)

  $target = Normalize-DisplayUrl $TargetHost
  foreach ($url in Get-HostDisplayUrls $HostRecord) {
    if ((Normalize-DisplayUrl $url) -eq $target) {
      return $true
    }
  }

  return $false
}

function Test-HostVerified {
  param([Parameter(Mandatory = $true)]$HostRecord)

  if ($HostRecord.PSObject.Properties.Name -contains 'verified' -and [bool]$HostRecord.verified) {
    return $true
  }

  if ($HostRecord.PSObject.Properties.Name -contains 'main_mirror' -and $null -ne $HostRecord.main_mirror) {
    if ($HostRecord.main_mirror.PSObject.Properties.Name -contains 'verified' -and [bool]$HostRecord.main_mirror.verified) {
      return $true
    }
  }

  return $false
}

function Get-SafeHostSummary {
  param([Parameter(Mandatory = $true)]$HostRecord)

  return [pscustomobject]@{
    host_id          = [string]$HostRecord.host_id
    ascii_host_url   = if ($HostRecord.PSObject.Properties.Name -contains 'ascii_host_url') { [string]$HostRecord.ascii_host_url } else { '' }
    unicode_host_url = if ($HostRecord.PSObject.Properties.Name -contains 'unicode_host_url') { [string]$HostRecord.unicode_host_url } else { '' }
    verified         = Test-HostVerified $HostRecord
  }
}

$envValues = Read-EnvFile $EnvPath
$token = if ($envValues.ContainsKey('YANDEX_WEBMASTER_OAUTH_TOKEN')) { $envValues['YANDEX_WEBMASTER_OAUTH_TOKEN'] } else { '' }
$userId = if ($envValues.ContainsKey('YANDEX_WEBMASTER_USER_ID')) { $envValues['YANDEX_WEBMASTER_USER_ID'] } else { '' }
$hostId = if ($envValues.ContainsKey('YANDEX_WEBMASTER_HOST_ID')) { $envValues['YANDEX_WEBMASTER_HOST_ID'] } else { '' }

if ([string]::IsNullOrWhiteSpace($token) -or $token.Length -lt 20) {
  throw 'YANDEX_WEBMASTER_OAUTH_TOKEN is missing or too short.'
}

Write-Output 'OAuth token length check passed.'

$headers = @{
  Authorization = "OAuth $token"
  Accept        = 'application/json'
}

if ([string]::IsNullOrWhiteSpace($userId)) {
  $userResponse = Invoke-YandexRequest -Method GET -Uri "$ApiBase/user" -Headers $headers
  if ($userResponse.StatusCode -ne 200) {
    throw "Failed to resolve user_id. HTTP status: $($userResponse.StatusCode)"
  }

  $userBody = ConvertFrom-JsonOrNull $userResponse.BodyText
  if ($null -eq $userBody -or -not ($userBody.PSObject.Properties.Name -contains 'user_id')) {
    throw 'Failed to parse user_id response.'
  }

  $userId = [string]$userBody.user_id
}

if ([string]::IsNullOrWhiteSpace($userId) -or $userId -notmatch '^\d+$') {
  throw 'YANDEX_WEBMASTER_USER_ID is missing or invalid.'
}

Write-Output "USER_ID=$userId"

$encodedUserId = [uri]::EscapeDataString($userId)
$hostsResponse = Invoke-YandexRequest -Method GET -Uri "$ApiBase/user/$encodedUserId/hosts" -Headers $headers
if ($hostsResponse.StatusCode -ne 200) {
  throw "Failed to resolve hosts. HTTP status: $($hostsResponse.StatusCode)"
}

$hostsBody = ConvertFrom-JsonOrNull $hostsResponse.BodyText
if ($null -eq $hostsBody -or -not ($hostsBody.PSObject.Properties.Name -contains 'hosts')) {
  throw 'Failed to parse hosts response.'
}

$hosts = @($hostsBody.hosts)
$targetCandidates = @($hosts | Where-Object { (Test-HostMatchesTarget $_) -and (Test-HostVerified $_) })

Write-Output 'HOST_CANDIDATES='
foreach ($candidate in $targetCandidates) {
  $summary = Get-SafeHostSummary $candidate
  Write-Output ("- host_id={0}; ascii_host_url={1}; unicode_host_url={2}; verified={3}" -f $summary.host_id, $summary.ascii_host_url, $summary.unicode_host_url, $summary.verified)
}

if ([string]::IsNullOrWhiteSpace($hostId)) {
  if ($targetCandidates.Count -ne 1) {
    throw "Expected exactly one verified $TargetHost host candidate; found $($targetCandidates.Count). Set YANDEX_WEBMASTER_HOST_ID explicitly after verifying it."
  }

  $hostId = [string]$targetCandidates[0].host_id
}
else {
  $selectedHost = @($hosts | Where-Object { [string]$_.host_id -eq $hostId })
  if ($selectedHost.Count -ne 1) {
    throw 'YANDEX_WEBMASTER_HOST_ID was not found in the verified account host list.'
  }

  if (-not (Test-HostMatchesTarget $selectedHost[0]) -or -not (Test-HostVerified $selectedHost[0])) {
    throw "YANDEX_WEBMASTER_HOST_ID does not point to a verified $TargetHost host or equivalent mirror."
  }
}

Write-Output "HOST_ID=$hostId"

if (-not (Test-Path -LiteralPath $UrlsPath)) {
  throw 'Missing priority-urls.txt.'
}

$urls = @(Get-Content -LiteralPath $UrlsPath | ForEach-Object { $_.Trim() } | Where-Object { $_.Length -gt 0 })
if ($urls.Count -eq 0) {
  throw 'priority-urls.txt is empty.'
}

foreach ($url in $urls) {
  if ($url -notmatch '^https://www\.verdico\.ru(/|$)') {
    throw "URL is outside the approved host: $url"
  }

  if ($url -match '/policy/?$') {
    throw '/policy is intentionally excluded from reindex submission.'
  }
}

$encodedHostId = [uri]::EscapeDataString($hostId)
$endpoint = "$ApiBase/user/$encodedUserId/hosts/$encodedHostId/recrawl/queue"
$results = New-Object System.Collections.Generic.List[object]

foreach ($url in $urls) {
  $response = Invoke-YandexRequest -Method POST -Uri $endpoint -Headers $headers -Body @{ url = $url }
  $body = ConvertFrom-JsonOrNull $response.BodyText
  $errorCode = if ($null -ne $body -and $body.PSObject.Properties.Name -contains 'error_code') { [string]$body.error_code } else { '' }

  $result = 'failed'
  if ($response.StatusCode -eq 202) {
    $result = 'submitted'
  }
  elseif ($response.StatusCode -eq 409 -and $errorCode -eq 'URL_ALREADY_ADDED') {
    $result = 'already queued'
  }

  Write-Output ("{0} {1}" -f $result, $url)

  $results.Add([pscustomobject]@{
    url         = $url
    result      = $result
    status_code = $response.StatusCode
    error_code  = $errorCode
  })
}

$report = [pscustomobject]@{
  generated_at = (Get-Date).ToUniversalTime().ToString('o')
  user_id      = $userId
  host_id      = $hostId
  results      = $results
}

$report | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath $ReportPath -Encoding UTF8
Write-Output "REPORT_PATH=$ReportPath"

$failed = @($results | Where-Object { $_.result -ne 'submitted' -and $_.result -ne 'already queued' })
if ($failed.Count -gt 0) {
  throw "Reindex submission incomplete. Failed URL count: $($failed.Count)."
}

Write-Output 'YANDEX_REINDEX_SUBMISSION_GREEN=true'
