<template>
  <div class="page contact-page">
    <section class="page-hero">
      <img 
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80" 
        alt="Kunjungi Pulau Hiri"
        class="hero-bg"
      />
      <div class="hero-overlay"></div>
      <div class="hero-content container">
        <h1>Hubungi Kami</h1>
        <p>Rencanakan perjalanan Anda ke Pulau Hiri</p>
      </div>
    </section>

    <section class="page-content section">
      <div class="container">
        <div class="contact-wrapper">
          <div class="contact-form-section">
            <h2>Kirim Pesan</h2>
            <p>Punya pertanyaan atau ingin memesan paket wisata? Hubungi kami!</p>
            
            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name">Nama Lengkap</label>
                <input type="text" id="name" v-model="form.name" required />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email" required />
              </div>
              <div class="form-group">
                <label for="phone">Nomor Telepon</label>
                <input type="tel" id="phone" v-model="form.phone" />
              </div>
              <div class="form-group">
                <label for="subject">Subjek</label>
                <select id="subject" v-model="form.subject">
                  <option value="">Pilih subjek</option>
                  <option value="tour">Paket Wisata</option>
                  <option value="accommodation">Akomodasi</option>
                  <option value="diving">Diving & Snorkeling</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>
              <div class="form-group full">
                <label for="message">Pesan</label>
                <textarea id="message" v-model="form.message" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Kirim Pesan</button>
            </form>
          </div>

          <div class="contact-info-section">
            <div class="info-card">
              <h3>📍 Lokasi</h3>
              <p>Pulau Hiri, Kecamatan Pulau Hiri<br>Kota Ternate, Maluku Utara</p>
            </div>

            <div class="info-card">
              <h3>🚤 Cara Menuju</h3>
              <p>Dari Pelabuhan Ternate menggunakan speedboat selama ±30 menit atau kapal tradisional ±1 jam.</p>
            </div>

            <div class="info-card">
              <h3>📱 Follow Kami</h3>
              <a href="https://www.instagram.com/bumihiri/" target="_blank" rel="noopener" class="social-btn">
                @bumihiri di Instagram
              </a>
            </div>

            <div class="map-card">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26529.9685!2d127.2968214!3d0.8972289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x329cac97425bb767%3A0x52b41fc10a483509!2sPulau%20Hiri%2C%20Ternate%20City%2C%20North%20Maluku!5e0!3m2!1sen!2sid!4v1705580000000!5m2!1sen!2sid"
                width="100%" 
                height="250" 
                style="border:0;border-radius:12px;" 
                allowfullscreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  alert('Terima kasih! Pesan Anda telah dikirim. Kami akan segera menghubungi Anda.')
  form.value = { name: '', email: '', phone: '', subject: '', message: '' }
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

.contact-wrapper {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-3xl);
}

.contact-form-section h2 {
  font-size: 2rem;
  color: var(--neutral-800);
  margin-bottom: var(--space-sm);
}

.contact-form-section > p {
  color: var(--neutral-500);
  margin-bottom: var(--space-xl);
}

.contact-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.form-group.full {
  grid-column: span 2;
}

.form-group label {
  font-weight: 500;
  color: var(--neutral-700);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: var(--space-md);
  border: 2px solid var(--neutral-200);
  border-radius: var(--radius-lg);
  font-size: 1rem;
  font-family: inherit;
  transition: border-color var(--transition-fast);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-500);
}

.contact-form .btn {
  grid-column: span 2;
  justify-self: start;
}

.contact-info-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.info-card {
  padding: var(--space-xl);
  background: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
}

.info-card h3 {
  font-size: 1.125rem;
  color: var(--neutral-800);
  margin-bottom: var(--space-sm);
}

.info-card p {
  color: var(--neutral-500);
  line-height: 1.6;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--primary-600);
  font-weight: 600;
  transition: color var(--transition-fast);
}

.social-btn:hover {
  color: var(--primary-700);
}

.map-card {
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

@media (max-width: 900px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
  }

  .contact-form {
    grid-template-columns: 1fr;
  }

  .form-group.full,
  .contact-form .btn {
    grid-column: span 1;
  }
}
</style>
