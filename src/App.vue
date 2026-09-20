<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink, RouterView } from 'vue-router'
import { siteConfig, whatsappLink } from './config/site'
import { interestMessage } from './config/whatsappMessages'

const { locale, t } = useI18n()
const menuOpen = ref(false)

const whatsappUrl = computed(() => {
  return whatsappLink(interestMessage(locale.value, locale.value === 'es' ? 'Tours y servicios de transporte' : 'Tours and transportation services', 'service'))
})

function setLanguage(lang) {
  locale.value = lang
  document.documentElement.lang = lang
  localStorage.setItem('caribego-locale', lang)
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <div class="container nav-wrap">
      <RouterLink to="/" class="brand">
        <span class="brand-mark">⌁</span>
        <span>Caribe<span>Go</span></span>
      </RouterLink>

      <nav class="desktop-nav">
        <RouterLink to="/">{{ t('nav.home') }}</RouterLink>
        <RouterLink to="/servicios">{{ t('nav.services') }}</RouterLink>
        <RouterLink to="/destinos">{{ t('nav.destinations') }}</RouterLink>
        <RouterLink to="/nosotros">{{ t('nav.about') }}</RouterLink>
        <RouterLink to="/contacto">{{ t('nav.contact') }}</RouterLink>
      </nav>

      <div class="nav-actions">
        <button type="button" :class="{ active: locale === 'es' }" :aria-pressed="locale === 'es'" aria-label="Cambiar idioma a español" @click="setLanguage('es')">ES</button>
        <button type="button" :class="{ active: locale === 'en' }" :aria-pressed="locale === 'en'" aria-label="Switch language to English" @click="setLanguage('en')">EN</button>
        <a class="nav-phone" :href="whatsappUrl" target="_blank" rel="noopener">☎ {{ siteConfig.phone.display }}</a>
        <a class="nav-wa" :href="whatsappUrl" target="_blank" rel="noopener">{{ locale === 'es' ? 'Soporte 24/7' : '24/7 Support' }}</a>
        <button class="menu-toggle" type="button" :aria-expanded="menuOpen" :aria-label="t('nav.menu')" @click="menuOpen = !menuOpen">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <nav v-if="menuOpen" class="mobile-nav container">
      <RouterLink to="/" @click="closeMenu">{{ t('nav.home') }}</RouterLink>
      <RouterLink to="/servicios" @click="closeMenu">{{ t('nav.services') }}</RouterLink>
      <RouterLink to="/destinos" @click="closeMenu">{{ t('nav.destinations') }}</RouterLink>
      <RouterLink to="/nosotros" @click="closeMenu">{{ t('nav.about') }}</RouterLink>
      <RouterLink to="/contacto" @click="closeMenu">{{ t('nav.contact') }}</RouterLink>
    </nav>
  </header>

  <main><RouterView /></main>

  <a class="floating-wa" :href="whatsappUrl" target="_blank" rel="noopener" aria-label="WhatsApp">◔</a>

  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <div class="brand footer-brand"><span class="brand-mark">⌁</span><span>Caribe<span>Go</span></span></div>
        <p>{{ t('footer.text') }}</p>
      </div>
      <div class="footer-links">
        <RouterLink to="/tours">{{ t('nav.tours') }}</RouterLink>
        <RouterLink to="/traslados">{{ t('nav.transfers') }}</RouterLink>
        <a :href="whatsappUrl" target="_blank" rel="noopener">{{ locale === 'es' ? 'Reservar' : 'Book' }}</a>
      </div>
    </div>
    <div class="container footer-bottom">© {{ new Date().getFullYear() }} CaribeGo · {{ t('footer.rights') }}</div>
  </footer>
</template>
