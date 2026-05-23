import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import MultilingualLayout from "@/components/layout/MultilingualLayout";

const placeholderArticles = [
  {
    title: "Коммерческий спор начинается не с иска",
    description: "Коммерческий спор редко возникает в момент подачи иска. Обычно его основания формируются раньше: в условиях договора, актах, переписке, порядке передачи результата, просрочке, молчании контрагента или неправильно оформленном исполнении.\n\nСильная судебная позиция строится не на возмущении стороны, а на доказуемых фактах. Поэтому первый вопрос в споре — не “можно ли подать иск”, а “какие обстоятельства мы можем доказать и какое правовое последствие из них следует”.",
    category: "Коммерческие споры",
  },
];

const InsightsRu = () => {
  return (
    <MultilingualLayout>
      <SEOHead
        title="Аналитика — юридические материалы | Verdi&Co."
        description="Практические материалы от команды Верди и Ко.: M&A, инвестиции, арбитраж, международные сделки."
        path="/ru/insights"
      />

      {/* Hero — chess/strategy image with Verdico overlay + slow Ken Burns pan */}
      <section
        className="relative -mt-24 min-h-[64vh] flex items-center overflow-hidden bg-verdico-hero text-white"
      >
        <div className="insights-hero-media" aria-hidden="true">
          <img
            src="/media/insights-hero.avif"
            alt=""
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="container relative z-10 pt-32 pb-16 md:pt-40 md:pb-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow justify-center mb-6 animate-fade-up">Аналитика</span>
            <h1 className="h1-hero text-white mt-5 mb-6 animate-fade-up animation-delay-100">
              Юридические материалы
            </h1>
            <p className="text-lg text-white/85 animate-fade-up animation-delay-200">
              Заметки по практическим вопросам: коммерческие споры, доказательства,
              договорная работа, исполнительное производство.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="container">

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {placeholderArticles.map((article) => (
              <article
                key={article.title}
                className="group p-7 bg-card verdico-card border border-border hover:shadow-hover hover:border-verdico-gold/40 transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium px-2 py-1 bg-secondary rounded-full">
                    {article.category}
                  </span>
                </div>
                <h2 className="font-serif text-lg font-medium mb-3 group-hover:text-gradient-brand">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4 whitespace-pre-line">
                  {article.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Материал
                  <ArrowRight className="w-4 h-4" />
                </span>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Новые материалы публикуются по мере накопления практики. Обновления —{" "}
              <a 
                href="https://t.me/DjamalG" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Telegram
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </MultilingualLayout>
  );
};

export default InsightsRu;
