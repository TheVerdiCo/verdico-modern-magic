import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ruServices } from "@/lib/seo";

const service = ruServices[4];

const ArbitrationRu = () => (
  <ServicePageTemplate
    service={service}
    content={{
      intro: "Представительство в арбитражных судах по коммерческим спорам. Стратегия, доказательства, процесс, взыскание. Работаем в российских арбитражных судах и международном арбитраже.",
      features: [
        "Анализ перспектив дела и разработка стратегии",
        "Подготовка процессуальных документов и доказательств",
        "Представительство в судебных заседаниях",
        "Взыскание задолженности и убытков",
        "Исполнение судебных решений",
      ],
    }}
  />
);

export default ArbitrationRu;
