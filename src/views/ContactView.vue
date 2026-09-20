<script setup>
import { computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { siteConfig, whatsappLink } from '../config/site'
import { buildWhatsappMessage, interestMessage } from '../config/whatsappMessages'

const { locale } = useI18n()
const form = reactive({ name: '', phone: '', service: '', message: '' })
const ready = computed(() => form.name && form.service && form.message)

const formWhatsapp = computed(() => {
  const es = locale.value === 'es'
  return whatsappLink(buildWhatsappMessage({
    locale: locale.value,
    title: es ? 'SOLICITUD DE INFORMACIÓN' : 'INFORMATION REQUEST',
    intro: es ? 'Hola, envío los datos de mi consulta:' : 'Hello, here are my request details:',
    fields: [
      { label: es ? 'Nombre' : 'Name', value: form.name },
      { label: es ? 'Teléfono' : 'Phone', value: form.phone },
      { label: es ? 'Servicio' : 'Service', value: form.service },
      { label: es ? 'Mensaje' : 'Message', value: form.message }
    ],
    question: es
      ? '¿Podrían ayudarme con información y disponibilidad?'
      : 'Could you help me with information and availability?'
  }))
})

const directWhatsapp = computed(() => whatsappLink(interestMessage(
  locale.value,
  locale.value === 'es' ? 'Información general de servicios' : 'General service information',
  'service'
)))
</script>

<template>
  <section class="page-hero contact-hero">
    <div class="container centered">
      <span class="eyebrow dark">{{ locale === 'es' ? 'Contacto' : 'Contact' }}</span>
      <h1>{{ locale === 'es' ? 'Estamos listos para ayudarte' : 'We are ready to help' }}</h1>
      <p>{{ locale === 'es'
        ? 'Cuéntanos qué traslado necesitas y te atenderemos personalmente.'
          : 'Tell us what transportation you need, and we will assist you personally.' }}</p>
    </div>
  </section>

  <section class="section contact-section">
    <div class="container contact-layout">
      <div class="contact-info">
        <span class="eyebrow dark">CARIBEGO</span>
        <h2>{{ locale === 'es' ? 'Información de contacto' : 'Contact information' }}</h2>
        <div class="contact-info-grid">
          <article><span>◉</span><div><strong>{{ locale === 'es' ? 'Atención directa' : 'Direct assistance' }}</strong><p>{{ siteConfig.phone.display }}</p></div></article>
          <article><span>◷</span><div><strong>{{ locale === 'es' ? 'Atención' : 'Support' }}</strong><p>{{ locale === 'es' ? 'Disponible para solicitudes y seguimiento' : 'Available for requests and follow-up' }}</p></div></article>
          <article><span>⌖</span><div><strong>{{ locale === 'es' ? 'Cobertura' : 'Service area' }}</strong><p>Cancún · Tulum · Riviera Maya</p></div></article>
          <article><span>文</span><div><strong>{{ locale === 'es' ? 'Idiomas' : 'Languages' }}</strong><p>Español · English</p></div></article>
        </div>
        <a :href="directWhatsapp" target="_blank" rel="noopener" class="btn btn-primary">
          {{ locale === 'es' ? 'Hablar con un asesor' : 'Talk to an advisor' }} →
        </a>
      </div>

      <form class="contact-form" @submit.prevent>
        <h2>{{ locale === 'es' ? 'Envía tu consulta' : 'Send your request' }}</h2>
        <label><span>{{ locale === 'es' ? 'Nombre' : 'Name' }} *</span><input v-model.trim="form.name" required></label>
        <label><span>{{ locale === 'es' ? 'Teléfono (opcional)' : 'Phone (optional)' }}</span><input v-model.trim="form.phone" type="tel"></label>
        <label>
          <span>{{ locale === 'es' ? 'Tipo de servicio' : 'Service type' }} *</span>
          <select v-model="form.service" required>
            <option value="" disabled>{{ locale === 'es' ? 'Seleccionar' : 'Select' }}</option>
            <option>{{ locale === 'es' ? 'Traslado aeropuerto' : 'Airport transfer' }}</option>
            <option>{{ locale === 'es' ? 'Hotel a hotel' : 'Hotel to hotel' }}</option>
            <option>{{ locale === 'es' ? 'Viaje redondo' : 'Round trip' }}</option>
            <option>{{ locale === 'es' ? 'Tour privado' : 'Private tour' }}</option>
            <option>{{ locale === 'es' ? 'Otro servicio' : 'Other service' }}</option>
          </select>
        </label>
        <label><span>{{ locale === 'es' ? 'Mensaje' : 'Message' }} *</span><textarea v-model.trim="form.message" required rows="5"></textarea></label>
        <a :href="ready ? formWhatsapp : null" :aria-disabled="!ready" target="_blank" rel="noopener" class="btn btn-whatsapp full" @click="!ready && $event.preventDefault()">
          {{ locale === 'es' ? 'Enviar consulta' : 'Send request' }} →
        </a>
        <small>{{ locale === 'es'
          ? 'No almacenamos tus datos. Se abrirá el canal de atención para enviar tu consulta.'
          : 'We do not store your information. WhatsApp will open so you can send your request.' }}</small>
      </form>
    </div>
  </section>

  <section class="section contact-faq">
    <div class="container faq-layout">
      <div><span class="eyebrow dark">FAQ</span><h2>{{ locale === 'es' ? 'Preguntas rápidas' : 'Quick questions' }}</h2></div>
      <div class="faq-list">
        <details><summary>{{ locale === 'es' ? '¿Necesito pagar anticipadamente?' : 'Do I need to pay in advance?' }}<span>+</span></summary><p>{{ locale === 'es' ? 'La disponibilidad, precio y forma de pago se confirman personalmente al solicitar la cotización.' : 'Availability, pricing and payment terms are confirmed directly when you request a quote.' }}</p></details>
        <details><summary>{{ locale === 'es' ? '¿Puedo reservar un viaje redondo?' : 'Can I book a round trip?' }}<span>+</span></summary><p>{{ locale === 'es' ? 'Sí. Comparte las fechas y horarios de llegada y salida para preparar la cotización.' : 'Yes. Share your arrival and departure dates and times to prepare the quote.' }}</p></details>
        <details><summary>{{ locale === 'es' ? '¿Qué información necesito para cotizar?' : 'What information is needed for a quote?' }}<span>+</span></summary><p>{{ locale === 'es' ? 'Aeropuerto, hotel o destino, fecha, hora y número de pasajeros.' : 'Airport, hotel or destination, date, time and passenger count.' }}</p></details>
      </div>
    </div>
  </section>
</template>
