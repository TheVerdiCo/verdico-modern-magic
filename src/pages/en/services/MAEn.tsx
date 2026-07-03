import ServicePageTemplate from "@/components/ServicePageTemplate";
import { enServices } from "@/lib/seo";

const service = enServices.find((item) => item.path === "/en/ma-transactions-russia")!;

const MAEn = () => (
  <ServicePageTemplate
    service={service}
    content={{
      intro: "Verdico supports M&A and business transactions connected with Russia, from initial structure and diligence to negotiation, documentation and closing coordination. The work is built around legal certainty, risk allocation and practical execution.",
      features: [
        "Legal due diligence of companies, assets, contracts and corporate authority",
        "Transaction structuring with corporate, contractual and enforcement considerations",
        "SPA, SHA, asset-transfer and ancillary document preparation or review",
        "Negotiation support, red-flag memoranda and allocation of transaction risks",
        "Closing sequence, conditions precedent and post-closing implementation support",
      ],
      process: [
        "We define the transaction perimeter, target documents, deadlines and decision points.",
        "Diligence findings are translated into contractual protections and closing conditions.",
        "Consultations are available by appointment and online in Russian, English and French.",
      ],
    }}
  />
);

export default MAEn;
