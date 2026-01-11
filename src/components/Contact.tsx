import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm text-accent font-medium uppercase tracking-wider">Контакты</span>
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
              className="inline-flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-xl hover:shadow-card hover:border-accent/20 transition-all"
            >
              <Mail className="w-5 h-5 text-accent" />
              <span className="font-medium">ceo@theverdico.com</span>
            </a>
            <a
              href="https://t.me/verdico"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-xl hover:shadow-card hover:border-accent/20 transition-all"
            >
              <Send className="w-5 h-5 text-accent" />
              <span className="font-medium">Telegram</span>
            </a>
            <a
              href="https://wa.me/message"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-xl hover:shadow-card hover:border-accent/20 transition-all"
            >
              <MessageCircle className="w-5 h-5 text-accent" />
              <span className="font-medium">WhatsApp</span>
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
