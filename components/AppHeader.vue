<template>
  <header
    class="bg-gradient-to-r from-indigo-900/80 via-slate-800/80 to-purple-900/80 backdrop-blur-md border-b border-amber-400/30 sticky top-0 z-50 shadow-lg shadow-amber-500/10"
  >
    <nav
      class="container mx-auto px-3 lg:px-8 flex items-center justify-between h-16 lg:h-20"
    >
      <div class="flex items-center space-x-8">
        <div class="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            class="h-14 lg:h-20 w-auto drop-shadow-lg"
          />
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <!-- 语言货币选择 -->
        <div class="flex items-center">
          <button
            class="flex items-center space-x-1 text-xs lg:text-sm text-slate-300 hover:text-amber-300 transition-all duration-300"
            @click="emit('showLanguageCurrencyModal')"
          >
            <Icon
              name="heroicons:language"
              class="h-3 w-3 lg:h-5 lg:w-5 text-amber-400"
            />
            <span>{{ currentLanguage.toUpperCase() }}</span
            ><span>/</span><span>{{ currentCurrency }}</span>
            <Icon name="heroicons:chevron-down" class="h-2 w-2 lg:h-4 lg:w-4" />
          </button>
        </div>

        <!-- 登录和订单 -->
        <div class="flex items-center space-x-2 lg:space-x-4">
          <!-- 未登录时显示登录按钮 -->
          <button
            v-if="!isLoggedIn"
            class="flex items-center space-x-1 lg:space-x-2 text-white px-2 py-1 lg:px-3 lg:py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/25 hover:scale-105"
            style="
              background: linear-gradient(
                135deg,
                rgb(251, 191, 36) 0%,
                rgb(245, 158, 11) 50%,
                rgb(217, 119, 6) 100%
              );
            "
            @click="emit('showAuthModal')"
          >
            <Icon name="heroicons:user-circle" class="h-3 w-3 lg:h-5 lg:w-5" />
            <span>{{ $t("header.login") }}</span>
          </button>

          <!-- 已登录时显示订单按钮 -->
          <button
            v-else
            class="flex items-center space-x-1 lg:space-x-2 text-white px-2 py-1 lg:px-3 lg:py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-all duration-300 hover:shadow-xl hover:shadow-blue-400/25 hover:scale-105"
            style="
              background: linear-gradient(
                135deg,
                rgb(59, 130, 246) 0%,
                rgb(147, 51, 234) 50%,
                rgb(168, 85, 247) 100%
              );
            "
            @click="emit('showOrderListModal')"
          >
            <Icon
              name="heroicons:clipboard-document-list"
              class="h-3 w-3 lg:h-5 lg:w-5"
            />
            <span>{{ $t("header.orders") }}</span>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
defineProps({
  currentLanguage: {
    type: String,
    required: true,
  },
  currentCurrency: {
    type: String,
    required: true,
  },
  isLoggedIn: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits([
  "showLanguageCurrencyModal",
  "showAuthModal",
  "showOrderListModal",
]);
</script>
