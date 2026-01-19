<template>
  <div class="page destinations-page">
    <section class="page-hero">
      <img 
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80" 
        alt="Destinasi Pulau Hiri"
        class="hero-bg"
      />
      <div class="hero-overlay"></div>
      <div class="hero-content container">
        <h1>Destinasi Wisata</h1>
        <p>Jelajahi keajaiban alam dan landmark ikonik di Pulau Hiri</p>
      </div>
    </section>

    <section class="page-content section">
      <div class="container">
        <div class="destinations-full-grid">
          <article v-for="dest in allDestinations" :key="dest.id" class="dest-card-full">
            <div class="dest-image">
              <img :src="dest.image" :alt="dest.name" loading="lazy" />
              <span class="dest-category">{{ dest.category }}</span>
            </div>
            <div class="dest-content">
              <h2>{{ dest.name }}</h2>
              <p class="dest-description">{{ dest.description }}</p>
              <div class="dest-details">
                <div class="detail-item">
                  <span class="detail-label">Lokasi</span>
                  <span class="detail-value">{{ dest.location }}</span>
                </div>
                <div class="detail-item">
                  <span class="detail-label">Waktu Terbaik</span>
                  <span class="detail-value">{{ dest.bestTime }}</span>
                </div>
                <div class="detail-item">
                  <span class="detail-label">Aktivitas</span>
                  <span class="detail-value">{{ dest.activities.join(', ') }}</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const allDestinations = [
  {
    id: 1,
    name: 'Pantai Ono',
    category: 'Pantai',
    description: 'Pantai eksotis dengan pasir putih lembut dan air laut jernih berwarna gradasi biru-hijau yang memukau. Tempat ideal untuk bersantai, berenang, dan menikmati sunset yang spektakuler. Terumbu karang yang dekat dengan pantai membuatnya sempurna untuk snorkeling.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&q=80',
    location: 'Desa Tomajiko, Pulau Hiri',
    bestTime: 'April - Oktober',
    activities: ['Swimming', 'Snorkeling', 'Sunset View', 'Beach Camping']
  },
  {
    id: 2,
    name: 'Batu Lobang Tomajiko',
    category: 'Landmark Alam',
    description: 'Formasi batu raksasa dengan lubang besar menyerupai gerbang alami, hasil erosi ombak selama ribuan tahun. Landmark ikonik ini paling menakjubkan dikunjungi saat air surut, memungkinkan pengunjung berjalan melewati lubangnya dan mengambil foto yang dramatis.',
    image: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=1000&q=80',
    location: 'Pantai Tomajiko',
    bestTime: 'Saat Air Surut',
    activities: ['Photography', 'Trekking', 'Exploration']
  },
  {
    id: 3,
    name: 'Spot Diving Tafraka',
    category: 'Diving & Snorkeling',
    description: 'Surga bawah laut dengan terumbu karang soft coral yang masih pristine dan berwarna-warni. Perairan ini menjadi habitat bagi penyu, hiu karang, Napoleon fish, dan kesempatan langka bertemu dugong. Visibility air mencapai 20-30 meter di musim terbaik.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1000&q=80',
    location: 'Desa Tafraka',
    bestTime: 'April - Oktober',
    activities: ['Scuba Diving', 'Snorkeling', 'Underwater Photography']
  },
  {
    id: 4,
    name: 'Gunung Hiri',
    category: 'Hiking & Adventure',
    description: 'Gunung berapi tidak aktif yang menjadi ikon pulau ini. Menurut legenda lokal, terdapat danau tersembunyi di kawahnya. Trek menuju puncak menawarkan pemandangan spektakuler Pulau Ternate, Tidore, dan laut Maluku.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&q=80',
    location: 'Tengah Pulau Hiri',
    bestTime: 'Pagi Hari (Sunrise Trek)',
    activities: ['Hiking', 'Sunrise Trek', 'Bird Watching', 'Photography']
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

.destinations-full-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-3xl);
}

.dest-card-full {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  align-items: center;
}

.dest-card-full:nth-child(even) {
  direction: rtl;
}

.dest-card-full:nth-child(even) > * {
  direction: ltr;
}

.dest-image {
  position: relative;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
}

.dest-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.dest-category {
  position: absolute;
  top: var(--space-lg);
  left: var(--space-lg);
  padding: var(--space-sm) var(--space-lg);
  background: white;
  color: var(--primary-700);
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: var(--radius-full);
}

.dest-content h2 {
  font-size: 2rem;
  color: var(--neutral-800);
  margin-bottom: var(--space-lg);
}

.dest-description {
  color: var(--neutral-600);
  line-height: 1.8;
  margin-bottom: var(--space-xl);
}

.dest-details {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.detail-item {
  display: flex;
  gap: var(--space-lg);
}

.detail-label {
  min-width: 120px;
  font-weight: 600;
  color: var(--neutral-700);
}

.detail-value {
  color: var(--neutral-500);
}

@media (max-width: 900px) {
  .dest-card-full {
    grid-template-columns: 1fr;
  }

  .dest-card-full:nth-child(even) {
    direction: ltr;
  }

  .dest-image img {
    height: 300px;
  }
}
</style>
