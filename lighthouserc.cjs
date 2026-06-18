module.exports = {
  ci: {
    collect: {
      url: [
        "http://localhost:4173/",
        "http://localhost:4173/ru/mezhdunarodnye-aktivy/",
        "http://localhost:4173/ru/kipr-nedvizhimost-pmzh/",
        "http://localhost:4173/ru/gretsiya-vnzh-san-tome-grazhdanstvo/",
        "http://localhost:4173/ru/tailand-phuket-kurortnye-rezidentsii/",
        "http://localhost:4173/ru/kommercheskaya-nedvizhimost-zarubezhom/",
      ],
      numberOfRuns: 3,
      startServerCommand: "npm run preview -- --host 127.0.0.1 --port 4173",
      startServerReadyPattern: "Local:",
      startServerReadyTimeout: 30000,
      settings: {
        chromeFlags: "--headless=new --no-sandbox",
      },
    },
    assert: {
      assertions: {
        "categories:seo": ["error", { minScore: 0.95 }],
        "categories:accessibility": ["warn", { minScore: 0.9 }],
        "categories:best-practices": ["warn", { minScore: 0.9 }],
        "categories:performance": ["warn", { minScore: 0.8 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
