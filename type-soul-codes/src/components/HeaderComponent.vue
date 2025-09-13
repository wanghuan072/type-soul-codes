<template>
  <section class="header">
    <div class="container">
      <div class="header-wrap">
        <div class="logo">
          <div class="logo-icon">⚡</div>
          <div class="logo-text">Type Soul Codes</div>
        </div>

        <!-- Desktop Navigation -->
        <nav class="desktop-nav">
          <router-link to="/" class="nav-link">
            <span class="nav-icon">🏠</span>
            Home
          </router-link>
          <router-link to="/emotes" class="nav-link">
            <span class="nav-icon">😊</span>
            Emotes List
          </router-link>
          <router-link to="/wiki" class="nav-link">
            <span class="nav-icon">📖</span>
            Wiki
          </router-link>
          <router-link to="/blog" class="nav-link">
            <span class="nav-icon">📝</span>
            Blog
          </router-link>
          <router-link to="/guides" class="nav-link">
            <span class="nav-icon">📋</span>
            Guides
          </router-link>
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
          <div class="logo-icon">⚡</div>
          <div class="logo-text">Type Soul Codes</div>
        </div>
      </div>
      <div class="mobile-nav-links">
        <router-link to="/" class="mobile-nav-link" @click="closeMobileMenu">
          <span class="nav-icon">🏠</span>
          Home
        </router-link>
        <router-link to="/emotes" class="mobile-nav-link" @click="closeMobileMenu">
          <span class="nav-icon">😊</span>
          Emotes List
        </router-link>
        <router-link to="/wiki" class="mobile-nav-link" @click="closeMobileMenu">
          <span class="nav-icon">📖</span>
          Wiki
        </router-link>
        <router-link to="/blog" class="mobile-nav-link" @click="closeMobileMenu">
          <span class="nav-icon">📝</span>
          Blog
        </router-link>
        <router-link to="/guides" class="mobile-nav-link" @click="closeMobileMenu">
          <span class="nav-icon">📋</span>
          Guides
        </router-link>
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
  background: rgba(26, 11, 46, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #9b59b6;
  position: relative;
  z-index: 100;
  width: 100%;
}

.header-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 15px;
  height: 50px;
}

.logo-icon {
  font-size: 32px;
  color: #9b59b6;
}

.logo-text {
  font-size: 24px;
  font-weight: bold;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Desktop Navigation */
.desktop-nav {
  display: flex;
  gap: 30px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  text-decoration: none;
  padding: 0 15px;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  background: rgba(155, 89, 182, 0.2);
  color: #9b59b6;
}

.nav-icon {
  font-size: 16px;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10001;
}

.hamburger-line {
  width: 25px;
  height: 3px;
  background: #ffffff;
  margin: 3px 0;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.mobile-menu-btn.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-btn.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Navigation Overlay */
.mobile-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.mobile-nav-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Mobile Navigation Sidebar */
.mobile-nav {
  position: fixed;
  top: 0;
  right: -280px;
  width: 280px;
  max-width: 85vw;
  height: 100vh;
  background: rgba(26, 11, 46, 1);
  backdrop-filter: blur(20px);
  border-left: 1px solid #9b59b6;
  z-index: 10000;
  transition: right 0.3s ease;
  overflow-y: auto;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
}

.mobile-nav.active {
  right: 0;
}

.mobile-nav-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #333;
}

.mobile-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.mobile-logo .logo-icon {
  font-size: 24px;
}

.mobile-logo .logo-text {
  font-size: 18px;
}

.mobile-nav-links {
  padding: 20px 0;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 15px;
  color: #ffffff;
  text-decoration: none;
  padding: 15px 20px;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  background: rgba(155, 89, 182, 0.2);
  border-left-color: #9b59b6;
  color: #9b59b6;
}

.mobile-nav-link .nav-icon {
  font-size: 18px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .desktop-nav {
    gap: 20px;
  }

  .nav-link {
    padding: 0 12px;
    font-size: 14px;
  }

  .nav-icon {
    font-size: 14px;
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
    font-size: 20px;
  }

  .logo-icon {
    font-size: 28px;
  }

  .mobile-nav {
    width: 260px;
    right: -260px;
    max-width: 90vw;
  }

  .mobile-nav-header {
    padding: 15px;
  }

  .mobile-logo .logo-text {
    font-size: 16px;
  }

  .mobile-logo .logo-icon {
    font-size: 20px;
  }

  .mobile-nav-links {
    padding: 15px 0;
  }

  .mobile-nav-link {
    padding: 12px 15px;
    font-size: 14px;
  }

  .mobile-nav-link .nav-icon {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .mobile-nav {
    width: 240px;
    right: -240px;
    max-width: 95vw;
  }

  .mobile-nav-header {
    padding: 12px;
  }

  .mobile-logo .logo-text {
    font-size: 14px;
  }

  .mobile-logo .logo-icon {
    font-size: 18px;
  }

  .mobile-nav-links {
    padding: 12px 0;
  }

  .mobile-nav-link {
    padding: 10px 12px;
    font-size: 13px;
  }

  .mobile-nav-link .nav-icon {
    font-size: 14px;
  }
}
</style>
