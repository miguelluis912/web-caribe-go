<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { destinations } from '../data/destinations'
import { whatsappLink } from '../config/site'
import { buildWhatsappMessage, interestMessage } from '../config/whatsappMessages'

const { locale } = useI18n()
const contact = computed(() => whatsappLink(buildWhatsappMessage({ locale: locale.value, title: locale.value === 'es' ? 'CONSULTA DE COBERTURA' : 'SERVICE AREA REQUEST', intro: locale.value === 'es' ? 'Hola, mi destino no aparece en la página.' : 'Hello, my destination is not listed.', question: locale.value === 'es' ? '¿Podrían confirmarme si tienen cobertura?' : 'Could you confirm if it is within your service area?' })))
const destinationWhatsapp = item => whatsappLink(interestMessage(locale.value, item.name[locale.value], 'destination'))
</script>

<template>
  <section class="page-hero destination-page-hero">
    <div class="container centered"><span class="eyebrow dark">{{ locale === 'es' ? 'Destinos' : 'Destinations' }}</span><h1>{{ locale === 'es' ? 'Llega cómodamente a tu destino' : 'Travel comfortably to your destination' }}</h1><p>{{ locale === 'es' ? 'Traslados privados desde los aeropuertos de Cancún y Tulum hacia las principales zonas del Caribe Mexicano.' : 'Private transfers from Cancún and Tulum airports to the top destinations in the Mexican Caribbean.' }}</p></div>
  </section>
  <section class="section destinations-section">
    <div class="container destination-card-grid">
      <article v-for="item in destinations" :key="item.id" class="destination-card">
        <img :src="item.image" :alt="item.name[locale]" loading="lazy">
        <div class="destination-card-body"><span class="destination-airport">✈ {{ item.airport[locale] }}</span><h2>{{ item.name[locale] }}</h2><p>{{ item.short[locale] }}</p><div class="destination-actions"><RouterLink :to="`/destino/${item.slug}`" class="service-detail-link">{{ locale === 'es' ? 'Ver destino' : 'View destination' }}</RouterLink><a :href="destinationWhatsapp(item)" target="_blank" rel="noopener" class="service-button">{{ locale === 'es' ? 'Reservar' : 'Book' }}</a></div></div>
      </article>
    </div>
  </section>
  <section class="destination-help"><div class="container destination-help-inner"><div><h2>{{ locale === 'es' ? '¿Tu destino no aparece?' : 'Is your destination not listed?' }}</h2><p>{{ locale === 'es' ? 'Envíanos el nombre o el enlace de ubicación del hotel y confirmaremos la cobertura.' : 'Send us the hotel name or location link and we will confirm coverage.' }}</p></div><a :href="contact" target="_blank" rel="noopener" class="btn btn-primary">{{ locale === 'es' ? 'Reservar' : 'Book' }} →</a></div></section>
</template>
