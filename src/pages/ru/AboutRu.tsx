import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Target } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import { toFinalPath } from "@/lib/seo";

const usefulAreas = [
  {
    title: "Споры и переговоры",
    description:
      "Когда правовая позиция должна быть не только заявлена, но и выдержана в переписке, переговорах или процессе.",
  },
  {
    title: "Сделки и структура",
    description:
      "Когда договоренность требует ясной юридической формы, распределения рисков и управляемого порядка исполнения.",
  },
  {
    title: "Недвижимость и активы",
    description:
      "Когда значение имеют право на объект, режим пользования, обременения, регистрация, передача или защита актива.",
  },
  {
    title: "Инвестиционные ситуации",
    description:
      "Когда решение зависит от проверки прав, полномочий, обязательств, корпоративной структуры и реальной цены риска.",
  },
  {
    title: "Договоры и контроль рисков",
    description:
      "Когда текст договора должен отражать не намерения вообще, а конкретный имущественный интерес сторон.",
  },
  {
    title: "Трансграничный контекст",
    description:
      "Когда российская правовая задача связана с иностранным элементом, контрагентом, активом, платежом или юрисдикцией.",
  },
];

const approach = [
  {
    icon: Target,
    title: "Правовая позиция",
    description: "До начала работы определяются предмет спора, доказательственная база, процессуальный риск и экономический смысл действий.",
  },
  {
    icon: Lock,
    title: "Доказательства",
    description: "Договор, переписка, акты и фактические обстоятельства проверяются до подачи документов, а не в ходе процесса.",
  },
  {
    icon: Shield,
    title: "Экономический результат",
    description: "Каждое действие имеет назначение: защитить право, снизить риск, усилить переговорную позицию или приблизить исполнение.",
  },
];

const AboutRu = () => {
  return (
    <MultilingualLayout>
      <SEOHead
        title="О компании Верди и Ко. — юридическая практика с 2010 года"
        description="Верди и Ко. — команда юристов-международников. Работаем с 2010 года. Специализация: инвестиции, M&A, международные сделки, арбитраж. Россия и международные проекты."
        path="/ru/o-nas"
      />

      {/* Hero — Verdico cinematic watch video */}
      <section className="relative -mt-24 md:min-h-[78vh] md:flex md:items-center overflow-hidden bg-verdico-hero text-white">
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
            <source src="/media/home-watch.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container relative z-10 pt-[clamp(252px,46vh,372px)] pb-14 md:pt-40 md:pb-24 px-4">
          <div className="max-w-3xl">
            <span className="eyebrow mb-5 animate-fade-up">О компании</span>
            <h1 className="h1-hero text-white mt-4 mb-5 md:mt-5 md:mb-6 animate-fade-up animation-delay-100">
              Верди и Ко. — юридическая и консалтинговая практика
            </h1>
            <p className="text-[16px] leading-[1.55] md:text-lg md:leading-normal text-white/85 mb-4 animate-fade-up animation-delay-200 text-left">
              Верди и Ко. работает с коммерческими, имущественными и договорными вопросами.
              Суд, переговоры, претензия, договор или исполнительное производство
              рассматриваются не как формальность, а как инструмент защиты конкретного
              интереса доверителя.
            </p>
            <p className="text-[15.5px] leading-[1.55] md:text-base md:leading-normal text-white/80 animate-fade-up animation-delay-300 text-left">
              Работа строится вокруг трёх вещей: правовая позиция, доказательства и
              экономический смысл. Там, где возможны переговоры, они должны быть
              подготовлены так же тщательно, как судебный процесс.
            </p>
          </div>
        </div>
      </section>

      {/* Where we are useful — editorial section */}
      <section className="py-14 md:py-24 px-4 bg-secondary/50">
        <div className="container">
          <div className="max-w-3xl mb-10 md:mb-14">
            <span className="eyebrow mb-4">Практика</span>
            <h2 className="h2-section mt-4 md:mt-5 mb-5 md:mb-6">
              Где мы можем быть полезны
            </h2>
            <p className="text-[15.5px] leading-[1.65] md:text-base md:leading-relaxed text-muted-foreground text-left">
              Мы подключаемся к вопросам, в которых правовая форма влияет на имущество,
              контроль, переговорную позицию или дальнейшее движение бизнеса.
              В таких ситуациях важны не громкие формулы, а точное понимание интереса,
              состава прав, пределов риска и допустимого способа действия.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {usefulAreas.map((item, index) => (
              <article
                key={item.title}
                className="p-6 md:p-7 bg-card verdico-card border border-border text-left"
              >
                <div className="flex items-center gap-3 mb-4 md:mb-5">
                  <span className="font-serif text-accent text-[13px] tracking-[0.18em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-border" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-[19px] md:text-xl font-medium mb-2 md:mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.6] md:text-sm md:leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          {/* Editorial signature mark */}
          <div className="mt-14 md:mt-20 max-w-3xl mx-auto text-center">
            <div className="h-px w-12 md:w-16 bg-accent/60 mx-auto mb-6 md:mb-8" aria-hidden="true" />
            <p className="font-serif italic text-[16px] leading-[1.7] md:text-lg md:leading-relaxed text-foreground/85 mb-5 md:mb-6">
              В основе работы Верди и Ко. — точность правовой конструкции и понимание
              того, какой результат действительно имеет значение для доверителя.
            </p>
            <p className="font-serif text-[17px] md:text-xl tracking-[0.22em] uppercase text-gradient-brand">
              Верди и Ко.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-14 md:py-24 px-4">
        <div className="container">
          <div className="text-center mb-10 md:mb-12">
            <span className="eyebrow justify-center">Подход</span>
            <h2 className="h2-section mt-4 md:mt-5 mb-3 md:mb-4">Принципы работы</h2>
            <p className="text-[15.5px] leading-[1.55] md:text-base md:leading-normal text-muted-foreground max-w-2xl mx-auto text-left md:text-center">
              Мы не подменяем юридическую работу общими обещаниями. Позиция должна быть
              собрана до подачи документов, а не в ходе импровизации.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {approach.map((item) => (
              <div key={item.title} className="p-5 md:p-7 bg-card verdico-card border border-border text-left md:text-center">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-lg bg-gradient-brand flex items-center justify-center mb-3 md:mb-4 md:mx-auto">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="font-serif text-[19px] md:text-xl font-medium mb-2 md:mb-3">{item.title}</h3>
                <p className="text-[15px] leading-[1.55] md:text-sm md:leading-normal text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — navy transition into footer */}
      <section className="py-14 md:py-24 px-4 bg-verdico-cta">
        <div className="container text-center">
          <h2 className="font-serif text-[28px] leading-tight md:text-4xl mb-4 text-white">
            Готовы обсудить задачу?
          </h2>
          <p className="text-[15.5px] leading-[1.55] md:text-base md:leading-normal text-white/75 mb-7 md:mb-8 max-w-xl mx-auto">
            Свяжитесь с нами для первичной консультации. По запросу — NDA.
          </p>
          <Link to={toFinalPath("/ru/kontakty")}>
            <Button size="lg" className="gap-2 btn-navy-glass rounded-full h-12 md:h-11">
              Связаться
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </MultilingualLayout>
  );
};

export default AboutRu;
