<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="footer-logo">
            <div class="logo-icon">⚡</div>
            <div class="logo-text">Type Soul Codes</div>
          </div>
          <p class="footer-description">
            typesoulcodes.org - Your ultimate Type Soul code rewards destination. Get verified Type
            Soul codes with 99.9% success rate, updated daily.
          </p>
        </div>
        <div class="footer-links">
          <div class="link-column">
            <h4>QUICK LINKS</h4>
            <a href="/">Home</a>
            <a href="/emotes">Emotes</a>
            <a href="/wiki">Wiki</a>
            <a href="/blog">Blog</a>
            <a href="/guides">Guides</a>
          </div>
          <div class="link-column">
            <h4>Legal</h4>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-use">Terms of Use</a>
            <a href="/copyright">Copyright</a>
            <a href="/about-us">About Us</a>
            <a href="/contact-us">Contact Us</a>
          </div>
        </div>
      </div>
      <div class="footer-divider"></div>
      <div class="footer-bottom">
        <div class="footer-copyright">© 2025 • typesoulcodes.org All rights reserved.</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 这里可以添加页脚相关的逻辑
</script>

<style scoped>
/* Footer Section */
.footer {
  background: linear-gradient(135deg, #0f0f0f 0%, #0a0a0a 100%);
  border-top: 1px solid #333;
  padding: 60px 0 30px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  gap: 60px;
  margin-bottom: 40px;
}

.footer-brand {
  max-width: 400px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.logo-text {
  font-size: 24px;
  font-weight: bold;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo-full {
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
}

.footer-description {
  color: #b0b0b0;
  line-height: 1.6;
  font-size: 14px;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  width: 50%;
}

.link-column h4 {
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 20px;
  font-weight: bold;
}

.link-column a {
  display: block;
  color: #b0b0b0;
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 14px;
  transition: color 0.3s ease;
}

.link-column a:hover {
  color: #9b59b6;
}

.footer-divider {
  height: 1px;
  background: #333;
  margin: 30px 0;
}

.footer-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-copyright {
  color: #b0b0b0;
  font-size: 14px;
}

.footer-legal {
  display: flex;
  gap: 20px;
}

.footer-legal a {
  color: #b0b0b0;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-legal a:hover {
  color: #9b59b6;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer {
    padding: 40px 0 20px;
  }

  .footer-content {
    gap: 30px;
  }

  .footer-section h3 {
    font-size: 16px;
  }

  .footer-section ul li {
    margin-bottom: 8px;
  }

  .footer-section ul li a {
    font-size: 12px;
  }

  .logo-text {
    font-size: 20px;
  }

  .logo-full {
    font-size: 16px;
  }

  .footer-description {
    font-size: 12px;
  }

  .footer-bottom {
    padding: 15px 0;
  }

  .footer-legal {
    gap: 15px;
  }

  .footer-legal a {
    font-size: 12px;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 20px 0 10px;
  }

  .footer-content {
    flex-wrap: wrap;
    gap: 20px;
    text-align: center;
    margin-bottom: 10px;
  }

  .footer-section h3 {
    font-size: 14px;
  }

  .footer-section ul li {
    margin-bottom: 5px;
  }

  .footer-section ul li a {
    font-size: 10px;
  }

  .footer-logo {
    margin-bottom: 10px;
  }

  .logo-text {
    font-size: 18px;
  }

  .logo-full {
    font-size: 14px;
  }

  .footer-description {
    font-size: 10px;
    text-align: left;
  }

  .footer-links {
    width: 100%;
    gap: 10px;
    text-align: left;
  }

  .link-column h4 {
    margin-bottom: 10px;
  }

  .link-column a {
    font-size: 12px;
    margin-bottom: 0;
    line-height: 2;
  }

  .footer-bottom {
    padding: 10px 0;
  }

  .footer-divider {
    margin: 10px 0;
  }

  .footer-legal {
    gap: 10px;
    flex-direction: column;
  }

  .footer-legal a {
    font-size: 10px;
  }
}
</style>
