import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to={nav.home.path} className="flex items-center gap-3 group" aria-label={lang === "ru" ? "На главную" : "Home"}>
          <img 
            src={logo} 
            alt="VerdiCo Logo" 
            className="w-10 h-10 rounded-lg transition-transform group-hover:scale-105"
          />
          <span className="font-serif text-xl font-medium tracking-tight">
            Верди и Ко.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {/* Services Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover-gradient-brand transition-colors"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              onMouseEnter={() => setIsServicesOpen(true)}
            >
              {nav.services.label}
              <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            
            {isServicesOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-xl shadow-card p-2 animate-fade-in"
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {nav.services.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-3 text-sm rounded-lg hover:bg-secondary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to={nav.about.path} className="text-sm font-medium text-muted-foreground hover-gradient-brand transition-colors">
            {nav.about.label}
          </Link>
          <Link to={nav.insights.path} className="text-sm font-medium text-muted-foreground hover-gradient-brand transition-colors">
            {nav.insights.label}
          </Link>
          <Link to={nav.contacts.path} className="text-sm font-medium text-muted-foreground hover-gradient-brand transition-colors">
            {nav.contacts.label}
          </Link>

          <LanguageSwitcher />

          <Link to={nav.contacts.path}>
            <Button size="sm">
              {lang === "ru" ? "Связаться" : "Contact Us"}
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-3">
          <LanguageSwitcher />
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
        <nav className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-card p-6 animate-fade-in max-h-[80vh] overflow-y-auto">
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
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link to={nav.about.path} className="text-sm font-medium py-2">
              {nav.about.label}
            </Link>
            <Link to={nav.insights.path} className="text-sm font-medium py-2">
              {nav.insights.label}
            </Link>
            <Link to={nav.contacts.path} className="text-sm font-medium py-2">
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
