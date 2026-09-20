<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { tours } from '../data/tours'
import { whatsappLink } from '../config/site'
import { interestMessage } from '../config/whatsappMessages'

const route = useRoute()
const { locale, t } = useI18n()
const tour = computed(() => tours.find(x => x.slug === route.params.slug))

const whatsapp = computed(() => {
  if (!tour.value) return '#'
  return whatsappLink(interestMessage(locale.value, tour.value.name[locale.value], 'tour'))
})
</script>

<template>
  <div v-if="tour">
    <section class="detail-hero">
      <img :src="tour.image" :alt="tour.name[locale]">
      <div class="detail-overlay"></div>
      <div class="container detail-title"><RouterLink to="/tours">← {{ t('detail.back') }}</RouterLink><h1>{{ tour.name[locale] }}</h1></div>
    </section>
    <section class="section">
      <div class="container detail-layout">
        <div>
          <p class="lead">{{ tour.short[locale] }}</p>
          <div class="gallery-grid">
            <img v-for="(image, i) in tour.gallery" :key="i" :src="image" :alt="tour.name[locale]" loading="lazy">
          </div>
        </div>
        <aside class="info-card">
          <span class="eyebrow dark">{{ t('tours.duration') }}</span>
          <h3>{{ tour.duration[locale] }}</h3>
          <hr>
          <h3>{{ t('detail.includes') }}</h3>
          <ul><li v-for="item in tour.includes[locale]" :key="item">✓ {{ item }}</li></ul>
          <h3>{{ t('detail.notIncludes') }}</h3>
          <ul><li v-for="item in tour.notIncludes[locale]" :key="item">· {{ item }}</li></ul>
          <a :href="whatsapp" target="_blank" rel="noopener" class="btn btn-primary full">{{ t('detail.info') }}</a>
        </aside>
      </div>
    </section>
  </div>
  <div v-else class="section centered"><h2>{{ locale === 'es' ? 'Tour no encontrado' : 'Tour not found' }}</h2></div>
</template>
