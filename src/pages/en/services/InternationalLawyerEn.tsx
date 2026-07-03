import ServicePageTemplate from "@/components/ServicePageTemplate";
import { enServices } from "@/lib/seo";

const service = enServices.find((item) => item.path === "/en/international-lawyer-russia")!;

const InternationalLawyerEn = () => (
  <ServicePageTemplate
    service={service}
    content={{
      intro: "International clients often need Russian-law advice that fits a wider commercial, contractual or asset structure. Verdico supports Russia-related matters where foreign parties, counterparties, documents or enforcement risks have to be coordinated carefully.",
      features: [
        "Russian-law review for international business, investment and asset matters",
        "Contract preparation and negotiation support in Russian and English",
        "Coordination with foreign advisers, counterparties and internal stakeholders",
        "Applicable-law, jurisdiction, enforcement and documentary-risk analysis",
        "Support for disputes, transactions and implementation steps connected with Russia",
      ],
      process: [
        "We clarify the Russia-related legal issue inside the broader commercial context.",
        "The advice focuses on risk, available options, documents and the next practical steps.",
        "Consultations are available by appointment and online in Russian, English and French.",
      ],
    }}
  />
);

export default InternationalLawyerEn;
