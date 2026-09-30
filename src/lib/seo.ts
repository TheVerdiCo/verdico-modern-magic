// SEO configuration and route mapping for RU/EN/FR site

export const SITE_URL = "https://www.verdico.ru";
export const BRAND_NAME_RU = "Верди и Ко.";
export const BRAND_NAME_EN = "Verdi & Co.";
export const BRAND_NAME_FR = "Verdi & Co.";
export const BRAND_NAME = "Верди и Ко. (Verdi & Co.)";
export const EMAIL = "admin@verdico.ru";

export const toFinalPath = (path: string): string => {
  if (/^[a-z][a-z0-9+.-]*:/i.test(path)) {
    return path;
  }

  if (!path || path === "/") {
    return "/";
  }

  const [pathnameAndSearch, hash = ""] = path.split("#");
  const [pathname, search = ""] = pathnameAndSearch.split("?");
  const normalizedPathname =
    pathname === "/" || pathname.endsWith("/") ? pathname : `${pathname}/`;

  return `${normalizedPathname}${search ? `?${search}` : ""}${hash ? `#${hash}` : ""}`;
};

export const toAbsoluteFinalUrl = (target: string): string => {
  try {
    const url = new URL(target, SITE_URL);

    if (url.origin === SITE_URL) {
      url.pathname = toFinalPath(url.pathname);
    }

    return url.toString();
  } catch {
    return target;
  }
};

export type Language = "ru" | "en" | "fr";
export type HreflangCode = Language | "x-default";
export type HreflangAlternates = Partial<Record<HreflangCode, string>>;

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

const normalizeRoutePath = (path: string): string => {
  if (!path || path === "/") {
    return "/";
  }

  const [pathnameAndSearch] = path.split("#");
  const [pathname] = pathnameAndSearch.split("?");
  return pathname.replace(/\/+$/, "") || "/";
};

const alternateGroups: HreflangAlternates[] = [
  {
    ru: "/ru",
    en: "/en",
    fr: "/fr",
    "x-default": "/",
  },
  {
    ru: "/ru/yuridicheskoe-soprovozhdenie-investitsiy",
    en: "/en/investment-legal-support-russia",
    fr: "/fr/accompagnement-juridique-investisseurs-russie",
    "x-default": "/en/investment-legal-support-russia",
  },
  {
    ru: "/ru/sdelki-m-a",
    en: "/en/ma-transactions-russia",
    fr: "/fr/transactions-ma-russie",
    "x-default": "/en/ma-transactions-russia",
  },
  {
    ru: "/ru/arbitrazhnye-spory",
    en: "/en/arbitration-enforcement-russia",
    fr: "/fr/arbitrage-et-execution-russie",
    "x-default": "/en/arbitration-enforcement-russia",
  },
  {
    ru: "/ru/mezhdunarodnyy-yurist-rossiya",
    en: "/en/international-lawyer-russia",
    fr: "/fr/juriste-international-russie",
    "x-default": "/en/international-lawyer-russia",
  },
  {
    en: "/en/legal-services-moscow",
    fr: "/fr/services-juridiques-moscou",
    "x-default": "/en/legal-services-moscow",
  },
  {
    en: "/en/english-speaking-legal-counsel-moscow-dinamo",
    fr: "/fr/juriste-francophone-moscou-dinamo",
    "x-default": "/en/english-speaking-legal-counsel-moscow-dinamo",
  },
];

// Route mappings for reciprocal hreflang groups.
export const routeAlternates: Record<string, HreflangAlternates> = alternateGroups.reduce(
  (acc, group) => {
    Object.values(group).forEach((path) => {
      if (path) {
        acc[normalizeRoutePath(path)] = group;
      }
    });
    return acc;
  },
  {} as Record<string, HreflangAlternates>,
);

export const getHreflangAlternates = (path: string): HreflangAlternates => {
  const normalizedPath = normalizeRoutePath(path);
  return routeAlternates[normalizedPath] ?? {
    [getLangFromPath(normalizedPath)]: normalizedPath,
  };
};

