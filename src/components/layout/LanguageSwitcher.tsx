import { Link, useLocation } from "react-router-dom";
import { routeAlternates, getLangFromPath } from "@/lib/seo";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentLang = getLangFromPath(currentPath);
  const alternatePath = routeAlternates[currentPath] || (currentLang === "ru" ? "/en" : "/ru");

  return (
    <Link
      to={alternatePath}
      className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg hover:border-accent/30 transition-all"
      aria-label={currentLang === "ru" ? "Switch to English" : "Переключить на русский"}
    >
      <Globe className="w-4 h-4" />
      <span>{currentLang === "ru" ? "EN" : "RU"}</span>
    </Link>
  );
};

export default LanguageSwitcher;
