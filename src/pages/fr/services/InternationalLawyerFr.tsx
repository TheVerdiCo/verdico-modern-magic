import ServicePageTemplate from "@/components/ServicePageTemplate";
import { frServices } from "@/lib/seo";

const service = frServices.find((item) => item.path === "/fr/juriste-international-russie")!;

const InternationalLawyerFr = () => (
  <ServicePageTemplate
    service={service}
    content={{
      intro: "Les clients internationaux ont souvent besoin d'un conseil en droit russe intégré à une structure commerciale, contractuelle ou patrimoniale plus large. Verdico intervient sur les dossiers liés à la Russie lorsque parties étrangères, contrats, actifs ou risques d'exécution doivent être coordonnés avec précision.",
      features: [
        "Analyse en droit russe pour les dossiers d'affaires, d'investissement et d'actifs internationaux",
        "Préparation et négociation de contrats en russe et en anglais",
        "Coordination avec conseils étrangers, contreparties et équipes internes",
        "Analyse de loi applicable, juridiction, exécution et risques documentaires",
        "Soutien aux litiges, transactions et étapes de mise en œuvre liées à la Russie",
      ],
      process: [
        "Nous clarifions la question de droit russe dans son contexte commercial international.",
        "Le conseil porte sur les risques, options disponibles, documents et étapes pratiques.",
        "Les consultations sont possibles sur rendez-vous et en ligne, en russe, anglais et français.",
      ],
    }}
  />
);

export default InternationalLawyerFr;