export const getLanguageAlternate = (
  path: string,
  language: Language,
): string | undefined => getHreflangAlternates(path)[language];

// RU Service Pages
export const ruServices: ServicePage[] = [
  {
    path: "/ru/privlechenie-investitsiy",
    title: "Привлечение инвестиций и инвестиционные сделки | Верди и Ко.",
    h1: "Привлечение инвестиций и инвестиционные сделки",
    description: "Структура инвестиционной сделки, проверка прав и полномочий, документы, переговоры, распределение рисков и условия выхода.",
    alternatePath: "",
    relatedServices: ["/ru/sdelki-m-a", "/ru/yuridicheskoe-soprovozhdenie-investitsiy", "/ru/mezhdunarodnyy-yurist-rossiya"],
    serviceType: "Привлечение инвестиций и инвестиционные сделки",
  },
  {
    path: "/ru/sdelki-m-a",
    title: "Сделки M&A — юридическое сопровождение | Верди и Ко.",
    h1: "Юридическое сопровождение сделок M&A",
    description: "Сопровождение сделок M&A: due diligence, SPA/SHA, структура сделки, переговоры, закрытие и контроль ключевых обязательств.",
    alternatePath: "/en/ma-transactions-russia",
    relatedServices: ["/ru/privlechenie-investitsiy", "/ru/yuridicheskoe-soprovozhdenie-investitsiy", "/ru/arbitrazhnye-spory"],
    serviceType: "Сделки M&A",
  },
  {
    path: "/ru/yuridicheskoe-soprovozhdenie-investitsiy",
    title: "Юридическое сопровождение инвестиций и сделок | Верди и Ко.",
    h1: "Юридическое сопровождение инвестиций и сделок",
    description: "Юридическая работа по инвестиционным сделкам: договоры, корпоративные решения, контроль обязательств, compliance и защита прав инвестора.",
    alternatePath: "/en/investment-legal-support-russia",
    relatedServices: ["/ru/privlechenie-investitsiy", "/ru/sdelki-m-a", "/ru/mezhdunarodnyy-yurist-rossiya"],
    serviceType: "Юридическое сопровождение инвестиций и сделок",
  },
  {
    path: "/ru/mezhdunarodnyy-yurist-rossiya",
    title: "Международный юрист в России — сделки и договоры | Верди и Ко.",
    h1: "Международный юрист в России",
    description: "Сделки и правовые вопросы с иностранным элементом: договоры, платежи, юрисдикция, риски и взаимодействие с иностранными контрагентами.",
    alternatePath: "/en/international-lawyer-russia",
    relatedServices: ["/ru/services/international-migration-coordination", "/ru/privlechenie-investitsiy", "/ru/sdelki-m-a"],
    serviceType: "Международные сделки и правовые вопросы",
  },
  {
    path: "/ru/arbitrazhnye-spory",
    title: "Арбитражные споры — юрист по коммерческим спорам | Верди и Ко.",
    h1: "Юрист по арбитражным спорам",
    description: "Коммерческие, корпоративные и имущественные споры в арбитражных судах: позиция, доказательства, досудебная работа, процесс и взыскание.",
    alternatePath: "/en/arbitration-enforcement-russia",
    relatedServices: ["/ru/sdelki-m-a", "/ru/yuridicheskoe-soprovozhdenie-investitsiy", "/ru/mezhdunarodnyy-yurist-rossiya"],
    serviceType: "Арбитражные и коммерческие споры",
  },
  {
    path: "/ru/nedvizhimost-i-arenda",
    title: "Недвижимость и аренда — юрист по сделкам и спорам | Верди и Ко.",
    h1: "Недвижимость, аренда и защита собственника",
    description: "Юридическая работа с недвижимостью и арендой: проверка объектов, договоры, защита собственника, имущественные споры и кадастровая стоимость.",
    alternatePath: "",
    relatedServices: ["/ru/zemlya-i-nedvizhimost", "/ru/arbitrazhnye-spory", "/ru/sdelki-m-a"],
    serviceType: "Недвижимость, аренда и защита собственника",
  },
  {
    path: "/ru/zemlya-i-nedvizhimost",
    title: "Земельное право и недвижимость — юрист | Верди и Ко.",
    h1: "Земля и недвижимость",
    description: "Земельные участки и недвижимость: проверка прав, аренда, выкуп, кадастр, муниципальная земля, ограничения и споры с органами власти.",
    alternatePath: "",
    relatedServices: ["/ru/nedvizhimost-i-arenda", "/ru/arbitrazhnye-spory", "/ru/sdelki-m-a"],
    serviceType: "Земельное право и недвижимость",
  },
  {
    path: "/ru/services/international-migration-coordination",
    title: "Миграционные вопросы за рубежом — документы и риски | Верди и Ко.",
    h1: "Миграционные вопросы за рубежом",
    description: "Помогаем русскоязычным клиентам и семьям разобраться с резидентством, семейным воссоединением, документами, сроками, расходами и рисками.",
    alternatePath: "",
    relatedServices: ["/ru/mezhdunarodnyy-yurist-rossiya", "/ru/yuridicheskoe-soprovozhdenie-investitsiy", "/ru/nedvizhimost-i-arenda"],
    serviceType: "Миграционные вопросы за рубежом",
  },
  {
    path: "/ru/mezhdunarodnye-aktivy",
    title: "Международные активы и недвижимость за рубежом | Верди и Ко.",
    h1: "Международные активы и недвижимость за рубежом",
    description: "Зарубежная недвижимость, резидентские маршруты и доходные объекты: структура сделки, проверка документов и юридико-коммерческая координация.",
    alternatePath: "",
    relatedServices: ["/ru/nedvizhimost-i-arenda", "/ru/services/international-migration-coordination", "/ru/mezhdunarodnyy-yurist-rossiya"],
    serviceType: "Международные активы и недвижимость за рубежом",
  },
];

