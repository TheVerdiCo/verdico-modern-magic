import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";
import LogoMark from "@/components/LogoMark";
import { getNavItems, getLangFromPath, BRAND_NAME_RU, BRAND_NAME_EN, EMAIL, toFinalPath } from "@/lib/seo";

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
      disclaimer: "Обработка персональных данных возможна только при добровольном направлении обращения пользователем и осуществляется в соответствии с политикой обработки персональных данных.",
    },
    en: {
      trust: "Russia / International Projects",
      servicesTitle: "Services",
      companyTitle: "Company",
      contactTitle: "Contact",
      contactCta: "Discuss Your Case",
      copyright: `© ${new Date().getFullYear()} ${BRAND_NAME_EN}. All rights reserved.`,
      privacy: "Privacy Policy",
      disclaimer: "Personal data may be processed only when a user voluntarily sends a request and is handled in accordance with the personal data processing policy.",
    },
  };

  const t = content[lang];

  return (
    <footer className="bg-verdico-footer text-white relative">
      {/* Trust Block */}
      <div className="border-b border-white/10">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 group">
              <LogoMark size="lg" />
              <div>
                <p className="font-serif text-xl font-medium">{lang === "ru" ? BRAND_NAME_RU : BRAND_NAME_EN}</p>
                <p className="text-sm text-white/70">{t.trust}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                {EMAIL}
              </a>
              <a
                href="https://t.me/DjamalG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="sm" className="gap-2 rounded-full">
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
            <h3 className="eyebrow !text-white/70 mb-4">{t.servicesTitle}</h3>
            <ul className="space-y-2">
              {nav.services.items.slice(0, 5).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="eyebrow !text-white/70 mb-4">{t.companyTitle}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to={nav.about.path}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {nav.about.label}
                </Link>
              </li>
              <li>
                <Link
                  to={nav.insights.path}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {nav.insights.label}
                </Link>
              </li>
              {lang === "ru" ? (
                <>
                  <li>
                    <Link
                      to={toFinalPath("/ru/privacy-policy")}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      Политика обработки персональных данных
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={toFinalPath("/ru/cookie-policy")}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      Политика использования cookies
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={toFinalPath("/ru/email-privacy")}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      Уведомление для электронной переписки
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    to="/policy"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {t.privacy}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="eyebrow !text-white/70 mb-4">{t.contactTitle}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/DjamalG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Telegram: @DjamalG
                </a>
              </li>
              <li>
                <Link
                  to={nav.contacts.path}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {nav.contacts.label}
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="eyebrow !text-white/70 mb-4">
              {lang === "ru" ? "Готовы обсудить?" : "Ready to discuss?"}
            </h3>
            <p className="text-sm text-white/70 mb-4">
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
        <div className="mt-12 pt-8 border-t border-white/10 text-center space-y-3">
          <p className="text-xs text-white/50">
            {t.disclaimer}
          </p>
          <p className="text-sm text-white/60">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MultilingualFooter;
