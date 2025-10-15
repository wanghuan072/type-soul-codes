import { useI18n } from 'vue-i18n'
import { DEFAULT_LOCALE } from '@/i18n'

// 动态加载数据文件
export function useDataLoader() {
  const { locale } = useI18n()
  
  const loadCodes = async () => {
    try {
      const lang = locale.value || DEFAULT_LOCALE
      const module = await import(`@/data/${lang}/codes.js`)
      return module.codes
    } catch (error) {
      // 如果当前语言的数据不存在，回退到默认语言
      const module = await import(`@/data/${DEFAULT_LOCALE}/codes.js`)
      return module.codes
    }
  }

  const loadBlog = async () => {
    try {
      const lang = locale.value || DEFAULT_LOCALE
      const module = await import(`@/data/${lang}/blog.js`)
      return module.posts
    } catch (error) {
      const module = await import(`@/data/${DEFAULT_LOCALE}/blog.js`)
      return module.posts
    }
  }

  const loadGuides = async () => {
    try {
      const lang = locale.value || DEFAULT_LOCALE
      const module = await import(`@/data/${lang}/guides.js`)
      return module.guides
    } catch (error) {
      const module = await import(`@/data/${DEFAULT_LOCALE}/guides.js`)
      return module.guides
    }
  }

  const loadEmotes = async () => {
    try {
      const lang = locale.value || DEFAULT_LOCALE
      const module = await import(`@/data/${lang}/emotes.js`)
      return module.emotes
    } catch (error) {
      const module = await import(`@/data/${DEFAULT_LOCALE}/emotes.js`)
      return module.emotes
    }
  }

  return {
    loadCodes,
    loadBlog,
    loadGuides,
    loadEmotes
  }
}


