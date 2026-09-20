<script setup>
import { useI18n } from 'vue-i18n'
import TourCard from '../components/TourCard.vue'
import { tours } from '../data/tours'
const { t } = useI18n()
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <span class="eyebrow">{{ t('nav.tours') }}</span>
      <h1>{{ t('tours.title') }}</h1>
      <p>{{ t('tours.subtitle') }}</p>
    </div>
  </section>
  <section class="section">
    <div class="container tour-grid">
      <TourCard v-for="tour in tours" :key="tour.id" :tour="tour" />
    </div>
  </section>
</template>