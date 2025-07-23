<template>
  <div
    :class="[
      'bg-slate-800 rounded-xl p-6 border border-slate-700',
      isMobile ? '' : 'sticky top-28',
    ]"
  >
    <div>
      <label
        :for="isMobile ? 'server-mobile' : 'server'"
        class="block text-sm font-medium text-slate-300 mb-2"
        >1. Select your server</label
      >
      <select
        :id="isMobile ? 'server-mobile' : 'server'"
        :value="selectedServer"
        @input="$emit('update:selectedServer', $event.target.value)"
        class="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
      >
        <option>America</option>
        <option>Europe</option>
        <option>Asia</option>
        <option>TW, HK, MO</option>
      </select>
    </div>

    <div class="mt-6">
      <label
        :for="isMobile ? 'uid-mobile' : 'uid'"
        class="block text-sm font-medium text-slate-300 mb-2"
        >2. Enter your UID</label
      >
      <input
        type="text"
        :id="isMobile ? 'uid-mobile' : 'uid'"
        :value="uid"
        @input="$emit('update:uid', $event.target.value)"
        placeholder="Enter your User ID (UID)"
        class="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition placeholder-slate-500"
      />
    </div>

    <div class="mt-8 pt-6 border-t border-slate-700">
      <h3 class="text-lg font-semibold text-white">Order Summary</h3>
      <div v-if="selectedProduct" class="mt-4 space-y-3">
        <div class="flex justify-between text-sm">
          <span class="text-slate-300">{{ selectedProduct.name }}</span>
          <span class="font-medium text-white"
            >${{ selectedProduct.price }}</span
          >
        </div>
        <div class="flex justify-between text-sm text-slate-300">
          <span>Service Fee</span>
          <span>$0.00</span>
        </div>
      </div>
      <div v-else class="mt-4 text-center text-slate-400 text-sm py-8">
        <p>Please select a product</p>
      </div>

      <div class="mt-6 flex justify-between items-center">
        <span class="text-xl font-bold text-white">Total</span>
        <span class="text-2xl font-bold text-amber-400"
          >${{ selectedProduct ? selectedProduct.price : "0.00" }}</span
        >
      </div>
    </div>

    <div class="mt-8">
      <button
        @click="$emit('showOrderModal')"
        :disabled="!selectedProduct || !uid || !selectedServer"
        class="w-full bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg text-lg transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 flex items-center justify-center space-x-2"
      >
        <span>Top Up Now</span>
        <Icon name="heroicons:arrow-right" class="w-6 h-6" />
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  selectedProduct: {
    type: Object,
    default: null,
  },
  selectedServer: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
  isMobile: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["update:selectedServer", "update:uid", "showOrderModal"]);
</script>
