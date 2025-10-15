import { createRouter, createWebHistory } from 'vue-router'
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/i18n'
import i18n from '@/i18n'

// 路由配置（不包含语言前缀）
const routes = [
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
]

// 为所有路由添加语言前缀（除了默认语言）
const createLocalizedRoutes = () => {
  const localizedRoutes = []
  
  // 默认语言路由（无前缀）
  localizedRoutes.push(...routes)
  
  // 其他语言路由（带前缀）
  SUPPORTED_LOCALES.forEach(locale => {
    if (locale !== DEFAULT_LOCALE) {
      routes.forEach(route => {
        localizedRoutes.push({
          ...route,
          path: `/${locale}${route.path}`,
          name: `${route.name}-${locale}`
        })
      })
    }
  })
  
  return localizedRoutes
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: createLocalizedRoutes(),
})

// 从路径中提取语言
const getLocaleFromPath = (path) => {
  const pathSegments = path.split('/').filter(Boolean)
  const firstSegment = pathSegments[0]
  
  if (SUPPORTED_LOCALES.includes(firstSegment)) {
    return firstSegment
  }
  
  return DEFAULT_LOCALE
}

// 路由守卫：设置语言
router.beforeEach((to, from, next) => {
  // 从路径中获取语言
  const locale = getLocaleFromPath(to.path)
  
  // 设置当前语言
  if (i18n.global.locale.value !== locale) {
    i18n.global.locale.value = locale
  }
  
  // 持久化语言设置到 localStorage
  localStorage.setItem('language', locale)
  
  // 设置 HTML 的 lang 属性（SEO优化）
  document.documentElement.lang = locale
  
  // SEO 将在各个页面组件中使用 useSEO 处理
  next()
})

export default router
