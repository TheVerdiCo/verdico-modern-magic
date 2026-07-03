import InternationalSeoPageTemplate from "@/components/InternationalSeoPageTemplate";

const HomeFr = () => (
  <InternationalSeoPageTemplate
    lang="fr"
    path="/fr"
    title="Services juridiques à Moscou pour clients internationaux | Verdico"
    description="Accompagnement juridique en français et en anglais à Moscou pour les entreprises, investisseurs, dirigeants et clients étrangers ayant des intérêts en Russie."
    eyebrow="Droit russe et dossiers internationaux"
    h1="Services juridiques à Moscou pour clients internationaux"
    intro="Verdico accompagne les entreprises, investisseurs, dirigeants, entrepreneurs, créanciers et propriétaires étrangers confrontés à des questions de droit russe. L'approche est confidentielle, structurée et orientée vers les risques concrets avant toute décision, négociation ou procédure."
    sections={[
      {
        title: "Clients accompagnés",
        items: [
          "Entrepreneurs, investisseurs et dirigeants francophones ayant des intérêts en Russie.",
          "Sociétés qui doivent analyser des contrats, transactions, litiges ou mesures d'exécution.",
          "Clients privés, créanciers et propriétaires d'actifs nécessitant une coordination juridique discrète.",
        ],
      },
      {
        title: "Domaines principaux",
        items: [
          "Contrats, accompagnement des investissements, structuration et documentation.",
          "Transactions M&A, due diligence, négociations et mise en œuvre.",
          "Litiges commerciaux, arbitrage, exécution, recouvrement et immobilier.",
        ],
      },
    ]}
    processTitle="Première étape"
    processItems={[
      "Vous adressez un bref résumé du dossier et les documents qui déterminent la situation actuelle.",
      "Nous vérifions le périmètre, l'urgence et les éventuels conflits avant de proposer un format de consultation.",
      "Les consultations sont possibles sur rendez-vous et en ligne, en russe, anglais et français.",
    ]}
    linksTitle="Pages juridiques en français"
    links={[
      {
        title: "Services juridiques à Moscou",
        description: "Page générale pour l'accompagnement juridique en français.",
        href: "/fr/services-juridiques-moscou",
      },
      {
        title: "Juriste francophone près de Dinamo",
        description: "Disponibilité locale sur rendez-vous dans le secteur Dinamo / Petrovsky Park.",
        href: "/fr/juriste-francophone-moscou-dinamo",
      },
      {
        title: "Investisseurs en Russie",
        description: "Structuration, due diligence, documentation et mise en œuvre.",
        href: "/fr/accompagnement-juridique-investisseurs-russie",
      },
      {
        title: "Transactions M&A",
        description: "Accompagnement juridique des acquisitions et cessions d'entreprise.",
        href: "/fr/transactions-ma-russie",
      },
      {
        title: "Arbitrage et exécution",
        description: "Litiges commerciaux, exécution et recouvrement en Russie.",
        href: "/fr/arbitrage-et-execution-russie",
      },
      {
        title: "English version",
        description: "English-language pages for international clients with Russia-related matters.",
        href: "/en",
      },
    ]}
    schemaType="organization"
  />
);

export default HomeFr;
