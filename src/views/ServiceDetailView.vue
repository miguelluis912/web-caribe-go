<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { services } from '../data/services'
import { whatsappLink } from '../config/site'
import { interestMessage } from '../config/whatsappMessages'

const route = useRoute()
const { locale } = useI18n()
const service = computed(() => services.find(item => item.id === Number(route.params.id)))
const whatsapp = computed(() => service.value ? whatsappLink(interestMessage(locale.value, service.value.title[locale.value], 'service')) : '#')
</script>

<template>
  <div v-if="service" class="service-detail-page">
    <section class="service-detail-hero">
      <img :src="service.image" :alt="service.title[locale]">
      <div class="detail-overlay"></div>
      <div class="container service-detail-title"><RouterLink to="/servicios">← {{ locale === 'es' ? 'Volver a servicios' : 'Back to services' }}</RouterLink><span class="service-icon">{{ service.icon }}</span><h1>{{ service.title[locale] }}</h1></div>
    </section>
    <section class="section">
      <div class="container service-detail-layout">
        <div><span class="eyebrow dark">{{ locale === 'es' ? 'Acerca del servicio' : 'About this service' }}</span><h2>{{ service.title[locale] }}</h2><p class="lead">{{ service.description[locale] }}</p><ul class="feature-list"><li v-for="feature in service.features[locale]" :key="feature">✓ {{ feature }}</li></ul></div>
        <aside class="info-card"><h3>{{ locale === 'es' ? 'Solicita tu cotización' : 'Request a quote' }}</h3><p>{{ locale === 'es' ? 'Compártenos la fecha, número de pasajeros y destino. Confirmaremos precio y disponibilidad por WhatsApp.' : 'Share your date, passenger count and destination. We will confirm price and availability on WhatsApp.' }}</p><a :href="whatsapp" target="_blank" rel="noopener" class="btn btn-primary full">{{ locale === 'es' ? 'Reservar' : 'Book' }} →</a></aside>
      </div>
    </section>
  </div>
  <section v-else class="section centered"><h2>{{ locale === 'es' ? 'Servicio no encontrado' : 'Service not found' }}</h2><RouterLink to="/servicios" class="btn btn-primary">{{ locale === 'es' ? 'Ver servicios' : 'View services' }}</RouterLink></section>
</template>
