import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import { toFinalPath } from "@/lib/seo";
import founderImage from "@/assets/verdico-founder-office.avif";
import founderImageMobile from "@/assets/verdico-founder-office-mobile.avif";

const trustStats = [
  { value: "14+", label: "лет практики" },
  { value: "60+", label: "успешных дел" },
  { value: "90%+", label: "выигранных дел" },
];

const serviceGroups = [
  {
    title: "Сделки и инвестиции",
    links: [
      { title: "Привлечение инвестиций", href: "/ru/privlechenie-investitsiy" },
      { title: "Сделки M&A", href: "/ru/sdelki-m-a" },
      {
        title: "Юридическое сопровождение инвестиций",
        href: "/ru/yuridicheskoe-soprovozhdenie-investitsiy",
      },
    ],
  },
  {
    title: "Споры и защита интересов",
    links: [
      { title: "Арбитражные споры", href: "/ru/arbitrazhnye-spory" },
      { title: "Другие правовые задачи", href: "/ru/kontakty" },
    ],
  },
  {
    title: "Недвижимость и собственность",
    links: [
      { title: "Недвижимость и аренда", href: "/ru/nedvizhimost-i-arenda" },
      { title: "Земля и недвижимость", href: "/ru/zemlya-i-nedvizhimost" },
    ],
  },
  {
    title: "Международные вопросы",
    links: [
      { title: "Вопросы с иностранным элементом", href: "/ru/mezhdunarodnyy-yurist-rossiya" },
      {
        title: "Миграционные вопросы за рубежом",
        href: "/ru/services/international-migration-coordination",
      },
      { title: "Международные активы и недвижимость", href: "/ru/mezhdunarodnye-aktivy" },
    ],
  },
];

const workSteps = [
  {
    title: "Разбираемся",
    copy: "Вы описываете ситуацию и присылаете документы, которые уже есть.",
  },
  {
    title: "Определяем варианты",
    copy: "Смотрим, в чём правовой вопрос, какие есть риски и возможные действия.",
  },
  {
    title: "Согласуем работу",
    copy: "Если можем быть полезны — определяем объём, сроки, стоимость и следующий шаг.",
  },
];

const HomeRu = () => {
  const location = useLocation();
  const seoPath = location.pathname === "/" ? "/" : "/ru";

  return (
    <MultilingualLayout>
      <SEOHead
        title="Верди и Ко. — сделки, споры, недвижимость и международные вопросы"
        description="Юридическая работа для частных клиентов, собственников и компаний: сделки, споры, недвижимость, инвестиции, документы, риски и переговоры."
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

            <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 border-t border-verdico-gold/25 pt-6 text-left sm:grid-cols-3 md:mt-12 md:gap-6 animate-fade-up animation-delay-400">
              {trustStats.map((stat) => (
                <div key={stat.label} className="border-l border-verdico-gold/35 pl-4">
                  <dt className="font-serif text-3xl font-medium leading-none text-verdico-gold md:text-4xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-[13px] font-medium uppercase tracking-[0.14em] text-white/75">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
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
                С чем можем помочь
              </h2>
            </div>

            <div className="border-y border-border/80 divide-y divide-border/80">
              {serviceGroups.map((group, index) => (
                <div
                  key={group.title}
                  className="grid gap-4 py-6 md:grid-cols-[72px_minmax(0,1fr)] md:gap-6 md:py-7"
                >
                  <span
                    className="font-serif text-[24px] leading-none text-verdico-gold md:text-[30px]"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h3 className="font-serif text-[22px] leading-snug md:text-2xl text-foreground">
                      {group.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                      {group.links.map((link) => (
                        <Link
                          key={link.href}
                          to={toFinalPath(link.href)}
                          className="inline-flex min-h-[32px] items-center gap-1 rounded-full border border-border/80 bg-background/70 px-3 text-[14px] font-medium text-accent transition-colors hover:border-verdico-gold/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          {link.title}
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-14 md:py-24 px-4">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[minmax(260px,0.72fr)_minmax(0,1.28fr)] lg:gap-14">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="eyebrow">Как мы работаем</span>
              <h2 className="h2-section mt-4 md:mt-5 mb-5 md:mb-6">
                Сначала — документы и факты. Потом — решение.
              </h2>
              <Link to={toFinalPath("/ru/kontakty")} className="inline-flex">
                <Button variant="outline" className="gap-2 h-12 md:h-10 rounded-full">
                  Обсудить ситуацию
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <ol className="border-y border-border/80 divide-y divide-border/80">
              {workSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="grid gap-4 py-5 md:grid-cols-[72px_minmax(0,1fr)] md:gap-6 md:py-6"
                >
                  <span className="font-serif text-[24px] leading-none text-verdico-gold md:text-[30px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="block">
                    <span className="block font-serif text-[21px] leading-snug md:text-2xl text-foreground">
                      {step.title}
                    </span>
                    <span className="mt-2 block text-[15px] leading-[1.6] md:text-base md:leading-relaxed text-muted-foreground">
                      {step.copy}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-14 md:py-24 px-4 bg-secondary/50">
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
            <div className="relative -mx-4 w-[calc(100%+2rem)] max-w-3xl sm:mx-auto sm:w-full lg:mx-0 lg:max-w-none lg:justify-self-end">
              <div className="overflow-hidden rounded-xl shadow-sm">
                <picture className="block w-full">
                  <source media="(max-width: 767px)" srcSet={founderImageMobile} />
                  <img
                    src={founderImage}
                    alt="Джамал Гахвердиев — основатель Верди и Ко."
                    className="h-auto w-full"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
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
