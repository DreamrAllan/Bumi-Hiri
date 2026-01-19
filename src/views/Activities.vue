<template>
  <div class="page activities-page">
    <section class="page-hero">
      <img 
        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80" 
        alt="Aktivitas di Pulau Hiri"
        class="hero-bg"
      />
      <div class="hero-overlay"></div>
      <div class="hero-content container">
        <h1>Aktivitas & Petualangan</h1>
        <p>Pengalaman tak terlupakan menanti Anda di Pulau Hiri</p>
      </div>
    </section>

    <section class="page-content section">
      <div class="container">
        <div class="activities-list">
          <article v-for="activity in allActivities" :key="activity.id" class="activity-full">
            <div class="activity-image">
              <img :src="activity.image" :alt="activity.name" loading="lazy" />
              <div class="activity-badges">
                <span class="badge level" :class="activity.level.toLowerCase()">{{ activity.level }}</span>
              </div>
            </div>
            <div class="activity-info">
              <span class="activity-icon">{{ activity.icon }}</span>
              <h2>{{ activity.name }}</h2>
              <p class="activity-desc">{{ activity.description }}</p>
              
              <div class="activity-meta">
                <div class="meta-box">
                  <span class="meta-label">Durasi</span>
                  <span class="meta-value">{{ activity.duration }}</span>
                </div>
                <div class="meta-box">
                  <span class="meta-label">Grup</span>
                  <span class="meta-value">{{ activity.groupSize }}</span>
                </div>
                <div class="meta-box">
                  <span class="meta-label">Harga Mulai</span>
                  <span class="meta-value">{{ activity.price }}</span>
                </div>
              </div>

              <div class="activity-includes">
                <h4>Termasuk:</h4>
                <ul>
                  <li v-for="item in activity.includes" :key="item">✓ {{ item }}</li>
                </ul>
              </div>

              <button class="btn btn-primary">Booking Sekarang</button>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const allActivities = [
  {
    id: 1,
    icon: '🤿',
    name: 'Scuba Diving',
    level: 'Menengah',
    description: 'Jelajahi dunia bawah laut Pulau Hiri yang spektakuler dengan soft coral berwarna-warni dan beragam spesies marine life. Spot diving Tomajiko dan Tafraka menawarkan visibilitas hingga 30 meter dengan kesempatan bertemu penyu, hiu, dan bahkan dugong.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1000&q=80',
    duration: '2-3 jam',
    groupSize: 'Max 6 orang',
    price: 'Rp 500.000',
    includes: ['Peralatan diving lengkap', 'Dive master bersertifikat', 'Transportasi perahu', 'Air mineral & snack']
  },
  {
    id: 2,
    icon: '🏊',
    name: 'Snorkeling Tour',
    level: 'Pemula',
    description: 'Aktivitas santai untuk menikmati keindahan terumbu karang dan marine life di perairan dangkal. Cocok untuk pemula dan keluarga. Terumbu karang di depan desa utama menghadap Ternate menawarkan pemandangan penyu dan hiu karang.',
    image: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=1000&q=80',
    duration: '1-2 jam',
    groupSize: 'Max 10 orang',
    price: 'Rp 150.000',
    includes: ['Masker & snorkel', 'Life jacket', 'Guide lokal', 'Transportasi perahu']
  },
  {
    id: 3,
    icon: '🥾',
    name: 'Hiking Gunung Hiri',
    level: 'Menengah',
    description: 'Trek menantang menuju puncak gunung berapi tidak aktif dengan panorama laut Maluku dan pulau-pulau sekitar yang memukau. Trek sunrise sangat direkomendasikan untuk pengalaman magical.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1000&q=80',
    duration: '4-5 jam',
    groupSize: 'Max 8 orang',
    price: 'Rp 250.000',
    includes: ['Guide lokal berpengalaman', 'Air mineral', 'Sarapan ringan', 'Trekking pole']
  },
  {
    id: 4,
    icon: '🚣',
    name: 'Island Hopping',
    level: 'Pemula',
    description: 'Jelajahi pulau-pulau kecil di sekitar Hiri dengan perahu tradisional sambil menikmati pemandangan spektakuler. Kunjungi spot-spot tersembunyi dan nikmati picnic di pantai terpencil.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1000&q=80',
    duration: 'Full day',
    groupSize: 'Max 12 orang',
    price: 'Rp 400.000',
    includes: ['Perahu tradisional', 'Makan siang lokal', 'Peralatan snorkeling', 'Air mineral']
  }
]
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

.activities-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4xl);
}

.activity-full {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-3xl);
  align-items: start;
}

.activity-full:nth-child(even) {
  direction: rtl;
}

.activity-full:nth-child(even) > * {
  direction: ltr;
}

.activity-image {
  position: relative;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
}

.activity-image img {
  width: 100%;
  height: 450px;
  object-fit: cover;
}

.activity-badges {
  position: absolute;
  top: var(--space-lg);
  left: var(--space-lg);
  display: flex;
  gap: var(--space-sm);
}

.badge.level {
  padding: var(--space-sm) var(--space-lg);
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: var(--radius-full);
}

.badge.pemula {
  background: var(--emerald-500);
  color: white;
}

.badge.menengah {
  background: var(--coral-500);
  color: white;
}

.activity-info {
  padding: var(--space-lg) 0;
}

.activity-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: var(--space-md);
}

.activity-info h2 {
  font-size: 2rem;
  color: var(--neutral-800);
  margin-bottom: var(--space-md);
}

.activity-desc {
  color: var(--neutral-600);
  line-height: 1.8;
  margin-bottom: var(--space-xl);
}

.activity-meta {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
}

.meta-box {
  padding: var(--space-md);
  background: var(--neutral-100);
  border-radius: var(--radius-lg);
  text-align: center;
}

.meta-label {
  display: block;
  font-size: 0.75rem;
  color: var(--neutral-500);
  margin-bottom: var(--space-xs);
}

.meta-value {
  font-weight: 600;
  color: var(--neutral-800);
}

.activity-includes {
  margin-bottom: var(--space-xl);
}

.activity-includes h4 {
  font-size: 1rem;
  color: var(--neutral-700);
  margin-bottom: var(--space-sm);
}

.activity-includes ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xs);
}

.activity-includes li {
  color: var(--neutral-600);
  font-size: 0.9rem;
}

@media (max-width: 900px) {
  .activity-full {
    grid-template-columns: 1fr;
  }

  .activity-full:nth-child(even) {
    direction: ltr;
  }

  .activity-image img {
    height: 300px;
  }
}
</style>
