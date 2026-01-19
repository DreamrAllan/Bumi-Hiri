<template>
  <section class="culture section" id="culture">
    <div class="container">
      <div class="culture-header">
        <span class="section-tag">Warisan Budaya</span>
        <h2 class="section-title">Tradisi & Budaya Lokal</h2>
        <p class="section-subtitle">
          Rasakan kekayaan budaya Kesultanan Ternate yang masih lestari dengan sistem kekerabatan matrilineal dan tradisi bahari yang kuat.
        </p>
      </div>

      <!-- Featured Festival with Video-like Animation -->
      <div class="culture-featured">
        <div class="featured-image">
          <img 
            src="https://images.unsplash.com/photo-1533903345306-15d1c30952de?w=800&q=80" 
            alt="Festival Penti Laut"
            loading="lazy"
          />
          <div class="featured-badge">
            Pesta Laut (Juni-Juli)
          </div>
          <div class="featured-overlay">
            <div class="play-button">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="featured-content">
          <span class="featured-tag">Festival Tahunan</span>
          <h3>Penti Laut & Festival Budaya</h3>
          <p>
            Upacara tahunan sakral untuk meminta berkah dan hasil laut yang melimpah. 
            Melibatkan sesaji yang dilarung ke laut dengan perahu tradisional <strong>Soppe</strong> 
            dan <strong>Bodi-bodi</strong>, doa bersama, dan pesta rakyat yang meriah.
          </p>
          <ul class="featured-list">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              Lomba perahu tradisional Soppe
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              Tari Cakalele, Soya-Soya, dan Legu
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              Musik Tifa, Tetengkoren, dan Gong
            </li>
          </ul>
        </div>
      </div>

      <!-- Traditional Dances Showcase -->
      <div class="dances-showcase">
        <h3 class="showcase-title">Tarian Tradisional</h3>
        <div class="dances-grid">
          <div class="dance-card">
            <div class="dance-icon">⚔️</div>
            <h4>Tari Cakalele</h4>
            <p>Tarian perang dengan parang dan salawaku (perisai), menggambarkan keberanian.</p>
            <span class="dance-type">Tari Perang</span>
          </div>
          <div class="dance-card featured">
            <div class="dance-icon">💃</div>
            <h4>Tari Soya-Soya</h4>
            <p>Tarian pergaulan berkelompok untuk pernikahan dan perayaan.</p>
            <span class="dance-type">Tari Pergaulan</span>
          </div>
          <div class="dance-card">
            <div class="dance-icon">🚣</div>
            <h4>Tari Legu</h4>
            <p>Menggambarkan kehidupan sehari-hari nelayan di Pulau Hiri.</p>
            <span class="dance-type">Tari Nelayan</span>
          </div>
        </div>
      </div>

      <!-- Culture Grid with More Info -->
      <div class="culture-grid">
        <div v-for="item in cultureItems" :key="item.id" class="culture-card" :class="{ highlight: item.highlight }">
          <div class="culture-icon">{{ item.icon }}</div>
          <h4>{{ item.title }}</h4>
          <p>{{ item.description }}</p>
          <span v-if="item.badge" class="culture-badge">{{ item.badge }}</span>
        </div>
      </div>

      <!-- Culinary Section -->
      <div class="culinary-section">
        <div class="culinary-header">
          <span class="section-tag">Kuliner Khas</span>
          <h3>Cita Rasa Maluku Utara</h3>
        </div>
        <div class="culinary-grid">
          <div class="culinary-main">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80" alt="Kuliner Pulau Hiri" />
            <div class="culinary-content">
              <h4>Papeda & Ikan Kuah Kuning</h4>
              <p>Makanan pokok khas Maluku berupa bubur sagu dengan ikan segar dan kuah rempah.</p>
            </div>
          </div>
          <div class="culinary-items">
            <div class="culinary-item">
              <span class="item-icon">🐟</span>
              <div>
                <h5>Gohu Ikan</h5>
                <p>Ceviche lokal dengan ikan segar</p>
              </div>
            </div>
            <div class="culinary-item">
              <span class="item-icon">🥗</span>
              <div>
                <h5>Kohu-Kohu</h5>
                <p>Salad khas Maluku yang segar</p>
              </div>
            </div>
            <div class="culinary-item">
              <span class="item-icon">🌶️</span>
              <div>
                <h5>Sambal Colo-Colo</h5>
                <p>Sambal mentah pedas aromatik</p>
              </div>
            </div>
            <div class="culinary-item">
              <span class="item-icon">🍪</span>
              <div>
                <h5>Kue Bagea</h5>
                <p>Kue kering sagu yang renyah</p>
              </div>
            </div>
            <div class="culinary-item">
              <span class="item-icon">🥜</span>
              <div>
                <h5>Halua Kenari</h5>
                <p>Manisan kenari khas Maluku</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cultureItems = [
  {
    id: 1,
    icon: '🏛️',
    title: 'Sistem Soa',
    description: 'Struktur sosial klan matrilineal dengan Jogugu sebagai pemimpin adat tertinggi.',
    badge: 'Tradisi Kuno',
    highlight: true
  },
  {
    id: 2,
    icon: '⚓',
    title: 'Tradisi Bahari',
    description: 'Pelaut dan nelayan handal dengan perahu Soppe dan ritual keselamatan melaut.',
    badge: null
  },
  {
    id: 3,
    icon: '🎵',
    title: 'Musik Tradisional',
    description: 'Tifa, Tetengkoren (seruling bambu), Gong, dan Ukulele warisan Portugis.',
    badge: null
  },
  {
    id: 4,
    icon: '👶',
    title: 'Upacara Turun Mandi',
    description: 'Ritual khusus bayi baru lahir di laut atau sumber air sakral.',
    badge: null
  },
  {
    id: 5,
    icon: '🗣️',
    title: 'Bahasa Lokal',
    description: 'Beta (saya), Ngana (kamu), Mangana (mari), Batul (bagus), Paitua (teman).',
    badge: 'Pelajari!',
    highlight: true
  },
  {
    id: 6,
    icon: '🧵',
    title: 'Kerajinan Tangan',
    description: 'Anyaman tikar pandan, tenun tradisional, ukiran kayu, perhiasan kerang mutiara.',
    badge: null
  }
]
</script>

