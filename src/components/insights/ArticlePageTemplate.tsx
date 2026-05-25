import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import type { RuArticle, ArticleSection } from "@/content/insights/ruArticles";

interface ArticlePageTemplateProps {
  article: RuArticle;
}

// Minimal inline parser for **bold** markers only. No HTML injection:
// each segment is rendered as plain React text or wrapped in <strong>.
const renderInline = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
};

const renderSection = (section: ArticleSection, idx: number) => {
  switch (section.kind) {
    case "h2":
      return (
        <h2
          key={idx}
          className="font-serif text-[22px] md:text-2xl mt-10 md:mt-12 mb-4 md:mb-5 text-foreground"
        >
          {section.text}
        </h2>
      );
    case "p":
      return (
        <p
          key={idx}
          className="text-[16px] leading-[1.7] md:text-[17px] md:leading-[1.7] text-foreground/85 mb-5"
        >
          {renderInline(section.text)}
        </p>
      );
    case "ol":
      return (
        <ol
          key={idx}
          className="list-decimal pl-6 md:pl-7 mb-6 space-y-3 marker:text-verdico-blue-deep marker:font-serif marker:font-medium"
        >
          {section.items.map((item, i) => (
            <li
              key={i}
              className="text-[16px] leading-[1.65] md:text-[17px] md:leading-[1.65] text-foreground/85"
            >
              {renderInline(item)}
            </li>
          ))}
        </ol>
      );
    case "ul":
      return (
        <ul
          key={idx}
          className="list-disc pl-6 md:pl-7 mb-6 space-y-2.5 marker:text-verdico-gold"
        >
          {section.items.map((item, i) => (
            <li
              key={i}
              className="text-[16px] leading-[1.65] md:text-[17px] md:leading-[1.65] text-foreground/85"
            >
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
    case "disclaimer":
      return (
        <div
          key={idx}
          className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-border text-[13.5px] leading-[1.6] md:text-sm md:leading-relaxed text-muted-foreground"
        >
          {section.text}
        </div>
      );
  }
};

const ArticlePageTemplate = ({ article }: ArticlePageTemplateProps) => {
  const path = `/ru/insights/${article.slug}`;
  return (
    <MultilingualLayout>
      <SEOHead
        title={`${article.title} | Верди и Ко.`}
        description={article.excerpt}
        path={path}
      />

      {/* Article header */}
      <section className="pt-24 pb-8 md:pt-28 md:pb-12 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb-style back link */}
            <Link
              to="/ru/insights"
              className="inline-flex items-center gap-1 text-[13px] md:text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Аналитика
            </Link>

            <span className="eyebrow mb-4">{article.category}</span>
            <h1 className="font-serif text-[28px] leading-[1.15] md:text-[40px] md:leading-[1.1] tracking-[-0.02em] mt-3 mb-4 md:mt-4 md:mb-5 text-foreground">
              {article.title}
            </h1>
            <p className="text-[16px] leading-[1.6] md:text-lg md:leading-[1.55] text-muted-foreground italic">
              {article.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="pb-14 md:pb-20 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Lead — slightly larger, drop-cap-free, sets the register */}
            <p className="text-[17px] leading-[1.65] md:text-[19px] md:leading-[1.6] text-foreground mb-2">
              {article.lead}
            </p>

            {article.body.map(renderSection)}
          </div>
        </div>
      </article>

      {/* CTA — same navy transition used on service pages */}
      <section className="py-14 md:py-16 px-4 bg-verdico-cta">
        <div className="container text-center">
          <h2 className="font-serif text-[26px] leading-tight md:text-3xl mb-4 text-white">
            Обсудить вашу задачу?
          </h2>
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

export default ArticlePageTemplate;
