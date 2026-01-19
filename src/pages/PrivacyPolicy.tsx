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

          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12 text-center">
            Политика конфиденциальности
          </h1>

          <div className="space-y-8 md:space-y-10">
            {/* Section 1 */}
            <section className="bg-card/50 rounded-xl p-4 sm:p-6 border border-border/50">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                1. Общие положения
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Настоящая Политика конфиденциальности и обработки персональных данных (далее — «Политика») определяет подход Индивидуального предпринимателя Гахвердиева Джамала Джалиловича (далее — «Оператор») к вопросам конфиденциальности и применяется к сайту https://вердико.рф.
                </p>
                <p>
                  Оператор исходит из принципа минимизации обработки персональных данных и не осуществляет их сбор через функционал сайта.
                </p>
                <div className="mt-4 p-3 sm:p-4 bg-muted/30 rounded-lg space-y-1.5 text-sm">
                  <p><span className="font-medium text-foreground">Оператор:</span> ИП Гахвердиев Джамал Джалилович</p>
                  <p><span className="font-medium text-foreground">ИНН:</span> 110213503960</p>
                  <p><span className="font-medium text-foreground">Контактный e-mail:</span> ceo@theverdico.com</p>
                </div>
                <div className="mt-4 p-3 sm:p-4 bg-muted/30 rounded-lg text-sm">
                  <p className="font-medium text-foreground mb-1.5">Ответственный за вопросы обработки персональных данных:</p>
                  <p>ФИО: Гахвердиев Джамал Джалилович</p>
                  <p>Должность: Руководитель</p>
                  <p>E-mail: ceo@theverdico.com</p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-card/50 rounded-xl p-4 sm:p-6 border border-border/50">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                2. Отсутствие сбора персональных данных на сайте
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Оператор не осуществляет сбор персональных данных пользователей через сайт https://вердико.рф.
                </p>
                <p>В частности, на сайте:</p>
                <ul className="list-disc list-outside ml-5 space-y-1.5">
                  <li>отсутствуют формы обратной связи;</li>
                  <li>отсутствуют формы заявок и регистрации;</li>
                  <li>не осуществляется сбор ФИО, номеров телефонов, адресов электронной почты или иных персональных данных;</li>
                  <li>не используются аналитические, маркетинговые или трекинговые инструменты.</li>
                </ul>
                <p>Сайт носит информационный характер.</p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-card/50 rounded-xl p-4 sm:p-6 border border-border/50">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                3. Контакт вне сайта
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>Связь с Оператором возможна по инициативе пользователя:</p>
                <ul className="list-disc list-outside ml-5 space-y-1.5">
                  <li>по телефону;</li>
                  <li>по электронной почте;</li>
                  <li>через мессенджеры.</li>
                </ul>
                <p>
                  В случае обращения пользователь самостоятельно сообщает данные. Их обработка осуществляется вне сайта для выполнения запроса, на основании п. 5 ч. 1 ст. 6 Федерального закона № 152-ФЗ.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-card/50 rounded-xl p-4 sm:p-6 border border-border/50">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                4. Основания обработки данных вне сайта
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>Если пользователь самостоятельно обращается к Оператору, обработка производится на основании:</p>
                <ul className="list-disc list-outside ml-5 space-y-1.5">
                  <li>исполнения обязательств по договору;</li>
                  <li>соблюдения законодательных требований.</li>
                </ul>
                <p>Обработка ограничивается минимумом данных, необходимых для выполнения запроса.</p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="bg-card/50 rounded-xl p-4 sm:p-6 border border-border/50">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                5. Трансграничная передача данных
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Оператор не осуществляет трансграничную передачу персональных данных. При необходимости такая передача будет производиться с соблюдением требований Федерального закона № 152-ФЗ.
              </p>
            </section>

            {/* Section 6 */}
            <section className="bg-card/50 rounded-xl p-4 sm:p-6 border border-border/50">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                6. Права субъектов персональных данных
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>Пользователь имеет право:</p>
                <ul className="list-disc list-outside ml-5 space-y-1.5">
                  <li>получать информацию о данных, обрабатываемых Оператором;</li>
                  <li>требовать их уточнения, блокирования или уничтожения;</li>
                  <li>отозвать согласие на обработку (при его наличии);</li>
                  <li>обжаловать действия в Роскомнадзоре.</li>
                </ul>
                <p>Запросы направляются по адресу: ceo@theverdico.com.</p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="bg-card/50 rounded-xl p-4 sm:p-6 border border-border/50">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                7. Заключительные положения
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Политика может обновляться. Актуальная версия публикуется на сайте. Использование сайта означает принятие условий Политики.
              </p>
            </section>

            {/* Divider */}
            <div className="border-t border-border my-8 md:my-12" />

            {/* Cookie Policy */}
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-8 md:mb-12 text-center">
              Cookie Policy
            </h1>

            {/* Cookie Section 1 */}
            <section className="bg-card/50 rounded-xl p-4 sm:p-6 border border-border/50">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                1. Общие положения
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Сайт https://вердико.рф использует только технически необходимые cookie-файлы для обеспечения работоспособности сайта и безопасности соединения. Сбор данных для аналитики, рекламы или персонализации не производится.
              </p>
            </section>

            {/* Cookie Section 2 */}
            <section className="bg-card/50 rounded-xl p-4 sm:p-6 border border-border/50">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                2. Виды используемых cookie
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p className="font-medium text-foreground">Технически необходимые cookie:</p>
                <ul className="list-disc list-outside ml-5 space-y-1.5">
                  <li>обеспечивают корректную работу сайта;</li>
                  <li>не требуют согласия пользователя;</li>
                  <li>не передаются третьим лицам.</li>
                </ul>
              </div>
            </section>

            {/* Cookie Section 3 */}
            <section className="bg-card/50 rounded-xl p-4 sm:p-6 border border-border/50">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-foreground">
                3. Управление cookie
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Пользователь может отключить cookie в настройках браузера. Это может повлиять на работу сайта.
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
