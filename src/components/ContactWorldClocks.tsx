import { useEffect, useState } from "react";

const CLOCKS = [
  { city: "Пекин", timeZone: "Asia/Shanghai" },
  { city: "Москва", timeZone: "Europe/Moscow" },
  { city: "Лондон", timeZone: "Europe/London" },
  { city: "Нью-Йорк", timeZone: "America/New_York" },
] as const;

const TICKS = Array.from({ length: 12 }, (_, index) => index);

type ClockTime = {
  hours: number;
  minutes: number;
  formatted: string;
};

const getTimeInZone = (date: Date, timeZone: string): ClockTime => {
  const formatter = new Intl.DateTimeFormat("ru-RU", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
  const parts = formatter.formatToParts(date);
  const hours = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const minutes = Number(parts.find((part) => part.type === "minute")?.value ?? 0);

  return {
    hours,
    minutes,
    formatted: `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`,
  };
};

const getClockTimes = () => {
  const now = new Date();

  return CLOCKS.map(({ timeZone }) => getTimeInZone(now, timeZone));
};

const ContactWorldClocks = () => {
  const [times, setTimes] = useState<ClockTime[]>(getClockTimes);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    let intervalId: number | undefined;
    let timeoutId: number | undefined;

    const stopTimer = () => {
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      if (intervalId !== undefined) window.clearInterval(intervalId);
      timeoutId = undefined;
      intervalId = undefined;
    };

    const syncTimer = () => {
      stopTimer();
      if (!desktopQuery.matches) return;

      setTimes(getClockTimes());
      const delayToNextMinute = 60_000 - (Date.now() % 60_000) + 50;
      timeoutId = window.setTimeout(() => {
        setTimes(getClockTimes());
        intervalId = window.setInterval(() => setTimes(getClockTimes()), 60_000);
      }, delayToNextMinute);
    };

    syncTimer();
    desktopQuery.addEventListener("change", syncTimer);

    return () => {
      desktopQuery.removeEventListener("change", syncTimer);
      stopTimer();
    };
  }, []);

  return (
    <section className="contact-world-clocks" aria-label="Мировое время">
      <div className="contact-world-clocks__grid">
        {CLOCKS.map(({ city, timeZone }, index) => {
          const time = times[index];
          const hourAngle = ((time.hours % 12) * 30) + (time.minutes * 0.5);
          const minuteAngle = time.minutes * 6;

          return (
            <article
              key={timeZone}
              className="contact-world-clocks__card"
              aria-label={`Текущее время: ${city}`}
              data-time-zone={timeZone}
            >
              <div className="contact-world-clocks__dial" aria-hidden="true">
                <svg viewBox="0 0 120 120" focusable="false">
                  <circle className="contact-world-clocks__face" cx="60" cy="60" r="52" />
                  {TICKS.map((tick) => (
                    <line
                      key={tick}
                      className="contact-world-clocks__tick"
                      x1="60"
                      y1="12"
                      x2="60"
                      y2={tick % 3 === 0 ? "19" : "17"}
                      transform={`rotate(${tick * 30} 60 60)`}
                    />
                  ))}
                  <line
                    className="contact-world-clocks__hand contact-world-clocks__hand--hour"
                    x1="60"
                    y1="62"
                    x2="60"
                    y2="35"
                    transform={`rotate(${hourAngle} 60 60)`}
                  />
                  <line
                    className="contact-world-clocks__hand contact-world-clocks__hand--minute"
                    x1="60"
                    y1="64"
                    x2="60"
                    y2="24"
                    transform={`rotate(${minuteAngle} 60 60)`}
                  />
                  <circle className="contact-world-clocks__pin" cx="60" cy="60" r="4" />
                </svg>
              </div>

              <div className="contact-world-clocks__city">{city}</div>
              <time className="contact-world-clocks__visually-hidden" dateTime={time.formatted}>
                {time.formatted}
              </time>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ContactWorldClocks;
