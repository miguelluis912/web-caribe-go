<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { vehicles } from '../data/vehicles'
import { aboutValues } from '../data/about'
import { whatsappLink } from '../config/site'
import { interestMessage } from '../config/whatsappMessages'

const { locale } = useI18n()
const selectedVehicle = ref(null)

const openVehicle = vehicle => { selectedVehicle.value = vehicle }
const closeVehicle = () => { selectedVehicle.value = null }
const handleEscape = event => { if (event.key === 'Escape') closeVehicle() }

watch(selectedVehicle, vehicle => {
  document.body.classList.toggle('modal-open', Boolean(vehicle))
  if (vehicle) window.addEventListener('keydown', handleEscape)
  else window.removeEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  document.body.classList.remove('modal-open')
  window.removeEventListener('keydown', handleEscape)
})

const vehicleWhatsapp = vehicle => whatsappLink(interestMessage(locale.value, `${vehicle.name} · ${vehicle.passengers} pax`, 'vehicle'))

const generalWhatsapp = computed(() => whatsappLink(interestMessage(locale.value, locale.value === 'es' ? 'Flota y transporte privado' : 'Fleet and private transportation', 'service')))

const content = computed(() => locale.value === 'es' ? {
  eyebrow: 'Nosotros',
  title: 'Nuestra flota, preparada para cada viaje',
  intro: 'Vehículos privados para parejas, familias y grupos. Seleccionamos la unidad adecuada según pasajeros, equipaje y tipo de servicio.',
  storyTitle: 'Tu viaje comienza con una atención clara y personal',
  story: 'Coordinamos traslados en Cancún, Tulum y Riviera Maya mediante atención directa por WhatsApp. Nuestro objetivo es que cada viajero conozca su opción de transporte antes de llegar y pueda resolver cualquier duda con una persona.',
  coverage: 'Cobertura de servicio', coverageText: 'Aeropuertos de Cancún y Tulum · Zona Hotelera · Playa del Carmen · Puerto Morelos · Riviera Maya',
  cta: 'Cuéntanos cuántas personas viajan y a dónde se dirigen. Te ayudamos a elegir el vehículo apropiado.',
  quote: 'Cotizar este vehículo', detail: 'Ver detalle', close: 'Cerrar', capacity: 'Capacidad de servicio', luggage: 'Equipaje estimado', features: 'Características', availability: 'La unidad y su configuración pueden variar según disponibilidad. Confirmamos capacidad y equipaje antes de reservar.', contact: 'Solicitar información'
} : {
  eyebrow: 'About us',
  title: 'Our fleet, ready for every trip',
  intro: 'Private vehicles for couples, families and groups. We select the right vehicle based on passenger count, luggage and service type.',
  storyTitle: 'Your trip starts with clear, personal service',
  story: 'We coordinate transfers in Cancún, Tulum and the Riviera Maya through direct WhatsApp assistance. Our goal is to help every traveler understand their transportation options before arrival and resolve questions with a real person.',
  coverage: 'Service area', coverageText: 'Cancún and Tulum Airports · Hotel Zone · Playa del Carmen · Puerto Morelos · Riviera Maya',
  cta: 'Tell us how many people are traveling and their destination. We will help you choose the right vehicle.',
  quote: 'Request a quote', detail: 'View details', close: 'Close', capacity: 'Passenger capacity', luggage: 'Estimated luggage capacity', features: 'Features', availability: 'The vehicle and configuration may vary depending on availability. We confirm passenger and luggage capacity before booking.', contact: 'Request information'
})
</script>

<template>
  <section class="page-hero about-hero">
    <div class="container centered">
      <span class="eyebrow dark">{{ content.eyebrow }}</span>
      <h1>{{ content.title }}</h1>
      <p>{{ content.intro }}</p>
    </div>
  </section>

  <section class="section fleet-section">
    <div class="container vehicle-grid">
      <article v-for="vehicle in vehicles" :key="vehicle.id" class="vehicle-card">
        <img :src="vehicle.image" :alt="vehicle.name" loading="lazy">
        <h3>{{ vehicle.name }} <small>{{ vehicle.passengers }} pax</small></h3>
        <div class="vehicle-tags">
          <span>● {{ vehicle.passengers }} pax</span>
          <span>▣ {{ vehicle.luggage }} {{ locale === 'es' ? 'maletas' : 'bags' }}</span>
          <span>★ {{ vehicle.ideal[locale] }}</span>
        </div>
        <div class="vehicle-actions">
          <button type="button" class="vehicle-detail-button" @click="openVehicle(vehicle)">{{ content.detail }}</button>
          <a :href="vehicleWhatsapp(vehicle)" target="_blank" rel="noopener" class="service-button">{{ content.quote }}</a>
        </div>
      </article>
    </div>
  </section>

  <Teleport to="body">
    <div v-if="selectedVehicle" class="vehicle-modal-backdrop" role="presentation" @click.self="closeVehicle">
      <section class="vehicle-modal" role="dialog" aria-modal="true" :aria-labelledby="`vehicle-title-${selectedVehicle.id}`">
        <button type="button" class="vehicle-modal-close" :aria-label="content.close" @click="closeVehicle">×</button>
        <div class="vehicle-modal-image"><img :src="selectedVehicle.image" :alt="selectedVehicle.name"></div>
        <div class="vehicle-modal-content">
          <span class="vehicle-modal-category">{{ selectedVehicle.category[locale] }}</span>
          <h2 :id="`vehicle-title-${selectedVehicle.id}`">{{ selectedVehicle.name }}</h2>
          <p>{{ selectedVehicle.description[locale] }}</p>
          <div class="vehicle-modal-stats">
            <div><strong>{{ selectedVehicle.passengers }}</strong><span>{{ content.capacity }} · pax</span></div>
            <div><strong>{{ selectedVehicle.luggage }}</strong><span>{{ content.luggage }}</span></div>
          </div>
          <h3>{{ content.features }}</h3>
          <ul><li v-for="feature in selectedVehicle.features[locale]" :key="feature">{{ feature }}</li></ul>
          <small>{{ content.availability }}</small>
          <a :href="vehicleWhatsapp(selectedVehicle)" target="_blank" rel="noopener" class="btn btn-primary">{{ content.quote }} →</a>
        </div>
      </section>
    </div>
  </Teleport>

  <section class="section about-content-section">
    <div class="container about-intro-grid">
      <div><span class="eyebrow dark">CARIBEGO</span><h2>{{ content.storyTitle }}</h2></div>
      <p>{{ content.story }}</p>
    </div>
    <div class="container about-values">
      <article v-for="value in aboutValues" :key="value.id"><span>{{ String(value.id).padStart(2, '0') }}</span><h3>{{ value.title[locale] }}</h3><p>{{ value.text[locale] }}</p></article>
    </div>
  </section>

  <section class="about-coverage">
    <div class="container about-coverage-inner">
      <div><span class="eyebrow">{{ content.coverage }}</span><h2>{{ content.coverageText }}</h2><p>{{ content.cta }}</p></div>
      <a :href="generalWhatsapp" target="_blank" rel="noopener" class="btn btn-primary">{{ content.contact }} →</a>
    </div>
  </section>
</template>
