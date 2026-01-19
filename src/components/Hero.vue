<template>
  <section class="hero">
    <div class="hero-bg">
      <img 
        src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80" 
        alt="Pulau Hiri - Keindahan Laut Maluku" 
        class="hero-image"
      />
      <div class="hero-overlay"></div>
    </div>

    <div class="hero-content container">
      <div class="hero-badge animate-fade-in">
        <span>Pulau Vulkanik di Teluk Kao, Maluku Utara</span>
      </div>
      
      <h1 class="hero-title">
        <span class="title-line">Jelajahi Keajaiban</span>
        <span class="title-highlight">Pulau Hiri</span>
      </h1>
      
      <p class="hero-subtitle">
        Pulau vulkanik seluas 7-8 km² dengan kawah aktif di ketinggian 630m. 
        Temukan pantai pasir putih, spot diving spektakuler, dan warisan budaya maritim yang autentik.
      </p>

      <div class="hero-actions">
        <router-link to="/destinations" class="btn btn-primary">
          <span>Jelajahi Sekarang</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="btn-icon">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </router-link>
        <router-link to="/gallery" class="btn btn-secondary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="btn-icon">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
          <span>Lihat Galeri</span>
        </router-link>
      </div>

      <div class="hero-stats">
        <div class="stat-item">
          <span class="stat-value">630m</span>
          <span class="stat-label">Kawah Aktif</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-value">30'</span>
          <span class="stat-label">Dari Ternate</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-value">7-8km²</span>
          <span class="stat-label">Luas Pulau</span>
        </div>
      </div>
    </div>

    <div class="hero-wave">
      <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
        <path d="M0 40L60 45C120 50 240 60 360 65C480 70 600 70 720 60C840 50 960 30 1080 25C1200 20 1320 30 1380 35L1440 40V120H0V40Z" fill="white"/>
      </svg>
    </div>

    <div class="scroll-indicator">
      <div class="scroll-mouse">
        <div class="scroll-wheel"></div>
      </div>
      <span>Scroll untuk menjelajahi</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 30, 50, 0.6) 0%,
    rgba(0, 30, 50, 0.3) 40%,
    rgba(0, 30, 50, 0.5) 100%
  );
}

.hero-content {
  position: relative;
  text-align: center;
  color: white;
  padding-top: 80px;
  padding-bottom: 150px;
  animation: fadeInUp 1s ease forwards;
  z-index: 2;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-lg);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-full);
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: var(--space-xl);
}

.badge-icon {
  font-size: 1.25rem;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: var(--space-lg);
}

.title-line {
  display: block;
  opacity: 0.95;
}

.title-highlight {
  display: block;
  background: linear-gradient(135deg, var(--primary-300) 0%, var(--emerald-300) 50%, var(--gold-400) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  max-width: 700px;
  margin: 0 auto var(--space-2xl);
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
}

.hero-actions {
  display: flex;
  gap: var(--space-lg);
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: var(--space-3xl);
}

.btn-icon {
  width: 20px;
  height: 20px;
}

.hero-stats {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xl);
  padding: var(--space-lg) var(--space-2xl);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-2xl);
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
}

.stat-label {
  font-size: 0.875rem;
  opacity: 0.8;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.3);
}

.hero-wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  z-index: 1;
}

.hero-wave svg {
  width: 100%;
  height: 80px;
  display: block;
}

.scroll-indicator {
  position: absolute;
  bottom: 100px;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  animation: float 3s ease-in-out infinite;
}

.scroll-mouse {
  width: 24px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: var(--radius-full);
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.scroll-wheel {
  width: 4px;
  height: 8px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: var(--radius-full);
  animation: scroll 2s infinite;
}

@keyframes scroll {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(12px);
  }
}

@media (max-width: 768px) {
  .hero-stats {
    flex-direction: column;
    gap: var(--space-lg);
    padding: var(--space-lg);
  }

  .stat-divider {
    width: 60px;
    height: 1px;
  }

  .scroll-indicator {
    display: none;
  }
}
</style>
