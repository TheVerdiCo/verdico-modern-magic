import ServicePageTemplate from "@/components/ServicePageTemplate";
import { enServices } from "@/lib/seo";

const service = enServices[3];

const InternationalLawyerEn = () => (
  <ServicePageTemplate
    service={service}
    content={{
      intro: "Cross-border transactions and investments involving Russian and foreign parties. Structuring, contracts, counterpart coordination, and risk management.",
      features: [
        "Cross-border transaction structuring",
        "Contract preparation in Russian and English",
        "Coordination with foreign counterparts and lawyers",
        "Applicable law and jurisdictional risk analysis",
        "Currency regulation and compliance",
      ],
    }}
  />
);

export default InternationalLawyerEn;
