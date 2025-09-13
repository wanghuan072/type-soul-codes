<template>
  <div class="guides-page">
    <!-- Header Component -->
    <HeaderComponent />

    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="container">
        <div class="hero-wrap">
          <div class="hero-content">
            <h1 class="main-title">Type Soul Guides</h1>
            <p class="hero-description">
              Master Type Soul with our comprehensive collection of guides, strategies, and tips.
              From beginner tutorials to advanced techniques, we've got you covered.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Guides Grid Section -->
    <section class="guides-grid" id="guides-list">
      <div class="container">
        <div class="guides-wrap">
          <h2 class="section-title">All Guides</h2>
          <p class="section-description">
            Browse through our complete collection of Type Soul guides. Each guide includes detailed
            instructions, tips, and strategies to help you master the game.
          </p>
          <div class="guides-cards">
            <div
              v-for="guide in guides"
              :key="guide.id"
              class="guide-card"
              @click="viewGuide(guide)"
            >
              <div class="guide-image">
                <img :src="guide.imageUrl" :alt="guide.imageAlt" />
                <div class="guide-overlay">
                  <span class="read-more">Read Guide</span>
                </div>
                <div class="guide-difficulty" :class="guide.difficulty.toLowerCase()">
                  {{ guide.difficulty }}
                </div>
              </div>
              <div class="guide-content">
                <div class="guide-meta">
                  <span class="guide-category">{{ getCategoryLabel(guide.category) }}</span>
                  <span class="guide-read-time">{{ guide.readTime }}</span>
                </div>
                <h3 class="guide-title">{{ guide.title }}</h3>
                <p class="guide-description">{{ guide.description }}</p>
                <div class="guide-tags">
                  <span v-for="tag in guide.tags.slice(0, 3)" :key="tag" class="tag">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Component -->
    <FooterComponent />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { guides as guidesData } from '@/data/guides.js'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const router = useRouter()

// 响应式数据
const guides = ref(guidesData)

// 方法
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US')
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

const viewGuide = (guide) => {
  // 跳转到指南详情页面
  router.push(`/guides/${guide.addressBar}`)
}

// 生命周期
onMounted(() => {
  // 页面加载时的初始化逻辑
})
</script>

<style scoped>
/* Hero Section */
.hero {
  padding: 120px 0 80px;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
  text-align: center;
}

.hero-wrap {
  max-width: 800px;
  margin: 0 auto;
}

.main-title {
  font-size: 48px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #9b59b6, #8e44ad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 18px;
  color: #b0b0b0;
  line-height: 1.6;
  margin-bottom: 0;
}

/* Guides Grid Section */
.guides-grid {
  padding: 80px 0;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
}

.guides-wrap {
  text-align: center;
}

.section-title {
  font-size: 36px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #9b59b6, #8e44ad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  font-size: 18px;
  color: #b0b0b0;
  margin-bottom: 50px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.guides-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
}

.guide-card {
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

.guide-card:hover {
  transform: translateY(-5px);
  border-color: #9b59b6;
  box-shadow: 0 10px 30px rgba(155, 89, 182, 0.2);
}

.guide-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.guide-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.guide-card:hover .guide-image img {
  transform: scale(1.05);
}

.guide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.guide-card:hover .guide-overlay {
  opacity: 1;
}

.read-more {
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
}

.guide-difficulty {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
}

.guide-difficulty.easy {
  background: #27ae60;
  color: #ffffff;
}

.guide-difficulty.medium {
  background: #f39c12;
  color: #ffffff;
}

.guide-difficulty.hard {
  background: #e74c3c;
  color: #ffffff;
}

.guide-difficulty.expert {
  background: #8e44ad;
  color: #ffffff;
}

.guide-content {
  padding: 25px;
}

.guide-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.guide-category {
  background: #9b59b6;
  color: #ffffff;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
}

.guide-read-time {
  color: #b0b0b0;
  font-size: 14px;
}

.guide-title {
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 12px;
  line-height: 1.3;
}

.guide-description {
  color: #b0b0b0;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 15px;
}

.guide-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: #2a2a2a;
  color: #b0b0b0;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    padding: 100px 0 60px;
  }

  .main-title {
    font-size: 32px;
  }

  .hero-description {
    font-size: 16px;
  }

  .guides-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .guide-card {
    margin: 0 10px;
  }
}
</style>
