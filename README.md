# CaribeGo — sitio informativo

Proyecto Vue 3 / Vite para tours y traslados privados, con español e inglés y solicitudes por WhatsApp.

## Personalización rápida

- Número de WhatsApp, nombre e imágenes principales: `src/config/site.js`.
- Tours e imágenes de tours: `src/data/tours.js`.
- Servicios e imágenes de sus tarjetas: `src/data/services.js`.
- Flota: `src/data/vehicles.js`.
- Cards de Inicio y valores de Nosotros: `src/data/about.js`.
- Destinos y sus galerías: `src/data/destinations.js`.
- Textos traducidos de la interfaz: `src/main.js`.

El formulario principal se encuentra en `src/views/HomeView.vue`. El campo de enlace de ubicación es opcional, no utiliza una API de mapas y agrega el enlace pegado por el cliente al mensaje de WhatsApp.

La página de Inicio muestra beneficios editables y un carrusel horizontal de la flota. Los beneficios se administran en `src/data/about.js` y los vehículos en `src/data/vehicles.js`. Los controles no necesitan librerías externas y cada vehículo conserva su botón de cotización.
El carrusel avanza automáticamente cada cuatro segundos, vuelve al inicio al terminar y se pausa durante la interacción del usuario. También respeta la preferencia del sistema para reducir movimiento.

Las fotografías de la flota están almacenadas localmente en `public/images/vehicles`, por lo que no dependen de URLs externas durante la ejecución. Sus referencias de origen se conservan en `public/images/vehicles/SOURCES.md`.

La página `src/views/AboutView.vue` corresponde al menú “Nosotros”. Reutiliza automáticamente `vehicles.js` y `about.js`, por lo que cualquier cambio se refleja sin editar la vista.

Los destinos se administran desde `src/data/destinations.js`. Cada elemento genera una tarjeta en `/destinos` y una vista individual en `/destino/:slug`. La página `/contacto` envía el formulario directamente por WhatsApp y no necesita backend.

En la página de Contacto se usa lenguaje neutral orientado al usuario: “Atención directa”, “Hablar con un asesor” y “Enviar consulta”. Internamente, los enlaces continúan abriendo el canal configurado.

Todas las imágenes de contenido se guardan localmente dentro de `public/images`, separadas por sitio, servicios, tours, destinos y vehículos. Las tarjetas se generan automáticamente con `v-for`: puedes duplicar, eliminar o reordenar objetos en los archivos de datos sin modificar las vistas. Consulta `src/data/README.md` para ver la guía completa.

## Ejecutar

```bash
npm install
npm run dev
```

También puedes ejecutar `docker compose up --build` con la configuración incluida.

El proyecto no depende de imágenes ni tipografías externas durante la ejecución. Los únicos enlaces externos funcionales son los generados para WhatsApp y el enlace de Google Maps que el usuario puede pegar opcionalmente en el formulario.
