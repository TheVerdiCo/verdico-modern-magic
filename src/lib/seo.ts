// SEO configuration and route mapping for RU/EN site

export const SITE_URL = "https://www.verdico.ru";
export const BRAND_NAME = "Верди и Ко. (VerdiCo)";
export const EMAIL = "ceo@theverdico.com";

export type Language = "ru" | "en";

export interface PageSEO {
  path: string;
  title: string;
  h1: string;
  description: string;
  alternatePath: string;
}

export interface ServicePage extends PageSEO {
  relatedServices: string[];
  serviceType: string;
}

// Route mappings for hreflang
export const routeAlternates: Record<string, string> = {
  // RU -> EN
  "/ru": "/en",
  "/ru/privlechenie-investitsiy": "/en/investment-raising",
  "/ru/sdelki-m-a": "/en/m-a-legal-advisory",
  "/ru/yuridicheskoe-soprovozhdenie-investitsiy": "/en/investment-legal-support",
  "/ru/mezhdunarodnyy-yurist-rossiya": "/en/international-lawyer-russia",
  "/ru/arbitrazhnye-spory": "/en/arbitration-disputes",
  "/ru/o-nas": "/en/about",
  "/ru/kontakty": "/en/contacts",
  "/ru/insights": "/en/insights",
  // EN -> RU
  "/en": "/ru",
  "/en/investment-raising": "/ru/privlechenie-investitsiy",
  "/en/m-a-legal-advisory": "/ru/sdelki-m-a",
  "/en/investment-legal-support": "/ru/yuridicheskoe-soprovozhdenie-investitsiy",
  "/en/international-lawyer-russia": "/ru/mezhdunarodnyy-yurist-rossiya",
  "/en/arbitration-disputes": "/ru/arbitrazhnye-spory",
  "/en/about": "/ru/o-nas",
  "/en/contacts": "/ru/kontakty",
  "/en/insights": "/ru/insights",
};

// RU Service Pages
export const ruServices: ServicePage[] = [
  {
    path: "/ru/privlechenie-investitsiy",
    title: "Привлечение инвестиций в России — юрист | VerdiCo",
    h1: "Юридическое сопровождение привлечения инвестиций",
    description: "Юридическое сопровождение привлечения инвестиций: структура сделки, документы, переговоры, защита интересов инвестора и бизнеса в России.",
    alternatePath: "/en/investment-raising",
    relatedServices: ["/ru/sdelki-m-a", "/ru/yuridicheskoe-soprovozhdenie-investitsiy", "/ru/mezhdunarodnyy-yurist-rossiya"],
    serviceType: "Investment Legal Services",
  },
  {
    path: "/ru/sdelki-m-a",
    title: "Сделки M&A — сопровождение слияний и поглощений | VerdiCo",
    h1: "Юридическое сопровождение сделок M&A",
    description: "Сопровождение сделок M&A: due diligence, SPA/SHA, структурирование, переговоры и закрытие сделки. Россия и трансграничные проекты.",
    alternatePath: "/en/m-a-legal-advisory",
    relatedServices: ["/ru/privlechenie-investitsiy", "/ru/yuridicheskoe-soprovozhdenie-investitsiy", "/ru/arbitrazhnye-spory"],
    serviceType: "M&A Legal Advisory",
  },
  {
    path: "/ru/yuridicheskoe-soprovozhdenie-investitsiy",
    title: "Юридическое сопровождение инвестиций в России | VerdiCo",
    h1: "Юридическое сопровождение инвестиционных проектов",
    description: "Договоры, структура, корпоративные документы, комплаенс и защита прав инвестора. Полный юридический цикл инвестиционного проекта.",
    alternatePath: "/en/investment-legal-support",
    relatedServices: ["/ru/privlechenie-investitsiy", "/ru/sdelki-m-a", "/ru/mezhdunarodnyy-yurist-rossiya"],
    serviceType: "Investment Project Support",
  },
  {
    path: "/ru/mezhdunarodnyy-yurist-rossiya",
    title: "Международный юрист в России — трансграничные сделки | VerdiCo",
    h1: "Международный юрист в России",
    description: "Трансграничные сделки и инвестиции: структура, договоры, риски, взаимодействие с иностранными контрагентами и юрисдикциями.",
    alternatePath: "/en/international-lawyer-russia",
    relatedServices: ["/ru/privlechenie-investitsiy", "/ru/sdelki-m-a", "/ru/arbitrazhnye-spory"],
    serviceType: "International Legal Services",
  },
  {
    path: "/ru/arbitrazhnye-spory",
    title: "Арбитражные споры — представитель в арбитраже | VerdiCo",
    h1: "Юрист по арбитражным спорам",
    description: "Представительство в арбитражных судах по коммерческим спорам: стратегия, доказательства, процесс, взыскание задолженности и убытков.",
    alternatePath: "/en/arbitration-disputes",
    relatedServices: ["/ru/sdelki-m-a", "/ru/yuridicheskoe-soprovozhdenie-investitsiy", "/ru/mezhdunarodnyy-yurist-rossiya"],
    serviceType: "Arbitration and Dispute Resolution",
  },
];

