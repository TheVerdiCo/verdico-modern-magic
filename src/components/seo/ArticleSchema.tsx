import { Helmet } from "react-helmet-async";
import type { RuArticle } from "@/content/insights/ruArticles";
import { BRAND_NAME_RU, SITE_URL, toAbsoluteFinalUrl } from "@/lib/seo";

interface ArticleSchemaProps {
  article: RuArticle;
  path: string;
}

const ArticleSchema = ({ article, path }: ArticleSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": toAbsoluteFinalUrl(path),
    },
    publisher: {
      "@type": "Organization",
      name: BRAND_NAME_RU,
      url: SITE_URL,
    },
    inLanguage: "ru-RU",
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default ArticleSchema;
