<template>
  <section class="activities section" id="activities">
    <div class="container">
      <span class="section-tag">Aktivitas Seru</span>
      <h2 class="section-title">Pengalaman Tak Terlupakan</h2>
      <p class="section-subtitle">
        Dari menyelam di perairan kristal hingga menjelajah hutan tropis, 
        ada petualangan untuk setiap jenis wisatawan.
      </p>

      <!-- Slider Container -->
      <div class="slider-wrapper">
        <!-- Left Arrow -->
        <button class="slider-nav prev" @click="scrollSlider('left')" aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        <!-- Slider Track -->
        <div class="activities-slider" ref="sliderRef">
          <div 
            v-for="activity in activities" 
            :key="activity.id" 
            class="activity-card"
          >
            <div class="activity-image">
              <img :src="activity.image" :alt="activity.name" loading="lazy" />
              <div class="activity-overlay">
                <span class="difficulty" :class="activity.level">{{ activity.level }}</span>
              </div>
            </div>
            <div class="activity-content">
              <h3>{{ activity.name }}</h3>
              <p>{{ activity.description }}</p>
              <div class="activity-meta">
                <div class="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {{ activity.duration }}
                </div>
                <div class="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  {{ activity.groupSize }}
                </div>
              </div>
              <button class="activity-cta">
                Booking Sekarang
              </button>
            </div>
          </div>
        </div>

        <!-- Right Arrow -->
        <button class="slider-nav next" @click="scrollSlider('right')" aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>

      <div class="activities-highlight">
        <div class="highlight-content">
          <h3>Pengalaman Diving Istimewa</h3>
          <p>
            Pulau Hiri menawarkan spot diving kelas dunia dengan terumbu karang 
            yang masih pristine. Di Tafraka, ada kesempatan langka bertemu dugong 
            di habitat aslinya!
          </p>
          <div class="highlight-features">
            <div class="feature">
              <span class="feature-icon">🐢</span>
              <span>Penyu Laut</span>
            </div>
            <div class="feature">
              <span class="feature-icon">🦈</span>
              <span>Reef Sharks</span>
            </div>
            <div class="feature">
              <span class="feature-icon">🐋</span>
              <span>Dugong</span>
            </div>
            <div class="feature">
              <span class="feature-icon">🐠</span>
              <span>Napoleon Fish</span>
            </div>
          </div>
        </div>
        <div class="highlight-image">
          <img 
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800&q=80" 
            alt="Underwater diving"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const sliderRef = ref(null)

const scrollSlider = (direction) => {
  if (!sliderRef.value) return
  const scrollAmount = 350 // Scroll by one card width
  const currentScroll = sliderRef.value.scrollLeft
  const newScroll = direction === 'left' 
    ? currentScroll - scrollAmount 
    : currentScroll + scrollAmount
  
  sliderRef.value.scrollTo({
    left: newScroll,
    behavior: 'smooth'
  })
}

const activities = [
  {
    id: 1,
    icon: '🤿',
    name: 'Scuba Diving',
    description: 'Jelajahi dunia bawah laut yang spektakuler dengan soft coral berwarna-warni dan beragam spesies ikan.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
    duration: '2-3 jam',
    groupSize: 'Max 6 orang',
    level: 'Menengah'
  },
  {
    id: 2,
    icon: '🏊',
    name: 'Snorkeling',
    description: 'Aktivitas santai menikmati keindahan terumbu karang dan marine life di perairan dangkal.',
    image: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=600&q=80',
    duration: '1-2 jam',
    groupSize: 'Max 10 orang',
    level: 'Pemula'
  },
  {
    id: 3,
    icon: '🥾',
    name: 'Hiking Gunung Hiri',
    description: 'Trek menantang menuju puncak gunung berapi dengan panorama laut dan pulau-pulau sekitar.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80',
    duration: '4-5 jam',
    groupSize: 'Max 8 orang',
    level: 'Menengah'
  },
  {
    id: 4,
    icon: '🚣',
    name: 'Island Hopping',
    description: 'Jelajahi pulau-pulau kecil di sekitar Hiri dengan perahu tradisional dan nikmati pemandangan.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80',
    duration: 'Full day',
    groupSize: 'Max 12 orang',
    level: 'Pemula'
  }
]
</script>

