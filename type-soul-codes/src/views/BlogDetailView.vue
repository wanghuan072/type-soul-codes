<template>
  <div class="blog-detail-page">
    <!-- Header Component -->
    <HeaderComponent />

    <!-- Back Button -->
    <section class="back-section">
      <div class="container">
        <button @click="goBack" class="back-button">
          <span class="back-icon">←</span>
          Back to Blog
        </button>
      </div>
    </section>

    <!-- Blog Post Detail -->
    <section class="blog-detail" v-if="post">
      <div class="container">
        <!-- Hero Image with Overlay Text -->
        <div class="post-hero">
          <div class="hero-image">
            <img :src="post.imageUrl" :alt="post.imageAlt" />
            <div class="hero-overlay">
              <div class="hero-content">
                <div class="hero-date">{{ formatDate(post.publishDate) }}</div>
                <h1 class="hero-title">{{ post.title }}</h1>
                <p class="hero-description">{{ post.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Post Content -->
        <div class="post-content" v-html="post.detailsHtml"></div>
      </div>
    </section>

    <!-- Footer Component -->
    <FooterComponent />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { posts as blogData } from '@/data/blog.js'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { updateBlogPostSEO } from '@/seo/blog-seo.js'

const route = useRoute()
const router = useRouter()
const post = ref(null)

// 计算属性
const postSlug = computed(() => route.params.slug)

// 方法
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const goBack = () => {
  router.push('/blog')
}

// 生命周期
onMounted(() => {
  // 根据 slug 查找当前文章
  post.value = blogData.find((p) => p.addressBar === postSlug.value)

  if (!post.value) {
    router.push('/blog')
    return
  }

  // 更新博客文章 SEO
  updateBlogPostSEO(post.value)
})
</script>

<style scoped>
/* 全局样式 */
.blog-detail-page {
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

/* Blog Detail Section */
.blog-detail {
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

.hero-date {
  font-size: 16px;
  color: #9b59b6;
  font-weight: 600;
  margin-bottom: 15px;
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
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.post-content {
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.8;
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
  padding-left: 30px;
}

.post-content :deep(li) {
  color: #b0b0b0;
  margin-bottom: 10px;
  position: relative;
}

.post-content :deep(li::marker) {
  color: #9b59b6;
}

.post-content :deep(strong) {
  color: #ffffff;
  font-weight: bold;
}

.post-content :deep(em) {
  color: #4ecdc4;
  font-style: italic;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .back-section {
    padding: 20px 0;
  }

  .back-button {
    padding: 10px 20px;
    font-size: 14px;
  }

  .hero-image {
    height: 400px;
  }

  .hero-overlay {
    padding: 40px;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-description {
    font-size: 18px;
  }

  .hero-date {
    font-size: 14px;
  }

  .post-content {
    font-size: 16px;
  }

  .post-content :deep(h2) {
    font-size: 28px;
  }

  .post-content :deep(h3) {
    font-size: 22px;
  }

  .post-content :deep(h4) {
    font-size: 18px;
  }

  .post-content :deep(p) {
    font-size: 16px;
  }

  .post-content :deep(li) {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .back-section {
    padding: 15px 0;
  }

  .back-button {
    padding: 8px 16px;
    font-size: 12px;
  }

  .hero-image {
    height: 300px;
  }

  .hero-overlay {
    padding: 30px 20px;
    align-items: flex-end;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-title {
    font-size: 28px;
    margin-bottom: 15px;
  }

  .hero-description {
    font-size: 16px;
    line-height: 1.4;
  }

  .hero-date {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .post-content {
    font-size: 14px;
  }

  .post-content :deep(h2) {
    font-size: 24px;
  }

  .post-content :deep(h3) {
    font-size: 20px;
  }

  .post-content :deep(h4) {
    font-size: 16px;
  }

  .post-content :deep(p) {
    font-size: 14px;
  }

  .post-content :deep(li) {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .hero-image {
    height: 250px;
  }

  .hero-overlay {
    padding: 20px 15px;
  }

  .hero-title {
    font-size: 24px;
    margin-bottom: 12px;
  }

  .hero-description {
    font-size: 14px;
  }

  .hero-date {
    font-size: 11px;
  }

  .post-content {
    font-size: 13px;
  }

  .post-content :deep(h2) {
    font-size: 20px;
  }

  .post-content :deep(h3) {
    font-size: 18px;
  }

  .post-content :deep(h4) {
    font-size: 14px;
  }
}
</style>
