<template>
  <div class="page gallery-page">
    <section class="page-hero">
      <img 
        src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80" 
        alt="Galeri Pulau Hiri"
        class="hero-bg"
      />
      <div class="hero-overlay"></div>
      <div class="hero-content container">
        <h1>Galeri Foto</h1>
        <p>Momen indah di Surga Tersembunyi Maluku Utara</p>
      </div>
    </section>

    <section class="page-content section">
      <div class="container">
        <div class="gallery-filters">
          <button 
            v-for="filter in filters" 
            :key="filter.id"
            class="filter-btn"
            :class="{ active: activeFilter === filter.id }"
            @click="activeFilter = filter.id"
          >
            {{ filter.name }}
          </button>
        </div>

        <div class="gallery-masonry">
          <div 
            v-for="(image, index) in filteredImages" 
            :key="image.id" 
            class="gallery-item"
            @click="openLightbox(index)"
          >
            <img :src="image.src" :alt="image.alt" loading="lazy" />
            <div class="item-overlay">
              <span class="item-category">{{ image.category }}</span>
              <span class="item-title">{{ image.alt }}</span>
            </div>
          </div>
        </div>

        <div class="gallery-cta">
          <p>📸 Bagikan momen Anda di Pulau Hiri dengan hashtag <strong>#PulauHiri</strong> <strong>#BumiHiri</strong></p>
          <a href="https://www.instagram.com/bumihiri/" target="_blank" rel="noopener" class="btn btn-primary">
            Follow @bumihiri
          </a>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <Teleport to="body">
      <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
        <button class="lightbox-close" @click="closeLightbox">✕</button>
        <button class="lightbox-nav prev" @click.stop="prevImage">‹</button>
        <img :src="filteredImages[currentImage]?.src" :alt="filteredImages[currentImage]?.alt" @click.stop />
        <button class="lightbox-nav next" @click.stop="nextImage">›</button>
        <div class="lightbox-caption">{{ filteredImages[currentImage]?.alt }}</div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('all')

const filters = [
  { id: 'all', name: 'Semua' },
  { id: 'nature', name: 'Alam' },
  { id: 'underwater', name: 'Bawah Laut' },
  { id: 'culture', name: 'Budaya' },
  { id: 'people', name: 'Masyarakat' }
]

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80', alt: 'Panorama Laut Hiri', category: 'nature' },
  { id: 2, src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', alt: 'Pantai Pasir Putih', category: 'nature' },
  { id: 3, src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', alt: 'Terumbu Karang', category: 'underwater' },
  { id: 4, src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800&q=80', alt: 'Diving Adventure', category: 'underwater' },
  { id: 5, src: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=800&q=80', alt: 'Snorkeling di Karang', category: 'underwater' },
  { id: 6, src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80', alt: 'Gunung Hiri', category: 'nature' },
  { id: 7, src: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&q=80', alt: 'Formasi Batu Unik', category: 'nature' },
  { id: 8, src: 'https://images.unsplash.com/photo-1533903345306-15d1c30952de?w=800&q=80', alt: 'Festival Tradisional', category: 'culture' },
  { id: 9, src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80', alt: 'Sunset di Hiri', category: 'nature' },
  { id: 10, src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80', alt: 'Hiking Trail', category: 'nature' },
  { id: 11, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', alt: 'Pemandangan Pegunungan', category: 'nature' },
  { id: 12, src: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80', alt: 'Kehidupan Lokal', category: 'people' }
]

const filteredImages = computed(() => {
  if (activeFilter.value === 'all') return galleryImages
  return galleryImages.filter(img => img.category === activeFilter.value)
})

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
  currentImage.value = currentImage.value === 0 ? filteredImages.value.length - 1 : currentImage.value - 1
}

const nextImage = () => {
  currentImage.value = currentImage.value === filteredImages.value.length - 1 ? 0 : currentImage.value + 1
}
</script>

<style scoped>
.page-hero {
  position: relative;
  height: 50vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,30,50,0.7) 0%, rgba(0,30,50,0.5) 100%);
}

.hero-content {
  position: relative;
  text-align: center;
  color: white;
}

.hero-content h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin-bottom: var(--space-md);
}

.hero-content p {
  font-size: 1.25rem;
  opacity: 0.9;
}

.gallery-filters {
  display: flex;
  justify-content: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-2xl);
  flex-wrap: wrap;
}

.filter-btn {
  padding: var(--space-sm) var(--space-lg);
  background: white;
  border: 2px solid var(--neutral-200);
  border-radius: var(--radius-full);
  font-weight: 500;
  color: var(--neutral-600);
  transition: all var(--transition-fast);
}

.filter-btn:hover {
  border-color: var(--primary-400);
  color: var(--primary-600);
}

.filter-btn.active {
  background: var(--gradient-ocean);
  border-color: transparent;
  color: white;
}

.gallery-masonry {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
  margin-bottom: var(--space-3xl);
}

.gallery-item {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 1;
}

.gallery-item:nth-child(1),
.gallery-item:nth-child(6) {
  grid-column: span 2;
  grid-row: span 2;
  aspect-ratio: auto;
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

.item-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 50%, rgba(0,0,0,0.8) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--space-lg);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.gallery-item:hover .item-overlay {
  opacity: 1;
}

.item-category {
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--primary-300);
  margin-bottom: var(--space-xs);
}

.item-title {
  color: white;
  font-weight: 600;
}

.gallery-cta {
  text-align: center;
  padding: var(--space-2xl);
  background: var(--neutral-100);
  border-radius: var(--radius-xl);
}

.gallery-cta p {
  color: var(--neutral-600);
  margin-bottom: var(--space-lg);
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
  font-size: 1.5rem;
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
  font-size: 2rem;
}

.lightbox-nav.prev { left: var(--space-lg); }
.lightbox-nav.next { right: var(--space-lg); }

.lightbox-caption {
  position: absolute;
  bottom: var(--space-xl);
  left: 50%;
  transform: translateX(-50%);
  color: white;
}

@media (max-width: 900px) {
  .gallery-masonry {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .gallery-masonry {
    grid-template-columns: 1fr;
  }

  .gallery-item:nth-child(1),
  .gallery-item:nth-child(6) {
    grid-column: span 1;
    grid-row: span 1;
  }
}
</style>