// EN Service Pages
export const enServices: ServicePage[] = [
  {
    path: "/en/investment-raising",
    title: "Investment Raising Legal Support in Russia | VerdiCo",
    h1: "Legal support for investment raising",
    description: "Legal support for investment raising: structuring, term sheets, documentation, negotiations, and risk control for investors and businesses in Russia.",
    alternatePath: "/ru/privlechenie-investitsiy",
    relatedServices: ["/en/m-a-legal-advisory", "/en/investment-legal-support", "/en/international-lawyer-russia"],
    serviceType: "Investment Legal Services",
  },
  {
    path: "/en/m-a-legal-advisory",
    title: "M&A Legal Advisory (Russia & Cross-border) | VerdiCo",
    h1: "M&A legal advisory",
    description: "M&A legal advisory: due diligence, transaction documents, structuring, negotiation support, and closing coordination for Russia and cross-border deals.",
    alternatePath: "/ru/sdelki-m-a",
    relatedServices: ["/en/investment-raising", "/en/investment-legal-support", "/en/arbitration-disputes"],
    serviceType: "M&A Legal Advisory",
  },
  {
    path: "/en/investment-legal-support",
    title: "Legal Support for Investments in Russia | VerdiCo",
    h1: "Legal support for investment projects",
    description: "Legal support across the investment lifecycle: contracts, corporate structuring, compliance, and investor protection for projects in Russia.",
    alternatePath: "/ru/yuridicheskoe-soprovozhdenie-investitsiy",
    relatedServices: ["/en/investment-raising", "/en/m-a-legal-advisory", "/en/international-lawyer-russia"],
    serviceType: "Investment Project Support",
  },
  {
    path: "/en/international-lawyer-russia",
    title: "International Lawyer in Russia | VerdiCo",
    h1: "International legal support in Russia",
    description: "International legal support in Russia for cross-border investments and transactions: structuring, documentation, and counterpart coordination.",
    alternatePath: "/ru/mezhdunarodnyy-yurist-rossiya",
    relatedServices: ["/en/investment-raising", "/en/m-a-legal-advisory", "/en/arbitration-disputes"],
    serviceType: "International Legal Services",
  },
  {
    path: "/en/arbitration-disputes",
    title: "Arbitration and Commercial Disputes | VerdiCo",
    h1: "Arbitration and commercial disputes",
    description: "Representation in arbitration and commercial disputes: case strategy, evidence, procedure management, and enforcement support.",
    alternatePath: "/ru/arbitrazhnye-spory",
    relatedServices: ["/en/m-a-legal-advisory", "/en/investment-legal-support", "/en/international-lawyer-russia"],
    serviceType: "Arbitration and Dispute Resolution",
  },
];

// Get service by path
export const getServiceByPath = (path: string): ServicePage | undefined => {
  return [...ruServices, ...enServices].find(s => s.path === path);
};

// Get language from path
export const getLangFromPath = (path: string): Language => {
  return path.startsWith("/en") ? "en" : "ru";
};

// Navigation items
export const getNavItems = (lang: Language) => {
  if (lang === "ru") {
    return {
      services: {
        label: "Услуги",
        items: ruServices.map(s => ({ path: s.path, label: s.h1 })),
      },
      about: { path: "/ru/o-nas", label: "О нас" },
      contacts: { path: "/ru/kontakty", label: "Контакты" },
      insights: { path: "/ru/insights", label: "Insights" },
      home: { path: "/ru", label: "Главная" },
    };
  }
  return {
    services: {
      label: "Services",
      items: enServices.map(s => ({ path: s.path, label: s.h1 })),
    },
    about: { path: "/en/about", label: "About" },
    contacts: { path: "/en/contacts", label: "Contacts" },
    insights: { path: "/en/insights", label: "Insights" },
    home: { path: "/en", label: "Home" },
  };
};
