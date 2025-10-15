<template>
  <div class="about-us-page">
    <!-- Header Component -->
    <HeaderComponent />

    <section class="hero-inner">
      <div class="hero-wrap">
        <div class="hero-content">
          <h1 class="hero-title">{{ $t('aboutUsPage.title') }}</h1>
          <p class="hero-description">{{ $t('aboutUsPage.subtitle') }}</p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="content">
      <div class="container">
        <div class="content-wrapper">
          <h2>{{ $t('aboutUsPage.whoWeAreTitle') }}</h2>
          <p>{{ $t('aboutUsPage.whoWeAreText') }}</p>

          <h2>{{ $t('aboutUsPage.ourMissionTitle') }}</h2>
          <p>{{ $t('aboutUsPage.ourMissionText') }}</p>

          <h2>{{ $t('aboutUsPage.whatWeOfferTitle') }}</h2>
          <ul>
            <li><strong>{{ $t('aboutUsPage.offer1') }}</strong> {{ $t('aboutUsPage.offer1Desc') }}</li>
            <li><strong>{{ $t('aboutUsPage.offer2') }}</strong> {{ $t('aboutUsPage.offer2Desc') }}</li>
            <li><strong>{{ $t('aboutUsPage.offer3') }}</strong> {{ $t('aboutUsPage.offer3Desc') }}</li>
            <li><strong>{{ $t('aboutUsPage.offer4') }}</strong> {{ $t('aboutUsPage.offer4Desc') }}</li>
            <li><strong>{{ $t('aboutUsPage.offer5') }}</strong> {{ $t('aboutUsPage.offer5Desc') }}</li>
          </ul>

          <h2>{{ $t('aboutUsPage.ourCommitmentTitle') }}</h2>
          <p>{{ $t('aboutUsPage.ourCommitmentText') }}</p>

          <h2>{{ $t('aboutUsPage.communityFocusTitle') }}</h2>
          <p>{{ $t('aboutUsPage.communityFocusText') }}</p>

          <h2>{{ $t('aboutUsPage.qualityAssuranceTitle') }}</h2>
          <p>{{ $t('aboutUsPage.qualityAssuranceText') }}</p>

          <h2>{{ $t('aboutUsPage.regularUpdatesTitle') }}</h2>
          <p>{{ $t('aboutUsPage.regularUpdatesText') }}</p>

          <h2>{{ $t('aboutUsPage.contactUsTitle') }}</h2>
          <p>
            {{ $t('aboutUsPage.contactUsText') }}
            <a href="mailto:wyong@typesoulcodes.org">wyong@typesoulcodes.org</a> {{ $t('aboutUsPage.contactUsText2') }}
          </p>

          <h2>{{ $t('aboutUsPage.joinCommunityTitle') }}</h2>
          <p>{{ $t('aboutUsPage.joinCommunityText') }}</p>
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
const { updateSEO } = useSEO('aboutUsPage', { canonical: route.path })

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
.about-us-page {
  background: #0a0a0a;
  color: #ffffff;
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial,
    sans-serif;
  line-height: 1.6;
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

/* Responsive Design */
@media (max-width: 768px) {
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
