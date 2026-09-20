// Catálogo dinámico de destinos.
// Para usar fotografías propias, coloca los archivos en public/images/destinations
// y cambia image por una ruta como: /images/destinations/cancun.jpg
export const destinations = [
  {
    id: 1, slug: 'cancun',
    name: { es: 'Cancún', en: 'Cancún' },
    short: { es: 'Zona urbana, centro y principales hoteles de Cancún.', en: 'Downtown Cancún, the urban area and the city’s main hotels.' },
    description: { es: 'Traslados privados desde el Aeropuerto Internacional de Cancún hacia el centro, hoteles y puntos de interés de la ciudad.', en: 'Private transfers from Cancún International Airport to downtown, hotels and the city’s main points of interest.' },
    airport: { es: 'Aeropuerto de Cancún (CUN)', en: 'Cancún Airport (CUN)' },
    image: '/images/destinations/cancun/portada.jpg',
    highlights: { es: ['Centro de Cancún', 'Hoteles y alojamientos', 'Servicio privado'], en: ['Downtown Cancún', 'Hotels and accommodation', 'Private service'] },
    gallery: [
      { image: '/images/destinations/cancun/portada.jpg', alt: { es: 'Playa de arena blanca en Cancún', en: 'White-sand beach in Cancún' } },
      { image: '/images/destinations/cancun/zona-hotelera.webp', alt: { es: 'Vista aérea de Cancún y su costa', en: 'Aerial view of Cancún and its coastline' } },
      { image: '/images/destinations/cancun/laguna.jpg', alt: { es: 'Atardecer en la laguna Nichupté', en: 'Sunset at Nichupté Lagoon' } },
      { image: '/images/destinations/cancun/isla-blanca.jpg', alt: { es: 'Muelle y aguas turquesa de Isla Blanca', en: 'Pier and turquoise water at Isla Blanca' } },
      { image: '/images/destinations/cancun/monumento.webp', alt: { es: 'Monumento cultural en la ciudad de Cancún', en: 'Cultural monument in Cancún city' } }
    ]
  },
  {
    id: 2, slug: 'zona-hotelera-cancun',
    name: { es: 'Zona Hotelera de Cancún', en: 'Cancún Hotel Zone' },
    short: { es: 'Servicio hacia resorts, playas y hoteles del Boulevard Kukulcán.', en: 'Service to resorts, beaches and hotels along Kukulcán Boulevard.' },
    description: { es: 'Coordinamos tu llegada directamente a hoteles y resorts de la Zona Hotelera con vehículo privado para tu grupo.', en: 'We provide direct private transfers to hotels and resorts throughout the Hotel Zone.' },
    airport: { es: 'Aeropuerto de Cancún (CUN)', en: 'Cancún Airport (CUN)' },
    image: '/images/destinations/zona-hotelera-cancun/portada.jpg',
    highlights: { es: ['Boulevard Kukulcán', 'Resorts y playas', 'Traslado directo'], en: ['Kukulcán Boulevard', 'Resorts and beaches', 'Direct transfer'] },
    gallery: [
      { image: '/images/destinations/zona-hotelera-cancun/portada.jpg', alt: { es: 'Costa de la Zona Hotelera de Cancún', en: 'Cancún Hotel Zone coastline' } },
      { image: '/images/destinations/zona-hotelera-cancun/vista-aerea.webp', alt: { es: 'Vista aérea de hoteles entre el Caribe y la laguna', en: 'Aerial view of hotels between the Caribbean and lagoon' } },
      { image: '/images/destinations/zona-hotelera-cancun/playa-delfines.webp', alt: { es: 'Playa Delfines en la Zona Hotelera', en: 'Playa Delfines in the Hotel Zone' } },
      { image: '/images/destinations/zona-hotelera-cancun/playa-delfines-entrada.jpg', alt: { es: 'Acceso público a Playa Delfines', en: 'Public entrance to Playa Delfines' } },
      { image: '/images/destinations/zona-hotelera-cancun/manglares.jpg', alt: { es: 'Recorrido entre manglares de la laguna Nichupté', en: 'Mangrove route through Nichupté Lagoon' } }
    ]
  },
  {
    id: 3, slug: 'puerto-morelos',
    name: { es: 'Puerto Morelos', en: 'Puerto Morelos' },
    short: { es: 'Traslados hacia hoteles, resorts y alojamientos de Puerto Morelos.', en: 'Transfers to hotels, resorts and accommodation in Puerto Morelos.' },
    description: { es: 'Una opción cercana al aeropuerto para disfrutar un ambiente tranquilo entre Cancún y Playa del Carmen.', en: 'A destination close to the airport with a relaxed atmosphere between Cancún and Playa del Carmen.' },
    airport: { es: 'Aeropuerto de Cancún (CUN)', en: 'Cancún Airport (CUN)' },
    image: '/images/destinations/puerto-morelos/portada.jpg',
    highlights: { es: ['Hoteles y resorts', 'Centro de Puerto Morelos', 'Viaje privado'], en: ['Hotels and resorts', 'Puerto Morelos downtown', 'Private ride'] },
    gallery: [
      { image: '/images/destinations/puerto-morelos/portada.jpg', alt: { es: 'Playa tranquila de Puerto Morelos', en: 'Peaceful beach in Puerto Morelos' } },
      { image: '/images/destinations/puerto-morelos/faro.jpg', alt: { es: 'Faro inclinado de Puerto Morelos', en: 'Leaning lighthouse of Puerto Morelos' } },
      { image: '/images/destinations/puerto-morelos/arrecife.jpg', alt: { es: 'Esnórquel en el arrecife de Puerto Morelos', en: 'Snorkeling at the Puerto Morelos reef' } },
      { image: '/images/destinations/puerto-morelos/iglesia.jpg', alt: { es: 'Iglesia y plaza de Puerto Morelos', en: 'Puerto Morelos church and town square' } },
      { image: '/images/destinations/puerto-morelos/vista-aerea.jpg', alt: { es: 'Vista aérea del centro y la costa de Puerto Morelos', en: 'Aerial view of downtown Puerto Morelos and its coast' } }
    ]
  },
  {
    id: 4, slug: 'playa-del-carmen',
    name: { es: 'Playa del Carmen', en: 'Playa del Carmen' },
    short: { es: 'Servicio al centro, Quinta Avenida, hoteles y residencias.', en: 'Service to downtown, Fifth Avenue, hotels and residences.' },
    description: { es: 'Traslados privados desde Cancún o Tulum hacia hoteles, condominios y alojamientos de Playa del Carmen.', en: 'Private transfers from Cancún or Tulum to hotels, condos and accommodation in Playa del Carmen.' },
    airport: { es: 'Cancún (CUN) o Tulum (TQO)', en: 'Cancún (CUN) or Tulum (TQO)' },
    image: '/images/destinations/playa-del-carmen/portada.jpeg',
    highlights: { es: ['Quinta Avenida', 'Hoteles y condominios', 'Dos aeropuertos disponibles'], en: ['Fifth Avenue', 'Hotels and condos', 'Two available airports'] },
    gallery: [
      { image: '/images/destinations/playa-del-carmen/portada.jpeg', alt: { es: 'Portal Maya en Playa del Carmen', en: 'Portal Maya in Playa del Carmen' } },
      { image: '/images/destinations/playa-del-carmen/vista-aerea.jpg', alt: { es: 'Vista aérea de la costa de Playa del Carmen', en: 'Aerial view of Playa del Carmen coast' } },
      { image: '/images/destinations/playa-del-carmen/playa.jpg', alt: { es: 'Playa y mar Caribe en Playa del Carmen', en: 'Beach and Caribbean Sea in Playa del Carmen' } },
      { image: '/images/destinations/playa-del-carmen/amanecer.jpg', alt: { es: 'Amanecer sobre el mar en Playa del Carmen', en: 'Sunrise over the sea in Playa del Carmen' } },
      { image: '/images/destinations/playa-del-carmen/resort.jpg', alt: { es: 'Hospedaje y piscina en Playa del Carmen', en: 'Resort and pool in Playa del Carmen' } }
    ]
  },
  {
    id: 5, slug: 'riviera-maya',
    name: { es: 'Riviera Maya', en: 'Riviera Maya' },
    short: { es: 'Cobertura en complejos hoteleros y destinos de la Riviera Maya.', en: 'Coverage across resorts and destinations in the Riviera Maya.' },
    description: { es: 'Coordinamos rutas privadas hacia resorts, parques, playas y alojamientos ubicados a lo largo de la Riviera Maya.', en: 'We coordinate private routes to resorts, parks, beaches and accommodations throughout the Riviera Maya.' },
    airport: { es: 'Cancún (CUN) o Tulum (TQO)', en: 'Cancún (CUN) or Tulum (TQO)' },
    image: '/images/destinations/riviera-maya/portada.webp',
    highlights: { es: ['Resorts y parques', 'Servicio para grupos', 'Rutas personalizadas'], en: ['Resorts and parks', 'Transportation for groups', 'Custom routes'] },
    gallery: [
      { image: '/images/destinations/riviera-maya/portada.webp', alt: { es: 'Playa tropical de la Riviera Maya', en: 'Tropical beach in the Riviera Maya' } },
      { image: '/images/destinations/riviera-maya/playa.png', alt: { es: 'Costa y aguas turquesa de la Riviera Maya', en: 'Riviera Maya coast and turquoise water' } },
      { image: '/images/destinations/riviera-maya/cenote.jpg', alt: { es: 'Cenote rodeado de selva en la Riviera Maya', en: 'Jungle cenote in Riviera Maya' } },
      { image: '/images/destinations/riviera-maya/akumal.jpg', alt: { es: 'Tortuga marina en Akumal', en: 'Sea turtle in Akumal' } },
      { image: '/images/destinations/riviera-maya/laguna-xelha.jpg', alt: { es: 'Laguna natural de Xel-Há', en: 'Natural lagoon at Xel-Há' } }
    ]
  },
  {
    id: 6, slug: 'tulum',
    name: { es: 'Tulum', en: 'Tulum' },
    short: { es: 'Traslados hacia zona hotelera, centro y alojamientos de Tulum.', en: 'Transfers to Tulum’s hotel zone, downtown and accommodation.' },
    description: { es: 'Servicio privado desde los aeropuertos de Tulum o Cancún hacia hoteles, villas y alojamientos de la zona.', en: 'Private service from Tulum or Cancún airports to hotels, villas and accommodation in the area.' },
    airport: { es: 'Tulum (TQO) o Cancún (CUN)', en: 'Tulum (TQO) or Cancún (CUN)' },
    image: '/images/destinations/tulum/portada.webp',
    highlights: { es: ['Zona Hotelera', 'Centro de Tulum', 'Aeropuerto de Tulum'], en: ['Hotel Zone', 'Downtown Tulum', 'Tulum Airport'] },
    gallery: [
      { image: '/images/destinations/tulum/portada.webp', alt: { es: 'Ruinas de Tulum junto al mar Caribe', en: 'Tulum ruins by the Caribbean Sea' } },
      { image: '/images/destinations/tulum/ruinas.png', alt: { es: 'Zona arqueológica de Tulum', en: 'Tulum archaeological site' } },
      { image: '/images/destinations/tulum/cenote.webp', alt: { es: 'Cenote de aguas cristalinas cerca de Tulum', en: 'Crystal-clear cenote near Tulum' } },
      { image: '/images/destinations/tulum/playa.jpg', alt: { es: 'Playa tropical de Tulum', en: 'Tropical beach in Tulum' } },
      { image: '/images/destinations/tulum/selva.webp', alt: { es: 'Camino entre la selva de Tulum', en: 'Road through Tulum jungle' } }
    ]
  }
]
