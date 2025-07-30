<template>
  <BaseModal :show="show" size="3xl" @close="$emit('close')">
    <template #header>
      <h2 class="text-xl font-bold text-white drop-shadow-lg">
        {{ $t("orderList.title") }}
      </h2>
    </template>
    <template #body>
      <div class="max-h-[70vh] overflow-y-auto">
        <div v-if="loading" class="text-center py-10">
          <Icon name="heroicons:arrow-path" class="animate-spin h-8 w-8" />
        </div>
        <div v-else-if="orders.length === 0" class="text-center py-10">
          <p class="text-slate-400">{{ $t("orderList.noOrders") }}</p>
        </div>
        <div v-else class="space-y-3">
          <div
            v-for="order in orders"
            :key="order.id"
            class="bg-slate-700/50 rounded-lg p-3 sm:p-4 border border-slate-600/50 transition-all duration-300 hover:bg-slate-600/50"
          >
            <div class="flex justify-between items-center">
              <div>
                <p class="text-white font-semibold">
                  {{ order.type === "Credit" ? "Top-up" : "Purchase" }}
                </p>
                <p class="text-sm text-slate-400">
                  {{ new Date(order.date).toLocaleString() }}
                </p>
              </div>
              <p
                :class="[
                  'font-bold text-lg',
                  order.type === 'Credit' ? 'text-green-400' : 'text-red-400',
                ]"
              >
                {{ order.type === "Credit" ? "+" : "-" }}${{
                  order.amount?.toFixed?.(2) || 0
                }}
              </p>
            </div>
          </div>
          <div v-if="hasNextPage" class="text-center mt-4">
            <button
              class="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg"
              @click="loadMore"
            >
              {{ $t("orderList.loadMore") }}
            </button>
          </div>
        </div>
      </div>
    </template>
  </BaseModal>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useApi } from "~/composables/useApi";
import BaseModal from "./BaseModal.vue";

const props = defineProps({
  show: Boolean,
});

const orders = ref([]);
const loading = ref(false);
const currentPage = ref(1);
const hasNextPage = ref(true);

const fetchOrders = async (page = 1) => {
  if (loading.value) return;
  loading.value = true;
  try {
    const { data, error } = await useApi(`/app/user/balanceRecord/${page}/10`);
    if (error.value || data.value?.code !== 200) {
      console.error(
        "Failed to fetch orders:",
        error.value || data.value.message
      );
      hasNextPage.value = false;
      return;
    }

    const newOrders = data.value.data.records;
    if (page === 1) {
      orders.value = newOrders;
    } else {
      orders.value.push(...newOrders);
    }

    if (newOrders.length < 10) {
      hasNextPage.value = false;
    }
  } catch (err) {
    console.error("An unexpected error occurred:", err);
    hasNextPage.value = false;
  } finally {
    loading.value = false;
  }
};

const loadMore = () => {
  currentPage.value++;
  fetchOrders(currentPage.value);
};

watch(
  () => props.show,
  (newVal) => {
    if (newVal) {
      currentPage.value = 1;
      hasNextPage.value = true;
      orders.value = [];
      fetchOrders(1);
    }
  }
);

onMounted(() => {
  if (props.show) {
    fetchOrders(1);
  }
});
</script>
