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
      <section className="relative -mt-24 min-h-[78vh] flex items-center overflow-hidden bg-verdico-hero text-white">
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
        <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-24 px-4">
          <div className="max-w-3xl">
            <span className="eyebrow mb-6 animate-fade-up">О компании</span>
            <h1 className="h1-hero text-white mt-5 mb-6 animate-fade-up animation-delay-100">
              Верди и Ко. — юридическая и консалтинговая практика
            </h1>
            <p className="text-lg text-white/85 mb-4 animate-fade-up animation-delay-200">
              Верди и Ко. работает с коммерческими, имущественными и договорными вопросами.
              Суд, переговоры, претензия, договор или исполнительное производство
              рассматриваются не как формальность, а как инструмент защиты конкретного
              интереса доверителя.
            </p>
            <p className="text-white/80 animate-fade-up animation-delay-300">
              Работа строится вокруг трёх вещей: правовая позиция, доказательства и
              экономический смысл. Там, где возможны переговоры, они должны быть
              подготовлены так же тщательно, как судебный процесс.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 md:py-24 px-4 bg-secondary/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1 mx-auto lg:mx-0 max-w-[70%] lg:max-w-none lg:w-[70%]">
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
              <h2 className="font-serif text-3xl md:text-4xl mb-2">
                Джамал Гахвердиев
              </h2>
              <p className="text-gradient-brand font-medium mb-6">
                Основатель практики • Юрист
              </p>
              <p className="text-muted-foreground mb-6">
                Юрист с международным образованием (Университет Лозанны, BPP Law School,
                Лондон) и опытом работы в российской правовой среде.
                Самостоятельная практика — с 2010 года.
              </p>
              <blockquote className="border-l-2 border-accent pl-6 italic text-muted-foreground">
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
      <section className="py-16 md:py-24 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="h2-section mb-8 text-center">
              Ключевые направления
            </h2>
            <div className="space-y-4">
              {focusAreas.map((area) => (
                <div key={area} className="flex items-center gap-4 p-5 bg-card verdico-card border border-border">
                  <div className="w-6 h-6 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-24 px-4 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="eyebrow justify-center">Подход</span>
            <h2 className="h2-section mt-5 mb-4">Принципы работы</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы не подменяем юридическую работу общими обещаниями. Позиция должна быть 
              собрана до подачи документов, а не в ходе импровизации.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {approach.map((item) => (
              <div key={item.title} className="p-7 bg-card verdico-card border border-border text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-brand flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — navy transition into footer */}
      <section className="py-16 md:py-24 px-4 bg-verdico-cta">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-white">
            Готовы обсудить задачу?
          </h2>
          <p className="text-white/75 mb-8 max-w-xl mx-auto">
            Свяжитесь с нами для первичной консультации. По запросу — NDA.
          </p>
          <Link to="/ru/kontakty">
            <Button size="lg" className="gap-2 btn-navy-glass rounded-full">
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
