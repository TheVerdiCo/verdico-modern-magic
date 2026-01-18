import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import MultilingualLayout from "@/components/layout/MultilingualLayout";

const placeholderArticles = [
  {
    title: "Due Diligence Checklist for M&A Transactions",
    description: "Key areas to review, typical risks, and how to structure the due diligence process to minimize post-closing surprises.",
    category: "M&A",
    date: "2024",
  },
  {
    title: "Investment Structuring: Basic Models",
    description: "Overview of fundamental structures for raising investments in Russian companies: direct investments, convertible loans, options.",
    category: "Investments",
    date: "2024",
  },
  {
    title: "Arbitration Clauses: What to Watch For",
    description: "How to properly draft an arbitration clause in a commercial contract to avoid problems when disputes arise.",
    category: "Arbitration",
    date: "2024",
  },
];

const InsightsEn = () => {
  return (
    <MultilingualLayout>
      <SEOHead
        title="Insights — Legal Resources | VerdiCo"
        description="Practical legal resources from the VerdiCo team: M&A, investments, arbitration, international transactions. No generalities — just specifics."
        path="/en/insights"
      />

      <section className="py-16 md:py-24 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-sm text-gradient-brand font-medium uppercase tracking-wider">Insights</span>
            <h1 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
              Legal Resources
            </h1>
            <p className="text-lg text-muted-foreground">
              Practical notes from our team: deal structures, typical risks, 
              procedural nuances. No generalities — just specifics.
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
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </div>
                <h2 className="font-serif text-lg font-medium mb-3 group-hover:text-gradient-brand">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  {article.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Coming soon
                  <ArrowRight className="w-4 h-4" />
                </span>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Section in development. Subscribe for updates via{" "}
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

export default InsightsEn;
