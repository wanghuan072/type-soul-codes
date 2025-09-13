// 博客 SEO 管理工具

import { updatePageSEO } from './index.js'
import { updateBlogSocialMedia } from './social-media.js'
import { addStructuredData } from './meta-tags.js'

/**
 * 更新博客文章 SEO
 * @param {Object} postData - 博客文章数据
 */
export const updateBlogPostSEO = (postData) => {
  if (!postData) return

  const {
    title,
    description,
    imageUrl,
    publishDate,
    id,
    seo
  } = postData

  // 使用 SEO 字段中的数据，如果没有则使用默认值
  const seoTitle = seo?.title || title
  const seoDescription = seo?.description || description
  const seoKeywords = seo?.keywords || 'type soul blog, type soul guide, type soul tips'

  // 更新基本 SEO
  updatePageSEO({
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    canonical: `/blog/${postData.addressBar}`,
    image: imageUrl,
    type: 'article'
  })

  // 更新社交媒体标签
  updateBlogSocialMedia({
    ...postData,
    title: seoTitle,
    description: seoDescription
  })

  // 添加结构化数据
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: seoTitle,
    description: seoDescription,
    url: `https://typesoulcodes.org/blog/${postData.addressBar}`,
    datePublished: publishDate,
    author: {
      '@type': 'Organization',
      name: 'Type Soul Codes',
      url: 'https://typesoulcodes.org'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Type Soul Codes',
      url: 'https://typesoulcodes.org'
    },
    image: imageUrl || 'https://typesoulcodes.org/og-image.jpg'
  }

  addStructuredData(structuredData)
}

/**
 * 更新博客列表页 SEO
 * @param {Array} blogPosts - 博客文章数组
 */
export const updateBlogListSEO = (blogPosts = []) => {
  // 更新基本 SEO
  updatePageSEO({
    title: 'Type Soul Blog - Guides, Tips & Strategies | typesoulcodes.org',
    description: 'Read the latest Type Soul guides, strategies, and tips on our blog. Expert advice for Soul Reapers, Quincy, Arrancar, and Fullbringer players.',
    keywords: 'type soul blog, type soul guides, type soul tips, type soul strategies, soul reaper guide, quincy guide, arrancar guide, fullbringer guide',
    canonical: '/blog',
    type: 'website'
  })

  // 添加博客结构化数据
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Type Soul Blog',
    url: 'https://typesoulcodes.org/blog',
    description: 'Read the latest Type Soul guides, strategies, and tips on our blog.',
    publisher: {
      '@type': 'Organization',
      name: 'Type Soul Codes',
      url: 'https://typesoulcodes.org'
    },
    blogPost: blogPosts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `https://typesoulcodes.org/blog/${post.addressBar}`,
      datePublished: post.publishDate,
      author: {
        '@type': 'Organization',
        name: 'Type Soul Codes'
      }
    }))
  }

  addStructuredData(structuredData)
}
