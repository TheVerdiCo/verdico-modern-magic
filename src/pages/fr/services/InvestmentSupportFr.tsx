import ServicePageTemplate from "@/components/ServicePageTemplate";
import { frServices } from "@/lib/seo";

const service = frServices.find((item) => item.path === "/fr/accompagnement-juridique-investisseurs-russie")!;

const InvestmentSupportFr = () => (
  <ServicePageTemplate
    service={service}
    content={{
      intro: "L'accompagnement des investisseurs en Russie suppose une analyse juridique claire de la structure, des documents, des risques et de la mise en œuvre. Verdico aide les investisseurs étrangers et russes à sécuriser les étapes essentielles avant la décision, la signature et l'exécution.",
      features: [
        "Analyse de la structure d'investissement, des risques juridiques et du calendrier de mise en œuvre",
        "Due diligence des sociétés, actifs, contrats, pouvoirs et charges éventuelles",
        "Term sheets, accords d'investissement, pactes d'associés et documents connexes",
        "Répartition des risques, conditions suspensives, closing et contrôles post-closing",
        "Accompagnement des négociations, approbations sociétaires et protection des droits de l'investisseur",
      ],
      process: [
        "Nous partons de la thèse d'investissement, des parties, du périmètre des actifs et des documents échangés.",
        "La première analyse identifie les blocages juridiques, les points de négociation et les documents nécessaires.",
        "Les consultations sont possibles sur rendez-vous et en ligne, en russe, anglais et français.",
      ],
    }}
  />
);

export default InvestmentSupportFr;
