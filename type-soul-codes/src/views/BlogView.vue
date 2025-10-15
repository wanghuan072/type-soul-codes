<template>
  <div class="blog-page">
    <!-- Header Component -->
    <HeaderComponent />
    
    <section class="hero-inner">
      <div class="hero-wrap">
        <div class="hero-content">
          <h1 class="main-title">{{ $t('blogPage.heroTitle') }}</h1>
          <p class="hero-description">
            {{ $t('blogPage.heroDescription') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Posts Section -->
    <section class="blog-posts" id="blog-list">
      <div class="container">
        <div class="blog-wrap">
          <h2 class="section-title">{{ $t('blogPage.sectionTitle') }}</h2>
          <p class="section-description">
            {{ $t('blogPage.sectionDescription') }}
          </p>
          
          <!-- Loading State -->
          <div v-if="loading" class="loading">{{ $t('common.loading') }}</div>
          
          <!-- Error State -->
          <div v-else-if="error" class="error">{{ $t('common.error') }}</div>
          
          <div v-else class="posts-grid">
            <div v-for="post in blogPosts" :key="post.id" class="post-card" @click="viewPost(post)">
              <div class="post-image">
                <img :src="post.imageUrl" :alt="post.imageAlt" />
                <div class="post-overlay">
                  <span class="read-more">{{ $t('blogPage.readMore') }}</span>
                </div>
              </div>
              <div class="post-content">
                <div class="post-meta">
                  <span class="post-date">{{ formatDate(post.publishDate) }}</span>
                </div>
                <h3 class="post-title">{{ post.title }}</h3>
                <p class="post-description">{{ post.description }}</p>
                <div class="post-tags">
                  <span class="tag">{{ $t('blogPage.guideTag') }}</span>
                  <span class="tag">{{ $t('blogPage.strategyTag') }}</span>
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
          <h2 class="section-title">{{ $t('blogPage.aboutTitle') }}</h2>
          <p class="section-description">
            {{ $t('blogPage.aboutDescription') }}
          </p>
          <div class="about-content">
            <div class="about-text">
              <h3>{{ $t('blogPage.qualityContentTitle') }}</h3>
              <p>{{ $t('blogPage.qualityContentDesc') }}</p>
              <h3>{{ $t('blogPage.regularUpdatesTitle') }}</h3>
              <p>{{ $t('blogPage.regularUpdatesDesc') }}</p>
            </div>
          </div>
          <div class="about-features">
            <div class="feature-item">
              <div class="feature-icon">📝</div>
              <h4>{{ $t('blogPage.expertWriters') }}</h4>
              <p>{{ $t('blogPage.expertWritersDesc') }}</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🔄</div>
              <h4>{{ $t('blogPage.regularUpdates') }}</h4>
              <p>{{ $t('blogPage.regularUpdatesShort') }}</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">💡</div>
              <h4>{{ $t('blogPage.proTips') }}</h4>
              <p>{{ $t('blogPage.proTipsDesc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section" id="faq">
      <div class="container">
        <div class="faq-wrap">
          <h2 class="section-title">{{ $t('blogPage.faqTitle') }}</h2>
          <p class="section-description">
            {{ $t('blogPage.faqDescription') }}
          </p>
          <div class="faq-content">
            <div class="faq-list">
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">❓</span>
                  {{ $t('blogPage.faq1Question') }}
                </h3>
                <p class="faq-answer">
                  {{ $t('blogPage.faq1Answer') }}
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">📚</span>
                  {{ $t('blogPage.faq2Question') }}
                </h3>
                <p class="faq-answer">
                  {{ $t('blogPage.faq2Answer') }}
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">👥</span>
                  {{ $t('blogPage.faq3Question') }}
                </h3>
                <p class="faq-answer">
                  {{ $t('blogPage.faq3Answer') }}
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">🔍</span>
                  {{ $t('blogPage.faq4Question') }}
                </h3>
                <p class="faq-answer">
                  {{ $t('blogPage.faq4Answer') }}
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
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useLocalizedData } from '@/composables/useLocalizedData'
import { useSEO } from '@/seo/i18n-meta-tags'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

// 使用 Composable 加载本地化数据
const { data: blogPosts, loading, error } = useLocalizedData('blog')

// SEO
const { updateSEO } = useSEO('blogPage', { canonical: route.path })

// 方法
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const viewPost = (post) => {
  router.push(`/blog/${post.addressBar}`)
}

// 生命周期
onMounted(() => {
  updateSEO()
})

// 监听语言切换
watch(() => route.path, () => {
  updateSEO()
})
</script>

<style scoped>
/* 全局样式 */
.blog-page {
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

/* Blog Posts Section */
.blog-posts {
  padding: 80px 0;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
}

.blog-wrap {
  text-align: center;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.post-card {
  background: #1a1a1a;
  border: 2px solid #9b59b6;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

.post-card::before {
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

.post-card:hover::before {
  opacity: 1;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(155, 89, 182, 0.3);
  border-color: #ff6b9d;
}

.post-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.post-card:hover .post-image img {
  transform: scale(1.05);
}

.post-overlay {
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

.post-card:hover .post-overlay {
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

.post-content {
  padding: 20px;
  position: relative;
  z-index: 3;
}

.post-meta {
  margin-bottom: 15px;
}

.post-date {
  color: #9b59b6;
  font-size: 14px;
  font-weight: bold;
}

.post-title {
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

.post-description {
  color: #b0b0b0;
  margin-bottom: 20px;
  line-height: 1.6;
  font-size: 16px;
}

.post-tags {
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

  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .blog-card {
    padding: 15px;
  }

  .blog-title {
    font-size: 16px;
  }

  .blog-description {
    font-size: 12px;
  }

  .blog-date {
    font-size: 12px;
  }

  .section-title {
    font-size: 20px;
  }

  .section-subtitle {
    font-size: 16px;
  }

  .about-features {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .feature-card {
    padding: 15px;
  }

  .feature-card h4 {
    font-size: 16px;
  }

  .feature-card p {
    font-size: 12px;
  }

  .faq-question {
    font-size: 16px;
  }

  .faq-answer {
    font-size: 12px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 80px 0 40px;
  }

  .main-title {
    font-size: 24px;
  }

  .blog-posts {
    padding: 20px 0;
  }

  .hero-description {
    font-size: 12px;
  }

  .blog-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .blog-card {
    padding: 10px;
  }

  .blog-title {
    font-size: 14px;
  }

  .blog-description {
    font-size: 10px;
  }

  .blog-date {
    font-size: 10px;
  }

  .section-title {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .section-description {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .posts-grid {
    gap: 10px;
    grid-template-columns: repeat(1, 1fr);
  }

  .read-more {
    font-size: 12px;
  }

  .post-content {
    padding: 10px;
  }

  .post-meta {
    font-size: 12px;
    margin-bottom: 10px;
  }
  .post-title {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .post-description {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .about-section {
    padding: 20px 0;
  }

  .section-subtitle {
    font-size: 12px;
  }

  .section-subtitle {
    font-size: 14px;
  }

  .about-features {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .about-text h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .about-text p {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .about-features {
    margin-top: 10px;
  }

  .feature-item {
    padding: 10px;
  }

  .feature-icon {
    font-size: 28px;
    margin-bottom: 10px;
  }

  .feature-item h4 {
    font-size: 16px;
  }

  .feature-card {
    padding: 10px;
  }

  .feature-card h4 {
    font-size: 14px;
  }

  .feature-card p {
    font-size: 10px;
  }

  .faq-section {
    padding: 20px 0;
  }

  .faq-question {
    font-size: 14px;
    margin-bottom: 10px;
  }

  .faq-item {
    padding: 10px;
    margin-bottom: 10px;
  }

  .faq-icon {
    font-size: 16px;
  }

  .faq-answer {
    font-size: 10px;
  }
}
</style>
