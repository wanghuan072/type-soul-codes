import { createRouter, createWebHistory } from 'vue-router'
import { updatePageSEO, getPageSEOConfig } from '@/seo/index.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/type-soul-emotes',
      name: 'emotes',
      component: () => import('@/views/EmotesView.vue')
    },
    {
      path: '/type-soul-wiki',
      name: 'wiki',
      component: () => import('@/views/WikiView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/BlogView.vue')
    },
    {
      path: '/type-soul-guides',
      name: 'guides',
      component: () => import('@/views/GuidesView.vue')
    },
    {
      path: '/type-soul-guides/:slug',
      name: 'guide-detail',
      component: () => import('@/views/GuideDetailView.vue')
    },
    {
      path: '/blog/:slug',
      name: 'blog-detail',
      component: () => import('@/views/BlogDetailView.vue')
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('@/views/PrivacyPolicyView.vue')
    },
    {
      path: '/terms-of-use',
      name: 'terms-of-use',
      component: () => import('@/views/TermsOfUseView.vue')
    },
    {
      path: '/copyright',
      name: 'copyright',
      component: () => import('@/views/CopyrightView.vue')
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('@/views/AboutUsView.vue')
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('@/views/ContactUsView.vue')
    },
    {
      path: '/admin/login',
      name: 'admin-login',
      component: () => import('@/views/admin/Login.vue')
    },
    {
      path: '/admin/feedback',
      name: 'admin-feedback',
      component: () => import('@/views/admin/CommentRatingManagement.vue')
    }
  ],
})

// 路由级别的 SEO 管理
router.beforeEach((to, from, next) => {
  // 获取页面 SEO 配置
  const seoConfig = getPageSEOConfig(to.name)
  
  // 更新页面 SEO
  updatePageSEO({
    ...seoConfig,
    canonical: to.path
  })
  
  next()
})


export default router
