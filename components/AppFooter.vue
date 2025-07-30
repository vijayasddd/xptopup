<template>
  <footer
    class="bg-gradient-to-r from-indigo-900/80 via-slate-800/80 to-purple-900/80 backdrop-blur-md border-t border-amber-400/30 mt-8 lg:mt-16 relative overflow-hidden shadow-2xl shadow-purple-900/20"
  >
    <!-- 背景装饰元素 -->
    <div
      class="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full -translate-y-16 blur-xl"
    />
    <div
      class="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-tl from-blue-400/20 to-purple-500/20 rounded-full translate-y-20 blur-xl"
    />

    <div class="container mx-auto px-3 lg:px-8 py-6 lg:py-12 relative z-10">
      <!-- 移动端布局 -->
      <div class="lg:hidden space-y-8">
        <!-- 品牌信息 -->
        <div>
          <div class="flex items-center justify-center mb-4">
            <img
              src="/hsrlogo.png"
              alt="Logo"
              class="h-16 rounded-sm w-auto drop-shadow-lg"
            />
          </div>
          <p class="text-sm text-slate-200 mb-6 leading-relaxed">
            {{ $t("footer.description") }}
          </p>

          <!-- 社交媒体链接 -->
          <div class="flex space-x-4">
            <a href="#" class="group">
              <div
                class="w-10 h-10 bg-slate-700/50 hover:bg-blue-500/30 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/30 group-hover:scale-110 backdrop-blur-sm border border-slate-600/30"
              >
                <Icon
                  name="fa-brands:twitter"
                  class="h-5 w-5 text-slate-300 group-hover:text-blue-300"
                />
              </div>
            </a>
            <a href="#" class="group">
              <div
                class="w-10 h-10 bg-slate-700/50 hover:bg-purple-500/30 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/30 group-hover:scale-110 backdrop-blur-sm border border-slate-600/30"
              >
                <Icon
                  name="fa-brands:discord"
                  class="h-5 w-5 text-slate-300 group-hover:text-purple-300"
                />
              </div>
            </a>
            <a href="#" class="group">
              <div
                class="w-10 h-10 bg-slate-700/50 hover:bg-red-500/30 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/30 group-hover:scale-110 backdrop-blur-sm border border-slate-600/30"
              >
                <Icon
                  name="fa-brands:youtube"
                  class="h-5 w-5 text-slate-300 group-hover:text-red-300"
                />
              </div>
            </a>
            <a href="#" class="group">
              <div
                class="w-10 h-10 bg-slate-700/50 hover:bg-pink-500/30 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-pink-500/30 group-hover:scale-110 backdrop-blur-sm border border-slate-600/30"
              >
                <Icon
                  name="fa-brands:instagram"
                  class="h-5 w-5 text-slate-300 group-hover:text-pink-300"
                />
              </div>
            </a>
          </div>
        </div>

        <!-- Support 和 Legal 并排 -->
        <div class="grid grid-cols-2 gap-6">
          <!-- 支持 -->
          <div class="text-center lg:text-left">
            <h4
              class="font-bold text-white mb-3 justify-center lg:justify-normal text-sm flex items-center drop-shadow-md"
            >
              <Icon
                name="heroicons:lifebuoy"
                class="h-4 w-4 text-blue-400 mr-2 flex-shrink-0"
              />
              {{ $t("footer.support") }}
            </h4>
            <ul class="space-y-2 text-xs">
              <li>
                <a
                  href="#"
                  class="text-slate-300 hover:text-blue-300 transition-colors"
                >
                  {{ $t("footer.supportLinks.helpCenter") }}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-slate-300 hover:text-blue-300 transition-colors"
                >
                  {{ $t("footer.supportLinks.contactUs") }}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-slate-300 hover:text-blue-300 transition-colors"
                >
                  {{ $t("footer.supportLinks.liveChat") }}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-slate-300 hover:text-blue-300 transition-colors"
                >
                  {{ $t("footer.supportLinks.orderStatus") }}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-slate-300 hover:text-blue-300 transition-colors"
                >
                  {{ $t("footer.supportLinks.refundPolicy") }}
                </a>
              </li>
            </ul>
          </div>

          <!-- 法律与安全 -->
          <div class="text-center lg:text-left">
            <h4
              class="font-bold text-white mb-3 text-sm justify-center lg:justify-normal flex items-center drop-shadow-md"
            >
              <Icon
                name="heroicons:shield-check"
                class="h-4 w-4 text-amber-400 mr-2 flex-shrink-0"
              />
              {{ $t("footer.legal") }}
            </h4>
            <ul class="space-y-2 text-xs">
              <li>
                <a
                  href="#"
                  class="text-slate-300 hover:text-amber-300 transition-colors"
                >
                  {{ $t("footer.legalLinks.termsOfService") }}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-slate-300 hover:text-amber-300 transition-colors"
                >
                  {{ $t("footer.legalLinks.privacyPolicy") }}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-slate-300 hover:text-amber-300 transition-colors"
                >
                  {{ $t("footer.legalLinks.cookiePolicy") }}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-slate-300 hover:text-amber-300 transition-colors"
                >
                  {{ $t("footer.legalLinks.securityCenter") }}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-slate-300 hover:text-amber-300 transition-colors"
                >
                  {{ $t("footer.legalLinks.trustSafety") }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- PC端布局 -->
      <div class="hidden lg:flex justify-between">
        <!-- 品牌信息 -->
        <div class="lg:max-w-[500px]">
          <div class="flex items-center mb-6">
            <img
              src="/hsrlogo.png"
              alt="Logo"
              class="h-20 w-auto drop-shadow-lg"
            />
          </div>
          <p class="text-base text-slate-200 mb-6 leading-relaxed">
            {{ $t("footer.description") }}
          </p>

          <!-- 社交媒体链接 -->
          <div class="flex space-x-4">
            <a href="#" class="group">
              <div
                class="w-10 h-10 bg-slate-700/50 hover:bg-blue-500/30 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/30 group-hover:scale-110 backdrop-blur-sm border border-slate-600/30"
              >
                <Icon
                  name="fa-brands:twitter"
                  class="h-5 w-5 text-slate-300 group-hover:text-blue-300"
                />
              </div>
            </a>
            <a href="#" class="group">
              <div
                class="w-10 h-10 bg-slate-700/50 hover:bg-purple-500/30 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/30 group-hover:scale-110 backdrop-blur-sm border border-slate-600/30"
              >
                <Icon
                  name="fa-brands:discord"
                  class="h-5 w-5 text-slate-300 group-hover:text-purple-300"
                />
              </div>
            </a>
            <a href="#" class="group">
              <div
                class="w-10 h-10 bg-slate-700/50 hover:bg-red-500/30 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/30 group-hover:scale-110 backdrop-blur-sm border border-slate-600/30"
              >
                <Icon
                  name="fa-brands:youtube"
                  class="h-5 w-5 text-slate-300 group-hover:text-red-300"
                />
              </div>
            </a>
            <a href="#" class="group">
              <div
                class="w-10 h-10 bg-slate-700/50 hover:bg-pink-500/30 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-pink-500/30 group-hover:scale-110 backdrop-blur-sm border border-slate-600/30"
              >
                <Icon
                  name="fa-brands:instagram"
                  class="h-5 w-5 text-slate-300 group-hover:text-pink-300"
                />
              </div>
            </a>
          </div>
        </div>

        <!-- Support 和 Legal 右侧并排 -->
        <div class="grid grid-cols-2 gap-8 lg:gap-20">
          <!-- 支持 -->
          <div>
            <h4
              class="font-bold text-white mb-4 text-base flex items-center drop-shadow-md"
            >
              <Icon
                name="heroicons:lifebuoy"
                class="h-5 w-5 text-blue-400 mr-2 flex-shrink-0"
              />
              Support
            </h4>
            <ul class="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  class="text-slate-300 hover:text-blue-300 transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-slate-300 hover:text-blue-300 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-slate-300 hover:text-blue-300 transition-colors"
                >
                  Live Chat
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-slate-300 hover:text-blue-300 transition-colors"
                >
                  Order Status
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-slate-300 hover:text-blue-300 transition-colors"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          <!-- 法律与安全 -->
          <div>
            <h4
              class="font-bold text-white mb-4 text-base flex items-center drop-shadow-md"
            >
              <Icon
                name="heroicons:shield-check"
                class="h-5 w-5 text-amber-400 mr-2 flex-shrink-0"
              />
              Legal
            </h4>
            <ul class="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  class="text-slate-300 hover:text-amber-300 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-slate-300 hover:text-amber-300 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-slate-300 hover:text-amber-300 transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-slate-300 hover:text-amber-300 transition-colors"
                >
                  Security Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-slate-300 hover:text-amber-300 transition-colors"
                >
                  Trust & Safety
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 支付方式 -->
      <div class="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-slate-600/50">
        <div
          class="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0"
        >
          <!-- 支付方式 -->
          <div class="text-center lg:text-left">
            <h5
              class="text-sm font-medium text-slate-200 mb-3 flex items-center justify-center lg:justify-start drop-shadow-md"
            >
              <Icon
                name="heroicons:credit-card"
                class="h-4 w-4 text-emerald-400 mr-2"
              />
              {{ $t("footer.paymentMethods") }}
            </h5>
            <div class="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div
                class="bg-slate-700/40 hover:bg-slate-600/60 rounded-lg p-2 lg:p-3 transition-all duration-300 border border-slate-600/40 hover:border-slate-500/60 backdrop-blur-sm hover:scale-105 shadow-lg"
              >
                <Icon
                  name="fa-brands:paypal"
                  class="h-5 w-5 lg:h-6 lg:w-6 text-blue-400"
                />
              </div>
              <div
                class="bg-slate-700/40 hover:bg-slate-600/60 rounded-lg p-2 lg:p-3 transition-all duration-300 border border-slate-600/40 hover:border-slate-500/60 backdrop-blur-sm hover:scale-105 shadow-lg"
              >
                <Icon
                  name="fa-brands:cc-visa"
                  class="h-5 w-5 lg:h-6 lg:w-6 text-blue-600"
                />
              </div>
              <div
                class="bg-slate-700/40 hover:bg-slate-600/60 rounded-lg p-2 lg:p-3 transition-all duration-300 border border-slate-600/40 hover:border-slate-500/60 backdrop-blur-sm hover:scale-105 shadow-lg"
              >
                <Icon
                  name="fa-brands:cc-mastercard"
                  class="h-5 w-5 lg:h-6 lg:w-6 text-red-500"
                />
              </div>
              <div
                class="bg-slate-700/40 hover:bg-slate-600/60 rounded-lg p-2 lg:p-3 transition-all duration-300 border border-slate-600/40 hover:border-slate-500/60 backdrop-blur-sm hover:scale-105 shadow-lg"
              >
                <Icon
                  name="fa-brands:google-pay"
                  class="h-5 w-5 lg:h-6 lg:w-6 text-gray-300"
                />
              </div>
              <div
                class="bg-slate-700/40 hover:bg-slate-600/60 rounded-lg p-2 lg:p-3 transition-all duration-300 border border-slate-600/40 hover:border-slate-500/60 backdrop-blur-sm hover:scale-105 shadow-lg"
              >
                <Icon
                  name="fa-brands:apple-pay"
                  class="h-5 w-5 lg:h-6 lg:w-6 text-gray-300"
                />
              </div>
            </div>
          </div>

          <!-- 统计信息 -->
          <div
            class="flex items-center justify-center lg:justify-end space-x-6 lg:space-x-8"
          >
            <div class="text-center">
              <p
                class="text-lg lg:text-xl font-bold text-blue-400 drop-shadow-lg"
              >
                1M+
              </p>
              <p class="text-xs text-slate-300">
                {{ $t("footer.stats.happyCustomers") }}
              </p>
            </div>
            <div class="text-center">
              <p
                class="text-lg lg:text-xl font-bold text-purple-400 drop-shadow-lg"
              >
                24/7
              </p>
              <p class="text-xs text-slate-300">
                {{ $t("footer.stats.support247") }}
              </p>
            </div>
            <div class="text-center">
              <p
                class="text-lg lg:text-xl font-bold text-amber-400 drop-shadow-lg"
              >
                99.9%
              </p>
              <p class="text-xs text-slate-300">
                {{ $t("footer.stats.uptime") }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 版权信息 -->
      <div class="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-slate-600/50">
        <div class="text-center">
          <p class="text-xs lg:text-sm text-slate-300">
            &copy; {{ new Date().getFullYear() }}
            {{ $t("footer.copyright") }}
          </p>
          <p class="text-xs text-slate-400 mt-1">
            {{ $t("footer.disclaimer") }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup></script>
