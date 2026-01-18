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
            <span className="text-sm text-gradient-brand font-medium uppercase tracking-wider">
              {lang === "ru" ? "Услуга" : "Service"}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl mt-4 mb-6">{service.h1}</h1>
            <p className="text-lg text-muted-foreground">{content.intro}</p>
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
                <li key={i} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-6 h-6 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0 text-white text-sm font-medium">
                    {i + 1}
                  </div>
                  <span>{feature}</span>
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
                  className="group p-6 bg-card rounded-xl border border-border hover:shadow-card hover:border-accent/30 transition-all"
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

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-serif text-3xl mb-4">
            {lang === "ru" ? "Обсудить вашу задачу?" : "Discuss your case?"}
          </h2>
          <Link to={contactPath}>
            <Button variant="secondary" size="lg" className="gap-2">
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
