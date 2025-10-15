import { createI18n } from 'vue-i18n'
import en from './locales/en.js'
import de from './locales/de.js'
import fr from './locales/fr.js'
import es from './locales/es.js'
import ja from './locales/ja.js'
import ko from './locales/ko.js'
import ru from './locales/ru.js'

// 支持的语言列表
export const SUPPORTED_LOCALES = ['en', 'de', 'fr', 'es', 'ja', 'ko', 'ru']

// 语言配置信息
export const LOCALE_INFO = {
  en: { name: 'English', nativeName: 'English' },
  de: { name: 'German', nativeName: 'Deutsch' },
  fr: { name: 'French', nativeName: 'Français' },
  es: { name: 'Spanish', nativeName: 'Español' },
  ja: { name: 'Japanese', nativeName: '日本語' },
  ko: { name: 'Korean', nativeName: '한국어' },
  ru: { name: 'Russian', nativeName: 'Русский' }
}

// 默认语言
export const DEFAULT_LOCALE = 'en'

// 获取初始语言的函数
const getInitialLocale = () => {
  // 1. 优先检查URL中的语言前缀
  const path = window.location.pathname
  
  for (const lang of SUPPORTED_LOCALES) {
    if (lang === DEFAULT_LOCALE) continue // 英文是默认语言，无前缀
    if (path.startsWith(`/${lang}/`) || path === `/${lang}`) {
      return lang
    }
  }
  
  // 2. 检查localStorage中保存的语言
  const savedLocale = localStorage.getItem('language')
  if (savedLocale && SUPPORTED_LOCALES.includes(savedLocale)) {
    return savedLocale
  }
  
  // 3. 检查浏览器语言
  const browserLang = navigator.language.split('-')[0]
  if (SUPPORTED_LOCALES.includes(browserLang)) {
    return browserLang
  }
  
  // 4. 默认返回英文
  return DEFAULT_LOCALE
}

// 创建 i18n 实例
const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: getInitialLocale(),
  fallbackLocale: DEFAULT_LOCALE,
  messages: {
    en,
    de,
    fr,
    es,
    ja,
    ko,
    ru
  }
})

// 导出语言切换函数
export const switchLocale = (locale) => {
  if (SUPPORTED_LOCALES.includes(locale)) {
    i18n.global.locale.value = locale
    localStorage.setItem('language', locale)
    document.documentElement.lang = locale
  }
}

// 导出当前语言获取函数
export const getCurrentLocale = () => {
  return i18n.global.locale.value
}

export default i18n

