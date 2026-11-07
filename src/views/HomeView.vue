<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { vehicles } from '../data/vehicles'
import { homeBenefits } from '../data/about'
import { siteConfig, whatsappLink } from '../config/site'
import { buildWhatsappMessage, formatDateTime, interestMessage } from '../config/whatsappMessages'

const { t, locale } = useI18n()
const fleetSlider = ref(null)
let fleetTimer = null

const quote = reactive({
  airport: 'CUN', destination: '', locationUrl: '', date: '', passengers: '2'
})

const quoteWhatsapp = computed(() => {
  const es = locale.value === 'es'
  return whatsappLink(buildWhatsappMessage({
    locale: locale.value,
    title: es ? 'SOLICITUD DE COTIZACIÓN · TRASLADO PRIVADO' : 'PRIVATE TRANSFER QUOTE REQUEST',
    intro: es ? 'Hola, me gustaría cotizar el siguiente traslado:' : 'Hello, I would like a quote for the following transfer:',
    fields: [
      { icon: '✈️', label: t('quote.airport'), value: quote.airport === 'CUN' ? t('quote.cancun') : t('quote.tulum') },
      { icon: '🏨', label: t('quote.destination'), value: quote.destination },
      { icon: '📍', label: es ? 'Ubicación' : 'Location', value: quote.locationUrl },
      { icon: '👥', label: t('quote.passengers'), value: quote.passengers },
      { icon: '📅', label: es ? 'Fecha y hora' : 'Date and time', value: formatDateTime(quote.date, locale.value) }
    ],
    question: es ? '¿Podrían confirmarme el precio, la disponibilidad y la forma de pago?' : 'Could you confirm the price, availability and payment method?'
  }))
})

const quoteReady = computed(() => quote.airport && quote.destination && quote.passengers && quote.date)
const vehicleWhatsapp = vehicle => whatsappLink(interestMessage(locale.value, `${vehicle.name} · ${vehicle.passengers} pax`, 'vehicle'))
const moveFleet = direction => fleetSlider.value?.scrollBy({ left: direction * 360, behavior: 'smooth' })

function stopFleetAutoplay() {
  if (fleetTimer) window.clearInterval(fleetTimer)
  fleetTimer = null
}

function advanceFleet() {
  const slider = fleetSlider.value
  if (!slider) return
  const reachedEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 12
  // slider.scrollTo({ left: reachedEnd ? 0 : slider.scrollLeft + 360, behavior: 'smooth' })
  slider.scrollTo({
  left: reachedEnd ? 0 : slider.scrollLeft + 360,
  behavior: 'smooth'
})
}

function startFleetAutoplay() {
  stopFleetAutoplay()
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  fleetTimer = window.setInterval(advanceFleet, 3500)
}

function manualFleetMove(direction) {
  moveFleet(direction)
  startFleetAutoplay()
}

onMounted(startFleetAutoplay)
onBeforeUnmount(stopFleetAutoplay)
</script>

