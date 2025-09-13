// 社交媒体元标签管理

import { updateMetaTag } from './meta-tags.js'

/**
 * 更新社交媒体元标签
 * @param {Object} socialData - 社交媒体数据
 * @param {string} socialData.title - 标题
 * @param {string} socialData.description - 描述
 * @param {string} socialData.url - URL
 * @param {string} socialData.image - 图片
 * @param {string} socialData.type - 类型 (website/article)
 */
export const updateSocialMedia = (socialData) => {
  const {
    title,
    description,
    url,
    image = 'https://typesoulcodes.org/og-image.jpg',
    type = 'website'
  } = socialData

  // 更新 Open Graph 标签
  if (title) {
    updateMetaTag('og:title', title, true)
  }
  
  if (description) {
    updateMetaTag('og:description', description, true)
  }
  
  if (url) {
    const fullUrl = url.startsWith('http') ? url : `https://typesoulcodes.org${url}`
    updateMetaTag('og:url', fullUrl, true)
  }
  
  updateMetaTag('og:type', type, true)
  updateMetaTag('og:image', image, true)
  updateMetaTag('og:site_name', 'Type Soul Codes', true)
  updateMetaTag('og:locale', 'en_US', true)

  // 更新 Twitter Card 标签
  updateMetaTag('twitter:card', 'summary_large_image')
  
  if (title) {
    updateMetaTag('twitter:title', title)
  }
  
  if (description) {
    updateMetaTag('twitter:description', description)
  }
  
  updateMetaTag('twitter:image', image)
  updateMetaTag('twitter:site', '@typesoulcodes')
  updateMetaTag('twitter:creator', '@typesoulcodes')

  // 更新其他移动端标签
  updateMetaTag('apple-mobile-web-app-capable', 'yes')
  updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent')
}

/**
 * 为博客文章更新社交媒体标签
 * @param {Object} postData - 博客文章数据
 */
export const updateBlogSocialMedia = (postData) => {
  const {
    title,
    description,
    imageUrl,
    publishDate,
    id
  } = postData

  const socialData = {
    title: title,
    description: description,
    url: `/blog/${id}`,
    image: imageUrl || 'https://typesoulcodes.org/og-image.jpg',
    type: 'article'
  }

  updateSocialMedia(socialData)

  // 添加文章特定的 Open Graph 标签
  if (publishDate) {
    updateMetaTag('article:published_time', publishDate, true)
  }
  
  updateMetaTag('article:author', 'Type Soul Codes', true)
  updateMetaTag('article:section', 'Gaming', true)
  updateMetaTag('article:tag', 'Type Soul', true)
}
