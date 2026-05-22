import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import MultilingualLayout from "@/components/layout/MultilingualLayout";

const placeholderArticles = [
  {
    title: "Коммерческий спор начинается не с иска",
    description: "Коммерческий спор редко начинается в день подачи иска. Обычно он начинается раньше: в договоре, акте, переписке, молчании контрагента, неправильно оформленной передаче результата. Сильная позиция в суде строится не на эмоции, а на доказательствах. Поэтому первый вопрос в споре — не «можно ли подать иск», а «что именно мы сможем доказать».",
    category: "Коммерческие споры",
  },
];

const InsightsRu = () => {
  return (
    <MultilingualLayout>
      <SEOHead
        title="Insights — юридические материалы | Verdi&Co."
        description="Практические материалы от команды Верди и Ко.: M&A, инвестиции, арбитраж, международные сделки."
        path="/ru/insights"
      />

      <section className="py-16 md:py-24 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-sm text-gradient-brand font-medium uppercase tracking-wider">Insights</span>
            <h1 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
              Юридические материалы
            </h1>
            <p className="text-lg text-muted-foreground">
              Практические заметки от нашей команды: структуры сделок, типичные риски, 
              процессуальные нюансы.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {placeholderArticles.map((article) => (
              <article
                key={article.title}
                className="group p-6 bg-card rounded-xl border border-border hover:shadow-card hover:border-accent/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium px-2 py-1 bg-secondary rounded-full">
                    {article.category}
                  </span>
                </div>
                <h2 className="font-serif text-lg font-medium mb-3 group-hover:text-gradient-brand">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  {article.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Скоро
                  <ArrowRight className="w-4 h-4" />
                </span>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Раздел в разработке. Подпишитесь на обновления через{" "}
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
