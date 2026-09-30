import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { RuArticle } from "@/content/insights/ruArticles";
import { toFinalPath } from "@/lib/seo";

interface ArticleCardProps {
  article: RuArticle;
  className?: string;
  variant?: "lead" | "default" | "compact";
}

const cardStyles = {
  lead: {
    link:
      "group block h-full bg-card verdico-card border border-border p-6 md:p-9 hover:shadow-hover hover:border-verdico-gold/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    meta: "text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-verdico-gold",
    title:
      "mt-5 font-serif text-[28px] leading-[1.08] md:text-[42px] text-foreground group-hover:text-gradient-brand transition-colors",
    excerpt: "mt-5 text-base leading-relaxed md:text-lg text-muted-foreground",
    action: "mt-7",
  },
  default: {
    link:
      "group block h-full bg-card verdico-card border border-border p-5 md:p-7 hover:shadow-hover hover:border-verdico-gold/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    meta: "text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] text-verdico-gold",
    title:
      "mt-4 font-serif text-xl leading-snug md:text-2xl text-foreground group-hover:text-gradient-brand transition-colors",
    excerpt: "mt-3 text-sm leading-relaxed md:text-base text-muted-foreground",
    action: "mt-5",
  },
  compact: {
    link:
      "group block border-t border-border/80 py-5 md:py-6 transition-colors hover:border-verdico-gold/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    meta: "text-[11px] font-semibold uppercase tracking-[0.14em] text-verdico-gold",
    title:
      "mt-3 font-serif text-lg leading-snug md:text-xl text-foreground group-hover:text-gradient-brand transition-colors",
    excerpt: "mt-2 text-sm leading-relaxed md:text-[15px] text-muted-foreground",
    action: "mt-4",
  },
} as const;

// Language-neutral component used only on RU pages for now.
// All visible copy (label "Читать", category, title, excerpt) is sourced from
// the RU article object — no hardcoded EN strings.
const ArticleCard = ({ article, className = "", variant = "default" }: ArticleCardProps) => {
  const href = toFinalPath(`/ru/insights/${article.slug}`);
  const styles = cardStyles[variant];

  return (
    <Link
      to={href}
      className={`${styles.link} ${className}`}
    >
      <article className="flex h-full flex-col">
        <p className={`${styles.meta} break-words`}>{article.category}</p>

        <h2 className={`${styles.title} break-words`}>
          {article.title}
        </h2>

        <p className={`${styles.excerpt} flex-grow break-words`}>
          {article.excerpt}
        </p>

        <span className={`${styles.action} inline-flex items-center gap-1 text-[14.5px] md:text-sm font-medium text-accent min-h-[28px]`}>
          Читать
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </article>
    </Link>
  );
};

export default ArticleCard;
