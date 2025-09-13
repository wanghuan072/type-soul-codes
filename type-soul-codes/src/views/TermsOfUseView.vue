<template>
  <div class="terms-of-use-page">
    <!-- Header Component -->
    <HeaderComponent />

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">Terms of Use</h1>
          <p class="page-subtitle">Last updated: September 12, 2025</p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="content">
      <div class="container">
        <div class="content-wrapper">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using typesoulcodes.org, you accept and agree to be bound by the terms
            and provision of this agreement.
          </p>

          <h2>Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials on
            typesoulcodes.org for personal, non-commercial transitory viewing only.
          </p>

          <h2>Disclaimer</h2>
          <p>
            The materials on typesoulcodes.org are provided on an 'as is' basis. typesoulcodes.org
            makes no warranties, expressed or implied, and hereby disclaims and negates all other
            warranties including without limitation, implied warranties or conditions of
            merchantability, fitness for a particular purpose, or non-infringement of intellectual
            property or other violation of rights.
          </p>

          <h2>Limitations</h2>
          <p>
            In no event shall typesoulcodes.org or its suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit, or due to business
            interruption) arising out of the use or inability to use the materials on
            typesoulcodes.org, even if typesoulcodes.org or an authorized representative has been
            notified orally or in writing of the possibility of such damage.
          </p>

          <h2>Accuracy of Materials</h2>
          <p>
            The materials appearing on typesoulcodes.org could include technical, typographical, or
            photographic errors. typesoulcodes.org does not warrant that any of the materials on its
            website are accurate, complete or current.
          </p>

          <h2>Links</h2>
          <p>
            typesoulcodes.org has not reviewed all of the sites linked to our website and is not
            responsible for the contents of any such linked site. The inclusion of any link does not
            imply endorsement by typesoulcodes.org of the site.
          </p>

          <h2>Modifications</h2>
          <p>
            typesoulcodes.org may revise these terms of service for its website at any time without
            notice. By using this website you are agreeing to be bound by the then current version
            of these terms of service.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws and
            you irrevocably submit to the exclusive jurisdiction of the courts in that state or
            location.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions about these Terms of Use, please contact us at
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
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
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
