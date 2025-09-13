<template>
  <div class="about-us-page">
    <!-- Header Component -->
    <HeaderComponent />

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">About Us</h1>
          <p class="page-subtitle">Your trusted source for Type Soul codes and guides</p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="content">
      <div class="container">
        <div class="content-wrapper">
          <h2>Who We Are</h2>
          <p>
            typesoulcodes.org is the leading platform for Type Soul game codes, guides, and
            community resources. We are passionate gamers dedicated to helping the Type Soul
            community access the latest codes and improve their gaming experience.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to provide Type Soul players with accurate, up-to-date information about
            game codes, strategies, and community resources. We strive to be the most reliable
            source for Type Soul content, ensuring our users have access to the latest working codes
            and comprehensive guides.
          </p>

          <h2>What We Offer</h2>
          <ul>
            <li><strong>Active Codes:</strong> Daily updated list of working Type Soul codes</li>
            <li>
              <strong>Game Guides:</strong> Comprehensive guides for all aspects of Type Soul
              gameplay
            </li>
            <li>
              <strong>Emotes List:</strong> Complete collection of available emotes and commands
            </li>
            <li>
              <strong>Wiki Resources:</strong> Detailed information about races, locations, and
              abilities
            </li>
            <li>
              <strong>Community Blog:</strong> Latest news, tips, and strategies from experienced
              players
            </li>
          </ul>

          <h2>Our Commitment</h2>
          <p>
            We are committed to providing accurate, reliable, and up-to-date information. Our team
            works around the clock to verify codes, update guides, and ensure our content remains
            current with the latest game updates.
          </p>

          <h2>Community Focus</h2>
          <p>
            We believe in fostering a positive and helpful community. Our platform is designed to
            bring Type Soul players together, share knowledge, and enhance everyone's gaming
            experience.
          </p>

          <h2>Quality Assurance</h2>
          <p>
            Every code we publish is thoroughly tested and verified before being added to our
            database. We maintain a 99.9% success rate for our code recommendations, ensuring our
            users can trust the information we provide.
          </p>

          <h2>Regular Updates</h2>
          <p>
            We update our content daily to ensure you always have access to the latest working codes
            and most current game information. Our team monitors game updates and community feedback
            to keep our resources fresh and relevant.
          </p>

          <h2>Contact Us</h2>
          <p>
            Have questions, suggestions, or feedback? We'd love to hear from you! Contact us at
            <a href="mailto:wyong@typesoulcodes.org">wyong@typesoulcodes.org</a> and we'll get back
            to you as soon as possible.
          </p>

          <h2>Join Our Community</h2>
          <p>
            Stay connected with the Type Soul community by following our updates and sharing your
            experiences. Together, we can make the Type Soul gaming experience even better for
            everyone.
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
.about-us-page {
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
