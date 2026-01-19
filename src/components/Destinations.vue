<template>
  <section class="destinations section" id="destinations">
    <div class="container">
      <span class="section-tag">Destinasi Populer</span>
      <h2 class="section-title">Tempat yang Wajib Dikunjungi</h2>
      <p class="section-subtitle">
        Dari kawah vulkanik hingga terumbu karang pristine, setiap sudut Pulau Hiri menyimpan keajaiban tersendiri.
      </p>

      <!-- Main Featured Destination - Kawah -->
      <div class="featured-destination">
        <div class="featured-bg">
          <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80" alt="Kawah Gunung Hiri" />
          <div class="featured-overlay"></div>
        </div>
        <div class="featured-content">
          <div class="featured-badge">
            <span>Destinasi Utama</span>
          </div>
          <h3>Kawah Gunung Hiri</h3>
          <p>Kawah aktif yang menjadi ikon pulau ini terletak di ketinggian 630 meter di atas permukaan laut. Pemandangan spektakuler Teluk Kao dan pulau-pulau sekitarnya menanti di puncak.</p>
          <div class="featured-stats">
            <div class="stat">
              <span class="stat-value">630m</span>
              <span class="stat-label">Ketinggian</span>
            </div>
            <div class="stat">
              <span class="stat-value">1-2 jam</span>
              <span class="stat-label">Pendakian</span>
            </div>
            <div class="stat">
              <span class="stat-value">⭐ Sakral</span>
              <span class="stat-label">Tempat Keramat</span>
            </div>
          </div>
        </div>
      </div>

      <div class="destinations-grid">
        <div 
          v-for="(dest, index) in destinations" 
          :key="dest.id" 
          class="destination-card"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <div class="card-image-wrapper">
            <img :src="dest.image" :alt="dest.name" class="card-image" loading="lazy" />
            <div class="card-overlay">
              <span class="card-category">{{ dest.category }}</span>
              <div class="card-rating" v-if="dest.rating">
                <span>⭐</span> {{ dest.rating }}
              </div>
            </div>
          </div>
          <div class="card-content">
            <h3 class="card-title">{{ dest.name }}</h3>
            <p class="card-description">{{ dest.description }}</p>
            <div class="card-footer">
              <div class="card-features">
                <span v-for="feature in dest.features" :key="feature" class="feature-tag">
                  {{ feature }}
                </span>
              </div>
              <button class="card-link">
                Selengkapnya
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="link-icon">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Tips Section -->
      <div class="tips-banner">
        <div class="tips-icon">💡</div>
        <div class="tips-content">
          <h4>Tips Pendakian Kawah</h4>
          <p>Waktu terbaik untuk sunrise trek adalah pagi hari. Bawa air minum, sepatu trekking, dan senter. Pendakian memakan waktu 1-2 jam dengan medan yang cukup menantang.</p>
        </div>
        <div class="tips-badge">Rekomendasi</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const destinations = [
  {
    id: 1,
    name: 'Pantai Pasir Putih',
    category: 'Pantai',
    description: 'Pantai eksotis dengan pasir putih lembut dan air laut jernih. Cocok untuk snorkeling, berenang, dan menikmati sunset spektakuler.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    features: ['Snorkeling', 'Sunset', 'Terumbu Karang'],
    rating: '4.9'
  },
  {
    id: 2,
    name: 'Hutan Tropis',
    category: 'Trekking',
    description: 'Vegetasi khas Maluku Utara dengan flora dan fauna endemik. Trekking sambil menikmati suasana hutan yang masih alami.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80',
    features: ['Flora Endemik', 'Bird Watching', 'Trekking'],
    rating: '4.7'
  },
  {
    id: 3,
    name: 'Spot Diving',
    category: 'Bawah Laut',
    description: 'Perairan kaya biota laut dengan ikan karang berwarna-warni, terumbu karang sehat, dan penyu laut. Surga bagi penyelam.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    features: ['Penyu Laut', 'Terumbu Karang', 'Ikan Karang'],
    rating: '5.0'
  },
  {
    id: 4,
    name: 'Desa Tradisional',
    category: 'Budaya',
    description: 'Arsitektur tradisional rumah panggung kayu Maluku Utara. Kehidupan masyarakat yang sederhana dan ramah.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80',
    features: ['Rumah Panggung', 'Budaya', 'Fotografi'],
    rating: '4.8'
  }
]
</script>

