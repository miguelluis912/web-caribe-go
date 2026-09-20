// Catálogo editable de tours. Cada objeto genera una card y su página de detalle.
export const tours = [
  {
    id: 1,
    slug: 'tulum-cenote',
    destination: 'tulum riviera maya',
    name: { es: 'Tulum + Cenote', en: 'Tulum + Cenote' },
    short: {
      es: 'Historia maya, mar Caribe y un refrescante cenote en una misma experiencia.',
      en: 'Maya history, Caribbean views and a refreshing cenote in one experience.'
    },
    duration: { es: '8 horas', en: '8 hours' },
    image: '/images/tours/tulum-cenote/cover.webp',
    gallery: [
      '/images/tours/tulum-cenote/ruins.png',
      '/images/tours/tulum-cenote/cenote.webp'
    ],
    includes: { es: ['Transporte', 'Entrada a zona arqueológica', 'Visita a cenote'], en: ['Transportation', 'Archaeological site entrance', 'Cenote visit'] },
    notIncludes: { es: ['Alimentos', 'Gastos personales'], en: ['Meals', 'Personal expenses'] },
    featured: true
  },
  {
    id: 2,
    slug: 'isla-mujeres',
    destination: 'isla mujeres cancun',
    name: { es: 'Isla Mujeres', en: 'Isla Mujeres' },
    short: {
      es: 'Un día de mar turquesa, playas y la magia de Isla Mujeres.',
      en: 'A day of turquoise water, beaches and the magic of Isla Mujeres.'
    },
    duration: { es: 'Día completo', en: 'Full day' },
    image: '/images/tours/isla-mujeres/cover.jpg',
    gallery: [
      '/images/tours/isla-mujeres/cover.jpg',
      '/images/tours/isla-mujeres/resort.jpg'
    ],
    includes: { es: ['Transporte', 'Experiencia acuática', 'Tiempo libre'], en: ['Transportation', 'Water experience', 'Free time'] },
    notIncludes: { es: ['Alimentos', 'Propinas'], en: ['Meals', 'Tips'] },
    featured: true
  },
  {
    id: 3,
    slug: 'chichen-itza',
    destination: 'yucatan cancun riviera maya',
    name: { es: 'Chichén Itzá', en: 'Chichén Itzá' },
    short: {
      es: 'Descubre una de las grandes maravillas de la cultura maya.',
      en: 'Discover one of the great wonders of Maya culture.'
    },
    duration: { es: '10 horas', en: '10 hours' },
    image: '/images/tours/chichen-itza/cover.jpg',
    gallery: [
      '/images/tours/chichen-itza/cover.jpg',
      '/images/tours/chichen-itza/temple.jpg'
    ],
    includes: { es: ['Transporte', 'Entrada', 'Recorrido por la zona'], en: ['Transportation', 'Entrance', 'Site tour'] },
    notIncludes: { es: ['Alimentos', 'Gastos personales'], en: ['Meals', 'Personal expenses'] },
    featured: true
  },
  {
    id: 4,
    slug: 'catamaran',
    destination: 'cancun isla mujeres',
    name: { es: 'Catamarán & Mar Caribe', en: 'Catamaran & Caribbean Sea' },
    short: {
      es: 'Navega por aguas cristalinas y disfruta el Caribe.',
      en: 'Sail through crystal-clear waters and enjoy the Caribbean.'
    },
    duration: { es: 'Medio día', en: 'Half day' },
    image: '/images/tours/catamaran/cover.jpg',
    gallery: [
      '/images/tours/catamaran/cover.jpg',
      '/images/tours/catamaran/ocean.jpg'
    ],
    includes: { es: ['Catamarán', 'Actividad acuática', 'Tiempo libre'], en: ['Catamaran', 'Water activity', 'Free time'] },
    notIncludes: { es: ['Transporte desde hotel', 'Gastos personales'], en: ['Hotel pickup and drop-off', 'Personal expenses'] },
    featured: false
  }
]
