<template>
  <div class="home-page">
    <!-- Header Component -->
    <HeaderComponent />

    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="container">
        <div class="hero-wrap">
          <div class="hero-content">
            <div class="update-info">
              <span class="live-tag">LIVE</span>
              <span class="update-text"
                >Last Updated: {{ currentDateTime }} - {{ activeCodesCount }} Active Codes</span
              >
            </div>
            <h1 class="main-title">
              Type Soul Codes<br />
              - All Active Codes List
            </h1>
            <p class="hero-description">
              Welcome to the fastest and most comprehensive Type Soul codes website, updated daily!
              Get verified Type Soul codes rewards with 99.9% success rate. Discover the latest Type
              Soul codes and claim your free rewards instantly.
            </p>
            <div class="hero-buttons">
              <a
                href="javascript:void(0)"
                @click="scrollToSection('active-codes')"
                class="btn-primary"
              >
                <span class="btn-icon">🎁</span>
                Get Free Codes
              </a>
              <a
                href="javascript:void(0)"
                @click="scrollToSection('how-to-redeem')"
                class="btn-secondary"
              >
                <span class="btn-icon">❓</span>
                How to Redeem
              </a>
            </div>
            <div class="hero-stats">
              <div class="stat-item">
                <span class="stat-icon">⚡</span>
                <span class="stat-text">Fresh Type Soul codes updated daily</span>
              </div>
              <div class="user-rating">
                <div class="stars">★★★★★</div>
                <span class="rating-text">from 99+ happy users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Active Codes Section -->
    <section class="active-codes" id="active-codes">
      <div class="container">
        <div class="active-codes-wrap">
          <h2 class="section-title">Active Codes List</h2>
          <p class="section-description">
            Discover the latest working Type Soul codes that are currently active and ready to use.
            Our team monitors and verifies each Type Soul codes daily to ensure maximum success
            rate. These Type Soul codes provide various rewards including soul coins, skill points,
            experience boosts, and exclusive items to enhance your Type Soul journey.
          </p>
          <div class="codes-grid">
            <div v-for="code in activeCodes" :key="code.id" class="code-card">
              <div class="card-header">
                <div class="status-tag active">Active</div>
              </div>
              <div class="code-content">
                <div class="code-string">{{ code.code }}</div>
                <div class="code-reward">{{ code.reward }}</div>
              </div>
              <button class="copy-button" @click="copyCode(code.code)">
                <span class="copy-icon">📋</span>
                copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Expired Codes Section -->
    <section class="expired-codes" id="expired-codes">
      <div class="container">
        <div class="expired-codes-wrap">
          <h2 class="section-title">Expired Codes List</h2>
          <p class="section-description">
            These codes have expired and are no longer redeemable in Type Soul. While they cannot be
            used anymore, they serve as a historical reference for players who might have missed
            them. We keep this archive to help you track which codes you may have already used and
            to understand the pattern of code releases.
          </p>
          <div class="codes-grid">
            <div v-for="code in expiredCodes" :key="code.id" class="code-card expired">
              <div class="card-header">
                <div class="status-tag expired">Expired</div>
              </div>
              <div class="code-content">
                <div class="code-string">{{ code.code }}</div>
                <div class="code-reward">{{ code.reward }}</div>
              </div>
              <button class="copy-button" @click="copyCode(code.code)">
                <span class="copy-icon">📋</span>
                copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How to Redeem Section -->
    <section class="how-to-redeem" id="how-to-redeem">
      <div class="container">
        <div class="how-to-redeem-wrap">
          <h2 class="section-title">How to Redeem Type Soul Codes</h2>
          <p class="section-description">
            Follow our comprehensive guide to successfully redeem Type Soul codes and claim your
            free rewards. Type Soul makes it easy to enhance your gaming experience with these
            exclusive Type Soul codes that provide valuable in-game items, currency, and abilities.
          </p>
          <div class="redeem-layout">
            <div class="steps-column">
              <h3 class="column-title">Step-by-Step Guide</h3>
              <div class="step-cards">
                <div class="step-card">
                  <div class="step-icon">1</div>
                  <div class="step-content">
                    <h4>Launch Type Soul in Roblox</h4>
                  </div>
                </div>
                <div class="step-card">
                  <div class="step-icon">2</div>
                  <div class="step-content">
                    <h4>Create and Level Up Character</h4>
                    <p>Create a character and level them up until you're at least Semi-Grade 2</p>
                  </div>
                </div>
                <div class="step-card">
                  <div class="step-icon">3</div>
                  <div class="step-content">
                    <h4>Find the Gift Box Button</h4>
                    <p>Select the button at the top of your screen that looks like a gift box</p>
                  </div>
                </div>
                <div class="step-card">
                  <div class="step-icon">4</div>
                  <div class="step-content">
                    <h4>Enter Type Soul Codes</h4>
                    <p>
                      Type a Type Soul codes into the text box and press the Enter key to receive
                      your rewards
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="tips-column">
              <h3 class="column-title">Pro Tips</h3>
              <div class="tips-card">
                <div class="tip-item">
                  <div class="tip-icon">✓</div>
                  <div class="tip-content">
                    <h4>Check our website daily for new Type Soul codes updates</h4>
                  </div>
                </div>
                <div class="tip-item">
                  <div class="tip-icon">✓</div>
                  <div class="tip-content">
                    <h4>Join the official Type Soul Discord for Type Soul codes announcements</h4>
                  </div>
                </div>
                <div class="tip-item">
                  <div class="tip-icon">✓</div>
                  <div class="tip-content">
                    <h4>Redeem Type Soul codes as soon as possible before they expire</h4>
                  </div>
                </div>
                <div class="tip-item">
                  <div class="tip-icon">✓</div>
                  <div class="tip-content">
                    <h4>
                      Share working Type Soul codes with friends to help the Type Soul community
                    </h4>
                  </div>
                </div>
              </div>
              <img
                class="redeem-image"
                src="/images/roblox-type-soul-codes-button.webp"
                alt="How to Redeem Type Soul Codes"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose-us" id="why-choose-us">
      <div class="container">
        <div class="why-choose-us-wrap">
          <h2 class="section-title">Why Choose Our Website</h2>
          <p class="section-description">
            We are the leading platform for Type Soul codes with unmatched reliability, speed, and
            user satisfaction. Here's what makes us the best choice for all your Type Soul codes
            redemption needs.
          </p>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">⚡</div>
              <h3>Lightning Fast Updates</h3>
              <p>
                We update our Type Soul codes database daily, ensuring you get the latest working
                Type Soul codes before anyone else. Our system monitors game updates daily.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🎯</div>
              <h3>99.9% Success Rate</h3>
              <p>
                Every Type Soul codes is thoroughly tested before being published. Our verification
                process ensures maximum success rate for all users.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🔒</div>
              <h3>100% Safe & Secure</h3>
              <p>
                All codes are obtained through official channels only. No hacks, no exploits - just
                legitimate rewards for your Type Soul journey.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">📱</div>
              <h3>Mobile Optimized</h3>
              <p>
                Access our Type Soul codes anywhere, anytime. Our website is fully optimized for
                mobile devices with one-click copy functionality.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">👥</div>
              <h3>Community Driven</h3>
              <p>
                Join thousands of satisfied users who trust our platform. Get support from our
                active community and expert moderators.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🆓</div>
              <h3>Completely Free</h3>
              <p>
                All our services are completely free. No hidden fees, no premium subscriptions -
                just free Type Soul codes for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq" id="faq">
      <div class="container">
        <div class="faq-wrap">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-description">
            Find answers to the most common questions about Type Soul codes, redemption process, and
            our services. If you don't find what you're looking for, feel free to contact our
            support team for additional assistance.
          </p>
          <div class="faq-content">
            <div class="faq-list">
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">❓</span>
                  Why are my codes not working?
                </h3>
                <p class="faq-answer">
                  The code may be expired or entered incorrectly. Please check if the code is still
                  valid and ensure you copy and paste it correctly. Also, make sure you haven't
                  already used this code before, as most codes can only be redeemed once per
                  account. If the problem persists, try refreshing the game or contact our support
                  team.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">⏰</span>
                  How often are new codes released?
                </h3>
                <p class="faq-answer">
                  New codes are usually released during game updates or when reaching milestones. We
                  check and update Type Soul codes status daily. Major updates typically bring 3-5
                  new codes, while smaller patches may include 1-2 codes. Follow our website and
                  social media for daily notifications when new codes become available.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">🔗</span>
                  Where to find more codes?
                </h3>
                <p class="faq-answer">
                  Follow our website and the official game Discord! We will publish the latest codes
                  information as soon as possible. Additionally, you can join our community Discord
                  server where we share exclusive codes, tips, and strategies. Don't forget to
                  enable notifications to never miss a new codes release.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">⏱️</span>
                  How long do codes stay active?
                </h3>
                <p class="faq-answer">
                  Most Type Soul codes remain active for 1-2 weeks, but some special event Type Soul
                  codes may expire within 1-2 days. We update our database daily, so you'll always
                  see the current status of each Type Soul codes. We recommend using Type Soul codes
                  as soon as possible to avoid missing out.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">💰</span>
                  What rewards can I get from codes?
                </h3>
                <p class="faq-answer">
                  Type Soul codes can provide various rewards including soul coins, skill points,
                  experience boosts, rare items, exclusive cosmetics, and special abilities. The
                  value and type of rewards vary depending on the code. Check each code's
                  description for specific reward details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Game Info Section -->
    <section class="game-info" id="game-info">
      <div class="container">
        <div class="game-info-wrap">
          <h2 class="section-title">About Type Soul Codes</h2>
          <p class="section-subtitle">
            Everything you need to know about Type Soul codes and how they enhance your gameplay
          </p>
          <div class="about-content">
            <div class="intro-text">
              <p>
                Type Soul codes are promotional codes for a Roblox anime game that provide in-game
                items like currency (Kan), race spins, weapon spins, skill resets, and cosmetics.
                These Type Soul codes are released by the development team regularly during updates,
                events, and milestones, allowing players to unlock rare races (Shinigami, Quincy,
                Arrancar) without spending real money.
              </p>
              <p>
                The development team releases Type Soul codes regularly during updates, events, and
                milestones, allowing players to unlock rare races (Shinigami, Quincy, Arrancar)
                without spending real money. These Type Soul codes provide valuable rewards that
                enhance your gaming experience and help you progress faster in the game.
              </p>
            </div>
            <div class="rewards-section">
              <h3 class="rewards-title">Types of Type Soul Rewards</h3>
              <div class="rewards-grid">
                <div class="reward-card">
                  <h4>Currency Rewards</h4>
                  <p>
                    Type Soul codes provide Kan, the primary in-game currency for items, upgrades,
                    and game mechanics, speeding up progression.
                  </p>
                </div>
                <div class="reward-card">
                  <h4>Race Spins</h4>
                  <p>
                    Unlock powerful races like Shinigami, Quincy, Arrancar, and Fullbringer, each
                    offering unique abilities and playstyles.
                  </p>
                </div>
                <div class="reward-card">
                  <h4>Weapon Spins</h4>
                  <p>
                    Obtain legendary weapons like Zanpakuto, Quincy bows, and Arrancar weapons,
                    providing combat advantages in PvP and PvE.
                  </p>
                </div>
                <div class="reward-card">
                  <h4>Skill Resets</h4>
                  <p>
                    Reallocate skill points to experiment with different builds, perfect for
                    optimizing characters for specific content or playstyles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Component -->
    <FooterComponent />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { codes as codesData } from '@/data/codes.js'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { message } from '@/utils/message.js'

