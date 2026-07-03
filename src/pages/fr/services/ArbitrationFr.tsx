import ServicePageTemplate from "@/components/ServicePageTemplate";
import { frServices } from "@/lib/seo";

const service = frServices.find((item) => item.path === "/fr/arbitrage-et-execution-russie")!;

const ArbitrationFr = () => (
  <ServicePageTemplate
    service={service}
    content={{
      intro: "Les litiges commerciaux en Russie exigent une analyse précoce des preuves, du calendrier procédural, des perspectives d'exécution et de l'économie du recouvrement. Verdico accompagne les entreprises et créanciers avant le contentieux, pendant l'arbitrage et au stade de l'exécution.",
      features: [
        "Analyse du dossier, stratégie procédurale et cartographie des preuves",
        "Demandes, réponses, requêtes, positions de règlement amiable et appui aux négociations",
        "Coordination des procédures commerciales et arbitrales lorsque cela est applicable",
        "Procédures d'exécution, stratégie de recouvrement orientée actifs et soutien aux créanciers",
        "Revue des risques avant l'introduction ou la défense d'une procédure",
      ],
      process: [
        "Nous examinons le contrat, la correspondance, l'historique des paiements, les preuves et l'état procédural.",
        "La première analyse donne une vision pratique des chances, délais, coûts et options d'exécution.",
        "Les consultations sont possibles sur rendez-vous et en ligne, en russe, anglais et français.",
      ],
    }}
  />
);

export default ArbitrationFr;
