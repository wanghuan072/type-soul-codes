<template>
  <div class="contact-us-page">
    <!-- Header Component -->
    <HeaderComponent />

    <!-- Hero Section -->
    <section class="hero-inner">
      <div class="hero-wrap">
        <div class="hero-content">
          <h1 class="page-title">Contact Us</h1>
          <p class="page-subtitle">Get in touch with our team</p>
        </div>
      </div>
    </section>

    

    <!-- Content Section -->
    <section class="content">
      <div class="container">
        <div class="content-wrapper">
          <h2>Get in Touch</h2>
          <p>
            We'd love to hear from you! Whether you have questions about our services, suggestions
            for improvement, or just want to say hello, we're here to help.
          </p>

          <h2>Contact Information</h2>
          <div class="contact-info">
            <div class="contact-item">
              <h3>Email</h3>
              <p><a href="mailto:wyong@typesoulcodes.org">wyong@typesoulcodes.org</a></p>
              <p>We typically respond within 24 hours</p>
            </div>

            <div class="contact-item">
              <h3>Response Time</h3>
              <p>Monday - Friday: Within 24 hours</p>
              <p>Weekends: Within 48 hours</p>
            </div>
          </div>

          <h2>What We Can Help With</h2>
          <ul>
            <li>
              <strong>Code Issues:</strong> If you're having trouble with a code that should be
              working
            </li>
            <li><strong>Website Feedback:</strong> Suggestions for improving our platform</li>
            <li><strong>Content Requests:</strong> Ideas for new guides or resources</li>
            <li><strong>Technical Support:</strong> Help with website functionality</li>
            <li><strong>Partnership Inquiries:</strong> Collaboration opportunities</li>
            <li>
              <strong>General Questions:</strong> Anything else related to Type Soul or our services
            </li>
          </ul>

          <h2>Before You Contact Us</h2>
          <p>
            To help us provide the best assistance, please include the following information in your
            email:
          </p>
          <ul>
            <li>Your specific question or issue</li>
            <li>Any error messages you're seeing</li>
            <li>Steps you've already tried</li>
            <li>Your device and browser information (if relevant)</li>
          </ul>

          <h2>Frequently Asked Questions</h2>
          <div class="faq-section">
            <div class="faq-item">
              <h4>How often do you update codes?</h4>
              <p>
                We update our code database daily to ensure accuracy and provide the latest working
                codes.
              </p>
            </div>

            <div class="faq-item">
              <h4>Are your codes safe to use?</h4>
              <p>
                Yes, all codes we publish are verified and obtained through legitimate channels. We
                never promote or share hacked or exploit codes.
              </p>
            </div>

            <div class="faq-item">
              <h4>Can I suggest new content?</h4>
              <p>
                Absolutely! We welcome suggestions for new guides, features, or improvements. Send
                us your ideas!
              </p>
            </div>
          </div>

          <h2>Business Hours</h2>
          <p>
            Our team is available Monday through Friday, 9:00 AM to 6:00 PM (EST). While we may
            respond outside these hours, please allow up to 24-48 hours for a response during
            weekends and holidays.
          </p>

          <h2>Privacy</h2>
          <p>
            We respect your privacy and will never share your personal information with third
            parties. All communications are kept confidential and used only to provide you with the
            best possible service.
          </p>

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
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
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
