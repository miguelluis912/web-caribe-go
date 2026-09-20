import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import ToursView from './views/ToursView.vue'
import TourDetailView from './views/TourDetailView.vue'
import TransfersView from './views/TransfersView.vue'
import GalleryView from './views/GalleryView.vue'
import ServicesView from './views/ServicesView.vue'
import ServiceDetailView from './views/ServiceDetailView.vue'
import AboutView from './views/AboutView.vue'
import DestinationsView from './views/DestinationsView.vue'
import DestinationDetailView from './views/DestinationDetailView.vue'
import ContactView from './views/ContactView.vue'
import NotFoundView from './views/NotFoundView.vue'
import './style.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/tours', component: ToursView },
    { path: '/tour/:slug', component: TourDetailView },
    { path: '/traslados', component: TransfersView },
    { path: '/galeria', component: GalleryView },
    { path: '/servicios', component: ServicesView },
    { path: '/servicio/:id', component: ServiceDetailView },
    { path: '/nosotros', component: AboutView },
    { path: '/destinos', component: DestinationsView },
    { path: '/destino/:slug', component: DestinationDetailView },
    { path: '/contacto', component: ContactView },
    { path: '/:pathMatch(.*)*', component: NotFoundView }
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 88 }
    return { top: 0 }
  }
})

