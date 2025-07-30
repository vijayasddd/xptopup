<template>
  <div
    class="bg-gradient-to-br from-indigo-900/60 via-slate-800/60 to-purple-900/60 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-amber-400/30 relative overflow-hidden shadow-2xl shadow-purple-900/20"
  >
    <!-- 背景装饰元素 -->
    <div
      class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full -translate-y-16 translate-x-16 blur-xl"
    />
    <div
      class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400/20 to-purple-500/20 rounded-full translate-y-12 -translate-x-12 blur-xl"
    />

    <!-- 合并后的布局 - 替换原来的两个布局 -->
    <div class="relative z-10">
      <div
        class="flex items-start space-x-3 lg:space-x-4 lg:space-x-6 mb-3 lg:mb-0"
      >
        <img
          src="https://shop.ldrescdn.com/rms/ld-space/process/img/5ba76fd6bcce49d5a3f9e97c2c64b1691737079512.webp"
          alt="Honkai Star Rail Icon"
          class="w-[90px] h-[90px] lg:w-20 lg:h-20 lg:w-28 lg:h-28 rounded-lg border-2 border-amber-400/70 shadow-xl shadow-amber-500/30"
        />

        <div class="flex-1 min-w-0">
          <!-- 标题和星级区域 - 复用 -->
          <div
            class="flex flex-col lg:flex-row lg:items-center lg:space-x-3 mb-1 lg:mb-2"
          >
            <h1
              class="text-lg lg:text-xl lg:text-2xl font-bold text-white mb-1 lg:mb-0 drop-shadow-lg"
            >
              {{ goods.name }}
            </h1>
            <div class="flex items-center space-x-1">
              <Icon
                v-for="i in 5"
                :key="i"
                name="heroicons:star-solid"
                class="h-3 w-3 lg:h-4 lg:w-4 text-amber-400 drop-shadow-lg"
              />
            </div>
          </div>

          <!-- 描述文字 - 复用 -->
          <p
            class="text-xs lg:text-xs lg:text-sm text-amber-300 leading-5 lg:leading-normal font-medium mb-2 lg:mb-3 drop-shadow-md"
          >
            {{ goods.description }}
          </p>

          <!-- PC端标签 - 只在PC端显示 -->
          <div class="hidden lg:flex lg:flex-wrap lg:gap-2 lg:gap-3">
            <span
              class="inline-flex items-center space-x-1 px-3 py-1.5 bg-emerald-500/20 text-emerald-300 text-xs lg:text-sm rounded-full border border-emerald-400/40 backdrop-blur-sm shadow-lg"
            >
              <Icon name="heroicons:shield-check" class="h-3 w-3" />
              <span>{{ $t("hero.byHoyoverse") }}</span>
            </span>
            <span
              class="inline-flex items-center space-x-1 px-3 py-1.5 bg-blue-500/20 text-blue-300 text-xs lg:text-sm rounded-full border border-blue-400/40 backdrop-blur-sm shadow-lg"
            >
              <Icon name="heroicons:bolt" class="h-3 w-3" />
              <span>{{ $t("hero.instantDelivery") }}</span>
            </span>
            <span
              class="inline-flex items-center space-x-1 px-3 py-1.5 bg-amber-500/20 text-amber-300 text-xs lg:text-sm rounded-full border border-amber-400/40 backdrop-blur-sm shadow-lg"
            >
              <Icon name="heroicons:trophy" class="h-3 w-3" />
              <span>{{ $t("hero.officialVerified") }}</span>
            </span>
          </div>
        </div>
      </div>

      <!-- 移动端标签 - 只在移动端显示 -->
      <div class="flex flex-nowrap lg:hidden gap-1 whitespace-nowrap">
        <span
          class="inline-flex items-center space-x-1 px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full border border-emerald-400/40 backdrop-blur-sm"
        >
          <Icon name="heroicons:shield-check" class="h-2.5 w-2.5" />
          <span>{{ $t("hero.byHoyoverse") }}</span>
        </span>
        <span
          class="inline-flex items-center space-x-1 px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-400/40 backdrop-blur-sm"
        >
          <Icon name="heroicons:bolt" class="h-2.5 w-2.5" />
          <span>{{ $t("hero.instantDelivery") }}</span>
        </span>
        <span
          class="inline-flex items-center space-x-1 px-2 py-1 bg-amber-500/20 text-amber-300 text-xs rounded-full border border-amber-400/40 backdrop-blur-sm"
        >
          <Icon name="heroicons:trophy" class="h-2.5 w-2.5" />
          <span>{{ $t("hero.verified") }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  goods: {
    type: Object,
    required: true,
  },
});
</script>
