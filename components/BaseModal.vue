<template>
  <Teleport to="body">
    <Transition
      name="modal"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @leave="onLeave"
      @after-leave="onAfterLeave"
    >
      <div
        v-if="show"
        class="fixed inset-0 bg-gradient-to-br from-indigo-950/80 via-slate-900/80 to-purple-950/80 backdrop-blur-sm flex items-center justify-center z-50 modal-backdrop"
        @click.self="handleBackdropClick"
      >
        <div
          :class="[
            'bg-gradient-to-br from-indigo-900/90 via-slate-800/90 to-purple-900/90 backdrop-blur-md rounded-xl border border-amber-400/30 overflow-hidden modal-content shadow-2xl shadow-purple-900/30',
            sizeClasses,
            'mx-4',
          ]"
        >
          <!-- Header -->
          <div
            v-if="title || $slots.header"
            class="flex justify-between items-center p-6 pb-4 border-b border-slate-600/30"
          >
            <div v-if="$slots.header">
              <slot name="header" />
            </div>
            <h2
              v-else-if="title"
              class="text-2xl font-bold text-white drop-shadow-lg"
            >
              {{ title }}
            </h2>

            <button
              v-if="showCloseButton"
              class="text-slate-400 hover:text-amber-300 transition-all duration-300 p-1 rounded-lg hover:bg-slate-700/30"
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
          <div
            v-if="$slots.footer"
            class="px-6 pb-6 border-t border-slate-600/30 mt-4 pt-4"
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, nextTick, onUnmounted, watch } from "vue";

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

const emit = defineEmits(["close", "opened", "closed"]);

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

// 动画钩子函数
const onEnter = (el) => {
  // 强制重排以确保动画正常执行
  el.offsetHeight;
};

const onAfterEnter = () => {
  emit("opened");
};

const onLeave = () => {
  // 开始关闭动画
};

const onAfterLeave = () => {
  emit("closed");
};

// 阻止body滚动 - 性能优化：使用nextTick确保DOM更新完成
watch(
  () => props.show,
  (newVal) => {
    if (newVal) {
      nextTick(() => {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${getScrollbarWidth()}px`;
      });
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }
);

// 获取滚动条宽度以避免内容跳动
const getScrollbarWidth = () => {
  const scrollDiv = document.createElement("div");
  scrollDiv.style.cssText =
    "width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;";
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

// 组件卸载时恢复body滚动
onUnmounted(() => {
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
});
</script>

<style scoped>
/* 背景蒙版动画 */
.modal-enter-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.6, 1);
}

.modal-enter-from {
  opacity: 0;
}

.modal-enter-to {
  opacity: 1;
}

.modal-leave-from {
  opacity: 1;
}

.modal-leave-to {
  opacity: 0;
}

/* 弹窗内容动画 */
.modal-enter-active .modal-content {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-leave-active .modal-content {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.6, 1);
}

.modal-enter-from .modal-content {
  opacity: 0;
  transform: scale(0.95) translateY(-10px);
}

.modal-enter-to .modal-content {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.modal-leave-from .modal-content {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.modal-leave-to .modal-content {
  opacity: 0;
  transform: scale(0.95) translateY(-10px);
}

/* 性能优化：开启硬件加速 */
.modal-backdrop,
.modal-content {
  will-change: transform, opacity;
  backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

/* 减少重绘：使用transform代替改变布局属性 */
.modal-content {
  transform-origin: center center;
}
</style>
