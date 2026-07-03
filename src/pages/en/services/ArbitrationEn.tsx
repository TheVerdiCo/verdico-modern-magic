import ServicePageTemplate from "@/components/ServicePageTemplate";
import { enServices } from "@/lib/seo";

const service = enServices.find((item) => item.path === "/en/arbitration-enforcement-russia")!;

const ArbitrationEn = () => (
  <ServicePageTemplate
    service={service}
    content={{
      intro: "Commercial disputes in Russia require an early view of evidence, procedural timing, enforcement prospects and recovery economics. Verdico supports business clients and creditors before litigation, during arbitration and at the enforcement stage.",
      features: [
        "Case assessment, procedural strategy and evidence mapping",
        "Claims, responses, motions, settlement positions and negotiation support",
        "Commercial arbitration and Russian court coordination where applicable",
        "Enforcement proceedings, asset-oriented recovery strategy and creditor support",
        "Risk review before commencing or defending proceedings",
      ],
      process: [
        "We review the contract, correspondence, payment history, evidence and procedural status.",
        "The first output is a practical view of merits, timing, cost drivers and enforcement options.",
        "Consultations are available by appointment and online in Russian, English and French.",
      ],
    }}
  />
);

export default ArbitrationEn;
