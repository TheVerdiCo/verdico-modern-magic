import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, Lock, Target } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import founderImage from "@/assets/founder.jpg";

const approach = [
  {
    icon: Target,
    title: "Discipline",
    description: "Clear timelines, structured process, regular reporting at every project stage.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description: "NDA on request, information protection, limited access to case materials.",
  },
  {
    icon: Shield,
    title: "Managed Process",
    description: "Transparent pricing, agreed scope of work, risk control at every stage.",
  },
];

const focusAreas = [
  "Investment projects and capital raising",
  "M&A transactions (mergers and acquisitions)",
  "International and cross-border transactions",
  "Arbitration and commercial disputes",
  "Corporate structuring",
];

const AboutEn = () => {
  return (
    <MultilingualLayout>
      <SEOHead
        title="About Verdi & Co. — Legal Practice Since 2010"
        description="Verdi & Co. is a team of international lawyers. Operating since 2010. Specialization: investments, M&A, international transactions, arbitration. Russia and international projects."
        path="/en/about"
      />

      {/* Hero */}
      <section className="py-16 md:py-24 px-4">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-sm text-gradient-brand font-medium uppercase tracking-wider">About</span>
            <h1 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
              Verdi & Co. — Legal practice since 2010
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              We are a team of international lawyers working with Russian and foreign 
              clients. We support investment projects, M&A transactions, cross-border 
              operations, and commercial disputes.
            </p>
            <p className="text-muted-foreground">
              We work with businesses, investors, and private clients in Russia and abroad. 
              Our task is to provide legal support at every stage of the project: from 
              structuring to deal closing and dispute resolution.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 md:py-24 px-4 bg-secondary/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
                <img
                  src={founderImage}
                  alt="Jamal Jalilievich — Founder of Verdi & Co."
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-brand opacity-10 rounded-2xl -z-10" />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl md:text-4xl mb-2">
                Jamal Jalilievich
              </h2>
              <p className="text-gradient-brand font-medium mb-6">
                Founder • International Lawyer
              </p>
              <p className="text-muted-foreground mb-6">
                Over 14 years of practice in corporate law, investments, and international 
                transactions. Worked on projects in Russia, CIS, Europe, and the Middle East.
              </p>
              <blockquote className="border-l-2 border-accent pl-6 italic text-muted-foreground">
                <span className="text-gradient-brand not-italic">"</span>
                We support your case considering legal, commercial, and procedural aspects.
                <span className="text-gradient-brand not-italic">"</span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 md:py-24 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-8 text-center">
              Key Focus Areas
            </h2>
            <div className="space-y-4">
              {focusAreas.map((area) => (
                <div key={area} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-6 h-6 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-24 px-4 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Our Approach</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three principles that define our work with every client.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {approach.map((item) => (
              <div key={item.title} className="p-6 bg-card rounded-xl border border-border text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-brand flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Ready to discuss your case?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact us for an initial consultation. NDA available on request.
          </p>
          <Link to="/en/contacts">
            <Button size="lg" className="gap-2">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </MultilingualLayout>
  );
};

export default AboutEn;
