// Configuración general. Cambia estos valores para personalizar el sitio.
export const siteConfig = {
  companyName: 'CaribeGo',
  phone: {
    // Para enlaces de WhatsApp: código de país + número, sin espacios ni símbolos.
    whatsapp: '529842183924',
    // Formato utilizado para mostrar el número en las vistas.
    display: '+52 984 218 3924'
  },
  images: {
    home: '/images/site/home-img.jpg',
    hero: '/images/site/hero.jpg',
    transfer: '/images/site/transfer.jpg'
  }
}

export function whatsappLink(message) {
  return `https://wa.me/${siteConfig.phone.whatsapp}?text=${encodeURIComponent(message)}`
}
