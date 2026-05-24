param(
  [Parameter(Mandatory = $true)]
  [ValidateNotNullOrEmpty()]
  [string]$Url
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

function Resolve-RepoRoot {
  $Candidate = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot "..\..")).Path

  if (-not (Test-Path -LiteralPath (Join-Path $Candidate "package.json"))) {
    throw "REPO_ROOT_PACKAGE_JSON_NOT_FOUND"
  }

  if (-not (Test-Path -LiteralPath (Join-Path $Candidate ".git"))) {
    throw "REPO_ROOT_GIT_DIR_NOT_FOUND"
  }

  return $Candidate
}

function Add-Failure {
  param(
    [string]$Code,
    [string]$Message
  )

  [void]$script:Failures.Add([ordered]@{
      code = $Code
      message = $Message
    })
}

function Invoke-HttpCheck {
  param(
    [string]$Name,
    [string]$Target
  )

  try {
    $Response = Invoke-WebRequest -Uri $Target -UseBasicParsing -MaximumRedirection 5 -TimeoutSec 30
    $StatusCode = [int]$Response.StatusCode
    $Ok = ($StatusCode -ge 200 -and $StatusCode -lt 400)

    $script:Summary.checks[$Name] = [ordered]@{
      ok = $Ok
      url = $Target
      statusCode = $StatusCode
      contentLength = if ($null -ne $Response.RawContentLength) { [int64]$Response.RawContentLength } else { $null }
      contentType = $Response.Headers["Content-Type"]
    }

    if (-not $Ok) {
      Add-Failure -Code "$($Name.ToUpperInvariant())_STATUS_NOT_OK" -Message "$Name returned HTTP $StatusCode"
    }
  } catch {
    $script:Summary.checks[$Name] = [ordered]@{
      ok = $false
      url = $Target
      error = $_.Exception.Message
    }

    Add-Failure -Code "$($Name.ToUpperInvariant())_CHECK_FAILED" -Message $_.Exception.Message
  }
}

function Get-CheckStatus {
  param([string]$Name)

  if (-not $Summary.checks.Contains($Name)) {
    return "missing"
  }

  $Check = $Summary.checks[$Name]
  $Ok = if ($Check.Contains("ok")) { $Check["ok"] } else { $false }
  $StatusCode = if ($Check.Contains("statusCode")) { $Check["statusCode"] } else { $null }
  $ErrorMessage = if ($Check.Contains("error")) { $Check["error"] } else { $null }

  if ($Ok -and $null -ne $StatusCode) {
    return "$StatusCode"
  }

  if ($null -ne $ErrorMessage) {
    return "fail: $ErrorMessage"
  }

  return "fail"
}

function Get-ObjectProperty {
  param(
    [object]$Object,
    [string]$Name
  )

  if ($null -eq $Object) {
    return $null
  }

  $Property = $Object.PSObject.Properties[$Name]

  if ($null -eq $Property) {
    return $null
  }

  return $Property.Value
}

function Get-LighthouseCategoryScore {
  param(
    [object]$Json,
    [string]$CategoryId
  )

  $Categories = Get-ObjectProperty -Object $Json -Name "categories"

  if ($null -eq $Categories) {
    return $null
  }

  $Category = Get-ObjectProperty -Object $Categories -Name $CategoryId

  if ($null -eq $Category) {
    return $null
  }

  $Score = Get-ObjectProperty -Object $Category -Name "score"

  if ($null -eq $Score) {
    return $null
  }

  return [math]::Round(([double]$Score) * 100, 2)
}

function Find-ReportFile {
  param(
    [string[]]$Candidates,
    [string]$Target
  )

  foreach ($Candidate in $Candidates) {
    if (Test-Path -LiteralPath $Candidate) {
      if ($Candidate -ne $Target) {
        Move-Item -LiteralPath $Candidate -Destination $Target -Force
      }

      return $true
    }
  }

  return $false
}

