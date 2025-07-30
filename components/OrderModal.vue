<template>
  <BaseModal :show="show" @close="closeModal">
    <template #header>
      <h2 class="text-xl font-bold text-white drop-shadow-lg">
        {{ $t("orderModal.title") }}
      </h2>
    </template>
    <template #body>
      <div v-if="selectedProduct" class="space-y-4">
        <!-- Order Summary -->
        <div class="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50">
          <div class="flex items-center space-x-4">
            <img
              :src="selectedProduct.image"
              alt=""
              class="w-20 h-20 rounded-md object-cover bg-slate-800"
            />
            <div class="flex-1">
              <h3 class="font-semibold text-white">
                {{ selectedProduct.name }}
              </h3>
              <p class="text-amber-400 font-bold text-lg mt-1">
                ${{ selectedProduct.price }}
              </p>
            </div>
          </div>
        </div>

        <!-- User Info -->
        <div class="text-sm space-y-2">
          <div class="flex justify-between">
            <span class="text-slate-300">{{ $t("orderModal.server") }}:</span>
            <span class="text-white font-medium">{{ selectedServer }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-300">{{ $t("orderModal.uid") }}:</span>
            <span class="text-white font-medium">{{ uid }}</span>
          </div>
        </div>

        <!-- Email and Verification -->
        <div class="space-y-3">
          <div>
            <label
              for="email"
              class="text-sm font-medium text-slate-200 mb-1 block"
              >{{ $t("orderModal.email") }}</label
            >
            <input
              id="email"
              v-model="email"
              type="email"
              class="w-full bg-slate-700/50 border-2 border-slate-600/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors"
              :placeholder="$t('orderModal.emailPlaceholder')"
            />
          </div>
          <div v-if="needVerifyEmail">
            <label
              for="verifyCode"
              class="text-sm font-medium text-slate-200 mb-1 block"
              >{{ $t("orderModal.verificationCode") }}</label
            >
            <div class="flex space-x-2">
              <input
                id="verifyCode"
                v-model="emailVerifyCode"
                type="text"
                class="flex-grow bg-slate-700/50 border-2 border-slate-600/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors"
                :placeholder="$t('orderModal.codePlaceholder')"
              />
              <button
                class="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors"
                @click="sendVerificationCode"
              >
                {{ $t("orderModal.sendCode") }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-center text-slate-400 py-8">
        <p>{{ $t("orderModal.noProductSelected") }}</p>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end space-x-3">
        <button
          class="px-5 py-2 text-sm font-medium text-slate-300 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors"
          @click="closeModal"
        >
          {{ $t("orderModal.cancel") }}
        </button>
        <button
          class="px-5 py-2 text-sm font-bold text-slate-900 bg-gradient-to-r from-amber-400 to-orange-500 hover:scale-105 rounded-lg transition-transform"
          :disabled="loading"
          @click="processOrder"
        >
          <span v-if="!loading">{{ $t("orderModal.processOrder") }}</span>
          <span v-else>
            <Icon name="heroicons:arrow-path" class="animate-spin h-5 w-5" />
          </span>
        </button>
      </div>
    </template>
  </BaseModal>
</template>

<script setup>
import { ref, watch } from "vue";
import { useApi } from "~/composables/useApi";
import BaseModal from "./BaseModal.vue";

const props = defineProps({
  show: Boolean,
  selectedServer: String,
  uid: String,
  selectedProduct: Object,
});

const emit = defineEmits(["close", "process-order"]);

const email = ref("");
const emailVerifyCode = ref("");
const needVerifyEmail = ref(false);
const loading = ref(false);

const closeModal = () => {
  if (loading.value) return;
  emit("close");
};

watch(
  () => props.show,
  (newVal) => {
    if (!newVal) {
      email.value = "";
      emailVerifyCode.value = "";
      needVerifyEmail.value = false;
      loading.value = false;
    }
  }
);

const sendVerificationCode = async () => {
  if (!email.value) return;
  // Logic to send verification code
  await useApi("/app/sso/verifyEmail", {
    method: "POST",
    body: { email: email.value },
  });
  needVerifyEmail.value = true; // Assume verification is now needed
};

const processOrder = async () => {
  if (!props.selectedProduct || !email.value) return;

  loading.value = true;
  try {
    const { data, error } = await useApi("/app/order/createAndRegister", {
      method: "POST",
      body: {
        goodsId: props.selectedProduct.id,
        quantity: 1,
        email: email.value,
        emailVerifyCode: emailVerifyCode.value,
      },
    });

    if (error.value || data.value?.code !== 200) {
      console.error(
        "Order creation failed:",
        error.value || data.value.message
      );
      if (data.value?.data?.needVerifyEmail) {
        needVerifyEmail.value = true;
      }
      return;
    }

    emit("process-order", data.value.data);
  } catch (err) {
    console.error("An unexpected error occurred:", err);
  } finally {
    loading.value = false;
  }
};
</script>
