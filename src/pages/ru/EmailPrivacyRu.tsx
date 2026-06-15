import { useEffect } from "react";
import { Mail, ShieldCheck } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import { EMAIL } from "@/lib/seo";

const CANONICAL_URL = "https://www.verdico.ru/ru/email-privacy/";

const disclaimerSections = [
  {
    title: "1. Конфиденциальность и ошибочный адресат",
    paragraphs: [
      "Электронное сообщение и приложенные к нему файлы могут содержать конфиденциальную информацию, сведения, составляющие коммерческую, профессиональную или иную охраняемую законом тайну, правовые позиции, документы по проектам, сделкам, статусу и использованию объектов недвижимости, а также персональные данные.",
      "Если Вы получили сообщение ошибочно, просим не использовать, не копировать, не пересылать и не распространять его содержание, а также незамедлительно уведомить отправителя и удалить сообщение вместе со всеми приложениями и копиями.",
    ],
  },
  {
    title: "2. Отсутствие оферты, акцепта и профессионального заключения",
    paragraphs: [
      "Информация, содержащаяся в электронной переписке, предназначена исключительно для адресата и конкретного контекста коммуникации.",
      "Если прямо не указано иное в отдельном письменном соглашении, переписка не является публичной офертой, акцептом, юридическим заключением, налоговой, финансовой, инвестиционной рекомендацией или иной профессиональной консультацией.",
      "Переписка сама по себе не подтверждает заключение или изменение договора, принятие поручения, согласование условий сделки, финансирования, инвестиций или работы с объектами недвижимости, если это прямо не оформлено отдельным письменным соглашением или иным документом, подписанным уполномоченными лицами.",
    ],
  },
  {
    title: "3. Сделки, недвижимость, инвестиции и финансирование",
    paragraphs: [
      "Сообщения о проектах, объектах недвижимости, инвестициях, привлечении финансирования, переговорах, правовых позициях, расчетах, прогнозах, структуре сделки или коммерческих условиях имеют значение только в рамках конкретной деловой коммуникации.",
      "Такие сообщения не являются инвестиционной рекомендацией, финансовой рекомендацией, гарантией результата, подтверждением доходности, обязательством предоставить финансирование или обязательством совершить сделку, если иное прямо не согласовано в отдельном письменном документе.",
      "Любые юридические выводы, рекомендации, оценки, расчеты, правовые позиции, прогнозы или коммерческие предложения применимы только к обстоятельствам, для которых они подготовлены, и не должны использоваться третьими лицами без отдельного письменного согласия.",
    ],
  },
  {
    title: "4. Полномочия отправителя и данные третьих лиц",
    paragraphs: [
      "Если Вы направляете Верди и Ко персональные данные, документы, сведения о третьих лицах, контрагентах, клиентах, представителях, собственниках, бенефициарах, участниках сделки или иных лицах, Вы подтверждаете, что имеете правовое основание и необходимые полномочия для такой передачи.",
      "Продолжая переписку, направляя документы или предоставляя сведения, Вы подтверждаете, что ознакомлены с настоящим уведомлением и понимаете, что Верди и Ко может обрабатывать полученную в переписке информацию и персональные данные для целей соответствующей деловой, договорной, претензионной, судебной, консультационной или иной профессиональной коммуникации.",
    ],
  },
];

const dataCategories = [
  "фамилия, имя, отчество;",
  "должность, место работы или представляемая организация;",
  "адрес электронной почты;",
  "номер телефона;",
  "сведения из документов и приложений;",
  "информация о полномочиях, статусе, связи с проектом, сделкой, объектом недвижимости, инвестицией или финансированием;",
  "иная информация, переданная в рамках деловой, договорной, претензионной, судебной, консультационной или иной профессиональной коммуникации.",
];

const processingPurposes = [
  "рассмотрение обращений и запросов;",
  "ведение деловой переписки;",
  "проверка полномочий отправителя и состава переданных материалов;",
  "подготовка, заключение и исполнение договоров;",
  "оказание юридических, консультационных, представительских и иных профессиональных услуг;",
  "проверка конфликта интересов;",
  "подготовка документов, заключений, предложений, расчетов, правовых позиций и материалов;",
  "сопровождение переговоров, сделок, проектов, вопросов недвижимости, инвестиций и финансирования;",
  "исполнение требований закона, судебных актов и запросов уполномоченных органов;",
  "защита прав и законных интересов Верди и Ко, клиентов, доверителей, контрагентов и иных лиц.",
];

