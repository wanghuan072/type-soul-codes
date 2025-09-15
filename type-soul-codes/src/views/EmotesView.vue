<template>
  <div class="emotes-page">
    <!-- Header Component -->
    <HeaderComponent />

    <!-- Hero Section -->
    <section class="hero-inner">
      <div class="hero-wrap">
        <div class="hero-content">
          <h1 class="hero-title">Type Soul Emotes List</h1>
          <p class="hero-description">
            Discover the complete Type Soul Emotes List with all available emotes, commands and descriptions. Express
            yourself with these character animations and poses from our comprehensive Type Soul Emotes List.
          </p>
        </div>
      </div>
    </section>

    <!-- Emotes Grid Section -->
    <section class="emotes-grid" id="emotes-list">
      <div class="container">
        <div class="emotes-wrap">
          <h2 class="section-title">Complete Type Soul Emotes List</h2>
          <p class="section-description">
            Browse through our complete Type Soul Emotes List collection. Each emote in our Type Soul Emotes List includes a
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
                <span class="copy-icon">
                  <svg t="1757749289428" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18475" width="200" height="200"><path d="M921.6 819.2h-102.4v102.4c0 56.32-46.08 102.4-102.4 102.4H102.4c-56.32 0-102.4-46.08-102.4-102.4V307.2c0-56.32 46.08-102.4 102.4-102.4h102.4V102.4c0-56.32 46.08-102.4 102.4-102.4h614.4c56.32 0 102.4 46.08 102.4 102.4v614.4c0 56.32-46.08 102.4-102.4 102.4zM153.6 307.2c-30.72 0-51.2 20.48-51.2 51.2v512c0 30.72 20.48 51.2 51.2 51.2h512c30.72 0 51.2-20.48 51.2-51.2V358.4c0-30.72-20.48-51.2-51.2-51.2H153.6z m768-153.6c0-30.72-20.48-51.2-51.2-51.2H358.4c-30.72 0-51.2 20.48-51.2 51.2v51.2h409.6c56.32 0 102.4 46.08 102.4 102.4v409.6h51.2c30.72 0 51.2-20.48 51.2-51.2V153.6z" fill="#FFAC02" p-id="18476"></path></svg>
                </span>
                Copy
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
          <h2 class="section-title">About Our Type Soul Emotes List</h2>
          <p class="section-description">
            Our Type Soul Emotes List allows you to express yourself and interact with other players
            through various character animations and poses. This comprehensive Type Soul Emotes List covers all available emotes.
          </p>
          <div class="about-content">
            <div class="about-text">
              <h3>How to Use Type Soul Emotes List</h3>
              <p>
                To use emotes from our Type Soul Emotes List, simply type the command in the chat. For example,
                typing "/e sit" will make your character perform the sitting animation. Our Type Soul Emotes List provides
                great ways to roleplay, communicate with other players, or simply add personality to
                your character.
              </p>
              <h3>Type Soul Emotes List Categories</h3>
              <p>
                Our Type Soul Emotes List is organized into different categories including resting poses, combat
                stances, social interactions, and special animations. Each emote in our Type Soul Emotes List has been carefully
                tested to ensure it works properly in the game. The Type Soul Emotes List is updated regularly with new additions.
              </p>
            </div>
          </div>
          <div class="about-features">
            <div class="feature-item">
              <div class="feature-icon">
                <svg t="1757751016030" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="48210" width="200" height="200"><path d="M307.2 153.6c56.32 0 102.4 46.08 102.4 102.4s-46.08 102.4-102.4 102.4-102.4-46.08-102.4-102.4 46.08-102.4 102.4-102.4m0-102.4C194.56 51.2 102.4 143.36 102.4 256s92.16 204.8 204.8 204.8 204.8-92.16 204.8-204.8-92.16-204.8-204.8-204.8zM409.6 665.6c56.32 0 102.4 46.08 102.4 102.4v102.4H102.4v-102.4c0-56.32 46.08-102.4 102.4-102.4h204.8m0-102.4H204.8c-112.64 0-204.8 92.16-204.8 204.8v102.4c0 56.32 46.08 102.4 102.4 102.4h409.6c56.32 0 102.4-46.08 102.4-102.4v-102.4c0-112.64-92.16-204.8-204.8-204.8zM768 153.6h204.8c30.72 0 51.2 20.48 51.2 51.2s-20.48 51.2-51.2 51.2h-204.8c-30.72 0-51.2-20.48-51.2-51.2s20.48-51.2 51.2-51.2z m0 307.2h204.8c30.72 0 51.2 20.48 51.2 51.2s-20.48 51.2-51.2 51.2h-204.8c-30.72 0-51.2-20.48-51.2-51.2s20.48-51.2 51.2-51.2z m0 307.2h204.8c30.72 0 51.2 20.48 51.2 51.2s-20.48 51.2-51.2 51.2h-204.8c-30.72 0-51.2-20.48-51.2-51.2s20.48-51.2 51.2-51.2z" fill="#1CD8D2" p-id="48211"></path></svg>
              </div>
              <h4>Roleplay Ready</h4>
              <p>Perfect for immersive experiences</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">
                <svg t="1757749857531" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="40376" width="200" height="200"><path d="M84.5824 393.3184c-8.4992 0-15.36-6.8608-15.36-15.36V348.672c0-8.4992 6.8608-15.36 15.36-15.36s15.36 6.8608 15.36 15.36v29.2864c0 8.4992-6.8608 15.36-15.36 15.36z" fill="#4C35D3" p-id="40377"></path><path d="M105.1648 766.4128c-5.6832 0-11.3664-1.3312-16.64-4.096a35.76832 35.76832 0 0 1-19.3024-31.8464V437.7088c0-8.4992 6.8608-15.36 15.36-15.36s15.36 6.8608 15.36 15.36v292.8128c0 2.7648 1.7408 4.0448 2.816 4.608 1.024 0.5632 3.1232 1.2288 5.376-0.3584l102.0928-71.2704c2.56-1.792 5.632-2.7648 8.8064-2.7648h470.9376c43.9808 0 79.7696-35.7888 79.7696-79.7696v-380.416c0-43.9808-35.7888-79.7696-79.7696-79.7696H179.6608c-43.9808 0-79.7696 35.7888-79.7696 79.7696V255.488c0 8.4992-6.8608 15.36-15.36 15.36s-15.36-6.8608-15.36-15.36V200.5504c0-60.928 49.5616-110.4896 110.4896-110.4896h510.2592c60.928 0 110.4896 49.5616 110.4896 110.4896v380.416c0 60.928-49.5616 110.4896-110.4896 110.4896H223.8464l-98.0992 68.5056a35.98848 35.98848 0 0 1-20.5824 6.4512z" fill="#4C35D3" p-id="40378"></path><path d="M918.272 940.1856c-7.0656 0-14.08-2.0992-20.1728-6.1952l-95.8464-64.9728h-147.6096c-8.4992 0-15.36-6.8608-15.36-15.36s6.8608-15.36 15.36-15.36h152.32c3.072 0 6.0928 0.9216 8.6016 2.6624l99.7888 67.6352c2.2528 1.536 4.3008 0.8192 5.376 0.3072s2.7648-1.8944 2.7648-4.608V406.016c0-37.4272-25.5488-68.8128-60.5696-77.3632v273.6128c0 84.1728-68.4544 152.6272-152.6272 152.6272H233.9328v8.7552c0 41.1648 33.4848 74.6496 74.6496 74.6496h264.96c8.4992 0 15.36 6.8608 15.36 15.36s-6.8608 15.36-15.36 15.36H308.5824c-58.112 0-105.3696-47.2576-105.3696-105.3696v-24.1152c0-8.4992 6.8608-15.36 15.36-15.36h491.7248c67.2256 0 121.9072-54.6816 121.9072-121.9072V311.0912c0-4.1984 1.6896-8.192 4.7104-11.0592 3.0208-2.9184 7.168-4.352 11.264-4.2496 59.4944 2.3552 106.0352 50.7904 106.0352 110.2848v498.2272c0 13.312-7.3216 25.4976-19.0976 31.744-5.3248 2.7648-11.0592 4.1472-16.8448 4.1472z" fill="#4C35D3" p-id="40379"></path><path d="M222.7712 453.0688c-33.6384 0-61.0304-27.392-61.0304-61.0304s27.392-61.0304 61.0304-61.0304S283.8016 358.4 283.8016 392.0384s-27.3408 61.0304-61.0304 61.0304z m0-91.3408c-16.6912 0-30.3104 13.568-30.3104 30.3104 0 16.6912 13.568 30.3104 30.3104 30.3104 16.6912 0 30.3104-13.568 30.3104-30.3104 0-16.6912-13.568-30.3104-30.3104-30.3104zM429.5168 453.0688c-33.6384 0-61.0304-27.392-61.0304-61.0304s27.392-61.0304 61.0304-61.0304S490.5472 358.4 490.5472 392.0384c-0.0512 33.6384-27.392 61.0304-61.0304 61.0304z m0-91.3408c-16.6912 0-30.3104 13.568-30.3104 30.3104 0 16.6912 13.568 30.3104 30.3104 30.3104 16.6912 0 30.3104-13.568 30.3104-30.3104-0.0512-16.6912-13.6192-30.3104-30.3104-30.3104zM636.1088 453.0688c-33.6384 0-61.0304-27.392-61.0304-61.0304s27.392-61.0304 61.0304-61.0304 61.0304 27.392 61.0304 61.0304-27.392 61.0304-61.0304 61.0304z m0-91.3408c-16.6912 0-30.3104 13.568-30.3104 30.3104 0 16.6912 13.568 30.3104 30.3104 30.3104 16.6912 0 30.3104-13.568 30.3104-30.3104 0-16.6912-13.568-30.3104-30.3104-30.3104z" fill="#FF4D7C" p-id="40380"></path></svg>
              </div>
              <h4>Social Interaction</h4>
              <p>Express yourself to others</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">
                <svg t="1757749457592" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19512" width="200" height="200"><path d="M377.9 114.1h358.3l-136.4 268 231.5 0.3-485.1 559.3 139.5-356.4H222.6z" fill="#FED928" p-id="19513"></path></svg>
              </div>
              <h4>Easy to Use</h4>
              <p>Simple commands for instant use</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section" id="faq">
      <div class="container">
        <div class="faq-wrap">
          <h2 class="section-title">Type Soul Emotes List FAQ</h2>
          <p class="section-description">
            Common questions about our Type Soul Emotes List and how to use them effectively.
          </p>
          <div class="faq-content">
            <div class="faq-list">
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">
                    <svg t="1757749943366" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="44133" width="200" height="200"><path d="M512 0c283.306667 0 512 228.693333 512 512s-228.693333 512-512 512S0 795.306667 0 512 228.693333 0 512 0z m-3.413333 679.253333c-37.546667 0-66.56 29.013333-66.56 64.853334s29.013333 64.853333 66.56 64.853333 66.56-29.013333 66.56-64.853333-29.013333-64.853333-66.56-64.853334zM512 220.16c-56.32 0-102.4 15.36-138.24 46.08-35.84 30.72-54.613333 73.386667-56.32 112.64-1.706667 39.253333 92.16 30.72 95.573333 11.946667 3.413333-20.48 18.773333-52.906667 37.546667-68.266667 17.066667-15.36 39.253333-22.186667 66.56-22.186667s49.493333 6.826667 64.853333 22.186667c15.36 13.653333 23.893333 32.426667 23.893334 51.2 0 15.36-5.12 27.306667-13.653334 39.253333-5.12 6.826667-23.893333 23.893333-54.613333 47.786667s-51.2 47.786667-61.44 66.56c-10.24 20.48-15.36 44.373333-15.36 75.093333v25.6H554.666667v-5.12c0-25.6 1.706667-44.373333 6.826666-54.613333 5.12-11.946667 18.773333-25.6 40.96-44.373333 42.666667-35.84 69.973333-63.146667 83.626667-83.626667 13.653333-20.48 18.773333-42.666667 18.773333-64.853333 0-40.96-17.066667-78.506667-52.906666-109.226667-32.426667-30.72-80.213333-46.08-139.946667-46.08z" fill="#8e44ad" p-id="44134"></path></svg>
                  </span>
                  How do I use our Type Soul Emotes List?
                </h3>
                <p class="faq-answer">
                  Simply type the emote command from our Type Soul Emotes List in the chat. For example, type "/e sit" to make your
                  character sit down. The command will be executed immediately.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">
                    <svg t="1757749943366" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="44133" width="200" height="200"><path d="M512 0c283.306667 0 512 228.693333 512 512s-228.693333 512-512 512S0 795.306667 0 512 228.693333 0 512 0z m-3.413333 679.253333c-37.546667 0-66.56 29.013333-66.56 64.853334s29.013333 64.853333 66.56 64.853333 66.56-29.013333 66.56-64.853333-29.013333-64.853333-66.56-64.853334zM512 220.16c-56.32 0-102.4 15.36-138.24 46.08-35.84 30.72-54.613333 73.386667-56.32 112.64-1.706667 39.253333 92.16 30.72 95.573333 11.946667 3.413333-20.48 18.773333-52.906667 37.546667-68.266667 17.066667-15.36 39.253333-22.186667 66.56-22.186667s49.493333 6.826667 64.853333 22.186667c15.36 13.653333 23.893333 32.426667 23.893334 51.2 0 15.36-5.12 27.306667-13.653334 39.253333-5.12 6.826667-23.893333 23.893333-54.613333 47.786667s-51.2 47.786667-61.44 66.56c-10.24 20.48-15.36 44.373333-15.36 75.093333v25.6H554.666667v-5.12c0-25.6 1.706667-44.373333 6.826666-54.613333 5.12-11.946667 18.773333-25.6 40.96-44.373333 42.666667-35.84 69.973333-63.146667 83.626667-83.626667 13.653333-20.48 18.773333-42.666667 18.773333-64.853333 0-40.96-17.066667-78.506667-52.906666-109.226667-32.426667-30.72-80.213333-46.08-139.946667-46.08z" fill="#8e44ad" p-id="44134"></path></svg>
                  </span>
                  How long do Type Soul Emotes List animations last?
                </h3>
                <p class="faq-answer">
                  Most emotes from our Type Soul Emotes List last for a few seconds and then your character will return to the
                  default standing pose. Some emotes like sitting or resting can be held longer by
                  not moving.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">
                    <svg t="1757749943366" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="44133" width="200" height="200"><path d="M512 0c283.306667 0 512 228.693333 512 512s-228.693333 512-512 512S0 795.306667 0 512 228.693333 0 512 0z m-3.413333 679.253333c-37.546667 0-66.56 29.013333-66.56 64.853334s29.013333 64.853333 66.56 64.853333 66.56-29.013333 66.56-64.853333-29.013333-64.853333-66.56-64.853334zM512 220.16c-56.32 0-102.4 15.36-138.24 46.08-35.84 30.72-54.613333 73.386667-56.32 112.64-1.706667 39.253333 92.16 30.72 95.573333 11.946667 3.413333-20.48 18.773333-52.906667 37.546667-68.266667 17.066667-15.36 39.253333-22.186667 66.56-22.186667s49.493333 6.826667 64.853333 22.186667c15.36 13.653333 23.893333 32.426667 23.893334 51.2 0 15.36-5.12 27.306667-13.653334 39.253333-5.12 6.826667-23.893333 23.893333-54.613333 47.786667s-51.2 47.786667-61.44 66.56c-10.24 20.48-15.36 44.373333-15.36 75.093333v25.6H554.666667v-5.12c0-25.6 1.706667-44.373333 6.826666-54.613333 5.12-11.946667 18.773333-25.6 40.96-44.373333 42.666667-35.84 69.973333-63.146667 83.626667-83.626667 13.653333-20.48 18.773333-42.666667 18.773333-64.853333 0-40.96-17.066667-78.506667-52.906666-109.226667-32.426667-30.72-80.213333-46.08-139.946667-46.08z" fill="#8e44ad" p-id="44134"></path></svg>
                  </span>
                  Can I use Type Soul Emotes List while in combat?
                </h3>
                <p class="faq-answer">
                  Some emotes from our Type Soul Emotes List can be used during combat, but they may be interrupted by taking
                  damage or performing other actions. It's best to use emotes from our Type Soul Emotes List when you're safe from
                  combat.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">
                    <svg t="1757749943366" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="44133" width="200" height="200"><path d="M512 0c283.306667 0 512 228.693333 512 512s-228.693333 512-512 512S0 795.306667 0 512 228.693333 0 512 0z m-3.413333 679.253333c-37.546667 0-66.56 29.013333-66.56 64.853334s29.013333 64.853333 66.56 64.853333 66.56-29.013333 66.56-64.853333-29.013333-64.853333-66.56-64.853334zM512 220.16c-56.32 0-102.4 15.36-138.24 46.08-35.84 30.72-54.613333 73.386667-56.32 112.64-1.706667 39.253333 92.16 30.72 95.573333 11.946667 3.413333-20.48 18.773333-52.906667 37.546667-68.266667 17.066667-15.36 39.253333-22.186667 66.56-22.186667s49.493333 6.826667 64.853333 22.186667c15.36 13.653333 23.893333 32.426667 23.893334 51.2 0 15.36-5.12 27.306667-13.653334 39.253333-5.12 6.826667-23.893333 23.893333-54.613333 47.786667s-51.2 47.786667-61.44 66.56c-10.24 20.48-15.36 44.373333-15.36 75.093333v25.6H554.666667v-5.12c0-25.6 1.706667-44.373333 6.826666-54.613333 5.12-11.946667 18.773333-25.6 40.96-44.373333 42.666667-35.84 69.973333-63.146667 83.626667-83.626667 13.653333-20.48 18.773333-42.666667 18.773333-64.853333 0-40.96-17.066667-78.506667-52.906666-109.226667-32.426667-30.72-80.213333-46.08-139.946667-46.08z" fill="#8e44ad" p-id="44134"></path></svg>
                  </span>
                  Are there new emotes added to our Type Soul Emotes List regularly?
                </h3>
                <p class="faq-answer">
                  Yes! The Type Soul development team regularly adds new emotes with game updates.
                  We update our Type Soul Emotes List whenever new emotes are released.
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
import { showSuccess, showError } from '@/utils/message.js'

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
    showSuccess(`Emotes "${command}" copied to clipboard`)
  } catch (err) {
    console.error('Copy failed:', err)
    showError('Copy failed, please copy manually')
  }
}
</script>

<style scoped>
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

.copy-icon {
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px;
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
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.faq-answer {
  color: #b0b0b0;
  line-height: 1.6;
  font-size: 16px;
  text-align: left;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .main-title {
    font-size: 40px;
  }
  .emotes-cards {
    grid-template-columns: repeat(4, 1fr);
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
    width: 28px;
    height: 28px;
    margin: 0 auto 10px;
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
