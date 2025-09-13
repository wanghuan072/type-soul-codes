<template>
  <div class="emotes-page">
    <!-- Header Component -->
    <HeaderComponent />

    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="container">
        <div class="hero-wrap">
          <div class="hero-content">
            <h1 class="main-title">Type Soul Emotes List</h1>
            <p class="hero-description">
              Discover all available emotes in Type Soul with commands and descriptions. Express
              yourself with these character animations and poses.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Emotes Grid Section -->
    <section class="emotes-grid" id="emotes-list">
      <div class="container">
        <div class="emotes-wrap">
          <h2 class="section-title">All Type Soul Emotes</h2>
          <p class="section-description">
            Browse through our complete collection of Type Soul emotes. Each emote includes a
            description, preview image, and the exact command to use in-game.
          </p>
          <div class="emotes-cards">
            <div v-for="emote in emotes" :key="emote.id" class="emote-card">
              <div class="emote-image">
                <img :src="emote.imageUrl" :alt="emote.imageAlt" />
              </div>
              <div class="emote-content">
                <h3 class="emote-title">{{ emote.title }}</h3>
                <p class="emote-description">{{ emote.description }}</p>
                <div class="emote-command">
                  <span class="command-label">Command:</span>
                  <span class="command-text">{{ emote.code }}</span>
                </div>
                <div class="emote-meta">
                  <span class="publish-date">{{ formatDate(emote.publishDate) }}</span>
                </div>
              </div>
              <button class="copy-button" @click="copyCommand(emote.code)">
                <span class="copy-icon">📋</span>
                Copy Command
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section" id="about">
      <div class="container">
        <div class="about-wrap">
          <h2 class="section-title">About Type Soul Emotes</h2>
          <p class="section-description">
            Emotes in Type Soul allow you to express yourself and interact with other players
            through various character animations and poses.
          </p>
          <div class="about-content">
            <div class="about-text">
              <h3>How to Use Emotes</h3>
              <p>
                To use an emote in Type Soul, simply type the command in the chat. For example,
                typing "/e sit" will make your character perform the sitting animation. Emotes are a
                great way to roleplay, communicate with other players, or simply add personality to
                your character.
              </p>
              <h3>Emote Categories</h3>
              <p>
                Our emotes are organized into different categories including resting poses, combat
                stances, social interactions, and special animations. Each emote has been carefully
                tested to ensure it works properly in the game.
              </p>
            </div>
          </div>
          <div class="about-features">
            <div class="feature-item">
              <div class="feature-icon">🎭</div>
              <h4>Roleplay Ready</h4>
              <p>Perfect for immersive roleplay experiences</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">👥</div>
              <h4>Social Interaction</h4>
              <p>Express yourself to other players</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">⚡</div>
              <h4>Easy to Use</h4>
              <p>Simple commands for instant activation</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section" id="faq">
      <div class="container">
        <div class="faq-wrap">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-description">
            Common questions about Type Soul emotes and how to use them effectively.
          </p>
          <div class="faq-content">
            <div class="faq-list">
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">❓</span>
                  How do I use emotes in Type Soul?
                </h3>
                <p class="faq-answer">
                  Simply type the emote command in the chat. For example, type "/e sit" to make your
                  character sit down. The command will be executed immediately.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">⏱️</span>
                  How long do emotes last?
                </h3>
                <p class="faq-answer">
                  Most emotes last for a few seconds and then your character will return to the
                  default standing pose. Some emotes like sitting or resting can be held longer by
                  not moving.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">🚫</span>
                  Can I use emotes while in combat?
                </h3>
                <p class="faq-answer">
                  Some emotes can be used during combat, but they may be interrupted by taking
                  damage or performing other actions. It's best to use emotes when you're safe from
                  combat.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">🔄</span>
                  Are there new emotes added regularly?
                </h3>
                <p class="faq-answer">
                  Yes! The Type Soul development team regularly adds new emotes with game updates.
                  We update our list whenever new emotes are released.
                </p>
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
import { ref, onMounted } from 'vue'
import { emotes as emotesData } from '@/data/emotes.js'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { message } from '@/utils/message.js'

// 响应式数据
const emotes = ref(emotesData)

// 方法
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const copyCommand = async (command) => {
  try {
    await navigator.clipboard.writeText(command)
    message.success(`Emotes "${command}" Copied to clipboard`)
  } catch (err) {
    console.error('Copy failed:', err)
    message.error('Copy failed, please copy manually')
  }
}
</script>

