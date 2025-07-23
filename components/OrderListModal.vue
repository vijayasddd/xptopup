<template>
  <BaseModal
    :show="show"
    title="Order History"
    size="xl"
    max-height="90vh"
    @close="$emit('close')"
  >
    <div class="overflow-y-auto max-h-[55vh] space-y-4">
      <div
        v-if="orderHistory.length === 0"
        class="text-center text-slate-300 py-12"
      >
        <Icon
          name="heroicons:clipboard-document"
          class="h-16 w-16 mx-auto mb-4 text-slate-500 drop-shadow-lg"
        />
        <p class="text-lg font-medium text-white drop-shadow-md">
          No orders yet
        </p>
        <p class="text-sm text-slate-300">
          Your order history will appear here
        </p>
      </div>

      <div
        v-for="(order, index) in paginatedOrders"
        :key="index"
        class="bg-gradient-to-br from-slate-700/60 via-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-lg p-4 border border-slate-600/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-400/30"
      >
        <div class="flex flex-col lg:flex-row lg:items-center gap-4">
          <!-- 商品图片和信息 -->
          <div class="flex items-center space-x-4 lg:flex-1">
            <img
              :src="order.productImage"
              :alt="order.productName"
              class="w-16 h-10 rounded-md bg-slate-600 object-cover shadow-lg border border-slate-500/30"
            />
            <div class="flex-1">
              <h3 class="font-semibold text-white text-sm drop-shadow-md">
                {{ order.productName }}
              </h3>
              <p class="text-slate-200 text-xs">{{ order.game }}</p>
              <div class="flex items-center space-x-2 mt-1">
                <span
                  class="text-xs bg-slate-600/70 backdrop-blur-sm text-slate-200 px-2 py-1 rounded border border-slate-500/30"
                  >{{ order.server }}</span
                >
                <span class="text-xs text-slate-300">UID: {{ order.uid }}</span>
              </div>
            </div>
          </div>

          <!-- 订单详情 -->
          <div class="lg:flex-1 space-y-2">
            <div class="flex justify-between items-center">
              <span class="text-sm text-slate-200">Amount:</span>
              <span class="font-bold text-amber-400 drop-shadow-lg"
                >${{ order.amount }}</span
              >
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-slate-200">Payment:</span>
              <div class="flex items-center space-x-1">
                <Icon
                  :name="getPaymentIcon(order.paymentMethod)"
                  class="h-4 w-4"
                />
                <span class="text-sm text-white drop-shadow-md">{{
                  order.paymentMethod
                }}</span>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-slate-200">Date:</span>
              <span class="text-sm text-slate-300">{{ order.date }}</span>
            </div>
          </div>

          <!-- 订单状态 -->
          <div class="lg:w-32 text-right">
            <span
              :class="[
                'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium shadow-lg backdrop-blur-sm',
                order.status === 'completed'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
                  : order.status === 'pending'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-400/30'
                  : 'bg-red-500/20 text-red-300 border border-red-400/30',
              ]"
            >
              {{
                order.status === "completed"
                  ? "Completed"
                  : order.status === "pending"
                  ? "Pending"
                  : "Failed"
              }}
            </span>
            <p class="text-xs text-slate-300 mt-1">
              {{ order.orderNumber }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <template #footer>
      <!-- 分页器 -->
      <div v-if="totalPages > 1" class="border-t border-slate-600/50 pt-4">
        <div class="flex items-center justify-between">
          <div class="text-sm text-slate-300">
            Showing {{ (currentPage - 1) * pageSize + 1 }} to
            {{ Math.min(currentPage * pageSize, totalOrders) }} of
            {{ totalOrders }} orders
          </div>

          <div class="flex items-center space-x-2">
            <!-- 上一页按钮 -->
            <button
              :disabled="currentPage === 1"
              class="p-2 rounded-lg border border-slate-600/50 text-slate-300 hover:text-amber-300 hover:bg-slate-700/30 hover:border-blue-400/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm"
              @click="prevPage"
            >
              <Icon name="heroicons:chevron-left" class="h-4 w-4" />
            </button>

            <!-- 页码按钮 -->
            <template v-for="page in getPageNumbers" :key="page">
              <button
                v-if="page !== '...'"
                :class="[
                  'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 backdrop-blur-sm shadow-lg',
                  page === currentPage
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white border border-amber-400/30 shadow-amber-500/30'
                    : 'border border-slate-600/50 text-slate-300 hover:text-amber-300 hover:bg-slate-700/30 hover:border-blue-400/30',
                ]"
                @click="goToPage(page)"
              >
                {{ page }}
              </button>
              <span v-else class="px-3 py-2 text-slate-400 text-sm"> ... </span>
            </template>

            <!-- 下一页按钮 -->
            <button
              :disabled="currentPage === totalPages"
              class="p-2 rounded-lg border border-slate-600/50 text-slate-300 hover:text-amber-300 hover:bg-slate-700/30 hover:border-blue-400/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm"
              @click="nextPage"
            >
              <Icon name="heroicons:chevron-right" class="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <!-- 无分页时的订单统计 -->
      <div v-else class="border-t border-slate-600/50 pt-4 text-center">
        <p class="text-sm text-slate-300">
          Showing {{ orderHistory.length }} of {{ orderHistory.length }} orders
        </p>
      </div>
    </template>
  </BaseModal>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import BaseModal from "./BaseModal.vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  orderHistory: {
    type: Array,
    default: () => [],
  },
});

defineEmits(["close"]);

// 分页相关数据
const currentPage = ref(1);
const pageSize = ref(5); // 每页显示5条订单
const totalOrders = computed(() => props.orderHistory.length);
const totalPages = computed(() =>
  Math.ceil(totalOrders.value / pageSize.value)
);

// 当前页的订单数据
const paginatedOrders = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return props.orderHistory.slice(start, end);
});

// 分页函数
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

// 获取分页器显示的页码数组
const getPageNumbers = computed(() => {
  const pages = [];
  const total = totalPages.value;
  const current = currentPage.value;

  if (total <= 7) {
    // 如果总页数少于等于7页，显示所有页码
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    // 总页数大于7页时的显示逻辑
    if (current <= 4) {
      // 当前页在前4页
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(total);
    } else if (current >= total - 3) {
      // 当前页在后4页
      pages.push(1);
      pages.push("...");
      for (let i = total - 4; i <= total; i++) {
        pages.push(i);
      }
    } else {
      // 当前页在中间
      pages.push(1);
      pages.push("...");
      for (let i = current - 1; i <= current + 1; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(total);
    }
  }

  return pages;
});

// Get payment method icon
const getPaymentIcon = (method) => {
  switch (method.toLowerCase()) {
    case "paypal":
      return "logos:paypal";
    case "credit card":
      return "heroicons:credit-card";
    case "razer gold":
      return "heroicons:banknotes";
    default:
      return "heroicons:credit-card";
  }
};

// 监听show属性变化，重置页面
watch(
  () => props.show,
  (newVal) => {
    if (newVal) {
      currentPage.value = 1;
    }
  }
);
</script>
