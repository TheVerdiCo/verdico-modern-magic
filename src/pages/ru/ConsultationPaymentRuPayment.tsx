import { useState } from "react";
import { ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import SEOHead from "@/components/seo/SEOHead";
import { EMAIL } from "@/lib/seo";

// Public production acceptance endpoint (API Gateway). The URL is public and
// safe to ship; override via the Vite public env var if needed. No secrets here.
const ACCEPTANCE_API_URL =
  import.meta.env.VITE_VERDICO_ACCEPTANCE_ENDPOINT ||
  "https://d5d9nsqvjkh3dhmpsdsg.628pfjdx.apigw.yandexcloud.net/acceptance";
const apiConfigured = ACCEPTANCE_API_URL.length > 0;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_RUB = 1000;
const MAX_RUB = 300000;
const MAX_COMMENT_LENGTH = 500;
const PD_CONSENT_TEXT =
  "Согласен на обработку персональных данных для подготовки и направления индивидуальной ссылки на оплату, связи со мной и направления кассового чека. Подтверждаю, что ознакомлен с Политикой конфиденциальности.";
const PD_CONSENT_VERSION = "payment_request_pd_v1";
const PRIVACY_POLICY_URL = "https://www.verdico.ru/ru/privacy-policy";
const PAYMENT_METHODS = ["МИР", "Visa", "Mastercard", "СБП", "SberPay", "T-Pay"];

const inputClass =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-[15px] text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

type PaymentRequestForm = {
  fullName: string;
  email: string;
  amount: string;
  comment: string;
  preAgreed: boolean;
  personalDataConsentAccepted: boolean;
};

const ConsultationPaymentRuPayment = () => {
  const [form, setForm] = useState<PaymentRequestForm>({
    fullName: "",
    email: "",
    amount: "",
    comment: "",
    preAgreed: false,
    personalDataConsentAccepted: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [sent, setSent] = useState(false);

  const update = (field: keyof PaymentRequestForm, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const normalizeAmount = (value: string) =>
    value.trim().replace(/\s/g, "").replace(",", ".");

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    const normalizedAmount = normalizeAmount(form.amount);

    if (!form.fullName.trim()) nextErrors.fullName = "Укажите ФИО плательщика.";
    if (!EMAIL_RE.test(form.email.trim()))
      nextErrors.email = "Укажите корректный e-mail для кассового чека.";
    if (!/^\d+(\.\d{1,2})?$/.test(normalizedAmount)) {
      nextErrors.amount = "Укажите сумму числом, не более двух знаков после запятой.";
    } else {
      const amountNumber = Number(normalizedAmount);
      if (amountNumber < MIN_RUB || amountNumber > MAX_RUB) {
        nextErrors.amount = "Сумма должна быть от 1 000 до 300 000 ₽.";
      }
    }
    if (form.comment.length > MAX_COMMENT_LENGTH)
      nextErrors.comment = "Комментарий не должен превышать 500 символов.";
    if (!form.preAgreed)
      nextErrors.preAgreed =
        "Подтвердите, что сумма и услуга предварительно согласованы.";
    if (!form.personalDataConsentAccepted)
      nextErrors.personalDataConsentAccepted =
        "Подтвердите согласие на обработку персональных данных.";

    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("");
    setSent(false);

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (!apiConfigured) {
      setStatus(
        "Форма заявки ещё не подключена. Напишите на admin@verdico.ru для получения индивидуальной ссылки.",
      );
      return;
    }

    const amountRub = Number(normalizeAmount(form.amount));

    setSubmitting(true);
    try {
      const res = await fetch(ACCEPTANCE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestType: "manual-payment-request",
          fullName: form.fullName.trim(),
          email: form.email.trim(),
          contact: "",
          agreedAmount: `${amountRub.toFixed(2)} ₽`,
          amountRub,
          amountAgreedInPriorCorrespondence: form.preAgreed,
          matterSummary: form.comment.trim(),
          paymentRequestComment: form.comment.trim(),
          paymentLinkRequested: true,
          personalDataConsentAccepted: form.personalDataConsentAccepted,
          personalDataConsentText: PD_CONSENT_TEXT,
          personalDataConsentVersion: PD_CONSENT_VERSION,
          privacyPolicyUrl: PRIVACY_POLICY_URL,
          pageUrl: window.location.href,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.ok) {
        setSent(true);
        setStatus(
          "Заявка направлена. Проверьте e-mail: мы отправим письмо для подтверждения суммы, услуги и адреса для кассового чека.",
        );
        setForm({
          fullName: "",
          email: "",
          amount: "",
          comment: "",
          preAgreed: false,
          personalDataConsentAccepted: false,
        });
        return;
      }
      setStatus(`Не удалось отправить заявку. Попробуйте позже или напишите на ${EMAIL}.`);
    } catch {
      setStatus(`Не удалось отправить заявку. Попробуйте позже или напишите на ${EMAIL}.`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <MultilingualLayout>
      <SEOHead
        title="Оплата юридических услуг — Верди и Ко."
        description="Заявка на индивидуальную ссылку или QR-код для оплаты юридических услуг после предварительного согласования с Верди и Ко."
        path="/ru/konsultatsiya-oplata/oplata"
        noIndex
      />

      <section className="py-14 md:py-20 px-4">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Link
              to="/ru/konsultatsiya-oplata"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              К условиям консультации
            </Link>

            <div className="mb-8 md:mb-10">
              <span className="eyebrow">Оплата</span>
              <h1 className="font-serif text-3xl md:text-5xl mt-4 mb-5">
                Оплата юридических услуг
              </h1>
              <p className="text-[16px] leading-[1.65] md:text-lg md:leading-relaxed text-muted-foreground">
                Оплата производится только после предварительного согласования
                услуги, суммы и назначения платежа с Верди и Ко.
              </p>
              <p className="mt-3 text-[15px] leading-[1.65] text-muted-foreground">
                Для получения индивидуальной ссылки на оплату заполните форму.
                После этого мы направим письмо на указанный e-mail для
                подтверждения. Платёжная ссылка или QR-код направляются только
                после подтверждения e-mail.
              </p>
              <p className="mt-3 text-[15px] leading-[1.65] text-muted-foreground">
                Кассовый чек формируется через ЮKassa и направляется на
                подтверждённый e-mail.
              </p>
              <p className="mt-3 text-[15px] leading-[1.65] text-muted-foreground">
                Самостоятельные переводы по публичному QR-коду не используются.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <section className="border-2 border-accent/40 bg-accent/5 rounded-xl p-5 md:p-7">
                <h2 className="font-serif text-xl md:text-2xl mb-4">
                  Заявка на индивидуальную ссылку
                </h2>

                {!apiConfigured && (
                  <p className="mb-6 rounded-lg border border-amber-400/50 bg-amber-50 px-4 py-3 text-[14px] leading-[1.6] text-amber-800 dark:bg-amber-950/30 dark:text-amber-300">
                    Форма заявки ещё не подключена. Напишите на {EMAIL} для
                    получения индивидуальной ссылки.
                  </p>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-5 text-left">
                  <div>
                    <label htmlFor="pay-full-name" className="mb-1.5 block text-[14px] font-medium text-foreground">
                      ФИО плательщика <span className="text-accent">*</span>
                    </label>
                    <input
                      id="pay-full-name"
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
                    <label htmlFor="pay-email" className="mb-1.5 block text-[14px] font-medium text-foreground">
                      E-mail для кассового чека <span className="text-accent">*</span>
                    </label>
                    <input
                      id="pay-email"
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
                    <label htmlFor="pay-amount" className="mb-1.5 block text-[14px] font-medium text-foreground">
                      Согласованная сумма, ₽ <span className="text-accent">*</span>
                    </label>
                    <input
                      id="pay-amount"
                      type="text"
                      inputMode="decimal"
                      placeholder="например, 5000"
                      className={inputClass}
                      value={form.amount}
                      onChange={(e) => update("amount", e.target.value)}
                    />
                    <p className="mt-1 text-[13px] text-muted-foreground">
                      От 1 000 до 300 000 ₽, как согласовано с Верди и Ко.
                    </p>
                    {errors.amount && (
                      <p className="mt-1 text-[13px] text-destructive">{errors.amount}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="pay-comment" className="mb-1.5 block text-[14px] font-medium text-foreground">
                      Назначение платежа / комментарий{" "}
                      <span className="text-muted-foreground">(необязательно)</span>
                    </label>
                    <textarea
                      id="pay-comment"
                      rows={4}
                      maxLength={MAX_COMMENT_LENGTH}
                      className={inputClass}
                      value={form.comment}
                      onChange={(e) => update("comment", e.target.value)}
                    />
                    {errors.comment && (
                      <p className="mt-1 text-[13px] text-destructive">{errors.comment}</p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-start gap-2.5 text-[14px] leading-[1.55] text-muted-foreground">
                      <input
                        type="checkbox"
                        className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
                        checked={form.preAgreed}
                        onChange={(e) => update("preAgreed", e.target.checked)}
                      />
                      <span>
                        Подтверждаю, что сумма и услуга предварительно
                        согласованы с Верди и Ко.{" "}
                        <span className="text-accent">*</span>
                      </span>
                    </label>
                    {errors.preAgreed && (
                      <p className="mt-1 text-[13px] text-destructive">{errors.preAgreed}</p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-start gap-2.5 text-[14px] leading-[1.55] text-muted-foreground">
                      <input
                        type="checkbox"
                        className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
                        checked={form.personalDataConsentAccepted}
                        onChange={(e) => update("personalDataConsentAccepted", e.target.checked)}
                      />
                      <span>
                        Согласен на обработку персональных данных для подготовки
                        и направления индивидуальной ссылки на оплату, связи со
                        мной и направления кассового чека. Подтверждаю, что
                        ознакомлен с{" "}
                        <Link to="/ru/privacy-policy" className="text-accent hover:underline">
                          Политикой конфиденциальности
                        </Link>
                        . <span className="text-accent">*</span>
                      </span>
                    </label>
                    {errors.personalDataConsentAccepted && (
                      <p className="mt-1 text-[13px] text-destructive">
                        {errors.personalDataConsentAccepted}
                      </p>
                    )}
                  </div>

                  <div className="rounded-lg border border-border bg-card/80 p-4">
                    <p className="text-[14px] leading-[1.6] text-muted-foreground">
                      После подтверждения заявки индивидуальный счёт ЮKassa
                      можно оплатить банковской картой, через СБП/QR, SberPay,
                      T-Pay и другие способы, доступные в ЮKassa.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2" aria-label="Доступные способы оплаты в ЮKassa">
                      {PAYMENT_METHODS.map((method) => (
                        <span
                          key={method}
                          className="rounded-full border border-border bg-background px-3 py-1 text-[12px] font-medium text-foreground/80"
                        >
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full btn-navy-glass px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Send className="w-5 h-5" />
                    {submitting ? "Отправка…" : "Отправить заявку на оплату"}
                  </button>

                  <p
                    aria-live="polite"
                    className={`min-h-5 text-[14px] leading-[1.6] ${
                      sent ? "text-muted-foreground" : "text-destructive"
                    }`}
                  >
                    {status}
                  </p>
                </form>
              </section>

              <section className="bg-card border border-border verdico-card p-5 md:p-7">
                <div className="space-y-3 text-[15px] leading-[1.65] text-muted-foreground">
                  <p>
                    Заявка не создаёт платёж и не является оплатой. После
                    получения заявки Верди и Ко. вручную направит письмо на
                    указанный e-mail для подтверждения суммы, услуги и адреса
                    для кассового чека.
                  </p>
                  <p>
                    Вопросы по оплате и её подтверждению:{" "}
                    <a href={`mailto:${EMAIL}`} className="text-accent hover:underline">
                      {EMAIL}
                    </a>
                    .
                  </p>
                  <p className="text-[14px] leading-[1.6]">
                    Индивидуальная платёжная ссылка или QR-код создаются вручную
                    в личном кабинете ЮKassa только после подтверждения e-mail.
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

export default ConsultationPaymentRuPayment;