function Write-CriticalAuditsCsv {
  param(
    [object]$Json,
    [string]$Path
  )

  $CriticalAuditIds = @(
    "document-title",
    "meta-description",
    "http-status-code",
    "crawlable-anchors",
    "is-crawlable",
    "robots-txt",
    "canonical",
    "hreflang",
    "structured-data",
    "viewport",
    "image-alt",
    "link-text"
  )

  $Rows = @()

  foreach ($AuditId in $CriticalAuditIds) {
    if ($Json.audits.PSObject.Properties.Name -contains $AuditId) {
      $Audit = $Json.audits.$AuditId
      $Rows += [pscustomobject]@{
        audit = $AuditId
        score = Get-ObjectProperty -Object $Audit -Name "score"
        scoreDisplayMode = Get-ObjectProperty -Object $Audit -Name "scoreDisplayMode"
        title = Get-ObjectProperty -Object $Audit -Name "title"
        displayValue = Get-ObjectProperty -Object $Audit -Name "displayValue"
        description = Get-ObjectProperty -Object $Audit -Name "description"
      }
    }
  }

  if ($Rows.Count -eq 0) {
    "audit,score,scoreDisplayMode,title,displayValue,description" | Set-Content -LiteralPath $Path -Encoding UTF8
  } else {
    $Rows | Export-Csv -LiteralPath $Path -NoTypeInformation -Encoding UTF8
  }

  return $Rows
}

function Assert-NonEmptyFile {
  param(
    [string]$Code,
    [string]$Path
  )

  if (-not (Test-Path -LiteralPath $Path)) {
    Add-Failure -Code $Code -Message "$Path was not created"
    return
  }

  $Item = Get-Item -LiteralPath $Path

  if ($Item.Length -le 0) {
    Add-Failure -Code $Code -Message "$Path is empty"
  }
}

function Assert-FileExists {
  param(
    [string]$Code,
    [string]$Path
  )

  if (-not (Test-Path -LiteralPath $Path)) {
    Add-Failure -Code $Code -Message "$Path was not created"
  }
}

if ($Url -notmatch '^https?://') {
  throw "URL_MUST_START_WITH_HTTP_OR_HTTPS"
}

$Root = Resolve-RepoRoot
$Base = $Url.TrimEnd("/")
$Stamp = Get-Date -Format "yyyyMMdd-HHmmss-fff"
$OutDir = Join-Path $Root "tools\seo\reports\$Stamp"
$ErrFile = Join-Path $OutDir "stderr.txt"
$SummaryPath = Join-Path $OutDir "summary.json"
$LighthouseJson = Join-Path $OutDir "lighthouse.json"
$LighthouseHtml = Join-Path $OutDir "lighthouse.html"
$CriticalAuditsCsv = Join-Path $OutDir "critical-audits.csv"
$LighthouseBasePath = Join-Path $OutDir "lighthouse"
$Failures = New-Object System.Collections.ArrayList

New-Item -ItemType Directory -Force -Path $OutDir | Out-Null
New-Item -ItemType File -Force -Path $ErrFile | Out-Null

$Summary = [ordered]@{
  timestamp = (Get-Date).ToString("o")
  repoRoot = $Root
  url = $Base
  reportDir = $OutDir
  thresholds = [ordered]@{
    seo = 95
  }
  checks = [ordered]@{}
  lighthouse = [ordered]@{}
  criticalAudits = @()
  failures = @()
  green = $false
}

Push-Location -LiteralPath $Root

