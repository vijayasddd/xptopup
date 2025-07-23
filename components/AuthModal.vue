<template>
  <BaseModal
    :show="show"
    :title="isLoginMode ? 'Login' : 'Register'"
    size="sm"
    @close="$emit('close')"
  >
    <form class="space-y-4" @submit.prevent="handleAuth">
      <div v-if="!isLoginMode">
        <label
          class="block text-sm font-medium text-slate-200 mb-2 drop-shadow-md"
          >Full Name</label
        >
        <input
          v-model="authForm.name"
          type="text"
          class="w-full bg-slate-700/60 backdrop-blur-sm border border-slate-600/50 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400/50 transition-all duration-300 text-white placeholder-slate-400 shadow-lg hover:border-blue-400/50"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label
          class="block text-sm font-medium text-slate-200 mb-2 drop-shadow-md"
          >Email</label
        >
        <input
          v-model="authForm.email"
          type="email"
          class="w-full bg-slate-700/60 backdrop-blur-sm border border-slate-600/50 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400/50 transition-all duration-300 text-white placeholder-slate-400 shadow-lg hover:border-blue-400/50"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label
          class="block text-sm font-medium text-slate-200 mb-2 drop-shadow-md"
          >Password</label
        >
        <input
          v-model="authForm.password"
          type="password"
          class="w-full bg-slate-700/60 backdrop-blur-sm border border-slate-600/50 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400/50 transition-all duration-300 text-white placeholder-slate-400 shadow-lg hover:border-blue-400/50"
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-xl shadow-amber-500/30 hover:shadow-amber-400/50 hover:scale-105 border border-amber-400/30"
      >
        {{ isLoginMode ? "Login" : "Register" }}
      </button>
    </form>

    <div class="mt-6">
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-slate-600/50" />
        </div>
        <div class="relative flex justify-center text-sm">
          <span
            class="px-2 bg-gradient-to-r from-indigo-900/90 via-slate-800/90 to-purple-900/90 text-slate-300"
            >Or continue with</span
          >
        </div>
      </div>

      <button
        class="mt-4 w-full bg-white hover:bg-gray-50 text-gray-900 font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105 border border-gray-200"
        @click="handleGoogleAuth"
      >
        <Icon name="logos:google-icon" class="h-5 w-5" />
        <span>Continue with Google</span>
      </button>
    </div>

    <div class="mt-6 text-center">
      <button
        class="text-amber-400 hover:text-amber-300 text-sm transition-colors duration-300 drop-shadow-md"
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