// EN Service Pages
export const enServices: ServicePage[] = [
  {
    path: "/en/legal-services-moscow",
    title: "Legal services in Moscow in English | Verdico",
    h1: "Legal services in Moscow in English",
    description: "Business-focused legal services in Moscow in English: contracts, investment support, M&A, disputes, enforcement, real estate and cross-border matters.",
    alternatePath: "/fr/services-juridiques-moscou",
    relatedServices: ["/en/investment-legal-support-russia", "/en/ma-transactions-russia", "/en/arbitration-enforcement-russia"],
    serviceType: "English-language legal services in Moscow",
  },
  {
    path: "/en/english-speaking-legal-counsel-moscow-dinamo",
    title: "English-speaking legal counsel near Dinamo, Moscow | Verdico",
    h1: "English-speaking legal counsel near Dinamo, Moscow",
    description: "English-speaking legal counsel in Moscow near Dinamo and Petrovsky Park. Support for foreign clients on business, investment, contracts, disputes, enforcement and real estate matters.",
    alternatePath: "/fr/juriste-francophone-moscou-dinamo",
    relatedServices: ["/en/legal-services-moscow", "/en/investment-legal-support-russia", "/en/international-lawyer-russia"],
    serviceType: "Local English-speaking legal counsel in Moscow",
  },
  {
    path: "/en/investment-legal-support-russia",
    title: "Investment legal support in Russia | Verdico",
    h1: "Investment legal support in Russia",
    description: "Legal support for foreign and Russian investors in Russia: structuring, due diligence, transaction documents, risk allocation and implementation support.",
    alternatePath: "/ru/yuridicheskoe-soprovozhdenie-investitsiy",
    relatedServices: ["/en/legal-services-moscow", "/en/ma-transactions-russia", "/en/international-lawyer-russia"],
    serviceType: "Investment legal support",
  },
  {
    path: "/en/ma-transactions-russia",
    title: "M&A transactions in Russia | Verdico",
    h1: "M&A transactions in Russia",
    description: "Legal support for M&A and business transactions in Russia, including structuring, due diligence, negotiations, documentation and closing support.",
    alternatePath: "/ru/sdelki-m-a",
    relatedServices: ["/en/investment-legal-support-russia", "/en/arbitration-enforcement-russia", "/en/international-lawyer-russia"],
    serviceType: "M&A legal advisory",
  },
  {
    path: "/en/arbitration-enforcement-russia",
    title: "Arbitration and enforcement in Russia | Verdico",
    h1: "Arbitration and enforcement in Russia",
    description: "Legal support in Russian commercial disputes, arbitration, enforcement proceedings and recovery strategy for business clients and creditors.",
    alternatePath: "/ru/arbitrazhnye-spory",
    relatedServices: ["/en/ma-transactions-russia", "/en/investment-legal-support-russia", "/en/international-lawyer-russia"],
    serviceType: "Arbitration and enforcement",
  },
  {
    path: "/en/international-lawyer-russia",
    title: "International lawyer for Russia-related matters | Verdico",
    h1: "International lawyer for Russia-related matters",
    description: "Russian-law legal counsel for international clients dealing with business, investment, contracts, disputes and assets connected with Russia.",
    alternatePath: "/ru/mezhdunarodnyy-yurist-rossiya",
    relatedServices: ["/en/legal-services-moscow", "/en/investment-legal-support-russia", "/en/arbitration-enforcement-russia"],
    serviceType: "International legal counsel for Russia-related matters",
  },
];

