import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
    title: "Правовая позиция",
    description: "До начала работы определяются предмет спора, доказательственная база, процессуальный риск и экономический смысл действий.",
  },
  {
    title: "Доказательства",
    description: "Договор, переписка, акты и фактические обстоятельства проверяются до подачи документов, а не в ходе процесса.",
  },
  {
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
          <div className="grid gap-10 lg:grid-cols-[minmax(260px,0.72fr)_minmax(0,1.28fr)] lg:gap-14">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="eyebrow">Практика</span>
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

            <div>
              <div className="border-y border-border/80 divide-y divide-border/80">
                {usefulAreas.map((item, index) => (
                  <article
                    key={item.title}
                    className="grid gap-4 py-5 md:grid-cols-[72px_minmax(0,1fr)] md:gap-6 md:py-6"
                  >
                    <span
                      className="font-serif text-[24px] leading-none text-verdico-gold md:text-[30px]"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="block min-w-0">
                      <h3 className="font-serif text-[21px] leading-snug md:text-2xl text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-[1.6] md:text-base md:leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </span>
                  </article>
                ))}
              </div>

              <div className="mt-10 border-t border-verdico-gold/35 pt-8 md:mt-12 md:pt-10">
                <p className="font-serif italic text-[17px] leading-[1.7] md:text-xl md:leading-relaxed text-foreground/85">
                  В основе работы Верди и Ко. — точность правовой конструкции и понимание
                  того, какой результат действительно имеет значение для доверителя.
                </p>
                <p className="mt-5 font-serif text-[15px] md:text-lg tracking-[0.22em] uppercase text-gradient-brand">
                  Верди и Ко.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-14 md:py-24 px-4">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[minmax(260px,0.72fr)_minmax(0,1.28fr)] lg:gap-14">
            <div>
              <span className="eyebrow">Подход</span>
              <h2 className="h2-section mt-4 md:mt-5 mb-5 md:mb-6">Принципы работы</h2>
              <p className="text-[15.5px] leading-[1.65] md:text-base md:leading-relaxed text-muted-foreground text-left">
                Мы не подменяем юридическую работу общими обещаниями. Позиция должна быть
                собрана до подачи документов, а не в ходе импровизации.
              </p>
            </div>

            <div className="border-y border-border/80 divide-y divide-border/80">
              {approach.map((item, index) => (
                <article
                  key={item.title}
                  className="grid gap-4 py-5 md:grid-cols-[72px_minmax(0,1fr)] md:gap-6 md:py-6"
                >
                  <span
                    className="font-serif text-[24px] leading-none text-verdico-gold md:text-[30px]"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="block min-w-0">
                    <h3 className="font-serif text-[21px] leading-snug md:text-2xl text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-[1.6] md:text-base md:leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — light editorial transition into footer */}
      <section className="py-12 md:py-14 px-4 bg-verdico-closing">
        <div className="container">
          <div className="mx-auto flex max-w-4xl flex-col gap-5 border-t border-verdico-gold/35 pt-8 text-left md:flex-row md:items-center md:justify-between md:gap-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-[28px] leading-tight md:text-4xl text-verdico-ink">
                Готовы обсудить задачу?
              </h2>
              <p className="mt-4 text-[15.5px] leading-[1.55] md:text-base md:leading-normal text-verdico-ink/70">
                Свяжитесь с нами для первичной консультации. По запросу — NDA.
              </p>
            </div>
            <Link to={toFinalPath("/ru/kontakty")} className="inline-flex">
              <Button size="lg" className="gap-2 btn-navy-glass rounded-full h-12 md:h-11">
                Связаться
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MultilingualLayout>
  );
};

export default AboutRu;
