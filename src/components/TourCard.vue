<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { whatsappLink } from '../config/site'
import { interestMessage } from '../config/whatsappMessages'

const props = defineProps({ tour: Object })
const { locale, t } = useI18n()

const url = computed(() => {
  return whatsappLink(interestMessage(locale.value, props.tour.name[locale.value], 'tour'))
})
</script>

<template>
  <article class="tour-card">
    <RouterLink :to="`/tour/${tour.slug}`" class="tour-image">
      <img :src="tour.image" :alt="tour.name[locale]" loading="lazy">
      <span class="duration">{{ tour.duration[locale] }}</span>
    </RouterLink>
    <div class="tour-body">
      <h3>{{ tour.name[locale] }}</h3>
      <p>{{ tour.short[locale] }}</p>
      <div class="tour-actions">
        <RouterLink :to="`/tour/${tour.slug}`" class="text-link">{{ t('tours.details') }} →</RouterLink>
        <a :href="url" target="_blank" rel="noopener" class="mini-wa">{{ locale === 'es' ? 'Reservar' : 'Book' }}</a>
      </div>
    </div>
  </article>
</template>
