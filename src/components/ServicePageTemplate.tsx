import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import SEOHead from "@/components/seo/SEOHead";
import LegalServiceSchema from "@/components/seo/LegalServiceSchema";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import { ServicePage, getServiceByPath, getLangFromPath, toFinalPath } from "@/lib/seo";

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
          <div className="max-w-3xl">
            <span className="eyebrow">
              {lang === "ru" ? "Услуга" : "Service"}
            </span>
            <h1 className="h1-hero mt-4 md:mt-5 mb-5 md:mb-6">{service.h1}</h1>
            <p className="narrative-copy whitespace-pre-line text-left">{content.intro}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 md:py-16 px-4 bg-secondary/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-[24px] md:text-3xl mb-6 md:mb-8">
              {lang === "ru" ? "Что включает" : "What's Included"}
            </h2>
            <ul className="space-y-3 md:space-y-4">
              {content.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-4 md:gap-5 p-5 bg-card rounded-xl border border-border">
                  <span className="numeral-navy flex-shrink-0 leading-none pt-0.5" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-1 text-[15.5px] leading-[1.55] md:text-base md:leading-normal text-left">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {additionalSections}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-14 md:py-16 px-4">
          <div className="container">
            <h2 className="font-serif text-[24px] md:text-3xl mb-6 md:mb-8 text-center">
              {lang === "ru" ? "Связанные услуги" : "Related Services"}
            </h2>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              {relatedServices.map((s) => (
                <Link
                  key={s.path}
                  to={toFinalPath(s.path)}
                  className="group verdico-card p-5 md:p-7 bg-card border border-border hover:shadow-hover hover:border-verdico-gold/40 transition-all"
                >
                  <h3 className="font-serif text-[18px] md:text-lg font-medium mb-2 group-hover:text-gradient-brand">
                    {s.h1}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[14.5px] md:text-sm text-accent min-h-[28px]">
                    {lang === "ru" ? "Подробнее" : "Learn more"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedMaterials.length > 0 && (
        <section className="pb-14 md:pb-16 px-4">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              {relatedMaterials.map((material) => (
                <div key={material.href} className="p-5 md:p-7 bg-card verdico-card border border-border">
                  {material.label && (
                    <p className="eyebrow mb-3">{material.label}</p>
                  )}
                  <Link
                    to={toFinalPath(material.href)}
                    className="group inline-flex items-start gap-2 text-foreground hover:text-accent transition-colors"
                  >
                    <span className="font-serif text-[19px] leading-snug md:text-xl font-medium">
                      {material.title}
                    </span>
                    <ArrowRight className="w-4 h-4 mt-1.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA — light editorial transition into footer */}
      <section className="py-14 md:py-16 px-4 bg-verdico-closing">
        <div className="container text-center">
          <h2 className="font-serif text-[26px] leading-tight md:text-3xl mb-4 text-verdico-ink">
            {lang === "ru" ? "Обсудить вашу задачу?" : "Discuss your case?"}
          </h2>
          <Link to={contactPath}>
            <Button size="lg" className="gap-2 btn-navy-glass rounded-full h-12 md:h-11">
              {lang === "ru" ? "Связаться" : "Contact Us"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </MultilingualLayout>
  );
};

export default ServicePageTemplate;
