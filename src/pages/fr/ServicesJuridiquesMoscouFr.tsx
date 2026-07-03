import InternationalSeoPageTemplate from "@/components/InternationalSeoPageTemplate";

const ServicesJuridiquesMoscouFr = () => (
  <InternationalSeoPageTemplate
    lang="fr"
    path="/fr/services-juridiques-moscou"
    title="Services juridiques à Moscou en français | Verdico"
    description="Services juridiques à Moscou pour clients francophones : contrats, investissements, transactions M&A, litiges, exécution, immobilier et dossiers liés à la Russie."
    eyebrow="Services en français"
    h1="Services juridiques à Moscou en français"
    intro="Les clients francophones ont souvent besoin d'un conseil en droit russe clair, professionnel et directement exploitable. Verdico intervient sur les dossiers commerciaux, patrimoniaux et contentieux liés à la Russie, avec une attention particulière aux risques, aux documents et au résultat pratique recherché."
    sections={[
      {
        title: "Accompagnement commercial",
        items: [
          "Revue et négociation de contrats, répartition des risques et documentation.",
          "Structuration d'investissements, due diligence, documents sociétaires et exécution.",
          "Transactions M&A, cessions d'actifs, accords entre associés et coordination avec les contreparties.",
        ],
      },
      {
        title: "Litiges et actifs",
        items: [
          "Litiges commerciaux, arbitrage, procédures d'exécution et stratégie de recouvrement.",
          "Questions immobilières ou locatives lorsque les droits, documents ou risques doivent être vérifiés.",
          "Coordination en russe, anglais et français avec les clients et leurs conseils.",
        ],
      },
    ]}
    processTitle="Premier échange"
    processItems={[
      "Nous partons des faits, des documents et de l'objectif économique du client.",
      "L'analyse initiale distingue le risque juridique, la marge de négociation et les délais à respecter.",
      "Les consultations sont possibles sur rendez-vous et en ligne, en russe, anglais et français.",
    ]}
    linksTitle="Services liés"
    links={[
      {
        title: "Investisseurs en Russie",
        description: "Structuration, due diligence et documentation pour investisseurs.",
        href: "/fr/accompagnement-juridique-investisseurs-russie",
      },
      {
        title: "Transactions M&A",
        description: "Accompagnement des acquisitions, cessions et opérations d'entreprise.",
        href: "/fr/transactions-ma-russie",
      },
      {
        title: "Arbitrage et exécution",
        description: "Litiges commerciaux, exécution et recouvrement.",
        href: "/fr/arbitrage-et-execution-russie",
      },
      {
        title: "English service hub",
        description: "Equivalent English-language legal-services page.",
        href: "/en/legal-services-moscow",
      },
    ]}
    serviceType="Services juridiques en français à Moscou"
  />
);

export default ServicesJuridiquesMoscouFr;
