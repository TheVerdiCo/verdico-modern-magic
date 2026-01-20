import { Button } from "@/components/ui/button";
import { Mail, Send, MessageCircle, Shield } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import { EMAIL } from "@/lib/seo";

const ContactsEn = () => {
  return (
    <MultilingualLayout>
      <SEOHead
        title="Contact Verdi & Co. — Get in Touch with Our Legal Team"
        description="Contact Verdi & Co. to discuss your legal matter. Email, Telegram. Initial consultation available. NDA on request."
        path="/en/contacts"
      />

      <section className="py-16 md:py-24 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm text-gradient-brand font-medium uppercase tracking-wider">Contact</span>
              <h1 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground">
                Ready to discuss your legal matter? Contact us — we'll respond 
                within one business day.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:shadow-card hover:border-accent/30 transition-all"
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
                className="group flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:shadow-card hover:border-accent/30 transition-all"
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
              <h2 className="font-serif text-2xl mb-6 text-center">How First Contact Works</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0 text-white font-medium">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Describe Your Case</h3>
                    <p className="text-sm text-muted-foreground">
                      Briefly outline the matter: transaction type, parties, timeline, key risks.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0 text-white font-medium">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Initial Consultation</h3>
                    <p className="text-sm text-muted-foreground">
                      We'll review your request and contact you for details. Usually a 15-30 minute call.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0 text-white font-medium">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Proposal</h3>
                    <p className="text-sm text-muted-foreground">
                      Receive a structured proposal with scope of work, timeline, and pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* NDA Notice */}
            <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl mb-12">
              <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium mb-2">Confidentiality</h3>
                <p className="text-sm text-muted-foreground">
                  Upon request, we sign a non-disclosure agreement (NDA) before 
                  discussing project details.
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
                <Button size="lg" className="gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Message on Telegram
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </MultilingualLayout>
  );
};

export default ContactsEn;
