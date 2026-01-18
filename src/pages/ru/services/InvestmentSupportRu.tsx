import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ruServices } from "@/lib/seo";

const service = ruServices[2];

const InvestmentSupportRu = () => (
  <ServicePageTemplate
    service={service}
    content={{
      intro: "Полный юридический цикл инвестиционного проекта: от структурирования до защиты прав инвестора. Договоры, корпоративные документы, комплаенс, разрешение споров.",
      features: [
        "Структурирование инвестиционного проекта",
        "Подготовка и экспертиза инвестиционных договоров",
        "Корпоративные документы и регистрационные процедуры",
        "Комплаенс и регуляторные вопросы",
        "Защита прав инвестора и разрешение споров",
      ],
    }}
  />
);

export default InvestmentSupportRu;
