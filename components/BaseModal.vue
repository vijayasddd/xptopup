<template>
  <Teleport to="body">
    <div
      v-if="show"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="handleBackdropClick"
    >
      <div
        :class="[
          'bg-slate-800 rounded-xl border border-slate-700 overflow-hidden',
          sizeClasses,
          'mx-4',
        ]"
      >
        <!-- Header -->
        <div
          v-if="title || $slots.header"
          class="flex justify-between items-center p-6 pb-4"
        >
          <div v-if="$slots.header">
            <slot name="header" />
          </div>
          <h2 v-else-if="title" class="text-2xl font-bold text-white">
            {{ title }}
          </h2>

          <button
            v-if="showCloseButton"
            class="text-slate-400 hover:text-white transition-colors"
            @click="handleClose"
          >
            <Icon name="heroicons:x-mark" class="h-6 w-6" />
          </button>
        </div>

        <!-- Body -->
        <div
          :class="[
            'px-6',
            !title && !$slots.header ? 'pt-6' : '',
            !$slots.footer ? 'pb-6' : '',
          ]"
        >
          <slot />
        </div>

        <!-- Footer -->
        <div v-if="$slots.footer" class="px-6 pb-6">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { computed, onUnmounted, watch } from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "md",
    validator: (value) =>
      ["xs", "sm", "md", "lg", "xl", "full"].includes(value),
  },
  showCloseButton: {
    type: Boolean,
    default: true,
  },
  closeOnBackdrop: {
    type: Boolean,
    default: true,
  },
  maxHeight: {
    type: String,
    default: "90vh",
  },
});

const emit = defineEmits(["close"]);

const sizeClasses = computed(() => {
  const sizes = {
    xs: "w-full max-w-xs",
    sm: "w-full max-w-md",
    md: "w-full max-w-lg",
    lg: "w-full max-w-2xl",
    xl: "w-full max-w-4xl",
    full: "w-full max-w-6xl",
  };
  return `${sizes[props.size]} max-h-[${props.maxHeight}]`;
});

const handleClose = () => {
  emit("close");
};

const handleBackdropClick = () => {
  if (props.closeOnBackdrop) {
    handleClose();
  }
};

// 阻止body滚动
watch(
  () => props.show,
  (newVal) => {
    if (newVal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
);

// 组件卸载时恢复body滚动
onUnmounted(() => {
  document.body.style.overflow = "";
});
</script>
