<template>
  <div class="copyright-page">
    <!-- Header Component -->
    <HeaderComponent />

    <!-- Hero Section -->
    <section class="hero-inner">
      <div class="hero-wrap">
        <div class="hero-content">
          <h1 class="page-title">{{ $t('copyrightPage.title') }}</h1>
          <p class="page-subtitle">{{ $t('copyrightPage.subtitle') }}</p>
        </div>
      </div>
    </section>
    
    <!-- Content Section -->
    <section class="content">
      <div class="container">
        <div class="content-wrapper">
          <h2>{{ $t('copyrightPage.copyrightInfoTitle') }}</h2>
          <p>{{ $t('copyrightPage.copyrightInfoText') }}</p>

          <h2>{{ $t('copyrightPage.intellectualPropertyTitle') }}</h2>
          <p>{{ $t('copyrightPage.intellectualPropertyText') }}</p>

          <h2>{{ $t('copyrightPage.permittedUseTitle') }}</h2>
          <p>{{ $t('copyrightPage.permittedUseText') }}</p>

          <h2>{{ $t('copyrightPage.prohibitedUseTitle') }}</h2>
          <p>{{ $t('copyrightPage.prohibitedUseText') }}</p>

          <h2>{{ $t('copyrightPage.thirdPartyTitle') }}</h2>
          <p>{{ $t('copyrightPage.thirdPartyText') }}</p>

          <h2>{{ $t('copyrightPage.dmcaTitle') }}</h2>
          <p>
            {{ $t('copyrightPage.dmcaText') }}
            <a href="mailto:wyong@typesoulcodes.org">wyong@typesoulcodes.org</a> {{ $t('copyrightPage.dmcaText2') }}
          </p>
          <ul>
            <li>{{ $t('copyrightPage.dmcaItem1') }}</li>
            <li>{{ $t('copyrightPage.dmcaItem2') }}</li>
            <li>{{ $t('copyrightPage.dmcaItem3') }}</li>
            <li>{{ $t('copyrightPage.dmcaItem4') }}</li>
            <li>{{ $t('copyrightPage.dmcaItem5') }}</li>
          </ul>

          <h2>{{ $t('copyrightPage.takedownTitle') }}</h2>
          <p>{{ $t('copyrightPage.takedownText') }}</p>

          <h2>{{ $t('copyrightPage.counterNoticeTitle') }}</h2>
          <p>{{ $t('copyrightPage.counterNoticeText') }}</p>
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
const { updateSEO } = useSEO('copyrightPage', { canonical: route.path })

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
.copyright-page {
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

.content-wrapper ul {
  color: #b0b0b0;
  margin: 20px 0;
  padding-left: 30px;
}

.content-wrapper li {
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 1.6;
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

  .content-wrapper li {
    font-size: 14px;
  }
}
</style>
