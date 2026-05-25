import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { RuArticle } from "@/content/insights/ruArticles";

interface ArticleCardProps {
  article: RuArticle;
  className?: string;
}

// Language-neutral component used only on RU pages for now.
// All visible copy (label "Читать", category, title, excerpt) is sourced from
// the RU article object — no hardcoded EN strings.
const ArticleCard = ({ article, className = "" }: ArticleCardProps) => {
  const href = `/ru/insights/${article.slug}`;
  return (
    <Link
      to={href}
      className={`group flex flex-col p-5 md:p-7 bg-card verdico-card border border-border hover:shadow-hover hover:border-verdico-gold/40 transition-all ${className}`}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[11px] md:text-xs font-medium px-2.5 py-1 bg-secondary rounded-full">
          {article.category}
        </span>
      </div>
      <h2 className="font-serif text-[19px] md:text-lg font-medium mb-3 group-hover:text-gradient-brand">
        {article.title}
      </h2>
      <p className="text-[15.5px] leading-[1.6] md:text-sm md:leading-normal text-muted-foreground mb-4 text-left">
        {article.excerpt}
      </p>
      <span className="mt-auto inline-flex items-center gap-1 text-[14.5px] md:text-sm font-medium text-accent min-h-[28px]">
        Читать
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
};

export default ArticleCard;
