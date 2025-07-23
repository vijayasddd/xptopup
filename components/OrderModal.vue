<template>
  <BaseModal
    :show="show"
    title="Confirm Order"
    size="md"
    @close="$emit('close')"
  >
    <div class="space-y-4">
      <div class="bg-slate-700/50 rounded-lg p-4">
        <h3 class="font-semibold text-white mb-3">Order Details</h3>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between">
            <span class="text-slate-300">Game:</span>
            <span class="text-white">Honkai: Star Rail</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-300">Server:</span>
            <span class="text-white">{{ selectedServer }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-300">UID:</span>
            <span class="text-white">{{ uid }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-300">Product:</span>
            <span class="text-white">{{ selectedProduct?.name }}</span>
          </div>
          <div class="flex justify-between font-semibold">
            <span class="text-slate-300">Total:</span>
            <span class="text-amber-400">${{ selectedProduct?.price }}</span>
          </div>
        </div>
      </div>

      <div class="bg-slate-700/50 rounded-lg p-4">
        <h3 class="font-semibold text-white mb-3">Payment Method</h3>
        <div class="space-y-2">
          <label class="flex items-center space-x-3 cursor-pointer">
            <input
              v-model="selectedPayment"
              type="radio"
              name="payment"
              value="paypal"
              class="text-cyan-500"
            />
            <Icon name="logos:paypal" class="h-6 w-6" />
            <span class="text-white">PayPal</span>
          </label>
          <label class="flex items-center space-x-3 cursor-pointer">
            <input
              v-model="selectedPayment"
              type="radio"
              name="payment"
              value="card"
              class="text-cyan-500"
            />
            <Icon name="heroicons:credit-card" class="h-6 w-6 text-slate-400" />
            <span class="text-white">Credit/Debit Card</span>
          </label>
          <label class="flex items-center space-x-3 cursor-pointer">
            <input
              v-model="selectedPayment"
              type="radio"
              name="payment"
              value="razer"
              class="text-cyan-500"
            />
            <Icon name="heroicons:banknotes" class="h-6 w-6 text-slate-400" />
            <span class="text-white">Razer Gold</span>
          </label>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="flex space-x-3">
        <button
          class="flex-1 bg-slate-600 hover:bg-slate-500 text-white font-medium py-3 rounded-lg transition-colors"
          @click="$emit('close')"
        >
          Cancel
        </button>
        <button
          :disabled="!selectedPayment"
          class="flex-1 bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-colors"
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
