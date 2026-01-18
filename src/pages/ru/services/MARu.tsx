import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ruServices } from "@/lib/seo";

const service = ruServices[1]; // sdelki-m-a

const MARu = () => (
  <ServicePageTemplate
    service={service}
    content={{
      intro: "Сопровождаем сделки M&A в России и трансграничные проекты. Due diligence, структурирование, подготовка SPA/SHA, переговоры, закрытие. Работаем как на стороне покупателя, так и продавца.",
      features: [
        "Юридический due diligence целевой компании",
        "Структурирование сделки с учётом налоговых и корпоративных аспектов",
        "Подготовка и согласование SPA, SHA, акционерных соглашений",
        "Сопровождение переговоров и защита позиции клиента",
        "Координация закрытия и постзакрытия сделки",
      ],
    }}
  />
);

export default MARu;
