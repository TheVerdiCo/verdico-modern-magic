import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import { enServices } from "@/lib/seo";
import founderImage from "@/assets/founder.jpg";

const stats = [
  { value: "14+", label: "years of practice" },
  { value: "60+", label: "successful cases" },
  { value: "15+", label: "countries served" },
];

const HomeEn = () => {
  return (
    <MultilingualLayout>
      <SEOHead
        title="Legal Services for Business in Russia | VerdiCo"
        description="VerdiCo provides legal support for investments, M&A, cross-border transactions, and arbitration. Operating since 2010. Russia and international projects."
        path="/en"
      />
      <OrganizationSchema />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-secondary text-sm font-medium rounded-full mb-6 animate-fade-up">
              Legal Practice Since 2010
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-up animation-delay-100">
              Legal services for business and investors in Russia
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up animation-delay-200">
              We are a team of international lawyers with expertise in investment structuring, 
              M&A transactions, cross-border deals, and commercial dispute resolution. Our practice 
              spans Russia and key global markets, serving businesses, investors, and private clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300">
              <Link to="/en/contacts">
                <Button size="lg" className="gap-2">
                  Discuss Your Case
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/en/about">
                <Button variant="outline" size="lg">
                  About Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mt-16 animate-fade-up animation-delay-400">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-3xl md:text-4xl text-gradient-brand font-medium">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 px-4 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-sm text-gradient-brand font-medium uppercase tracking-wider">Services</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-4 mb-4">
              Key Practice Areas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every project is unique. We analyze your case and propose optimal solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enServices.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="group p-6 bg-card rounded-xl border border-border hover:shadow-card hover:border-accent/30 transition-all"
              >
                <h3 className="font-serif text-xl font-medium mb-3 group-hover:text-gradient-brand">
                  {service.h1}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description.slice(0, 100)}...
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24 px-4">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm text-gradient-brand font-medium uppercase tracking-wider">About</span>
              <h2 className="font-serif text-3xl md:text-4xl mt-4 mb-6">
                Jamal Jalilievich — Founder
              </h2>
              <p className="text-muted-foreground mb-6">
                International lawyer with over 14 years of practice. Specialization: 
                investment projects, corporate transactions, international arbitration.
              </p>
              <ul className="space-y-3 mb-8">
                {["Operating since 2010", "International practice", "Confidentiality and results"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/en/about">
                <Button variant="outline" className="gap-2">
                  More about us
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
                <img
                  src={founderImage}
                  alt="Jamal Jalilievich — Founder of VerdiCo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-brand opacity-10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Ready to discuss your case?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Describe your situation — we'll get back to you with solution options.
          </p>
          <Link to="/en/contacts">
            <Button variant="secondary" size="lg" className="gap-2">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </MultilingualLayout>
  );
};

export default HomeEn;
