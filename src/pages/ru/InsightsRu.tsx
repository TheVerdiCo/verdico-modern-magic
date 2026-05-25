import SEOHead from "@/components/seo/SEOHead";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import ArticleCard from "@/components/insights/ArticleCard";
import { ruArticles } from "@/content/insights/ruArticles";

const InsightsRu = () => {
  // Most-recent first by publication date (stable for ties via index).
  const articles = [...ruArticles].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : a.publishedAt > b.publishedAt ? -1 : 0
  );

  return (
    <MultilingualLayout>
      <SEOHead
        title="Аналитика — юридические материалы | Верди и Ко."
        description="Практические материалы по российскому праву: коммерческие споры, недвижимость и аренда, исполнение судебных актов, банкротство и субсидиарная ответственность."
        path="/ru/insights"
      />

      {/* Hero — preserved from previous landing */}
      <section className="relative -mt-24 md:min-h-[64vh] md:flex md:items-center overflow-hidden bg-verdico-hero text-white">
        <div className="insights-hero-media" aria-hidden="true">
          <img src="/media/insights-hero.avif" alt="" loading="eager" decoding="async" />
        </div>
        <div className="container relative z-10 pt-[clamp(252px,46vh,372px)] pb-12 md:pt-40 md:pb-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow justify-center mb-5 animate-fade-up">Аналитика</span>
            <h1 className="h1-hero text-white mt-4 mb-5 md:mt-5 md:mb-6 animate-fade-up animation-delay-100">
              Юридические материалы
            </h1>
            <p className="text-[16px] leading-[1.55] md:text-lg md:leading-normal text-white/85 animate-fade-up animation-delay-200">
              Заметки по практическим вопросам: коммерческие споры, доказательства,
              договорная работа, исполнительное производство.
            </p>
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section className="py-14 md:py-24 px-4">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </MultilingualLayout>
  );
};

export default InsightsRu;