const messages = {
  es: {
    nav: { home: 'Inicio', tours: 'Tours', transfers: 'Traslados', gallery: 'Galería', services: 'Servicios', destinations: 'Destinos', about: 'Nosotros', contact: 'Contacto', menu: 'Abrir menú' },
    hero: {
      eyebrow: 'Traslados privados en el Caribe Mexicano',
      title: 'Viaja cómodo desde que aterrizas',
      text: 'Traslados privados desde los aeropuertos de Cancún y Tulum hacia tu hotel. Atención directa, conductores profesionales y sin pago anticipado.',
      tours: 'Descubrir tours',
      transfer: 'Conocer traslados'
    },
    quote: {
      eyebrow: 'Cotización por WhatsApp', title: 'Reserva tu traslado privado', text: 'Completa los datos principales y recibe atención personalizada por WhatsApp.',
      airport: 'Aeropuerto', direction: 'Trayecto', destination: 'Hotel o destino', date: 'Fecha', passengers: 'Pasajeros', service: 'Tipo de servicio', flight: 'Número de vuelo',
      choose: 'Seleccionar', cancun: 'Aeropuerto de Cancún', tulum: 'Aeropuerto de Tulum', toHotel: 'Aeropuerto → hotel o destino', toAirport: 'Hotel o destino → aeropuerto', destinationPlaceholder: 'Ej. Hotel en Playa del Carmen', optional: 'Opcional', shared: 'Colectivo', private: 'Privado', luxury: 'Lujo',
      message: 'Hola, solicito una cotización de transporte turístico con los siguientes datos:',
      messageTitle: '*SOLICITUD DE COTIZACIÓN - TRASLADO*', greeting: 'Hola,', messageIntro: 'Me gustaría cotizar el siguiente servicio:', messageQuestion: '¿Podrían confirmarme el precio, la disponibilidad y las condiciones del servicio?', messageThanks: 'Gracias.',
      button: 'Reservar', disclaimer: 'Sin pago en línea. Confirmaremos disponibilidad y precio personalmente.'
    },
    home: {
      title: 'Experiencias que no vas a olvidar',
      subtitle: 'Conoce algunos de nuestros tours más populares.',
      allTours: 'Ver todos los tours',
      transferTitle: '¿Llegas a Cancún?',
      transferText: 'Te recogemos en el aeropuerto y te llevamos cómodamente a tu hotel.',
      transferButton: 'Conocer traslados',
      whyTitle: 'Todo empieza aquí',
      why1: 'Experiencias seleccionadas',
      why2: 'Atención por WhatsApp',
      why3: 'Servicio para turistas',
      ctaTitle: '¿Qué te gustaría conocer?',
      ctaText: 'Cuéntanos qué experiencia buscas y te damos información por WhatsApp.',
      searchLabel: 'Encuentra tu próxima experiencia', searchPlaceholder: 'Busca Tulum, cenotes, Isla Mujeres…', searchButton: 'Buscar', noResults: 'No encontramos coincidencias. Puedes explorar todos los tours.',
      destinations: 'Explora por destino', destination: { all: 'Todos', cancun: 'Cancún', riviera: 'Riviera Maya', tulum: 'Tulum', isla: 'Isla Mujeres' },
      transferEyebrow: 'Elige cómo viajar', transferOptionsTitle: 'Un traslado para cada viaje', transferOptionsText: 'Compara las opciones y solicita por WhatsApp la que mejor se adapte a tu grupo.',
      sharedTitle: 'Compartido', sharedText: 'Una opción práctica y accesible para viajeros solos o parejas.', privateTitle: 'Privado', privateText: 'Vehículo exclusivo, directo a tu hotel y sin paradas intermedias.', premiumTitle: 'Premium', premiumText: 'Más espacio, comodidad y atención especial desde tu llegada.', mostChosen: 'Más solicitado',
      trust1: 'Atención por WhatsApp', trust2: 'Atención bilingüe', trust3: 'Experiencias seleccionadas', trust4: 'Conocimiento del destino',
      faqTitle: 'Antes de preparar tu viaje', faqText: 'Resolvemos las dudas más comunes para que elijas con tranquilidad.',
      faq1q: '¿Puedo solicitar información antes de llegar?', faq1a: 'Sí. Escríbenos por WhatsApp y revisamos opciones, horarios y disponibilidad contigo.',
      faq2q: '¿El traslado llega hasta mi hotel?', faq2a: 'Atendemos rutas desde el Aeropuerto de Cancún hacia hoteles de Cancún, Playa del Carmen, Riviera Maya y alrededores.',
      faq3q: '¿Qué ocurre si mi vuelo se retrasa?', faq3a: 'Compártenos tu información de vuelo para poder coordinar correctamente la hora de recogida.',
      faq4q: '¿Los tours son adecuados para familias?', faq4a: 'Contamos con opciones culturales, acuáticas y de aventura. Te ayudamos a elegir según edades e intereses.'
    },
    tours: {
      title: 'Tours y experiencias',
      subtitle: 'Explora lugares increíbles de Cancún y la Riviera Maya.',
      duration: 'Duración',
      details: 'Ver experiencia',
      contact: 'Solicitar información'
    },
    transfer: {
      eyebrow: 'Transporte turístico',
      title: 'Del aeropuerto a tu hotel, fácil y seguro',
      text: 'Servicio de traslado desde el Aeropuerto Internacional de Cancún hacia hoteles de Cancún, Playa del Carmen, Riviera Maya y alrededores.',
      private: 'Traslado privado',
      groups: 'Grupos y familias',
      round: 'Aeropuerto ↔ Hotel',
      quote: 'Solicitar información',
      note: 'La cotización y disponibilidad se atienden directamente por WhatsApp.'
    },
    gallery: {
      title: 'Momentos del Caribe',
      subtitle: 'Una muestra visual de las experiencias que puedes disfrutar.'
    },
    detail: {
      back: 'Volver a tours',
      includes: 'Incluye',
      notIncludes: 'No incluye',
      info: 'Reservar'
    },
    footer: {
      text: 'Tours, experiencias y traslados en Cancún y Riviera Maya.',
      rights: 'Todos los derechos reservados.'
    },
    whatsapp: 'WhatsApp'
  },
  en: {
    nav: { home: 'Home', tours: 'Tours', transfers: 'Transfers', gallery: 'Gallery', services: 'Services', destinations: 'Destinations', about: 'About us', contact: 'Contact', menu: 'Open menu' },
    hero: {
      eyebrow: 'Cancún and Tulum Airports',
      title: 'Your transfer starts when you land',
      text: 'Private transportation between airports, hotels and destinations in Cancún, Tulum and the Riviera Maya.',
      tours: 'Discover tours',
      transfer: 'Explore transfers'
    },
    quote: {
      eyebrow: 'Quote via WhatsApp', title: 'Plan your transfer', text: 'Add the essential details and send your request. We will personally assist you on WhatsApp.',
      airport: 'Airport', direction: 'Route', destination: 'Hotel or destination', date: 'Date', passengers: 'Passengers', service: 'Service type', flight: 'Flight number',
      choose: 'Select', cancun: 'Cancún Airport', tulum: 'Tulum Airport', toHotel: 'Airport → hotel or destination', toAirport: 'Hotel or destination → airport', destinationPlaceholder: 'E.g. hotel in Playa del Carmen', optional: 'Optional', shared: 'Shared', private: 'Private', luxury: 'Luxury',
      message: 'Hello, I would like a tourist transportation quote with the following details:',
      messageTitle: '*TRANSFER QUOTE REQUEST*', greeting: 'Hello,', messageIntro: 'I would like a quote for the following service:', messageQuestion: 'Could you confirm the price, availability and service conditions?', messageThanks: 'Thank you.',
      button: 'Book', disclaimer: 'No online payment. We will confirm availability and pricing directly with you.'
    },
    home: {
      title: 'Experiences you will remember',
      subtitle: 'Discover some of our most popular tours.',
      allTours: 'View all tours',
      transferTitle: 'Arriving in Cancún?',
      transferText: 'We pick you up at the airport and take you comfortably to your hotel.',
      transferButton: 'Explore transfers',
      whyTitle: 'It all starts here',
      why1: 'Selected experiences',
      why2: 'WhatsApp assistance',
      why3: 'Tourist-friendly service',
      ctaTitle: 'What would you like to discover?',
      ctaText: 'Tell us what experience you are looking for and we will help you on WhatsApp.',
      searchLabel: 'Find your next experience', searchPlaceholder: 'Search Tulum, cenotes, Isla Mujeres…', searchButton: 'Search', noResults: 'No matches found. You can explore all tours.',
      destinations: 'Explore by destination', destination: { all: 'All', cancun: 'Cancún', riviera: 'Riviera Maya', tulum: 'Tulum', isla: 'Isla Mujeres' },
      transferEyebrow: 'Choose how to travel', transferOptionsTitle: 'A transfer for every trip', transferOptionsText: 'Compare the options and request the best fit for your group on WhatsApp.',
      sharedTitle: 'Shared', sharedText: 'A practical, affordable choice for solo travelers or couples.', privateTitle: 'Private', privateText: 'An exclusive vehicle, direct to your hotel with no intermediate stops.', premiumTitle: 'Premium', premiumText: 'More room, comfort and special service from the moment you arrive.', mostChosen: 'Most requested',
      trust1: 'WhatsApp assistance', trust2: 'Bilingual assistance', trust3: 'Selected experiences', trust4: 'Local destination knowledge',
      faqTitle: 'Before planning your trip', faqText: 'Answers to common questions so you can choose with confidence.',
      faq1q: 'Can I request information before I arrive?', faq1a: 'Yes. Message us on WhatsApp and we will review options, schedules and availability with you.',
      faq2q: 'Will the transfer take me to my hotel?', faq2a: 'We serve routes from Cancún Airport to hotels in Cancún, Playa del Carmen, Riviera Maya and nearby areas.',
      faq3q: 'What happens if my flight is delayed?', faq3a: 'Share your flight details so we can adjust your pickup time accordingly.',
      faq4q: 'Are the tours suitable for families?', faq4a: 'We offer cultural, water and adventure options. We help you choose according to ages and interests.'
    },
    tours: {
      title: 'Tours & experiences',
      subtitle: 'Explore amazing places around Cancún and the Riviera Maya.',
      duration: 'Duration',
      details: 'View experience',
      contact: 'Request information'
    },
    transfer: {
      eyebrow: 'Tourist transportation',
      title: 'From the airport to your hotel, easy and safe',
      text: 'Transfers from Cancún International Airport to hotels in Cancún, Playa del Carmen, the Riviera Maya and surrounding areas.',
      private: 'Private transfer',
      groups: 'Groups & families',
      round: 'Airport ↔ Hotel',
      quote: 'Request information',
      note: 'Quote and availability are handled directly through WhatsApp.'
    },
    gallery: {
      title: 'Caribbean moments',
      subtitle: 'A visual sample of the experiences you can enjoy.'
    },
    detail: {
      back: 'Back to tours',
      includes: 'Includes',
      notIncludes: 'Not included',
      info: 'Book'
    },
    footer: {
      text: 'Tours, experiences and transfers in Cancún and the Riviera Maya.',
      rights: 'All rights reserved.'
    },
    whatsapp: 'WhatsApp'
  }
}

const initialLocale = localStorage.getItem('caribego-locale') === 'en' ? 'en' : 'es'
document.documentElement.lang = initialLocale

const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: 'es',
  messages
})

createApp(App).use(router).use(i18n).mount('#app')
