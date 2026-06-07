import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ruServices } from "@/lib/seo";

const service = ruServices[2];

const InvestmentSupportRu = () => (
  <ServicePageTemplate
    service={service}
    content={{
      intro: "Юридическое сопровождение инвестиционных проектов на всём цикле: договорная база, корпоративные документы, регуляторные вопросы и защита прав инвестора. Особое внимание — последствиям, которые проявляются уже после подписания документов.",
      features: [
        "Структурирование инвестиционного проекта и распределение рисков",
        "Подготовка и экспертиза инвестиционных и сопутствующих договоров",
        "Корпоративные документы и регистрационные действия",
        "Регуляторный анализ и контроль исполнения обязательств",
        "Сопровождение споров и защита прав инвестора",
      ],
    }}
    additionalSections={
      <section className="py-14 md:py-16 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <span className="eyebrow mb-4">Инфраструктурные проекты</span>
            <h2 className="font-serif text-[24px] md:text-3xl mb-6 md:mb-8">
              ЦОДы и цифровая инфраструктура
            </h2>

            <div className="space-y-4 text-[15.5px] leading-[1.6] md:text-base md:leading-normal text-muted-foreground text-left">
              <p>
                Верди и Ко. рассматривает центры обработки данных как инфраструктурные
                проекты на стыке недвижимости, энергетики, капитала и права.
              </p>
              <p>
                Мы не подменяем технического заказчика, проектировщика или оператора
                ЦОД. Наша роль — помочь собственникам площадок, инвесторам и партнерам
                выстроить корректный коммерческий и правовой контур проекта: от
                первичной проверки площадки и документов до подготовки к переговорам с
                инвесторами, покупателями, операторами или резидентами.
              </p>
              <p>
                В таких проектах ключевое значение имеют не только площадь участка или
                здания, но и подтвержденная электрическая мощность, правовой титул,
                градостроительная документация, технические условия, инженерные
                ограничения, модель будущей эксплуатации, CAPEX, сроки реализации и
                структура сделки.
              </p>
              <p>
                При необходимости Верди и Ко. может подключать профильных технических
                специалистов по ЦОДам — по вопросам концепции, инженерной экспертизы,
                проектирования, технического заказчика, ввода в эксплуатацию,
                операционной модели и энергоснабжения.
              </p>
            </div>

            <div className="mt-8 p-5 md:p-7 bg-card verdico-card border border-border">
              <h3 className="font-serif text-[20px] md:text-2xl mb-4">
                Практический фокус
              </h3>
              <ul className="space-y-3 text-[15px] leading-[1.55] md:text-base md:leading-normal text-muted-foreground text-left">
                <li className="flex items-start gap-3">
                  <span className="text-accent" aria-hidden="true">—</span>
                  <span>проверка правового и коммерческого периметра площадки;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent" aria-hidden="true">—</span>
                  <span>подготовка объекта к переговорам с инвесторами, покупателями или операторами;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent" aria-hidden="true">—</span>
                  <span>структурирование взаимодействия сторон;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent" aria-hidden="true">—</span>
                  <span>сопровождение NDA, соглашений о взаимодействии и сделочной документации;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent" aria-hidden="true">—</span>
                  <span>
                    подключение российских и иностранных деловых контактов в сфере
                    недвижимости, энергетики, промышленности, логистики и цифровой
                    инфраструктуры.
                  </span>
                </li>
              </ul>
            </div>

            <p className="mt-8 font-serif text-[22px] leading-snug md:text-2xl text-foreground text-left">
              ЦОД — это не только здание с серверами. Это право на землю, доступ к
              мощности, инженерная реализуемость, капитал и долгосрочная
              эксплуатационная модель.
            </p>
          </div>
        </div>
      </section>
    }
  />
);

export default InvestmentSupportRu;
