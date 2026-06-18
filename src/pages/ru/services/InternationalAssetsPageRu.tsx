import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import SEOHead from "@/components/seo/SEOHead";
import ServiceBreadcrumbSchema from "@/components/seo/ServiceBreadcrumbSchema";
import { Button } from "@/components/ui/button";
import {
  getInternationalAssetPage,
  INTERNATIONAL_ASSETS_HUB_PATH,
  internationalAssetsDisclaimer,
  type InternationalAssetPageKey,
} from "@/content/internationalAssetsRu";
import { toFinalPath } from "@/lib/seo";

interface InternationalAssetsPageRuProps {
  pageKey: InternationalAssetPageKey;
}

const DashList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 text-[15.5px] leading-[1.6] md:text-base md:leading-normal text-muted-foreground text-left">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span className="text-accent" aria-hidden="true">
          —
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const NumberedList = ({ items }: { items: string[] }) => (
  <ol className="space-y-3 md:space-y-4">
    {items.map((item, index) => (
      <li
        key={item}
        className="flex items-start gap-4 md:gap-5 p-5 bg-card rounded-xl border border-border"
      >
        <span className="numeral-navy flex-shrink-0 leading-none pt-0.5" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="pt-1 text-[15.5px] leading-[1.55] md:text-base md:leading-normal text-left">
          {item}
        </span>
      </li>
    ))}
  </ol>
);

const InternationalAssetsPageRu = ({ pageKey }: InternationalAssetsPageRuProps) => {
  const page = getInternationalAssetPage(pageKey);
  const isHub = pageKey === "hub";
  const breadcrumbItems = isHub
    ? [
        { name: "Главная", path: "/ru" },
        { name: page.h1, path: page.path },
      ]
    : [
        { name: "Главная", path: "/ru" },
        { name: "Международные активы", path: INTERNATIONAL_ASSETS_HUB_PATH },
        { name: page.h1, path: page.path },
      ];

  return (
    <MultilingualLayout>
      <SEOHead title={page.title} description={page.description} path={page.path} />
      <ServiceBreadcrumbSchema items={breadcrumbItems} />

      <section className="pt-24 pb-14 md:py-24 px-4">
        <div className="container">
          <div className="max-w-3xl">
            <Link
              to={toFinalPath(isHub ? "/ru" : INTERNATIONAL_ASSETS_HUB_PATH)}
              className="inline-flex items-center gap-1.5 text-[13px] md:text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{isHub ? "Главная" : "Международные активы"}</span>
            </Link>
            <div>
              <span className="eyebrow">Юридико-коммерческое сопровождение</span>
            </div>
            <h1 className="h1-hero mt-4 md:mt-5 mb-5 md:mb-6">{page.h1}</h1>
            <p className="font-serif text-[21px] leading-snug md:text-2xl text-foreground mb-6 text-left">
              {page.subtitle}
            </p>
            <div className="space-y-4 text-[16px] leading-[1.6] md:text-lg md:leading-normal text-muted-foreground text-left">
              {page.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {page.directions && (
        <section className="py-14 md:py-16 px-4 bg-secondary/50">
          <div className="container">
            <div className="text-center mb-8 md:mb-10">
              <span className="eyebrow justify-center">Направления</span>
              <h2 className="font-serif text-[28px] md:text-4xl mt-4">Четыре группы задач</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
              {page.directions.map((direction) => (
                <Link
                  key={direction.path}
                  to={toFinalPath(direction.path)}
                  className="group verdico-card p-5 md:p-7 bg-card border border-border hover:shadow-hover hover:border-verdico-gold/40 transition-all"
                >
                  <h2 className="font-serif text-[21px] leading-snug md:text-2xl font-medium mb-3 group-hover:text-gradient-brand">
                    {direction.title}
                  </h2>
                  <p className="text-[15px] leading-[1.6] text-muted-foreground mb-4">
                    {direction.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[14.5px] font-medium text-accent">
                    Подробнее
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.sections.map((section, index) => (
        <section
          key={section.title}
          className={`py-14 md:py-16 px-4 ${
            (index + (page.directions ? 1 : 0)) % 2 === 0 ? "bg-secondary/50" : ""
          }`}
        >
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-[24px] md:text-3xl mb-6">{section.title}</h2>
              {section.paragraphs && (
                <div className="space-y-4 text-[15.5px] leading-[1.6] md:text-base md:leading-normal text-muted-foreground text-left">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              )}
              {section.items && <DashList items={section.items} />}
            </div>
          </div>
        </section>
      ))}

      <section className="py-14 md:py-16 px-4 bg-secondary/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-[24px] md:text-3xl mb-6">Наша роль</h2>
            <DashList items={page.role} />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-[24px] md:text-3xl mb-6 md:mb-8">
              Как строится работа
            </h2>
            <NumberedList items={page.process} />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 px-4 bg-secondary/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-[24px] md:text-3xl mb-6">
              Что проверяется до сделки
            </h2>
            <DashList items={page.checks} />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto p-5 md:p-8 bg-card verdico-card border border-verdico-gold/35">
            <p className="eyebrow mb-4">Важная информация</p>
            <h2 className="font-serif text-[24px] md:text-3xl mb-6">
              Условия требуют отдельного подтверждения
            </h2>
            <DashList items={internationalAssetsDisclaimer} />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 px-4 bg-verdico-cta">
        <div className="container text-center">
          <h2 className="font-serif text-[26px] leading-tight md:text-3xl mb-5 text-white">
            {page.cta}
          </h2>
          <Link to={toFinalPath("/ru/kontakty")}>
            <Button size="lg" className="gap-2 btn-navy-glass rounded-full h-12 md:h-11">
              Связаться
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </MultilingualLayout>
  );
};

export default InternationalAssetsPageRu;