<style scoped>
.destinations {
  background: var(--neutral-50);
  position: relative;
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

/* Featured Destination */
.featured-destination {
  position: relative;
  height: 450px;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  margin-bottom: var(--space-3xl);
}

.featured-bg {
  position: absolute;
  inset: 0;
}

.featured-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured-destination .featured-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 30, 50, 0.8) 0%, rgba(0, 30, 50, 0.3) 100%);
}

.featured-destination .featured-content {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--space-3xl);
  color: white;
  max-width: 600px;
}

.featured-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-lg);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: var(--space-lg);
  width: fit-content;
}

.badge-icon {
  font-size: 1.25rem;
}

.featured-destination h3 {
  font-size: 2.5rem;
  margin-bottom: var(--space-md);
}

.featured-destination p {
  font-size: 1.1rem;
  opacity: 0.9;
  line-height: 1.7;
  margin-bottom: var(--space-xl);
}

.featured-stats {
  display: flex;
  gap: var(--space-2xl);
}

.stat {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: var(--space-xs);
}

.stat-label {
  font-size: 0.875rem;
  opacity: 0.8;
}

/* Destinations Grid */
.destinations-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
  margin-bottom: var(--space-3xl);
}

.destination-card {
  background: white;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
}

.destination-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl);
}

.card-image-wrapper {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.destination-card:hover .card-image {
  transform: scale(1.08);
}

.card-overlay {
  position: absolute;
  top: var(--space-md);
  left: var(--space-md);
  right: var(--space-md);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.card-category {
  padding: var(--space-xs) var(--space-md);
  background: rgba(255, 255, 255, 0.95);
  color: var(--primary-700);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: var(--radius-full);
}

.card-rating {
  padding: var(--space-xs) var(--space-sm);
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.card-content {
  padding: var(--space-lg);
}

.card-title {
  font-size: 1.375rem;
  color: var(--neutral-800);
  margin-bottom: var(--space-sm);
}

.card-description {
  color: var(--neutral-500);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: var(--space-lg);
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
}

.card-features {
  display: flex;
  gap: var(--space-xs);
  flex-wrap: wrap;
}

.feature-tag {
  padding: var(--space-xs) var(--space-sm);
  background: var(--neutral-100);
  color: var(--neutral-600);
  font-size: 0.75rem;
  border-radius: var(--radius-sm);
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--primary-600);
  font-weight: 600;
  font-size: 0.875rem;
  transition: gap var(--transition-fast);
  flex-shrink: 0;
}

.card-link:hover {
  gap: var(--space-sm);
}

.link-icon {
  width: 16px;
  height: 16px;
}

/* Tips Banner */
.tips-banner {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
  padding: var(--space-xl);
  background: linear-gradient(135deg, var(--emerald-600) 0%, var(--primary-600) 100%);
  border-radius: var(--radius-xl);
  color: white;
  position: relative;
  overflow: hidden;
}

.tips-banner::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.tips-icon {
  font-size: 3rem;
  flex-shrink: 0;
}

.tips-content h4 {
  font-size: 1.25rem;
  margin-bottom: var(--space-sm);
}

.tips-content p {
  font-size: 0.95rem;
  opacity: 0.9;
  line-height: 1.6;
}

.tips-badge {
  position: absolute;
  top: var(--space-md);
  right: var(--space-xl);
  padding: var(--space-xs) var(--space-md);
  background: rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
}

@media (max-width: 900px) {
  .destinations-grid {
    grid-template-columns: 1fr;
  }

  .featured-destination {
    height: auto;
    min-height: 400px;
  }

  .featured-destination .featured-content {
    padding: var(--space-xl);
  }

  .featured-stats {
    flex-wrap: wrap;
    gap: var(--space-lg);
  }

  .tips-banner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
