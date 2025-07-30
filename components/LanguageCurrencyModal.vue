<template>
  <BaseModal :show="show" @close="$emit('close')">
    <template #header>
      <h2 class="text-xl font-bold text-white drop-shadow-lg">
        {{ $t("languageCurrencyModal.title") }}
      </h2>
    </template>
    <template #body>
      <div class="space-y-6">
        <!-- Language Selection -->
        <div>
          <h3 class="font-semibold text-slate-200 mb-3">
            {{ $t("languageCurrencyModal.language") }}
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <button
              v-for="lang in availableLanguages"
              :key="lang.code"
              :class="[
                'p-3 rounded-lg transition-all duration-200 border-2',
                selectedLanguage === lang.code
                  ? 'bg-amber-400/90 text-slate-900 border-amber-400/90 font-bold shadow-lg shadow-amber-500/30'
                  : 'bg-slate-700/50 border-slate-600/50 hover:bg-slate-600/50 hover:border-slate-500/50',
              ]"
              @click="setLanguage(lang.code)"
            >
              {{ lang.name }}
            </button>
          </div>
        </div>

        <!-- Currency Selection -->
        <div>
          <h3 class="font-semibold text-slate-200 mb-3">
            {{ $t("languageCurrencyModal.currency") }}
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <button
              v-for="currency in currencies"
              :key="currency.name"
              :class="[
                'p-3 rounded-lg transition-all duration-200 border-2',
                selectedCurrency === currency.name
                  ? 'bg-amber-400/90 text-slate-900 border-amber-400/90 font-bold shadow-lg shadow-amber-500/30'
                  : 'bg-slate-700/50 border-slate-600/50 hover:bg-slate-600/50 hover:border-slate-500/50',
              ]"
              @click="selectedCurrency = currency.name"
            >
              {{ currency.name }}
            </button>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end">
        <button
          class="px-6 py-2 text-sm font-bold text-slate-900 bg-gradient-to-r from-amber-400 to-orange-500 hover:scale-105 rounded-lg transition-transform"
          @click="applyChanges"
        >
          {{ $t("languageCurrencyModal.apply") }}
        </button>
      </div>
    </template>
  </BaseModal>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useApi } from "~/composables/useApi";
import BaseModal from "./BaseModal.vue";

const props = defineProps({
  show: Boolean,
  initialLanguage: String,
  initialCurrency: String,
});

const emit = defineEmits(["close", "change"]);

const { locale, t } = useI18n();
const setLocale = useI18n().setLocale;

const selectedLanguage = ref(props.initialLanguage);
const selectedCurrency = ref(props.initialCurrency);
const currencies = ref([]);

const availableLanguages = [
  { code: "en", name: "English" },
  { code: "zh-CN", name: "简体中文" },
  { code: "zh-TW", name: "繁體中文" },
  { code: "ja", name: "日本語" },
  { code: "ko", name: "한국어" },
  { code: "id", name: "Bahasa Indonesia" },
];

const { data: currencyData } = useApi("/app/channel/getCurrency");
currencies.value = currencyData.value?.data || [];

const setLanguage = (langCode) => {
  selectedLanguage.value = langCode;
};

const applyChanges = () => {
  setLocale(selectedLanguage.value);
  emit("change", {
    language: selectedLanguage.value,
    currency: selectedCurrency.value,
  });
  emit("close");
};

onMounted(() => {
  selectedLanguage.value = props.initialLanguage;
  selectedCurrency.value = props.initialCurrency;
});
</script>
