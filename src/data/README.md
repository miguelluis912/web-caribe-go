# Administración de contenido

Las cards del sitio se generan desde catálogos JavaScript. Para agregar contenido, duplica un objeto existente dentro del arreglo correspondiente, asigna un identificador único y completa siempre los textos `es` y `en`.

## Archivos editables

- `tours.js`: cards y páginas de detalle de Tours.
- `services.js`: cards y páginas de detalle de Servicios. Las características viven dentro del mismo objeto mediante `features`.
- `destinations.js`: cards, detalles y galerías de Destinos.
- `vehicles.js`: flota utilizada en Inicio, Traslados y Nosotros.
- `about.js`: cards “¿Por qué CaribeGo?” y valores de Nosotros.

## Imágenes

Todas las imágenes del sitio se sirven localmente desde `public/images`, organizadas así:

- `site/`: portada principal y traslado.
- `services/`: una imagen por servicio.
- `tours/<slug>/`: portada y galería de cada tour.
- `destinations/<slug>/`: portada y galería de cada destino.
- `vehicles/`: imágenes de la flota.

Usa rutas públicas como `/images/services/airport-transfer.jpg`. Evita URLs externas para que una caída o cambio del proveedor no rompa la página.

## Reglas mínimas

1. No reutilices un `id` o `slug` existente.
2. Mantén la misma lista de propiedades del objeto que dupliques.
3. Completa español e inglés en cada campo bilingüe.
4. Guarda primero las imágenes en la carpeta correspondiente.
5. Ejecuta `npm run build` antes de publicar.
