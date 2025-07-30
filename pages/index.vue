<template>
  <div
    class="antialiased bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-slate-100 font-sans relative min-h-screen"
  >
    <!-- 固定背景层 -->
    <div
      class="fixed inset-0 z-0"
      style="
        background-image: url('/background.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
      "
    />

    <!-- 毛玻璃遮罩层 -->
    <div
      class="fixed inset-0 z-10 backdrop-blur-sm bg-gradient-to-br from-indigo-950/90 via-slate-900/80 to-purple-950/90"
    />

    <!-- 原有内容，添加相对定位确保在背景之上 -->
    <div class="relative z-20">
      <AppHeader
        :current-language="currentLanguage"
        :current-currency="currentCurrency"
        :is-logged-in="isLoggedIn"
        @show-language-currency-modal="showLanguageCurrencyModal = true"
        @show-auth-modal="showAuthModal = true"
        @show-order-list-modal="showOrderListModal = true"
      />

      <main class="container mx-auto px-3 lg:px-8 py-4 lg:py-8">
        <div class="lg:grid lg:grid-cols-3 lg:gap-8">
          <div class="lg:col-span-2">
            <HeroSection :goods="goods" />

            <div class="mt-4">
              <ProductList
                :products="skus"
                :selected-product="selectedProduct"
                @update:selected-product="selectedProduct = $event"
              />
            </div>

            <!-- 移动端充值表单 - 只在小屏幕显示 -->
            <div class="mt-4 lg:hidden">
              <TopUpForm
                v-model:selected-server="selectedServer"
                v-model:uid="uid"
                :selected-product="selectedProduct"
                :is-mobile="true"
                @show-order-modal="showOrderModal = true"
              />
            </div>

            <div class="mt-6 lg:mt-12 space-y-4 lg:space-y-8">
              <ContentSection />
              <ReviewsSection :overview="reviewOverview" :reviews="reviews" />
            </div>
          </div>

          <!-- PC端充值表单 - 只在大屏幕显示 -->
          <div class="hidden lg:block lg:col-span-1">
            <TopUpForm
              v-model:selected-server="selectedServer"
              v-model:uid="uid"
              :selected-product="selectedProduct"
              :is-mobile="false"
              @show-order-modal="showOrderModal = true"
            />
          </div>
        </div>
      </main>

      <AppFooter />
    </div>

    <!-- 弹窗组件 -->
    <AuthModal
      :show="showAuthModal"
      @close="showAuthModal = false"
      @auth="handleAuth"
      @google-auth="handleGoogleAuth"
    />

    <LanguageCurrencyModal
      :show="showLanguageCurrencyModal"
      :initial-language="currentLanguage"
      :initial-currency="currentCurrency"
      @close="showLanguageCurrencyModal = false"
      @change="handleLanguageCurrencyChange"
    />

    <OrderModal
      :show="showOrderModal"
      :selected-server="selectedServer"
      :uid="uid"
      :selected-product="selectedProduct"
      @close="showOrderModal = false"
      @process-order="processOrder"
    />

    <OrderListModal
      :show="showOrderListModal"
      :order-history="orderHistory"
      @close="showOrderListModal = false"
    />
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useApi } from "~/composables/useApi";

// Components
import AppFooter from "~/components/AppFooter.vue";
import AppHeader from "~/components/AppHeader.vue";
import AuthModal from "~/components/AuthModal.vue";
import ContentSection from "~/components/ContentSection.vue";
import HeroSection from "~/components/HeroSection.vue";
import LanguageCurrencyModal from "~/components/LanguageCurrencyModal.vue";
import OrderListModal from "~/components/OrderListModal.vue";
import OrderModal from "~/components/OrderModal.vue";
import ProductList from "~/components/ProductList.vue";
import ReviewsSection from "~/components/ReviewsSection.vue";
import TopUpForm from "~/components/TopUpForm.vue";

const goodsId = "2267";

// Fetch data
const { data: goodsData } = await useApi(
  `/app/goods/getGoodsDetail?goodsId=${goodsId}`
);
const { data: skusData } = await useApi(
  `/app/goods/getSkuByGoodsId?goodsId=${goodsId}`
);

const goods = computed(() => goodsData.value?.data || {});
const skus = computed(() => skusData.value?.data || []);

const selectedProduct = ref(null);
watch(
  skus,
  (newSkus) => {
    if (newSkus && newSkus.length > 0) {
      selectedProduct.value = newSkus[0];
    }
  },
  { immediate: true }
);

const { data: reviewOverviewData } = useApi(
  `/app/goods/getGoodsReviewOverview?goodsId=${goodsId}`
);
const reviewOverview = computed(
  () => reviewOverviewData.value?.data || { averageRating: 0, totalReviews: 0 }
);

const { data: reviewsData } = useApi(
  `/app/reviews/all/1/100?goodsId=${goodsId}`
);
const reviews = computed(() => reviewsData.value?.data?.records || []);

const selectedServer = ref("America");
const uid = ref("");

// Language and Currency settings
const { locale } = useI18n();
const currentLanguage = computed(() => locale.value);
const currentCurrency = ref("USD");

// User authentication state
const isLoggedIn = ref(false);
const userName = ref("User");

// Modal states
const showAuthModal = ref(false);
const showLanguageCurrencyModal = ref(false);
const showOrderModal = ref(false);
const showOrderListModal = ref(false);

// Order history data (can be replaced with API call)
const orderHistory = ref([]);

// Functions
const handleAuth = (authData) => {
  console.log("Auth form submitted:", authData);
  isLoggedIn.value = true;
  userName.value = authData.email?.split("@")[0] || "User";
  showAuthModal.value = false;
};

const handleGoogleAuth = () => {
  console.log("Google auth initiated");
  showAuthModal.value = false;
};

const processOrder = (orderData) => {
  console.log("Processing order:", orderData);
  showOrderModal.value = false;
};

const handleLanguageCurrencyChange = async (settings) => {
  currentCurrency.value = settings.currency;
  console.log("Language and currency updated:", settings);
  localStorage.setItem("preferredCurrency", settings.currency);
};
</script>

<style>
/* Tailwind handles all styling */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
