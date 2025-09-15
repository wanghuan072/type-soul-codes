import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

// 强制覆盖 robots.txt 文件，确保没有任何不需要的规则
const distDir = 'dist'
const robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://typesoulcodes.org/sitemap.xml

# Disallow admin areas (if any)
Disallow: /admin/
Disallow: /api/

# Allow all other content
Allow: /emotes
Allow: /wiki
Allow: /blog
Allow: /privacy-policy
Allow: /terms-of-use
Allow: /copyright
Allow: /about-us
Allow: /contact-us

# Crawl delay
Crawl-delay: 1`

const robotsPath = join(distDir, 'robots.txt')

try {
  if (!existsSync(distDir)) {
    mkdirSync(distDir, { recursive: true })
  }
  
  console.log('🔧 强制覆盖 robots.txt 文件...')
  writeFileSync(robotsPath, robotsContent, { flag: 'w' })
  console.log('✅ robots.txt 已强制写入')
  
  // 验证文件内容
  const verifyContent = readFileSync(robotsPath, 'utf8')
  if (verifyContent.includes('Google-Extended') || verifyContent.includes('GPTBot')) {
    console.error('❌ 警告：robots.txt 仍然包含不需要的规则！')
    console.log('当前内容：', verifyContent)
    process.exit(1)
  } else {
    console.log('✅ robots.txt 内容验证通过，不包含 Google-Extended 或 GPTBot 规则')
    console.log('📄 最终内容：\n', verifyContent)
  }
} catch (error) {
  console.error('❌ 强制覆盖 robots.txt 失败:', error)
  process.exit(1)
}
