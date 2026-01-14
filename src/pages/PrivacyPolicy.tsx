import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-24 px-4">
        <div className="container max-w-4xl">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-12 text-center">
            Политика конфиденциальности
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-2xl mb-4">1. Общие положения</h2>
              <p className="text-muted-foreground leading-relaxed">
                Настоящая Политика конфиденциальности и обработки персональных данных (далее — «Политика») определяет подход Индивидуального предпринимателя Гахвердиева Джамала Джалиловича (далее — «Оператор») к вопросам конфиденциальности и применяется к сайту https://вердико.рф.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Оператор исходит из принципа минимизации обработки персональных данных и не осуществляет их сбор через функционал сайта.
              </p>
              <div className="mt-4 space-y-2 text-muted-foreground">
                <p><strong>Оператор:</strong> ИП Гахвердиев Джамал Джалилович</p>
                <p><strong>ИНН:</strong> 110213503960</p>
                <p><strong>Юридический адрес:</strong> 125284, г. Москва, Ленинградский пр-кт, д. 29, к. 1</p>
                <p><strong>Почтовый адрес:</strong> 125284, г. Москва, Ленинградский пр-кт, д. 29, к. 1</p>
                <p><strong>Контактный e-mail:</strong> ceo@theverdico.com</p>
              </div>
              <div className="mt-4 text-muted-foreground">
                <p><strong>Ответственный за вопросы обработки персональных данных:</strong></p>
                <p>ФИО: Гахвердиев Джамал Джалилович</p>
                <p>Должность: Руководитель</p>
                <p>E-mail: ceo@theverdico.com</p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">2. Отсутствие сбора персональных данных на сайте</h2>
              <p className="text-muted-foreground leading-relaxed">
                Оператор не осуществляет сбор персональных данных пользователей через сайт https://вердико.рф.
              </p>
              <p className="text-muted-foreground leading-relaxed">В частности, на сайте:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>отсутствуют формы обратной связи;</li>
                <li>отсутствуют формы заявок и регистрации;</li>
                <li>не осуществляется сбор ФИО, номеров телефонов, адресов электронной почты или иных персональных данных;</li>
                <li>не используются аналитические, маркетинговые или трекинговые инструменты.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Сайт носит информационный характер.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">3. Контакт вне сайта</h2>
              <p className="text-muted-foreground leading-relaxed">
                Связь с Оператором возможна по инициативе пользователя:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>по телефону;</li>
                <li>по электронной почте;</li>
                <li>через мессенджеры.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Передача персональных данных в таких случаях осуществляется вне сайта и регулируется отдельными договорными документами и/или согласиями на обработку персональных данных, предоставляемыми субъектом персональных данных при необходимости.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">4. Основания обработки персональных данных вне сайта</h2>
              <p className="text-muted-foreground leading-relaxed">
                Обработка персональных данных может осуществляться Оператором только после их получения вне сайта и исключительно:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>на основании заключённого договора;</li>
                <li>либо на основании отдельного согласия субъекта персональных данных, оформленного в письменной или электронной форме.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">5. Трансграничная передача</h2>
              <p className="text-muted-foreground leading-relaxed">
                Оператор не осуществляет трансграничную передачу персональных данных. Хранение и обработка персональных данных, при их наличии, осуществляется на территории Российской Федерации.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">6. Права субъектов персональных данных</h2>
              <p className="text-muted-foreground leading-relaxed">
                Субъект персональных данных вправе:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>получать информацию об обработке своих персональных данных;</li>
                <li>требовать их уточнения, блокирования или уничтожения;</li>
                <li>отозвать согласие на обработку персональных данных.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Обращения направляются по адресу: ceo@theverdico.com.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">7. Заключительные положения</h2>
              <p className="text-muted-foreground leading-relaxed">
                Настоящая Политика не требует уведомления Роскомнадзора, поскольку Оператор не осуществляет систематическую обработку персональных данных через сайт.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Актуальная версия Политики размещена по адресу: https://вердико.рф/policy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Политика подлежит пересмотру в случае изменения функционала сайта или применимого законодательства.
              </p>
            </section>

            <hr className="border-border my-8" />

            <section>
              <h1 className="font-serif text-3xl mb-6">Cookie Policy</h1>
              
              <h2 className="font-serif text-2xl mb-4">1. Общие положения</h2>
              <p className="text-muted-foreground leading-relaxed">
                Настоящая Политика использования файлов cookie применяется к сайту https://вердико.рф.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">2. Использование cookie</h2>
              <p className="text-muted-foreground leading-relaxed">
                На сайте используются только технически необходимые cookie, обеспечивающие:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>корректную работу сайта;</li>
                <li>безопасность соединения;</li>
                <li>корректное отображение страниц.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Аналитические, маркетинговые и иные cookie не используются.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">3. Правовое основание</h2>
              <p className="text-muted-foreground leading-relaxed">
                Использование технически необходимых cookie осуществляется на основании законного интереса Оператора.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">4. Управление cookie</h2>
              <p className="text-muted-foreground leading-relaxed">
                Пользователь может ограничить или отключить использование cookie в настройках браузера. Это может повлиять на корректность работы сайта.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">5. Срок хранения</h2>
              <p className="text-muted-foreground leading-relaxed">
                Срок хранения cookie определяется настройками браузера пользователя и не превышает периода, необходимого для корректной работы сайта.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl mb-4">6. Контакты</h2>
              <p className="text-muted-foreground leading-relaxed">
                По вопросам, связанным с настоящей Политикой, можно обратиться по адресу: ceo@theverdico.com.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4 text-sm">
                Документы подготовлены для размещения на сайте вердико.рф с учётом отсутствия сбора персональных данных через сайт и соответствуют требованиям законодательства Российской Федерации.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