<style scoped>
.culture {
  background: linear-gradient(180deg, white 0%, var(--primary-50) 100%);
  position: relative;
  overflow: hidden;
}

.culture::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, var(--primary-100) 0%, transparent 70%);
  opacity: 0.5;
}

.culture-header {
  text-align: center;
  margin-bottom: var(--space-3xl);
  position: relative;
}

.section-tag {
  display: inline-block;
  padding: var(--space-xs) var(--space-md);
  background: var(--emerald-100);
  color: var(--emerald-700);
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  margin-bottom: var(--space-md);
}

.culture-featured {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3xl);
  align-items: center;
  margin-bottom: var(--space-4xl);
}

.featured-image {
  position: relative;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
}

.featured-image img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.featured-image:hover img {
  transform: scale(1.05);
}

.featured-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-base);
}

.featured-image:hover .featured-overlay {
  opacity: 1;
}

.play-button {
  width: 80px;
  height: 80px;
  background: white;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform var(--transition-base);
}

.play-button:hover {
  transform: scale(1.1);
}

.play-button svg {
  width: 30px;
  height: 30px;
  color: var(--primary-600);
  margin-left: 4px;
}

.featured-badge {
  position: absolute;
  bottom: var(--space-lg);
  left: var(--space-lg);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-lg);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-full);
  font-weight: 600;
  color: var(--neutral-800);
}

.featured-tag {
  display: inline-block;
  padding: var(--space-xs) var(--space-md);
  background: var(--gradient-ocean);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: var(--radius-full);
  margin-bottom: var(--space-md);
}

.featured-content h3 {
  font-size: 2rem;
  color: var(--neutral-800);
  margin-bottom: var(--space-lg);
}