// 响应式数据
const codes = ref(codesData)

// 计算属性
const currentDateTime = ref('')
const activeCodes = computed(() => codes.value.filter((code) => code.category === 'active'))
const expiredCodes = computed(() => codes.value.filter((code) => code.category === 'expired'))
const activeCodesCount = computed(() => activeCodes.value.length)

// 方法
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN')
}

const copyCode = async (code) => {
  try {
    await navigator.clipboard.writeText(code)
    message.success(`code "${code}" Copied to clipboard`)
  } catch (err) {
    console.error('Replication failed:', err)
    message.error('Copy failed, please copy manually')
  }
}

// 平滑滚动到指定区域
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

// 更新当前时间
const updateDateTime = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')

  currentDateTime.value = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
}

// 生命周期
onMounted(() => {
  updateDateTime()
  // 每秒更新一次时间
  setInterval(updateDateTime, 1000)
})
</script>

<style scoped>
/* 全局样式 */
.home-page {
  background: #0a0a0a;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a0b2e 50%, #0a0a0a 100%);
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(rgba(155, 89, 182, 0.15) 1px, transparent 1px),
    linear-gradient(90deg, rgba(155, 89, 182, 0.15) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 1;
}

.hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 107, 157, 0.05) 50%,
      transparent 70%
    ),
    linear-gradient(-45deg, transparent 30%, rgba(78, 205, 196, 0.05) 50%, transparent 70%);
  animation: shimmer 8s ease-in-out infinite;
}

