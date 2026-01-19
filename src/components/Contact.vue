<template>
  <section class="contact section" id="contact">
    <div class="container">
      <span class="section-tag">Kunjungi Kami</span>
      <h2 class="section-title">Rencanakan Perjalanan Anda</h2>
      <p class="section-subtitle">
        Hubungi kami untuk informasi lebih lanjut tentang akomodasi, transportasi, 
        dan paket wisata di Pulau Hiri.
      </p>

      <div class="contact-grid">
        <div class="contact-info">
          <div class="info-card">
            <div class="info-icon">📍</div>
            <div class="info-content">
              <h4>Lokasi</h4>
              <p>Pulau Hiri, Kecamatan Pulau Hiri<br>Kota Ternate, Maluku Utara</p>
            </div>
          </div>

          <div class="info-card">
            <div class="info-icon">🚤</div>
            <div class="info-content">
              <h4>Cara Menuju</h4>
              <p>Dari Pelabuhan Ternate menggunakan speedboat selama ±30 menit atau kapal tradisional ±1 jam.</p>
            </div>
          </div>

          <div class="info-card">
            <div class="info-icon">📱</div>
            <div class="info-content">
              <h4>Social Media</h4>
              <a href="https://www.instagram.com/bumihiri/" target="_blank" rel="noopener" class="social-link">
                @bumihiri
              </a>
            </div>
          </div>

          <div class="info-card">
            <div class="info-icon">📧</div>
            <div class="info-content">
              <h4>Email</h4>
              <p>info@pulauhiri.com</p>
            </div>
          </div>
        </div>

        <div class="contact-map">
          <div class="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26529.9685!2d127.2968214!3d0.8972289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x329cac97425bb767%3A0x52b41fc10a483509!2sPulau%20Hiri%2C%20Ternate%20City%2C%20North%20Maluku!5e0!3m2!1sen!2sid!4v1705580000000!5m2!1sen!2sid"
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="true" 
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="map-info">
            <div class="map-badge">
              <span class="badge-icon">🏝️</span>
              <span>Pulau Hiri</span>
            </div>
            <p>Koordinat: 0.9085941°N, 127.3141639°E</p>
          </div>
        </div>
      </div>

      <div class="travel-tips">
        <h3>💡 Tips Perjalanan</h3>
        <div class="tips-grid">
          <div class="tip-item">
            <span class="tip-icon">🌤️</span>
            <h5>Waktu Terbaik</h5>
            <p>Kunjungi saat musim kemarau (April-Oktober) untuk cuaca terbaik dan visibilitas diving optimal.</p>
          </div>
          <div class="tip-item">
            <span class="tip-icon">🎒</span>
            <h5>Apa yang Dibawa</h5>
            <p>Sunscreen, topi, pakaian renang, sepatu trekking, dan kamera underwater jika punya.</p>
          </div>
          <div class="tip-item">
            <span class="tip-icon">🏨</span>
            <h5>Akomodasi</h5>
            <p>Tersedia homestay lokal yang nyaman. Disarankan untuk booking terlebih dahulu.</p>
          </div>
          <div class="tip-item">
            <span class="tip-icon">💰</span>
            <h5>Budget</h5>
            <p>Bawa uang tunai karena ATM terbatas. Harga relatif terjangkau untuk wisatawan.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: linear-gradient(180deg, var(--neutral-50) 0%, white 100%);
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

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: var(--space-2xl);
  margin-bottom: var(--space-4xl);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.info-card {
  display: flex;
  gap: var(--space-lg);
  padding: var(--space-lg);
  background: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
}

.info-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateX(5px);
}

.info-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.info-content h4 {
  font-size: 1rem;
  color: var(--neutral-800);
  margin-bottom: var(--space-xs);
}

.info-content p {
  color: var(--neutral-500);
  font-size: 0.9rem;
  line-height: 1.6;
}

.info-content .social-link {
  color: var(--primary-600);
  font-weight: 600;
  transition: color var(--transition-fast);
}

.info-content .social-link:hover {
  color: var(--primary-700);
}

.contact-map {
  background: white;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.map-container {
  height: 350px;
}

.map-container iframe {
  width: 100%;
  height: 100%;
}

.map-info {
  padding: var(--space-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.map-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-lg);
  background: var(--primary-100);
  color: var(--primary-700);
  font-weight: 600;
  border-radius: var(--radius-full);
}

.badge-icon {
  font-size: 1.25rem;
}

.map-info p {
  color: var(--neutral-500);
  font-size: 0.9rem;
}

.travel-tips {
  padding: var(--space-2xl);
  background: linear-gradient(135deg, var(--primary-700) 0%, var(--emerald-700) 100%);
  border-radius: var(--radius-2xl);
  color: white;
}

.travel-tips h3 {
  font-size: 1.5rem;
  margin-bottom: var(--space-xl);
  text-align: center;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.tip-item {
  text-align: center;
  padding: var(--space-lg);
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-xl);
  backdrop-filter: blur(10px);
}

.tip-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: var(--space-sm);
}

.tip-item h5 {
  font-size: 1rem;
  margin-bottom: var(--space-sm);
}

.tip-item p {
  font-size: 0.85rem;
  opacity: 0.9;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .tips-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .tips-grid {
    grid-template-columns: 1fr;
  }
}
</style>
