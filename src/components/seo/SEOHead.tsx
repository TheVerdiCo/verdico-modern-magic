import { Helmet } from "react-helmet-async";
import { SITE_URL, routeAlternates, getLangFromPath } from "@/lib/seo";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

const SEOHead = ({ title, description, path, canonicalUrl: canonicalUrlOverride, noIndex = false }: SEOHeadProps) => {
  const lang = getLangFromPath(path);
  const alternatePath = routeAlternates[path];
  const toAbsoluteUrl = (targetPath: string) =>
    targetPath === "/" ? `${SITE_URL}/` : `${SITE_URL}${targetPath}`;
  const canonicalPath = path === "/ru" ? "/" : path;
  const canonicalUrl = canonicalUrlOverride ?? toAbsoluteUrl(canonicalPath);
  const alternateUrl = alternatePath ? toAbsoluteUrl(alternatePath) : null;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang tags */}
      <link rel="alternate" hrefLang={lang} href={canonicalUrl} />
      {alternateUrl && (
        <link rel="alternate" hrefLang={lang === "ru" ? "en" : "ru"} href={alternateUrl} />
      )}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_URL}/og/verdico-social-preview.png`} />
      <meta property="og:locale" content={lang === "ru" ? "ru_RU" : "en_US"} />
      <meta property="og:site_name" content={lang === "ru" ? "Верди и Ко." : "Verdi & Co."} />

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
