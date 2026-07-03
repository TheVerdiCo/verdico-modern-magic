import ServicePageTemplate from "@/components/ServicePageTemplate";
import { enServices } from "@/lib/seo";

const service = enServices.find((item) => item.path === "/en/investment-legal-support-russia")!;

const InvestmentSupportEn = () => (
  <ServicePageTemplate
    service={service}
    content={{
      intro: "Legal support for investors in Russia requires more than document drafting. We help foreign and Russian investors structure the legal position, verify key risks, allocate responsibilities and keep implementation aligned with the commercial objective.",
      features: [
        "Investment structure review, legal risk mapping and implementation planning",
        "Due diligence of companies, assets, contracts, authority and encumbrances",
        "Term sheets, investment agreements, shareholder arrangements and related documents",
        "Risk allocation, conditions precedent, closing mechanics and post-closing controls",
        "Support in negotiations, corporate approvals and investor-rights protection",
      ],
      process: [
        "We start with the investment thesis, parties, asset perimeter and documents already exchanged.",
        "The first assessment identifies legal blockers, negotiation points and documents needed before action.",
        "Consultations are available by appointment and online in Russian, English and French.",
      ],
    }}
  />
);

export default InvestmentSupportEn;
