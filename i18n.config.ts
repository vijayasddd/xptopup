export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  numberFormats: {
    en: {
      currency: {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      },
    },
    "zh-CN": {
      currency: {
        style: "currency",
        currency: "CNY",
        minimumFractionDigits: 2,
      },
    },
    "zh-TW": {
      currency: {
        style: "currency",
        currency: "TWD",
        minimumFractionDigits: 0,
      },
    },
    id: {
      currency: {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      },
    },
    ja: {
      currency: {
        style: "currency",
        currency: "JPY",
        minimumFractionDigits: 0,
      },
    },
    ko: {
      currency: {
        style: "currency",
        currency: "KRW",
        minimumFractionDigits: 0,
      },
    },
  },
  datetimeFormats: {
    en: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      },
    },
    "zh-CN": {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      },
    },
    "zh-TW": {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      },
    },
    id: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      },
    },
    ja: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      },
    },
    ko: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      },
    },
  },
}));
