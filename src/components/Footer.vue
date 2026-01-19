<template>
  <footer class="footer">
    <div class="footer-wave">
      <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
        <path d="M0 60L48 55C96 50 192 40 288 45C384 50 480 70 576 75C672 80 768 70 864 55C960 40 1056 20 1152 25C1248 30 1344 60 1392 75L1440 90V120H0V60Z" fill="url(#footerGrad)"/>
        <defs>
          <linearGradient id="footerGrad" x1="0" y1="0" x2="1440" y2="0">
            <stop offset="0%" stop-color="#0e7490"/>
            <stop offset="100%" stop-color="#047857"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
    
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="brand-logo">
              <svg viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="23" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
                <path d="M12 27 Q18 20 25 27 Q32 34 38 27" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/>
                <path d="M15 34 Q21 27 25 34 Q29 41 35 34" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
              </svg>
              <span>Pulau Hiri</span>
            </div>
            <p class="brand-desc">
              Surga tersembunyi di Maluku Utara. Jelajahi keindahan alam, budaya, dan tradisi Kesultanan Ternate.
            </p>
            <div class="social-links">
              <a href="https://www.instagram.com/bumihiri/" target="_blank" rel="noopener" class="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.6C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="footer-links">
            <h4>Jelajahi</h4>
            <ul>
              <li><router-link to="/destinations">Destinasi</router-link></li>
              <li><router-link to="/culture">Budaya & Tradisi</router-link></li>
              <li><router-link to="/activities">Aktivitas</router-link></li>
              <li><router-link to="/gallery">Galeri</router-link></li>
            </ul>
          </div>

          <div class="footer-links">
            <h4>Informasi</h4>
            <ul>
              <li><router-link to="/contact">Cara Berkunjung</router-link></li>
              <li><a href="#">Akomodasi</a></li>
              <li><a href="#">Tips Perjalanan</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div class="footer-contact">
            <h4>Hubungi Kami</h4>
            <ul>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="contact-icon">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Pulau Hiri, Kota Ternate, Maluku Utara</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="contact-icon">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>info@pulauhiri.com</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="contact-icon">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
                <span>@bumihiri</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>© 2026 KKN-PPM UGM Pulau Hiri (Bumi Hiri). Dibuat dengan ❤️ untuk pariwisata Maluku Utara.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  margin-top: auto;
}

.footer-wave {
  margin-bottom: -2px;
}

.footer-wave svg {
  width: 100%;
  height: 80px;
  display: block;
}

.footer-main {
  background: linear-gradient(135deg, var(--primary-800) 0%, var(--emerald-800) 100%);
  padding: var(--space-3xl) 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: var(--space-2xl);
}

.footer-brand {
  max-width: 320px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-lg);
}

.brand-logo svg {
  width: 50px;
  height: 50px;
}

.brand-logo span {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
}

.brand-desc {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  margin-bottom: var(--space-lg);
}

.social-links {
  display: flex;
  gap: var(--space-md);
}

.social-link {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  color: white;
  transition: all var(--transition-base);
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.social-link svg {
  width: 22px;
  height: 22px;
}

.footer-links h4,
.footer-contact h4 {
  color: white;
  font-size: 1.125rem;
  margin-bottom: var(--space-lg);
}

.footer-links ul,
.footer-contact ul {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  transition: color var(--transition-fast);
}

.footer-links a:hover {
  color: white;
}

.footer-contact li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  color: rgba(255, 255, 255, 0.7);
}

.contact-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}

.footer-bottom {
  background: rgba(0, 0, 0, 0.2);
  padding: var(--space-lg) 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
}

@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .footer-brand {
    grid-column: span 2;
    max-width: none;
    text-align: center;
    margin-bottom: var(--space-lg);
  }

  .brand-logo {
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .footer-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-brand {
    grid-column: span 1;
  }

  .footer-contact li {
    justify-content: center;
  }
}
</style>
