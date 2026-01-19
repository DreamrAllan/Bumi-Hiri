<template>
  <section class="gallery section" id="gallery">
    <div class="container">
      <span class="section-tag">Galeri Foto</span>
      <h2 class="section-title">Momen Indah di Pulau Hiri</h2>
      <p class="section-subtitle">
        Lihat keindahan Pulau Hiri melalui lensa para pengunjung dan dokumentasi KKN-PPM UGM.
      </p>

      <div class="gallery-grid">
        <div 
          v-for="(image, index) in galleryImages" 
          :key="index" 
          class="gallery-item"
          :class="image.size"
          @click="openLightbox(index)"
        >
          <img :src="image.src" :alt="image.alt" loading="lazy" />
          <div class="gallery-overlay">
            <span class="gallery-caption">{{ image.alt }}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="zoom-icon">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <line x1="11" y1="8" x2="11" y2="14"/>
              <line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Enhanced CTA Section -->
      <div class="gallery-cta">
        <div class="cta-bg">
          <div class="floating-icon i1">📸</div>
          <div class="floating-icon i2">🏝️</div>
          <div class="floating-icon i3">🌊</div>
          <div class="floating-icon i4">✨</div>
        </div>
        <div class="cta-content">
          <div class="cta-badge">KKN-PPM UGM 2026</div>
          <h3>Bagikan Momen Indah Anda!</h3>
          <p>Gunakan hashtag <span class="hashtag">#PulauHiri</span> <span class="hashtag">#BumiHiri</span> <span class="hashtag">#MalukuUtara</span></p>
          <div class="cta-stats">
            <div class="cta-stat">
              <span class="stat-number">1.9K</span>
              <span class="stat-label">Followers</span>
            </div>
            <div class="cta-stat">
              <span class="stat-number">112+</span>
              <span class="stat-label">Posts</span>
            </div>
            <div class="cta-stat">
              <span class="stat-number">5⭐</span>
              <span class="stat-label">Rating</span>
            </div>
          </div>
          <a href="https://www.instagram.com/bumihiri/" target="_blank" rel="noopener" class="cta-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="btn-icon">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
            </svg>
            Follow @bumihiri
          </a>
        </div>
      </div>

      <!-- Lightbox -->
      <Teleport to="body">
        <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
          <button class="lightbox-close" @click="closeLightbox">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <button class="lightbox-nav prev" @click.stop="prevImage">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <img :src="galleryImages[currentImage].src" :alt="galleryImages[currentImage].alt" @click.stop />
          <button class="lightbox-nav next" @click.stop="nextImage">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
          <div class="lightbox-caption">{{ galleryImages[currentImage].alt }}</div>
        </div>
      </Teleport>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80', alt: 'Keindahan Laut Pulau Hiri', size: 'tall' },
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80', alt: 'Pantai Pasir Putih' },
  { src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', alt: 'Snorkeling di Terumbu Karang' },
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80', alt: 'Pemandangan Gunung Hiri', size: 'wide' },
  { src: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=600&q=80', alt: 'Formasi Batu Unik' },
  { src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=600&q=80', alt: 'Dunia Bawah Laut', size: 'tall' },
  { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80', alt: 'Sunset di Pulau Hiri' },
  { src: 'https://images.unsplash.com/photo-1533903345306-15d1c30952de?w=600&q=80', alt: 'Budaya dan Tradisi Lokal' }
]

const lightboxOpen = ref(false)
const currentImage = ref(0)

const openLightbox = (index) => {
  currentImage.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const prevImage = () => {
  currentImage.value = currentImage.value === 0 ? galleryImages.length - 1 : currentImage.value - 1
}

const nextImage = () => {
  currentImage.value = currentImage.value === galleryImages.length - 1 ? 0 : currentImage.value + 1
}
</script>

<style scoped>
.gallery {
  background: white;
}

.section-tag {
  display: inline-block;
  padding: var(--space-xs) var(--space-md);
  background: var(--primary-100);
  color: var(--primary-700);
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  margin-bottom: var(--space-md);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: var(--space-md);
  margin-bottom: var(--space-3xl);
}

.gallery-item {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
}

.gallery-item.tall {
  grid-row: span 2;
}

.gallery-item.wide {
  grid-column: span 2;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.7) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: var(--space-lg);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-caption {
  color: white;
  font-weight: 500;
  text-align: center;
  margin-bottom: var(--space-sm);
}

.zoom-icon {
  width: 32px;
  height: 32px;
  color: white;
  padding: var(--space-sm);
  background: rgba(255,255,255,0.2);
  border-radius: var(--radius-full);
}

.gallery-cta {
  position: relative;
  padding: var(--space-3xl) var(--space-2xl);
  background: linear-gradient(135deg, var(--primary-600) 0%, var(--emerald-600) 50%, var(--coral-500) 100%);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  text-align: center;
  color: white;
}

.cta-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.floating-icon {
  position: absolute;
  font-size: 2.5rem;
  opacity: 0.3;
  animation: float 6s ease-in-out infinite;
}

.floating-icon.i1 { top: 20%; left: 10%; animation-delay: 0s; }
.floating-icon.i2 { top: 60%; left: 5%; animation-delay: 1.5s; }
.floating-icon.i3 { top: 30%; right: 8%; animation-delay: 3s; }
.floating-icon.i4 { bottom: 20%; right: 15%; animation-delay: 4.5s; }

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-badge {
  display: inline-block;
  padding: var(--space-xs) var(--space-lg);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: var(--space-lg);
}

.cta-content h3 {
  font-size: 2rem;
  margin-bottom: var(--space-md);
}

.cta-content p {
  font-size: 1.1rem;
  opacity: 0.95;
  margin-bottom: var(--space-xl);
}

.hashtag {
  display: inline-block;
  padding: var(--space-xs) var(--space-sm);
  background: rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-sm);
  font-weight: 600;
  margin: var(--space-xs);
}

.cta-stats {
  display: flex;
  justify-content: center;
  gap: var(--space-2xl);
  margin-bottom: var(--space-xl);
}

.cta-stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 1.75rem;
  font-weight: 700;
}

.stat-label {
  font-size: 0.85rem;
  opacity: 0.8;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-2xl);
  background: white;
  color: var(--primary-700);
  font-weight: 700;
  font-size: 1rem;
  border-radius: var(--radius-full);
  transition: all var(--transition-base);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.cta-btn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.btn-icon {
  width: 22px;
  height: 22px;
}

.gallery-cta p {
  color: var(--neutral-600);
  margin-bottom: var(--space-lg);
}

.btn-icon {
  width: 20px;
  height: 20px;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox img {
  max-width: 90%;
  max-height: 85vh;
  object-fit: contain;
  border-radius: var(--radius-lg);
}

.lightbox-close {
  position: absolute;
  top: var(--space-lg);
  right: var(--space-lg);
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  color: white;
  transition: background var(--transition-fast);
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lightbox-close svg {
  width: 24px;
  height: 24px;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  color: white;
  transition: background var(--transition-fast);
}

.lightbox-nav:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lightbox-nav.prev {
  left: var(--space-lg);
}

.lightbox-nav.next {
  right: var(--space-lg);
}

.lightbox-nav svg {
  width: 28px;
  height: 28px;
}

.lightbox-caption {
  position: absolute;
  bottom: var(--space-xl);
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1rem;
  text-align: center;
}

@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 180px;
  }
}

@media (max-width: 600px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 220px;
  }

  .gallery-item.tall,
  .gallery-item.wide {
    grid-column: span 1;
    grid-row: span 1;
  }
}
</style>
