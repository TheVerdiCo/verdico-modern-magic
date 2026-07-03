import InternationalSeoPageTemplate from "@/components/InternationalSeoPageTemplate";

const JuristeFrancophoneDinamoFr = () => (
  <InternationalSeoPageTemplate
    lang="fr"
    path="/fr/juriste-francophone-moscou-dinamo"
    title="Juriste francophone près de Dinamo, Moscou | Verdico"
    description="Accompagnement juridique en français à Moscou, près de Dinamo et Petrovsky Park, pour clients étrangers, investisseurs, entreprises et dirigeants."
    eyebrow="Disponibilité locale"
    h1="Juriste francophone près de Dinamo, Moscou"
    intro="Verdico propose un accompagnement en droit russe pour les clients francophones qui ont besoin d'une consultation à Moscou, avec disponibilité sur rendez-vous dans le secteur Dinamo / Petrovsky Park et en ligne. Cette mention concerne la disponibilité du service et ne constitue pas l'annonce d'un bureau ouvert au public."
    sections={[
      {
        title: "Dossiers adaptés",
        items: [
          "Questions commerciales ou d'investissement impliquant contrats, actifs ou contreparties russes.",
          "Transactions M&A, due diligence, documents d'associés et mise en œuvre.",
          "Litiges commerciaux, exécution, recouvrement et questions immobilières.",
        ],
      },
      {
        title: "Organisation de la consultation",
        items: [
          "Les rendez-vous sont organisés après une brève vérification du périmètre et des conflits.",
          "La consultation en ligne reste possible lorsque les documents, délais ou déplacements le justifient.",
          "La coordination peut se faire en russe, anglais et français avec les clients et leurs conseils.",
        ],
      },
    ]}
    processTitle="Avant le rendez-vous"
    processItems={[
      "Adressez un résumé du dossier, les documents utiles et les délais urgents à admin@verdico.ru.",
      "Nous confirmons si le sujet entre dans le périmètre d'intervention et proposons un format de consultation.",
      "La consultation porte sur la position juridique, les options pratiques, les risques et les prochaines étapes.",
    ]}
    linksTitle="Pages liées"
    links={[
      {
        title: "Services juridiques à Moscou",
        description: "Page générale des services juridiques en français.",
        href: "/fr/services-juridiques-moscou",
      },
      {
        title: "Juriste international",
        description: "Conseil en droit russe pour dossiers internationaux liés à la Russie.",
        href: "/fr/juriste-international-russie",
      },
      {
        title: "English local page",
        description: "English-language local page for the same service availability.",
        href: "/en/english-speaking-legal-counsel-moscow-dinamo",
      },
    ]}
    serviceType="Accompagnement juridique en français près de Dinamo et Petrovsky Park"
  />
);

export default JuristeFrancophoneDinamoFr;
