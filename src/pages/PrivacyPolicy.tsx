import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/seo/SEOHead";
import { EMAIL } from "@/lib/seo";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Политика обработки персональных данных — VERDICO"
        description="Политика обработки персональных данных и условия использования сайта VERDICO."
        path="/policy"
        canonicalUrl="https://www.verdico.ru/policy"
        noIndex
      />
      <Header />
      <main className="flex-1 py-16 md:py-24 px-4 sm:px-6">
        <div className="container max-w-3xl mx-auto">
          <Link
            to="/ru"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            На главную
          </Link>

          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-8 md:mb-12 text-center">
            Политика обработки персональных данных
          </h1>

          <div className="space-y-8 md:space-y-10">
            <section className="bg-card/50 rounded-xl p-4 sm:p-6 border border-border/50">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                1. Общие положения
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Настоящая политика применяется к страницам Verdico.ru, на
                которых пользователь может инициировать контакт или запрос на
                консультацию. Владельцем сайта является Индивидуальный
                предприниматель Гахвердиев Джамал Джалилович (ИНН:
                110213503960).
              </p>
            </section>

            <section className="bg-card/50 rounded-xl p-4 sm:p-6 border border-border/50">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                2. Использование сайта
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Общий просмотр сайта не требует регистрации, создания личного
                  кабинета или заполнения формы на сайте.
                </p>
                <p>
                  Персональные данные могут обрабатываться, если пользователь
                  добровольно направляет обращение по электронной почте со
                  страницы контактов или страницы консультации и оплаты.
                </p>
                <p>
                  На сайте не используется автоматическая форма отправки данных.
                  Содержание обращения и подтверждение согласия фиксируются в
                  электронном письме, направленном пользователем.
                </p>
              </div>
            </section>

            <section className="bg-card/50 rounded-xl p-4 sm:p-6 border border-border/50">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                3. Категории данных
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
                В зависимости от содержания обращения могут обрабатываться:
              </p>
              <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <li>имя пользователя, если оно указано в обращении;</li>
                <li>контактные данные: адрес электронной почты или телефон;</li>
                <li>текст запроса и сведения о ситуации, добровольно сообщенные пользователем;</li>
                <li>документы и материалы, добровольно направленные пользователем;</li>
                <li>данные, связанные с подтверждением оплаты, если они применимы.</li>
              </ul>
            </section>

            <section className="bg-card/50 rounded-xl p-4 sm:p-6 border border-border/50">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                4. Цели и основания обработки
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Данные используются для коммуникации с пользователем,
                  рассмотрения запроса на консультацию, проверки объема
                  обращения и возможного конфликта интересов, проведения
                  согласованной консультации, подтверждения оплаты и учета, а
                  также соблюдения применимых правовых требований.
                </p>
                <p>
                  Основанием обработки является согласие пользователя и/или
                  действия, необходимые для рассмотрения запрошенной консультации
                  или последующего оказания услуги.
                </p>
              </div>
            </section>

            <section className="bg-card/50 rounded-xl p-4 sm:p-6 border border-border/50">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                5. Ограничение направляемых сведений
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Пользователю не следует направлять специальные категории
                персональных данных или избыточные сведения, если они отдельно
                не запрошены, не необходимы для рассмотрения ситуации и не
                согласованы применительно к конкретному обращению.
              </p>
            </section>

            <section className="bg-card/50 rounded-xl p-4 sm:p-6 border border-border/50">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                6. Права пользователя
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Пользователь вправе отозвать согласие, запросить доступ к
                  своим данным, их уточнение или удаление в случаях и пределах,
                  применимых к конкретному обращению.
                </p>
                <p>
                  Для обращений по вопросам персональных данных используется
                  адрес{" "}
                  <a href={`mailto:${EMAIL}`} className="text-accent hover:underline">
                    {EMAIL}
                  </a>
                  .
                </p>
              </div>
            </section>

            <section className="bg-primary/5 rounded-xl p-4 sm:p-6 border border-primary/20">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                Контактная информация
              </h2>
              <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">E-mail:</span>{" "}
                  <a href={`mailto:${EMAIL}`} className="text-accent hover:underline">
                    {EMAIL}
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
