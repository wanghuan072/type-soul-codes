<template>
  <section class="header">
    <div class="container">
      <div class="header-wrap">
        <div class="logo">
          <div class="logo-text">Type Soul Codes</div>
        </div>

        <!-- Desktop Navigation -->
        <nav class="desktop-nav">
          <a href="/" class="nav-link">
            Home
          </a>
          <a href="/type-soul-emotes" class="nav-link">
            Emotes
          </a>
          <a href="/type-soul-wiki" class="nav-link">
            Wiki
          </a>
          <a href="/type-soul-guides" class="nav-link">
            Guides
          </a>
          <a href="/blog" class="nav-link">
            Blog
          </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          class="mobile-menu-btn"
          @click="toggleMobileMenu"
          :class="{ active: isMobileMenuOpen }"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Overlay -->
    <div
      class="mobile-nav-overlay"
      :class="{ active: isMobileMenuOpen }"
      @click="closeMobileMenu"
    ></div>

    <!-- Mobile Navigation Sidebar -->
    <nav class="mobile-nav" :class="{ active: isMobileMenuOpen }">
      <div class="mobile-nav-header">
        <div class="mobile-logo">
          <div class="logo-text">Type Soul Codes</div>
        </div>
      </div>
      <div class="mobile-nav-links">
        <a href="/" class="mobile-nav-link" @click="closeMobileMenu">
          Home
        </a>
        <a href="/type-soul-emotes" class="mobile-nav-link" @click="closeMobileMenu">
          Emotes
        </a>
        <a href="/type-soul-wiki" class="mobile-nav-link" @click="closeMobileMenu">
          Wiki
        </a>
        <a href="/type-soul-guides" class="mobile-nav-link" @click="closeMobileMenu">
          Guides
        </a>
        <a href="/blog" class="mobile-nav-link" @click="closeMobileMenu">
          Blog
        </a>
      </div>
    </nav>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
/* Header Section */
.header {
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(155, 89, 182, 0.3);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.header-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  height: 50px;
}

.logo-text {
  font-size: 28px;
  font-weight: 800;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4, #9b59b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
  transition: all 0.3s ease;
}

.logo-text:hover {
  transform: scale(1.05);
}

/* Desktop Navigation */
.desktop-nav {
  display: flex;
  gap: 40px;
  align-items: center;
}

.nav-link {
  position: relative;
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 0;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.nav-link:hover {
  color: #ff6b9d;
  transform: translateY(-2px);
}

.nav-link.router-link-active {
  color: #4ecdc4;
  font-weight: 600;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background: linear-gradient(45deg, #9b59b6, #8e44ad);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 0;
  z-index: 10001;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(155, 89, 182, 0.3);
}

.mobile-menu-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(155, 89, 182, 0.4);
}

.hamburger-line {
  width: 22px;
  height: 2px;
  background: #ffffff;
  margin: 2px 0;
  transition: all 0.3s ease;
  border-radius: 1px;
}

.mobile-menu-btn.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-btn.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Navigation Overlay */
.mobile-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.mobile-nav-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Mobile Navigation Sidebar */
.mobile-nav {
  position: fixed;
  top: 0;
  right: -320px;
  width: 320px;
  max-width: 85vw;
  height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  backdrop-filter: blur(20px);
  border-left: 1px solid rgba(155, 89, 182, 0.3);
  z-index: 10000;
  transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
}

.mobile-nav.active {
  right: 0;
}

.mobile-nav-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
  border-bottom: 1px solid rgba(155, 89, 182, 0.2);
  background: linear-gradient(45deg, rgba(255, 107, 157, 0.1), rgba(78, 205, 196, 0.1));
}

.mobile-logo .logo-text {
  font-size: 22px;
  font-weight: 700;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mobile-nav-links {
  padding: 30px 0;
}

.mobile-nav-link {
  display: block;
  color: #ffffff;
  text-decoration: none;
  padding: 18px 30px;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
  position: relative;
  overflow: hidden;
}

.mobile-nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(255, 107, 157, 0.1), rgba(78, 205, 196, 0.1));
  transition: left 0.3s ease;
  z-index: -1;
}

.mobile-nav-link:hover::before,
.mobile-nav-link.router-link-active::before {
  left: 0;
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  border-left-color: #ff6b9d;
  color: #ff6b9d;
  transform: translateX(10px);
}

.mobile-nav-link.router-link-active {
  color: #4ecdc4;
  font-weight: 600;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .desktop-nav {
    gap: 30px;
  }

  .nav-link {
    font-size: 15px;
  }
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .logo-text {
    font-size: 24px;
  }

  .header-wrap {
    padding: 15px 0;
  }
}

@media (max-width: 480px) {
  .mobile-nav {
    width: 280px;
    right: -280px;
    max-width: 90vw;
  }

  .mobile-nav-header {
    padding: 25px 15px;
  }

  .mobile-logo .logo-text {
    font-size: 20px;
  }

  .mobile-nav-links {
    padding: 25px 0;
  }

  .mobile-nav-link {
    padding: 15px 25px;
    font-size: 15px;
  }

  .logo-text {
    font-size: 22px;
  }
}
</style>
