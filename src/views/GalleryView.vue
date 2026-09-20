<script setup>
import { useI18n } from 'vue-i18n'
import { tours } from '../data/tours'
const { t, locale } = useI18n()
const images = tours.flatMap(tour => tour.gallery).slice(0, 8)
</script>

<template>
  <section class="page-hero">
    <div class="container"><span class="eyebrow">{{ t('nav.gallery') }}</span><h1>{{ t('gallery.title') }}</h1><p>{{ t('gallery.subtitle') }}</p></div>
  </section>
  <section class="section">
    <div class="container masonry">
      <img v-for="(image, i) in images" :key="i" :src="image" :alt="locale === 'es' ? 'Experiencia en el Caribe Mexicano' : 'Mexican Caribbean experience'" loading="lazy">
    </div>
  </section>
</template>
