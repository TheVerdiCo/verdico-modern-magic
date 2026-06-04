import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import SEOHead from "@/components/seo/SEOHead";
import { EMAIL } from "@/lib/seo";

const ConsultationPaymentRuPayment = () => {
  return (
    <MultilingualLayout>
      <SEOHead
        title="Оплата консультации — Верди и Ко."
        description="Страница оплаты консультации после отправки формы согласия и согласования суммы с Verdico."
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
                согласования консультации с Verdico.
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
              <section className="bg-card border border-border verdico-card p-5 md:p-7 text-center">
                <p className="text-[15px] leading-[1.65] text-muted-foreground mb-2">
                  Оплачивайте только сумму, которую Verdico заранее подтвердил в
                  переписке.
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
                    предварительного согласования консультации с Verdico.
                  </p>
                  <p>
                    Вопросы по оплате и её подтверждению:{" "}
                    <a href={`mailto:${EMAIL}`} className="text-accent hover:underline">
                      {EMAIL}
                    </a>
                    .
                  </p>
                  <p className="text-[14px] leading-[1.6]">
                    Фискальный чек/подтверждение оплаты предоставляется в порядке,
                    применимом к выбранному способу оплаты.
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
