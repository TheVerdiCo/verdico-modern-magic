import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 md:py-24 px-4 sm:px-6">
        <div className="container max-w-3xl mx-auto">
          {/* Back link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            На главную
          </Link>

          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-8 md:mb-12 text-center">
            Информация об использовании сайта и конфиденциальности
          </h1>

          <div className="space-y-8 md:space-y-10">
            {/* Section 1 */}
            <section className="bg-card/50 rounded-xl p-4 sm:p-6 border border-border/50">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                1. Общие положения
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Настоящий документ определяет статус сайта https://www.verdico.ru (далее — «Сайт») в отношении персональных данных посетителей. Владельцем Сайта является Индивидуальный предприниматель Гахвердиев Джамал Джалилович (ИНН: 110213503960).
              </p>
            </section>

            {/* Section 2 */}
            <section className="bg-card/50 rounded-xl p-4 sm:p-6 border border-border/50">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                2. Отсутствие сбора персональных данных
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Сайт является исключительно информационным ресурсом. Владелец Сайта не является оператором персональных данных в понимании Федерального закона № 152-ФЗ «О персональных данных» в рамках работы данного Сайта, так как:
                </p>
                <ul className="list-disc list-outside ml-5 space-y-1.5">
                  <li>на Сайте отсутствуют формы обратной связи, подписки, регистрации или личные кабинеты;</li>
                  <li>на Сайте не производится сбор, запись, систематизация, накопление или хранение персональных данных пользователей (ФИО, телефонов, адресов e-mail);</li>
                  <li>на Сайте не используются сервисы веб-аналитики (Yandex Metrica, Google Analytics и аналоги), пиксели соцсетей или иные инструменты скрытого сбора данных.</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-card/50 rounded-xl p-4 sm:p-6 border border-border/50">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                3. Взаимодействие вне Сайта
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Взаимодействие с ИП Гахвердиевым Д.Д. осуществляется исключительно по инициативе пользователя вне интерфейса Сайта (путем самостоятельного перехода в мессенджер Telegram или отправки письма на электронную почту). В этом случае обработка предоставленных пользователем данных (например, адреса e-mail или ника в мессенджере) регулируется ст. 6 ФЗ-152 и осуществляется исключительно для целей коммуникации по запросу пользователя или исполнения договора.
              </p>
            </section>

            {/* Section 4 */}
            <section className="bg-card/50 rounded-xl p-4 sm:p-6 border border-border/50">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                4. Использование файлов Cookie
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Сайт использует только технические (сессионные) файлы cookie, которые необходимы для корректного отображения страниц и обеспечения безопасности соединения. Эти данные не позволяют идентифицировать личность пользователя и не передаются третьим лицам. Пользователь может ограничить использование cookie в настройках своего браузера.
              </p>
            </section>

            {/* Section 5 */}
            <section className="bg-card/50 rounded-xl p-4 sm:p-6 border border-border/50">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                5. Права пользователей
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Поскольку сбор данных на Сайте не ведется, запросы об уточнении или удалении данных с Сайта не применимы. По вопросам взаимодействия вне Сайта пользователь может обратиться по адресу: ceo@theverdico.com.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-primary/5 rounded-xl p-4 sm:p-6 border border-primary/20">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                Контактная информация
              </h2>
              <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <p><span className="font-medium text-foreground">E-mail:</span> ceo@theverdico.com</p>
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
