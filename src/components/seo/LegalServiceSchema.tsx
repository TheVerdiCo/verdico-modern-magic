import { Helmet } from "react-helmet-async";
import { SITE_URL, BRAND_NAME, toAbsoluteFinalUrl } from "@/lib/seo";

interface LegalServiceSchemaProps {
  name: string;
  description: string;
  serviceType: string;
  url: string;
  providerName?: string;
}

const LegalServiceSchema = ({ name, description, serviceType, url, providerName = BRAND_NAME }: LegalServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: name,
    description: description,
    serviceType: serviceType,
    url: toAbsoluteFinalUrl(url),
    provider: {
      "@type": "Organization",
      name: providerName,
      url: SITE_URL,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Moscow",
      },
      {
        "@type": "Country",
        name: "Russia",
      },
    ],
    availableLanguage: ["Russian", "English", "French"],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default LegalServiceSchema;
