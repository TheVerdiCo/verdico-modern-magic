import { Helmet } from "react-helmet-async";
import { toAbsoluteFinalUrl } from "@/lib/seo";

interface BreadcrumbSchemaProps {
  articleTitle: string;
  articlePath: string;
}

const BreadcrumbSchema = ({ articleTitle, articlePath }: BreadcrumbSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Аналитика",
        item: toAbsoluteFinalUrl("/ru/insights"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: articleTitle,
        item: toAbsoluteFinalUrl(articlePath),
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default BreadcrumbSchema;
