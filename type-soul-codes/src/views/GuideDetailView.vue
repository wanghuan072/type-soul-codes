<template>
  <div class="guide-detail-page">
    <!-- Header Component -->
    <HeaderComponent />

    <!-- Guide Detail -->
    <section class="guide-detail" v-if="guide">
      <div class="container">
        <!-- Hero Image with Overlay Text -->
        <div class="post-hero">
          <div class="hero-image">
            <img :src="guide.imageUrl" :alt="guide.imageAlt" />
            <div class="hero-overlay">
              <!-- Back Button in top-left corner -->
              <button @click="goBack" class="back-button">
                <span class="back-icon">←</span>
                Back to Guides
              </button>
              <div class="hero-content">
                <div class="hero-meta">
                  <span class="hero-category">{{ getCategoryLabel(guide.category) }}</span>
                  <span class="hero-difficulty" :class="guide.difficulty?.toLowerCase()">{{
                    guide.difficulty
                  }}</span>
                  <span class="hero-date">{{ formatDate(guide.publishDate) }}</span>
                </div>
                <h1 class="hero-title">{{ guide.title }}</h1>
                <p class="hero-description">{{ guide.description }}</p>
                <div class="hero-tags">
                  <span v-for="tag in guide.tags" :key="tag" class="tag">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Guide Content Layout -->
        <div class="guide-content-layout">
          <!-- Left Column: Guide Content -->
          <div class="guide-content-column">
            <div class="post-content" v-html="guide.detailsHtml"></div>
          </div>
          
          <!-- Right Column: Comment & Rating System -->
          <div class="comment-rating-column">
            <CommentRatingSystem 
              :guide-id="guide.addressBar" 
              @success="showMessage"
              @error="showMessage"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Component -->
    <FooterComponent />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { guides as guidesData } from '@/data/guides.js'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import CommentRatingSystem from '@/components/CommentRatingSystem.vue'
import { updatePageSEO } from '@/seo/index.js'
import { showMessage } from '@/utils/message.js'

const route = useRoute()
const router = useRouter()

// 响应式数据
const guide = ref(null)

// 方法
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const goBack = () => {
  router.push('/type-soul-guides')
}

const getCategoryLabel = (category) => {
  const categoryMap = {
    beginner: 'Beginner',
    races: 'Races',
    combat: 'Combat',
    progression: 'Progression',
    equipment: 'Equipment',
    social: 'Social',
    advanced: 'Advanced',
  }
  return categoryMap[category] || category
}

// 获取指南数据的函数
const fetchGuideData = (slug) => {
  const foundGuide = guidesData.find((g) => g.addressBar === slug)

  if (foundGuide) {
    guide.value = foundGuide

    // 更新页面SEO信息
    updatePageSEO({
      title: foundGuide.seo.title,
      description: foundGuide.seo.description,
      keywords: foundGuide.seo.keywords,
      canonical: `/type-soul-guides/${foundGuide.addressBar}`,
      type: 'article',
    })
  } else {
    // 如果找不到指南，重定向到指南列表页
    router.push('/type-soul-guides')
  }
}

// 生命周期
onMounted(() => {
  fetchGuideData(route.params.slug)
})

// 监听路由变化
watch(
  () => route.params.slug,
  (newSlug) => {
    fetchGuideData(newSlug)
  }
)
</script>

<style scoped>
@import '@/styles/content-styles.css';
/* 全局样式 */
.guide-detail-page {
  background: #0a0a0a;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
}

/* Back Button in Hero Overlay */
.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid #9b59b6;
  color: #9b59b6;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
  backdrop-filter: blur(10px);
}

.back-button:hover {
  background: #9b59b6;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(155, 89, 182, 0.4);
}

.back-icon {
  font-size: 16px;
  font-weight: bold;
}

/* Guide Detail Section */
.guide-detail {
  padding: 60px 0;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
}

/* Hero Image with Overlay */
.post-hero {
  margin-bottom: 60px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  position: relative;
}

.hero-image {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  display: flex;
  align-items: center;
  padding: 60px;
}

.hero-content {
  max-width: 800px;
  color: #ffffff;
}

.hero-meta {
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.hero-category {
  background: #9b59b6;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
}

.hero-difficulty {
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
}

.hero-difficulty.easy {
  background: #27ae60;
  color: #ffffff;
}

.hero-difficulty.medium {
  background: #f39c12;
  color: #ffffff;
}

.hero-difficulty.hard {
  background: #e74c3c;
  color: #ffffff;
}

.hero-difficulty.expert {
  background: #8e44ad;
  color: #ffffff;
}

.hero-date {
  font-size: 16px;
  color: #9b59b6;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.2;
  background: linear-gradient(45deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-description {
  font-size: 20px;
  color: #e0e0e0;
  line-height: 1.6;
  margin-bottom: 25px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background: rgba(42, 42, 42, 0.8);
  color: #b0b0b0;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Guide Content Layout */
.guide-content-layout {
  display: flex;
  gap: 20px;
}

.guide-content-column{
  flex: 1;
}

.comment-rating-column{
  width: 30%;
}

/* 内容样式已移至公共样式文件 */

/* Responsive Design */
@media (max-width: 1024px) {
  .back-button {
    top: 15px;
    left: 15px;
    padding: 8px 16px;
    font-size: 12px;
  }

  .guide-content-layout {
    flex-direction: column;
  }

  .comment-rating-column{
    width: 100%;
  }
}

@media (max-width: 768px) {
  .back-button {
    top: 10px;
    left: 10px;
    padding: 6px 12px;
    font-size: 11px;
  }

  .hero-overlay {
    padding: 40px 30px;
  }

  .hero-title {
    font-size: 32px;
  }

  .hero-description {
    font-size: 18px;
  }

  .hero-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .hero-image {
    height: 400px;
  }

  /* 响应式内容样式已移至公共样式文件 */
}

@media (max-width: 480px) {
  .back-button {
    top: 8px;
    left: 8px;
    padding: 5px 10px;
    font-size: 10px;
  }

  .hero-overlay {
    padding: 30px 20px;
  }

  .hero-title {
    font-size: 24px;
  }

  .hero-description {
    font-size: 16px;
  }

  .hero-image {
    height: 300px;
  }

  /* 响应式内容样式已移至公共样式文件 */
}
</style>
