import InternationalSeoPageTemplate from "@/components/InternationalSeoPageTemplate";

const LegalServicesMoscowEn = () => (
  <InternationalSeoPageTemplate
    lang="en"
    path="/en/legal-services-moscow"
    title="Legal services in Moscow in English | Verdico"
    description="Business-focused legal services in Moscow in English: contracts, investment support, M&A, disputes, enforcement, real estate and cross-border matters."
    eyebrow="Services in English"
    h1="Legal services in Moscow in English"
    intro="Foreign clients often need Russian-law advice that is concise, commercially grounded and understandable without translation friction. Verdico supports business and private-capital matters where contracts, assets, negotiations or disputes are connected with Russia."
    sections={[
      {
        title: "Business legal support",
        items: [
          "Contract review, negotiation support and risk allocation for Russia-related projects.",
          "Investment structuring, due diligence, corporate documents and implementation planning.",
          "M&A, asset deals, shareholder arrangements and coordination with counterparties.",
        ],
      },
      {
        title: "Disputes and assets",
        items: [
          "Commercial disputes, arbitration, enforcement proceedings and recovery strategy.",
          "Real estate and lease matters where ownership, control or documentation requires review.",
          "Coordination in Russian, English and French for clients and advisers working across borders.",
        ],
      },
    ]}
    processTitle="A disciplined first contact"
    processItems={[
      "We begin with the factual background, documents and the commercial result the client needs.",
      "The first assessment separates legal risk, negotiation leverage and immediate procedural deadlines.",
      "Consultations are available by appointment and online in Russian, English and French.",
    ]}
    linksTitle="Key English service pages"
    links={[
      {
        title: "Investment legal support",
        description: "Structuring, due diligence and transaction documents for investors.",
        href: "/en/investment-legal-support-russia",
      },
      {
        title: "M&A transactions",
        description: "Support for acquisitions, disposals and business transactions in Russia.",
        href: "/en/ma-transactions-russia",
      },
      {
        title: "Arbitration and enforcement",
        description: "Commercial disputes, enforcement and recovery strategy.",
        href: "/en/arbitration-enforcement-russia",
      },
      {
        title: "French service hub",
        description: "Equivalent French-language legal-services page.",
        href: "/fr/services-juridiques-moscou",
      },
    ]}
    serviceType="English-language business legal services in Moscow"
  />
);

export default LegalServicesMoscowEn;
