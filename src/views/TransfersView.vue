<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { siteConfig, whatsappLink } from '../config/site'
import { vehicles } from '../data/vehicles'
import { interestMessage } from '../config/whatsappMessages'
const { t, locale } = useI18n()
const whatsapp = computed(() => {
  return whatsappLink(interestMessage(locale.value, locale.value === 'es' ? 'Traslado aeropuerto a hotel' : 'Airport to hotel transfer', 'service'))
})
const vehicleWhatsapp = vehicle => whatsappLink(interestMessage(locale.value, `${vehicle.name} · ${vehicle.passengers} pax`, 'vehicle'))
</script>

<template>
  <section class="transfer-page">
    <div class="container transfer-page-inner">
      <div>
        <span class="eyebrow">{{ t('transfer.eyebrow') }}</span>
        <h1>{{ t('transfer.title') }}</h1>
        <p>{{ t('transfer.text') }}</p>
        <a :href="whatsapp" target="_blank" rel="noopener" class="btn btn-primary">{{ t('transfer.quote') }} →</a>
      </div>
      <div class="transfer-visual" :style="{ backgroundImage: `url(${siteConfig.images.transfer})` }">
        <div class="route-card">
          <span>✈</span><div><strong>{{ t('transfer.round') }}</strong><small>Cancún · Riviera Maya</small></div>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="section-heading centered-heading">
        <div><span class="eyebrow dark">{{ locale === 'es' ? 'Nuestra flota' : 'Our fleet' }}</span><h2>{{ locale === 'es' ? 'Vehículos para cada necesidad' : 'A vehicle for every need' }}</h2><p>{{ locale === 'es' ? 'Opciones privadas para parejas, familias y grupos.' : 'Private options for couples, families and groups.' }}</p></div>
      </div>
      <div class="vehicle-grid">
        <article v-for="vehicle in vehicles" :key="vehicle.id" class="vehicle-card">
          <img :src="vehicle.image" :alt="vehicle.name" loading="lazy">
          <h3>{{ vehicle.name }} <small>{{ vehicle.passengers }} pax</small></h3>
          <div class="vehicle-tags"><span>● {{ vehicle.passengers }} pax</span><span>▣ {{ vehicle.luggage }} {{ locale === 'es' ? 'maletas' : 'bags' }}</span><span>★ {{ vehicle.ideal[locale] }}</span></div>
          <a :href="vehicleWhatsapp(vehicle)" target="_blank" rel="noopener" class="service-button">{{ locale === 'es' ? 'Cotizar este vehículo' : 'Quote this vehicle' }}</a>
        </article>
      </div>
      <p class="note">{{ t('transfer.note') }}</p>
    </div>
  </section>
</template>
