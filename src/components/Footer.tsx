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
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">
              Услуги
            </a>
            <a href="#about" className="hover:text-foreground transition-colors">
              О нас
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Контакты
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
