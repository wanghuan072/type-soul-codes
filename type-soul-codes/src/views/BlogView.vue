<template>
  <div class="blog-page">
    <!-- Header Component -->
    <HeaderComponent />

    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="container">
        <div class="hero-wrap">
          <div class="hero-content">
            <h1 class="main-title">Type Soul Blog</h1>
            <p class="hero-description">
              Stay updated with the latest Type Soul news, guides, strategies, and community
              insights. Your ultimate source for everything Type Soul.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Posts Section -->
    <section class="blog-posts" id="blog-list">
      <div class="container">
        <div class="blog-wrap">
          <h2 class="section-title">Latest Blog Posts</h2>
          <p class="section-description">
            Discover our comprehensive collection of Type Soul guides, strategies, and community
            content.
          </p>
          <div class="posts-grid">
            <div v-for="post in blogPosts" :key="post.id" class="post-card" @click="viewPost(post)">
              <div class="post-image">
                <img :src="post.imageUrl" :alt="post.imageAlt" />
                <div class="post-overlay">
                  <span class="read-more">Read More</span>
                </div>
              </div>
              <div class="post-content">
                <div class="post-meta">
                  <span class="post-date">{{ formatDate(post.publishDate) }}</span>
                </div>
                <h3 class="post-title">{{ post.title }}</h3>
                <p class="post-description">{{ post.description }}</p>
                <div class="post-tags">
                  <span class="tag">Guide</span>
                  <span class="tag">Strategy</span>
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
          <h2 class="section-title">About Our Blog</h2>
          <p class="section-description">
            Our Type Soul blog is dedicated to providing high-quality content that helps players
            improve their gameplay and stay informed about the latest developments.
          </p>
          <div class="about-content">
            <div class="about-text">
              <h3>Quality Content</h3>
              <p>
                Every article is carefully researched and written by experienced Type Soul players
                and community experts. We focus on providing accurate, up-to-date information that
                actually helps you improve your gameplay.
              </p>
              <h3>Regular Updates</h3>
              <p>
                We publish new content regularly, covering everything from beginner guides to
                advanced strategies, meta analysis, and community highlights. Stay tuned for the
                latest insights and tips.
              </p>
            </div>
          </div>
          <div class="about-features">
            <div class="feature-item">
              <div class="feature-icon">📝</div>
              <h4>Expert Writers</h4>
              <p>Content by experienced players</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🔄</div>
              <h4>Regular Updates</h4>
              <p>Fresh content every week</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">💡</div>
              <h4>Pro Tips</h4>
              <p>Advanced strategies and insights</p>
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
            Common questions about our blog content and how to get the most out of our guides.
          </p>
          <div class="faq-content">
            <div class="faq-list">
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">❓</span>
                  How often do you publish new blog posts?
                </h3>
                <p class="faq-answer">
                  We publish new content weekly, with additional posts during major game updates or
                  when significant meta changes occur. Subscribe to our updates to never miss a new
                  post.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">📚</span>
                  What types of content do you cover?
                </h3>
                <p class="faq-answer">
                  Our blog covers beginner guides, advanced strategies, meta analysis, character
                  builds, PvP tactics, PvE guides, community highlights, and game updates. We aim to
                  provide comprehensive coverage of all aspects of Type Soul.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">👥</span>
                  Can I contribute to the blog?
                </h3>
                <p class="faq-answer">
                  We welcome contributions from experienced players! If you have unique insights,
                  strategies, or guides you'd like to share, please contact us through our community
                  channels.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">🔍</span>
                  How do I find specific topics?
                </h3>
                <p class="faq-answer">
                  Use our search function or browse by categories. We also use tags to help you find
                  related content quickly. Each post is carefully categorized for easy navigation.
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
import { posts as blogData } from '@/data/blog.js'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { updateBlogListSEO } from '@/seo/blog-seo.js'

const router = useRouter()
const blogPosts = ref(blogData)

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
  // 更新博客列表页 SEO
  updateBlogListSEO(blogPosts.value)
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
