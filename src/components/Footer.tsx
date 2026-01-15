import { FileText } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Верди и Ко. Logo" className="w-8 h-8 rounded-lg" />
            <span className="font-serif text-lg font-medium">Верди и Ко. Право</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="/#services" className="hover:text-foreground transition-colors whitespace-nowrap">
              Услуги
            </a>
            <a href="/#about" className="hover:text-foreground transition-colors whitespace-nowrap">
              О нас
            </a>
            <a href="/#contact" className="hover:text-foreground transition-colors whitespace-nowrap">
              Контакты
            </a>
            <a 
              href="/policy"
              className="hover:text-foreground transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="hidden sm:inline">Политика Конфиденциальности</span>
              <span className="sm:hidden">Политика</span>
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Верди и Ко. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
