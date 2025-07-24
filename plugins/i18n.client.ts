export default defineNuxtPlugin((nuxtApp) => {
  // 仅在客户端运行
  if (import.meta.server) return;

  // 浏览器语言检测映射
  const browserLanguageMap: Record<string, string> = {
    zh: "zh-CN",
    "zh-Hans": "zh-CN",
    "zh-Hant": "zh-TW",
    "zh-TW": "zh-TW",
    "zh-HK": "zh-TW",
    "zh-MO": "zh-TW",
    ja: "ja",
    ko: "ko",
    id: "id",
    en: "en",
  };

  // 支持的语言列表
  const supportedLocales = ["en", "zh-CN", "zh-TW", "id", "ja", "ko"] as const;
  type SupportedLocale = (typeof supportedLocales)[number];

  // 检测浏览器语言
  const detectBrowserLanguage = (): SupportedLocale => {
    if (typeof navigator === "undefined") return "en";

    const browserLangs = navigator.languages || [navigator.language];

    for (const lang of browserLangs) {
      // 完全匹配
      if (
        browserLanguageMap[lang] &&
        supportedLocales.includes(browserLanguageMap[lang] as SupportedLocale)
      ) {
        return browserLanguageMap[lang] as SupportedLocale;
      }

      // 语言代码匹配（忽略地区）
      const langCode = lang.split("-")[0];
      if (
        browserLanguageMap[langCode] &&
        supportedLocales.includes(
          browserLanguageMap[langCode] as SupportedLocale
        )
      ) {
        return browserLanguageMap[langCode] as SupportedLocale;
      }
    }

    return "en"; // 默认返回英语
  };

  // 在DOM加载完成后处理语言设置
  nuxtApp.hook("app:mounted", () => {
    setTimeout(() => {
      try {
        // 通过nuxtApp访问i18n实例
        const i18n = nuxtApp.$i18n;
        if (!i18n) {
          console.error("❌ [i18n Plugin] i18n instance not found");
          return;
        }

        console.log("🔍 [i18n Plugin] Current locale:", i18n.locale.value);
        console.log(
          "🔍 [i18n Plugin] Available locales:",
          i18n.locales.value.map((l: any) => l.code)
        );

        // 1. 首先检查用户手动设置的语言偏好
        const userSelectedLanguage = localStorage.getItem(
          "user_selected_language"
        );
        console.log(
          "🔍 [i18n Plugin] User selected language from localStorage:",
          userSelectedLanguage
        );

        if (
          userSelectedLanguage &&
          supportedLocales.includes(userSelectedLanguage as SupportedLocale)
        ) {
          console.log(
            "✅ [i18n Plugin] Applying user selected language:",
            userSelectedLanguage
          );
          i18n.setLocale(userSelectedLanguage);
          return;
        }

        // 2. 如果没有用户偏好，则检测浏览器语言
        const detectedLang = detectBrowserLanguage();
        const hasAutoDetected = localStorage.getItem("i18n_auto_detected");

        console.log(
          "🔍 [i18n Plugin] Detected browser language:",
          detectedLang
        );
        console.log(
          "🔍 [i18n Plugin] Has auto detected before:",
          hasAutoDetected
        );

        // 如果检测到的语言在支持的语言列表中，且当前语言不是检测到的语言，且没有进行过自动检测
        const availableLocales = i18n.locales.value.map((l: any) => l.code);
        if (
          availableLocales.includes(detectedLang) &&
          i18n.locale.value !== detectedLang &&
          !hasAutoDetected
        ) {
          console.log(
            "✅ [i18n Plugin] Applying browser detected language:",
            detectedLang
          );
          i18n.setLocale(detectedLang);
          localStorage.setItem("i18n_auto_detected", "true");
        }
      } catch (error) {
        console.error(
          "❌ [i18n Plugin] Error during language detection:",
          error
        );
      }
    }, 300); // 增加延迟确保i18n完全就绪
  });
});
