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
            <svg
              class="h-8 w-8 text-cyan-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            <span class="text-2xl font-bold text-white">StellarShop</span>
          </div>
          <div class="hidden lg:flex items-center bg-slate-700 rounded-full">
            <input
              type="text"
              placeholder="Honkai: Star Rail"
              class="bg-transparent pl-4 pr-2 py-2 w-48 focus:outline-none placeholder-slate-400"
            />
            <button class="p-2 text-slate-400 hover:text-cyan-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <button class="text-slate-300 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
          </div>
          <button
            class="flex items-center space-x-2 text-slate-300 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span class="text-sm font-medium">Login</span>
          </button>
          <button class="lg:hidden text-slate-300 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
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
                @click="selectedProduct = product"
                :class="[
                  'bg-slate-800 rounded-lg p-3 text-center cursor-pointer transition-all duration-200 border-2',
                  selectedProduct?.name === product.name
                    ? 'border-cyan-400 shadow-lg shadow-cyan-500/20'
                    : 'border-slate-700 hover:border-slate-600',
                ]"
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
              <div class="flex items-center space-x-4">
                <div class="text-center">
                  <p class="text-5xl font-bold text-white">5.0</p>
                  <div class="flex text-amber-400 text-xl">
                    <span>★</span><span>★</span><span>★</span><span>★</span
                    ><span>★</span>
                  </div>
                  <p class="text-sm text-slate-400 mt-1">100k+ reviews</p>
                </div>
                <div class="w-full">
                  <div
                    v-for="i in 5"
                    :key="i"
                    class="flex items-center space-x-2"
                  >
                    <span class="text-sm text-amber-400">{{ 6 - i }} ★</span>
                    <div class="w-full bg-slate-700 rounded-full h-2">
                      <div
                        class="bg-amber-400 h-2 rounded-full"
                        :style="{ width: i === 1 ? '100%' : '0%' }"
                      ></div>
                    </div>
                    <span class="text-sm text-slate-400 w-10 text-right">{{
                      i === 1 ? "100%" : "0%"
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-1 mt-8 lg:mt-0">
          <div
            class="bg-slate-800 rounded-xl p-6 border border-slate-700 sticky top-28"
          >
            <div>
              <label
                for="server"
                class="block text-sm font-medium text-slate-300 mb-2"
                >1. Select your server</label
              >
              <select
                id="server"
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
                for="uid"
                class="block text-sm font-medium text-slate-300 mb-2"
                >2. Enter your UID</label
              >
              <input
                type="text"
                id="uid"
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
                class="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-4 rounded-lg text-lg transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 flex items-center justify-center space-x-2"
              >
                <span>Top Up Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12">
        <h2 class="text-2xl font-bold text-white mb-6">News & Guides</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="news in newsItems"
            :key="news.title"
            class="bg-slate-800 rounded-xl overflow-hidden group border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
          >
            <img
              :src="news.image"
              :alt="news.title"
              class="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div class="p-4">
              <p
                class="text-sm font-semibold text-white leading-tight group-hover:text-cyan-400 transition-colors"
              >
                {{ news.title }}
              </p>
              <p class="text-xs text-slate-400 mt-2">{{ news.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="bg-slate-800/50 border-t border-slate-700 mt-16">
      <div class="container mx-auto px-4 lg:px-8 py-10">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div class="col-span-2 lg:col-span-2">
            <div class="flex items-center space-x-2 mb-4">
              <svg
                class="h-8 w-8 text-cyan-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
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
  </div>
</template>

<script setup>
import { ref } from "vue";

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

const selectedProduct = ref(products.value[3]); // Pre-select the 1980 pack for demonstration

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

const newsItems = ref([
  {
    title: 'Version 2.4 "Stellar Dreams" Now Available!',
    date: "July 21, 2025",
    image: "https://placehold.co/400x200/0f172a/94a3b8?text=Update",
  },
  {
    title: "Character Guide: Acheron Build",
    date: "July 19, 2025",
    image: "https://placehold.co/400x200/0f172a/94a3b8?text=Guide",
  },
  {
    title: 'New Event: "Galactic Baseballer" Deep Dive',
    date: "July 18, 2025",
    image: "https://placehold.co/400x200/0f172a/94a3b8?text=Event",
  },
  {
    title: "Summer Top-Up Bonus Event Is Here!",
    date: "July 15, 2025",
    image: "https://placehold.co/400x200/0f172a/94a3b8?text=Promo",
  },
]);
</script>

<style>
/* 通常，对于像 'font-sans' 这样的全局样式，
  会放在你的主 CSS 文件中 (e.g., index.css or app.css).
  但为了满足单文件组件的要求，这里将它留空。
  Tailwind JIT 编译器会自动处理所有实用程序类。
  无需编写额外的 CSS。
*/
</style>
