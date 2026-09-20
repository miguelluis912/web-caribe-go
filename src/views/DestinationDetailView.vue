<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { destinations } from '../data/destinations'
import { whatsappLink } from '../config/site'
import { interestMessage } from '../config/whatsappMessages'

const route = useRoute()
const { locale } = useI18n()
const destination = computed(() => destinations.find(item => item.slug === route.params.slug))
const whatsapp = computed(() => destination.value ? whatsappLink(interestMessage(locale.value, destination.value.name[locale.value], 'destination')) : '#')
</script>

<template>
  <div v-if="destination">
    <section class="service-detail-hero"><img :src="destination.image" :alt="destination.name[locale]"><div class="detail-overlay"></div><div class="container service-detail-title"><RouterLink to="/destinos">← {{ locale === 'es' ? 'Volver a destinos' : 'Back to destinations' }}</RouterLink><span class="service-icon">⌖</span><h1>{{ destination.name[locale] }}</h1></div></section>
    <section class="section"><div class="container service-detail-layout"><div><span class="eyebrow dark">{{ locale === 'es' ? 'Información del destino' : 'Destination information' }}</span><h2>{{ destination.name[locale] }}</h2><p class="lead">{{ destination.description[locale] }}</p><div class="destination-airport-detail"><small>{{ locale === 'es' ? 'Aeropuerto recomendado' : 'Recommended airport' }}</small><strong>✈ {{ destination.airport[locale] }}</strong></div><ul class="feature-list"><li v-for="item in destination.highlights[locale]" :key="item">✓ {{ item }}</li></ul></div><aside class="info-card"><h3>{{ locale === 'es' ? 'Solicita tu traslado' : 'Request your transfer' }}</h3><p>{{ locale === 'es' ? 'Compártenos el hotel, fecha y número de pasajeros. Confirmaremos la unidad y disponibilidad por WhatsApp.' : 'Share your hotel, date and passenger count. We will confirm the vehicle and availability on WhatsApp.' }}</p><a :href="whatsapp" target="_blank" rel="noopener" class="btn btn-primary full">{{ locale === 'es' ? 'Reservar' : 'Book' }} →</a></aside></div></section>
    <section v-if="destination.gallery" class="destination-gallery-section">
      <div class="container">
        <div class="destination-gallery-heading"><span class="eyebrow dark">{{ locale === 'es' ? 'Conoce el destino' : 'Discover the destination' }}</span><h2>{{ locale === 'es' ? `Postales de ${destination.name[locale]}` : `${destination.name[locale]} highlights` }}</h2><p>{{ locale === 'es' ? 'Una mirada a algunos de los paisajes y lugares que hacen especial esta zona del Caribe Mexicano.' : 'A glimpse of the scenery and places that make this part of the Mexican Caribbean special.' }}</p></div>
        <div class="destination-photo-grid">
          <figure v-for="(photo, index) in destination.gallery" :key="photo.image" :class="{ featured: index === 0 }"><img :src="photo.image" :alt="photo.alt[locale]" loading="lazy"><figcaption>{{ photo.alt[locale] }}</figcaption></figure>
        </div>
      </div>
    </section>
  </div>
  <section v-else class="section centered"><h2>{{ locale === 'es' ? 'Destino no encontrado' : 'Destination not found' }}</h2><RouterLink to="/destinos" class="btn btn-primary">{{ locale === 'es' ? 'Ver destinos' : 'View destinations' }}</RouterLink></section>
</template>
