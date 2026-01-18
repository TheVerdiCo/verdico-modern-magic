import ServicePageTemplate from "@/components/ServicePageTemplate";
import { enServices } from "@/lib/seo";

const service = enServices[1];

const MAEn = () => (
  <ServicePageTemplate
    service={service}
    content={{
      intro: "We support M&A transactions in Russia and cross-border projects. Due diligence, structuring, SPA/SHA preparation, negotiations, closing. We work on both buy-side and sell-side.",
      features: [
        "Legal due diligence of target companies",
        "Transaction structuring with tax and corporate considerations",
        "SPA, SHA, and shareholder agreement preparation",
        "Negotiation support and client position protection",
        "Closing and post-closing coordination",
      ],
    }}
  />
);

export default MAEn;
