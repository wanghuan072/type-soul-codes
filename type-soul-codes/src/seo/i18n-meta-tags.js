import { useI18n } from 'vue-i18n'
import i18n from '@/i18n'

/**
 * 手动设置 SEO（不依赖 Vue composables，可在任何地方调用）
 * @param {Object} seoData - SEO 数据 { title, description, keywords, canonical }
 * @param {string} locale - 当前语言
 */
export function setSEO(seoData, locale = 'en') {
  if (typeof document === 'undefined') return
  
  const { title, description, keywords, canonical } = seoData
  
  // 更新 document title
  if (title) {
    document.title = title
  }
  
  // 更新 meta tags
  if (description) updateMetaTag('description', description)
  if (keywords) updateMetaTag('keywords', keywords)
  if (title) updateMetaTag('og:title', title, 'property')
  if (description) updateMetaTag('og:description', description, 'property')
  updateMetaTag('og:locale', locale, 'property')
  if (title) updateMetaTag('twitter:title', title)
  if (description) updateMetaTag('twitter:description', description)
  
  // 更新 canonical URL（包含语言前缀）
  if (canonical) {
    const canonicalUrl = locale === 'en' 
      ? canonical 
      : `/${locale}${canonical}`
    updateLinkTag('canonical', `https://typesoulcodes.org${canonicalUrl}`)
  }
}

/**
 * 更新或创建 meta 标签
 */
function updateMetaTag(name, content, attribute = 'name') {
  let element = document.querySelector(`meta[${attribute}="${name}"]`)
  
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  
  element.setAttribute('content', content)
}

/**
 * 更新或创建 link 标签
 */
function updateLinkTag(rel, href) {
  let element = document.querySelector(`link[rel="${rel}"]`)
  
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  
  element.setAttribute('href', href)
}

/**
 * 在 Vue 组件中使用的 Composable
 */
export function useSEO(pageName, customMeta = {}) {
  const { t, locale } = useI18n()
  
  const updateSEO = () => {
    const seoKey = `seo.${pageName}`
    
    try {
      const title = customMeta.title || t(`${seoKey}.title`)
      const description = customMeta.description || t(`${seoKey}.description`)
      const keywords = customMeta.keywords || t(`${seoKey}.keywords`)
      
      // 更新 document title
      document.title = title
      
      // 更新 meta tags
      updateMetaTag('description', description)
      updateMetaTag('keywords', keywords)
      updateMetaTag('og:title', title, 'property')
      updateMetaTag('og:description', description, 'property')
      updateMetaTag('og:locale', locale.value, 'property')
      updateMetaTag('twitter:title', title)
      updateMetaTag('twitter:description', description)
      
      // 更新 canonical URL（包含语言前缀）
      if (customMeta.canonical) {
        const canonicalUrl = locale.value === 'en' 
          ? customMeta.canonical 
          : `/${locale.value}${customMeta.canonical}`
        updateLinkTag('canonical', `https://typesoulcodes.org${canonicalUrl}`)
      }
    } catch (error) {
      console.warn('SEO update failed:', error)
    }
  }
  
  return {
    updateSEO
  }
}

