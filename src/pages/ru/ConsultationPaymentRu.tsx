import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import SEOHead from "@/components/seo/SEOHead";
import { EMAIL } from "@/lib/seo";

const mailSubject = "Запрос на консультацию через Verdico.ru";
const mailBody =
  "Я ознакомился(лась) с условиями консультации и даю согласие на обработку персональных данных, добровольно направляемых мной для рассмотрения запроса.";

const mailtoHref = `mailto:admin@verdico.ru?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

const ConsultationPaymentRu = () => {
  return (
    <MultilingualLayout>
      <SEOHead
        title="Консультация и порядок оплаты — Верди и Ко."
        description="Общие условия направления запроса на индивидуальную консультацию, порядок оплаты и согласие на обработку персональных данных."
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
                    Последовательность работы: пользователь направляет запрос,
                    Verdico подтверждает объем и стоимость консультации, после
                    этого производится оплата по QR-коду.
                  </p>
                  <p>
                    Блок оплаты по QR-коду является информацией для совершения
                    платежа и не изменяет согласованный объем консультации.
                  </p>
                  <p>
                    QR-код используется только после предварительного согласования консультации, стоимости и объёма работы. Не оплачивайте консультацию до подтверждения со стороны Verdico.
                  </p>
                  <p>
                    Если после оплаты консультация не может быть предоставлена,
                    вопрос возврата или иного урегулирования определяется
                    индивидуально с учетом применимого законодательства и
                    обстоятельств платежа.
                  </p>
                  <div className="mt-5 rounded-lg border border-border bg-secondary/40 p-5 text-center">
                    <p className="text-sm font-medium text-foreground mb-4">
                      QR-код используется для оплаты после согласования консультации и условий.
                    </p>
                    <img
                      src="/payment/qr-sberbank-account.png"
                      alt="QR-код для оплаты консультации"
                      className="mx-auto w-full max-w-[280px] rounded-lg border border-border bg-white p-3"
                    />
                  </div>
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
                    Для обращений используется адрес{" "}
                    <a href={`mailto:${EMAIL}`} className="text-accent hover:underline">
                      {EMAIL}
                    </a>
                    . По сведениям владельца, обращения поступают на почтовый
                    ящик {EMAIL}, используемый для получения обращений.
                  </p>
                </div>
              </section>

              <section className="border-2 border-accent/40 bg-accent/5 rounded-xl p-5 md:p-7">
                <h2 className="font-serif text-xl md:text-2xl mb-4">
                  Согласие на обработку персональных данных
                </h2>
                <div className="space-y-3 text-[15px] leading-[1.65] text-muted-foreground">
                  <p>
                    Направляя электронное письмо с запросом на консультацию с
                    этой страницы, пользователь подтверждает, что ознакомился с
                    политикой обработки персональных данных и дает согласие на
                    обработку добровольно предоставленных персональных данных для
                    целей, указанных на настоящей странице и в политике.
                  </p>
                  <p>
                    Подтверждение согласия и содержание обращения фиксируются в
                    направленном пользователем электронном письме. На сайте не
                    используется автоматическая форма отправки данных.
                  </p>
                </div>
              </section>

              <section className="bg-primary/5 border border-primary/20 rounded-xl p-5 md:p-7 text-center">
                <h2 className="font-serif text-xl md:text-2xl mb-4">
                  Направление запроса
                </h2>
                <p className="text-[15px] leading-[1.65] text-muted-foreground mb-6">
                  Нажатие на кнопку открывает черновик электронного письма.
                  Запрос направляется пользователем самостоятельно по электронной
                  почте. Направленное письмо является подтверждением запроса и
                  согласия; сайт не отправляет автоматически и не сохраняет
                  содержание обращения.
                </p>
                <a
                  href={mailtoHref}
                  aria-label="Направить запрос на консультацию по электронной почте"
                  title="Открыть письмо на admin@verdico.ru"
                  className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full btn-navy-glass px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Mail className="w-5 h-5" />
                  Направить запрос на консультацию
                </a>
                <div className="mt-6 rounded-lg border border-border bg-card p-4 text-left">
                  <h3 className="font-serif text-lg mb-3 text-foreground">
                    Если кнопка не открывает почту
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-muted-foreground">
                    Некоторые браузеры или устройства не открывают почтовую
                    программу автоматически. В этом случае направьте письмо
                    вручную на{" "}
                    <a href={mailtoHref} className="text-accent hover:underline">
                      admin@verdico.ru
                    </a>
                    .
                  </p>
                  <div className="mt-4 rounded-md bg-secondary/50 p-4 text-[14px] leading-[1.65] text-muted-foreground">
                    <p className="font-medium text-foreground">
                      Тема: Запрос на консультацию через Verdico.ru
                    </p>
                    <p className="mt-3 font-medium text-foreground">
                      Текст письма:
                    </p>
                    <p className="mt-1">
                      Я ознакомился(лась) с условиями консультации и даю
                      согласие на обработку персональных данных, добровольно
                      направляемых мной для рассмотрения запроса.
                    </p>
                    <p className="mt-3">
                      Кратко опишите вопрос и приложите документы, если считаете
                      это необходимым.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </MultilingualLayout>
  );
};

export default ConsultationPaymentRu;
