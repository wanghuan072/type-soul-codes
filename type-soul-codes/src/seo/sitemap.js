// 站点地图生成器

/**
 * 生成站点地图 XML
 * @param {Array} routes - 路由配置数组
 * @returns {string} 站点地图 XML 字符串
 */
export const generateSitemap = (routes) => {
  const baseUrl = 'https://typesoulcodes.org'
  const currentDate = new Date().toISOString()
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  routes.forEach(route => {
    const {
      path,
      changefreq = 'daily',
      priority = 0.7,
      lastmod = currentDate
    } = route

    sitemap += `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  })

  sitemap += `
</urlset>`

  return sitemap
}

// 导入博客数据
import { posts } from '../data/blog.js'

/**
 * 获取静态页面路由配置
 * @returns {Array} 路由配置数组
 */
export const getStaticRoutes = () => {
  const currentDate = new Date().toISOString()
  
  // 静态页面路由
  const staticRoutes = [
    {
      path: '/',
      changefreq: 'daily',
      priority: 1.0,
      lastmod: currentDate
    },
    {
      path: '/type-soul-emotes',
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: currentDate
    },
    {
      path: '/type-soul-wiki',
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: currentDate
    },
    {
      path: '/blog',
      changefreq: 'daily',
      priority: 0.9,
      lastmod: currentDate
    },
    {
      path: '/privacy-policy',
      changefreq: 'monthly',
      priority: 0.3,
      lastmod: currentDate
    },
    {
      path: '/terms-of-use',
      changefreq: 'monthly',
      priority: 0.3,
      lastmod: currentDate
    },
    {
      path: '/copyright',
      changefreq: 'monthly',
      priority: 0.3,
      lastmod: currentDate
    },
    {
      path: '/about-us',
      changefreq: 'monthly',
      priority: 0.5,
      lastmod: currentDate
    },
    {
      path: '/contact-us',
      changefreq: 'monthly',
      priority: 0.5,
      lastmod: currentDate
    }
  ]
  
  // 博客文章路由
  const blogRoutes = posts.map(post => ({
    path: `/blog/${post.addressBar}`,
    changefreq: 'monthly',
    priority: 0.6,
    lastmod: post.publishDate || currentDate
  }))
  
  return [...staticRoutes, ...blogRoutes]
}

/**
 * 获取博客文章路由配置
 * @param {Array} blogPosts - 博客文章数组
 * @returns {Array} 博客文章路由配置
 */
export const getBlogRoutes = (blogPosts) => {
  const currentDate = new Date().toISOString()
  
  return blogPosts.map(post => ({
    path: `/blog/${post.addressBar}`,
    changefreq: 'monthly',
    priority: 0.6,
    lastmod: post.publishDate || currentDate
  }))
}

/**
 * 生成完整的站点地图
 * @param {Array} blogPosts - 博客文章数组
 * @returns {string} 完整的站点地图 XML
 */
export const generateFullSitemap = (blogPosts = []) => {
  const staticRoutes = getStaticRoutes()
  const blogRoutes = getBlogRoutes(blogPosts)
  const allRoutes = [...staticRoutes, ...blogRoutes]
  
  return generateSitemap(allRoutes)
}


