import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import LegalServiceSchema from "@/components/seo/LegalServiceSchema";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import { BRAND_NAME_RU, getServiceByPath, ruServices, type ServicePage } from "@/lib/seo";

const service = ruServices.find(
  (item) => item.path === "/ru/services/international-migration-coordination",
)!;

const usefulScenarios = [
  "семья рассматривает переезд или получение вида на жительство за рубежом;",
  "нужно понять, какой путь подходит: семейное воссоединение, резидентство без права на работу, рабочее разрешение, статус для высококвалифицированного специалиста, инвестиционный или иной допустимый путь;",
  "пожилой родитель хочет переехать к взрослому сыну или дочери за границу;",
  "член семьи уже проживает в Испании, Германии, Швейцарии, ОАЭ, США или другой стране, и нужно понять, какие права могут быть у родственников;",
  "требуется оценить документы, сроки, расходы и риски до запуска полноценной процедуры;",
  "клиенту нужен не посредник по анкетам, а понятная координация с профильным иностранным адвокатом;",
  "есть сложные факты: возраст, здоровье, зависимость от родственника, подтверждение финансовой поддержки, аренда жилья, разные страны проживания членов семьи, консульская подача или ограничения по документам.",
];

const coordinationSteps = [
  "разобрать исходную ситуацию клиента;",
  "определить, какие страны и правовые пути следует проверить;",
  "подготовить список вопросов для иностранного специалиста;",
  "подобрать или проверить профильного адвоката или консультанта в соответствующей стране;",
  "получить от иностранной стороны первичную оценку формата работы, стоимости и сроков;",
  "сопровождать переписку на английском, русском или французском языке;",
  "проверить, отвечает ли иностранный специалист по существу, а не общими обещаниями;",
  "помочь сравнить несколько возможных путей;",
  "объяснить клиенту ответ иностранной стороны на русском языке;",
  "подготовить карту дальнейших шагов, расходов, документов и рисков.",
];

const workScope = [
  "семейного воссоединения;",
  "вида на жительство без права на работу;",
  "переезда родителей, супругов или детей;",
  "статуса высококвалифицированного специалиста и прав членов семьи;",
  "рабочих и предпринимательских разрешений;",
  "инвестиционных и долгосрочных резидентских программ, если они доступны и законны;",
  "подтверждения доходов, жилья, родства и зависимости;",
  "консульской подачи;",
  "взаимодействия с иностранным адвокатом, нотариусом, переводчиком, страховой компанией или государственными органами через местного специалиста.",
];

const parentRelocationFactors = [
  "какой статус уже есть у принимающего члена семьи;",
  "можно ли доказать родство и зависимость;",
  "хватает ли дохода и жилья;",
  "какие документы нужны;",
  "где лучше подавать заявление;",
  "сколько времени займет процедура;",
  "сколько стоят местный адвокат, переводы, пошлины, страховка и сопутствующие расходы;",
  "какие факты могут привести к отказу.",
];

const limitations = [
  "Верди и Ко. не гарантирует получение визы, вида на жительство, разрешения на работу или положительного решения иностранного органа.",
  "Мы не оказываем юридическую помощь по иностранному миграционному праву вместо местного адвоката.",
  "Мы не подаем документы в иностранные органы вместо уполномоченного специалиста, если это требует местного допуска или лицензии.",
  "Мы работаем только с законными основаниями, достоверными документами и заранее согласованной передачей персональных данных.",
  "Мы не передаем персональные документы иностранной стороне без согласования с клиентом.",
];

const relatedServices = service.relatedServices
  .map((path) => getServiceByPath(path))
  .filter(Boolean) as ServicePage[];

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
  <ul className="space-y-3 md:space-y-4">
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
  </ul>
);

