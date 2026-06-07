import { useState } from "react";
import { ArrowLeft, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import SEOHead from "@/components/seo/SEOHead";
import { EMAIL } from "@/lib/seo";

// Public payments endpoint (API Gateway). The URL is public and safe to ship;
// override via the Vite public env var if needed. No secret belongs here — the
// YooKassa key lives only in the backend (Lockbox).
const PAYMENTS_ENDPOINT =
  import.meta.env.VITE_VERDICO_PAYMENTS_ENDPOINT ||
  "https://d5d9nsqvjkh3dhmpsdsg.628pfjdx.apigw.yandexcloud.net/payments/create";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_RUB = 1000;
const MAX_RUB = 300000;

const inputClass =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-[15px] text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const ConsultationPaymentRuPayment = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handlePay = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    const em = email.trim();
    if (!EMAIL_RE.test(em)) {
      setError("Укажите корректный e-mail для кассового чека.");
      return;
    }
    const a = amount.trim().replace(",", ".");
    if (!/^\d+(\.\d{1,2})?$/.test(a)) {
      setError("Укажите сумму числом, не более двух знаков после запятой.");
      return;
    }
    const n = Number(a);
    if (n < MIN_RUB || n > MAX_RUB) {
      setError("Сумма должна быть от 1 000 до 300 000 ₽.");
      return;
    }
    if (purpose.length > 120) {
      setError("Комментарий не должен превышать 120 символов.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(PAYMENTS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: "custom-legal-services",
          amountRub: n,
          customerEmail: em,
          purpose: purpose.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && typeof data?.confirmation_url === "string") {
        window.location.href = data.confirmation_url;
        return;
      }
      setError(`Не удалось создать платёж. Попробуйте позже или напишите на ${EMAIL}.`);
    } catch {
      setError(`Не удалось создать платёж. Попробуйте позже или напишите на ${EMAIL}.`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <MultilingualLayout>
      <SEOHead
        title="Оплата консультации — Верди и Ко."
        description="Страница оплаты консультации после отправки формы согласия и согласования суммы с Верди и Ко."
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
                Оплата после подтверждения
              </h1>
              <p className="text-[16px] leading-[1.65] md:text-lg md:leading-relaxed text-muted-foreground">
                Эта страница используется после отправки формы подтверждения и
                согласования консультации с Верди и Ко.
              </p>
              <p className="mt-3 text-[15px] leading-[1.65] text-muted-foreground">
                Если вы попали на эту страницу без отправки формы подтверждения,
                сначала заполните форму на{" "}
                <Link to="/ru/konsultatsiya-oplata" className="text-accent hover:underline">
                  странице условий
                </Link>
                .
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              {/* Оплата картой онлайн — согласованная сумма (ЮKassa) */}
              <section className="border-2 border-accent/40 bg-accent/5 rounded-xl p-5 md:p-7">
                <h2 className="font-serif text-xl md:text-2xl mb-4">
                  Оплата картой онлайн
                </h2>
                <p className="text-[15px] leading-[1.65] text-muted-foreground mb-2">
                  Оплата производится только после предварительного согласования
                  услуги и суммы с Верди и Ко.
                </p>
                <p className="text-[14px] leading-[1.6] text-muted-foreground mb-6">
                  Для оплаты укажите e-mail для чека и согласованную сумму.
                  Оплата проходит на защищённой странице ЮKassa, кассовый чек по
                  54-ФЗ формирует ЮKassa.
                </p>

                <form onSubmit={handlePay} noValidate className="space-y-5 text-left">
                  <div>
                    <label htmlFor="pay-email" className="mb-1.5 block text-[14px] font-medium text-foreground">
                      E-mail для чека <span className="text-accent">*</span>
                    </label>
                    <input
                      id="pay-email"
                      type="email"
                      autoComplete="email"
                      className={inputClass}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
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
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                    <p className="mt-1 text-[13px] text-muted-foreground">
                      От 1 000 до 300 000 ₽, как согласовано с Верди и Ко.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="pay-purpose" className="mb-1.5 block text-[14px] font-medium text-foreground">
                      Комментарий / назначение{" "}
                      <span className="text-muted-foreground">(необязательно)</span>
                    </label>
                    <input
                      id="pay-purpose"
                      type="text"
                      maxLength={120}
                      className={inputClass}
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full btn-navy-glass px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <CreditCard className="w-5 h-5" />
                    {submitting ? "Переходим к оплате…" : "Оплатить через ЮKassa"}
                  </button>

                  <p aria-live="polite" className="min-h-5 text-[14px] leading-[1.6] text-destructive">
                    {error}
                  </p>
                </form>
              </section>

              {/* Альтернатива — перевод по QR-коду Сбербанка */}
              <section className="bg-card border border-border verdico-card p-5 md:p-7 text-center">
                <h2 className="font-serif text-lg md:text-xl mb-2">
                  Альтернатива — перевод по QR-коду
                </h2>
                <p className="text-[15px] leading-[1.65] text-muted-foreground mb-2">
                  Оплачивайте только сумму, которую Верди и Ко. заранее
                  подтвердил в переписке.
                </p>
                <div className="mt-5 rounded-lg border border-border bg-secondary/40 p-5">
                  <img
                    src="/payment/qr-sberbank-account.png"
                    alt="QR-код Сбербанка для оплаты консультации"
                    className="mx-auto w-full max-w-[280px] rounded-lg border border-border bg-white p-3"
                  />
                </div>
                <p className="mt-4 text-[14px] leading-[1.6] text-muted-foreground">
                  Если QR-код предполагает ручной ввод суммы, укажите точную
                  согласованную сумму.
                </p>
              </section>

              <section className="bg-card border border-border verdico-card p-5 md:p-7">
                <div className="space-y-3 text-[15px] leading-[1.65] text-muted-foreground">
                  <p>
                    Оплата производится после отправки формы согласия и
                    предварительного согласования консультации с Верди и Ко.
                  </p>
                  <p>
                    Вопросы по оплате и её подтверждению:{" "}
                    <a href={`mailto:${EMAIL}`} className="text-accent hover:underline">
                      {EMAIL}
                    </a>
                    .
                  </p>
                  <p className="text-[14px] leading-[1.6]">
                    Кассовый чек по 54-ФЗ при оплате картой формирует ЮKassa.
                    Банковская квитанция или письмо с сайта не являются кассовым
                    чеком.
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
