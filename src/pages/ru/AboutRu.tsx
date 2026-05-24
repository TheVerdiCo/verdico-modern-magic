import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, Lock, Target } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import founderImage from "@/assets/founder-image.avif";

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

const focusAreas = [
  "Коммерческие споры в арбитражных судах",
  "Взыскание задолженности и исполнительное производство",
  "Сделки и споры по недвижимости, аренда",
  "Корпоративные конфликты и вопросы банкротства",
  "Договорная работа и сопровождение переговоров",
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

      {/* Founder */}
      <section className="py-14 md:py-24 px-4 bg-secondary/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="relative order-2 lg:order-1 mx-auto lg:mx-0 max-w-[60%] sm:max-w-[55%] lg:max-w-none lg:w-[70%]">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-card">
                <img
                  src={founderImage}
                  alt="Джамал Гахвердиев — основатель Верди и Ко."
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-brand opacity-10 rounded-2xl -z-10" />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-[26px] md:text-4xl mb-2">
                Джамал Гахвердиев
              </h2>
              <p className="text-gradient-brand font-medium mb-5 md:mb-6 text-[14px] md:text-base">
                Основатель практики • Юрист
              </p>
              <p className="text-[15.5px] leading-[1.6] md:text-base md:leading-normal text-muted-foreground mb-6 text-left">
                Юрист с международным образованием (Университет Лозанны, BPP Law School,
                Лондон) и опытом работы в российской правовой среде.
                Самостоятельная практика — с 2010 года.
              </p>
              <blockquote className="border-l-2 border-accent pl-5 md:pl-6 italic text-[15.5px] leading-[1.6] md:text-base md:leading-normal text-muted-foreground text-left">
                <span className="text-gradient-brand not-italic">"</span>
                Каждое действие должно иметь назначение — защитить право, снизить риск,
                усилить переговорную позицию или приблизить исполнение.
                <span className="text-gradient-brand not-italic">"</span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-14 md:py-24 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="h2-section mb-7 md:mb-8 text-center">
              Ключевые направления
            </h2>
            <div className="space-y-3 md:space-y-4">
              {focusAreas.map((area) => (
                <div key={area} className="flex items-start gap-4 p-5 md:p-5 bg-card verdico-card border border-border">
                  <div className="w-6 h-6 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-[15.5px] leading-[1.5] md:text-base md:leading-normal">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-14 md:py-24 px-4 bg-secondary/50">
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
          <Link to="/ru/kontakty">
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
