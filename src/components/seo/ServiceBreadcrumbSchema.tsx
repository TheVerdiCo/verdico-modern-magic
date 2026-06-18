import { Helmet } from "react-helmet-async";
import { toAbsoluteFinalUrl } from "@/lib/seo";

interface ServiceBreadcrumbItem {
  name: string;
  path: string;
}

interface ServiceBreadcrumbSchemaProps {
  items: ServiceBreadcrumbItem[];
}

const ServiceBreadcrumbSchema = ({ items }: ServiceBreadcrumbSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteFinalUrl(item.path),
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default ServiceBreadcrumbSchema;
