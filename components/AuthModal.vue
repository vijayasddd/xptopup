<template>
  <BaseModal
    :show="show"
    :title="isLoginMode ? 'Login' : 'Register'"
    size="sm"
    @close="$emit('close')"
  >
    <form class="space-y-4" @submit.prevent="handleAuth">
      <div v-if="!isLoginMode">
        <label class="block text-sm font-medium text-slate-300 mb-2"
          >Full Name</label
        >
        <input
          v-model="authForm.name"
          type="text"
          class="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-slate-300 mb-2"
          >Email</label
        >
        <input
          v-model="authForm.email"
          type="email"
          class="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-slate-300 mb-2"
          >Password</label
        >
        <input
          v-model="authForm.password"
          type="password"
          class="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 rounded-lg transition-colors"
      >
        {{ isLoginMode ? "Login" : "Register" }}
      </button>
    </form>

    <div class="mt-6">
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-slate-600" />
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-slate-800 text-slate-400">Or continue with</span>
        </div>
      </div>

      <button
        class="mt-4 w-full bg-white hover:bg-gray-50 text-gray-900 font-medium py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
        @click="handleGoogleAuth"
      >
        <Icon name="logos:google-icon" class="h-5 w-5" />
        <span>Continue with Google</span>
      </button>
    </div>

    <div class="mt-6 text-center">
      <button
        class="text-cyan-400 hover:text-cyan-300 text-sm"
        @click="toggleMode"
      >
        {{
          isLoginMode
            ? "Don't have an account? Register"
            : "Already have an account? Login"
        }}
      </button>
    </div>
  </BaseModal>
</template>

<script setup>
import { ref } from "vue";
import BaseModal from "./BaseModal.vue";

defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close", "auth", "googleAuth"]);

const isLoginMode = ref(true);
const authForm = ref({
  name: "",
  email: "",
  password: "",
});

const handleAuth = () => {
  console.log("Auth form submitted:", authForm.value);
  emit("auth", {
    mode: isLoginMode.value ? "login" : "register",
    data: authForm.value,
  });
};

const handleGoogleAuth = () => {
  console.log("Google auth initiated");
  emit("googleAuth");
};

const toggleMode = () => {
  isLoginMode.value = !isLoginMode.value;
  // 清空表单
  authForm.value = {
    name: "",
    email: "",
    password: "",
  };
};
</script>
