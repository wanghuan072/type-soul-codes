<template>
  <div class="copyright-page">
    <!-- Header Component -->
    <HeaderComponent />

    <!-- Hero Section -->
    <section class="hero-inner">
      <div class="hero-wrap">
        <div class="hero-content">
          <h1 class="page-title">Copyright Notice</h1>
          <p class="page-subtitle">Last updated: September 12, 2025</p>
        </div>
      </div>
    </section>
    
    <!-- Content Section -->
    <section class="content">
      <div class="container">
        <div class="content-wrapper">
          <h2>Copyright Information</h2>
          <p>
            © 2025 typesoulcodes.org. All rights reserved. The content, organization, graphics,
            design, compilation, magnetic translation, digital conversion and other matters related
            to the Site are protected under applicable copyrights, trademarks and other proprietary
            rights.
          </p>

          <h2>Intellectual Property Rights</h2>
          <p>
            All content, trademarks, service marks, trade names, logos, and icons are the property
            of typesoulcodes.org or its content suppliers and are protected by copyright laws and
            international treaties.
          </p>

          <h2>Permitted Use</h2>
          <p>
            You may view, download, and print content from this site for your personal,
            non-commercial use only, provided you do not modify the content and you retain all
            copyright and other proprietary notices contained in the content.
          </p>

          <h2>Prohibited Use</h2>
          <p>
            You may not reproduce, distribute, display, sell, lease, transmit, create derivative
            works from, translate, modify, reverse-engineer, disassemble, decompile or otherwise
            exploit this Site or any portion of it unless expressly permitted by typesoulcodes.org
            in writing.
          </p>

          <h2>Third-Party Content</h2>
          <p>
            Some content on this site may be the copyrighted work of third parties. We respect the
            intellectual property rights of others and expect our users to do the same.
          </p>

          <h2>DMCA Notice</h2>
          <p>
            If you believe that your copyrighted work has been copied in a way that constitutes
            copyright infringement, please contact us at
            <a href="mailto:wyong@typesoulcodes.org">wyong@typesoulcodes.org</a> with the following
            information:
          </p>
          <ul>
            <li>A description of the copyrighted work that you claim has been infringed</li>
            <li>
              A description of where the material that you claim is infringing is located on the
              site
            </li>
            <li>
              Your contact information including name, address, telephone number, and email address
            </li>
            <li>
              A statement that you have a good faith belief that the disputed use is not authorized
              by the copyright owner
            </li>
            <li>
              A statement that the information in your notice is accurate and that you are the
              copyright owner or authorized to act on the copyright owner's behalf
            </li>
          </ul>

          <h2>Type Soul Game Content</h2>
          <p>
            This website is not affiliated with, endorsed by, or sponsored by the creators of the
            Type Soul game. All game-related content, including codes and information, is provided
            for informational purposes only.
          </p>

          <h2>Contact Information</h2>
          <p>
            For any copyright-related inquiries, please contact us at
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
