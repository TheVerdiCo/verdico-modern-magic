import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import TechnologyPartnershipsRu from "@/components/TechnologyPartnershipsRu";
import { ruServices, toFinalPath } from "@/lib/seo";
import founderImage from "@/assets/founder-image.avif";

const homeCardCopy: Record<string, { title: string; summary: string }> = {
  "/ru/privlechenie-investitsiy": {
    title: "Привлечение инвестиций",
    summary:
      "Структура сделки, проверка прав и полномочий, распределение рисков и условия выхода.",
  },
  "/ru/sdelki-m-a": {
    title: "Сделки M&A",
    summary:
      "Due diligence, договорная конструкция, переговоры и закрытие сделки.",
  },
  "/ru/yuridicheskoe-soprovozhdenie-investitsiy": {
    title: "Инвестиционные сделки",
    summary:
      "Договоры, корпоративные решения, контроль обязательств и защита прав инвестора.",
  },
  "/ru/mezhdunarodnyy-yurist-rossiya": {
    title: "Вопросы с иностранным элементом",
    summary:
      "Договоры, расчёты, юрисдикция и структура взаимодействия.",
  },
  "/ru/arbitrazhnye-spory": {
    title: "Споры и переговоры",
    summary:
      "Коммерческие, договорные и имущественные споры — позиция, доказательства и дисциплина процесса в арбитраже.",
  },
  "/ru/nedvizhimost-i-arenda": {
    title: "Недвижимость и активы",
    summary:
      "Недвижимость и аренда: договоры, защита собственника, имущественные споры и оспаривание кадастровой стоимости.",
  },
  "/ru/zemlya-i-nedvizhimost": {
    title: "Земля и недвижимость",
    summary:
      "Правовое сопровождение земельных участков, объектов недвижимости и городских активов: структура прав, аренда, выкуп, кадастр, ограничения, споры с органами власти и защита интересов собственников.",
  },
  "/ru/services/international-migration-coordination": {
    title: "Миграционные вопросы за рубежом",
    summary:
      "Резидентство, семейное воссоединение, документы, сроки, расходы и риски с участием иностранных специалистов.",
  },
  "/ru/mezhdunarodnye-aktivy": {
    title: "Международные активы",
    summary:
      "Зарубежная недвижимость, резидентские маршруты и доходные объекты: структура сделки, проверка, координация.",
  },
};

const homeServiceItems = [
  ...ruServices.map((service) => {
    const copy = homeCardCopy[service.path];
    return {
      path: service.path,
      title: copy?.title ?? service.h1,
      summary: copy?.summary ?? `${service.description.slice(0, 100)}...`,
      action: "Подробнее",
    };
  }),
  {
    path: "/ru/kontakty",
    title: "Другие правовые задачи",
    summary:
      "Договоры, недвижимость, корпоративные и имущественные вопросы, где важны состав прав и порядок действий.",
    action: "Обсудить задачу",
  },
];

