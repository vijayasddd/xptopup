<template>
  <div
    class="bg-gradient-to-br from-indigo-900/70 via-slate-800/70 to-purple-900/70 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-amber-400/30 shadow-2xl shadow-purple-900/20 sticky top-24"
  >
    <div class="space-y-3 lg:space-y-4">
      <div>
        <label
          class="font-semibold text-xs lg:text-sm text-slate-200 mb-1 block"
          >1. {{ $t("form.selectServer") }}</label
        >
        <div class="grid grid-cols-2 gap-2 text-xs lg:text-sm">
          <button
            v-for="server in servers"
            :key="server"
            :class="[
              'px-3 py-2 rounded-lg transition-all duration-200 border-2',
              selectedServer === server
                ? 'bg-amber-400/90 text-slate-900 border-amber-400/90 font-bold shadow-lg shadow-amber-500/30'
                : 'bg-slate-700/50 border-slate-600/50 hover:bg-slate-600/50 hover:border-slate-500/50',
            ]"
            @click="emit('update:selectedServer', server)"
          >
            {{ server }}
          </button>
        </div>
      </div>
      <div>
        <label
          for="uid"
          class="font-semibold text-xs lg:text-sm text-slate-200 mb-1 block"
          >2. {{ $t("form.enterUID") }}</label
        >
        <input
          id="uid"
          type="text"
          :value="uid"
          class="w-full bg-slate-700/50 border-2 border-slate-600/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors"
          :placeholder="$t('form.uidPlaceholder')"
          @input="emit('update:uid', $event.target.value)"
        />
      </div>
      <div>
        <label
          class="font-semibold text-xs lg:text-sm text-slate-200 mb-1 block"
          >3. {{ $t("form.selectProduct") }}</label
        >
        <div
          v-if="selectedProduct"
          class="bg-slate-700/50 border-2 border-slate-600/50 rounded-lg p-2 flex items-center justify-between"
        >
          <div class="text-left">
            <p class="text-xs lg:text-sm font-semibold text-white">
              {{ selectedProduct.name }}
            </p>
            <p class="text-xs text-amber-300">{{ selectedProduct.bonus }}</p>
          </div>
          <p class="text-base lg:text-lg font-bold text-amber-400">
            ${{ selectedProduct.price }}
          </p>
        </div>
        <div
          v-else
          class="bg-slate-700/50 border-2 border-slate-600/50 rounded-lg p-3 text-center"
        >
          <p class="text-sm text-slate-400">{{ $t("form.noProduct") }}</p>
        </div>
      </div>
      <button
        class="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold px-4 py-3 rounded-lg text-sm lg:text-base hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300"
        :disabled="!uid || !selectedProduct || loading"
        @click="validateAndProceed"
      >
        <div v-if="loading" class="animate-spin">
          <Icon name="heroicons:arrow-path" class="h-5 w-5" />
        </div>
        <span v-else>{{ $t("form.topUpNow") }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useApi } from "~/composables/useApi";

const props = defineProps({
  selectedServer: String,
  uid: String,
  selectedProduct: Object,
  isMobile: Boolean,
});

const emit = defineEmits([
  "update:selectedServer",
  "update:uid",
  "showOrderModal",
]);

const servers = ["America", "Europe", "Asia", "TW, HK, MO"];
const loading = ref(false);

const validateAndProceed = async () => {
  if (!props.uid || !props.selectedProduct) return;

  loading.value = true;
  try {
    const { data, error } = await useApi("/app/goods/validateRechargeAccount", {
      method: "POST",
      body: {
        goodsId: props.selectedProduct.id,
        account: props.uid,
      },
    });

    if (error.value || data.value?.code !== 200) {
      // Handle error, e.g., show a notification
      console.error("Validation failed:", error.value || data.value?.message);
      return;
    }

    if (data.value.data.isValid) {
      emit("showOrderModal");
    } else {
      // Handle invalid account, e.g., show a notification
      console.error("Account is invalid");
    }
  } catch (err) {
    console.error("An unexpected error occurred:", err);
  } finally {
    loading.value = false;
  }
};
</script>