@keyframes shimmer {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.8;
  }
}

.hero-wrap {
  position: relative;
  z-index: 10;
  text-align: center;
  width: 100%;
}

.hero-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.update-info {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  background: rgba(155, 89, 182, 0.2);
  padding: 12px 30px;
  border-radius: 30px;
  margin-bottom: 50px;
  border: 1px solid #9b59b6;
}

.live-tag {
  background: #9b59b6;
  color: #ffffff;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
}

.update-text {
  color: #b0b0b0;
  font-size: 16px;
}

.main-title {
  font-size: 72px;
  font-weight: bold;
  margin-bottom: 40px;
  line-height: 1.1;
  background: linear-gradient(45deg, #ffffff, #ff6b9d, #4ecdc4, #9b59b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(255, 107, 157, 0.3);
}

.title-text {
  display: block;
  margin-bottom: 10px;
}

.title-gradient {
  display: block;
  margin-bottom: 10px;
}

.title-subtitle {
  display: block;
  font-size: 48px;
  margin-top: 20px;
}

.hero-description {
  font-size: 24px;
  color: #b0b0b0;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 40px;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  padding: 10px 20px;
  border-radius: 40px;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4);
  color: #ffffff;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(255, 107, 157, 0.3);
}

.btn-secondary {
  background: transparent;
  color: #ffffff;
  border: 2px solid #9b59b6;
}

