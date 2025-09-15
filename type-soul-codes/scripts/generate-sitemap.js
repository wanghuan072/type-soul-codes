import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { getStaticRoutes } from '../src/seo/sitemap.js'
import { guides } from '../src/data/guides.js'

// 生成站点地图
const staticRoutes = getStaticRoutes()
const guideRoutes = guides.map(guide => ({
  path: `/type-soul-guides/${guide.addressBar}`,
  changefreq: 'monthly',
  priority: 0.7,
  lastmod: guide.publishDate || new Date().toISOString()
}))

const routes = [...staticRoutes, ...guideRoutes]
const sitemap = generateSitemap(routes)

// 确保 dist 目录存在
if (!existsSync('dist')) {
  mkdirSync('dist')
}

// 写入文件
writeFileSync('dist/sitemap.xml', sitemap)
console.log('站点地图已生成:', routes.length, '个页面')

function generateSitemap(routes) {
  const baseUrl = 'https://typesoulcodes.org'
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  routes.forEach(route => {
    const {
      path,
      changefreq = 'daily',
      priority = 0.7,
      lastmod = new Date().toISOString()
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
