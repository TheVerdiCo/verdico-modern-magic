param(
  [string]$BaseUrl = "https://www.verdico.ru"
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$Base = $BaseUrl.TrimEnd("/")
$RequiredUrls = @(
  "$Base/",
  "$Base/ru/privlechenie-investitsiy",
  "$Base/ru/sdelki-m-a",
  "$Base/ru/yuridicheskoe-soprovozhdenie-investitsiy",
  "$Base/ru/mezhdunarodnyy-yurist-rossiya",
  "$Base/ru/arbitrazhnye-spory",
  "$Base/ru/nedvizhimost-i-arenda",
  "$Base/ru/o-nas",
  "$Base/ru/kontakty",
  "$Base/ru/insights",
  "$Base/ru/insights/samovolnaya-rekonstruktsiya-i-pereplanirovka",
  "$Base/ru/insights/bezdejstvie-pristava",
  "$Base/ru/insights/subsidiarnaya-otvetstvennost-prezumptsii",
  "$Base/ru/insights/dogovor-arendy-kak-dokazatelstvo",
  "$Base/ru/insights/osparivanie-kadastrovoj-stoimosti",
  "$Base/ru/insights/registratsiya-tovarnogo-znaka-podgotovka-dokumentov"
)

$Failures = New-Object System.Collections.Generic.List[string]
$UrlErrorCount = 0
$SitemapUrl = "$Base/sitemap.xml"
$SitemapLocs = @()

try {
  $SitemapResponse = Invoke-WebRequest -Uri $SitemapUrl -UseBasicParsing -MaximumRedirection 5 -TimeoutSec 30
  $SitemapStatus = [int]$SitemapResponse.StatusCode
  [xml]$SitemapXml = $SitemapResponse.Content
  $SitemapLocs = @($SitemapXml.urlset.url | ForEach-Object { [string]$_.loc })
} catch {
  $SitemapStatus = "ERROR"
  $Failures.Add("SITEMAP_FETCH_ERROR") | Out-Null
}

$DuplicateLocCount = @($SitemapLocs | Group-Object | Where-Object { $_.Count -gt 1 }).Count
$WrongHostLocCount = @($SitemapLocs | Where-Object {
    $Uri = [uri]$_
    $Uri.Scheme -ne "https" -or $Uri.Host -ne "www.verdico.ru"
  }).Count
$PolicyCount = @($SitemapLocs | Where-Object { $_ -eq "$Base/policy" }).Count
$RealEstateCount = @($SitemapLocs | Where-Object { $_ -eq "$Base/ru/nedvizhimost-i-arenda" }).Count

foreach ($Url in $RequiredUrls) {
  $InSitemap = $SitemapLocs -contains $Url

  try {
    $Response = Invoke-WebRequest -Uri $Url -UseBasicParsing -MaximumRedirection 5 -TimeoutSec 30
    $Status = [int]$Response.StatusCode
    $Ok = ($Status -eq 200)
  } catch {
    $Status = "ERROR"
    $Ok = $false
  }

  if (-not $Ok) {
    $UrlErrorCount += 1
    $Failures.Add("URL_NOT_200:$Url") | Out-Null
  }

  if (-not $InSitemap) {
    $Failures.Add("URL_NOT_IN_SITEMAP:$Url") | Out-Null
  }

  Write-Host "URL=$Url STATUS=$Status InSitemap=$InSitemap"
}

if ($SitemapStatus -ne 200) {
  $Failures.Add("SITEMAP_STATUS_NOT_200") | Out-Null
}

if ($DuplicateLocCount -ne 0) {
  $Failures.Add("SITEMAP_DUPLICATE_LOC") | Out-Null
}

if ($WrongHostLocCount -ne 0) {
  $Failures.Add("SITEMAP_WRONG_HOST_LOC") | Out-Null
}

if ($PolicyCount -ne 0) {
  $Failures.Add("POLICY_PRESENT_IN_SITEMAP") | Out-Null
}

if ($RealEstateCount -ne 1) {
  $Failures.Add("REAL_ESTATE_SITEMAP_COUNT_NOT_ONE") | Out-Null
}

Write-Host "SITEMAP_STATUS=$SitemapStatus"
Write-Host "SITEMAP_LOC_COUNT=$($SitemapLocs.Count)"
Write-Host "DUPLICATE_LOC_COUNT=$DuplicateLocCount"
Write-Host "WRONG_HOST_LOC_COUNT=$WrongHostLocCount"
Write-Host "POLICY_COUNT=$PolicyCount"
Write-Host "REAL_ESTATE_COUNT=$RealEstateCount"
Write-Host "URL_ERROR_COUNT=$UrlErrorCount"

if ($Failures.Count -gt 0) {
  throw "POWERSHELL_INDEXING_PREFLIGHT_FAILED: $($Failures -join ',')"
}

Write-Host "POWERSHELL_INDEXING_PREFLIGHT_GREEN=true"
