import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import LogoMark from "@/components/LogoMark";
// English is temporarily disabled publicly. Do not delete EN pages/content; restore by re-importing and re-rendering LanguageSwitcher here.
// import LanguageSwitcher from "./LanguageSwitcher";
import { getNavItems, getLangFromPath } from "@/lib/seo";

const MultilingualHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  const nav = getNavItems(lang);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[min(1120px,calc(100%-24px))] lg:w-[min(1120px,calc(100%-120px))] ${
        isScrolled ? "top-3 lg:top-4" : "top-3 lg:top-6"
      }`}
    >
      <div
        className={`glass-pill rounded-2xl flex items-center justify-between gap-4 px-4 lg:px-5 transition-[padding] duration-300 ${
          isScrolled ? "py-2" : "py-2.5"
        }`}
      >
        <Link
          to={nav.home.path}
          className="flex items-center gap-3 group shrink-0"
          aria-label={lang === "ru" ? "На главную" : "Home"}
        >
          <LogoMark size="md" />
          <span className="font-serif text-base lg:text-lg font-medium tracking-tight">
            {lang === "ru" ? "Верди и Ко." : "Verdi & Co."}
          </span>
        </Link>

        {/* Desktop Navigation — links spread evenly across the bar, CTA pinned right */}
        <nav className="hidden lg:flex flex-1 items-center justify-around gap-6 px-6">
          <Link
            to={nav.about.path}
            className="nav-link-underline text-[14px] font-medium tracking-[0.045em] text-foreground/80 hover:text-foreground transition-colors"
          >
            {nav.about.label}
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              className="nav-link-underline flex items-center gap-1 text-[14px] font-medium tracking-[0.045em] text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              onMouseEnter={() => setIsServicesOpen(true)}
            >
              {nav.services.label}
              <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {isServicesOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-80 glass-pill rounded-xl p-2 animate-fade-in"
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {nav.services.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-3 text-sm rounded-lg hover:bg-secondary/60 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to={nav.insights.path}
            className="nav-link-underline text-[14px] font-medium tracking-[0.045em] text-foreground/80 hover:text-foreground transition-colors"
          >
            {nav.insights.label}
          </Link>
          <Link
            to={nav.contacts.path}
            className="nav-link-underline text-[14px] font-medium tracking-[0.045em] text-foreground/80 hover:text-foreground transition-colors"
          >
            {nav.contacts.label}
          </Link>
        </nav>

        {/* LanguageSwitcher temporarily removed — English is publicly disabled. */}

        <Link to={nav.contacts.path} className="hidden lg:inline-flex shrink-0">
          <Button size="sm" className="rounded-full btn-navy-glass">
            {lang === "ru" ? "Связаться" : "Contact Us"}
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-3">
          {/* LanguageSwitcher temporarily removed — English is publicly disabled. */}
          <button
            className="p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden absolute top-[calc(100%+8px)] left-0 right-0 glass-pill rounded-2xl p-6 animate-fade-in max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {/* Services Section */}
            <div className="border-b border-border pb-4 mb-2">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                {nav.services.label}
              </p>
              {nav.services.items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-sm font-medium py-2 hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link to={nav.about.path} className="text-sm font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
              {nav.about.label}
            </Link>
            <Link to={nav.insights.path} className="text-sm font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
              {nav.insights.label}
            </Link>
            <Link to={nav.contacts.path} className="text-sm font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
              {nav.contacts.label}
            </Link>

            <Link to={nav.contacts.path}>
              <Button className="mt-4 w-full">
                {lang === "ru" ? "Связаться" : "Contact Us"}
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default MultilingualHeader;
