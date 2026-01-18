import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, Lock, Target } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import founderImage from "@/assets/founder.jpg";

const approach = [
  {
    icon: Target,
    title: "Дисциплина",
    description: "Чёткие сроки, структурированный процесс, регулярная отчётность по каждому этапу проекта.",
  },
  {
    icon: Lock,
    title: "Конфиденциальность",
    description: "NDA по запросу, защита информации, ограниченный круг лиц с доступом к материалам.",
  },
  {
    icon: Shield,
    title: "Управляемый процесс",
    description: "Прозрачное ценообразование, согласованный объём работ, контроль рисков на каждом этапе.",
  },
];

const focusAreas = [
  "Инвестиционные проекты и привлечение капитала",
  "Сделки M&A (слияния и поглощения)",
  "Международные сделки и трансграничные проекты",
  "Арбитражные и коммерческие споры",
  "Корпоративное структурирование",
];

const AboutRu = () => {
  return (
    <MultilingualLayout>
      <SEOHead
        title="О компании Верди и Ко — юридическая практика с 2010 года | VerdiCo"
        description="Верди и Ко — команда юристов-международников. Работаем с 2010 года. Специализация: инвестиции, M&A, международные сделки, арбитраж. Россия и международные проекты."
        path="/ru/o-nas"
      />

      {/* Hero */}
      <section className="py-16 md:py-24 px-4">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-sm text-gradient-brand font-medium uppercase tracking-wider">О компании</span>
            <h1 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
              Верди и Ко — юридическая практика с 2010 года
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Мы — команда юристов-международников, работающих с российскими и зарубежными 
              клиентами. Сопровождаем инвестиционные проекты, сделки M&A, трансграничные 
              операции и коммерческие споры.
            </p>
            <p className="text-muted-foreground">
              Работаем с бизнесом, инвесторами и частными клиентами в России и за рубежом. 
              Наша задача — обеспечить правовую поддержку на каждом этапе проекта: от 
              структурирования до закрытия сделки и разрешения споров.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 md:py-24 px-4 bg-secondary/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
                <img
                  src={founderImage}
                  alt="Джамал Джалильевич — основатель Верди и Ко"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-brand opacity-10 rounded-2xl -z-10" />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl md:text-4xl mb-2">
                Джамал Джалильевич
              </h2>
              <p className="text-gradient-brand font-medium mb-6">
                Основатель компании • Юрист-международник
              </p>
              <p className="text-muted-foreground mb-6">
                Более 14 лет практики в области корпоративного права, инвестиций 
                и международных сделок. Работал с проектами в России, СНГ, Европе 
                и на Ближнем Востоке.
              </p>
              <blockquote className="border-l-2 border-accent pl-6 italic text-muted-foreground">
                <span className="text-gradient-brand not-italic">"</span>
                Мы сопровождаем вашу задачу с учётом правовых, коммерческих и 
                процессуальных аспектов.
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
            <h2 className="font-serif text-3xl md:text-4xl mb-8 text-center">
              Ключевые направления
            </h2>
            <div className="space-y-4">
              {focusAreas.map((area) => (
                <div key={area} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
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
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Наш подход</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Три принципа, которые определяют нашу работу с каждым клиентом.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {approach.map((item) => (
              <div key={item.title} className="p-6 bg-card rounded-xl border border-border text-center">
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

      {/* CTA */}
      <section className="py-16 md:py-24 px-4">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Готовы обсудить задачу?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Свяжитесь с нами для первичной консультации. По запросу — NDA.
          </p>
          <Link to="/ru/kontakty">
            <Button size="lg" className="gap-2">
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
