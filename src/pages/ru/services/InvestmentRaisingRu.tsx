import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ruServices } from "@/lib/seo";

const service = ruServices[0]; // privlechenie-investitsiy

const InvestmentRaisingRu = () => (
  <ServicePageTemplate
    service={service}
    content={{
      intro: "Юридическое сопровождение привлечения инвестиций: проверка структуры сделки, подготовка документов, переговоры и фиксация договорённостей. Работа строится вокруг правовой позиции сторон и экономического смысла сделки, а не вокруг общих формулировок.",
      features: [
        "Анализ структуры сделки и выбор применимой правовой модели",
        "Подготовка term sheet и комплекта инвестиционных документов",
        "Сопровождение переговоров и фиксация согласованных условий",
        "Корпоративное оформление под привлекаемые инвестиции",
        "Сопровождение закрытия и последующих корпоративных действий",
      ],
    }}
  />
);

export default InvestmentRaisingRu;
