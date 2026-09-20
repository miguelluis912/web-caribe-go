<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { locale } = useI18n()
</script>

<template>
  <section class="page-hero not-found-page">
    <div class="container centered">
      <span class="eyebrow dark">404</span>
      <h1>{{ locale === 'es' ? 'Página no encontrada' : 'Page not found' }}</h1>
      <p>{{ locale === 'es' ? 'La dirección que intentaste abrir no existe o cambió.' : 'The page you tried to open does not exist or has moved.' }}</p>
      <RouterLink to="/" class="btn btn-primary">{{ locale === 'es' ? 'Volver al inicio' : 'Back to home' }}</RouterLink>
    </div>
  </section>
</template>
