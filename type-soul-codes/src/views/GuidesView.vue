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
    <section class="guides-posts" id="guides-list">
      <div class="container">
        <div class="guides-wrap">
          <h2 class="section-title">All Guides</h2>
          <p class="section-description">
            Browse through our complete collection of Type Soul guides. Each guide includes detailed
            instructions, tips, and strategies to help you master the game.
          </p>
          <div class="guides-grid">
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
                  <span class="guide-date">{{ formatDate(guide.publishDate) }}</span>
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

    <!-- About Section -->
    <section class="about-section" id="about">
      <div class="container">
        <div class="about-wrap">
          <h2 class="section-title">About Our Guides</h2>
          <p class="section-description">
            Our Type Soul guides are created by experienced players and community experts to help you
            improve your gameplay and master every aspect of the game.
          </p>
          <div class="about-content">
            <div class="about-text">
              <h3>Expert-Created Content</h3>
              <p>
                Every guide is carefully crafted by experienced Type Soul players who have mastered
                the techniques they teach. We focus on providing accurate, tested strategies that
                actually work in real gameplay situations.
              </p>
              <h3>Comprehensive Coverage</h3>
              <p>
                From basic mechanics to advanced strategies, our guides cover every aspect of Type
                Soul. Whether you're a complete beginner or a seasoned player, you'll find valuable
                content to improve your skills.
              </p>
            </div>
          </div>
          <div class="about-features">
            <div class="feature-item">
              <div class="feature-icon">🎯</div>
              <h4>Expert Strategies</h4>
              <p>Proven techniques from top players</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">📚</div>
              <h4>Comprehensive Guides</h4>
              <p>Complete coverage of all game aspects</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">⚡</div>
              <h4>Quick Learning</h4>
              <p>Easy-to-follow step-by-step instructions</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section" id="faq">
      <div class="container">
        <div class="faq-wrap">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-description">
            Common questions about our guides and how to get the most out of our content.
          </p>
          <div class="faq-content">
            <div class="faq-list">
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">❓</span>
                  How often are the guides updated?
                </h3>
                <p class="faq-answer">
                  We regularly update our guides to reflect the latest game changes and meta
                  developments. Major updates are reviewed within 24-48 hours of release.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">🎮</span>
                  What difficulty levels do you cover?
                </h3>
                <p class="faq-answer">
                  Our guides cover all difficulty levels from beginner to expert. Each guide is
                  clearly marked with its difficulty level to help you find content appropriate for
                  your skill level.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">👥</span>
                  Can I request specific guides?
                </h3>
                <p class="faq-answer">
                  Absolutely! We welcome suggestions for new guide topics. If you have a specific
                  strategy or technique you'd like us to cover, please contact us through our
                  community channels.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">🔍</span>
                  How do I find guides for my skill level?
                </h3>
                <p class="faq-answer">
                  Use our difficulty filters or browse by category. Each guide is clearly marked with
                  its difficulty level and includes prerequisites to help you choose the right
                  content.
                </p>
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
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
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
/* 全局样式 */
.guides-page {
  background: #0a0a0a;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d1b69 50%, #1a1a1a 100%);
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 40% 20%, rgba(255, 107, 157, 0.12) 0%, transparent 50%),
    radial-gradient(circle at 60% 80%, rgba(78, 205, 196, 0.12) 0%, transparent 50%);
  pointer-events: none;
  z-index: 1;
}

.hero-wrap {
  position: relative;
  z-index: 10;
  text-align: center;
  width: 100%;
}

.hero-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.main-title {
  font-size: 56px;
  font-weight: bold;
  margin-bottom: 30px;
  line-height: 1.2;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4, #9b59b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 20px rgba(255, 107, 157, 0.2);
}

.hero-description {
  font-size: 20px;
  color: #b0b0b0;
  margin-bottom: 0;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

/* Section Titles */
.section-title {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  font-size: 18px;
  color: #b0b0b0;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 50px;
  line-height: 1.6;
}

/* Guides Posts Section */
.guides-posts {
  padding: 80px 0;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
}

.guides-wrap {
  text-align: center;
}

.guides-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.guide-card {
  background: #1a1a1a;
  border: 2px solid #9b59b6;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

.guide-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(255, 107, 157, 0.1), rgba(78, 205, 196, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.guide-card:hover::before {
  opacity: 1;
}

.guide-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(155, 89, 182, 0.3);
  border-color: #ff6b9d;
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
  z-index: 2;
}

.guide-card:hover .guide-overlay {
  opacity: 1;
}

.read-more {
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4);
  padding: 10px 20px;
  border-radius: 25px;
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
  z-index: 3;
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
  padding: 20px;
  position: relative;
  z-index: 3;
}

.guide-meta {
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.guide-category {
  background: #9b59b6;
  color: #ffffff;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
}

.guide-date {
  color: #9b59b6;
  font-size: 14px;
  font-weight: bold;
}

.guide-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #ffffff;
  line-height: 1.3;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.guide-description {
  color: #b0b0b0;
  margin-bottom: 20px;
  line-height: 1.6;
  font-size: 16px;
}

.guide-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.tag {
  background: #2a2a2a;
  color: #9b59b6;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: bold;
  border: 1px solid #9b59b6;
}

/* About Section */
.about-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
}

.about-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.about-text h3 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #ffffff;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-text p {
  color: #b0b0b0;
  margin-bottom: 30px;
  line-height: 1.6;
}

