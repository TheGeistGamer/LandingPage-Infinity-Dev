import type { L, Project } from './projects'

export type ProductKind = 'app' | 'web' | 'dashboard'

export type Product = {
  id: string
  /** id del proyecto al que pertenece, para abrir su caso completo */
  projectId: Project['id']
  kind: ProductKind
  name: L
  summary: L
  tags: L[]
  /** Capturas que se muestran en la tarjeta */
  images: { src: string; kind: 'phone' | 'wide' }[]
  /** Enlace externo, solo si existe uno confirmado */
  link?: { href: string; label: L }
}

export const kindLabels: Record<ProductKind, L> = {
  app: { es: 'App móvil', en: 'Mobile app' },
  web: { es: 'Sitio web', en: 'Website' },
  dashboard: { es: 'Panel de administración', en: 'Admin panel' },
}

export const filterLabels: Record<'all' | ProductKind, L> = {
  all: { es: 'Todos', en: 'All' },
  app: { es: 'Apps móviles', en: 'Mobile apps' },
  web: { es: 'Sitios web', en: 'Websites' },
  dashboard: { es: 'Paneles', en: 'Admin panels' },
}

const lens = (f: string) => `/projects/lens/${f}.webp`
const land = (f: string) => `/projects/lens-landing/${f}.webp`
const cj = (f: string) => `/projects/cj-store/${f}.webp`
const fc = (f: string) => `/projects/food-co/${f}.webp`
const sn = (f: string) => `/projects/sano/${f}.webp`
const px = (f: string) => `/projects/pixoteria/${f}.webp`

