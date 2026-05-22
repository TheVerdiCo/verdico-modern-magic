import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ruServices } from "@/lib/seo";

const service = ruServices[3];

const InternationalLawyerRu = () => (
  <ServicePageTemplate
    service={service}
    content={{
      intro: "Сопровождение трансграничных сделок и проектов с участием российских и иностранных сторон. Анализ применимого права, договорная работа на двух языках, взаимодействие с контрагентами и юрисдикциями без формальных обещаний.",
      features: [
        "Структурирование трансграничных сделок и выбор применимого права",
        "Подготовка договоров на русском и английском языках",
        "Взаимодействие с иностранными контрагентами и внешними консультантами",
        "Анализ юрисдикционных и санкционных рисков",
        "Валютные и регуляторные вопросы по сделке",
      ],
    }}
  />
);

export default InternationalLawyerRu;
