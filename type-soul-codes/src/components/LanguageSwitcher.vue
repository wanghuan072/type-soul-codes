<template>
  <div class="language-switcher">
    <button
      class="current-language"
      @click="toggleDropdown"
      :aria-label="`Switch language from ${currentLanguageInfo.nativeName}`"
    >
      <span class="language-icon">🌐</span>
      <span class="language-name">{{ currentLanguageInfo.nativeName }}</span>
      <span class="dropdown-icon" :class="{ open: isOpen }">▼</span>
    </button>

    <transition name="dropdown">
      <div v-if="isOpen" class="language-dropdown">
        <button
          v-for="locale in availableLocales"
          :key="locale"
          class="language-option"
          :class="{ active: locale === currentLocale }"
          @click="switchLanguage(locale)"
        >
          <span class="option-name">{{ LOCALE_INFO[locale].nativeName }}</span>
          <span v-if="locale === currentLocale" class="check-mark">✓</span>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
import { SUPPORTED_LOCALES, LOCALE_INFO, DEFAULT_LOCALE } from '@/i18n'

const { locale } = useI18n()
const router = useRouter()
const route = useRoute()

const isOpen = ref(false)

const currentLocale = computed(() => locale.value)
const availableLocales = computed(() => SUPPORTED_LOCALES)
const currentLanguageInfo = computed(() => LOCALE_INFO[currentLocale.value])

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

const switchLanguage = (newLocale) => {
  if (newLocale === currentLocale.value) {
    closeDropdown()
    return
  }

  // 获取当前路径（移除所有语言前缀）
  let currentPath = route.path
  
  // 移除所有支持的语言前缀
  SUPPORTED_LOCALES.forEach(lang => {
    if (lang !== DEFAULT_LOCALE) {
      // 处理 /lang/ 或 /lang 的情况
      const langPrefix = `/${lang}`
      if (currentPath.startsWith(langPrefix + '/') || currentPath === langPrefix) {
        currentPath = currentPath.substring(langPrefix.length) || '/'
      }
    }
  })

  // 确保路径以 / 开头
  if (!currentPath.startsWith('/')) {
    currentPath = '/' + currentPath
  }

  // 构建新路径
  let newPath
  if (newLocale === DEFAULT_LOCALE) {
    newPath = currentPath
  } else {
    newPath = currentPath === '/' ? `/${newLocale}` : `/${newLocale}${currentPath}`
  }

  // 关闭下拉菜单
  closeDropdown()
  
  // 使用 window.location.href 进行完整页面刷新
  window.location.href = newPath
}

// 点击外部关闭下拉菜单
const handleClickOutside = (event) => {
  const switcher = event.target.closest('.language-switcher')
  if (!switcher && isOpen.value) {
    closeDropdown()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.language-switcher {
  position: relative;
  display: inline-block;
}

.current-language {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(155, 89, 182, 0.2);
  border: 1px solid #9b59b6;
  border-radius: 8px;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.current-language:hover {
  background: rgba(155, 89, 182, 0.3);
  transform: translateY(-2px);
}

.language-icon {
  font-size: 18px;
}

.language-name {
  font-weight: 500;
}

.dropdown-icon {
  font-size: 10px;
  transition: transform 0.3s ease;
}

.dropdown-icon.open {
  transform: rotate(180deg);
}

.language-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 180px;
  background: #1a1a1a;
  border: 1px solid #9b59b6;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: 1000;
}

.language-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 16px;
  background: transparent;
  border: none;
  color: #b0b0b0;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
}

.language-option:hover {
  background: rgba(155, 89, 182, 0.2);
  color: #ffffff;
}

.language-option.active {
  background: rgba(155, 89, 182, 0.3);
  color: #ffffff;
  font-weight: 600;
}

.option-name {
  flex: 1;
}

.check-mark {
  color: #27ae60;
  font-weight: bold;
}

/* 下拉动画 */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .current-language {
    padding: 6px 12px;
    font-size: 12px;
  }

  .language-icon {
    font-size: 16px;
  }

  .language-dropdown {
    min-width: 150px;
  }

  .language-option {
    padding: 10px 12px;
    font-size: 12px;
  }
}
</style>


