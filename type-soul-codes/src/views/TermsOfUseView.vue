<template>
  <div class="terms-of-use-page">
    <!-- Header Component -->
    <HeaderComponent />

    <!-- Hero Section -->
    <section class="hero-inner">
      <div class="hero-wrap">
        <div class="hero-content">
          <h1 class="page-title">{{ $t('termsOfUsePage.title') }}</h1>
          <p class="page-subtitle">{{ $t('termsOfUsePage.subtitle') }}</p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="content">
      <div class="container">
        <div class="content-wrapper">
          <h2>{{ $t('termsOfUsePage.acceptanceTitle') }}</h2>
          <p>{{ $t('termsOfUsePage.acceptanceText') }}</p>

          <h2>{{ $t('termsOfUsePage.useLicenseTitle') }}</h2>
          <p>{{ $t('termsOfUsePage.useLicenseText') }}</p>

          <h2>{{ $t('termsOfUsePage.disclaimerTitle') }}</h2>
          <p>{{ $t('termsOfUsePage.disclaimerText') }}</p>

          <h2>{{ $t('termsOfUsePage.limitationsTitle') }}</h2>
          <p>{{ $t('termsOfUsePage.limitationsText') }}</p>

          <h2>{{ $t('termsOfUsePage.accuracyTitle') }}</h2>
          <p>{{ $t('termsOfUsePage.accuracyText') }}</p>

          <h2>{{ $t('termsOfUsePage.linksTitle') }}</h2>
          <p>{{ $t('termsOfUsePage.linksText') }}</p>

          <h2>{{ $t('termsOfUsePage.modificationsTitle') }}</h2>
          <p>{{ $t('termsOfUsePage.modificationsText') }}</p>

          <h2>{{ $t('termsOfUsePage.governingLawTitle') }}</h2>
          <p>{{ $t('termsOfUsePage.governingLawText') }}</p>

          <h2>{{ $t('termsOfUsePage.contactTitle') }}</h2>
          <p>
            {{ $t('termsOfUsePage.contactText') }}
            <a href="mailto:wyong@typesoulcodes.org">wyong@typesoulcodes.org</a>
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
const { updateSEO } = useSEO('termsOfUsePage', { canonical: route.path })

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
.terms-of-use-page {
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

.content-wrapper a {
  color: #4ecdc4;
  text-decoration: none;
  transition: color 0.3s ease;
}

.content-wrapper a:hover {
  color: #ff6b9d;
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
}
</style>
