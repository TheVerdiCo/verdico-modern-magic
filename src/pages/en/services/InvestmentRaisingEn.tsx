import ServicePageTemplate from "@/components/ServicePageTemplate";
import { enServices } from "@/lib/seo";

const service = enServices[0];

const InvestmentRaisingEn = () => (
  <ServicePageTemplate
    service={service}
    content={{
      intro: "Verdi & Co. provides legal support for investment raising for Russian companies and projects. We work with businesses, startups, and investors — structuring deals, preparing documents, conducting negotiations, and protecting parties' interests.",
      features: [
        "Structure analysis and optimal investment model selection",
        "Term sheet and investment documentation preparation",
        "Negotiations with investors and founder protection",
        "Corporate structuring for investments",
        "Deal closing support and post-investment matters",
      ],
    }}
  />
);

export default InvestmentRaisingEn;
