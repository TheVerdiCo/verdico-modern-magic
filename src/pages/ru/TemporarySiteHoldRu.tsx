import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const legalLinks = [
  {
    to: "/ru/privacy-policy",
    label: "Политика обработки персональных данных",
  },
  {
    to: "/ru/cookie-policy",
    label: "Политика использования cookies",
  },
  {
    to: "/ru/email-privacy",
    label: "Уведомление для электронной переписки",
  },
];

const TemporarySiteHoldRu = () => (
  <>
    <Helmet>
      <html lang="ru" />
      <title>Сайт обновляется | Верди и Ко.</title>
      <meta
        name="description"
        content="Публичные правовые документы Верди и Ко."
      />
      <meta name="robots" content="noindex, nofollow, noarchive" />
      <meta name="googlebot" content="noindex, nofollow, noarchive" />
      <meta name="yandex" content="noindex, nofollow" />
      <meta name="theme-color" content="#0b1830" />
    </Helmet>

    <main className="relative flex min-h-screen overflow-hidden bg-verdico-cta px-5 py-8 text-white sm:px-8 sm:py-10">
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-40 h-[32rem] w-[32rem] rounded-full bg-verdico-blue-mid/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-48 -left-40 h-[34rem] w-[34rem] rounded-full bg-verdico-gold/10 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col">
        <header className="flex items-center gap-3 border-b border-white/10 pb-7">
          <span className="logo-mark logo-mark--md" aria-hidden="true">
            <img className="logo-mark-img" src="/favicon.png" alt="" />
          </span>
          <p className="font-serif text-2xl tracking-[-0.02em] text-white sm:text-[28px]">
            Верди и Ко.
          </p>
        </header>

        <section className="flex flex-1 items-center py-12 sm:py-16">
          <div className="w-full max-w-3xl">
            <h1 className="font-serif text-[48px] font-normal leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl">
              Сайт обновляется
            </h1>

            <div className="mt-10 border-l border-verdico-gold/70 pl-5 sm:mt-12 sm:pl-7">
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-verdico-gold-soft sm:text-[15px]">
                Публичные правовые документы доступны:
              </p>

              <nav aria-label="Публичные правовые документы" className="mt-6">
                <ul className="space-y-4">
                  {legalLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="group inline-flex items-baseline gap-3 font-serif text-[22px] leading-tight text-white/90 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-verdico-gold sm:text-[27px]"
                      >
                        <span
                          aria-hidden="true"
                          className="text-verdico-gold transition-transform group-hover:translate-x-1"
                        >
                          →
                        </span>
                        <span className="underline decoration-white/20 underline-offset-[6px] transition-colors group-hover:decoration-verdico-gold/70">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-7 text-sm text-white/65 sm:text-[15px]">
          По вопросам связи:{" "}
          <a
            href="mailto:admin@verdico.ru"
            className="text-white underline decoration-verdico-gold/70 underline-offset-4 transition-colors hover:decoration-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-verdico-gold"
          >
            admin@verdico.ru
          </a>
        </footer>
      </div>
    </main>
  </>
);

export default TemporarySiteHoldRu;
