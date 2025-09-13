<template>
  <Transition name="message-fade">
    <div v-if="visible" class="message" :class="[`message-${type}`, { 'message-center': center }]">
      <div class="message-content">
        <i v-if="icon" class="message-icon" :class="icon"></i>
        <span class="message-text">{{ message }}</span>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  message: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'success',
    validator: (value) => ['success', 'warning', 'info', 'error'].includes(value),
  },
  duration: {
    type: Number,
    default: 3000,
  },
  center: {
    type: Boolean,
    default: true,
  },
  icon: {
    type: String,
    default: '',
  },
})

const visible = ref(false)
let timer = null

const show = () => {
  visible.value = true
  if (props.duration > 0) {
    timer = setTimeout(() => {
      hide()
    }, props.duration)
  }
}

const hide = () => {
  visible.value = false
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
}

onMounted(() => {
  show()
})

onUnmounted(() => {
  if (timer) {
    clearTimeout(timer)
  }
})

defineExpose({
  show,
  hide,
})
</script>

<style scoped>
.message {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  font-size: 14px;
  line-height: 1.5;
  max-width: 400px;
  word-wrap: break-word;
  display: flex;
  align-items: center;
}

.message-center {
  left: 50%;
  transform: translateX(-50%);
}

.message-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.message-icon {
  font-size: 16px;
  flex-shrink: 0;
}

.message-text {
  flex: 1;
}

/* 消息类型样式 */
.message-success {
  background: #f0f9ff;
  border: 1px solid #67c23a;
  color: #67c23a;
}

.message-success .message-icon {
  color: #67c23a;
}

.message-warning {
  background: #fdf6ec;
  border: 1px solid #e6a23c;
  color: #e6a23c;
}

.message-warning .message-icon {
  color: #e6a23c;
}

.message-info {
  background: #f4f4f5;
  border: 1px solid #909399;
  color: #909399;
}

.message-info .message-icon {
  color: #909399;
}

.message-error {
  background: #fef0f0;
  border: 1px solid #f56c6c;
  color: #f56c6c;
}

.message-error .message-icon {
  color: #f56c6c;
}

/* 动画效果 */
.message-fade-enter-active,
.message-fade-leave-active {
  transition: all 0.3s ease;
}

.message-fade-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px);
}

.message-fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .message {
    left: 20px;
    right: 20px;
    transform: none;
    max-width: none;
  }

  .message-center {
    left: 20px;
    right: 20px;
    transform: none;
  }
}
</style>