<style scoped>
/* 全局样式 */
.emotes-page {
  background: #0a0a0a;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #1a0b2e 0%, #2d1b69 50%, #1a0b2e 100%);
  padding: 120px 0 80px;
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
  background: radial-gradient(circle at 30% 20%, rgba(255, 107, 157, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(78, 205, 196, 0.1) 0%, transparent 50%);
  pointer-events: none;
  z-index: 1;
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

.main-title {
  font-size: 56px;
  font-weight: bold;
  margin-bottom: 30px;
  line-height: 1.2;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4, #9b59b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 20px rgba(255, 107, 157, 0.2);
}

.hero-description {
  font-size: 20px;
  color: #b0b0b0;
  margin-bottom: 0;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

/* Section Titles */
.section-title {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  font-size: 18px;
  color: #b0b0b0;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 50px;
  line-height: 1.6;
}

/* Emotes Grid Section */
.emotes-grid {
  padding: 80px 0;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
}

.emotes-wrap {
  text-align: center;
}

.emotes-cards {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.emote-card {
  background: #1a1a1a;
  border: 2px solid #9b59b6;
  border-radius: 15px;
  padding: 10px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.emote-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(155, 89, 182, 0.3);
  border-color: #ff6b9d;
}

.emote-image {
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #000;
}

.emote-image img {
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: contain;
  border-radius: 10px;
}

.emote-content {
  margin-bottom: 20px;
  text-align: left;
}

.emote-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #ffffff;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.emote-description {
  color: #b0b0b0;
  font-size: 14px;
  margin-bottom: 15px;
  line-height: 1.5;
}

.emote-command {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.command-label {
  color: #9b59b6;
  font-weight: bold;
  font-size: 14px;
}

.command-text {
  background: #2a2a2a;
  color: #4ecdc4;
  padding: 5px 10px;
  border-radius: 5px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  border: 1px solid #4ecdc4;
}

.emote-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #666;
}

.copy-button {
  width: 100%;
  background: linear-gradient(45deg, #4ecdc4, #27ae60);
  color: #ffffff;
  border: none;
  padding: 12px;
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

/* About Section */
.about-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
}

.about-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 50px;
}

.about-text h3 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #ffffff;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-text p {
  color: #b0b0b0;
  margin-bottom: 30px;
  line-height: 1.6;
}

.feature-item {
  text-align: center;
  padding: 20px;
  background: #1a1a1a;
  border-radius: 10px;
  border: 1px solid #333;
  transition: all 0.3s ease;
}

.feature-item:hover {
  border-color: #9b59b6;
  transform: translateY(-3px);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 15px;
  display: block;
}

.feature-item h4 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #ffffff;
}

.feature-item p {
  color: #b0b0b0;
  font-size: 14px;
}

/* FAQ Section */
.faq-section {
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
  padding: 10px;
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
  gap: 10px;
  margin-bottom: 10px;
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

/* Responsive Design */
@media (max-width: 1024px) {
  .hero {
    padding: 100px 0 60px;
  }

  .main-title {
    font-size: 40px;
  }

  .emotes-cards {
    grid-template-columns: repeat(4, 1fr);
  }

  .hero-description {
    font-size: 16px;
  }

  .emote-card {
    padding: 10px;
  }

  .emote-title {
    font-size: 16px;
  }

  .emote-description {
    font-size: 12px;
  }

  .emote-code {
    font-size: 12px;
  }

  .section-subtitle {
    font-size: 16px;
  }

  .about-features {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .feature-card {
    padding: 15px;
  }

  .feature-card h4 {
    font-size: 16px;
  }

  .feature-card p {
    font-size: 12px;
  }

  .faq-question {
    font-size: 16px;
  }

  .faq-answer {
    font-size: 12px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 80px 0 40px;
  }

  .main-title {
    font-size: 24px;
  }

  .section-title {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .section-description {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .hero-description {
    font-size: 12px;
  }

  .emotes-cards {
    gap: 10px;
    grid-template-columns: repeat(2, 1fr);
  }

  .emotes-grid {
    padding: 20px 0;
  }

  .emote-content {
    margin-bottom: 10px;
  }

  .emote-card {
    padding: 10px;
  }

  .emote-image {
    margin-bottom: 10px;
  }

  .emote-description {
    margin-bottom: 10px;
  }

  .emote-command {
    flex-wrap: wrap;
  }

  .emote-title {
    font-size: 14px;
  }

  .emote-description {
    font-size: 10px;
  }

  .emote-code {
    font-size: 10px;
  }

  .copy-button {
    padding: 5px;
    text-align: left;
    font-size: 12px;
  }

  .section-subtitle {
    font-size: 14px;
  }

  .about-section {
    padding: 20px 0;
  }

  .about-features {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .about-text h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .about-text p {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .about-features {
    margin-top: 10px;
  }

  .feature-item {
    padding: 10px;
  }

  .feature-icon {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .feature-card {
    padding: 10px;
  }

  .feature-card h4 {
    font-size: 14px;
  }

  .feature-card p {
    font-size: 10px;
  }

  .faq-section {
    padding: 20px 0;
  }

  .faq-question {
    font-size: 14px;
  }

  .faq-answer {
    font-size: 10px;
  }
}
</style>