.featured-content p {
  color: var(--neutral-600);
  line-height: 1.8;
  margin-bottom: var(--space-xl);
}

.featured-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.featured-list li {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  color: var(--neutral-700);
}

.featured-list svg {
  width: 24px;
  height: 24px;
  color: var(--emerald-500);
  flex-shrink: 0;
}

/* Dances Showcase */
.dances-showcase {
  margin-bottom: var(--space-4xl);
  padding: var(--space-2xl);
  background: linear-gradient(135deg, var(--coral-500) 0%, var(--coral-600) 100%);
  border-radius: var(--radius-2xl);
  color: white;
}

.showcase-title {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: var(--space-xl);
}

.dances-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

.dance-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: var(--space-xl);
  border-radius: var(--radius-xl);
  text-align: center;
  transition: all var(--transition-base);
  border: 2px solid transparent;
}

.dance-card:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-5px);
}

.dance-card.featured {
  border-color: white;
  background: rgba(255, 255, 255, 0.25);
}

.dance-icon {
  font-size: 3rem;
  margin-bottom: var(--space-md);
}

.dance-card h4 {
  font-size: 1.25rem;
  margin-bottom: var(--space-sm);
}

.dance-card p {
  font-size: 0.9rem;
  opacity: 0.9;
  margin-bottom: var(--space-md);
}

.dance-type {
  display: inline-block;
  padding: var(--space-xs) var(--space-md);
  background: rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
}

/* Culture Grid */
.culture-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
  margin-bottom: var(--space-4xl);
}

.culture-card {
  background: white;
  padding: var(--space-xl);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
  text-align: center;
  position: relative;
  border: 2px solid transparent;
}

.culture-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.culture-card.highlight {
  border-color: var(--primary-200);
  background: linear-gradient(135deg, white 0%, var(--primary-50) 100%);
}

.culture-icon {
  font-size: 3rem;
  margin-bottom: var(--space-md);
}

.culture-card h4 {
  font-size: 1.125rem;
  color: var(--neutral-800);
  margin-bottom: var(--space-sm);
}

.culture-card p {
  color: var(--neutral-500);
  font-size: 0.9rem;
  line-height: 1.6;
}

.culture-badge {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  padding: var(--space-xs) var(--space-sm);
  background: var(--gradient-ocean);
  color: white;
  font-size: 0.65rem;
  font-weight: 700;
  border-radius: var(--radius-full);
  text-transform: uppercase;
}

/* Culinary Section */
.culinary-section {
  padding: var(--space-2xl);
  background: white;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
}

.culinary-header {
  text-align: center;
  margin-bottom: var(--space-2xl);
}

.culinary-header h3 {
  font-size: 1.75rem;
  color: var(--neutral-800);
  margin-top: var(--space-md);
}

.culinary-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
}

.culinary-main {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.culinary-main img {
  width: 100%;
  height: 350px;
  object-fit: cover;
}

.culinary-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--space-xl);
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
}

.culinary-content h4 {
  font-size: 1.25rem;
  margin-bottom: var(--space-sm);
}

.culinary-content p {
  font-size: 0.9rem;
  opacity: 0.9;
}

.culinary-items {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.culinary-item {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  padding: var(--space-lg);
  background: var(--neutral-50);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.culinary-item:hover {
  background: var(--primary-50);
  transform: translateX(5px);
}

.item-icon {
  font-size: 2rem;
}

.culinary-item h5 {
  font-size: 1rem;
  color: var(--neutral-800);
  margin-bottom: var(--space-xs);
}

.culinary-item p {
  font-size: 0.85rem;
  color: var(--neutral-500);
}

@media (max-width: 900px) {
  .culture-featured {
    grid-template-columns: 1fr;
  }

  .featured-image img {
    height: 300px;
  }

  .dances-grid {
    grid-template-columns: 1fr;
  }

  .culture-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .culinary-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .culture-grid {
    grid-template-columns: 1fr;
  }
}
</style>
