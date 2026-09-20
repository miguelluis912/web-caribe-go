// Formato único para todos los mensajes enviados por WhatsApp.
export function formatDateTime(value, locale = 'es') {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return new Intl.DateTimeFormat(locale === 'es' ? 'es-MX' : 'en-US', {
    dateStyle: 'long', timeStyle: 'short'
  }).format(date)
}

export function buildWhatsappMessage({ locale = 'es', title, intro, fields = [], question }) {
  const lines = [
    `*${title}*`,
    '',
    intro,
    '',
    // Se utilizan únicamente caracteres ASCII en el prefijo para evitar que
    // algunos teléfonos sustituyan los emojis por un carácter de reemplazo.
    ...fields.filter(item => item?.value).map(item => `- *${item.label}:* ${item.value}`),
    '',
    question,
    '',
    locale === 'es' ? 'Gracias.' : 'Thank you.'
  ]
  return lines.filter((line, index) => line !== undefined && line !== null && !(line === '' && lines[index - 1] === '')).join('\n')
}

export function interestMessage(locale, label, type = 'service') {
  const es = locale === 'es'
  const names = {
    service: es ? 'Servicio' : 'Service',
    vehicle: es ? 'Vehículo' : 'Vehicle',
    destination: es ? 'Destino' : 'Destination',
    tour: es ? 'Tour' : 'Tour'
  }
  return buildWhatsappMessage({
    locale,
    title: es ? 'SOLICITUD DE INFORMACIÓN' : 'INFORMATION REQUEST',
    intro: es ? 'Hola, me interesa la siguiente opción:' : 'Hello, I am interested in the following option:',
    fields: [{ icon: '✅', label: names[type], value: label }],
    question: es ? '¿Podrían compartirme precio, disponibilidad y condiciones?' : 'Could you share price, availability and conditions?'
  })
}
