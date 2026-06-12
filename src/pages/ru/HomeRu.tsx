import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import { ruServices } from "@/lib/seo";
import founderImage from "@/assets/founder-image.avif";

const stats = [
  { value: "14+", label: "лет практики" },
  { value: "60+", label: "успешных дел" },
  { value: "15+", label: "стран и юрисдикций" },
];

const homeCardCopy: Record<string, { title: string; summary: string }> = {
  "/ru/privlechenie-investitsiy": {
    title: "Инвестиционные ситуации",
    summary:
      "Привлечение инвестиций: структура сделки, проверка прав и полномочий, распределение рисков и условия выхода.",
  },
  "/ru/sdelki-m-a": {
    title: "Сделки и структура",
    summary:
      "Сопровождение M&A и иных сделок: due diligence, договорная конструкция, переговоры и управляемый порядок исполнения.",
  },
  "/ru/yuridicheskoe-soprovozhdenie-investitsiy": {
    title: "Договоры и контроль рисков",
    summary:
      "Договорная и корпоративная работа инвестиционного цикла: точная формулировка прав, обязательств и пределов ответственности.",
  },
  "/ru/mezhdunarodnyy-yurist-rossiya": {
    title: "Трансграничный контекст",
    summary:
      "Правовые задачи с иностранным элементом — контрагентом, активом, платежом или применимой юрисдикцией.",
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
  "/ru/services/international-migration-coordination": {
    title: "Миграционная координация",
    summary:
      "Координация с иностранными специалистами: резидентство, семейное воссоединение, документы, сроки, расходы и риски.",
  },
};

const HomeRu = () => {
  return (
    <MultilingualLayout>
      <SEOHead
        title="Верди и Ко. — право, сделки и инвестиционные проекты"
        description="Юридическое и коммерческое сопровождение недвижимости, инфраструктуры, ЦОДов, энергетики и международных проектов. Конфиденциально, структурно, по делу."
        path="/ru"
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
              Юридические услуги для бизнеса и инвесторов в России и за рубежом.
            </h1>
            <p className="text-[16px] leading-[1.55] md:text-xl md:leading-normal text-white/85 mb-7 md:mb-8 max-w-2xl mx-auto animate-fade-up animation-delay-200">
              Споры, сделки, договоры и переговоры — там,
              где правовая форма должна соответствовать имущественному интересу.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-up animation-delay-300">
              <Link to="/ru/kontakty">
                <Button size="lg" variant="secondary" className="gap-2 rounded-full h-12 md:h-11 w-full sm:w-auto">
                  Обсудить задачу
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/ru/o-nas">
                <Button variant="outline" size="lg" className="rounded-full h-12 md:h-11 w-full sm:w-auto bg-white/8 border-white/40 text-white hover:bg-white/15 hover:text-white">
                  О компании
                </Button>
              </Link>
            </div>

            {/* Stat rail — gold values + uppercase micro-labels (Verdico family) */}
            <div className="grid grid-cols-3 gap-3 md:gap-8 max-w-3xl mx-auto mt-10 md:mt-12 pt-6 border-t border-verdico-gold/25 animate-fade-up animation-delay-400">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-2xl md:text-4xl font-medium text-verdico-gold">
                    {stat.value}
                  </p>
                  <p className="eyebrow !text-white/70 mt-2 justify-center !text-[10px] md:!text-[11px]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-14 md:py-24 px-4 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-10 md:mb-12">
            <span className="eyebrow justify-center">Услуги</span>
            <h2 className="h2-section mt-4 md:mt-5 mb-3 md:mb-4">
              Ключевые направления практики
            </h2>
            <p className="text-[15.5px] leading-[1.55] md:text-base md:leading-normal text-muted-foreground max-w-2xl mx-auto text-left md:text-center">
              Направления, в которых юридическая форма решения определяет имущественный,
              переговорный и процессуальный результат.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {ruServices.map((service) => {
              const copy = homeCardCopy[service.path];
              const title = copy?.title ?? service.h1;
              const summary = copy?.summary ?? `${service.description.slice(0, 100)}...`;
              return (
                <Link
                  key={service.path}
                  to={service.path}
                  className="group verdico-card p-5 md:p-7 bg-card border border-border hover:shadow-hover hover:border-verdico-gold/40 transition-all"
                >
                  <h3 className="font-serif text-[19px] md:text-xl font-medium mb-2.5 md:mb-3 group-hover:text-gradient-brand">
                    {title}
                  </h3>
                  <p className="text-[15px] leading-[1.55] md:text-sm md:leading-normal text-muted-foreground mb-4">
                    {summary}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[14.5px] md:text-sm font-medium text-accent min-h-[28px]">
                    Подробнее
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}

            {/* Russian domestic legal-practice vector */}
            <Link
              to="/ru/kontakty"
              className="group verdico-card p-5 md:p-7 bg-card border border-border hover:shadow-hover hover:border-verdico-gold/40 transition-all"
            >
              <h3 className="font-serif text-[19px] md:text-xl font-medium mb-2.5 md:mb-3 group-hover:text-gradient-brand">
                Российская правовая практика
              </h3>
              <p className="text-[15px] leading-[1.55] md:text-sm md:leading-normal text-muted-foreground mb-4">
                Договоры, недвижимость, корпоративные и имущественные вопросы — там, где
                значение имеют правовая форма, состав прав и порядок действий.
              </p>
              <span className="inline-flex items-center gap-1 text-[14.5px] md:text-sm font-medium text-accent min-h-[28px]">
                Обсудить задачу
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

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
              <Link to="/ru/o-nas">
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

      {/* CTA Section — navy transition into footer */}
      <section className="py-14 md:py-24 px-4 bg-verdico-cta">
        <div className="container text-center">
          <h2 className="font-serif text-[28px] leading-tight md:text-4xl mb-4 text-white">
            Готовы обсудить вашу задачу?
          </h2>
          <p className="text-[15.5px] leading-[1.55] md:text-base md:leading-normal text-white/75 mb-7 md:mb-8 max-w-xl mx-auto">
            Опишите ситуацию — мы свяжемся с вами и предложим варианты решения.
          </p>
          <Link to="/ru/kontakty">
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
