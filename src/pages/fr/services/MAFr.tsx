import ServicePageTemplate from "@/components/ServicePageTemplate";
import { frServices } from "@/lib/seo";

const service = frServices.find((item) => item.path === "/fr/transactions-ma-russie")!;

const MAFr = () => (
  <ServicePageTemplate
    service={service}
    content={{
      intro: "Verdico accompagne les transactions M&A et opérations d'entreprise liées à la Russie, depuis la structuration initiale et la due diligence jusqu'à la négociation, la documentation et le closing. Le travail vise la sécurité juridique, la répartition des risques et l'exécution pratique.",
      features: [
        "Due diligence juridique des sociétés, actifs, contrats et pouvoirs sociaux",
        "Structuration de l'opération en tenant compte des contraintes sociétaires, contractuelles et d'exécution",
        "Préparation ou revue de SPA, SHA, cessions d'actifs et documents accessoires",
        "Assistance aux négociations, notes de risques et répartition des responsabilités",
        "Séquence de closing, conditions suspensives et accompagnement post-closing",
      ],
      process: [
        "Nous définissons le périmètre de la transaction, les documents cibles, les délais et les points de décision.",
        "Les constats de due diligence sont traduits en protections contractuelles et conditions de closing.",
        "Les consultations sont possibles sur rendez-vous et en ligne, en russe, anglais et français.",
      ],
    }}
  />
);

export default MAFr;