const HomeRu = () => {
  const location = useLocation();
  const seoPath = location.pathname === "/" ? "/" : "/ru";

  return (
    <MultilingualLayout>
      <SEOHead
        title="Верди и Ко. — право, сделки и инвестиционные проекты"
        description="Юридическое и коммерческое сопровождение недвижимости, инфраструктуры, ЦОДов, энергетики и международных проектов. Конфиденциально, структурно, по делу."
        path={seoPath}
      />
      <OrganizationSchema />

      {/* Hero Section — Verdico cinematic video hero */}
      <section className="relative -mt-24 md:min-h-[92vh] md:flex md:items-center overflow-hidden bg-verdico-hero text-white">
        <div className="verdico-hero-media" aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster=""
            disablePictureInPicture
          >
            <source src="/media/home-world-lite.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container relative z-10 pt-[clamp(252px,46vh,372px)] pb-14 md:pt-40 md:pb-28 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="eyebrow mb-5 animate-fade-up">
              Юридическая практика с 2010 года
            </span>
            <h1 className="h1-hero-home text-white mt-5 mb-5 md:mt-6 md:mb-6">
              Люди, бизнес, право.
            </h1>
            <p className="text-[16px] leading-[1.55] md:text-xl md:leading-normal text-white/85 mb-7 md:mb-8 max-w-2xl mx-auto animate-fade-up animation-delay-200">
              Помогаем частным клиентам, собственникам и компаниям в сделках, спорах,
              недвижимости, инвестициях и международных вопросах: документы, риски,
              переговоры, порядок действий.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-up animation-delay-300">
              <Link to={toFinalPath("/ru/kontakty")}>
                <Button size="lg" variant="secondary" className="gap-2 rounded-full h-12 md:h-11 w-full sm:w-auto">
                  Обсудить задачу
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to={toFinalPath("/ru/o-nas")}>
                <Button variant="outline" size="lg" className="rounded-full h-12 md:h-11 w-full sm:w-auto bg-white/8 border-white/40 text-white hover:bg-white/15 hover:text-white">
                  О компании
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-14 md:py-24 px-4 bg-secondary/50">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[minmax(260px,0.72fr)_minmax(0,1.28fr)] lg:gap-14">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="eyebrow">Услуги</span>
              <h2 className="h2-section mt-4 md:mt-5 mb-5 md:mb-6">
                Основные направления работы
              </h2>
            </div>

            <div className="border-y border-border/80 divide-y divide-border/80">
              {homeServiceItems.map((service, index) => (
                <Link
                  key={service.path}
                  to={toFinalPath(service.path)}
                  className="group grid gap-4 py-5 md:grid-cols-[72px_minmax(0,1fr)_auto] md:items-start md:gap-6 md:py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <span
                    className="font-serif text-[24px] leading-none text-verdico-gold md:text-[30px]"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="block min-w-0">
                    <span className="block font-serif text-[21px] leading-snug md:text-2xl text-foreground group-hover:text-gradient-brand">
                      {service.title}
                    </span>
                    <span className="mt-2 block text-[15px] leading-[1.6] md:text-base md:leading-relaxed text-muted-foreground">
                      {service.summary}
                    </span>
                  </span>

                  <span className="inline-flex min-h-[32px] items-center gap-1 text-[14.5px] md:text-sm font-medium text-accent md:justify-self-end">
                    {service.action}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TechnologyPartnershipsRu />

      {/* About Preview */}
      <section className="py-14 md:py-24 px-4">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <span className="eyebrow">О компании</span>
              <h2 className="h2-section mt-4 md:mt-5 mb-5 md:mb-6">
                Джамал Гахвердиев — основатель практики
              </h2>
              <p className="text-[15.5px] leading-[1.6] md:text-base md:leading-normal text-muted-foreground mb-6 text-left">
                Юрист с международным образованием (Университет Лозанны, BPP Law School,
                Лондон) и опытом работы в российской правовой среде.
                Самостоятельная практика — с 2010 года.
              </p>
              <ul className="space-y-3 mb-8">
                {["Правовая позиция, доказательства, экономический смысл", "Российская и международная практика", "Конфиденциальность и дисциплина процесса"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[15px] leading-[1.55] md:text-sm md:leading-normal">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to={toFinalPath("/ru/o-nas")}>
                <Button variant="outline" className="gap-2 h-12 md:h-10 rounded-full">
                  Подробнее о нас
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative mx-auto lg:mx-0 max-w-[70%] lg:max-w-none lg:w-[70%] lg:justify-self-end">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-card">
                <img
                  src={founderImage}
                  alt="Джамал Гахвердиев — основатель Верди и Ко."
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-brand opacity-10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section — light editorial transition into footer */}
      <section className="py-14 md:py-24 px-4 bg-verdico-closing">
        <div className="container text-center">
          <h2 className="font-serif text-[28px] leading-tight md:text-4xl mb-4 text-verdico-ink">
            Готовы обсудить вашу задачу?
          </h2>
          <p className="text-[15.5px] leading-[1.55] md:text-base md:leading-normal text-verdico-ink/70 mb-7 md:mb-8 max-w-xl mx-auto">
            Опишите ситуацию — мы предложим возможный порядок действий.
          </p>
          <Link to={toFinalPath("/ru/kontakty")}>
            <Button size="lg" className="gap-2 btn-navy-glass rounded-full h-12 md:h-11">
              Связаться с нами
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </MultilingualLayout>
  );
};

export default HomeRu;
