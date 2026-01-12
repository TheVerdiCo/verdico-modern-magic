import { Check } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

const highlights = [
  "Работаем с 2010 года",
  "Международная практика",
  "Индивидуальный подход",
  "Конфиденциальность"
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-secondary/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
              <img
                src={founderImage}
                alt="Джамал Джаналиевич - Основатель компании"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-brand opacity-10 rounded-2xl -z-10"></div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm text-gradient-brand font-medium uppercase tracking-wider">О компании</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
              Джамал Джаналиевич
            </h2>
            <p className="text-muted-foreground text-lg mb-2">
              Основатель компании
            </p>
            <p className="text-muted-foreground mb-8">
              Юрист-международник
            </p>

            <p className="text-foreground leading-relaxed mb-8">
              Verdi & Co. — это глобальная команда профессиональных юристов и адвокатов, 
              успешно решающая разнообразные задачи клиентов с 2010 года. Мы предоставляем 
              комплексные юридические услуги как в России, так и по всему миру.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <blockquote className="border-l-2 border-accent pl-6 italic text-muted-foreground">
              <span className="text-gradient-brand not-italic">"</span>Мы готовы взять на себя ответственность за ваши дела и обеспечить 
              наилучший результат.<span className="text-gradient-brand not-italic">"</span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
