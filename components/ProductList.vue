<template>
  <div>
    <div
      class="bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-purple-900/40 border border-blue-400/50 rounded-lg p-3 lg:p-4 mb-4 lg:mb-6 backdrop-blur-sm shadow-lg shadow-blue-500/10"
    >
      <h2 class="font-semibold text-white text-xs lg:text-sm drop-shadow-md">
        {{ $t("banner.bonus") }}
      </h2>
    </div>

    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-4"
    >
      <div
        v-for="product in products"
        :key="product.name"
        :class="[
          'bg-gradient-to-br from-indigo-900/60 via-slate-800/60 to-purple-900/60 backdrop-blur-sm rounded-lg p-2 lg:p-3 text-center cursor-pointer transition-all duration-300 border-2 relative overflow-hidden hover:scale-105 hover:shadow-xl',
          selectedProduct?.name === product.name
            ? 'border-amber-400/80 shadow-xl shadow-amber-500/30 scale-105'
            : 'border-slate-600/50 hover:border-blue-400/50 hover:shadow-blue-500/20',
        ]"
        :style="{
          backgroundImage:
            'url(https://shop.ldrescdn.com/web_shop/static/sku-bg.Db9XNylV.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }"
        @click="emit('update:selectedProduct', product)"
      >
        <!-- 背景遮罩层 -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-indigo-950/70 via-slate-900/70 to-purple-950/70"
        />

        <!-- 内容层 -->
        <div class="relative z-10">
          <div class="relative">
            <!-- 固定尺寸的图片容器 -->
            <div
              class="w-full h-16 lg:h-24 mb-2 lg:mb-3 flex items-center justify-center bg-slate-700/30 rounded-md border border-slate-600/30"
            >
              <img
                src="/hsrlogo.png"
                :alt="product.name"
                class="max-w-full max-h-full object-contain rounded-md drop-shadow-lg"
              />
            </div>
          </div>
          <!-- 固定2行高度的商品名称 -->
          <h3
            class="font-semibold text-xs lg:text-sm text-white h-8 lg:h-10 flex items-start leading-4 lg:leading-5 mb-1 lg:mb-2 drop-shadow-md"
          >
            <span class="line-clamp-2">{{ product.name }}</span>
          </h3>
          <p
            class="text-amber-400 font-bold text-xs lg:text-base mt-1 drop-shadow-lg"
          >
            ${{ product.price }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";

defineProps({
  products: {
    type: Object,
    required: true,
  },
  selectedProduct: {
    type: Object,
    required: false,
    default: null,
  },
});

const emit = defineEmits(["update:selectedProduct"]);
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