.feature-item {
  text-align: center;
  padding: 20px;
  background: #1a1a1a;
  border-radius: 10px;
  border: 1px solid #333;
  transition: all 0.3s ease;
}

.feature-item:hover {
  border-color: #9b59b6;
  transform: translateY(-3px);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 15px;
  display: block;
}

.feature-item h4 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #ffffff;
}

.feature-item p {
  color: #b0b0b0;
  font-size: 14px;
}

/* FAQ Section */
.faq-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #0f0f0f 100%);
}

.faq-content {
  max-width: 1000px;
  margin: 0 auto;
}

.faq-item {
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: #9b59b6;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(155, 89, 182, 0.2);
}

.faq-question {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  font-size: 18px;
  color: #ffffff;
  background: linear-gradient(45deg, #9b59b6, #8e44ad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.faq-icon {
  font-size: 24px;
  color: #9b59b6;
}

.faq-answer {
  color: #b0b0b0;
  line-height: 1.6;
  font-size: 16px;
  text-align: left;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero {
    padding: 100px 0 60px;
  }

  .main-title {
    font-size: 40px;
  }

  .hero-description {
    font-size: 16px;
  }

  .guides-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .section-title {
    font-size: 28px;
  }

  .section-description {
    font-size: 16px;
  }

  .about-features {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 80px 0 40px;
  }

  .main-title {
    font-size: 32px;
  }

  .hero-description {
    font-size: 16px;
  }

  .guides-posts {
    padding: 40px 0;
  }

  .section-title {
    font-size: 24px;
    margin-bottom: 15px;
  }

  .section-description {
    font-size: 14px;
    margin-bottom: 30px;
  }

  .guides-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .guide-content {
    padding: 15px;
  }

  .guide-title {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .guide-description {
    font-size: 14px;
    margin-bottom: 15px;
  }

  .about-section {
    padding: 40px 0;
  }

  .about-text h3 {
    font-size: 20px;
    margin-bottom: 15px;
  }

  .about-text p {
    font-size: 14px;
    margin-bottom: 20px;
  }

  .about-features {
    grid-template-columns: 1fr;
    gap: 15px;
    margin-top: 30px;
  }

  .feature-item {
    padding: 15px;
  }

  .feature-icon {
    font-size: 36px;
    margin-bottom: 10px;
  }

  .feature-item h4 {
    font-size: 16px;
  }

  .feature-item p {
    font-size: 12px;
  }

  .faq-section {
    padding: 40px 0;
  }

  .faq-item {
    padding: 15px;
    margin-bottom: 15px;
  }

  .faq-question {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .faq-icon {
    font-size: 20px;
  }

  .faq-answer {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 60px 0 30px;
  }

  .main-title {
    font-size: 24px;
  }

  .hero-description {
    font-size: 14px;
  }

  .guides-posts {
    padding: 30px 0;
  }

  .section-title {
    font-size: 20px;
  }

  .section-description {
    font-size: 12px;
  }

  .guide-content {
    padding: 10px;
  }

  .guide-title {
    font-size: 18px;
  }

  .guide-description {
    font-size: 12px;
  }

  .about-section {
    padding: 30px 0;
  }

  .about-text h3 {
    font-size: 18px;
  }

  .about-text p {
    font-size: 12px;
  }

  .feature-item {
    padding: 10px;
  }

  .feature-icon {
    font-size: 28px;
  }

  .feature-item h4 {
    font-size: 14px;
  }

  .feature-item p {
    font-size: 10px;
  }

  .faq-section {
    padding: 30px 0;
  }

  .faq-item {
    padding: 10px;
  }

  .faq-question {
    font-size: 14px;
  }

  .faq-icon {
    font-size: 16px;
  }

  .faq-answer {
    font-size: 12px;
  }
}
</style>
