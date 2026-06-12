import { useEffect } from "react";
import { Mail, ShieldCheck } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import { EMAIL } from "@/lib/seo";

const CANONICAL_URL = "https://www.verdico.ru/ru/email-privacy";

const dataCategories = [
  "фамилия, имя, отчество;",
  "должность, место работы или представляемая организация;",
  "адрес электронной почты;",
  "номер телефона;",
  "сведения из документов и приложений;",
  "иная информация, переданная в рамках деловой, договорной, претензионной, судебной, консультационной или иной профессиональной коммуникации.",
];

const processingPurposes = [
  "рассмотрение обращений и запросов;",
  "ведение деловой переписки;",
  "подготовка, заключение и исполнение договоров;",
  "оказание юридических, консультационных, представительских и иных профессиональных услуг;",
  "проверка конфликта интересов;",
  "подготовка документов, заключений, предложений и материалов;",
  "исполнение требований закона, судебных актов и запросов уполномоченных органов;",
  "защита прав и законных интересов Verdi & Co., клиентов, доверителей, контрагентов и иных лиц.",
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
        title="Уведомление о конфиденциальности и обработке персональных данных | Verdi & Co."
        description="Уведомление Verdi & Co. о конфиденциальности электронной переписки и обработке персональных данных при деловой коммуникации."
        path="/ru/email-privacy"
        canonicalUrl={CANONICAL_URL}
      />

      <section className="relative overflow-hidden bg-verdico-cta px-4 py-14 text-white md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <span className="eyebrow mb-5 !text-verdico-gold-soft">
              Verdi & Co. / конфиденциальность переписки
            </span>
            <h1 className="font-serif text-[34px] leading-tight md:text-[52px]">
              Уведомление о конфиденциальности и обработке персональных данных
            </h1>
            <p className="mt-6 max-w-3xl text-[16px] leading-[1.7] text-white/82 md:text-lg md:leading-relaxed">
              Настоящее уведомление применяется к электронной переписке,
              сообщениям, документам и иным материалам, направляемым или
              получаемым через адреса электронной почты, связанные с Verdi & Co.,
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
            <section className="verdico-card border border-border bg-card p-5 md:p-8">
              <h2 className="font-serif text-[23px] leading-snug text-foreground md:text-3xl">
                1. Конфиденциальность переписки
              </h2>
              <div className="mt-4 space-y-4 text-[15.5px] leading-[1.75] text-muted-foreground md:text-base">
                <p>
                  Электронное сообщение и приложенные к нему файлы могут
                  содержать конфиденциальную информацию, сведения, составляющие
                  коммерческую, профессиональную или иную охраняемую законом
                  тайну, а также персональные данные.
                </p>
                <p>
                  Если Вы получили сообщение ошибочно, просим не использовать, не
                  копировать, не пересылать и не распространять его содержание, а
                  также незамедлительно уведомить отправителя и удалить сообщение
                  вместе со всеми приложениями и копиями.
                </p>
              </div>
            </section>

            <section className="verdico-card border border-border bg-card p-5 md:p-8">
              <h2 className="font-serif text-[23px] leading-snug text-foreground md:text-3xl">
                2. Отсутствие публичной оферты и профессионального заключения
              </h2>
              <div className="mt-4 space-y-4 text-[15.5px] leading-[1.75] text-muted-foreground md:text-base">
                <p>
                  Информация, содержащаяся в электронной переписке, предназначена
                  исключительно для адресата и конкретного контекста коммуникации.
                </p>
                <p>
                  Если прямо не указано иное в отдельном письменном соглашении,
                  переписка не является публичной офертой, акцептом, юридическим
                  заключением, налоговой, финансовой, инвестиционной или иной
                  профессиональной консультацией.
                </p>
                <p>
                  Любые юридические выводы, рекомендации, оценки, расчеты,
                  правовые позиции, прогнозы или коммерческие предложения
                  применимы только к обстоятельствам, для которых они
                  подготовлены, и не должны использоваться третьими лицами без
                  отдельного письменного согласия.
                </p>
              </div>
            </section>

            <section className="verdico-card border border-border bg-card p-5 md:p-8">
              <h2 className="font-serif text-[23px] leading-snug text-foreground md:text-3xl">
                3. Персональные данные
              </h2>
              <div className="mt-4 space-y-4 text-[15.5px] leading-[1.75] text-muted-foreground md:text-base">
                <p>
                  В рамках деловой переписки Verdi & Co. может получать и
                  обрабатывать персональные данные, которые Вы направляете
                  добровольно или которые содержатся в сообщениях, документах,
                  подписях, приложениях и реквизитах.
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
                4. Цели обработки
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
                5. Правовые основания обработки
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
                6. Передача информации третьим лицам
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
                  контрагентам и иным лицам, если такая передача необходима для
                  соответствующей цели и не противоречит применимым требованиям.
                </p>
              </div>
            </section>

            <section className="verdico-card border border-border bg-card p-5 md:p-8">
              <h2 className="font-serif text-[23px] leading-snug text-foreground md:text-3xl">
                7. Хранение и удаление
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
                8. Права субъекта персональных данных
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
                9. Ограничение ответственности за передачу по электронной почте
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
                    10. Контакт
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
                      Verdi & Co.
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
