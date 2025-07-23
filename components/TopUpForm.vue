<template>
  <div
    :class="[
      'bg-gradient-to-br from-indigo-900/60 via-slate-800/60 to-purple-900/60 backdrop-blur-sm rounded-xl p-6 border border-amber-400/30 shadow-xl shadow-purple-900/20',
      isMobile ? '' : 'sticky top-28',
    ]"
  >
    <div>
      <label
        :for="isMobile ? 'server-mobile' : 'server'"
        class="block text-sm font-medium text-slate-200 mb-2 drop-shadow-md"
        >1. Select your server</label
      >
      <select
        :id="isMobile ? 'server-mobile' : 'server'"
        :value="selectedServer"
        @input="$emit('update:selectedServer', $event.target.value)"
        class="w-full bg-slate-700/60 backdrop-blur-sm border border-slate-600/50 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400/50 transition-all duration-300 text-white shadow-lg hover:border-blue-400/50"
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
        class="block text-sm font-medium text-slate-200 mb-2 drop-shadow-md"
        >2. Enter your UID</label
      >
      <input
        type="text"
        :id="isMobile ? 'uid-mobile' : 'uid'"
        :value="uid"
        @input="$emit('update:uid', $event.target.value)"
        placeholder="Enter your User ID (UID)"
        class="w-full bg-slate-700/60 backdrop-blur-sm border border-slate-600/50 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400/50 transition-all duration-300 placeholder-slate-400 text-white shadow-lg hover:border-blue-400/50"
      />
    </div>

    <div class="mt-8 pt-6 border-t border-slate-600/50">
      <h3 class="text-lg font-semibold text-white drop-shadow-lg">
        Order Summary
      </h3>
      <div v-if="selectedProduct" class="mt-4 space-y-3">
        <div class="flex justify-between text-sm">
          <span class="text-slate-200">{{ selectedProduct.name }}</span>
          <span class="font-medium text-white drop-shadow-md"
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
        <span class="text-xl font-bold text-white drop-shadow-lg">Total</span>
        <span class="text-2xl font-bold text-amber-400 drop-shadow-lg"
          >${{ selectedProduct ? selectedProduct.price : "0.00" }}</span
        >
      </div>
    </div>

    <div class="mt-8">
      <button
        @click="$emit('showOrderModal')"
        class="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold py-4 rounded-lg text-lg transition-all duration-300 shadow-xl shadow-amber-500/30 hover:shadow-amber-400/50 hover:scale-105 flex items-center justify-center space-x-2 backdrop-blur-sm border border-amber-400/30"
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