try {
  Invoke-HttpCheck -Name "homepage" -Target $Base
  Invoke-HttpCheck -Name "robots" -Target "$Base/robots.txt"
  Invoke-HttpCheck -Name "sitemap" -Target "$Base/sitemap.xml"

  $OldPreference = $ErrorActionPreference
  $ErrorActionPreference = "Continue"

  npx --yes lighthouse "$Base" `
    --output=json `
    --output=html `
    --output-path="$LighthouseBasePath" `
    --chrome-flags="--headless=new --no-sandbox" `
    2>$ErrFile

  $LighthouseExitCode = $LASTEXITCODE
  $ErrorActionPreference = $OldPreference

  $Summary.checks["lighthouseExitCode"] = [ordered]@{
    ok = ($LighthouseExitCode -eq 0)
    exitCode = $LighthouseExitCode
  }

  if ($LighthouseExitCode -ne 0) {
    Add-Failure -Code "LIGHTHOUSE_EXIT_CODE_NON_ZERO" -Message "Lighthouse exited with code $LighthouseExitCode"
  }

  [void](Find-ReportFile -Candidates @(
      $LighthouseJson,
      "$LighthouseBasePath.report.json",
      "$LighthouseBasePath.json"
    ) -Target $LighthouseJson)

  [void](Find-ReportFile -Candidates @(
      $LighthouseHtml,
      "$LighthouseBasePath.report.html",
      "$LighthouseBasePath.html"
    ) -Target $LighthouseHtml)

  Assert-NonEmptyFile -Code "LIGHTHOUSE_JSON_NOT_CREATED" -Path $LighthouseJson
  Assert-NonEmptyFile -Code "LIGHTHOUSE_HTML_NOT_CREATED" -Path $LighthouseHtml

  if (Test-Path -LiteralPath $LighthouseJson) {
    try {
      $Lighthouse = Get-Content -LiteralPath $LighthouseJson -Raw -Encoding UTF8 | ConvertFrom-Json
      $PerformanceScore = Get-LighthouseCategoryScore -Json $Lighthouse -CategoryId "performance"
      $AccessibilityScore = Get-LighthouseCategoryScore -Json $Lighthouse -CategoryId "accessibility"
      $BestPracticesScore = Get-LighthouseCategoryScore -Json $Lighthouse -CategoryId "best-practices"
      $SeoScore = Get-LighthouseCategoryScore -Json $Lighthouse -CategoryId "seo"

      $Summary.lighthouse = [ordered]@{
        ok = $true
        performance = $PerformanceScore
        accessibility = $AccessibilityScore
        bestPractices = $BestPracticesScore
        seo = $SeoScore
        htmlReport = $LighthouseHtml
        jsonReport = $LighthouseJson
      }

      foreach ($Category in @("performance", "accessibility", "bestPractices", "seo")) {
        if ($null -eq $Summary.lighthouse[$Category]) {
          Add-Failure -Code "LIGHTHOUSE_$($Category.ToUpperInvariant())_SCORE_MISSING" -Message "$Category score was not present in lighthouse.json"
        }
      }

      $AuditRows = Write-CriticalAuditsCsv -Json $Lighthouse -Path $CriticalAuditsCsv
      $Summary.criticalAudits = @($AuditRows)

      if ($null -ne $SeoScore -and $SeoScore -lt 95) {
        Add-Failure -Code "SEO_SCORE_BELOW_95" -Message "Lighthouse SEO score was $SeoScore"
      }
    } catch {
      Add-Failure -Code "LIGHTHOUSE_JSON_PARSE_FAILED" -Message $_.Exception.Message
    }
  } else {
    "audit,score,scoreDisplayMode,title,displayValue,description" | Set-Content -LiteralPath $CriticalAuditsCsv -Encoding UTF8
  }

  Assert-NonEmptyFile -Code "CRITICAL_AUDITS_CSV_NOT_CREATED" -Path $CriticalAuditsCsv
  Assert-FileExists -Code "STDERR_TXT_NOT_CREATED" -Path $ErrFile
} finally {
  Pop-Location
}

$Summary.failures = @($Failures)
$Summary.green = ($Failures.Count -eq 0)
$Summary | ConvertTo-Json -Depth 20 | Set-Content -LiteralPath $SummaryPath -Encoding UTF8

Assert-NonEmptyFile -Code "SUMMARY_JSON_NOT_CREATED" -Path $SummaryPath

Write-Host "SEO_AUDIT_REPORT_DIR=$OutDir"
Write-Host "SEO_AUDIT_SUMMARY=$SummaryPath"
Write-Host "homepage status=$(Get-CheckStatus -Name "homepage")"
Write-Host "robots status=$(Get-CheckStatus -Name "robots")"
Write-Host "sitemap status=$(Get-CheckStatus -Name "sitemap")"

if ($Summary.lighthouse.Contains("seo")) {
  Write-Host "SEO score=$($Summary.lighthouse.seo)"
  Write-Host "performance score=$($Summary.lighthouse.performance)"
  Write-Host "accessibility score=$($Summary.lighthouse.accessibility)"
  Write-Host "best-practices score=$($Summary.lighthouse.bestPractices)"
}

if ($Failures.Count -gt 0) {
  $FailureCodes = ($Failures | ForEach-Object { $_.code }) -join ","
  throw "SEO_AUDIT_FAILED: $FailureCodes"
}

Write-Host "_GREEN=true"