export const products: Product[] = [
  {
    id: 'lens-app',
    projectId: 'infinity-lens',
    kind: 'app',
    name: { es: 'Infinity Lens', en: 'Infinity Lens' },
    summary: {
      es: 'App de iPhone que convierte la foto de un ticket en un gasto ordenado y avisa cuándo vencen los recibos. Todo se queda en el teléfono.',
      en: 'iPhone app that turns a receipt photo into a tidy expense and warns you when bills are due. Everything stays on the phone.',
    },
    tags: [
      { es: 'iPhone', en: 'iPhone' },
      { es: 'OCR en el dispositivo', en: 'On-device OCR' },
      { es: '6 idiomas', en: '6 languages' },
    ],
    images: [
      { src: lens('tienda-02-escanear'), kind: 'phone' },
      { src: lens('tienda-05-resumen'), kind: 'phone' },
    ],
  },
  {
    id: 'lens-landing',
    projectId: 'infinity-lens-landing',
    kind: 'web',
    name: { es: 'Landing de Infinity Lens', en: 'Infinity Lens landing' },
    summary: {
      es: 'Sitio de lanzamiento en seis idiomas, con SEO técnico, política de privacidad por idioma y carga en menos de un segundo.',
      en: 'Launch site in six languages, with technical SEO, a privacy policy per language and sub-second loading.',
    },
    tags: [
      { es: 'Astro + React', en: 'Astro + React' },
      { es: '6 idiomas', en: '6 languages' },
      { es: 'Cloudflare', en: 'Cloudflare' },
    ],
    images: [
      { src: land('desktop-01-portada'), kind: 'wide' },
      { src: land('movil-01-portada'), kind: 'phone' },
    ],
    link: { href: 'https://lens.infinitydev.agency', label: { es: 'Visitar sitio', en: 'Visit site' } },
  },
  {
    id: 'cj-web',
    projectId: 'cj-store',
    kind: 'web',
    name: { es: 'CJ Store · Sitio web', en: 'CJ Store · Website' },
    summary: {
      es: 'Tienda en línea con más de 100 productos, servicios con agenda de cuatro pasos y academia con inscripción y cupos.',
      en: 'Online store with over 100 products, a four-step booking flow for services and an academy with enrollment and seats.',
    },
    tags: [
      { es: 'Tienda', en: 'Store' },
      { es: 'Agenda en línea', en: 'Online booking' },
      { es: 'Pagos con Stripe', en: 'Stripe payments' },
    ],
    images: [{ src: cj('web-inicio'), kind: 'wide' }],
  },
  {
    id: 'cj-app',
    projectId: 'cj-store',
    kind: 'app',
    name: { es: 'CJ Store · App móvil', en: 'CJ Store · Mobile app' },
    summary: {
      es: 'Compras, citas e inscripciones desde el teléfono, con notificaciones de promociones y recordatorios de citas.',
      en: 'Purchases, appointments and enrollments from the phone, with promotion notifications and appointment reminders.',
    },
    tags: [
      { es: 'Notificaciones', en: 'Notifications' },
      { es: 'Mis registros', en: 'My records' },
      { es: 'Cuenta de cliente', en: 'Customer account' },
    ],
    images: [
      { src: cj('m-03-home-tienda'), kind: 'phone' },
      { src: cj('m-26-servicio-calendario-hora'), kind: 'phone' },
    ],
  },
  {
    id: 'cj-dashboard',
    projectId: 'cj-store',
    kind: 'dashboard',
    name: { es: 'CJ Store · Dashboard', en: 'CJ Store · Dashboard' },
    summary: {
      es: 'Panel para ver el negocio de un vistazo y encender o apagar servicios, controlar métodos de pago y gestionar el catálogo sin pedirle nada a un programador.',
      en: 'Panel to see the business at a glance, switch services on or off, control payment methods and manage the catalog without asking a developer.',
    },
    tags: [
      { es: 'Catálogo', en: 'Catalog' },
      { es: 'Métodos de pago', en: 'Payment methods' },
      { es: 'Búsqueda ⌘K', en: '⌘K search' },
    ],
    images: [{ src: cj('dash-inicio'), kind: 'wide' }],
  },
  {
    id: 'food-app',
    projectId: 'food-co',
    kind: 'app',
    name: { es: 'Food&Co · App móvil', en: 'Food&Co · Mobile app' },
    summary: {
      es: 'Red social gastronómica para iOS y Android: feed de publicaciones, editor de fotos, recetas de la comunidad y mapa de restaurantes cercanos.',
      en: 'Food social network for iOS and Android: post feed, photo editor, community recipes and a map of nearby restaurants.',
    },
    tags: [
      { es: 'iOS y Android', en: 'iOS and Android' },
      { es: 'Mapas', en: 'Maps' },
      { es: 'Notificaciones push', en: 'Push notifications' },
    ],
    images: [
      { src: fc('app-feed-1'), kind: 'phone' },
      { src: fc('app-receta'), kind: 'phone' },
    ],
  },
  {
    id: 'food-landing',
    projectId: 'food-co',
    kind: 'web',
    name: { es: 'Food&Co · Landing', en: 'Food&Co · Landing' },
    summary: {
      es: 'Landing bilingüe con modo claro y oscuro, enlaces compartibles hacia la app, páginas legales y centro de ayuda para las tiendas.',
      en: 'Bilingual landing page with light and dark mode, shareable links into the app, legal pages and a help center for the app stores.',
    },
    tags: [
      { es: 'Bilingüe', en: 'Bilingual' },
      { es: 'Enlaces universales', en: 'Universal links' },
      { es: 'Modo oscuro', en: 'Dark mode' },
    ],
    images: [{ src: fc('web-hero'), kind: 'wide' }],
    link: { href: 'https://foodncompany.com.mx/', label: { es: 'Visitar sitio', en: 'Visit site' } },
  },
  {
    id: 'food-dashboard',
    projectId: 'food-co',
    kind: 'dashboard',
    name: { es: 'Food&Co · Panel de administración', en: 'Food&Co · Admin panel' },
    summary: {
      es: 'Panel con 9 módulos para moderar contenido, gestionar usuarios y restaurantes, importar locales desde Google y vigilar el costo de almacenamiento.',
      en: 'Panel with 9 modules to moderate content, manage users and restaurants, import venues from Google and watch storage costs.',
    },
    tags: [
      { es: 'Moderación', en: 'Moderation' },
      { es: 'Google Places', en: 'Google Places' },
      { es: 'Analítica', en: 'Analytics' },
    ],
    images: [{ src: fc('dash-r2'), kind: 'wide' }],
  },
  {
    id: 'sano-app',
    projectId: 'sano',
    kind: 'app',
    name: { es: 'Sano · App móvil', en: 'Sano · Mobile app' },
    summary: {
      es: 'Escanea el código de barras de un producto y recibe una calificación de 0 a 100, con sellos NOM-051, aditivos explicados y alternativas más sanas.',
      en: 'Scan a product barcode and get a 0 to 100 score, with NOM-051 labels, explained additives and healthier alternatives.',
    },
    tags: [
      { es: 'iOS', en: 'iOS' },
      { es: 'Score personalizado', en: 'Personalized score' },
      { es: 'NOM-051', en: 'NOM-051' },
    ],
    images: [
      { src: sn('m-05-producto-detalle'), kind: 'phone' },
      { src: sn('m-04-home'), kind: 'phone' },
    ],
  },
  {
    id: 'sano-dashboard',
    projectId: 'sano',
    kind: 'dashboard',
    name: { es: 'Sano · Dashboard', en: 'Sano · Dashboard' },
    summary: {
      es: 'Panel de operación para un catálogo de más de 9,000 productos, con captura asistida por IA desde fotos del empaque, moderación y configuración remota de la app.',
      en: 'Operations panel for a catalog of over 9,000 products, with AI-assisted capture from package photos, moderation and remote app configuration.',
    },
    tags: [
      { es: 'IA integrada', en: 'Built-in AI' },
      { es: 'Catálogo', en: 'Catalog' },
      { es: 'Reportes', en: 'Reports' },
    ],
    images: [{ src: sn('dash-productos'), kind: 'wide' }],
  },
  {
    id: 'sano-landing',
    projectId: 'sano',
    kind: 'web',
    name: { es: 'Sano · Landing', en: 'Sano · Landing' },
    summary: {
      es: 'Sitio de lanzamiento con tarjeta de score en el hero, comparador, modo familia y reporte semanal.',
      en: 'Launch site with a score card in the hero, a comparator, family mode and weekly report.',
    },
    tags: [
      { es: 'Comparador', en: 'Comparator' },
      { es: 'Modo familia', en: 'Family mode' },
      { es: 'Modo oscuro', en: 'Dark mode' },
    ],
    images: [{ src: sn('landing-hero'), kind: 'wide' }],
    link: { href: 'https://sano.infinitydev.agency/', label: { es: 'Visitar sitio', en: 'Visit site' } },
  },
  {
    id: 'pixoteria-app',
    projectId: 'pixoteria',
    kind: 'app',
    name: { es: 'Pixotería · Juego móvil', en: 'Pixotería · Mobile game' },
    summary: {
      es: 'Lotería mexicana multijugador por WiFi local con nueve barajas de pixel art. Sin cuentas, sin anuncios y sin servidores.',
      en: 'Local-WiFi multiplayer Mexican lottery with nine pixel art decks. No accounts, no ads and no servers.',
    },
    tags: [
      { es: 'iOS y Android', en: 'iOS and Android' },
      { es: 'Multijugador local', en: 'Local multiplayer' },
      { es: '486 cartas', en: '486 cards' },
    ],
    images: [
      { src: px('app-menu'), kind: 'phone' },
      { src: px('app-muertos'), kind: 'phone' },
    ],
  },
  {
    id: 'pixoteria-web',
    projectId: 'pixoteria',
    kind: 'web',
    name: { es: 'Pixotería · Sitio del juego', en: 'Pixotería · Game website' },
    summary: {
      es: 'Sitio de lanzamiento con la misma estética pixel art, galería de las nueve barajas y política de privacidad en español e inglés.',
      en: 'Launch site with the same pixel art look, a gallery of the nine decks and a privacy policy in Spanish and English.',
    },
    tags: [
      { es: 'Astro', en: 'Astro' },
      { es: 'Cloudflare', en: 'Cloudflare' },
      { es: 'ES / EN', en: 'ES / EN' },
    ],
    images: [{ src: px('web-inicio'), kind: 'wide' }],
    link: { href: 'https://pixoteria-landing.fgsh-mcfly.workers.dev/', label: { es: 'Visitar sitio', en: 'Visit site' } },
  },
]