<style scoped>
.activities {
  background: var(--neutral-50);
}

.section-tag {
  display: inline-block;
  padding: var(--space-xs) var(--space-md);
  background: var(--coral-100);
  color: var(--coral-600);
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  margin-bottom: var(--space-md);
}

/* Slider Wrapper */
.slider-wrapper {
  position: relative;
  margin-bottom: var(--space-4xl);
}

/* Navigation Buttons */
.slider-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: none;
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-lg);
  color: var(--neutral-700);
  cursor: pointer;
  z-index: 10;
  transition: all var(--transition-base);
}

.slider-nav:hover {
  background: var(--primary-500);
  color: white;
  transform: translateY(-50%) scale(1.1);
}

.slider-nav svg {
  width: 24px;
  height: 24px;
}

.slider-nav.prev {
  left: -25px;
}

.slider-nav.next {
  right: -25px;
}

/* Slider Track */
.activities-slider {
  display: flex;
  gap: var(--space-lg);
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: var(--space-md) var(--space-sm);
}

.activities-slider::-webkit-scrollbar {
  display: none;
}

/* Activity Cards */
.activity-card {
  flex: 0 0 320px;
  background: white;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.activity-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.activity-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.activity-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.activity-card:hover .activity-image img {
  transform: scale(1.05);
}

.activity-overlay {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
}

.difficulty {
  padding: var(--space-xs) var(--space-md);
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  backdrop-filter: blur(10px);
}

.difficulty.Pemula {
  background: rgba(16, 185, 129, 0.9);
  color: white;
}

.difficulty.Menengah {
  background: rgba(251, 146, 60, 0.9);
  color: white;
}

.activity-content {
  padding: var(--space-lg);
}

.activity-icon {
  font-size: 2rem;
  margin-bottom: var(--space-sm);
}

.activity-content h3 {
  font-size: 1.25rem;
  color: var(--neutral-800);
  margin-bottom: var(--space-sm);
}

.activity-content p {
  color: var(--neutral-500);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: var(--space-lg);
}

.activity-meta {
  display: flex;
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--neutral-500);
  font-size: 0.85rem;
}

.meta-item svg {
  width: 16px;
  height: 16px;
}

.activity-cta {
  width: 100%;
  padding: var(--space-md);
  background: var(--gradient-ocean);
  color: white;
  font-weight: 600;
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.activity-cta:hover {
  transform: scale(1.02);
  box-shadow: var(--shadow-glow);
}

.activities-highlight {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3xl);
  align-items: center;
  padding: var(--space-2xl);
  background: linear-gradient(135deg, var(--primary-700) 0%, var(--emerald-700) 100%);
  border-radius: var(--radius-2xl);
  color: white;
}

.highlight-content h3 {
  font-size: 1.75rem;
  margin-bottom: var(--space-lg);
}

.highlight-content p {
  opacity: 0.9;
  line-height: 1.8;
  margin-bottom: var(--space-xl);
}

.highlight-features {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
}

.feature {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-lg);
  background: rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-full);
  font-size: 0.9rem;
}

.feature-icon {
  font-size: 1.25rem;
}

.highlight-image {
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
}

.highlight-image img {
  width: 100%;
  height: 350px;
  object-fit: cover;
}

@media (max-width: 1100px) {
  .slider-nav.prev {
    left: 0;
  }

  .slider-nav.next {
    right: 0;
  }

  .activity-card {
    flex: 0 0 300px;
  }
}

@media (max-width: 768px) {
  .slider-nav {
    width: 40px;
    height: 40px;
  }

  .slider-nav svg {
    width: 20px;
    height: 20px;
  }

  .activity-card {
    flex: 0 0 280px;
  }

  .activities-highlight {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .highlight-features {
    justify-content: center;
  }

  .highlight-image {
    order: -1;
  }
}
</style>
