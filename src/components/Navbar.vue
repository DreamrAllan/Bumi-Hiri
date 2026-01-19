<template>
  <nav class="navbar" :class="{ scrolled: isScrolled, 'menu-open': isMobileMenuOpen }">
    <div class="navbar-container container">
      <router-link to="/" class="navbar-brand">
        <div class="brand-icon">
          <svg viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" fill="url(#navGrad)" />
            <path d="M10 22 Q15 17 20 22 Q25 27 30 22" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <path d="M12 27 Q17 22 20 27 Q23 32 28 27" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
            <defs>
              <linearGradient id="navGrad" x1="0" y1="0" x2="40" y2="40">
                <stop offset="0%" stop-color="#0891b2"/>
                <stop offset="100%" stop-color="#059669"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <span class="brand-text">Pulau Hiri</span>
      </router-link>

      <ul class="navbar-menu" :class="{ active: isMobileMenuOpen }">
        <li v-for="item in menuItems" :key="item.path">
          <router-link 
            :to="item.path" 
            class="menu-item"
            :class="{ active: $route.path === item.path }"
            @click="closeMobileMenu"
          >
            {{ item.name }}
          </router-link>
        </li>
        <li class="menu-cta">
          <router-link to="/contact" class="btn btn-primary btn-sm" @click="closeMobileMenu">
            Kunjungi Sekarang
          </router-link>
        </li>
      </ul>

      <button class="mobile-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
        <span class="toggle-line"></span>
        <span class="toggle-line"></span>
        <span class="toggle-line"></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const menuItems = [
  { name: 'Beranda', path: '/' },
  { name: 'Destinasi', path: '/destinations' },
  { name: 'Budaya', path: '/culture' },
  { name: 'Aktivitas', path: '/activities' },
  { name: 'Galeri', path: '/gallery' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-fixed);
  padding: var(--space-lg) 0;
  transition: all var(--transition-base);
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  box-shadow: var(--shadow-md);
  padding: var(--space-md) 0;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  z-index: 10;
}

.brand-icon {
  width: 40px;
  height: 40px;
}

.brand-icon svg {
  width: 100%;
  height: 100%;
}

.brand-text {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  transition: color var(--transition-base);
}

.scrolled .brand-text {
  background: var(--gradient-ocean);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
}

.menu-item {
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  transition: all var(--transition-fast);
  position: relative;
}

.menu-item::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-ocean);
  transition: width var(--transition-base);
}

.menu-item:hover::after,
.menu-item.active::after {
  width: 100%;
}

.scrolled .menu-item {
  color: var(--neutral-700);
}

.menu-item:hover,
.menu-item.active {
  color: var(--primary-500);
}

.scrolled .menu-item:hover,
.scrolled .menu-item.active {
  color: var(--primary-600);
}

.btn-sm {
  padding: var(--space-sm) var(--space-lg);
  font-size: 0.875rem;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: var(--space-sm);
  z-index: 10;
}

.toggle-line {
  width: 24px;
  height: 2px;
  background: white;
  transition: all var(--transition-base);
}

.scrolled .toggle-line {
  background: var(--neutral-800);
}

@media (max-width: 900px) {
  .mobile-toggle {
    display: flex;
  }

  .navbar-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--primary-800) 0%, var(--emerald-800) 100%);
    flex-direction: column;
    justify-content: center;
    gap: var(--space-xl);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-base);
  }

  .navbar-menu.active {
    opacity: 1;
    visibility: visible;
  }

  .menu-item {
    font-size: 1.5rem;
    color: white !important;
  }

  .menu-cta {
    margin-top: var(--space-lg);
  }

  .menu-open .toggle-line:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  .menu-open .toggle-line:nth-child(2) {
    opacity: 0;
  }

  .menu-open .toggle-line:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  .menu-open .toggle-line {
    background: white;
  }
}
</style>
