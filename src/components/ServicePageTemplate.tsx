import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import SEOHead from "@/components/seo/SEOHead";
import LegalServiceSchema from "@/components/seo/LegalServiceSchema";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import { EMAIL, ServicePage, getServiceByPath, getLangFromPath, toFinalPath } from "@/lib/seo";

interface ServicePageTemplateProps {
  service: ServicePage;
  content: {
    intro: string;
    features: string[];
    process?: string[];
  };
  relatedMaterials?: Array<{
    title: string;
    href: string;
    label?: string;
  }>;
  additionalSections?: ReactNode;
}

const ServicePageTemplate = ({ service, content, relatedMaterials = [], additionalSections }: ServicePageTemplateProps) => {
  const lang = getLangFromPath(service.path);
  const contactPath = toFinalPath(lang === "ru" ? "/ru/kontakty" : "/en/contacts");
  const labels = {
    ru: {
      service: "Услуга",
      included: "Что включает",
      process: "Как проходит работа",
      related: "Связанные услуги",
      learnMore: "Подробнее",
      ctaTitle: "Обсудить вашу задачу?",
      ctaButton: "Связаться",
    },
    en: {
      service: "Service",
      included: "What's included",
      process: "How the work starts",
      related: "Related services",
      learnMore: "Learn more",
      ctaTitle: "Discuss your case?",
      ctaButton: `Email ${EMAIL}`,
    },
    fr: {
      service: "Service",
      included: "Ce qui est inclus",
      process: "Déroulement",
      related: "Services liés",
      learnMore: "En savoir plus",
      ctaTitle: "Discuter de votre dossier ?",
      ctaButton: `Écrire à ${EMAIL}`,
    },
  }[lang];
  
  const relatedServices = service.relatedServices
    .map(path => getServiceByPath(path))
    .filter(Boolean) as ServicePage[];

  return (
    <MultilingualLayout>
      <SEOHead
        title={service.title}
        description={service.description}
        path={service.path}
      />
      <LegalServiceSchema
        name={service.h1}
        description={service.description}
        serviceType={service.serviceType}
        url={service.path}
      />

      {/* Hero */}
      <section className="pt-24 pb-14 md:py-24 px-4">
        <div className="container">
          <div className="max-w-4xl">
            <span className="eyebrow">
              {labels.service}
            </span>
            <h1 className="h1-hero mt-4 md:mt-5 mb-6 md:mb-8">{service.h1}</h1>
            <p className="narrative-copy whitespace-pre-line text-left">{content.intro}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 md:py-16 px-4 bg-secondary/50">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[minmax(220px,0.45fr)_minmax(0,1fr)] lg:gap-14">
            <div>
              <h2 className="font-serif text-[28px] leading-tight md:text-4xl">
                {labels.included}
              </h2>
            </div>

            <ol className="border-y border-border/80 divide-y divide-border/80">
              {content.features.map((feature, index) => (
                <li key={feature} className="grid gap-3 py-5 md:grid-cols-[72px_minmax(0,1fr)] md:gap-6 md:py-6">
                  <span className="font-serif text-[24px] leading-none text-verdico-gold md:text-[30px]" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15.5px] leading-[1.65] md:text-base md:leading-relaxed text-left text-foreground/85">
                    {feature}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {additionalSections}

      {content.process && content.process.length > 0 && (
        <section className="py-14 md:py-16 px-4">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[minmax(220px,0.45fr)_minmax(0,1fr)] lg:gap-14">
              <div>
                <h2 className="font-serif text-[28px] leading-tight md:text-4xl">
                  {labels.process}
                </h2>
              </div>

              <ol className="border-y border-border/80 divide-y divide-border/80">
                {content.process.map((step, index) => (
                  <li key={step} className="grid gap-3 py-5 md:grid-cols-[72px_minmax(0,1fr)] md:gap-6 md:py-6">
                    <span className="font-serif text-[24px] leading-none text-verdico-gold md:text-[30px]" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[15.5px] leading-[1.65] md:text-base md:leading-relaxed text-muted-foreground">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-14 md:py-16 px-4">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[minmax(220px,0.45fr)_minmax(0,1fr)] lg:gap-14">
              <div>
                <h2 className="font-serif text-[28px] leading-tight md:text-4xl">
                  {labels.related}
                </h2>
              </div>

              <div className="border-y border-border/80 divide-y divide-border/80">
                {relatedServices.map((s) => (
                  <Link
                    key={s.path}
                    to={toFinalPath(s.path)}
                    className="group grid gap-3 py-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-6 md:py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <h3 className="font-serif text-[20px] leading-snug md:text-2xl text-foreground group-hover:text-gradient-brand">
                      {s.h1}
                    </h3>
                    <span className="inline-flex min-h-[32px] items-center gap-1 text-[14.5px] md:text-sm font-medium text-accent md:justify-self-end">
                      {labels.learnMore}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {relatedMaterials.length > 0 && (
        <section className="pb-14 md:pb-16 px-4">
          <div className="container">
            <div className="max-w-4xl mx-auto border-y border-border/80 divide-y divide-border/80">
              {relatedMaterials.map((material) => (
                <Link
                  key={material.href}
                  to={toFinalPath(material.href)}
                  className="group grid gap-3 py-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-6 md:py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <span className="block min-w-0">
                    {material.label && (
                      <span className="eyebrow mb-3">{material.label}</span>
                    )}
                    <span className="block font-serif text-[20px] leading-snug md:text-2xl text-foreground group-hover:text-gradient-brand">
                      {material.title}
                    </span>
                  </span>
                  <span className="inline-flex min-h-[32px] items-center gap-1 text-[14.5px] md:text-sm font-medium text-accent md:justify-self-end">
                    {labels.learnMore}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA — light editorial transition into footer */}
      <section className="py-12 md:py-14 px-4 bg-verdico-closing">
        <div className="container">
          <div className="mx-auto flex max-w-4xl flex-col gap-5 border-t border-verdico-gold/35 pt-8 text-left md:flex-row md:items-center md:justify-between md:gap-8">
            <h2 className="font-serif text-[26px] leading-tight md:text-3xl text-verdico-ink">
              {labels.ctaTitle}
            </h2>
            {lang === "ru" ? (
              <Link to={contactPath} className="inline-flex">
                <Button size="lg" className="gap-2 btn-navy-glass rounded-full h-12 md:h-11">
                  {labels.ctaButton}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            ) : (
              <a href={`mailto:${EMAIL}`} className="inline-flex">
                <Button size="lg" className="gap-2 btn-navy-glass rounded-full h-12 md:h-11">
                  {labels.ctaButton}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            )}
          </div>
        </div>
      </section>
    </MultilingualLayout>
  );
};

export default ServicePageTemplate;
