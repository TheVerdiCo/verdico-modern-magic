import { Scale, Building2, FileText, Globe2, Home, Handshake, Users, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Судебное представительство",
    description: "Представительство интересов в судах РФ и в других странах"
  },
  {
    icon: Building2,
    title: "Имущественные споры",
    description: "Профессиональное разрешение сложных имущественных споров"
  },
  {
    icon: FileText,
    title: "Юридическое сопровождение",
    description: "Полное юридическое сопровождение и консультации"
  },
  {
    icon: Globe2,
    title: "Международные договоры",
    description: "Анализ и составление договоров на многих языках мира"
  },
  {
    icon: Users,
    title: "Корпоративное право",
    description: "Регистрация компаний за рубежом, подготовка документации, корпоративное сопровождение, корпоративные споры"
  },
  {
    icon: Home,
    title: "Сделки с недвижимостью",
    description: "Сопровождение сделок с недвижимостью любой сложности"
  },
  {
    icon: Handshake,
    title: "M&A сделки",
    description: "Корпоративные слияния и поглощения (M&A), привлечение инвестиций, работа с собственниками и инвесторами"
  },
  {
    icon: MessageSquare,
    title: "Деловые переговоры",
    description: "Проведение деловых переговоров на различных языках мира"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sm text-gradient-brand font-medium uppercase tracking-wider">Услуги</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
            Спектр наших услуг
          </h2>
          <p className="text-muted-foreground text-lg">
            Каждая ситуация индивидуальна. Опишите вашу задачу — мы свяжемся с вами.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 bg-card rounded-xl border border-border hover:shadow-card hover:border-accent/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-5 group-hover:bg-gradient-brand transition-colors">
                <service.icon className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
