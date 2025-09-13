<template>
  <div class="blog-detail-page">
    <!-- Header Component -->
    <HeaderComponent />

    <!-- Blog Post Detail -->
    <section class="blog-detail" v-if="post">
      <div class="container">
        <!-- Hero Image with Overlay Text -->
        <div class="post-hero">
          <div class="hero-image">
            <img :src="post.imageUrl" :alt="post.imageAlt" />
            <div class="hero-overlay">
              <!-- Back Button in top-left corner -->
              <button @click="goBack" class="back-button">
                <span class="back-icon">←</span>
                Back to Blog
              </button>
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
@import '@/styles/content-styles.css';
/* 全局样式 */
.blog-detail-page {
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

/* 内容样式已移至公共样式文件 */

/* Responsive Design */
@media (max-width: 1024px) {
  .back-button {
    top: 15px;
    left: 15px;
    padding: 8px 16px;
    font-size: 12px;
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

  /* 响应式内容样式已移至公共样式文件 */
}

@media (max-width: 768px) {
  .back-button {
    top: 10px;
    left: 10px;
    padding: 6px 12px;
    font-size: 11px;
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

  /* 响应式内容样式已移至公共样式文件 */
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

  /* 响应式内容样式已移至公共样式文件 */
}
</style>
