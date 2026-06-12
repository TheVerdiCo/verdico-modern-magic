import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, ShieldCheck } from "lucide-react";
import MultilingualLayout from "@/components/layout/MultilingualLayout";
import { EMAIL, SITE_URL } from "@/lib/seo";

const CANONICAL_URL = "https://www.verdico.ru/ru/cookie-policy";
const PRIVACY_URL = "https://www.verdico.ru/ru/privacy-policy";
const SITE_LABEL = "www.verdico.ru";
const BRAND_NAME = "Верди и Ко";

const LegalSection = ({
  title,
  highlighted = false,
  children,
}: {
  title: string;
  highlighted?: boolean;
  children: ReactNode;
}) => (
  <section
    className={`verdico-card border bg-card p-5 md:p-8 ${
      highlighted ? "border-verdico-gold/40" : "border-border"
    }`}
  >
    <h2 className="font-serif text-[23px] leading-snug text-foreground md:text-3xl">
      {title}
    </h2>
    <div className="mt-4 space-y-4 text-[15.5px] leading-[1.75] text-muted-foreground md:text-base">
      {children}
    </div>
  </section>
);

const CookiePolicyRu = () => {
  return (
    <MultilingualLayout>
      <Helmet>
        <html lang="ru" />
        <title>Политика использования cookies | Верди и Ко</title>
        <meta
          name="description"
          content="Политика использования cookies и технических данных на сайте www.verdico.ru."
        />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:title" content="Политика использования cookies | Верди и Ко" />
        <meta
          property="og:description"
          content="Политика использования cookies и технических данных на сайте www.verdico.ru."
        />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content={BRAND_NAME} />
      </Helmet>

      <section className="relative overflow-hidden bg-verdico-cta px-4 py-14 text-white md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <span className="eyebrow mb-5 !text-verdico-gold-soft">
              Верди и Ко / cookies
            </span>
            <h1 className="font-serif text-[34px] leading-tight md:text-[52px]">
              Политика использования cookies
            </h1>
            <p className="mt-6 max-w-3xl text-[16px] leading-[1.7] text-white/82 md:text-lg md:leading-relaxed">
              Политика объясняет, какие технические данные и файлы cookies могут
              использоваться на сайте{" "}
              <a
                href={SITE_URL}
                className="text-white underline decoration-verdico-gold/70 underline-offset-4 hover:decoration-white"
              >
                {SITE_LABEL}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 px-4 py-12 md:py-18">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-5 md:space-y-6">
            <LegalSection title="1. Общие положения" highlighted>
              <p>
                Настоящая Политика использования cookies объясняет, какие
                технические данные и файлы cookies могут использоваться на сайте{" "}
                <a href={SITE_URL} className="text-accent hover:underline">
                  {SITE_LABEL}
                </a>
                , принадлежащем оператору, действующему под обозначением «Верди
                и Ко».
              </p>
            </LegalSection>

            <LegalSection title="2. Что такое cookies">
              <p>
                Cookies — это небольшие фрагменты данных, которые могут
                сохраняться браузером пользователя при посещении сайта. Они могут
                использоваться для технической работы сайта, сохранения
                пользовательских настроек, обеспечения безопасности, анализа
                работы сайта или иных целей, если такие цели прямо указаны.
              </p>
            </LegalSection>

            <LegalSection title="3. Какие cookies использует сайт">
              <p>
                На момент публикации настоящей Политики сайт не должен
                использовать аналитические, рекламные или маркетинговые cookies,
                если такие инструменты не обнаружены в исходном коде в ходе
                preflight-аудита.
              </p>
              <p>
                Сайт может использовать только технически необходимые механизмы,
                если они требуются для корректного отображения страниц,
                безопасности, маршрутизации, сохранения пользовательских
                настроек или работоспособности сайта.
              </p>
            </LegalSection>

            <LegalSection title="4. Веб-аналитика">
              <p>
                На момент публикации настоящей Политики на сайте не подключается
                Яндекс Метрика, Google Analytics или иная веб-аналитика, если
                соответствующие скрипты не обнаружены в исходном коде.
              </p>
              <p>
                Если в будущем на сайте будет подключена Яндекс Метрика или иной
                аналитический сервис, до начала использования должны быть
                обновлены настоящая Политика, Политика обработки персональных
                данных и, при необходимости, механизм получения согласия
                пользователя.
              </p>
            </LegalSection>

            <LegalSection title="5. Как пользователь может управлять cookies">
              <p>
                Пользователь может ограничить, удалить или заблокировать cookies
                в настройках своего браузера.
              </p>
              <p>
                Отключение cookies может повлиять на корректность отображения или
                работу отдельных функций сайта, если такие функции используют
                технические cookies.
              </p>
            </LegalSection>

            <LegalSection title="6. Связь с Политикой обработки персональных данных">
              <p>
                Если cookies или технические данные позволяют прямо или косвенно
                определить пользователя либо используются вместе с иными данными,
                такие сведения могут рассматриваться как персональные данные и
                обрабатываются в соответствии с Политикой обработки персональных
                данных:
              </p>
              <p>
                <a href={PRIVACY_URL} className="font-medium text-accent hover:underline">
                  {PRIVACY_URL}
                </a>
              </p>
            </LegalSection>

            <LegalSection title="7. Контакт">
              <p>
                По вопросам использования cookies и обработки технических данных
                можно обратиться по адресу:
              </p>
              <p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 font-medium text-accent hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  {EMAIL}
                </a>
              </p>
            </LegalSection>

            <section className="verdico-card border border-verdico-gold/30 bg-card p-5 md:p-8">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 h-6 w-6 flex-shrink-0 text-verdico-gold" />
                <div>
                  <h2 className="font-serif text-[23px] leading-snug text-foreground md:text-3xl">
                    8. Изменение Политики
                  </h2>
                  <div className="mt-4 space-y-4 text-[15.5px] leading-[1.75] text-muted-foreground md:text-base">
                    <p>
                      Оператор вправе обновлять настоящую Политику при изменении
                      состава cookies, подключении аналитики, изменении
                      технических сервисов или требований законодательства.
                    </p>
                    <p>Актуальная редакция размещается по адресу:</p>
                    <p>
                      <a href={CANONICAL_URL} className="font-medium text-accent hover:underline">
                        {CANONICAL_URL}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </MultilingualLayout>
  );
};

export default CookiePolicyRu;
