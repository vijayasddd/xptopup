<template>
  <div class="antialiased bg-slate-900 text-slate-200 font-sans">
    <header
      class="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50"
    >
      <nav
        class="container mx-auto px-4 lg:px-8 flex items-center justify-between h-20"
      >
        <div class="flex items-center space-x-8">
          <div class="flex items-center space-x-2">
            <Icon name="heroicons:star" class="h-8 w-8 text-cyan-400" />
            <span class="text-2xl font-bold text-white">StellarShop</span>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <div class="hidden md:flex items-center space-x-4">
            <button
              class="flex items-center space-x-1 text-sm text-slate-300 hover:text-white"
            >
              <img
                src="https://flagcdn.com/w20/us.png"
                alt="USA Flag"
                class="w-5 h-auto rounded-sm"
              />
              <span>EN</span><span>/</span><span>USD</span>
              <Icon name="heroicons:chevron-down" class="h-4 w-4" />
            </button>
          </div>
          <button
            class="flex items-center space-x-2 text-slate-300 hover:text-white"
            @click="showAuthModal = true"
          >
            <Icon name="heroicons:user-circle" class="h-6 w-6" />
            <span class="text-sm font-medium">Login</span>
          </button>
          <button
            class="text-slate-300 flex items-center space-x-2 hover:text-white"
            @click="showOrderListModal = true"
          >
            <Icon name="heroicons:clipboard-document-list" class="h-6 w-6" />
            <span class="text-sm font-medium">Orders</span>
          </button>
        </div>
      </nav>
    </header>

    <main class="container mx-auto px-4 lg:px-8 py-8">
      <div class="lg:grid lg:grid-cols-3 lg:gap-8">
        <div class="lg:col-span-2">
          <div
            class="bg-slate-800 rounded-xl p-4 flex items-center space-x-4 border border-slate-700"
          >
            <img
              src="https://placehold.co/80x80/0f172a/e2e8f0?text=HSR"
              alt="Honkai Star Rail Icon"
              class="w-20 h-20 rounded-lg"
            />
            <div>
              <h1 class="text-2xl font-bold text-white">Honkai: Star Rail</h1>
              <p class="text-sm text-slate-400">Official Direct Top-Up</p>
            </div>
          </div>

          <div class="mt-8">
            <div
              class="bg-cyan-900/30 border border-cyan-400/50 rounded-lg p-4 mb-6"
            >
              <h2 class="font-semibold text-white">
                Select the product to top up
              </h2>
            </div>

            <div
              class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            >
              <div
                v-for="product in products"
                :key="product.name"
                :class="[
                  'bg-slate-800 rounded-lg p-3 text-center cursor-pointer transition-all duration-200 border-2',
                  selectedProduct?.name === product.name
                    ? 'border-cyan-400 shadow-lg shadow-cyan-500/20'
                    : 'border-slate-700 hover:border-slate-600',
                ]"
                @click="selectedProduct = product"
              >
                <div class="relative">
                  <img
                    :src="product.image"
                    :alt="product.name"
                    class="w-full h-auto rounded-md mx-auto mb-3"
                  />
                  <div
                    v-if="product.bonus"
                    class="absolute top-1 right-1 bg-amber-400 text-slate-900 text-xs font-bold px-1.5 py-0.5 rounded-full shadow-md"
                  >
                    {{ product.bonus }}
                  </div>
                </div>
                <h3 class="font-semibold text-sm text-white truncate">
                  {{ product.name }}
                </h3>
                <p class="text-amber-400 font-bold mt-1">
                  ${{ product.price }}
                </p>
              </div>
            </div>
          </div>

          <!-- 移动端充值表单 - 只在小屏幕显示 -->
          <div class="mt-8 lg:hidden">
            <TopUpForm
              v-model:selected-server="selectedServer"
              v-model:uid="uid"
              :selected-product="selectedProduct"
              :is-mobile="true"
              @show-order-modal="showOrderModal = true"
            />
          </div>

          <div class="mt-12 space-y-8">
            <div class="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h2 class="text-xl font-bold text-white mb-4">Description</h2>
              <div class="text-slate-300 space-y-3 text-sm leading-relaxed">
                <p>Buy Cheap Honkai: Star Rail Top Up - Fast & Safe</p>
                <p>
                  Easy and fast to top up your Honkai: Star Rail account! Just
                  enter your UID, select your server, choose the value you want
                  to purchase, complete the payment, and the Oneiric Shard or
                  Express Supply Pass will be added to your account immediately.
                </p>
                <p>
                  Pay with convenience using PayPal, Razer Gold, or your
                  preferred local payment methods. There's no registration or
                  login required, making your purchase experience as seamless as
                  possible.
                </p>
              </div>
            </div>
            <div class="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h2 class="text-xl font-bold text-white mb-4">FAQs</h2>
              <div class="space-y-4">
                <div v-for="faq in faqs" :key="faq.q" class="text-sm">
                  <p class="font-semibold text-cyan-400 mb-1">{{ faq.q }}</p>
                  <p class="text-slate-300">{{ faq.a }}</p>
                </div>
              </div>
            </div>
            <div class="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h2 class="text-xl font-bold text-white mb-4">User Reviews</h2>
              <div class="space-y-6">
                <div class="text-center">
                  <p class="text-5xl font-bold text-white">5.0</p>
                  <div class="flex justify-center text-amber-400 text-xl mt-2">
                    <Icon name="heroicons:star-solid" />
                    <Icon name="heroicons:star-solid" />
                    <Icon name="heroicons:star-solid" />
                    <Icon name="heroicons:star-solid" />
                    <Icon name="heroicons:star-solid" />
                  </div>
                  <p class="text-sm text-slate-400 mt-1">100k+ reviews</p>
                </div>
                <div class="max-w-2xl mx-auto">
                  <div
                    v-for="i in 5"
                    :key="i"
                    class="flex items-center space-x-2 mb-1"
                  >
                    <span class="text-sm text-amber-400 w-6">{{ 6 - i }}</span>
                    <Icon
                      name="heroicons:star-solid"
                      class="h-3 w-3 text-amber-400"
                    />
                    <div class="w-full bg-slate-700 rounded-full h-2">
                      <div
                        class="bg-amber-400 h-2 rounded-full"
                        :style="{ width: i === 1 ? '100%' : '0%' }"
                      />
                    </div>
                    <span class="text-sm text-slate-400 w-10 text-right">{{
                      i === 1 ? "100%" : "0%"
                    }}</span>
                  </div>
                </div>
                <div class="space-y-4">
                  <div
                    v-for="(review, index) in displayedReviews"
                    :key="index"
                    class="bg-slate-700/50 rounded-lg p-4"
                  >
                    <div class="flex items-start space-x-3">
                      <div
                        class="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        <span class="text-white text-sm font-bold">{{
                          review.username[0]
                        }}</span>
                      </div>
                      <div class="flex-1">
                        <div class="space-y-1">
                          <span class="text-white font-medium block">{{
                            review.username
                          }}</span>
                          <div class="flex text-amber-400">
                            <Icon
                              v-for="i in review.rating"
                              :key="i"
                              name="heroicons:star-solid"
                              class="h-4 w-4"
                            />
                            <Icon
                              v-for="i in 5 - review.rating"
                              :key="i"
                              name="heroicons:star"
                              class="h-4 w-4"
                            />
                          </div>
                        </div>
                        <p class="text-slate-300 text-sm mt-3">
                          {{ review.comment }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  v-if="reviews.length > displayedReviews.length"
                  class="text-center"
                >
                  <button
                    class="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-sm font-medium transition-colors"
                    @click="loadMoreReviews"
                  >
                    Load More Reviews
                  </button>
                </div>
              </div>
            </div>
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

    <footer class="bg-slate-800/50 border-t border-slate-700 mt-16">
      <div class="container mx-auto px-4 lg:px-8 py-10">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div class="col-span-2 lg:col-span-2">
            <div class="flex items-center space-x-2 mb-4">
              <Icon name="heroicons:star" class="h-8 w-8 text-cyan-400" />
              <span class="text-2xl font-bold text-white">StellarShop</span>
            </div>
            <p class="text-sm text-slate-400">
              Your one-stop shop for instant game top-ups.
            </p>
          </div>
          <div>
            <h4 class="font-bold text-white mb-3">Support</h4>
            <ul class="space-y-2 text-sm text-slate-300">
              <li><a href="#" class="hover:text-cyan-400">Help Center</a></li>
              <li><a href="#" class="hover:text-cyan-400">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-white mb-3">Legal</h4>
            <ul class="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#" class="hover:text-cyan-400">Terms of Service</a>
              </li>
              <li>
                <a href="#" class="hover:text-cyan-400">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div class="col-span-2 md:col-span-2">
            <h4 class="font-bold text-white mb-3">Download App</h4>
            <div class="flex items-center space-x-4">
              <img
                src="https://placehold.co/100x100/e2e8f0/0f172a?text=QR"
                alt="QR Code"
                class="w-24 h-24 rounded-lg bg-white p-1"
              />
              <div class="space-y-2">
                <a href="#" class="block"
                  ><img
                    src="https://placehold.co/120x40/0f172a/e2e8f0?text=Google+Play"
                    alt="Google Play"
                    class="h-10"
                /></a>
                <a href="#" class="block"
                  ><img
                    src="https://placehold.co/120x40/0f172a/e2e8f0?text=App+Store"
                    alt="App Store"
                    class="h-10"
                /></a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mt-8 pt-6 border-t border-slate-700 text-center text-sm text-slate-500"
        >
          <p>
            &copy; {{ new Date().getFullYear() }} StellarShop. All rights
            reserved. Not affiliated with HoYoverse.
          </p>
        </div>
      </div>
    </footer>

    <!-- 弹窗组件 -->
    <AuthModal
      :show="showAuthModal"
      @close="showAuthModal = false"
      @auth="handleAuth"
      @google-auth="handleGoogleAuth"
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
import { computed, ref } from "vue";
import AuthModal from "~/components/AuthModal.vue";
import OrderListModal from "~/components/OrderListModal.vue";
import OrderModal from "~/components/OrderModal.vue";
import TopUpForm from "~/components/TopUpForm.vue";

const products = ref([
  {
    name: "Oneiric Shard ×60",
    price: "0.99",
    image: "https://placehold.co/200x100/1e293b/amber-400?text=60",
    bonus: "+60",
  },
  {
    name: "Oneiric Shard ×300",
    price: "4.99",
    image: "https://placehold.co/200x100/1e293b/amber-400?text=300",
    bonus: "+300",
  },
  {
    name: "Oneiric Shard ×980",
    price: "14.99",
    image: "https://placehold.co/200x100/1e293b/amber-400?text=980",
    bonus: "+980",
  },
  {
    name: "Oneiric Shard ×1980",
    price: "29.99",
    image: "https://placehold.co/200x100/1e293b/amber-400?text=1980",
    bonus: "+1980",
  },
  {
    name: "Oneiric Shard ×3280",
    price: "49.99",
    image: "https://placehold.co/200x100/1e293b/amber-400?text=3280",
    bonus: "+3280",
  },
  {
    name: "Oneiric Shard ×6480",
    price: "99.99",
    image: "https://placehold.co/200x100/1e293b/amber-400?text=6480",
    bonus: "+6480",
  },
  {
    name: "Express Supply Pass",
    price: "4.99",
    image: "https://placehold.co/200x100/1e293b/cyan-400?text=Pass",
    bonus: null,
  },
]);

const selectedProduct = ref(products.value[3]);
const selectedServer = ref("America");
const uid = ref("");

const faqs = ref([
  {
    q: "How to find my Honkai: Star Rail UID?",
    a: "1. Login to the game. 2. Your UID will be displayed below your in-game avatar.",
  },
  {
    q: "How long does it take to receive the items?",
    a: "After the payment is complete, the items will be credited to your game account within minutes.",
  },
  {
    q: "What payment methods are supported?",
    a: "We support a wide range of payment methods including credit/debit cards, PayPal, and various local payment options.",
  },
]);

// Reviews data
const reviews = ref([
  {
    username: "StarTrailblazer",
    rating: 5,
    date: "2 days ago",
    comment:
      "Fast delivery! Got my Oneiric Shards within 5 minutes of payment. Highly recommend!",
  },
  {
    username: "MarchLover",
    rating: 5,
    date: "3 days ago",
    comment:
      "Been using this service for months. Always reliable and secure. Best prices too!",
  },
  {
    username: "DanHengFan",
    rating: 4,
    date: "1 week ago",
    comment:
      "Great service overall. Payment was smooth and delivery was quick. Will use again.",
  },
  {
    username: "StellaFan2024",
    rating: 5,
    date: "1 week ago",
    comment:
      "Perfect experience! Customer support was very helpful when I had questions.",
  },
  {
    username: "HSRPlayer123",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "This is my go-to site for HSR top-ups. Never had any issues, always delivered instantly.",
  },
  {
    username: "TrailblazerPro",
    rating: 4,
    date: "2 weeks ago",
    comment:
      "Good service and competitive prices. The website is easy to use too.",
  },
  {
    username: "CaelumUser",
    rating: 5,
    date: "3 weeks ago",
    comment:
      "Amazing! Got my Express Supply Pass immediately. No hassle at all.",
  },
  {
    username: "HoyoFan88",
    rating: 5,
    date: "3 weeks ago",
    comment:
      "Fast, reliable, and secure. What more could you ask for? 5 stars!",
  },
  {
    username: "GalaxyWanderer",
    rating: 4,
    date: "1 month ago",
    comment:
      "Very satisfied with the service. Quick processing and fair prices.",
  },
  {
    username: "StarRailAddict",
    rating: 5,
    date: "1 month ago",
    comment:
      "Best top-up service I've used. Never disappoints and always delivers on time.",
  },
  {
    username: "ExpressRider",
    rating: 5,
    date: "1 month ago",
    comment:
      "Excellent service! Payment process is smooth and delivery is instant.",
  },
  {
    username: "CosmicTrader",
    rating: 4,
    date: "1 month ago",
    comment:
      "Reliable service with good customer support. Recommended for HSR players.",
  },
  {
    username: "StellarGamer",
    rating: 5,
    date: "2 months ago",
    comment:
      "Been using this for all my top-ups. Never had any problems, always fast delivery.",
  },
  {
    username: "VoidSeeker",
    rating: 5,
    date: "2 months ago",
    comment:
      "Great prices and instant delivery. This site is a gem for HSR players!",
  },
  {
    username: "QuantumPlayer",
    rating: 4,
    date: "2 months ago",
    comment:
      "Good experience overall. The interface is user-friendly and payment is secure.",
  },
]);

const reviewsToShow = ref(10);
const displayedReviews = computed(() =>
  reviews.value.slice(0, reviewsToShow.value)
);

// Modal states
const showAuthModal = ref(false);
const showOrderModal = ref(false);
const showOrderListModal = ref(false);

// Order history data
const orderHistory = ref([
  {
    orderNumber: "#ORD-2024-001",
    game: "Honkai: Star Rail",
    productName: "Oneiric Shard ×1980",
    productImage: "https://placehold.co/200x100/1e293b/amber-400?text=1980",
    server: "America",
    uid: "123456789",
    amount: "29.99",
    paymentMethod: "PayPal",
    date: "2024-01-15 14:30",
    status: "completed",
  },
  {
    orderNumber: "#ORD-2024-002",
    game: "Honkai: Star Rail",
    productName: "Express Supply Pass",
    productImage: "https://placehold.co/200x100/1e293b/cyan-400?text=Pass",
    server: "Asia",
    uid: "987654321",
    amount: "4.99",
    paymentMethod: "Credit Card",
    date: "2024-01-10 09:15",
    status: "completed",
  },
  {
    orderNumber: "#ORD-2024-003",
    game: "Honkai: Star Rail",
    productName: "Oneiric Shard ×980",
    productImage: "https://placehold.co/200x100/1e293b/amber-400?text=980",
    server: "Europe",
    uid: "456789123",
    amount: "14.99",
    paymentMethod: "Razer Gold",
    date: "2024-01-08 16:45",
    status: "pending",
  },
  {
    orderNumber: "#ORD-2024-004",
    game: "Honkai: Star Rail",
    productName: "Oneiric Shard ×300",
    productImage: "https://placehold.co/200x100/1e293b/amber-400?text=300",
    server: "America",
    uid: "789123456",
    amount: "4.99",
    paymentMethod: "PayPal",
    date: "2024-01-05 11:20",
    status: "completed",
  },
  // 添加更多测试数据以展示分页功能
  {
    orderNumber: "#ORD-2024-005",
    game: "Honkai: Star Rail",
    productName: "Oneiric Shard ×6480",
    productImage: "https://placehold.co/200x100/1e293b/amber-400?text=6480",
    server: "TW, HK, MO",
    uid: "111222333",
    amount: "99.99",
    paymentMethod: "Credit Card",
    date: "2024-01-03 20:15",
    status: "completed",
  },
  {
    orderNumber: "#ORD-2024-006",
    game: "Honkai: Star Rail",
    productName: "Oneiric Shard ×60",
    productImage: "https://placehold.co/200x100/1e293b/amber-400?text=60",
    server: "America",
    uid: "444555666",
    amount: "0.99",
    paymentMethod: "PayPal",
    date: "2024-01-02 10:30",
    status: "completed",
  },
  {
    orderNumber: "#ORD-2024-007",
    game: "Honkai: Star Rail",
    productName: "Oneiric Shard ×3280",
    productImage: "https://placehold.co/200x100/1e293b/amber-400?text=3280",
    server: "Asia",
    uid: "777888999",
    amount: "49.99",
    paymentMethod: "Razer Gold",
    date: "2024-01-01 15:45",
    status: "failed",
  },
  {
    orderNumber: "#ORD-2024-008",
    game: "Honkai: Star Rail",
    productName: "Express Supply Pass",
    productImage: "https://placehold.co/200x100/1e293b/cyan-400?text=Pass",
    server: "Europe",
    uid: "000111222",
    amount: "4.99",
    paymentMethod: "Credit Card",
    date: "2023-12-30 08:20",
    status: "completed",
  },
]);

// Functions
const loadMoreReviews = () => {
  reviewsToShow.value = Math.min(reviewsToShow.value + 5, reviews.value.length);
};

const handleAuth = (authData) => {
  // Handle login/register logic here
  console.log("Auth form submitted:", authData);
  showAuthModal.value = false;
};

const handleGoogleAuth = () => {
  // Handle Google authentication
  console.log("Google auth initiated");
  showAuthModal.value = false;
};

const processOrder = (orderData) => {
  // Handle order processing
  console.log("Processing order:", orderData);
  showOrderModal.value = false;
  // Show success message or redirect to payment
};
</script>

<style>
/* Tailwind handles all styling */
</style>