<template>
  <section class="hero home-hero" :style="{ backgroundImage: `url(${siteConfig.images.home})` }">
    <div class="hero-overlay"></div>
    <div class="container hero-content home-hero-content">
      <span class="eyebrow">{{ t('hero.eyebrow') }}</span>
      <h1>{{ locale === 'es' ? 'Traslados privados en Cancún y Tulum' : 'Private transfers in Cancún and Tulum' }}</h1>
      <p>{{ t('hero.text') }}</p>
    </div>
  </section>

  <section class="quote-wrap home-quote-wrap">
    <form class="container quote-card" @submit.prevent>
      <div class="quote-simple-heading"><h2>{{ t('quote.title') }}</h2></div>
      <div class="airport-tabs" role="radiogroup" :aria-label="t('quote.airport')">
        <label :class="{ active: quote.airport === 'CUN' }"><input v-model="quote.airport" type="radio" value="CUN"><span>✈ {{ t('quote.cancun') }} (CUN)</span></label>
        <label :class="{ active: quote.airport === 'TQO' }"><input v-model="quote.airport" type="radio" value="TQO"><span>✈ {{ t('quote.tulum') }} (TQO)</span></label>
      </div>
      <div class="quote-grid">
        <label><span>⌖ {{ t('quote.destination') }}</span><input v-model.trim="quote.destination" required :placeholder="t('quote.destinationPlaceholder')"></label>
        <label class="location-link-field"><span>↗ {{ locale === 'es' ? 'Enlace de ubicación (opcional)' : 'Location link (optional)' }}</span><input v-model.trim="quote.locationUrl" type="url" inputmode="url" placeholder="https://maps.app.goo.gl/..."></label>
        <label><span>♙ {{ t('quote.passengers') }}</span><select v-model="quote.passengers" required><option v-for="n in 19" :key="n" :value="String(n)">{{ n }} {{ locale === 'es' ? (n === 1 ? 'Pasajero' : 'Pasajeros') : (n === 1 ? 'Passenger' : 'Passengers') }}</option></select></label>
        <label><span>▦ {{ locale === 'es' ? 'Fecha y hora' : 'Date and time' }}</span><input v-model="quote.date" type="datetime-local" required></label>
      </div>
      <p class="location-help">{{ locale === 'es' ? 'Si lo deseas, abre tu alojamiento en Google Maps, pulsa Compartir y pega el enlace. No es obligatorio.' : 'If needed, open your accommodation in Google Maps, tap Share and paste the link. This is optional.' }}</p>
      <div class="quote-submit"><small>{{ t('quote.disclaimer') }}</small><a :href="quoteReady ? quoteWhatsapp : null" :aria-disabled="!quoteReady" target="_blank" rel="noopener" class="btn btn-whatsapp" @click="!quoteReady && $event.preventDefault()">{{ t('quote.button') }} →</a></div>
    </form>
  </section>

  <section class="why-caribego-section">
    <div class="container">
      <div class="why-caribego-heading">
        <span class="eyebrow dark">CARIBEGO</span>
        <h2>{{ locale === 'es' ? '¿Por qué CaribeGo?' : 'Why CaribeGo?' }}</h2>
        <p>{{ locale === 'es' ? 'Tu traslado privado, coordinado de forma sencilla y con atención humana.' : 'Your private transfer, easily coordinated with personal assistance.' }}</p>
      </div>
      <div class="why-caribego-grid">
        <article v-for="item in homeBenefits" :key="item.id" class="why-caribego-card">
          <span class="why-caribego-icon" aria-hidden="true">
            <svg v-if="item.id === 'payment'" viewBox="0 0 48 48"><rect x="6" y="11" width="36" height="25" rx="3"/><path d="M6 18h36M13 30h7M29 27l3 3 6-7"/></svg>
            <svg v-else-if="item.id === 'whatsapp'" viewBox="0 0 48 48"><path d="M39 23a15 15 0 0 1-22 13l-8 2 2-8A15 15 0 1 1 39 23Z"/><path d="M18 16c1 8 6 13 14 15M18 16l4 5-3 3M32 31l-5-4-3 3"/></svg>
            <svg v-else-if="item.id === 'vehicle'" viewBox="0 0 48 48"><path d="M6 16h24v19H6zM30 23h7l5 6v6H30zM11 35a4 4 0 1 0 8 0M32 35a4 4 0 1 0 8 0M10 21h16"/></svg>
            <svg v-else viewBox="0 0 48 48"><path d="M24 5 40 11v11c0 10-6 17-16 22C14 39 8 32 8 22V11Z"/><path d="m16 24 6 6 11-13"/></svg>
          </span>
          <div>
            <h3>{{ item.title[locale] }}</h3>
            <strong v-if="item.id === 'payment'" class="benefit-highlight">
              {{ item.highlight?.[locale] || (locale === 'es' ? 'Sin pago anticipado' : 'No prepayment required') }}
            </strong>
            <p>{{ item.text[locale] }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="home-fleet-section">
    <div class="container">
      <div class="home-fleet-heading">
        <div><span class="eyebrow dark">{{ locale === 'es' ? 'Nuestra flota' : 'Our fleet' }}</span><h2>{{ locale === 'es' ? 'El vehículo ideal para tu viaje' : 'The right vehicle for your trip' }}</h2><p>{{ locale === 'es' ? 'Opciones privadas para parejas, familias y grupos.' : 'Private options for couples, families and groups.' }}</p></div>
        <div class="fleet-controls"><button type="button" :aria-label="locale === 'es' ? 'Anterior' : 'Previous'" @click="manualFleetMove(-1)">←</button><button type="button" :aria-label="locale === 'es' ? 'Siguiente' : 'Next'" @click="manualFleetMove(1)">→</button></div>
      </div>
      <div ref="fleetSlider" class="fleet-slider" @mouseenter="stopFleetAutoplay" @mouseleave="startFleetAutoplay" @focusin="stopFleetAutoplay" @focusout="startFleetAutoplay" @touchstart.passive="stopFleetAutoplay" @touchend.passive="startFleetAutoplay">
        <article v-for="vehicle in vehicles" :key="vehicle.id" class="vehicle-card fleet-slide">
          <img :src="vehicle.image" :alt="vehicle.name" loading="lazy">
          <h3>{{ vehicle.name }} <small>{{ vehicle.passengers }} pax</small></h3>
          <div class="vehicle-tags"><span>● {{ vehicle.passengers }} pax</span><span>▣ {{ vehicle.luggage }} {{ locale === 'es' ? 'maletas' : 'bags' }}</span><span>★ {{ vehicle.ideal[locale] }}</span></div>
          <a :href="vehicleWhatsapp(vehicle)" target="_blank" rel="noopener" class="service-button">{{ locale === 'es' ? 'Cotizar este vehículo' : 'Quote this vehicle' }}</a>
        </article>
      </div>
    </div>
  </section>

  <section class="home-coverage-strip"><div class="container"><strong>{{ locale === 'es' ? 'Cobertura' : 'Service area' }}</strong><span>Cancún · Playa del Carmen · Tulum · Puerto Morelos · Riviera Maya</span></div></section>
</template>
