import { ArrowRight, Check, Mail } from "lucide-react";

const partnershipDirections = [
  "Подбор технологических партнёров под промышленные, финансовые, страховые, ритейл-, логистические и инфраструктурные задачи.",
  "Проверка применимости решения: зрелость, отраслевые внедрения, локализация, ИБ, данные и сервисная поддержка.",
  "Подготовка первичного маршрута: NDA, описание кейсов, техническая записка, пилотный контур, закупочный или партнёрский формат.",
  "Помощь международным технологическим компаниям в оценке работы в российском контуре через локальное юридическое лицо, команду и модель сопровождения.",
  "Переговоры по условиям партнёрства, агентским / консультационным соглашениям, non-circumvention и коммерческой архитектуре взаимодействия.",
];

const industryFocus = [
  "AI / ML и корпоративная автоматизация",
  "Страховые технологии: андеррайтинг, урегулирование убытков, антифрод, документооборот",
  "Ритейл-технологии: персонализация, поиск, рекомендательные системы, retail media, video analytics",
  "Логистика и складская автоматизация",
  "Промышленная цифровизация, цифровые двойники, data-driven операционные модели",
  "TravelTech и автоматизация клиентского сервиса",
];

const TechnologyPartnershipsRu = () => {
  return (
    <section
      id="technology-partnerships"
      className="relative overflow-hidden border-y border-verdico-gold/20 bg-[#f4f7fb] px-4 py-14 md:py-24"
    >
      <div
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-verdico-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.65fr)_minmax(280px,0.75fr)] lg:gap-14">
          <div>
            <span className="eyebrow">Корпоративное развитие</span>
            <h2 className="h2-section mt-4 max-w-5xl md:mt-5">
              Технологические партнёрства и корпоративное развитие
            </h2>
            <p className="mt-5 max-w-4xl text-[16px] leading-[1.65] text-verdico-ink/75 md:mt-6 md:text-lg">
              Верди и Ко. помогает компаниям и технологическим поставщикам проверить,
              есть ли практическое совпадение между корпоративной задачей, зрелостью
              решения, локализацией исполнения и ответственностью за результат.
            </p>
          </div>

          <div className="verdico-card self-start border border-white/70 bg-white/80 p-5 shadow-card backdrop-blur-sm md:p-6">
            <p className="eyebrow !text-[10px]">Наш подход</p>
            <p className="mt-4 font-serif text-xl leading-snug text-verdico-ink md:text-2xl">
              Сопоставляем корпоративную задачу с релевантной технологической экспертизой.
            </p>
            <p className="mt-4 text-[15px] leading-[1.6] text-muted-foreground">
              Выводим стороны к переговорам только при наличии практического совпадения.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 border-t border-verdico-ink/10 pt-9 lg:mt-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)] lg:gap-14 lg:pt-11">
          <div className="space-y-5 text-[15.5px] leading-[1.7] text-verdico-ink/78 md:text-base">
            <p>
              Мы работаем на стыке сделок, стратегических партнёрств и переговоров.
              Сначала проверяем потребность заказчика и применимость решения, затем
              определяем, есть ли смысл переходить к NDA, описанию кейса, пилоту или
              партнёрскому формату.
            </p>
            <p>
              Если совпадение есть, помогаем сторонам выстроить переговоры в корректном
              коммерческом и правовом контуре: роли, ответственность, локализация, данные,
              поддержка и порядок дальнейшей работы.
            </p>
          </div>

          <aside className="border-l-2 border-verdico-gold pl-5 md:pl-7">
            <span className="eyebrow">Принцип работы</span>
            <p className="mt-4 text-[15.5px] leading-[1.65] text-verdico-ink/78 md:text-base">
              Мы не подменяем закупочную процедуру и не создаём искусственный интерес.
              Наша задача — быстро показать, есть ли реальная потребность, зрелое решение,
              корректный формат входа и коммерческий смысл для обеих сторон.
            </p>
          </aside>
        </div>

        <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-2 lg:gap-6">
          <div className="verdico-card border border-border/80 bg-white p-5 md:p-8">
            <h3 className="font-serif text-2xl font-medium text-verdico-ink md:text-3xl">
              Ключевые направления
            </h3>
            <ul className="mt-6 space-y-4">
              {partnershipDirections.map((direction) => (
                <li key={direction} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-verdico-blue-deep text-white">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  <span className="text-[15px] leading-[1.6] text-verdico-ink/75">
                    {direction}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="verdico-card border border-border/80 bg-white p-5 md:p-8">
            <h3 className="font-serif text-2xl font-medium text-verdico-ink md:text-3xl">
              Отраслевой фокус
            </h3>
            <ul className="mt-6 divide-y divide-verdico-ink/10">
              {industryFocus.map((industry, index) => (
                <li key={industry} className="flex gap-4 py-3.5 first:pt-0 last:pb-0">
                  <span className="font-serif text-lg text-verdico-gold" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] leading-[1.55] text-verdico-ink/75">
                    {industry}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-6 overflow-hidden border border-verdico-gold/25 bg-[radial-gradient(circle_at_18%_0%,rgba(201,165,85,0.16),transparent_34%),radial-gradient(circle_at_88%_18%,rgba(90,139,172,0.13),transparent_32%),linear-gradient(135deg,#fbfaf5_0%,#f4f8fa_56%,#eef4f2_100%)] p-6 text-verdico-ink shadow-[0_18px_52px_rgba(7,23,47,0.07)] md:mt-8 md:flex-row md:items-center md:justify-between md:p-8 lg:px-10">
          <div>
            <span className="eyebrow">Следующий шаг</span>
            <h3 className="mt-3 font-serif text-2xl font-medium md:text-3xl">
              Обсудить технологическое партнёрство
            </h3>
            <a
              href="mailto:admin@verdico.ru"
              className="mt-3 inline-flex items-center gap-2 text-[15px] text-verdico-ink/65 transition-colors hover:text-verdico-blue-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-verdico-gold focus-visible:ring-offset-2"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              admin@verdico.ru
            </a>
          </div>
          <a
            href="mailto:admin@verdico.ru?subject=%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5%20%D0%BF%D0%B0%D1%80%D1%82%D0%BD%D1%91%D1%80%D1%81%D1%82%D0%B2%D0%BE"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-verdico-blue-deep/15 bg-white/75 px-6 text-sm font-medium text-verdico-blue-deep shadow-[0_10px_24px_rgba(7,23,47,0.08)] transition-colors hover:border-verdico-blue-deep/25 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-verdico-gold focus-visible:ring-offset-2 md:min-h-11"
          >
            Написать нам
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartnershipsRu;
