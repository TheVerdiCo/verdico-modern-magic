import { Link, useLocation } from "react-router-dom";
import { getLangFromPath, getLanguageAlternate, toFinalPath } from "@/lib/seo";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentLang = getLangFromPath(currentPath);
  const targetLang = currentLang === "fr" ? "en" : currentLang === "en" ? "fr" : "en";
  const alternatePath = getLanguageAlternate(currentPath, targetLang) ?? `/${targetLang}`;

  return (
    <Link
      to={toFinalPath(alternatePath)}
      className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg hover:border-accent/30 transition-all"
      aria-label={`Switch to ${targetLang.toUpperCase()}`}
    >
      <Globe className="w-4 h-4" />
      <span>{targetLang.toUpperCase()}</span>
    </Link>
  );
};

export default LanguageSwitcher;
