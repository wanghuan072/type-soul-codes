<template>
  <div class="privacy-policy-page">
    <!-- Header Component -->
    <HeaderComponent />

    <!-- Hero Section -->
    <section class="hero-inner">
      <div class="hero-wrap">
        <div class="hero-content">
          <h1 class="page-title">{{ $t('privacyPolicyPage.title') }}</h1>
          <p class="page-subtitle">{{ $t('privacyPolicyPage.subtitle') }}</p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="content">
      <div class="container">
        <div class="content-wrapper">
          <h2>{{ $t('privacyPolicyPage.infoCollectTitle') }}</h2>
          <p>{{ $t('privacyPolicyPage.infoCollectText') }}</p>

          <h2>{{ $t('privacyPolicyPage.howWeUseTitle') }}</h2>
          <p>{{ $t('privacyPolicyPage.howWeUseText') }}</p>

          <h2>{{ $t('privacyPolicyPage.infoSharingTitle') }}</h2>
          <p>{{ $t('privacyPolicyPage.infoSharingText') }}</p>

          <h2>{{ $t('privacyPolicyPage.dataSecurityTitle') }}</h2>
          <p>{{ $t('privacyPolicyPage.dataSecurityText') }}</p>

          <h2>{{ $t('privacyPolicyPage.cookiesTitle') }}</h2>
          <p>{{ $t('privacyPolicyPage.cookiesText') }}</p>

          <h2>{{ $t('privacyPolicyPage.yourRightsTitle') }}</h2>
          <p>{{ $t('privacyPolicyPage.yourRightsText') }}</p>

          <h2>{{ $t('privacyPolicyPage.changesTitle') }}</h2>
          <p>{{ $t('privacyPolicyPage.changesText') }}</p>

          <h2>{{ $t('privacyPolicyPage.contactTitle') }}</h2>
          <p>
            {{ $t('privacyPolicyPage.contactText') }}
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
const { updateSEO } = useSEO('privacyPolicyPage', { canonical: route.path })

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
.privacy-policy-page {
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