const InternationalMigrationCoordinationRu = () => (
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
      providerName={BRAND_NAME_RU}
    />

    <section className="pt-24 pb-14 md:py-24 px-4">
      <div className="container">
        <div className="max-w-3xl">
          <span className="eyebrow">Услуга</span>
          <h1 className="h1-hero mt-4 md:mt-5 mb-5 md:mb-6">{service.h1}</h1>
          <div className="space-y-4 text-[16px] leading-[1.6] md:text-lg md:leading-normal text-muted-foreground text-left">
            <p>
              Верди и Ко. помогает частным клиентам и семьям разобраться со сложными
              миграционными и резидентскими вопросами за рубежом: когда нужно не
              просто заполнить анкету, а понять правильный путь, документы, сроки,
              расходы, риски и роль местного адвоката.
            </p>
            <p>
              Мы не заменяем адвоката в иностранной стране и не выдаем себя за
              миграционную практику конкретной юрисдикции. Окончательная позиция по
              праву Испании, Германии, Швейцарии, ОАЭ, США или иной страны должна
              подтверждаться профильным специалистом в соответствующей стране.
            </p>
            <p>
              Наша роль — быть понятным мостом между русскоязычным клиентом и
              иностранной правовой системой: собрать вводные, определить, какой
              специалист нужен, подготовить вопросы, проверить предложение,
              сопровождать переписку и объяснить клиенту на русском языке, что
              реально происходит, какие есть варианты и где находятся риски.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-14 md:py-16 px-4 bg-secondary/50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-[24px] md:text-3xl mb-6 md:mb-8">
            Когда это может быть полезно
          </h2>
          <p className="text-[15.5px] leading-[1.6] md:text-base md:leading-normal text-muted-foreground mb-5 text-left">
            Такая работа может быть нужна, если:
          </p>
          <DashList items={usefulScenarios} />
        </div>
      </div>
    </section>

    <section className="py-14 md:py-16 px-4">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-[24px] md:text-3xl mb-6 md:mb-8">
            Что делает Верди и Ко.
          </h2>
          <p className="text-[15.5px] leading-[1.6] md:text-base md:leading-normal text-muted-foreground mb-6 text-left">
            На первом этапе мы можем:
          </p>
          <NumberedList items={coordinationSteps} />
        </div>
      </div>
    </section>

    <section className="py-14 md:py-16 px-4 bg-secondary/50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-[24px] md:text-3xl mb-6 md:mb-8">
            Какие вопросы могут входить в работу
          </h2>
          <p className="text-[15.5px] leading-[1.6] md:text-base md:leading-normal text-muted-foreground mb-5 text-left">
            В зависимости от страны и ситуации это может касаться:
          </p>
          <DashList items={workScope} />
        </div>
      </div>
    </section>

    <section className="py-14 md:py-16 px-4">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-[24px] md:text-3xl mb-6 md:mb-8">
            Пример ситуации
          </h2>
          <div className="space-y-4 text-[15.5px] leading-[1.6] md:text-base md:leading-normal text-muted-foreground text-left">
            <p>
              Семья хочет понять, как пожилой родитель может законно переехать к
              взрослому сыну или дочери, которые уже проживают за рубежом.
            </p>
            <p>
              На первый взгляд вопрос может казаться простым: «какую визу выбрать?».
              На практике важно понять:
            </p>
          </div>
          <div className="mt-5">
            <DashList items={parentRelocationFactors} />
          </div>
          <p className="mt-7 font-serif text-[21px] leading-snug md:text-2xl text-foreground text-left">
            Верди и Ко. помогает структурировать этот вопрос и поставить его перед
            профильным иностранным специалистом так, чтобы клиент получил не
            рекламное обещание, а рабочую картину.
          </p>
        </div>
      </div>
    </section>

    <section className="py-14 md:py-16 px-4 bg-secondary/50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-[24px] md:text-3xl mb-6 md:mb-8">
            Что мы не обещаем
          </h2>
          <DashList items={limitations} />
        </div>
      </div>
    </section>

    <section className="py-14 md:py-16 px-4">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-[24px] md:text-3xl mb-6 md:mb-8">
            Как строится работа
          </h2>
          <div className="space-y-4 text-[15.5px] leading-[1.6] md:text-base md:leading-normal text-muted-foreground text-left">
            <p>Обычно работа идет поэтапно.</p>
            <p>
              Сначала мы проводим первичный разбор ситуации, определяем возможные
              направления и понимаем, специалист какой страны нужен. Затем формируем
              вопросы, обращаемся к профильному иностранному адвокату или консультанту
              и получаем первичную оценку по пути, документам, срокам, рискам и
              стоимости.
            </p>
            <p>
              После этого клиент принимает решение: продолжать ли работу с иностранным
              специалистом, запускать ли подготовку документов и нужно ли дальнейшее
              сопровождение с нашей стороны.
            </p>
          </div>

          <div className="mt-8 p-5 md:p-7 bg-card verdico-card border border-border">
            <h2 className="font-serif text-[22px] md:text-2xl mb-4">Важно</h2>
            <div className="space-y-4 text-[15.5px] leading-[1.6] md:text-base md:leading-normal text-muted-foreground text-left">
              <p>
                Каждая ситуация зависит от страны, статуса заявителя, семейных
                обстоятельств, документов, финансового положения, доказательств
                поддержки, медицинских данных, ограничений и требований местных
                органов.
              </p>
              <p>
                Информация на этой странице не является юридической консультацией по
                иностранному праву. Окончательная позиция по праву конкретной страны
                должна быть подтверждена профильным специалистом в этой стране.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {relatedServices.length > 0 && (
      <section className="py-14 md:py-16 px-4 bg-secondary/50">
        <div className="container">
          <h2 className="font-serif text-[24px] md:text-3xl mb-6 md:mb-8 text-center">
            Связанные услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {relatedServices.map((item) => (
              <Link
                key={item.path}
                to={item.path}
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

    <section className="py-14 md:py-16 px-4 bg-verdico-cta">
      <div className="container text-center">
        <h2 className="font-serif text-[26px] leading-tight md:text-3xl mb-4 text-white">
          Обсудить вашу задачу?
        </h2>
        <Link to="/ru/kontakty">
          <Button size="lg" className="gap-2 btn-navy-glass rounded-full h-12 md:h-11">
            Связаться
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  </MultilingualLayout>
);

export default InternationalMigrationCoordinationRu;
