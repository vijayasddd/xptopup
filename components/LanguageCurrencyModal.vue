<template>
  <BaseModal
    :show="show"
    :title="$t('languageCurrency.title')"
    size="sm"
    @close="$emit('close')"
  >
    <div class="space-y-6">
      <!-- Language Selection -->
      <div>
        <label
          class="block text-sm font-medium text-slate-200 mb-2 drop-shadow-md"
        >
          <Icon
            name="heroicons:language"
            class="h-4 w-4 inline mr-2 text-amber-400"
          />
          {{ $t("languageCurrency.language") }}
        </label>
        <select
          v-model="selectedLanguage"
          class="w-full bg-slate-700/60 backdrop-blur-sm border border-slate-600/50 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400/50 transition-all duration-300 text-white shadow-lg hover:border-blue-400/50"
        >
          <option
            v-for="locale in availableLocales"
            :key="locale.code"
            :value="locale.code"
            class="bg-slate-700 text-white"
          >
            {{ locale.flag }} {{ locale.name }}
          </option>
        </select>
      </div>

      <!-- Currency Selection -->
      <div>
        <label
          class="block text-sm font-medium text-slate-200 mb-2 drop-shadow-md"
        >
          <Icon
            name="heroicons:currency-dollar"
            class="h-4 w-4 inline mr-2 text-amber-400"
          />
          {{ $t("languageCurrency.currency") }}
        </label>
        <select
          v-model="selectedCurrency"
          class="w-full bg-slate-700/60 backdrop-blur-sm border border-slate-600/50 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400/50 transition-all duration-300 text-white shadow-lg hover:border-blue-400/50"
        >
          <option
            v-for="currency in currencies"
            :key="currency.code"
            :value="currency.code"
            class="bg-slate-700 text-white"
          >
            {{ currency.name }} ({{ currency.symbol }})
          </option>
        </select>
      </div>

      <!-- Preview Section -->
      <div
        class="bg-gradient-to-br from-slate-700/60 via-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-lg p-4 border border-amber-400/30 shadow-lg"
      >
        <h4 class="text-sm font-medium text-slate-200 mb-2 drop-shadow-md">
          Preview
        </h4>
        <div class="flex items-center justify-between">
          <span class="text-white drop-shadow-md">Selected Settings:</span>
          <span class="text-amber-400 font-medium drop-shadow-lg">
            {{ getLanguageName(selectedLanguage) }} / {{ selectedCurrency }}
          </span>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="flex lg:mt-6 mt-4 justify-end space-x-3">
        <button
          class="px-4 py-2 text-slate-300 hover:text-amber-300 transition-colors duration-300"
          @click="$emit('close')"
        >
          {{ $t("languageCurrency.cancel") }}
        </button>
        <button
          class="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white rounded-lg font-medium transition-all duration-300 shadow-xl shadow-amber-500/30 hover:shadow-amber-400/50 hover:scale-105 border border-amber-400/30"
          @click="applyChanges"
        >
          {{ $t("languageCurrency.save") }}
        </button>
      </div>
    </template>
  </BaseModal>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import BaseModal from "./BaseModal.vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  initialLanguage: {
    type: String,
    default: "en",
  },
  initialCurrency: {
    type: String,
    default: "USD",
  },
});

const emit = defineEmits(["close", "change"]);

const { locales, locale, setLocale } = useI18n();

const selectedLanguage = ref(props.initialLanguage);
const selectedCurrency = ref(props.initialCurrency);

const availableLocales = computed(() => locales.value);

const currencies = ref([
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
  { code: "CNY", symbol: "¥", name: "Chinese Yuan" },
  { code: "KRW", symbol: "₩", name: "Korean Won" },
  { code: "TWD", symbol: "NT$", name: "Taiwan Dollar" },
  { code: "IDR", symbol: "Rp", name: "Indonesian Rupiah" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar" },
  { code: "CHF", symbol: "CHF", name: "Swiss Franc" },
  { code: "SEK", symbol: "kr", name: "Swedish Krona" },
  { code: "SGD", symbol: "S$", name: "Singapore Dollar" },
  { code: "HKD", symbol: "HK$", name: "Hong Kong Dollar" },
]);

const getLanguageName = (code) => {
  const locale = availableLocales.value.find((l) => l.code === code);
  return locale ? `${locale.flag} ${locale.name}` : code.toUpperCase();
};

const applyChanges = async () => {
  // Update locale
  await setLocale(selectedLanguage.value);

  emit("change", {
    language: selectedLanguage.value,
    currency: selectedCurrency.value,
  });
  emit("close");
};

// 当弹窗显示时重置选择
watch(
  () => props.show,
  (newVal) => {
    if (newVal) {
      selectedLanguage.value = props.initialLanguage;
      selectedCurrency.value = props.initialCurrency;
    }
  }
);
</script>
