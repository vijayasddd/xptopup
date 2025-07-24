// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxtjs/i18n",
  ],

  i18n: {
    defaultLocale: "en",
    strategy: "prefix_except_default",
    langDir: "locales",
    lazy: true,
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.json",
        flag: "🇺🇸",
      },
      {
        code: "zh-CN",
        name: "简体中文",
        file: "zh-CN.json",
        flag: "🇨🇳",
      },
      {
        code: "zh-TW",
        name: "繁體中文",
        file: "zh-TW.json",
        flag: "🇹🇼",
      },
      {
        code: "id",
        name: "Bahasa Indonesia",
        file: "id.json",
        flag: "🇮🇩",
      },
      {
        code: "ja",
        name: "日本語",
        file: "ja.json",
        flag: "🇯🇵",
      },
      {
        code: "ko",
        name: "한국어",
        file: "ko.json",
        flag: "🇰🇷",
      },
    ],
    vueI18n: "./i18n.config.ts",
  },
});
