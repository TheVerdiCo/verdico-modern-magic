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

const HomeRu = () => {
  return (
    <MultilingualLayout>
      <SEOHead
        title="Юридические услуги для бизнеса в России | Verdi&Co."
        description="Верди и Ко. — юридическое сопровождение инвестиций, M&A, международных сделок и арбитража. Работаем с 2010 года. Россия и международные проекты."
        path="/ru"
      />
      <OrganizationSchema />

      {/* Hero Section — Verdico cinematic video hero */}
      <section className="relative -mt-24 min-h-[92vh] flex items-center overflow-hidden bg-verdico-hero text-white">
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
            <source src="/media/home-world.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-28 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="eyebrow mb-6 animate-fade-up">
              Юридическая практика с 2010 года
            </span>
            <h1 className="h1-hero-home text-white mt-6 mb-6 animate-fade-up animation-delay-100">
              Юридические услуги для бизнеса и инвесторов в России и зарубежом.
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl mx-auto animate-fade-up animation-delay-200">
              Коммерческие споры, имущественные вопросы, договоры и переговоры — там,
              где юридическая позиция должна быть связана с экономическим результатом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300">
              <Link to="/ru/kontakty">
                <Button size="lg" variant="secondary" className="gap-2 rounded-full">
                  Обсудить задачу
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/ru/o-nas">
                <Button variant="outline" size="lg" className="rounded-full bg-white/8 border-white/40 text-white hover:bg-white/15 hover:text-white">
                  О компании
                </Button>
              </Link>
            </div>

            {/* Stat rail — gold values + uppercase micro-labels (Verdico family) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mt-12 pt-6 border-t border-verdico-gold/25 animate-fade-up animation-delay-400">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-3xl md:text-4xl font-medium text-verdico-gold">
                    {stat.value}
                  </p>
                  <p className="eyebrow !text-white/70 mt-2 justify-center">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 px-4 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="eyebrow justify-center">Услуги</span>
            <h2 className="h2-section mt-5 mb-4">
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
                className="group verdico-card p-7 bg-card border border-border hover:shadow-hover hover:border-verdico-gold/40 transition-all"
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
              <span className="eyebrow">О компании</span>
              <h2 className="h2-section mt-5 mb-6">
                Джамал Гахвердиев — основатель практики
              </h2>
              <p className="text-muted-foreground mb-6">
                Юрист с международным образованием (Университет Лозанны, BPP Law School,
                Лондон) и опытом работы в российской правовой среде.
                Самостоятельная практика — с 2010 года.
              </p>
              <ul className="space-y-3 mb-8">
                {["Правовая позиция, доказательства, экономический смысл", "Российская и международная практика", "Конфиденциальность и дисциплина процесса"].map((item) => (
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
      <section className="py-16 md:py-24 px-4 bg-verdico-cta">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-white">
            Готовы обсудить вашу задачу?
          </h2>
          <p className="text-white/75 mb-8 max-w-xl mx-auto">
            Опишите ситуацию — мы свяжемся с вами и предложим варианты решения.
          </p>
          <Link to="/ru/kontakty">
            <Button size="lg" className="gap-2 btn-navy-glass rounded-full">
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
