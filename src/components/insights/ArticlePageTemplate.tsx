import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import type { RuArticle, ArticleSection } from "@/content/insights/ruArticles";
import { toFinalPath } from "@/lib/seo";

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
          className="narrative-copy mb-5"
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
              className="narrative-copy"
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
              className="narrative-copy"
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
      <BreadcrumbSchema articleTitle={article.title} articlePath={path} />

      {/* Article header */}
      <section className="pt-24 pb-8 md:pt-28 md:pb-12 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb + category row: wraps cleanly on narrow screens,
                keeps a clear gap and separator between the back link and the
                category label so they cannot visually merge. */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6 md:mb-8">
              <Link
                to={toFinalPath("/ru/insights")}
                className="inline-flex items-center gap-1.5 text-[13px] md:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Аналитика</span>
              </Link>
              <span
                aria-hidden="true"
                className="hidden sm:inline-block w-1 h-1 rounded-full bg-muted-foreground/40"
              />
              <span className="text-[11px] md:text-xs font-semibold uppercase text-verdico-gold tracking-[0.14em] md:tracking-[0.18em] break-words">
                {article.category}
              </span>
            </div>

            <h1 className="font-serif text-[26px] leading-[1.18] sm:text-[30px] sm:leading-[1.15] md:text-[36px] md:leading-[1.12] lg:text-[40px] lg:leading-[1.1] tracking-[-0.02em] mb-4 md:mb-5 text-foreground text-balance break-words">
              {article.title}
            </h1>
            <p className="text-[16px] leading-[1.6] md:text-lg md:leading-[1.55] text-muted-foreground italic break-words">
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
            <p className="narrative-copy mb-2">
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
          <Link to={toFinalPath("/ru/kontakty")}>
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
