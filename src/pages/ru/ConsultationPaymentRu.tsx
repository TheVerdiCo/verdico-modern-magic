import { ArrowLeft, FileText, ShieldCheck, CreditCard, ClipboardCheck } from "lucide-react";
import { Link } from "react-router-dom";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import SEOHead from "@/components/seo/SEOHead";
import { EMAIL } from "@/lib/seo";

// Подставьте реальную ссылку на Яндекс Форму после её настройки.
// Форма должна отправлять ответ на admin@verdico.ru и перенаправлять
// после отправки на /ru/konsultatsiya-oplata/oplata.
const YANDEX_FORM_URL = "REPLACE_WITH_YANDEX_FORM_URL";
const formConfigured = YANDEX_FORM_URL !== "REPLACE_WITH_YANDEX_FORM_URL";

const ConsultationPaymentRu = () => {
  return (
    <MultilingualLayout>
      <SEOHead
        title="Консультация и порядок оплаты — Верди и Ко."
        description="Общие условия направления запроса на индивидуальную консультацию, подтверждение согласия через форму и порядок оплаты."
        path="/ru/konsultatsiya-oplata"
        noIndex
      />

      <section className="py-14 md:py-20 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/ru"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              На главную
            </Link>

            <div className="mb-10 md:mb-12">
              <span className="eyebrow">Консультация</span>
              <h1 className="font-serif text-3xl md:text-5xl mt-4 mb-5">
                Консультация и порядок оплаты
              </h1>
              <p className="text-[16px] leading-[1.65] md:text-lg md:leading-relaxed text-muted-foreground">
                Настоящая страница определяет общие условия направления запроса
                на индивидуальную юридическую или бизнес-консультацию через
                Verdico.ru.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <section className="bg-card border border-border verdico-card p-5 md:p-7">
                <h2 className="font-serif text-xl md:text-2xl mb-4">
                  Правовой характер информации
                </h2>
                <div className="space-y-3 text-[15px] leading-[1.65] text-muted-foreground">
                  <p>
                    Информация, размещенная на сайте, носит общий информационный
                    характер и не является индивидуальной консультацией по
                    конкретной ситуации.
                  </p>
                  <p>
                    Индивидуальная консультация начинается только после
                    подтверждения запроса со стороны Верди и Ко., согласования
                    предмета обращения и объема рассмотрения.
                  </p>
                  <p>
                    Направление запроса само по себе не гарантирует принятие
                    поручения или возможность проведения консультации. Верди и
                    Ко. вправе отказать в консультации при наличии конфликта
                    интересов, недостаточности информации или если запрос выходит
                    за пределы профиля работы.
                  </p>
                </div>
              </section>

              <section className="bg-card border border-border verdico-card p-5 md:p-7">
                <h2 className="font-serif text-xl md:text-2xl mb-4">
                  Объем консультации
                </h2>
                <ul className="list-disc list-outside ml-5 space-y-2 text-[15px] leading-[1.65] text-muted-foreground">
                  <li>юридическая или бизнес-консультация по согласованному вопросу;</li>
                  <li>анализ документов или ситуации только в пределах согласованного объема;</li>
                  <li>
                    без судебного представительства, гарантии результата,
                    налоговых, бухгалтерских, аудиторских услуг или нотариальных
                    действий, если это отдельно не согласовано.
                  </li>
                </ul>
              </section>

              <section className="bg-card border border-border verdico-card p-5 md:p-7">
                <h2 className="font-serif text-xl md:text-2xl mb-4">
                  Порядок оплаты
                </h2>
                <div className="space-y-3 text-[15px] leading-[1.65] text-muted-foreground">
                  <p>
                    Последовательность работы: пользователь заполняет форму
                    подтверждения, Verdico согласовывает объем и стоимость
                    консультации, после этого производится оплата.
                  </p>
                  <p>
                    Оплата производится на отдельной странице оплаты, которая
                    открывается после отправки формы подтверждения. Реквизиты
                    оплаты не изменяют согласованный объем консультации.
                  </p>
                  <p>
                    Не оплачивайте консультацию до подтверждения со стороны
                    Verdico. Оплачивается только сумма, заранее согласованная с
                    Verdico в переписке.
                  </p>
                  <p>
                    Если после оплаты консультация не может быть предоставлена,
                    вопрос возврата или иного урегулирования определяется
                    индивидуально с учетом применимого законодательства и
                    обстоятельств платежа.
                  </p>
                </div>
              </section>

              <section className="bg-card border border-border verdico-card p-5 md:p-7">
                <h2 className="font-serif text-xl md:text-2xl mb-4">
                  Персональные данные
                </h2>
                <div className="space-y-3 text-[15px] leading-[1.65] text-muted-foreground">
                  <p>
                    При добровольном направлении запроса могут обрабатываться
                    минимально необходимые данные: имя, адрес электронной почты
                    или телефон, содержание сообщения, сведения из документов,
                    добровольно направленных пользователем, а также данные,
                    связанные с подтверждением оплаты, если они применимы.
                  </p>
                  <p>
                    Цели обработки: ответ на запрос, проверка конфликта интересов
                    и объема обращения, коммуникация, проведение консультации,
                    подтверждение оплаты и бухгалтерского учета, соблюдение
                    применимых правовых требований.
                  </p>
                  <p>
                    Подробные условия — в{" "}
                    <Link to="/policy" className="text-accent hover:underline">
                      политике обработки персональных данных
                    </Link>
                    . Для обращений используется адрес{" "}
                    <a href={`mailto:${EMAIL}`} className="text-accent hover:underline">
                      {EMAIL}
                    </a>
                    .
                  </p>
                </div>
              </section>

              <section className="border-2 border-accent/40 bg-accent/5 rounded-xl p-5 md:p-7">
                <h2 className="font-serif text-xl md:text-2xl mb-4">
                  Согласие на обработку персональных данных
                </h2>
                <div className="space-y-3 text-[15px] leading-[1.65] text-muted-foreground">
                  <p>
                    Согласие на обработку персональных данных и согласие с
                    условиями консультации оформляются отдельными отметками в
                    форме подтверждения (см. ниже). Это самостоятельные
                    подтверждения, не объединённые с другими сведениями.
                  </p>
                  <p>
                    Ответ формы направляется на {EMAIL} и используется как
                    подтверждение направления запроса и указанных согласий. На
                    самом сайте не используется автоматическая форма отправки
                    данных и не хранится содержание обращения — фиксация ответа
                    обеспечивается сервисом формы.
                  </p>
                </div>
              </section>

              <section className="bg-card border border-border verdico-card p-5 md:p-7">
                <h2 className="font-serif text-xl md:text-2xl mb-4">
                  Как направить запрос
                </h2>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                    <span className="text-[15px] leading-[1.65] text-muted-foreground">
                      <span className="font-medium text-foreground">Шаг 1.</span>{" "}
                      Ознакомьтесь с условиями консультации на этой странице.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ShieldCheck className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                    <span className="text-[15px] leading-[1.65] text-muted-foreground">
                      <span className="font-medium text-foreground">Шаг 2.</span>{" "}
                      Заполните форму подтверждения — отдельно подтвердите
                      согласие на обработку персональных данных и согласие с
                      условиями консультации.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CreditCard className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                    <span className="text-[15px] leading-[1.65] text-muted-foreground">
                      <span className="font-medium text-foreground">Шаг 3.</span>{" "}
                      После отправки формы откроется страница оплаты. Оплата
                      производится только после согласования суммы с Verdico.
                    </span>
                  </li>
                </ol>
              </section>

              <section className="bg-primary/5 border border-primary/20 rounded-xl p-5 md:p-7 text-center">
                <h2 className="font-serif text-xl md:text-2xl mb-4">
                  Подтверждение согласия и условий
                </h2>
                <p className="text-[15px] leading-[1.65] text-muted-foreground mb-6">
                  Для фиксации согласия заполните форму. Ответ формы направляется
                  на {EMAIL} и используется как подтверждение направления запроса,
                  согласия на обработку персональных данных и согласия с
                  условиями консультации.
                </p>

                {formConfigured ? (
                  <a
                    href={YANDEX_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Заполнить форму согласия"
                    className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full btn-navy-glass px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <ClipboardCheck className="w-5 h-5" />
                    Заполнить форму согласия
                  </a>
                ) : (
                  <>
                    <span
                      aria-disabled="true"
                      className="inline-flex min-h-12 w-full sm:w-auto cursor-not-allowed items-center justify-center gap-2 rounded-full bg-muted px-6 py-3 text-sm font-medium text-muted-foreground opacity-70"
                    >
                      <ClipboardCheck className="w-5 h-5" />
                      Заполнить форму согласия
                    </span>
                    <p className="mt-4 text-[14px] leading-[1.6] text-amber-700 dark:text-amber-400">
                      До настройки формы эта кнопка не должна использоваться для
                      клиентов.
                    </p>
                  </>
                )}
              </section>
            </div>
          </div>
        </div>
      </section>
    </MultilingualLayout>
  );
};

export default ConsultationPaymentRu;
