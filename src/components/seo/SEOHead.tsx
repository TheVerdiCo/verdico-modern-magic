import { Helmet } from "react-helmet-async";
import { getHreflangAlternates, getLangFromPath, SITE_URL, toAbsoluteFinalUrl } from "@/lib/seo";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

const SEOHead = ({ title, description, path, canonicalUrl: canonicalUrlOverride, noIndex = false }: SEOHeadProps) => {
  const lang = getLangFromPath(path);
  const canonicalUrl = canonicalUrlOverride
    ? toAbsoluteFinalUrl(canonicalUrlOverride)
    : toAbsoluteFinalUrl(path);
  const alternates = getHreflangAlternates(path);
  const ogLocale = lang === "ru" ? "ru_RU" : lang === "fr" ? "fr_FR" : "en_US";
  const siteName = lang === "ru" ? "Верди и Ко." : "Verdi & Co.";

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang tags */}
      {!noIndex && alternates.ru && (
        <link rel="alternate" hrefLang="ru" href={toAbsoluteFinalUrl(alternates.ru)} />
      )}
      {!noIndex && alternates.en && (
        <link rel="alternate" hrefLang="en" href={toAbsoluteFinalUrl(alternates.en)} />
      )}
      {!noIndex && alternates.fr && (
        <link rel="alternate" hrefLang="fr" href={toAbsoluteFinalUrl(alternates.fr)} />
      )}
      {!noIndex && (
        <link rel="alternate" hrefLang="x-default" href={toAbsoluteFinalUrl(alternates["x-default"] ?? "/")} />
      )}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_URL}/og/verdico-social-preview.png`} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}/og/verdico-social-preview.png`} />

      {noIndex && <meta name="robots" content="noindex, follow" />}
    </Helmet>
  );
};

export default SEOHead;
