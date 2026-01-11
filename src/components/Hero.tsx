import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 px-4">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground mb-8 opacity-0 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            Право · Юридические услуги
          </div>

          {/* Quote */}
          <blockquote className="opacity-0 animate-fade-up animation-delay-100">
            <p className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-balance mb-6">
              «Право — это разум,
              <span className="text-accent"> свободный от страсти</span>»
            </p>
            <cite className="text-muted-foreground text-lg font-normal not-italic">
              — Аристотель
            </cite>
          </blockquote>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-12 mb-10 opacity-0 animate-fade-up animation-delay-200">
            Глобальная команда профессиональных юристов и адвокатов, 
            успешно решающая разнообразные задачи клиентов с 2010 года.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up animation-delay-300">
            <Button size="lg" className="group">
              Получить консультацию
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Наши услуги
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border opacity-0 animate-fade-up animation-delay-400">
            <div>
              <p className="font-serif text-4xl md:text-5xl font-medium text-foreground">14+</p>
              <p className="text-sm text-muted-foreground mt-2">лет опыта</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl font-medium text-foreground">500+</p>
              <p className="text-sm text-muted-foreground mt-2">успешных дел</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl font-medium text-foreground">15+</p>
              <p className="text-sm text-muted-foreground mt-2">стран мира</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
