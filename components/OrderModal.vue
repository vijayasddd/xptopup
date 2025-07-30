<template>
  <BaseModal
    :show="show"
    title="Confirm Order"
    size="md"
    @close="$emit('close')"
  >
    <div class="space-y-4">
      <div
        class="bg-gradient-to-br from-slate-700/60 via-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-lg p-4 border border-slate-600/30 shadow-lg"
      >
        <h3 class="font-semibold text-white mb-3 drop-shadow-lg">
          Order Details
        </h3>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between">
            <span class="text-slate-200">Game:</span>
            <span class="text-white drop-shadow-md">Honkai: Star Rail</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-200">Server:</span>
            <span class="text-white drop-shadow-md">{{ selectedServer }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-200">UID:</span>
            <span class="text-white drop-shadow-md">{{ uid }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-200">Product:</span>
            <span class="text-white drop-shadow-md">{{
              selectedProduct?.name
            }}</span>
          </div>
          <div class="flex justify-between font-semibold">
            <span class="text-slate-200">Total:</span>
            <span class="text-amber-400 drop-shadow-lg"
              >${{ selectedProduct?.price }}</span
            >
          </div>
        </div>
      </div>

      <div
        class="bg-gradient-to-br from-slate-700/60 via-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-lg p-4 border border-slate-600/30 shadow-lg"
      >
        <h3 class="font-semibold text-white mb-3 drop-shadow-lg">
          Payment Method
        </h3>
        <div class="space-y-2">
          <label
            class="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-slate-600/20 transition-all duration-300"
          >
            <input
              v-model="selectedPayment"
              type="radio"
              name="payment"
              value="paypal"
              class="text-amber-500 focus:ring-amber-400"
            />
            <Icon name="logos:paypal" class="h-6 w-6" />
            <span class="text-white drop-shadow-md">PayPal</span>
          </label>
          <label
            class="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-slate-600/20 transition-all duration-300"
          >
            <input
              v-model="selectedPayment"
              type="radio"
              name="payment"
              value="card"
              class="text-amber-500 focus:ring-amber-400"
            />
            <Icon name="heroicons:credit-card" class="h-6 w-6 text-slate-300" />
            <span class="text-white drop-shadow-md">Credit/Debit Card</span>
          </label>
          <label
            class="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-slate-600/20 transition-all duration-300"
          >
            <input
              v-model="selectedPayment"
              type="radio"
              name="payment"
              value="razer"
              class="text-amber-500 focus:ring-amber-400"
            />
            <Icon name="heroicons:banknotes" class="h-6 w-6 text-slate-300" />
            <span class="text-white drop-shadow-md">Razer Gold</span>
          </label>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="flex space-x-3">
        <button
          class="flex-1 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-white font-medium py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm border border-slate-500/30"
          @click="$emit('close')"
        >
          Cancel
        </button>
        <button
          :disabled="!selectedPayment"
          class="flex-1 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-xl shadow-amber-500/30 hover:shadow-amber-400/50 hover:scale-105 border border-amber-400/30"
          @click="handleProcessOrder"
        >
          Proceed to Payment
        </button>
      </div>
    </template>
  </BaseModal>
</template>

<script setup>
import { ref } from "vue";
import BaseModal from "./BaseModal.vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  selectedServer: {
    type: String,
    default: "",
  },
  uid: {
    type: String,
    default: "",
  },
  selectedProduct: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(["close", "processOrder"]);

const selectedPayment = ref("");

const handleProcessOrder = () => {
  emit("processOrder", {
    server: props.selectedServer,
    uid: props.uid,
    product: props.selectedProduct,
    payment: selectedPayment.value,
  });
};
</script>