// FR Service Pages
export const frServices: ServicePage[] = [
  {
    path: "/fr/services-juridiques-moscou",
    title: "Services juridiques à Moscou en français | Verdico",
    h1: "Services juridiques à Moscou en français",
    description: "Services juridiques à Moscou pour clients francophones : contrats, investissements, transactions M&A, litiges, exécution, immobilier et dossiers liés à la Russie.",
    alternatePath: "/en/legal-services-moscow",
    relatedServices: ["/fr/accompagnement-juridique-investisseurs-russie", "/fr/transactions-ma-russie", "/fr/arbitrage-et-execution-russie"],
    serviceType: "Services juridiques en français à Moscou",
  },
  {
    path: "/fr/juriste-francophone-moscou-dinamo",
    title: "Juriste francophone près de Dinamo, Moscou | Verdico",
    h1: "Juriste francophone près de Dinamo, Moscou",
    description: "Accompagnement juridique en français à Moscou, près de Dinamo et Petrovsky Park, pour clients étrangers, investisseurs, entreprises et dirigeants.",
    alternatePath: "/en/english-speaking-legal-counsel-moscow-dinamo",
    relatedServices: ["/fr/services-juridiques-moscou", "/fr/accompagnement-juridique-investisseurs-russie", "/fr/juriste-international-russie"],
    serviceType: "Accompagnement juridique local en français à Moscou",
  },
  {
    path: "/fr/accompagnement-juridique-investisseurs-russie",
    title: "Accompagnement juridique des investisseurs en Russie | Verdico",
    h1: "Accompagnement juridique des investisseurs en Russie",
    description: "Accompagnement juridique des investisseurs étrangers et russes en Russie : structuration, due diligence, documentation, risques et mise en œuvre.",
    alternatePath: "/ru/yuridicheskoe-soprovozhdenie-investitsiy",
    relatedServices: ["/fr/services-juridiques-moscou", "/fr/transactions-ma-russie", "/fr/juriste-international-russie"],
    serviceType: "Accompagnement juridique des investisseurs",
  },
  {
    path: "/fr/transactions-ma-russie",
    title: "Transactions M&A en Russie | Verdico",
    h1: "Transactions M&A en Russie",
    description: "Accompagnement juridique des transactions M&A en Russie : structuration, due diligence, négociation, documentation et closing.",
    alternatePath: "/ru/sdelki-m-a",
    relatedServices: ["/fr/accompagnement-juridique-investisseurs-russie", "/fr/arbitrage-et-execution-russie", "/fr/juriste-international-russie"],
    serviceType: "Accompagnement juridique des transactions M&A",
  },
  {
    path: "/fr/arbitrage-et-execution-russie",
    title: "Arbitrage et exécution en Russie | Verdico",
    h1: "Arbitrage et exécution en Russie",
    description: "Accompagnement juridique en matière de litiges commerciaux, arbitrage, procédures d’exécution et recouvrement en Russie.",
    alternatePath: "/ru/arbitrazhnye-spory",
    relatedServices: ["/fr/transactions-ma-russie", "/fr/accompagnement-juridique-investisseurs-russie", "/fr/juriste-international-russie"],
    serviceType: "Arbitrage, exécution et recouvrement",
  },
  {
    path: "/fr/juriste-international-russie",
    title: "Juriste international pour dossiers liés à la Russie | Verdico",
    h1: "Juriste international pour dossiers liés à la Russie",
    description: "Conseil juridique en droit russe pour clients internationaux confrontés à des questions d’affaires, d’investissement, de contrats, de litiges ou d’actifs en Russie.",
    alternatePath: "/ru/mezhdunarodnyy-yurist-rossiya",
    relatedServices: ["/fr/services-juridiques-moscou", "/fr/accompagnement-juridique-investisseurs-russie", "/fr/arbitrage-et-execution-russie"],
    serviceType: "Conseil juridique international lié à la Russie",
  },
];

