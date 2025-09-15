import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

// 后构建处理：确保 robots.txt 在部署前是正确的
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
  console.log('🔧 后构建处理：强制设置 robots.txt...')
  
  // 确保 dist 目录存在
  if (!existsSync(distDir)) {
    mkdirSync(distDir, { recursive: true })
  }
  
  // 强制写入 robots.txt
  writeFileSync(robotsPath, robotsContent, { flag: 'w' })
  console.log('✅ robots.txt 已设置')
  
  // 验证内容
  const verifyContent = readFileSync(robotsPath, 'utf8')
  if (verifyContent.includes('Google-Extended') || verifyContent.includes('GPTBot')) {
    console.error('❌ 错误：robots.txt 仍然包含不需要的规则！')
    console.log('当前内容：', verifyContent)
    process.exit(1)
  } else {
    console.log('✅ robots.txt 验证通过')
  }
  
  // 创建 .htaccess 文件作为备用方案
  const htaccessContent = `# 强制使用我们的 robots.txt
RewriteEngine On
RewriteRule ^robots\.txt$ /robots.txt [L]`
  
  writeFileSync(join(distDir, '.htaccess'), htaccessContent)
  console.log('✅ .htaccess 文件已创建作为备用方案')
  
} catch (error) {
  console.error('❌ 后构建处理失败:', error)
  process.exit(1)
}
