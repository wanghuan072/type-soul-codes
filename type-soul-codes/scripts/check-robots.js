import { readFileSync } from 'fs'

// 检查本地 robots.txt 内容
console.log('🔍 检查本地 robots.txt 内容:')
console.log('=' .repeat(50))

try {
  const localRobots = readFileSync('dist/robots.txt', 'utf8')
  console.log(localRobots)
  
  // 检查是否包含不需要的规则
  if (localRobots.includes('Google-Extended') || localRobots.includes('GPTBot')) {
    console.log('\n❌ 警告：本地 robots.txt 包含不需要的规则！')
  } else {
    console.log('\n✅ 本地 robots.txt 内容正常，不包含 Google-Extended 或 GPTBot 规则')
  }
} catch (error) {
  console.error('❌ 读取本地 robots.txt 失败:', error.message)
}

console.log('\n' + '=' .repeat(50))
console.log('📋 请手动检查线上 robots.txt:')
console.log('1. 访问: https://typesoulcodes.org/robots.txt')
console.log('2. 查看是否包含以下规则:')
console.log('   - User-agent: Google-Extended')
console.log('   - User-agent: GPTBot')
console.log('   - Disallow: /')
console.log('\n如果线上仍然有这些规则，说明是部署平台的问题。')
