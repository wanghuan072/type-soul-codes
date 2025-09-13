/**
 * 图片路径工具函数
 * 确保在所有环境中都能正确解析图片路径
 */

/**
 * 获取图片的完整路径
 * @param {string} imagePath - 图片路径，例如 '/images/example.webp'
 * @returns {string} - 完整的图片URL
 */
export function getImageUrl(imagePath) {
  // 如果路径已经包含域名，直接返回
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath
  }
  
  // 确保路径以 / 开头
  const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`
  
  // 在开发环境中，直接返回路径
  if (import.meta.env.DEV) {
    return normalizedPath
  }
  
  // 在生产环境中，使用当前域名
  return normalizedPath
}

/**
 * 获取表情包图片路径
 * @param {string} filename - 文件名，例如 'Rest1.webp'
 * @returns {string} - 完整的图片URL
 */
export function getEmoteImageUrl(filename) {
  return getImageUrl(`/images/emotes/${filename}`)
}

/**
 * 获取博客图片路径
 * @param {string} filename - 文件名，例如 'blog-01.webp'
 * @returns {string} - 完整的图片URL
 */
export function getBlogImageUrl(filename) {
  return getImageUrl(`/images/blog/${filename}`)
}

/**
 * 获取指南图片路径
 * @param {string} filename - 文件名，例如 'guides-01.webp'
 * @returns {string} - 完整的图片URL
 */
export function getGuideImageUrl(filename) {
  return getImageUrl(`/images/guides/${filename}`)
}
