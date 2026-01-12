import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm text-gradient-brand font-medium uppercase tracking-wider">Контакты</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Готовы обсудить вашу ситуацию? Напишите нам, и мы ответим в ближайшее время.
          </p>

          {/* Contact Methods */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:ceo@theverdico.com"
              className="group inline-flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-xl hover:shadow-card hover:border-accent/30 transition-all"
            >
              <div className="w-5 h-5 bg-gradient-brand rounded-full flex items-center justify-center">
                <Mail className="w-3 h-3 text-white" />
              </div>
              <span className="font-medium group-hover:text-gradient-brand">ceo@theverdico.com</span>
            </a>
            <a
              href="https://t.me/verdico"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-xl hover:shadow-card hover:border-accent/30 transition-all"
            >
              <div className="w-5 h-5 bg-gradient-brand rounded-full flex items-center justify-center">
                <Send className="w-3 h-3 text-white" />
              </div>
              <span className="font-medium group-hover:text-gradient-brand">Telegram</span>
            </a>
            <a
              href="https://wa.me/message"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-xl hover:shadow-card hover:border-accent/30 transition-all"
            >
              <div className="w-5 h-5 bg-gradient-brand rounded-full flex items-center justify-center">
                <MessageCircle className="w-3 h-3 text-white" />
              </div>
              <span className="font-medium group-hover:text-gradient-brand">WhatsApp</span>
            </a>
          </div>

          {/* CTA Button */}
          <Button size="lg" className="px-10">
            Напишите Нам
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
