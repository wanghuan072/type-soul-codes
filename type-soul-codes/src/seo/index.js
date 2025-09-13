// SEO 核心管理工具
import { updateMetaTags } from './meta-tags.js'
import { updateSocialMedia } from './social-media.js'
import { generateSitemap } from './sitemap.js'

/**
 * 更新页面 SEO 元数据
 * @param {Object} seoData - SEO 数据对象
 * @param {string} seoData.title - 页面标题
 * @param {string} seoData.description - 页面描述
 * @param {string} seoData.keywords - 关键词
 * @param {string} seoData.canonical - 规范链接
 * @param {string} seoData.image - 社交媒体图片
 * @param {string} seoData.type - 页面类型 (website/article)
 */
export const updatePageSEO = (seoData) => {
  const {
    title,
    description,
    keywords,
    canonical,
    image = 'https://typesoulcodes.org/og-image.jpg',
    type = 'website'
  } = seoData

  // 更新基本 meta 标签
  updateMetaTags({
    title,
    description,
    keywords,
    canonical,
    author: 'Type Soul Codes',
    robots: 'index, follow',
    themeColor: '#9b59b6'
  })

  // 更新社交媒体标签
  updateSocialMedia({
    title,
    description,
    url: canonical,
    image,
    type
  })
}

/**
 * 生成动态站点地图
 * @param {Array} routes - 路由数组
 * @returns {string} 站点地图 XML
 */
export const generateDynamicSitemap = (routes) => {
  return generateSitemap(routes)
}

/**
 * 获取页面 SEO 配置
 * @param {string} routeName - 路由名称
 * @returns {Object} SEO 配置
 */
export const getPageSEOConfig = (routeName) => {
  const seoConfigs = {
    home: {
      title: 'Type Soul Codes - Get Free Codes & Rewards | 99.9% Success Rate',
      description: 'Get the latest Type Soul codes with 99.9% success rate. Daily updated codes, guides, emotes, and wiki for Type Soul game on Roblox. Free rewards and exclusive items.',
      keywords: 'type soul, type soul codes, roblox codes, type soul guide, type soul wiki, type soul emotes, free codes, game codes, soul reaper, quincy, arrancar, fullbringer',
      canonical: '/',
      type: 'website'
    },
    emotes: {
      title: 'Type Soul Emotes List - All Commands & Animations | typesoulcodes.org',
      description: 'Complete list of Type Soul emotes with commands and descriptions. Express yourself with character animations and poses in Type Soul game.',
      keywords: 'type soul emotes, type soul commands, type soul animations, roblox emotes, character poses, roleplay emotes',
      canonical: '/emotes',
      type: 'website'
    },
    wiki: {
      title: 'Type Soul Wiki - Complete Game Guide | Races, Locations & Abilities',
      description: 'Complete Type Soul wiki with guides for all races (Soul Reaper, Quincy, Arrancar, Fullbringer), locations, abilities, and game mechanics.',
      keywords: 'type soul wiki, type soul guide, soul reaper guide, quincy guide, arrancar guide, fullbringer guide, type soul locations, type soul abilities',
      canonical: '/wiki',
      type: 'website'
    },
    blog: {
      title: 'Type Soul Blog - Guides, Tips & Strategies | typesoulcodes.org',
      description: 'Read the latest Type Soul guides, strategies, and tips on our blog. Expert advice for Soul Reapers, Quincy, Arrancar, and Fullbringer players.',
      keywords: 'type soul blog, type soul guides, type soul tips, type soul strategies, soul reaper guide, quincy guide, arrancar guide, fullbringer guide',
      canonical: '/blog',
      type: 'website'
    },
    guides: {
      title: 'Type Soul Guides - Complete Game Tutorials & Strategies | typesoulcodes.org111',
      description: 'Master Type Soul with our comprehensive collection of guides, tutorials, and strategies. From beginner guides to advanced techniques for all races.',
      keywords: 'type soul guides, type soul tutorials, type soul strategies, soul reaper guide, quincy guide, arrancar guide, fullbringer guide, type soul tips, game guides',
      canonical: '/guides',
      type: 'website'
    },
    'guide-detail': {
      title: 'Type Soul Guide - Complete Tutorial & Strategy | typesoulcodes.org',
      description: 'Master Type Soul with our detailed guide. Learn advanced strategies, techniques, and tips to improve your gameplay and dominate the battlefield.',
      keywords: 'type soul guide, type soul tutorial, type soul strategy, game guide, type soul tips',
      canonical: '/guides',
      type: 'article'
    },
    'privacy-policy': {
      title: 'Privacy Policy - Type Soul Codes | typesoulcodes.org',
      description: 'Read our privacy policy to understand how we collect, use, and protect your personal information on typesoulcodes.org.',
      keywords: 'privacy policy, data protection, personal information, typesoulcodes privacy',
      canonical: '/privacy-policy',
      type: 'website'
    },
    'terms-of-use': {
      title: 'Terms of Use - Type Soul Codes | typesoulcodes.org',
      description: 'Read our terms of use to understand the rules and conditions for using typesoulcodes.org and our services.',
      keywords: 'terms of use, terms and conditions, user agreement, typesoulcodes terms',
      canonical: '/terms-of-use',
      type: 'website'
    },
    copyright: {
      title: 'Copyright Notice - Type Soul Codes | typesoulcodes.org',
      description: 'Read our copyright notice and intellectual property rights information for typesoulcodes.org.',
      keywords: 'copyright, intellectual property, DMCA, typesoulcodes copyright',
      canonical: '/copyright',
      type: 'website'
    },
    'about-us': {
      title: 'About Us - Type Soul Codes Team | typesoulcodes.org',
      description: 'Learn about the Type Soul Codes team and our mission to provide the best Type Soul codes, guides, and community resources.',
      keywords: 'about us, team, mission, typesoulcodes team, type soul community',
      canonical: '/about-us',
      type: 'website'
    },
    'contact-us': {
      title: 'Contact Us - Type Soul Codes Support | typesoulcodes.org',
      description: 'Get in touch with the Type Soul Codes team. Contact us for support, feedback, or any questions about our services.',
      keywords: 'contact us, support, help, feedback, typesoulcodes contact',
      canonical: '/contact-us',
      type: 'website'
    }
  }

  return seoConfigs[routeName] || {
    title: 'Type Soul Codes - Get Free Codes & Guides',
    description: 'Get the latest Type Soul codes with 99.9% success rate. Daily updated codes, guides, emotes, and wiki for Type Soul game on Roblox.',
    keywords: 'type soul, type soul codes, roblox codes, type soul guide, type soul wiki, type soul emotes, free codes, game codes',
    canonical: '/',
    type: 'website'
  }
}
