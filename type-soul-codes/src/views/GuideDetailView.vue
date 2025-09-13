<template>
  <div class="guide-detail-page">
    <!-- Header Component -->
    <HeaderComponent />

    <!-- Back Button -->
    <section class="back-section">
      <div class="container">
        <button @click="goBack" class="back-button">
          <span class="back-icon">←</span>
          Back to Guides
        </button>
      </div>
    </section>

    <!-- Guide Detail -->
    <section class="guide-detail" v-if="guide">
      <div class="container">
        <!-- Hero Image with Overlay Text -->
        <div class="post-hero">
          <div class="hero-image">
            <img :src="guide.imageUrl" :alt="guide.imageAlt" />
            <div class="hero-overlay">
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

        <!-- Guide Content -->
        <div class="post-content" v-html="guide.detailsHtml"></div>
        
        <!-- Comment & Rating System -->
        <CommentRatingSystem 
          :guide-id="guide.addressBar" 
          @success="showMessage"
          @error="showMessage"
        />
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
  router.push('/guides')
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
      canonical: `/guides/${foundGuide.addressBar}`,
      type: 'article',
    })
  } else {
    // 如果找不到指南，重定向到指南列表页
    router.push('/guides')
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
/* 全局样式 */
.guide-detail-page {
  background: #0a0a0a;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
}

/* Back Section */
.back-section {
  padding: 20px 0;
  background: #1a1a1a;
  border-bottom: 1px solid #333;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  color: #9b59b6;
  border: 2px solid #9b59b6;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 16px;
  font-weight: bold;
}

.back-button:hover {
  background: #9b59b6;
  color: #ffffff;
  transform: translateY(-2px);
}

.back-icon {
  font-size: 18px;
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

.post-content {
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.8;
}

.post-content :deep(h1) {
  font-size: 32px;
  font-weight: bold;
  margin: 40px 0 20px 0;
  color: #ffffff;
  background: linear-gradient(45deg, #9b59b6, #8e44ad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.post-content :deep(h2) {
  font-size: 32px;
  font-weight: bold;
  margin: 40px 0 20px 0;
  color: #ffffff;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.post-content :deep(h3) {
  font-size: 24px;
  font-weight: bold;
  margin: 30px 0 15px 0;
  color: #ffffff;
  background: linear-gradient(45deg, #9b59b6, #8e44ad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.post-content :deep(h4) {
  font-size: 20px;
  font-weight: bold;
  margin: 25px 0 10px 0;
  color: #4ecdc4;
}

.post-content :deep(p) {
  color: #b0b0b0;
  margin-bottom: 20px;
}

.post-content :deep(ul) {
  margin: 20px 0;
  padding-left: 20px;
}

.post-content :deep(ol) {
  margin: 20px 0;
  padding-left: 20px;
}

.post-content :deep(li) {
  margin-bottom: 10px;
  color: #b0b0b0;
}

.post-content :deep(strong) {
  color: #9b59b6;
  font-weight: bold;
}

.post-content :deep(em) {
  color: #f39c12;
  font-style: italic;
}

/* Responsive Design */
@media (max-width: 768px) {
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

  .post-content :deep(h1) {
    font-size: 24px;
  }

  .post-content :deep(h2) {
    font-size: 24px;
  }

  .post-content :deep(h3) {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
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

  .post-content {
    font-size: 16px;
  }

  .post-content :deep(h1) {
    font-size: 20px;
  }

  .post-content :deep(h2) {
    font-size: 20px;
  }

  .post-content :deep(h3) {
    font-size: 18px;
  }
}
</style>