const EmailPrivacyRu = () => {
  useEffect(() => {
    document.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]').forEach((link) => {
      if (link.href !== CANONICAL_URL) {
        link.remove();
      }
    });
  }, []);

  return (
    <MultilingualLayout>
      <SEOHead
        title="Уведомление о конфиденциальности и обработке персональных данных | Верди и Ко"
        description="Уведомление Верди и Ко о конфиденциальности электронной переписки и обработке персональных данных при деловой коммуникации."
        path="/ru/email-privacy"
        canonicalUrl={CANONICAL_URL}
      />

      <section className="relative overflow-hidden bg-verdico-cta px-4 py-14 text-white md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <span className="eyebrow mb-5 !text-verdico-gold-soft">
              Верди и Ко / конфиденциальность переписки
            </span>
            <h1 className="font-serif text-[34px] leading-tight md:text-[52px]">
              Уведомление о конфиденциальности и обработке персональных данных
            </h1>
            <p className="mt-6 max-w-3xl text-[16px] leading-[1.7] text-white/82 md:text-lg md:leading-relaxed">
              Настоящее уведомление применяется к электронной переписке,
              сообщениям, документам и иным материалам, направляемым или
              получаемым через адреса электронной почты, связанные с Верди и Ко,
              включая{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="text-white underline decoration-verdico-gold/70 underline-offset-4 hover:decoration-white"
              >
                {EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 px-4 py-12 md:py-18">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-5 md:space-y-6">
            {disclaimerSections.map((section, index) => (
              <section
                key={section.title}
                className={`verdico-card border bg-card p-5 md:p-8 ${
                  index === 0 ? "border-verdico-gold/40" : "border-border"
                }`}
              >
                <h2 className="font-serif text-[23px] leading-snug text-foreground md:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-[15.5px] leading-[1.75] text-muted-foreground md:text-base">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <section className="verdico-card border border-border bg-card p-5 md:p-8">
              <h2 className="font-serif text-[23px] leading-snug text-foreground md:text-3xl">
                5. Персональные данные
              </h2>
              <div className="mt-4 space-y-4 text-[15.5px] leading-[1.75] text-muted-foreground md:text-base">
                <p>
                  В рамках деловой переписки Верди и Ко может получать и
                  обрабатывать персональные данные, которые Вы направляете
                  добровольно или которые содержатся в сообщениях, документах,
                  подписях, приложениях, реквизитах и иных переданных материалах.
                </p>
                <p>К таким данным могут относиться:</p>
                <ul className="list-disc space-y-2 pl-5">
                  {dataCategories.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="verdico-card border border-border bg-card p-5 md:p-8">
              <h2 className="font-serif text-[23px] leading-snug text-foreground md:text-3xl">
                6. Цели обработки
              </h2>
              <div className="mt-4 space-y-4 text-[15.5px] leading-[1.75] text-muted-foreground md:text-base">
                <p>Персональные данные могут обрабатываться в следующих целях:</p>
                <ul className="list-disc space-y-2 pl-5">
                  {processingPurposes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="verdico-card border border-border bg-card p-5 md:p-8">
              <h2 className="font-serif text-[23px] leading-snug text-foreground md:text-3xl">
                7. Правовые основания обработки
              </h2>
              <p className="mt-4 text-[15.5px] leading-[1.75] text-muted-foreground md:text-base">
                Обработка персональных данных осуществляется в пределах,
                необходимых для достижения указанных целей, на основании
                применимого законодательства, согласия субъекта персональных
                данных, исполнения договора или подготовки к его заключению,
                исполнения требований закона, а также осуществления прав и
                законных интересов при условии соблюдения прав и свобод
                субъектов персональных данных.
              </p>
            </section>

            <section className="verdico-card border border-border bg-card p-5 md:p-8">
              <h2 className="font-serif text-[23px] leading-snug text-foreground md:text-3xl">
                8. Передача информации третьим лицам
              </h2>
              <div className="mt-4 space-y-4 text-[15.5px] leading-[1.75] text-muted-foreground md:text-base">
                <p>
                  Персональные данные и конфиденциальная информация не
                  раскрываются третьим лицам без законного основания, согласия
                  субъекта данных или необходимости, связанной с исполнением
                  поручения, договора, судебного акта, требования закона либо
                  защитой прав и законных интересов.
                </p>
                <p>
                  В рамках профессиональной работы информация может передаваться
                  уполномоченным представителям, консультантам, экспертам,
                  переводчикам, нотариусам, государственным органам, судам,
                  контрагентам, участникам проектов, сделок, вопросов
                  недвижимости, инвестиций или финансирования и иным лицам, если
                  такая передача необходима для соответствующей цели и не
                  противоречит применимым требованиям.
                </p>
              </div>
            </section>

            <section className="verdico-card border border-border bg-card p-5 md:p-8">
              <h2 className="font-serif text-[23px] leading-snug text-foreground md:text-3xl">
                9. Хранение и удаление
              </h2>
              <div className="mt-4 space-y-4 text-[15.5px] leading-[1.75] text-muted-foreground md:text-base">
                <p>
                  Материалы переписки, документы и персональные данные хранятся
                  в течение срока, необходимого для целей коммуникации,
                  исполнения договоров, защиты прав, ведения делового
                  документооборота и соблюдения требований закона.
                </p>
                <p>
                  По достижении целей обработки либо при утрате правовых
                  оснований данные подлежат удалению, обезличиванию или архивному
                  хранению в случаях и порядке, предусмотренных применимыми
                  требованиями.
                </p>
              </div>
            </section>

            <section className="verdico-card border border-border bg-card p-5 md:p-8">
              <h2 className="font-serif text-[23px] leading-snug text-foreground md:text-3xl">
                10. Права субъекта персональных данных
              </h2>
              <div className="mt-4 space-y-4 text-[15.5px] leading-[1.75] text-muted-foreground md:text-base">
                <p>
                  Субъект персональных данных вправе направить запрос, связанный
                  с обработкой его персональных данных, включая запрос об
                  уточнении, блокировании, удалении данных или отзыве согласия,
                  если соответствующее право применимо к конкретной ситуации.
                </p>
                <p>Запрос можно направить по адресу:</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 font-medium text-accent hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  {EMAIL}
                </a>
              </div>
            </section>

            <section className="verdico-card border border-border bg-card p-5 md:p-8">
              <h2 className="font-serif text-[23px] leading-snug text-foreground md:text-3xl">
                11. Ограничение ответственности за передачу по электронной почте
              </h2>
              <p className="mt-4 text-[15.5px] leading-[1.75] text-muted-foreground md:text-base">
                Электронная почта не является абсолютно защищенным каналом связи.
                Направляя информацию по электронной почте, отправитель
                подтверждает, что понимает характер такого канала связи и
                передает сведения добровольно, если иной защищенный способ обмена
                не был отдельно согласован сторонами.
              </p>
            </section>

            <section className="verdico-card border border-verdico-gold/30 bg-card p-5 md:p-8">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 h-6 w-6 flex-shrink-0 text-verdico-gold" />
                <div>
                  <h2 className="font-serif text-[23px] leading-snug text-foreground md:text-3xl">
                    12. Контакт
                  </h2>
                  <div className="mt-4 space-y-4 text-[15.5px] leading-[1.75] text-muted-foreground md:text-base">
                    <p>
                      По вопросам, связанным с настоящим уведомлением,
                      конфиденциальностью переписки и обработкой персональных
                      данных, можно обратиться по адресу:
                    </p>
                    <p>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="font-medium text-accent hover:underline"
                      >
                        {EMAIL}
                      </a>
                    </p>
                    <p>
                      Верди и Ко
                      <br />
                      <a
                        href="https://www.verdico.ru"
                        className="text-accent hover:underline"
                      >
                        www.verdico.ru
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </MultilingualLayout>
  );
};

export default EmailPrivacyRu;
