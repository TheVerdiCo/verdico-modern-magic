import InternationalSeoPageTemplate from "@/components/InternationalSeoPageTemplate";

const HomeEn = () => (
  <InternationalSeoPageTemplate
    lang="en"
    path="/en"
    title="Legal services in Moscow for international clients | Verdico"
    description="English-speaking legal support in Moscow for business, investment, M&A, disputes, enforcement, real estate and Russia-related legal matters. Confidential consultations by appointment and online."
    eyebrow="Russian-law legal support"
    h1="Legal services in Moscow for international clients"
    intro="Verdico provides confidential Russian-law legal support for foreign businesses, investors, executives, founders, property owners and creditors. Work starts with a clear assessment of the legal position, commercial risk and the practical steps available before documents, negotiations or proceedings move forward."
    sections={[
      {
        title: "Who we support",
        items: [
          "Foreign entrepreneurs, investors and executives with Russia-related business matters.",
          "Companies reviewing contracts, transaction structures, disputes or enforcement options.",
          "Family offices, creditors and property owners who need discreet legal coordination in Russia.",
        ],
      },
      {
        title: "Core matters",
        items: [
          "Contracts, corporate documents, investment support and transaction risk allocation.",
          "M&A, due diligence, business negotiations and implementation support.",
          "Commercial disputes, arbitration, enforcement, recovery strategy and real estate matters.",
        ],
      },
    ]}
    processTitle="How the first step works"
    processItems={[
      "Send a short description of the matter and the documents that define the current position.",
      "We check scope, urgency and possible conflicts before proposing a consultation format.",
      "Consultations are available by appointment and online in Russian, English and French.",
    ]}
    linksTitle="English-language legal pages"
    links={[
      {
        title: "Legal services in Moscow",
        description: "A compact hub for business-focused legal support in English.",
        href: "/en/legal-services-moscow",
      },
      {
        title: "Legal counsel near Dinamo",
        description: "Local availability for foreign clients in the Dinamo / Petrovsky Park area.",
        href: "/en/english-speaking-legal-counsel-moscow-dinamo",
      },
      {
        title: "Investment legal support",
        description: "Structuring, due diligence, documentation and implementation support.",
        href: "/en/investment-legal-support-russia",
      },
      {
        title: "M&A transactions",
        description: "Legal support for acquisition, sale and business transaction work.",
        href: "/en/ma-transactions-russia",
      },
      {
        title: "Arbitration and enforcement",
        description: "Commercial disputes, enforcement and recovery strategy in Russia.",
        href: "/en/arbitration-enforcement-russia",
      },
      {
        title: "Version française",
        description: "Services juridiques pour clients francophones ayant des intérêts en Russie.",
        href: "/fr",
      },
    ]}
    schemaType="organization"
  />
);

export default HomeEn;
