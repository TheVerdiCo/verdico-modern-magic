param(
  [ValidateNotNullOrEmpty()]
  [string]$Url = "http://localhost:4173/"
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

function Get-CategoryScore {
  param(
    [object]$Lighthouse,
    [string]$CategoryId
  )

  $Categories = Get-ObjectProperty -Object $Lighthouse -Name "categories"
  $Category = Get-ObjectProperty -Object $Categories -Name $CategoryId
  $Score = Get-ObjectProperty -Object $Category -Name "score"

  if ($null -eq $Score) {
    return $null
  }

  return [math]::Round(([double]$Score) * 100, 2)
}

function Get-AuditMetric {
  param(
    [object]$Lighthouse,
    [string]$AuditId
  )

  $Audits = Get-ObjectProperty -Object $Lighthouse -Name "audits"
  $Audit = Get-ObjectProperty -Object $Audits -Name $AuditId

  if ($null -eq $Audit) {
    return $null
  }

  return [ordered]@{
    id = $AuditId
    displayValue = Get-ObjectProperty -Object $Audit -Name "displayValue"
    numericValue = Get-ObjectProperty -Object $Audit -Name "numericValue"
    score = Get-ObjectProperty -Object $Audit -Name "score"
  }
}

function Get-OpportunityAudit {
  param(
    [object]$Lighthouse,
    [string]$AuditId
  )

  $Audits = Get-ObjectProperty -Object $Lighthouse -Name "audits"
  $Audit = Get-ObjectProperty -Object $Audits -Name $AuditId

  if ($null -eq $Audit) {
    return $null
  }

  return [ordered]@{
    id = $AuditId
    title = Get-ObjectProperty -Object $Audit -Name "title"
    displayValue = Get-ObjectProperty -Object $Audit -Name "displayValue"
    numericValue = Get-ObjectProperty -Object $Audit -Name "numericValue"
    score = Get-ObjectProperty -Object $Audit -Name "score"
    details = Get-ObjectProperty -Object $Audit -Name "details"
  }
}

function Assert-NonEmptyFile {
  param(
    [string]$Code,
    [string]$Path
  )

  if (-not (Test-Path -LiteralPath $Path)) {
    Add-Failure -Code $Code -Message "$Path was not created"
    return $false
  }

  if ((Get-Item -LiteralPath $Path).Length -le 0) {
    Add-Failure -Code $Code -Message "$Path is empty"
    return $false
  }

  return $true
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

function Test-LighthouseCleanupEperm {
  param([string]$Path)

  if (-not (Test-Path -LiteralPath $Path)) {
    return $false
  }

  $ErrorText = Get-Content -LiteralPath $Path -Raw -Encoding UTF8
  $HasWindowsEperm = $ErrorText -match "EPERM,\s*Permission denied"
  $HasLighthouseTempDir = $ErrorText -match "Temp[\\/]+lighthouse\.\d+"
  $HasChromeLauncherCleanup = $ErrorText -match "Launcher\.destroyTmp"

  return ($HasWindowsEperm -and $HasLighthouseTempDir -and $HasChromeLauncherCleanup)
}

function Assert-MinimumScore {
  param(
    [string]$Category,
    [object]$Score,
    [double]$Minimum
  )

  if ($null -eq $Score) {
    Add-Failure -Code "LIGHTHOUSE_$($Category.ToUpperInvariant())_SCORE_MISSING" -Message "$Category score was not present in lighthouse.json"
    return
  }

  if ([double]$Score -lt $Minimum) {
    Add-Failure -Code "LIGHTHOUSE_$($Category.ToUpperInvariant())_SCORE_BELOW_$([int]$Minimum)" -Message "$Category score was $Score; required minimum is $Minimum"
  }
}

if ($Url -notmatch "^https?://") {
  throw "URL_MUST_START_WITH_HTTP_OR_HTTPS"
}

$Root = Resolve-RepoRoot
$TargetUrl = $Url.Trim()
$Stamp = Get-Date -Format "yyyyMMdd-HHmmss-fff"
$OutDir = Join-Path $Root "tools\seo\local-lighthouse-reports\$Stamp"
$ErrFile = Join-Path $OutDir "stderr.txt"
$SummaryPath = Join-Path $OutDir "summary.json"
$LighthouseJson = Join-Path $OutDir "lighthouse.json"
$LighthouseHtml = Join-Path $OutDir "lighthouse.html"
$Failures = New-Object System.Collections.ArrayList

New-Item -ItemType Directory -Force -Path $OutDir | Out-Null
New-Item -ItemType File -Force -Path $ErrFile | Out-Null

$Summary = [ordered]@{
  timestamp = (Get-Date).ToString("o")
  repoRoot = $Root
  url = $TargetUrl
  reportDir = $OutDir
  jsonReportPath = $LighthouseJson
  htmlReportPath = $LighthouseHtml
  stderrPath = $ErrFile
  lighthouseExitCode = $null
  lighthouseExitCodeIgnored = $false
  lighthouseExitCodeIgnoredReason = $null
  thresholds = [ordered]@{
    seo = 95
    accessibility = 90
    bestPractices = 90
    performance = 70
  }
  scores = [ordered]@{}
  metrics = [ordered]@{}
  opportunities = [ordered]@{}
  failures = @()
  green = $false
}

Push-Location -LiteralPath $Root

try {
  $OldPreference = $ErrorActionPreference
  $ErrorActionPreference = "Continue"

  & npx --yes lighthouse "$TargetUrl" `
    --output=json `
    --output=html `
    --output-path="$LighthouseJson" `
    --chrome-flags="--headless=new" `
    2>$ErrFile

  $LighthouseExitCode = $LASTEXITCODE
  $ErrorActionPreference = $OldPreference
} finally {
  $ErrorActionPreference = "Stop"
  Pop-Location
}

if ($null -eq $LighthouseExitCode) {
  $LighthouseExitCode = -1
}

$Summary.lighthouseExitCode = $LighthouseExitCode

[void](Find-ReportFile -Candidates @(
    $LighthouseJson,
    (Join-Path $OutDir "lighthouse.report.json"),
    (Join-Path $OutDir "lighthouse.json.report.json")
  ) -Target $LighthouseJson)

[void](Find-ReportFile -Candidates @(
    $LighthouseHtml,
    (Join-Path $OutDir "lighthouse.report.html"),
    (Join-Path $OutDir "lighthouse.json.report.html")
  ) -Target $LighthouseHtml)

$LighthouseJsonReady = Assert-NonEmptyFile -Code "LIGHTHOUSE_JSON_NOT_CREATED" -Path $LighthouseJson
$LighthouseHtmlReady = Assert-NonEmptyFile -Code "LIGHTHOUSE_HTML_NOT_CREATED" -Path $LighthouseHtml
$LighthouseParsedSuccessfully = $false
$LighthouseScoresExtractedSuccessfully = $false

if ($LighthouseJsonReady) {
  try {
    $Lighthouse = Get-Content -LiteralPath $LighthouseJson -Raw -Encoding UTF8 | ConvertFrom-Json
    $LighthouseParsedSuccessfully = $true

    $Summary.scores.performance = Get-CategoryScore -Lighthouse $Lighthouse -CategoryId "performance"
    $Summary.scores.accessibility = Get-CategoryScore -Lighthouse $Lighthouse -CategoryId "accessibility"
    $Summary.scores.bestPractices = Get-CategoryScore -Lighthouse $Lighthouse -CategoryId "best-practices"
    $Summary.scores.seo = Get-CategoryScore -Lighthouse $Lighthouse -CategoryId "seo"

    Assert-MinimumScore -Category "seo" -Score $Summary.scores.seo -Minimum 95
    Assert-MinimumScore -Category "accessibility" -Score $Summary.scores.accessibility -Minimum 90
    Assert-MinimumScore -Category "bestPractices" -Score $Summary.scores.bestPractices -Minimum 90
    Assert-MinimumScore -Category "performance" -Score $Summary.scores.performance -Minimum 70

    $LighthouseScoresExtractedSuccessfully = (
      $null -ne $Summary.scores.performance -and
      $null -ne $Summary.scores.accessibility -and
      $null -ne $Summary.scores.bestPractices -and
      $null -ne $Summary.scores.seo
    )

    $Summary.metrics.lcp = Get-AuditMetric -Lighthouse $Lighthouse -AuditId "largest-contentful-paint"
    $Summary.metrics.fcp = Get-AuditMetric -Lighthouse $Lighthouse -AuditId "first-contentful-paint"
    $Summary.metrics.speedIndex = Get-AuditMetric -Lighthouse $Lighthouse -AuditId "speed-index"
    $Summary.metrics.tbt = Get-AuditMetric -Lighthouse $Lighthouse -AuditId "total-blocking-time"
    $Summary.metrics.cls = Get-AuditMetric -Lighthouse $Lighthouse -AuditId "cumulative-layout-shift"
    $Summary.metrics.totalByteWeight = Get-AuditMetric -Lighthouse $Lighthouse -AuditId "total-byte-weight"
    $Summary.opportunities.renderBlockingResources = Get-OpportunityAudit -Lighthouse $Lighthouse -AuditId "render-blocking-resources"
    $Summary.opportunities.unusedJavaScript = Get-OpportunityAudit -Lighthouse $Lighthouse -AuditId "unused-javascript"
  } catch {
    Add-Failure -Code "LIGHTHOUSE_JSON_PARSE_FAILED" -Message $_.Exception.Message
  }
}

if ($LighthouseExitCode -ne 0) {
  if ($LighthouseJsonReady -and $LighthouseHtmlReady -and $LighthouseParsedSuccessfully -and $LighthouseScoresExtractedSuccessfully -and (Test-LighthouseCleanupEperm -Path $ErrFile)) {
    $Summary.lighthouseExitCodeIgnored = $true
    $Summary.lighthouseExitCodeIgnoredReason = "LIGHTHOUSE_EXIT_CODE_NON_ZERO_CLEANUP_EPERM_IGNORED"
  } else {
    Add-Failure -Code "LIGHTHOUSE_EXIT_CODE_NON_ZERO" -Message "Lighthouse exited with code $LighthouseExitCode"
  }
}

$Summary.failures = @($Failures)
$Summary.green = ($Failures.Count -eq 0)
$Summary | ConvertTo-Json -Depth 40 | Set-Content -LiteralPath $SummaryPath -Encoding UTF8

Write-Host "LOCAL_LIGHTHOUSE_REPORT_DIR=$OutDir"
Write-Host "LOCAL_LIGHTHOUSE_SUMMARY=$SummaryPath"
Write-Host "Lighthouse exit code=$LighthouseExitCode"
Write-Host "Lighthouse exit code ignored=$($Summary.lighthouseExitCodeIgnored)"

if ($LighthouseScoresExtractedSuccessfully) {
  Write-Host "SEO score=$($Summary.scores.seo)"
  Write-Host "performance score=$($Summary.scores.performance)"
  Write-Host "accessibility score=$($Summary.scores.accessibility)"
  Write-Host "best-practices score=$($Summary.scores.bestPractices)"
  Write-Host "LCP=$($Summary.metrics.lcp.displayValue)"
  Write-Host "FCP=$($Summary.metrics.fcp.displayValue)"
  Write-Host "Speed Index=$($Summary.metrics.speedIndex.displayValue)"
  Write-Host "TBT=$($Summary.metrics.tbt.displayValue)"
  Write-Host "CLS=$($Summary.metrics.cls.displayValue)"
  Write-Host "Total byte weight=$($Summary.metrics.totalByteWeight.displayValue)"
  $RenderBlockingDisplay = if ($null -ne $Summary.opportunities.renderBlockingResources) { $Summary.opportunities.renderBlockingResources.displayValue } else { "not present" }
  $UnusedJavaScriptDisplay = if ($null -ne $Summary.opportunities.unusedJavaScript) { $Summary.opportunities.unusedJavaScript.displayValue } else { "not present" }
  Write-Host "Render blocking=$RenderBlockingDisplay"
  Write-Host "Unused JavaScript=$UnusedJavaScriptDisplay"
}

if ($Failures.Count -gt 0) {
  $FailureCodes = ($Failures | ForEach-Object { $_.code }) -join ","
  throw "LOCAL_LIGHTHOUSE_AUDIT_FAILED: $FailureCodes"
}

Write-Host "_GREEN=true"
