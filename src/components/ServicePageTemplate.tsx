import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import LegalServiceSchema from "@/components/seo/LegalServiceSchema";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import { ServicePage, getServiceByPath, getLangFromPath } from "@/lib/seo";

interface ServicePageTemplateProps {
  service: ServicePage;
  content: {
    intro: string;
    features: string[];
    process?: string[];
  };
}

const ServicePageTemplate = ({ service, content }: ServicePageTemplateProps) => {
  const lang = getLangFromPath(service.path);
  const contactPath = lang === "ru" ? "/ru/kontakty" : "/en/contacts";
  
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
      <section className="py-16 md:py-24 px-4">
        <div className="container">
          <div className="max-w-3xl">
            <span className="eyebrow">
              {lang === "ru" ? "Услуга" : "Service"}
            </span>
            <h1 className="h1-hero mt-5 mb-6">{service.h1}</h1>
            <p className="text-lg text-muted-foreground whitespace-pre-line">{content.intro}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl mb-8">
              {lang === "ru" ? "Что включает" : "What's Included"}
            </h2>
            <ul className="space-y-4">
              {content.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-5 p-5 bg-card rounded-xl border border-border">
                  <span className="numeral-navy flex-shrink-0 leading-none pt-0.5" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 px-4">
          <div className="container">
            <h2 className="font-serif text-2xl md:text-3xl mb-8 text-center">
              {lang === "ru" ? "Связанные услуги" : "Related Services"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {relatedServices.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  className="group verdico-card p-7 bg-card border border-border hover:shadow-hover hover:border-verdico-gold/40 transition-all"
                >
                  <h3 className="font-serif text-lg font-medium mb-2 group-hover:text-gradient-brand">
                    {s.h1}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm text-accent">
                    {lang === "ru" ? "Подробнее" : "Learn more"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA — navy transition into footer */}
      <section className="py-16 px-4 bg-verdico-cta">
        <div className="container text-center">
          <h2 className="font-serif text-3xl mb-4 text-white">
            {lang === "ru" ? "Обсудить вашу задачу?" : "Discuss your case?"}
          </h2>
          <Link to={contactPath}>
            <Button size="lg" className="gap-2 btn-navy-glass rounded-full">
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
