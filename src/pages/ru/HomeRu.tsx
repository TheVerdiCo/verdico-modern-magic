import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import { ruServices } from "@/lib/seo";
import founderImage from "@/assets/founder.jpg";

const stats = [
  { value: "14+", label: "лет практики" },
  { value: "60+", label: "успешных дел" },
  { value: "15+", label: "стран и юрисдикций" },
];

const HomeRu = () => {
  return (
    <MultilingualLayout>
      <SEOHead
        title="Юридические услуги для бизнеса в России | VerdiCo"
        description="Верди и Ко — юридическое сопровождение инвестиций, M&A, международных сделок и арбитража. Работаем с 2010 года. Россия и международные проекты."
        path="/ru"
      />
      <OrganizationSchema />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-secondary text-sm font-medium rounded-full mb-6 animate-fade-up">
              Юридическая практика с 2010 года
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-up animation-delay-100">
              Юридические услуги для бизнеса и инвесторов в России
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up animation-delay-200">
              Верди и Ко — команда юристов-международников, сопровождающая инвестиции, 
              сделки M&A, трансграничные проекты и коммерческие споры. Работаем в России 
              и за рубежом для бизнеса, инвесторов и частных клиентов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300">
              <Link to="/ru/kontakty">
                <Button size="lg" className="gap-2">
                  Обсудить задачу
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/ru/o-nas">
                <Button variant="outline" size="lg">
                  О компании
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mt-16 animate-fade-up animation-delay-400">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-3xl md:text-4xl text-gradient-brand font-medium">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 px-4 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-sm text-gradient-brand font-medium uppercase tracking-wider">Услуги</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-4 mb-4">
              Ключевые направления практики
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Каждый проект уникален. Мы анализируем задачу и предлагаем оптимальное решение.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ruServices.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="group p-6 bg-card rounded-xl border border-border hover:shadow-card hover:border-accent/30 transition-all"
              >
                <h3 className="font-serif text-xl font-medium mb-3 group-hover:text-gradient-brand">
                  {service.h1}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description.slice(0, 100)}...
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Подробнее
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24 px-4">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm text-gradient-brand font-medium uppercase tracking-wider">О компании</span>
              <h2 className="font-serif text-3xl md:text-4xl mt-4 mb-6">
                Джамал Джалильевич — основатель
              </h2>
              <p className="text-muted-foreground mb-6">
                Юрист-международник с практикой более 14 лет. Специализация: 
                инвестиционные проекты, корпоративные сделки, международный арбитраж.
              </p>
              <ul className="space-y-3 mb-8">
                {["Работаем с 2010 года", "Международная практика", "Конфиденциальность и результат"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/ru/o-nas">
                <Button variant="outline" className="gap-2">
                  Подробнее о нас
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
                <img
                  src={founderImage}
                  alt="Джамал Джалильевич — основатель Верди и Ко"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-brand opacity-10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Готовы обсудить вашу задачу?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Опишите ситуацию — мы свяжемся с вами и предложим варианты решения.
          </p>
          <Link to="/ru/kontakty">
            <Button variant="secondary" size="lg" className="gap-2">
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