// Get service by path
export const getServiceByPath = (path: string): ServicePage | undefined => {
  const normalizedPath = normalizeRoutePath(path);
  return [...ruServices, ...enServices, ...frServices].find(
    (service) => normalizeRoutePath(service.path) === normalizedPath,
  );
};

// Get language from path
export const getLangFromPath = (path: string): Language => {
  if (path.startsWith("/en")) {
    return "en";
  }

  if (path.startsWith("/fr")) {
    return "fr";
  }

  return "ru";
};

// Navigation items
export const getNavItems = (lang: Language) => {
  if (lang === "ru") {
    return {
      services: {
        label: "Услуги",
        items: ruServices.map((service) => ({ path: toFinalPath(service.path), label: service.h1 })),
      },
      about: { path: toFinalPath("/ru/o-nas"), label: "О нас" },
      contacts: { path: toFinalPath("/ru/kontakty"), label: "Контакты" },
      insights: { path: toFinalPath("/ru/insights"), label: "Аналитика" },
      home: { path: toFinalPath("/ru"), label: "Главная" },
    };
  }

  if (lang === "fr") {
    return {
      services: {
        label: "Services",
        items: frServices.map((service) => ({ path: toFinalPath(service.path), label: service.h1 })),
      },
      about: { path: toFinalPath("/fr/services-juridiques-moscou"), label: "Services à Moscou" },
      contacts: { path: `mailto:${EMAIL}`, label: "Contact" },
      insights: { path: toFinalPath("/fr/juriste-francophone-moscou-dinamo"), label: "Dinamo" },
      home: { path: toFinalPath("/fr"), label: "Accueil" },
    };
  }

  return {
    services: {
      label: "Services",
      items: enServices.map((service) => ({ path: toFinalPath(service.path), label: service.h1 })),
    },
    about: { path: toFinalPath("/en/legal-services-moscow"), label: "Moscow services" },
    contacts: { path: `mailto:${EMAIL}`, label: "Contact" },
    insights: { path: toFinalPath("/en/english-speaking-legal-counsel-moscow-dinamo"), label: "Dinamo area" },
    home: { path: toFinalPath("/en"), label: "Home" },
  };
};
