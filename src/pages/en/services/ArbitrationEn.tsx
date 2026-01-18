import ServicePageTemplate from "@/components/ServicePageTemplate";
import { enServices } from "@/lib/seo";

const service = enServices[4];

const ArbitrationEn = () => (
  <ServicePageTemplate
    service={service}
    content={{
      intro: "Representation in arbitration courts for commercial disputes. Strategy, evidence, process, enforcement. We work in Russian arbitration courts and international arbitration.",
      features: [
        "Case prospects analysis and strategy development",
        "Procedural documents and evidence preparation",
        "Court hearing representation",
        "Debt and damages recovery",
        "Court decision enforcement",
      ],
    }}
  />
);

export default ArbitrationEn;
