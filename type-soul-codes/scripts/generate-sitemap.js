import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// 配置
const BASE_URL = 'https://typesoulcodes.org'
const SUPPORTED_LOCALES = ['en', 'de', 'fr', 'es', 'ja', 'ko', 'ru']
const DEFAULT_LOCALE = 'en'

// 语言名称映射
const LANGUAGE_NAMES = {
  en: 'English',
  de: 'German',
  fr: 'French',
  es: 'Spanish',
  ja: 'Japanese',
  ko: 'Korean',
  ru: 'Russian'
}

// 静态页面配置
const staticPages = [
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/type-soul-emotes', priority: 0.8, changefreq: 'weekly' },
  { path: '/type-soul-wiki', priority: 0.8, changefreq: 'weekly' },
  { path: '/blog', priority: 0.9, changefreq: 'daily' },
  { path: '/type-soul-guides', priority: 0.8, changefreq: 'weekly' },
  { path: '/privacy-policy', priority: 0.3, changefreq: 'monthly' },
  { path: '/terms-of-use', priority: 0.3, changefreq: 'monthly' },
  { path: '/copyright', priority: 0.3, changefreq: 'monthly' },
  { path: '/about-us', priority: 0.5, changefreq: 'monthly' },
  { path: '/contact-us', priority: 0.5, changefreq: 'monthly' }
]

/**
 * 加载指定语言的数据
 */
async function loadLanguageData(locale) {
  try {
    const guidesModule = await import(`../src/data/${locale}/guides.js`)
    const blogModule = await import(`../src/data/${locale}/blog.js`)
    
    return {
      guides: guidesModule.guides || [],
      posts: blogModule.posts || []
    }
  } catch (error) {
    console.warn(`⚠️ 无法加载 ${locale} 语言数据:`, error.message)
    return { guides: [], posts: [] }
  }
}

/**
 * 为指定语言生成所有URL
 */
function generateLocalizedURLs(locale, dynamicContent) {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`
  const urls = []
  
  // 静态页面
  staticPages.forEach(page => {
    urls.push({
      loc: `${prefix}${page.path}`,
      lastmod: new Date().toISOString().split('T')[0],
      priority: page.priority,
      changefreq: page.changefreq,
      locale: locale
    })
  })
  
  // 博客文章
  dynamicContent.posts.forEach(post => {
    urls.push({
      loc: `${prefix}/blog/${post.addressBar}`,
      lastmod: post.publishDate || new Date().toISOString().split('T')[0],
      priority: 0.6,
      changefreq: 'monthly',
      locale: locale
    })
  })
  
  // 攻略指南
  dynamicContent.guides.forEach(guide => {
    urls.push({
      loc: `${prefix}/type-soul-guides/${guide.addressBar}`,
      lastmod: guide.publishDate || new Date().toISOString().split('T')[0],
      priority: 0.7,
      changefreq: 'monthly',
      locale: locale
    })
  })
  
  return urls
}

/**
 * 生成站点地图 XML
 */
function generateSitemapXML(allUrls) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  // 按语言分组生成
  SUPPORTED_LOCALES.forEach(locale => {
    const localeUrls = allUrls.filter(url => url.locale === locale)
    
    if (localeUrls.length === 0) return
    
    const langName = LANGUAGE_NAMES[locale] || locale.toUpperCase()
    const langComment = locale === DEFAULT_LOCALE 
      ? `${langName} Pages (Default)` 
      : `${langName} Pages (${locale})`
    
    xml += `\n    <!-- ${langComment} -->`
    
    localeUrls.forEach(url => {
      xml += `
    <url>
        <loc>${BASE_URL}${url.loc}</loc>
        <lastmod>${url.lastmod}</lastmod>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
    </url>`
    })
    
    xml += '\n'
  })

  xml += `
</urlset>`
  
  return xml
}

/**
 * 主函数
 */
async function generateSitemap() {
  console.log('🚀 开始生成多语言站点地图...\n')
  
  const allUrls = []
  
  // 为每种语言生成URL
  for (const locale of SUPPORTED_LOCALES) {
    console.log(`📄 处理 ${LANGUAGE_NAMES[locale]} (${locale}) 语言...`)
    
    const dynamicContent = await loadLanguageData(locale)
    const urls = generateLocalizedURLs(locale, dynamicContent)
    
    allUrls.push(...urls)
    
    const staticCount = staticPages.length
    const blogCount = dynamicContent.posts.length
    const guideCount = dynamicContent.guides.length
    const totalCount = urls.length
    
    console.log(`   ✓ 静态页面: ${staticCount}`)
    console.log(`   ✓ 博客文章: ${blogCount}`)
    console.log(`   ✓ 攻略指南: ${guideCount}`)
    console.log(`   ✓ 总计: ${totalCount} 个URL\n`)
  }
  
  // 生成 XML
  const sitemapXML = generateSitemapXML(allUrls)
  
  // 确保目录存在
  if (!existsSync('dist')) {
    mkdirSync('dist', { recursive: true })
  }
  
  if (!existsSync('public')) {
    mkdirSync('public', { recursive: true })
  }
  
  // 写入文件
  writeFileSync('dist/sitemap.xml', sitemapXML)
  writeFileSync('public/sitemap.xml', sitemapXML)
  
  console.log('✅ 站点地图生成完成!')
  console.log(`📊 总计: ${allUrls.length} 个URL`)
  console.log(`📍 文件已保存:`)
  console.log(`   - public/sitemap.xml`)
  console.log(`   - dist/sitemap.xml`)
}

// 运行
generateSitemap().catch(error => {
  console.error('❌ 生成站点地图时出错:', error)
  process.exit(1)
})
