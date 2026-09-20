<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { services } from '../data/services'
import { whatsappLink } from '../config/site'
import { interestMessage } from '../config/whatsappMessages'

const { locale } = useI18n()
const serviceWhatsapp = service => whatsappLink(interestMessage(locale.value, service.title[locale.value], 'service'))
const subtitle = computed(() => locale.value === 'es'
  ? 'Soluciones completas para tus traslados en Cancún, Tulum y Riviera Maya.'
  : 'Complete transportation solutions in Cancún, Tulum and the Riviera Maya.')
</script>

<template>
  <section class="page-hero compact-page-hero">
    <div class="container centered"><span class="eyebrow dark">CARIBEGO</span><h1>{{ locale === 'es' ? 'Nuestros servicios de transporte privado' : 'Our private transportation services' }}</h1><p>{{ subtitle }}</p></div>
  </section>
  <section class="section services-section">
    <div class="container service-grid">
      <article v-for="service in services" :key="service.id" class="service-card">
        <img :src="service.image" :alt="service.title[locale]" loading="lazy">
        <div class="service-copy"><span class="service-icon">{{ service.icon }}</span><div><h3>{{ service.title[locale] }}</h3><p>{{ service.description[locale] }}</p></div></div>
        <div class="service-card-actions">
          <RouterLink :to="`/servicio/${service.id}`" class="service-detail-link">{{ locale === 'es' ? 'Ver detalles' : 'View details' }}</RouterLink>
          <a :href="serviceWhatsapp(service)" target="_blank" rel="noopener" class="service-button">{{ locale === 'es' ? 'Cotizar ahora' : 'Get a quote' }}</a>
        </div>
      </article>
    </div>
  </section>
</template>