.btn-secondary:hover {
  background: rgba(155, 89, 182, 0.2);
  transform: translateY(-2px);
}

.btn-icon {
  font-size: 24px;
}

.hero-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #b0b0b0;
  font-size: 18px;
}

.stat-icon {
  font-size: 20px;
  color: #9b59b6;
}

.user-rating {
  display: flex;
  align-items: center;
  gap: 15px;
}

.stars {
  color: #ffd700;
  font-size: 20px;
}

.rating-text {
  color: #b0b0b0;
  font-size: 18px;
}

/* Section Titles */
.section-title {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.section-description {
  font-size: 18px;
  color: #b0b0b0;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 50px;
  line-height: 1.6;
}

/* 不同板块的渐变标题 */
.active-codes .section-title {
  background: linear-gradient(45deg, #ff6b9d, #e74c3c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.expired-codes .section-title {
  background: linear-gradient(45deg, #95a5a6, #7f8c8d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.how-to-redeem .section-title {
  background: linear-gradient(45deg, #4ecdc4, #3498db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.faq .section-title {
  background: linear-gradient(45deg, #9b59b6, #8e44ad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.game-info .section-title {
  background: linear-gradient(45deg, #f39c12, #e67e22);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.why-choose-us .section-title {
  background: linear-gradient(45deg, #e74c3c, #c0392b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Active Codes Section */
.active-codes {
  padding: 80px 0;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
}

.active-codes-wrap {
  text-align: center;
}

/* 代码网格布局 */
.codes-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.code-card {
  background: #1a1a1a;
  border: 2px solid #9b59b6;
  border-radius: 15px;
  padding: 20px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.code-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(155, 89, 182, 0.3);
  border-color: #ff6b9d;
}

.code-card.expired {
  opacity: 0.6;
  filter: grayscale(0.5);
  border-color: #666666;
}

.code-card.expired:hover {
  transform: none;
  box-shadow: none;
  border-color: #666666;
}

.card-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 15px;
}

.status-tag {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
}

.status-tag.active {
  background: #27ae60;
  color: #ffffff;
}

.status-tag.expired {
  background: #666666;
  color: #ffffff;
}

.code-content {
  margin-bottom: 20px;
  text-align: center;
}

.code-string {
  font-size: 20px;
  font-weight: bold;
  color: #4ecdc4;
  font-family: 'Courier New', monospace;
  margin-bottom: 10px;
}

.code-reward {
  font-size: 14px;
  color: #b0b0b0;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.category-tag {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
}

.category-tag.coins {
  background: #ffd700;
  color: #000000;
}

.category-tag.traits {
  background: #9b59b6;
  color: #ffffff;
}

.category-tag.weapons {
  background: #e74c3c;
  color: #ffffff;
}

.category-tag.perks {
  background: #3498db;
  color: #ffffff;
}

.status-tag {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
}

.status-tag.active {
  background: #27ae60;
  color: #ffffff;
}

.status-tag.expired {
  background: #666666;
  color: #ffffff;
}

.code-content {
  margin-bottom: 20px;
}

.code-field {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.code-text {
  font-size: 24px;
  font-weight: bold;
  color: #4ecdc4;
  font-family: 'Courier New', monospace;
}

.copy-icon {
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.copy-icon:hover {
  background: rgba(255, 255, 255, 0.1);
}

.reward-info {
  margin-bottom: 15px;
}

.reward-label {
  color: #b0b0b0;
  font-size: 14px;
}

.reward-text {
  color: #ffffff;
  font-weight: bold;
  margin-left: 8px;
}

.date-info {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #b0b0b0;
}

.copy-button {
  width: 100%;
  background: linear-gradient(45deg, #4ecdc4, #27ae60);
  color: #ffffff;
  border: none;
  padding: 5px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.copy-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(78, 205, 196, 0.3);
}

/* Expired Codes Section */
.expired-codes {
  padding: 80px 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #0d0d0d 100%);
}

/* How to Redeem Section */
.how-to-redeem {
  padding: 80px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
}

.redeem-content {
  max-width: 1000px;
  margin: 0 auto;
}

.redeem-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 50px;
}

.step-item {
  text-align: center;
  position: relative;
}

.step-item:not(:last-child)::after {
  content: '→';
  position: absolute;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  color: #9b59b6;
}

.step-number {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #4ecdc4, #3498db);
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  margin: 0 auto 20px;
}

.step-content h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #ffffff;
  background: linear-gradient(45deg, #4ecdc4, #3498db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.step-content p {
  color: #b0b0b0;
  line-height: 1.6;
  font-size: 14px;
  text-align: left;
}

/* FAQ Section */
.faq {
  padding: 80px 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #0f0f0f 100%);
}

.faq-content {
  max-width: 1000px;
  margin: 0 auto;
}

.faq-item {
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: #9b59b6;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(155, 89, 182, 0.2);
}

.faq-question {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  font-size: 18px;
  color: #ffffff;
  background: linear-gradient(45deg, #9b59b6, #8e44ad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.faq-icon {
  font-size: 24px;
  color: #9b59b6;
}

.faq-answer {
  color: #b0b0b0;
  line-height: 1.6;
  font-size: 16px;
  text-align: left;
}

/* Game Info Section */
.game-info {
  padding: 80px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
}

.game-info-wrap {
  text-align: center;
}

.game-content {
  max-width: 1000px;
  margin: 0 auto;
}

.game-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.game-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
  border: 2px solid #333;
  border-radius: 20px;
  padding: 80px 60px;
  text-align: center;
  width: 100%;
  max-width: 400px;
  transition: all 0.3s ease;
}

.image-placeholder:hover {
  border-color: #f39c12;
  box-shadow: 0 15px 40px rgba(243, 156, 18, 0.3);
  transform: translateY(-5px);
}

.placeholder-icon {
  font-size: 80px;
  margin-bottom: 20px;
  display: block;
}

.placeholder-text {
  font-size: 24px;
  font-weight: bold;
  background: linear-gradient(45deg, #f39c12, #e67e22);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.game-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.stat-item {
  background: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  border: 1px solid #333;
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-3px);
  border-color: #f39c12;
  box-shadow: 0 8px 25px rgba(243, 156, 18, 0.2);
}

.stat-number {
  font-size: 32px;
  font-weight: bold;
  background: linear-gradient(45deg, #f39c12, #e67e22);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}

.stat-label {
  color: #b0b0b0;
  font-size: 14px;
  font-weight: 500;
}

.game-features {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.feature-item {
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-item:hover {
  border-color: #f39c12;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(243, 156, 18, 0.2);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
  display: block;
}

.feature-item h3 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #ffffff;
  background: linear-gradient(45deg, #f39c12, #e67e22);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.feature-item p {
  color: #b0b0b0;
  line-height: 1.6;
  font-size: 14px;
}

/* Why Choose Us Section */
.why-choose-us {
  padding: 80px 0;
  background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.feature-card {
  background: #1a1a1a;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  border: 1px solid #333;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: #ff6b9d;
  box-shadow: 0 10px 30px rgba(255, 107, 157, 0.2);
}

.feature-card .feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
  display: block;
}

.feature-card h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.feature-card p {
  color: #b0b0b0;
  line-height: 1.6;
  font-size: 16px;
}

/* Game Info New Layout Styles */
.highlight-item {
  display: flex;
  align-items: flex-start;
  background: #1a1a1a;
  padding: 30px;
  border-radius: 15px;
  border: 1px solid #333;
  transition: all 0.3s ease;
}

.highlight-item:hover {
  transform: translateY(-5px);
  border-color: #f39c12;
  box-shadow: 0 10px 30px rgba(243, 156, 18, 0.2);
}

.highlight-icon {
  font-size: 40px;
  margin-right: 25px;
  flex-shrink: 0;
}

.highlight-content h3 {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
  background: linear-gradient(45deg, #f39c12, #e67e22);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.highlight-content p {
  color: #b0b0b0;
  line-height: 1.6;
  font-size: 16px;
}

/* Game Info Left-Right Layout Styles */
.game-layout .feature-item {
  display: flex;
  align-items: flex-start;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 15px;
  padding: 20px;
  transition: all 0.3s ease;
}

.game-layout .feature-item:hover {
  border-color: #f39c12;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(243, 156, 18, 0.2);
}

.game-layout .feature-icon {
  font-size: 32px;
  margin-right: 15px;
  flex-shrink: 0;
}

.game-layout .feature-content h3 {
  font-size: 18px;
  margin-bottom: 8px;
  color: #ffffff;
  background: linear-gradient(45deg, #f39c12, #e67e22);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.game-layout .feature-content p {
  color: #b0b0b0;
  line-height: 1.5;
  font-size: 14px;
}

/* How to Redeem New Layout */
.redeem-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
}

.column-title {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 20px;
}

.step-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step-card {
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.step-icon {
  background: #9b59b6;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  flex-shrink: 0;
}

.step-content h4 {
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: left;
}

.step-content p {
  color: #b0b0b0;
  font-size: 14px;
  line-height: 1.5;
}

.tips-card {
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 20px;
}

.tip-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 15px;
}

.tip-item:last-child {
  margin-bottom: 0;
}

.tip-icon {
  background: #27ae60;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  flex-shrink: 0;
}

.tip-content h4 {
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
}

.redeem-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 10px;
}

/* About Type Soul New Layout */
.section-subtitle {
  font-size: 18px;
  color: #b0b0b0;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 400;
}

.about-content {
  max-width: 1000px;
  margin: 0 auto;
}

.intro-text {
  margin-bottom: 50px;
}

.intro-text p {
  color: #ffffff;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.rewards-title {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 30px;
}

.rewards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.reward-card {
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 25px;
  transition: all 0.3s ease;
}

.reward-card:hover {
  border-color: #f39c12;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(243, 156, 18, 0.1);
}

.reward-card h4 {
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
}

.reward-card p {
  color: #b0b0b0;
  font-size: 14px;
  line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero {
    padding: 10px 0;
  }

  .main-title {
    font-size: 20px;
  }

  .hero-description {
    font-size: 12px;
  }

  .hero-buttons {
    gap: 10px;
  }

  .btn-primary,
  .btn-secondary {
    padding: 10px 20px;
    font-size: 12px;
  }

  .hero-stats {
    gap: 10px;
  }

  .update-info {
    padding: 10px;
    gap: 10px;
  }

  .live-tag {
    font-size: 12px;
    padding: 4px 8px;
  }

  .update-text {
    font-size: 12px;
  }

  .codes-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .code-card {
    padding: 10px;
  }

  .code-title {
    font-size: 16px;
  }

  .card-header {
    margin-bottom: 10px;
    font-size: 12px;
  }

  .code-string {
    font-size: 16px;
    margin-bottom: 10px;
    line-height: 1;
  }

  .code-reward {
    font-size: 12px;
    line-height: 1;
  }

  .code-content {
    margin-bottom: 10px;
  }

  .copy-button {
    font-size: 12px;
  }

  .copy-icon {
    padding: 0 5px;
  }

  .section-title {
    font-size: 20px;
  }

  .section-subtitle {
    font-size: 16px;
  }

  .redeem-layout {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .steps-column,
  .tips-column {
    margin-bottom: 10px;
  }

  .step-card {
    padding: 10px;
  }

  .step-icon {
    font-size: 16px;
  }

  .step-content h4 {
    font-size: 16px;
  }

  .step-content p {
    font-size: 12px;
  }

  .tips-card {
    padding: 10px;
  }

  .tip-item {
    padding: 10px;
  }

  .tip-content h4 {
    font-size: 16px;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .feature-card {
    padding: 10px;
  }

  .feature-card h3 {
    font-size: 18px;
  }

  .feature-card p {
    font-size: 12px;
  }

  .why-choose-us {
    padding: 20px 0;
  }

  .faq-content {
    margin-top: 10px;
  }

  .faq-item {
    padding: 10px;
  }

  .faq-question {
    font-size: 18px;
  }

  .faq-answer {
    font-size: 12px;
  }

  .intro-text p {
    font-size: 12px;
  }

  .rewards-title {
    font-size: 20px;
  }

  .rewards-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .reward-card {
    padding: 10px;
  }

  .reward-card h4 {
    font-size: 16px;
  }

  .reward-card p {
    font-size: 12px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 20px 0;
    min-height: auto;
  }

  .main-title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .hero-description {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
  }

  .stat-item {
    font-size: 12px;
    padding: 10px;
    margin-bottom: 10px;
  }

  .stat-icon {
    font-size: 12px;
  }

  .rating-text {
    font-size: 12px;
  }

  .btn-primary,
  .btn-secondary {
    padding: 10px 20px;
    font-size: 12px;
  }

  .btn-icon {
    font-size: 12px;
  }

  .expired-codes {
    padding: 20px 0;
  }

  .how-to-redeem {
    padding: 20px 0;
  }

  .hero-stats {
    flex-direction: column;
    gap: 10px;
  }

  .update-info {
    padding: 10px;
    gap: 10px;
    margin-bottom: 10px;
  }

  .active-codes {
    padding: 20px 0;
  }

  .live-tag {
    font-size: 12px;
    padding: 4px 8px;
  }

  .update-text {
    font-size: 12px;
  }

  .code-card {
    padding: 10px;
  }

  .code-title {
    font-size: 16px;
  }

  .code-reward {
    font-size: 12px;
  }

  .section-title {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .section-description {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .section-subtitle {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .intro-text p {
    margin-bottom: 10px;
  }

  .intro-text {
    margin-bottom: 10px;
  }

  .redeem-layout {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .steps-column,
  .tips-column {
    margin-bottom: 10px;
  }

  .step-card {
    padding: 10px;
  }

  .step-icon {
    font-size: 14px;
  }

  .step-content h4 {
    font-size: 16px;
  }

  .step-content p {
    font-size: 12px;
  }

  .tip-item {
    padding: 10px;
  }

  .tip-content h4 {
    font-size: 16px;
  }

  .feature-card {
    padding: 10px;
  }

  .feature-card h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .feature-card p {
    font-size: 12px;
  }

  .feature-card .feature-icon {
    font-size: 30px;
    margin-bottom: 10px;
  }

  .faq {
    padding: 20px 0;
  }

  .faq-content {
    margin-top: 10px;
  }

  .faq-item {
    padding: 10px;
  }

  .faq-question {
    font-size: 18px;
    line-height: 1.3;
    gap: 10px;
    margin-bottom: 10px;
  }

  .faq-answer {
    font-size: 12px;
  }

  .game-info {
    padding: 20px 0;
  }

  .intro-text p {
    font-size: 12px;
  }

  .rewards-title {
    font-size: 20px;
  }

  .rewards-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .reward-card {
    padding: 10px;
  }

  .reward-card h4 {
    font-size: 16px;
  }

  .reward-card p {
    font-size: 12px;
  }
}
</style>
