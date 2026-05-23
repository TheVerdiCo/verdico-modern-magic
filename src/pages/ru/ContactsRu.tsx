import { Button } from "@/components/ui/button";
import { Mail, Send, MessageCircle, Shield } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import { EMAIL } from "@/lib/seo";

const ContactsRu = () => {
  return (
    <MultilingualLayout>
      <SEOHead
        title="Контакты — свяжитесь с юристами Верди и Ко."
        description="Свяжитесь с командой Верди и Ко. для обсуждения вашей юридической задачи. Email, Telegram. Первичная консультация. NDA по запросу."
        path="/ru/kontakty"
      />

      <section className="py-16 md:py-24 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="eyebrow justify-center">Контакты</span>
              <h1 className="h1-hero mt-5 mb-6">
                Свяжитесь с нами
              </h1>
              <p className="text-lg text-muted-foreground">
                Готовы обсудить вашу юридическую задачу? Напишите нам — мы ответим 
                в течение рабочего дня.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-start gap-4 p-7 bg-card border border-border verdico-card hover:shadow-hover hover:border-verdico-gold/40 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-brand flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium mb-1 group-hover:text-gradient-brand">Email</h3>
                  <p className="text-sm text-muted-foreground">{EMAIL}</p>
                </div>
              </a>

              <a
                href="https://t.me/DjamalG"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-7 bg-card border border-border verdico-card hover:shadow-hover hover:border-verdico-gold/40 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-brand flex items-center justify-center flex-shrink-0">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium mb-1 group-hover:text-gradient-brand">Telegram</h3>
                  <p className="text-sm text-muted-foreground">@DjamalG</p>
                </div>
              </a>
            </div>

            {/* Process */}
            <div className="bg-secondary/50 rounded-2xl p-8 mb-12">
              <h2 className="font-serif text-2xl mb-6 text-center">Как проходит первый контакт</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <span className="numeral-navy flex-shrink-0" aria-hidden="true">01</span>
                  <div>
                    <h3 className="font-medium mb-1">Опишите задачу</h3>
                    <p className="text-sm text-muted-foreground">
                      Первичная оценка ситуации проводится по документам: предмет вопроса,
                      правовая позиция, риски и возможный порядок действий.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <span className="numeral-navy flex-shrink-0" aria-hidden="true">02</span>
                  <div>
                    <h3 className="font-medium mb-1">Первичная консультация</h3>
                    <p className="text-sm text-muted-foreground">
                      Мы изучим запрос и свяжемся для уточнения деталей. Обычно — звонок 15-30 минут.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <span className="numeral-navy flex-shrink-0" aria-hidden="true">03</span>
                  <div>
                    <h3 className="font-medium mb-1">Коммерческое предложение</h3>
                    <p className="text-sm text-muted-foreground">
                      Получите структурированное предложение с объёмом работ, сроками и стоимостью.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* NDA Notice */}
            <div className="flex items-start gap-4 p-7 bg-card border border-border verdico-card mb-12">
              <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium mb-2">Конфиденциальность</h3>
                <p className="text-sm text-muted-foreground">
                  По вашему запросу мы подписываем соглашение о неразглашении (NDA) 
                  до начала обсуждения деталей проекта.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://t.me/DjamalG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2 btn-navy-glass rounded-full">
                  <MessageCircle className="w-5 h-5" />
                  Написать в Telegram
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </MultilingualLayout>
  );
};

export default ContactsRu;
