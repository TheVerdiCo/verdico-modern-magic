import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo/SEOHead";
import LegalServiceSchema from "@/components/seo/LegalServiceSchema";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import { EMAIL, toFinalPath, type Language } from "@/lib/seo";

type InternationalLanguage = Extract<Language, "en" | "fr">;

interface PageSection {
  title: string;
  items: string[];
}

interface PageLink {
  title: string;
  description: string;
  href: string;
}

interface InternationalSeoPageTemplateProps {
  lang: InternationalLanguage;
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  sections: PageSection[];
  processTitle: string;
  processItems: string[];
  linksTitle: string;
  links: PageLink[];
  schemaType?: "organization" | "legalService";
  serviceType?: string;
}

const copy = {
  en: {
    learnMore: "Open page",
    ctaTitle: "Discuss a confidential legal matter",
    ctaText:
      "Consultations are available by appointment and online in Russian, English and French.",
    ctaButton: `Email ${EMAIL}`,
  },
  fr: {
    learnMore: "Ouvrir la page",
    ctaTitle: "Discuter d'un dossier confidentiel",
    ctaText:
      "Les consultations sont possibles sur rendez-vous et en ligne, en russe, anglais et français.",
    ctaButton: `Écrire à ${EMAIL}`,
  },
};

const InternationalSeoPageTemplate = ({
  lang,
  path,
  title,
  description,
  eyebrow,
  h1,
  intro,
  sections,
  processTitle,
  processItems,
  linksTitle,
  links,
  schemaType = "legalService",
  serviceType = "Legal services",
}: InternationalSeoPageTemplateProps) => {
  const t = copy[lang];

  return (
    <MultilingualLayout>
      <SEOHead title={title} description={description} path={path} />
      {schemaType === "organization" ? (
        <OrganizationSchema />
      ) : (
        <LegalServiceSchema
          name={h1}
          description={description}
          serviceType={serviceType}
          url={path}
        />
      )}

      <section className="pt-24 pb-14 md:py-24 px-4">
        <div className="container">
          <div className="max-w-3xl">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="h1-hero mt-4 md:mt-5 mb-5 md:mb-6">{h1}</h1>
            <p className="narrative-copy text-left">{intro}</p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 px-4 bg-secondary/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-6">
            {sections.map((section) => (
              <div key={section.title} className="bg-card border border-border verdico-card p-6 md:p-7">
                <h2 className="font-serif text-[22px] md:text-2xl mb-5">{section.title}</h2>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15.5px] leading-[1.6] text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-verdico-gold flex-shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-[24px] md:text-3xl mb-6 md:mb-8">
              {processTitle}
            </h2>
            <div className="space-y-4">
              {processItems.map((item, index) => (
                <div key={item} className="flex items-start gap-4 md:gap-5">
                  <span className="numeral-navy flex-shrink-0 leading-none pt-0.5" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15.5px] leading-[1.6] md:text-base text-muted-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {links.length > 0 && (
        <section className="py-14 md:py-16 px-4 bg-secondary/50">
          <div className="container">
            <h2 className="font-serif text-[24px] md:text-3xl mb-6 md:mb-8 text-center">
              {linksTitle}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={toFinalPath(link.href)}
                  className="group verdico-card p-5 md:p-6 bg-card border border-border hover:shadow-hover hover:border-verdico-gold/40 transition-all"
                >
                  <h3 className="font-serif text-[19px] md:text-xl font-medium mb-2 group-hover:text-gradient-brand">
                    {link.title}
                  </h3>
                  <p className="text-[15px] leading-[1.55] text-muted-foreground mb-4">
                    {link.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[14.5px] md:text-sm text-accent min-h-[28px]">
                    {t.learnMore}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="contact" className="py-14 md:py-16 px-4 bg-verdico-closing">
        <div className="container text-center">
          <h2 className="font-serif text-[26px] leading-tight md:text-3xl mb-4 text-verdico-ink">
            {t.ctaTitle}
          </h2>
          <p className="text-[15.5px] leading-[1.6] text-verdico-ink/70 mb-7 md:mb-8 max-w-xl mx-auto">
            {t.ctaText}
          </p>
          <a href={`mailto:${EMAIL}`}>
            <Button size="lg" className="gap-2 btn-navy-glass rounded-full h-12 md:h-11">
              <Mail className="w-4 h-4" />
              {t.ctaButton}
            </Button>
          </a>
        </div>
      </section>
    </MultilingualLayout>
  );
};

export default InternationalSeoPageTemplate;
