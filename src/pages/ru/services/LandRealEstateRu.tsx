import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import LegalServiceSchema from "@/components/seo/LegalServiceSchema";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import { ServicePage, getServiceByPath, ruServices, toFinalPath } from "@/lib/seo";

const service = ruServices.find((item) => item.path === "/ru/zemlya-i-nedvizhimost")!;

const includedItems = [
  "проверка прав на земельные участки и объекты недвижимости",
  "анализ аренды, собственности, сервитутов и публичных ограничений",
  "сопровождение выкупа, перераспределения, раздела и объединения участков",
  "вопросы кадастровой стоимости и кадастрового учёта",
  "земельные участки под многоквартирными домами и придомовые территории",
  "взаимодействие с администрацией, Росреестром и кадастровыми органами",
  "земельные и имущественные споры",
  "сопровождение сделок с земельными активами",
];

const taskItems = [
  "земельная проверка перед покупкой объекта или бизнеса",
  "анализ участка под инвестиционный или девелоперский проект",
  "оформление и изменение прав на землю",
  "споры о границах, доступе, сервитутах и использовании территории",
  "снижение или оспаривание кадастровой стоимости",
  "работа с муниципальной землёй, администрацией и кадастровыми органами",
];

const relatedServices = service.relatedServices
  .map((path) => getServiceByPath(path))
  .filter(Boolean) as ServicePage[];

const LandRealEstateRu = () => (
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

    <section className="pt-24 pb-14 md:py-24 px-4">
      <div className="container">
        <div className="max-w-3xl">
          <span className="eyebrow">Услуга</span>
          <h1 className="h1-hero mt-4 md:mt-5 mb-5 md:mb-6">
            Земля и недвижимость
          </h1>
          <p className="narrative-copy text-left">
            Правовое сопровождение земельных участков, объектов недвижимости и связанных имущественных режимов: от проверки прав и кадастровых вопросов до споров с органами власти и структурирования сделок.
          </p>
        </div>
      </div>
    </section>

    <section className="py-14 md:py-16 px-4 bg-secondary/50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-[24px] md:text-3xl mb-6 md:mb-8">
            Когда это требуется
          </h2>
          <div className="space-y-5">
            <p className="narrative-copy">
              Земельные вопросы редко ограничиваются одним документом. Обычно они затрагивают право собственности, аренду, кадастровый учёт, градостроительные ограничения, публичные интересы и экономическую цель проекта.
            </p>
            <p className="narrative-copy">
              Работа начинается с определения правового режима участка: кому он принадлежит, как используется, какие ограничения установлены, можно ли изменить его параметры и какие риски возникнут при сделке, строительстве или споре.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-14 md:py-16 px-4">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-[24px] md:text-3xl mb-6 md:mb-8">
            Земельные вопросы в Москве и России
          </h2>
          <div className="space-y-5">
            <p className="narrative-copy">
              Земельные вопросы в Москве и других регионах России требуют проверки не только права собственности или аренды, но и кадастрового учёта, градостроительного режима, публичных ограничений, сервитутов, доступа к участку и позиции органов власти.
            </p>
            <p className="narrative-copy">
              Для собственников, инвесторов и бизнеса это влияет на стоимость актива, возможность строительства, условия сделки, риск спора и дальнейшее использование недвижимости.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-14 md:py-16 px-4">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-[24px] md:text-3xl mb-6 md:mb-8">
            Что входит
          </h2>
          <ul className="space-y-3 md:space-y-4">
            {includedItems.map((item, index) => (
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
          </ul>
        </div>
      </div>
    </section>

    <section className="py-14 md:py-16 px-4 bg-secondary/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 max-w-5xl mx-auto">
          <div>
            <h2 className="font-serif text-[24px] md:text-3xl mb-5 md:mb-6">
              Земельные участки под многоквартирными домами
            </h2>
            <p className="narrative-copy">
              Отдельный блок вопросов связан с земельными участками под многоквартирными домами: формирование участка, определение границ придомовой территории, переход участка в общую долевую собственность собственников помещений, защита территории от неправомерного использования и споры с органами власти.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-[24px] md:text-3xl mb-5 md:mb-6">
              Для бизнеса и инвесторов
            </h2>
            <p className="narrative-copy">
              Для бизнеса земля — это не только объект права, но и условие экономической модели. Ошибка в разрешённом использовании, границах, аренде, обременениях или градостроительном режиме может изменить стоимость проекта, возможность строительства, финансирование и структуру сделки.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-14 md:py-16 px-4">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-[24px] md:text-3xl mb-6 md:mb-8">
            Типовые задачи
          </h2>
          <ul className="space-y-3 md:space-y-4">
            {taskItems.map((item, index) => (
              <li key={item} className="flex items-start gap-4 md:gap-5">
                <span className="numeral-navy flex-shrink-0 leading-none pt-0.5" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[15.5px] leading-[1.6] md:text-base text-muted-foreground">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {relatedServices.length > 0 && (
      <section className="py-14 md:py-16 px-4">
        <div className="container">
          <h2 className="font-serif text-[24px] md:text-3xl mb-6 md:mb-8 text-center">
            Связанные услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {relatedServices.map((item) => (
              <Link
                key={item.path}
                to={toFinalPath(item.path)}
                className="group verdico-card p-5 md:p-7 bg-card border border-border hover:shadow-hover hover:border-verdico-gold/40 transition-all"
              >
                <h3 className="font-serif text-[18px] md:text-lg font-medium mb-2 group-hover:text-gradient-brand">
                  {item.h1}
                </h3>
                <span className="inline-flex items-center gap-1 text-[14.5px] md:text-sm text-accent min-h-[28px]">
                  Подробнее
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    )}

    <section className="py-14 md:py-16 px-4 bg-verdico-closing">
      <div className="container text-center">
        <h2 className="font-serif text-[26px] leading-tight md:text-3xl mb-4 text-verdico-ink">
          Обсудить вашу задачу?
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

export default LandRealEstateRu;
