// Meta 标签管理工具

/**
 * 更新或创建 meta 标签
 * @param {string} name - 标签名称
 * @param {string} content - 标签内容
 * @param {boolean} property - 是否为 property 属性
 */
export const updateMetaTag = (name, content, property = false) => {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
  let meta = document.querySelector(selector)
  
  if (!meta) {
    meta = document.createElement('meta')
    if (property) {
      meta.setAttribute('property', name)
    } else {
      meta.setAttribute('name', name)
    }
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}

/**
 * 更新或创建 link 标签
 * @param {string} rel - 关系类型
 * @param {string} href - 链接地址
 */
export const updateLinkTag = (rel, href) => {
  let link = document.querySelector(`link[rel="${rel}"]`)
  
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', rel)
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

/**
 * 更新页面标题
 * @param {string} title - 页面标题
 */
export const updateTitle = (title) => {
  document.title = title
}

/**
 * 批量更新 meta 标签
 * @param {Object} metaData - meta 数据对象
 */
export const updateMetaTags = (metaData) => {
  const {
    title,
    description,
    keywords,
    canonical,
    author,
    robots,
    themeColor,
    viewport = 'width=device-width, initial-scale=1.0'
  } = metaData

  // 更新页面标题
  if (title) {
    updateTitle(title)
  }

  // 更新基本 meta 标签
  if (description) {
    updateMetaTag('description', description)
  }
  
  if (keywords) {
    updateMetaTag('keywords', keywords)
  }
  
  if (author) {
    updateMetaTag('author', author)
  }
  
  if (robots) {
    updateMetaTag('robots', robots)
  }
  
  if (viewport) {
    updateMetaTag('viewport', viewport)
  }
  
  if (themeColor) {
    updateMetaTag('theme-color', themeColor)
    updateMetaTag('msapplication-TileColor', themeColor)
  }

  // 更新 canonical 链接
  if (canonical) {
    const canonicalUrl = canonical.startsWith('http') ? canonical : `https://typesoulcodes.org${canonical}`
    updateLinkTag('canonical', canonicalUrl)
  }
}

/**
 * 添加结构化数据
 * @param {Object} data - 结构化数据对象
 */
export const addStructuredData = (data) => {
  // 移除现有的结构化数据
  const existingScript = document.querySelector('script[type="application/ld+json"]')
  if (existingScript) {
    existingScript.remove()
  }
  
  if (data) {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
  }
}


