import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";
import logo from "@/assets/logo.png";
import { getNavItems, getLangFromPath, BRAND_NAME_RU, BRAND_NAME_EN, EMAIL } from "@/lib/seo";

const MultilingualFooter = () => {
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  const nav = getNavItems(lang);

  const content = {
    ru: {
      trust: "Россия / международные проекты",
      servicesTitle: "Услуги",
      companyTitle: "Компания",
      contactTitle: "Контакты",
      contactCta: "Обсудить задачу",
      copyright: `© ${new Date().getFullYear()} ${BRAND_NAME_RU} Все права защищены.`,
      privacy: "Политика конфиденциальности",
      disclaimer: "Данный сайт носит информационный характер и не собирает, не хранит и не обрабатывает персональные данные посетителей.",
    },
    en: {
      trust: "Russia / International Projects",
      servicesTitle: "Services",
      companyTitle: "Company",
      contactTitle: "Contact",
      contactCta: "Discuss Your Case",
      copyright: `© ${new Date().getFullYear()} ${BRAND_NAME_EN}. All rights reserved.`,
      privacy: "Privacy Policy",
      disclaimer: "This website is for informational purposes only and does not collect, store, or process personal data of its visitors.",
    },
  };

  const t = content[lang];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Trust Block */}
      <div className="border-b border-primary-foreground/10">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Verdi & Co." className="w-12 h-12 rounded-lg" />
              <div>
                <p className="font-serif text-xl font-medium">{lang === "ru" ? BRAND_NAME_RU : BRAND_NAME_EN}</p>
                <p className="text-sm text-primary-foreground/70">{t.trust}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                {EMAIL}
              </a>
              <a
                href="https://t.me/DjamalG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="sm" className="gap-2">
                  <Send className="w-4 h-4" />
                  {t.contactCta}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">{t.servicesTitle}</h3>
            <ul className="space-y-2">
              {nav.services.items.slice(0, 5).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">{t.companyTitle}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to={nav.about.path}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {nav.about.label}
                </Link>
              </li>
              <li>
                <Link
                  to={nav.insights.path}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {nav.insights.label}
                </Link>
              </li>
              <li>
                <Link
                  to={lang === "ru" ? "/policy" : "/policy"}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {t.privacy}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">{t.contactTitle}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/DjamalG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Telegram: @DjamalG
                </a>
              </li>
              <li>
                <Link
                  to={nav.contacts.path}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {nav.contacts.label}
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">
              {lang === "ru" ? "Готовы обсудить?" : "Ready to discuss?"}
            </h3>
            <p className="text-sm text-primary-foreground/70 mb-4">
              {lang === "ru" 
                ? "Опишите вашу задачу — мы свяжемся в ближайшее время."
                : "Describe your case — we'll get back to you shortly."
              }
            </p>
            <Link to={nav.contacts.path}>
              <Button variant="secondary" className="w-full">
                {t.contactCta}
              </Button>
            </Link>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center space-y-3">
          <p className="text-xs text-primary-foreground/40">
            {t.disclaimer}
          </p>
          <p className="text-sm text-primary-foreground/50">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MultilingualFooter;
