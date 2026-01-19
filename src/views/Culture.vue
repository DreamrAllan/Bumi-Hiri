<template>
  <div class="page culture-page">
    <section class="page-hero">
      <img 
        src="https://images.unsplash.com/photo-1533903345306-15d1c30952de?w=1920&q=80" 
        alt="Budaya Pulau Hiri"
        class="hero-bg"
      />
      <div class="hero-overlay"></div>
      <div class="hero-content container">
        <h1>Budaya & Tradisi</h1>
        <p>Warisan Kesultanan Ternate yang masih lestari</p>
      </div>
    </section>

    <section class="page-content section">
      <div class="container">
        <div class="culture-intro">
          <h2>Sejarah & Warisan</h2>
          <p>
            Masyarakat Pulau Hiri merupakan bagian integral dari Kesultanan Ternate, 
            salah satu kerajaan maritim terbesar di Nusantara. Secara historis, orang Hiri 
            adalah kekuatan utama angkatan laut kesultanan yang aktif melawan imperialisme Eropa.
          </p>
          <p>
            Secara budaya, Pulau Hiri terbagi menjadi lima "Soa" (desa atau unit), yang memiliki 
            hierarki budaya lebih tinggi dibandingkan empat "Soa" di Ternate. Struktur sosial ini 
            masih dihormati hingga kini.
          </p>
        </div>

        <div class="traditions-grid">
          <div v-for="tradition in traditions" :key="tradition.id" class="tradition-card">
            <div class="tradition-icon">{{ tradition.icon }}</div>
            <h3>{{ tradition.name }}</h3>
            <p>{{ tradition.description }}</p>
            <span class="tradition-status" :class="tradition.status">{{ tradition.statusText }}</span>
          </div>
        </div>

        <div class="festivals-section">
          <h2>Festival & Perayaan</h2>
          <div class="festivals-grid">
            <article class="festival-card main">
              <img src="https://images.unsplash.com/photo-1533903345306-15d1c30952de?w=800&q=80" alt="Festival Kora-Kora" />
              <div class="festival-content">
                <span class="festival-tag">Festival Tahunan</span>
                <h3>Kora-Kora & Legu Gam</h3>
                <p>
                  Festival utama yang menampilkan perahu tradisional Kesultanan Ternate berlayar 
                  dengan iringan gamelan dan tarian. Memperingati kebesaran maritim Kesultanan Ternate.
                </p>
              </div>
            </article>
            <article class="festival-card">
              <h3>🎭 Tari Soya-Soya</h3>
              <p>Tarian tradisional dengan gerakan dinamis penuh semangat.</p>
            </article>
            <article class="festival-card">
              <h3>🎶 Musik Gamelan</h3>
              <p>Alunan musik tradisional mengiringi berbagai upacara adat.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const traditions = [
  {
    id: 1,
    icon: '🤝',
    name: 'Babari',
    description: 'Tradisi gotong royong masyarakat dalam berbagai kegiatan, mencerminkan keharmonisan sosial.',
    status: 'active',
    statusText: 'Masih Aktif'
  },
  {
    id: 2,
    icon: '🌿',
    name: 'Siboso Soa',
    description: 'Kearifan lokal membiarkan alam beristirahat untuk menjaga keseimbangan ekosistem laut dan darat.',
    status: 'revival',
    statusText: 'Sedang Dilestarikan'
  },
  {
    id: 3,
    icon: '🎣',
    name: 'Hau Lianga',
    description: 'Tradisi unik memancing menggunakan layang-layang, teknik yang diwariskan turun-temurun.',
    status: 'revival',
    statusText: 'Sedang Dilestarikan'
  },
  {
    id: 4,
    icon: '🌊',
    name: 'Sigofi Ngolo',
    description: 'Ritual membersihkan laut untuk menjaga kelestarian dan keseimbangan ekosistem perairan.',
    status: 'revival',
    statusText: 'Sedang Dilestarikan'
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

.culture-intro {
  max-width: 800px;
  margin: 0 auto var(--space-4xl);
  text-align: center;
}

.culture-intro h2 {
  font-size: 2rem;
  color: var(--neutral-800);
  margin-bottom: var(--space-xl);
}

.culture-intro p {
  color: var(--neutral-600);
  line-height: 1.8;
  margin-bottom: var(--space-lg);
}

.traditions-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
  margin-bottom: var(--space-4xl);
}

.tradition-card {
  background: white;
  padding: var(--space-xl);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  text-align: center;
  transition: all var(--transition-base);
}

.tradition-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.tradition-icon {
  font-size: 3rem;
  margin-bottom: var(--space-md);
}

.tradition-card h3 {
  font-size: 1.25rem;
  color: var(--neutral-800);
  margin-bottom: var(--space-sm);
}

.tradition-card p {
  color: var(--neutral-500);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: var(--space-md);
}

.tradition-status {
  display: inline-block;
  padding: var(--space-xs) var(--space-md);
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: var(--radius-full);
}

.tradition-status.active {
  background: var(--emerald-100);
  color: var(--emerald-700);
}

.tradition-status.revival {
  background: var(--coral-100);
  color: var(--coral-600);
}

.festivals-section h2 {
  font-size: 2rem;
  text-align: center;
  color: var(--neutral-800);
  margin-bottom: var(--space-2xl);
}

.festivals-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: var(--space-lg);
}

.festival-card {
  background: white;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.festival-card.main {
  grid-row: span 2;
  position: relative;
}

.festival-card.main img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.festival-card.main .festival-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--space-xl);
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: white;
}

.festival-tag {
  display: inline-block;
  padding: var(--space-xs) var(--space-md);
  background: rgba(255,255,255,0.2);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: var(--space-sm);
}

.festival-card:not(.main) {
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.festival-card h3 {
  font-size: 1.25rem;
  margin-bottom: var(--space-sm);
}

.festival-card p {
  color: var(--neutral-500);
  font-size: 0.9rem;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .traditions-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .festivals-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .festival-card.main {
    grid-row: span 1;
    min-height: 400px;
  }
}

@media (max-width: 600px) {
  .traditions-grid {
    grid-template-columns: 1fr;
  }
}
</style>
