import { useState } from "react";
import { ArrowLeft, FileText, ShieldCheck, CreditCard, ClipboardCheck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import SEOHead from "@/components/seo/SEOHead";
import { EMAIL } from "@/lib/seo";

// Бэкенд-эндпоинт принимает форму подтверждения, формирует серверную
// запись и отправляет её на admin@verdico.ru, после чего фронтенд
// открывает страницу оплаты. До подключения эндпоинта оплата недоступна.
// Public production acceptance endpoint (API Gateway). The URL is public and
// safe to ship; override via the Vite public env var if needed. No secrets here.
const ACCEPTANCE_API_URL =
  import.meta.env.VITE_VERDICO_ACCEPTANCE_ENDPOINT ||
  "https://d5d9nsqvjkh3dhmpsdsg.628pfjdx.apigw.yandexcloud.net/acceptance";
const apiConfigured = ACCEPTANCE_API_URL.length > 0;

// Версии принимаемых документов фиксируются в записи о подтверждении.
const TERMS_VERSION = "verdico-consultation-terms-2026-06-05";
const PD_CONSENT_VERSION = "verdico-pd-consent-2026-06-05";

const inputClass =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-[15px] text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const ConsultationPaymentRu = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    contact: "",
    agreedAmount: "",
    amountAgreedInPriorCorrespondence: false,
    matterSummary: "",
    personalDataConsentAccepted: false,
    termsAccepted: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const update = (field: keyof typeof form, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.fullName.trim()) e.fullName = "Укажите ФИО.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = "Укажите корректный адрес электронной почты.";
    if (!form.agreedAmount.trim() && !form.amountAgreedInPriorCorrespondence)
      e.amount =
        "Укажите согласованную сумму или отметьте, что сумма согласована с Верди и Ко. в переписке.";
    if (!form.personalDataConsentAccepted)
      e.personalDataConsentAccepted =
        "Требуется согласие на обработку персональных данных.";
    if (!form.termsAccepted)
      e.termsAccepted = "Требуется согласие с условиями консультации.";
    return e;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      setStatus("");
      return;
    }

    if (!apiConfigured) {
      setStatus(
        "Форма подтверждения ещё не подключена. Не используйте страницу для оплаты до настройки подтверждения.",
      );
      return;
    }

    setSubmitting(true);
    setStatus("Отправка…");
    try {
      const res = await fetch(ACCEPTANCE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          email: form.email.trim(),
          contact: form.contact.trim(),
          agreedAmount: form.agreedAmount.trim(),
          amountAgreedInPriorCorrespondence:
            form.amountAgreedInPriorCorrespondence,
          matterSummary: form.matterSummary.trim(),
          personalDataConsentAccepted: form.personalDataConsentAccepted,
          termsAccepted: form.termsAccepted,
          termsVersion: TERMS_VERSION,
          personalDataConsentVersion: PD_CONSENT_VERSION,
          pageUrl: window.location.href,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.ok) {
        const next =
          typeof data.next === "string"
            ? data.next
            : "/ru/konsultatsiya-oplata/oplata";
        navigate(`${next}?accepted=1`);
        return;
      }
      setStatus(
        `Не удалось отправить форму. Попробуйте позже или напишите на ${EMAIL}.`,
      );
    } catch {
      setStatus(
        `Не удалось отправить форму. Попробуйте позже или напишите на ${EMAIL}.`,
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <MultilingualLayout>
      <SEOHead
        title="Консультация и порядок оплаты — Верди и Ко."
        description="Направление запроса на индивидуальную консультацию Верди и Ко., подтверждение согласия через форму и порядок оплаты."
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

            <div className="mb-8 md:mb-10">
              <span className="eyebrow">Консультация</span>
              <h1 className="font-serif text-3xl md:text-5xl mt-4 mb-5">
                Консультация и порядок оплаты
              </h1>
              <p className="text-[16px] leading-[1.65] md:text-lg md:leading-relaxed text-muted-foreground">
                Чтобы направить запрос на индивидуальную юридическую или
                бизнес-консультацию Верди и Ко., заполните форму ниже. Условия
                консультации и порядок оплаты приведены под формой.
              </p>
            </div>

            {/* Форма — в начале страницы */}
            <section className="border-2 border-accent/40 bg-accent/5 rounded-xl p-5 md:p-7">
              <h2 className="font-serif text-xl md:text-2xl mb-4">
                Форма подтверждения
              </h2>
              <p className="text-[15px] leading-[1.65] text-muted-foreground mb-2">
                Согласие на обработку персональных данных и согласие с условиями
                консультации оформляются отдельными отметками ниже. Это
                самостоятельные подтверждения, не объединённые с другими
                сведениями.
              </p>
              <p className="text-[15px] leading-[1.65] text-muted-foreground mb-6">
                Запись о подтверждении формируется и направляется на {EMAIL}.
                Содержание обращения на самом сайте не хранится.
              </p>

              {!apiConfigured && (
                <p className="mb-6 rounded-lg border border-amber-400/50 bg-amber-50 px-4 py-3 text-[14px] leading-[1.6] text-amber-800 dark:bg-amber-950/30 dark:text-amber-300">
                  Форма подтверждения ещё не подключена. Не используйте
                  страницу для оплаты до настройки подтверждения.
                </p>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5 text-left">
                <div>
                  <label htmlFor="fullName" className="mb-1.5 block text-[14px] font-medium text-foreground">
                    ФИО <span className="text-accent">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    autoComplete="name"
                    className={inputClass}
                    value={form.fullName}
                    onChange={(e) => update("fullName", e.target.value)}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-[13px] text-destructive">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-[14px] font-medium text-foreground">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={inputClass}
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                  {errors.email && (
                    <p className="mt-1 text-[13px] text-destructive">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact" className="mb-1.5 block text-[14px] font-medium text-foreground">
                    Телефон или Telegram <span className="text-muted-foreground">(необязательно)</span>
                  </label>
                  <input
                    id="contact"
                    type="text"
                    className={inputClass}
                    value={form.contact}
                    onChange={(e) => update("contact", e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="agreedAmount" className="mb-1.5 block text-[14px] font-medium text-foreground">
                    Согласованная сумма консультации
                  </label>
                  <input
                    id="agreedAmount"
                    type="text"
                    inputMode="numeric"
                    placeholder="например, 15 000 ₽"
                    className={inputClass}
                    value={form.agreedAmount}
                    onChange={(e) => update("agreedAmount", e.target.value)}
                  />
                  <label className="mt-2 flex items-start gap-2.5 text-[14px] leading-[1.55] text-muted-foreground">
                    <input
                      type="checkbox"
                      className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
                      checked={form.amountAgreedInPriorCorrespondence}
                      onChange={(e) => update("amountAgreedInPriorCorrespondence", e.target.checked)}
                    />
                    <span>Сумма консультации согласована с Верди и Ко. в переписке.</span>
                  </label>
                  {errors.amount && (
                    <p className="mt-1 text-[13px] text-destructive">{errors.amount}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="matterSummary" className="mb-1.5 block text-[14px] font-medium text-foreground">
                    Кратко о вопросе <span className="text-muted-foreground">(необязательно)</span>
                  </label>
                  <textarea
                    id="matterSummary"
                    rows={4}
                    className={inputClass}
                    value={form.matterSummary}
                    onChange={(e) => update("matterSummary", e.target.value)}
                  />
                </div>

                <div className="space-y-3 rounded-lg border border-border bg-card p-4">
                  <label className="flex items-start gap-2.5 text-[14px] leading-[1.55] text-muted-foreground">
                    <input
                      type="checkbox"
                      className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
                      checked={form.personalDataConsentAccepted}
                      onChange={(e) => update("personalDataConsentAccepted", e.target.checked)}
                    />
                    <span>
                      Я даю согласие на обработку персональных данных в
                      соответствии с{" "}
                      <Link to="/policy" className="text-accent hover:underline">
                        политикой обработки персональных данных
                      </Link>
                      . <span className="text-accent">*</span>
                    </span>
                  </label>
                  {errors.personalDataConsentAccepted && (
                    <p className="text-[13px] text-destructive">{errors.personalDataConsentAccepted}</p>
                  )}

                  <label className="flex items-start gap-2.5 text-[14px] leading-[1.55] text-muted-foreground">
                    <input
                      type="checkbox"
                      className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
                      checked={form.termsAccepted}
                      onChange={(e) => update("termsAccepted", e.target.checked)}
                    />
                    <span>
                      Я ознакомился(лась) и согласен(на) с условиями
                      консультации и порядком оплаты, изложенными на этой
                      странице. <span className="text-accent">*</span>
                    </span>
                  </label>
                  {errors.termsAccepted && (
                    <p className="text-[13px] text-destructive">{errors.termsAccepted}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full btn-navy-glass px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <ClipboardCheck className="w-5 h-5" />
                  {submitting ? "Отправка…" : "Отправить форму подтверждения"}
                </button>

                <p aria-live="polite" className="min-h-5 text-[14px] leading-[1.6] text-muted-foreground">
                  {status}
                </p>
              </form>
            </section>

            {/* Условия — под формой */}
            <div className="mt-10 md:mt-12 space-y-6 md:space-y-8">
              <section className="bg-card border border-border verdico-card p-5 md:p-7">
                <h2 className="font-serif text-xl md:text-2xl mb-4">
                  Как это работает
                </h2>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <FileText className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                    <span className="text-[15px] leading-[1.65] text-muted-foreground">
                      <span className="font-medium text-foreground">Шаг 1.</span>{" "}
                      Заполните форму подтверждения выше — отдельно подтвердите
                      согласие на обработку персональных данных и согласие с
                      условиями консультации.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ShieldCheck className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                    <span className="text-[15px] leading-[1.65] text-muted-foreground">
                      <span className="font-medium text-foreground">Шаг 2.</span>{" "}
                      После отправки формы откроется страница оплаты с
                      реквизитами.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CreditCard className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                    <span className="text-[15px] leading-[1.65] text-muted-foreground">
                      <span className="font-medium text-foreground">Шаг 3.</span>{" "}
                      Оплачивайте только после того, как Верди и Ко. подтвердит
                      объём и стоимость консультации, и только согласованную
                      сумму.
                    </span>
                  </li>
                </ol>
              </section>

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
                    подтверждения, Верди и Ко. согласовывает объем и стоимость
                    консультации, после этого производится оплата.
                  </p>
                  <p>
                    Страница оплаты с реквизитами открывается только после
                    успешной отправки формы подтверждения. Реквизиты оплаты не
                    изменяют согласованный объем консультации.
                  </p>
                  <p>
                    Не оплачивайте консультацию до подтверждения со стороны
                    Верди и Ко. Оплачивается только сумма, заранее согласованная
                    с Верди и Ко. в переписке.
                  </p>
                  <p>
                    После подтверждения оплаты будет направлена информация по
                    консультации; кассовый чек оформляется в порядке,
                    предусмотренном законом.
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
                    При направлении формы подтверждения обрабатываются минимально
                    необходимые данные: ФИО, адрес электронной почты, контакт
                    (телефон или Telegram, если указан), сведения о согласованной
                    сумме, краткое описание вопроса, а также данные, связанные с
                    подтверждением оплаты, если они применимы.
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
            </div>
          </div>
        </div>
      </section>
    </MultilingualLayout>
  );
};

export default ConsultationPaymentRu;
