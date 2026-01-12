import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src={logo} 
            alt="Verdi & Co. Logo" 
            className="w-10 h-10 rounded-lg transition-transform group-hover:scale-105"
          />
          <span className="font-serif text-xl font-medium tracking-tight">
            Верди и Ко.
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-muted-foreground hover-gradient-brand transition-colors">
            Услуги
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover-gradient-brand transition-colors">
            О нас
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover-gradient-brand transition-colors">
            Контакты
          </a>
          <Button size="sm" className="ml-4">
            Связаться
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-background shadow-card p-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            <a
              href="#services"
              className="text-sm font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Услуги
            </a>
            <a
              href="#about"
              className="text-sm font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              О нас
            </a>
            <a
              href="#contact"
              className="text-sm font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Контакты
            </a>
            <Button className="mt-2 w-full">Связаться</Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
