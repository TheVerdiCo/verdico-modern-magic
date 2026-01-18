import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ruServices } from "@/lib/seo";

const service = ruServices[0]; // privlechenie-investitsiy

const InvestmentRaisingRu = () => (
  <ServicePageTemplate
    service={service}
    content={{
      intro: "Верди и Ко сопровождает привлечение инвестиций для российских компаний и проектов. Мы работаем с бизнесом, стартапами и инвесторами — структурируем сделки, готовим документы, ведём переговоры и защищаем интересы сторон.",
      features: [
        "Анализ структуры и определение оптимальной модели привлечения",
        "Подготовка term sheet и инвестиционных документов",
        "Переговоры с инвесторами и защита интересов основателей",
        "Корпоративное структурирование под инвестиции",
        "Сопровождение закрытия сделки и постинвестиционные вопросы",
      ],
    }}
  />
);

export default InvestmentRaisingRu;
