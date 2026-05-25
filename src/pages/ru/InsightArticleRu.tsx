import { useParams } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import ArticlePageTemplate from "@/components/insights/ArticlePageTemplate";
import { getArticleBySlug } from "@/content/insights/ruArticles";

const InsightArticleRu = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <NotFound />;
  }

  return <ArticlePageTemplate article={article} />;
};

export default InsightArticleRu;
