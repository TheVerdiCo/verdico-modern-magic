import { Helmet } from "react-helmet-async";
import { SITE_URL, BRAND_NAME, EMAIL } from "@/lib/seo";

const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND_NAME,
    alternateName: "Verdi & Co.",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.png`,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      addressCountry: "RU",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Russia",
      },
      {
        "@type": "Place",
        name: "International",
      },
    ],
    knowsLanguage: ["ru", "en"],
    description: "Юридические услуги для бизнеса: инвестиции, M&A, международные сделки, арбитраж.",
    sameAs: [],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default OrganizationSchema;
