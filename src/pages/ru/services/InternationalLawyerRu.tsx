import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ruServices } from "@/lib/seo";

const service = ruServices[3];

const InternationalLawyerRu = () => (
  <ServicePageTemplate
    service={service}
    content={{
      intro: "Трансграничные сделки и инвестиции с участием российских и иностранных сторон. Структурирование, договоры, взаимодействие с контрагентами и юрисдикциями, управление рисками.",
      features: [
        "Структурирование трансграничных сделок",
        "Подготовка договоров на русском и английском языках",
        "Взаимодействие с иностранными контрагентами и юристами",
        "Анализ применимого права и юрисдикционных рисков",
        "Валютное регулирование и комплаенс",
      ],
    }}
  />
);

export default InternationalLawyerRu;
