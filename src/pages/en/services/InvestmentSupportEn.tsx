import ServicePageTemplate from "@/components/ServicePageTemplate";
import { enServices } from "@/lib/seo";

const service = enServices[2];

const InvestmentSupportEn = () => (
  <ServicePageTemplate
    service={service}
    content={{
      intro: "Full legal cycle for investment projects: from structuring to investor rights protection. Contracts, corporate documents, compliance, dispute resolution.",
      features: [
        "Investment project structuring",
        "Investment agreement preparation and review",
        "Corporate documents and registration procedures",
        "Compliance and regulatory matters",
        "Investor rights protection and dispute resolution",
      ],
    }}
  />
);

export default InvestmentSupportEn;
