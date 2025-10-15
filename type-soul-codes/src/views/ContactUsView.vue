<template>
  <div class="contact-us-page">
    <!-- Header Component -->
    <HeaderComponent />

    <!-- Hero Section -->
    <section class="hero-inner">
      <div class="hero-wrap">
        <div class="hero-content">
          <h1 class="page-title">{{ $t('contactUsPage.title') }}</h1>
          <p class="page-subtitle">{{ $t('contactUsPage.subtitle') }}</p>
        </div>
      </div>
    </section>

    

    <!-- Content Section -->
    <section class="content">
      <div class="container">
        <div class="content-wrapper">
          <h2>{{ $t('contactUsPage.getInTouchTitle') }}</h2>
          <p>{{ $t('contactUsPage.getInTouchText') }}</p>

          <h2>{{ $t('contactUsPage.contactInfoTitle') }}</h2>
          <div class="contact-info">
            <div class="contact-item">
              <h3>{{ $t('contactUsPage.emailLabel') }}</h3>
              <p><a href="mailto:wyong@typesoulcodes.org">wyong@typesoulcodes.org</a></p>
              <p>{{ $t('contactUsPage.emailResponse') }}</p>
            </div>

            <div class="contact-item">
              <h3>{{ $t('contactUsPage.responseTimeLabel') }}</h3>
              <p>{{ $t('contactUsPage.responseWeekdays') }}</p>
              <p>{{ $t('contactUsPage.responseWeekends') }}</p>
            </div>
          </div>

          <h2>{{ $t('contactUsPage.whatWeCanHelpTitle') }}</h2>
          <ul>
            <li><strong>{{ $t('contactUsPage.help1') }}</strong> {{ $t('contactUsPage.help1Desc') }}</li>
            <li><strong>{{ $t('contactUsPage.help2') }}</strong> {{ $t('contactUsPage.help2Desc') }}</li>
            <li><strong>{{ $t('contactUsPage.help3') }}</strong> {{ $t('contactUsPage.help3Desc') }}</li>
            <li><strong>{{ $t('contactUsPage.help4') }}</strong> {{ $t('contactUsPage.help4Desc') }}</li>
            <li><strong>{{ $t('contactUsPage.help5') }}</strong> {{ $t('contactUsPage.help5Desc') }}</li>
            <li><strong>{{ $t('contactUsPage.help6') }}</strong> {{ $t('contactUsPage.help6Desc') }}</li>
          </ul>

          <h2>{{ $t('contactUsPage.beforeContactTitle') }}</h2>
          <p>{{ $t('contactUsPage.beforeContactText') }}</p>
          <ul>
            <li>{{ $t('contactUsPage.beforeContact1') }}</li>
            <li>{{ $t('contactUsPage.beforeContact2') }}</li>
            <li>{{ $t('contactUsPage.beforeContact3') }}</li>
            <li>{{ $t('contactUsPage.beforeContact4') }}</li>
          </ul>

          <h2>{{ $t('contactUsPage.faqTitle') }}</h2>
          <div class="faq-section">
            <div class="faq-item">
              <h4>{{ $t('contactUsPage.faq1Question') }}</h4>
              <p>{{ $t('contactUsPage.faq1Answer') }}</p>
            </div>

            <div class="faq-item">
              <h4>{{ $t('contactUsPage.faq2Question') }}</h4>
              <p>{{ $t('contactUsPage.faq2Answer') }}</p>
            </div>

            <div class="faq-item">
              <h4>{{ $t('contactUsPage.faq3Question') }}</h4>
              <p>{{ $t('contactUsPage.faq3Answer') }}</p>
            </div>
          </div>

          <h2>{{ $t('contactUsPage.businessHoursTitle') }}</h2>
          <p>{{ $t('contactUsPage.businessHoursText') }}</p>

          <h2>{{ $t('contactUsPage.privacyTitle') }}</h2>
          <p>{{ $t('contactUsPage.privacyText') }}</p>

          <h2>Thank You</h2>
          <p>
            Thank you for being part of the typesoulcodes.org community! Your feedback and support
            help us continue to provide the best possible service to Type Soul players worldwide.
          </p>
        </div>
      </div>
    </section>

    <!-- Footer Component -->
    <FooterComponent />
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useSEO } from '@/seo/i18n-meta-tags'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const route = useRoute()
const { t } = useI18n()

// SEO
const { updateSEO } = useSEO('contactUsPage', { canonical: route.path })

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
.contact-us-page {
  background: #0a0a0a;
  color: #ffffff;
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial,
    sans-serif;
  line-height: 1.6;
}

.hero {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d1b69 50%, #1a1a1a 100%);
  padding: 120px 0 80px;
  text-align: center;
}

.page-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 18px;
  color: #b0b0b0;
}

.content {
  padding: 80px 0;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.content-wrapper h2 {
  font-size: 28px;
  font-weight: bold;
  margin: 40px 0 20px 0;
  color: #ffffff;
  background: linear-gradient(45deg, #9b59b6, #8e44ad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.content-wrapper p {
  color: #b0b0b0;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.8;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 30px 0;
}

.contact-item {
  background: #1a1a1a;
  padding: 25px;
  border-radius: 10px;
  border: 1px solid #333;
}

.contact-item h3 {
  color: #4ecdc4;
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: bold;
}

.contact-item p {
  color: #b0b0b0;
  margin-bottom: 10px;
  font-size: 16px;
}

.content-wrapper ul {
  color: #b0b0b0;
  margin: 20px 0;
  padding-left: 30px;
}

.content-wrapper li {
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 1.6;
}

.content-wrapper strong {
  color: #4ecdc4;
  font-weight: bold;
}

.content-wrapper a {
  color: #4ecdc4;
  text-decoration: none;
  transition: color 0.3s ease;
}

.content-wrapper a:hover {
  color: #ff6b9d;
}

.faq-section {
  margin: 30px 0;
}

.faq-item {
  background: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #333;
  margin-bottom: 15px;
}

.faq-item h4 {
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
}

.faq-item p {
  color: #b0b0b0;
  margin-bottom: 0;
  font-size: 16px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    padding: 80px 0 40px;
  }

  .page-title {
    font-size: 32px;
  }

  .page-subtitle {
    font-size: 16px;
  }

  .content {
    padding: 40px 0;
  }

  .content-wrapper h2 {
    font-size: 24px;
  }

  .content-wrapper p {
    font-size: 14px;
  }

  .content-wrapper li {
    font-size: 14px;
  }

  .contact-info {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .contact-item {
    padding: 20px;
  }

  .contact-item h3 {
    font-size: 18px;
  }

  .contact-item p {
    font-size: 14px;
  }

  .faq-item h4 {
    font-size: 16px;
  }

  .faq-item p {
    font-size: 14px;
  }
}
</style>
