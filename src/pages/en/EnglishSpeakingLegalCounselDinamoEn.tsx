import InternationalSeoPageTemplate from "@/components/InternationalSeoPageTemplate";

const EnglishSpeakingLegalCounselDinamoEn = () => (
  <InternationalSeoPageTemplate
    lang="en"
    path="/en/english-speaking-legal-counsel-moscow-dinamo"
    title="English-speaking legal counsel near Dinamo, Moscow | Verdico"
    description="English-speaking legal counsel in Moscow near Dinamo and Petrovsky Park. Support for foreign clients on business, investment, contracts, disputes, enforcement and real estate matters."
    eyebrow="Local availability"
    h1="English-speaking legal counsel near Dinamo, Moscow"
    intro="Verdico provides English-speaking Russian-law support for foreign clients who need consultations in Moscow, including availability by appointment in the Dinamo / Petrovsky Park area and online. The page is for service availability only and does not state or imply a public walk-in office."
    sections={[
      {
        title: "Suitable matters",
        items: [
          "Business and investment questions involving Russian contracts, assets or counterparties.",
          "M&A, due diligence, shareholder documents and transaction implementation issues.",
          "Commercial disputes, enforcement, debt recovery strategy and real estate-related questions.",
        ],
      },
      {
        title: "How local consultations are handled",
        items: [
          "Meetings are arranged by appointment after a brief conflict and scope check.",
          "Online consultations are available when documents, timelines or location make that more efficient.",
          "Work can be coordinated in Russian, English and French for clients and advisers.",
        ],
      },
    ]}
    processTitle="Before a meeting"
    processItems={[
      "Send the matter summary, relevant documents and any urgent deadlines to admin@verdico.ru.",
      "We confirm whether the question is within scope and propose the format for the consultation.",
      "The consultation focuses on legal position, practical options, risks and the next documents or actions required.",
    ]}
    linksTitle="Related English pages"
    links={[
      {
        title: "Legal services in Moscow",
        description: "General English-language legal-services hub.",
        href: "/en/legal-services-moscow",
      },
      {
        title: "International lawyer",
        description: "Russian-law counsel for international Russia-related matters.",
        href: "/en/international-lawyer-russia",
      },
      {
        title: "Page en français",
        description: "French-language local page for the same service availability.",
        href: "/fr/juriste-francophone-moscou-dinamo",
      },
    ]}
    serviceType="English-speaking legal counsel near Dinamo and Petrovsky Park"
  />
);

export default EnglishSpeakingLegalCounselDinamoEn;
