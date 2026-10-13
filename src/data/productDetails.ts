import { projects, type Article, type Detail, type Project } from './projects'
import { kindLabels, type Product } from './products'

const project = (id: string): Project => projects.find((p) => p.id === id) as Project

/** Toma artículos del proyecto por posición, para no repetir el contenido que ya existe */
const pick = (projectId: string, positions: number[]): Article[] =>
  positions.map((i) => project(projectId).articles[i])

const cj = (f: string) => `/projects/cj-store/${f}.webp`

type Own = Pick<Detail, 'intro' | 'stats' | 'services' | 'tech'> & { articles: Article[] }

/**
 * Detalle propio de cada producto. Lens y su landing ya son un proyecto completo cada uno,
 * así que usan el proyecto tal cual.
 */
const own: Record<string, Own> = {
  'cj-web': {
    intro: {
      es: 'El sitio donde el cliente de CJ Store compra productos, agenda servicios y se inscribe a seminarios, sin llamadas ni mensajes de ida y vuelta. Resuelve tres problemas de los negocios de detallado: se pierden citas, precios y pedidos cuando todo se vende por WhatsApp; productos, servicios y cursos viven en lugares distintos; y el cliente no sabe qué paquete le conviene ni cuánto cuesta.',
      en: 'The site where CJ Store customers buy products, book services and sign up for seminars, with no back-and-forth calls or messages. It solves three problems of detailing businesses: appointments, prices and orders get lost when everything is sold over WhatsApp; products, services and courses live in different places; and customers do not know which package suits them or what it costs.',
    },
    stats: [
      { n: '100+', label: { es: 'productos con foto, precio y disponibilidad', en: 'products with photo, price and availability' } },
      { n: '4', label: { es: 'pasos para agendar un servicio', en: 'steps to book a service' } },
      { n: '4', label: { es: 'formas de pago: tarjeta, efectivo, transferencia y depósito', en: 'payment options: card, cash, transfer and deposit' } },
      { n: '24/7', label: { es: 'ventas y reservas disponibles', en: 'sales and bookings available' } },
    ],
    articles: pick('cj-store', [0, 1, 2, 3, 4]),
    services: [
      { es: 'Tienda en línea con catálogo, búsqueda con sugerencias y filtros', en: 'Online store with catalog, search suggestions and filters' },
      { es: 'Servicios con paquetes por tipo de vehículo y agenda en línea', en: 'Services with packages by vehicle type and online booking' },
      { es: 'Academia con inscripción, pago y cupos', en: 'Academy with enrollment, payment and seats' },
      { es: 'Guía de PPF y Wrap para decidir qué servicio conviene', en: 'PPF and Wrap guide to decide which service fits' },
      { es: 'Cuenta de cliente: perfil, seguridad, direcciones, pedidos, servicios, favoritos y soporte', en: 'Customer account: profile, security, addresses, orders, services, favorites and support' },
      { es: 'Modo oscuro y sección de la app móvil', en: 'Dark mode and mobile app section' },
    ],
    tech: [
      { k: { es: 'Pagos', en: 'Payments' }, v: { es: 'Tarjeta (Stripe), efectivo, transferencia y depósito; el cliente ve su resumen antes de confirmar', en: 'Card (Stripe), cash, transfer and deposit; customers see their summary before confirming' } },
      { k: { es: 'Secciones', en: 'Sections' }, v: { es: 'Inicio, Academy, Detallado, Aplicación, PPF y Wrap, Tienda y Servicios', en: 'Home, Academy, Detailing, App, PPF and Wrap, Store and Services' } },
      { k: { es: 'Administración', en: 'Admin' }, v: { es: 'Todo se gestiona desde el dashboard propio de CJ Store', en: 'Everything is managed from CJ Store’s own dashboard' } },
    ],
  },

  'cj-app': {
    intro: {
      es: 'Tus clientes compran, agendan y se inscriben a cursos desde el celular, y tú los alcanzas con notificaciones. La app da presencia permanente en el teléfono del cliente y muestra la misma información que el sitio y el dashboard, siempre sincronizada.',
      en: 'Your customers buy, book and sign up for courses from their phone, and you reach them with notifications. The app gives permanent presence on the customer’s phone and shows the same information as the site and the dashboard, always in sync.',
    },
    stats: [
      { n: '5', label: { es: 'áreas: tienda, servicios, mis registros, academia y perfil', en: 'areas: store, services, my records, academy and profile' } },
      { n: '6', label: { es: 'pasos del asistente de servicios: paquete, vehículo, fecha, hora, pago y confirmación', en: 'service steps: package, vehicle, date, time, payment and confirmation' } },
      { n: '1', label: { es: 'sola pantalla de checkout', en: 'single checkout screen' } },
    ],
    articles: [
      {
        title: { es: 'Tienda con carrito y checkout en una pantalla', en: 'Store with cart and one-screen checkout' },
        text: {
          es: 'Catálogo con buscador, filtros, ofertas por categoría y favoritos. El carrito muestra cada producto con su disponibilidad y el subtotal, y el pago se termina en una sola pantalla.',
          en: 'Catalog with search, filters, deals by category and favorites. The cart shows each product with its availability and the subtotal, and payment is finished on a single screen.',
        },
        image: cj('m-51-carrito'),
        alt: { es: 'Carrito de compras en la app', en: 'Shopping cart in the app' },
        kind: 'phone',
      },
      {
        title: { es: 'Servicios, academia y distribuidor en una sola sección', en: 'Services, academy and distributor in one section' },
        text: {
          es: 'Cada servicio muestra su descripción, lo que incluye y un botón para agendar. Debajo viven Master Academy, con seminarios, fechas e inscripción, y la solicitud para ser distribuidor.',
          en: 'Each service shows its description, what it includes and a button to book. Below live Master Academy, with seminars, dates and enrollment, and the distributor application.',
        },
        image: cj('m-20-servicios-lista'),
        alt: { es: 'Lista de servicios disponibles', en: 'List of available services' },
        kind: 'phone',
      },
      {
        title: { es: 'Los datos del vehículo, sin vueltas', en: 'Vehicle details, no detours' },
        text: {
          es: 'Todo ocurre en un panel que se desliza desde abajo. Se piden marca, modelo, color y tipo de vehículo, y el precio se ajusta según si es coche o camioneta. Un aviso de seguridad y privacidad acompaña el formulario.',
          en: 'Everything happens in a bottom sheet. Brand, model, color and vehicle type are requested, and the price adjusts depending on whether it is a car or an SUV. A security and privacy notice accompanies the form.',
        },
        image: cj('m-24-servicio-vehiculo-completo'),
        alt: { es: 'Formulario de datos del vehículo', en: 'Vehicle details form' },
        kind: 'phone',
      },
      project('cj-store').articles[5],
      {
        title: { es: 'Confirma antes de solicitar', en: 'Confirm before requesting' },
        text: {
          es: 'Un resumen con el paquete, la fecha, la hora, el método de pago y el vehículo, para que el cliente revise todo antes de enviar la solicitud.',
          en: 'A summary with the package, date, time, payment method and vehicle, so the customer reviews everything before sending the request.',
        },
        image: cj('m-29-servicio-confirmacion'),
        alt: { es: 'Confirmación del servicio', en: 'Service confirmation' },
        kind: 'phone',
      },
      project('cj-store').articles[6],
      {
        title: { es: 'Seguridad de la cuenta y sesiones por dispositivo', en: 'Account security and per-device sessions' },
        text: {
          es: 'El cliente puede cambiar su contraseña y ver en qué dispositivos tiene la sesión abierta, con la opción de cerrarla en cada uno.',
          en: 'Customers can change their password and see which devices have an open session, with the option to close it on each one.',
        },
        image: cj('m-41-perfil-seguridad-sesiones'),
        alt: { es: 'Historial de dispositivos y seguridad', en: 'Device history and security' },
        kind: 'phone',
      },
    ],
    services: [
      { es: 'App móvil para compras, citas e inscripciones', en: 'Mobile app for purchases, appointments and enrollments' },
      { es: 'Asistente de servicios con agenda, pago y confirmación', en: 'Services assistant with booking, payment and confirmation' },
      { es: 'Notificaciones de promociones y recordatorios de citas', en: 'Promotion notifications and appointment reminders' },
      { es: 'Perfil, direcciones y control de sesiones por dispositivo', en: 'Profile, addresses and per-device session control' },
      { es: 'Información sincronizada con el sitio y el dashboard', en: 'Data kept in sync with the site and dashboard' },
    ],
    tech: [
      { k: { es: 'Plataforma', en: 'Platform' }, v: { es: 'App móvil', en: 'Mobile app' } },
      { k: { es: 'Comunicación', en: 'Communication' }, v: { es: 'Notificaciones para promociones y recordatorios de citas', en: 'Notifications for promotions and appointment reminders' } },
      { k: { es: 'Sincronía', en: 'Sync' }, v: { es: 'Misma información que el sitio web y el dashboard', en: 'Same data as the website and dashboard' } },
    ],
  },

  'cj-dashboard': {
    intro: {
      es: 'Un panel para administrar tienda, servicios y academia desde un solo lugar. Controlas clientes, productos, pedidos, servicios y pagos sin pedirle nada a un programador, con decisiones basadas en datos y no en intuición.',
      en: 'A panel to manage store, services and academy from one place. You control customers, products, orders, services and payments without asking a developer, with decisions backed by data rather than gut feeling.',
    },
    stats: [
      { n: '100+', label: { es: 'productos en el catálogo administrable', en: 'products in the manageable catalog' } },
      { n: '4', label: { es: 'servicios que se encienden y apagan con un interruptor', en: 'services switched on and off with a toggle' } },
      { n: '6', label: { es: 'métodos de pago habilitables', en: 'payment methods you can enable' } },
    ],
    articles: pick('cj-store', [7, 8]),
    services: [
      { es: 'Inicio con clientes, productos, usuarios nuevos y activos, crecimiento por mes y pedidos recientes', en: 'Home with customers, products, new and active users, monthly growth and recent orders' },
      { es: 'Interruptores para Servicios, Master Academy, Distribuidor y Tienda, con mensaje para el cliente', en: 'Toggles for Services, Master Academy, Distributor and Store, with a message for customers' },
      { es: 'Métodos de pago global o por área: tienda, servicios y academia', en: 'Payment methods globally or per area: store, services and academy' },
      { es: 'Catálogo con categoría, marca, precio, inventario y disponibilidad', en: 'Catalog with category, brand, price, inventory and availability' },
      { es: 'Cupones, categorías y marcas', en: 'Coupons, categories and brands' },
      { es: 'Órdenes, servicios, usuarios, aplicación y boletos de soporte', en: 'Orders, services, users, app and support tickets' },
    ],
    tech: [
      { k: { es: 'Menú', en: 'Menu' }, v: { es: 'Tienda (productos, cupones, categorías, marcas) · Órdenes · Servicios · Usuarios · Aplicación · Boletos de soporte', en: 'Store (products, coupons, categories, brands) · Orders · Services · Users · App · Support tickets' } },
      { k: { es: 'Pagos', en: 'Payments' }, v: { es: 'Tarjeta (Stripe), depósito, Mercado Pago, PayPal, transferencia o efectivo', en: 'Card (Stripe), deposit, Mercado Pago, PayPal, transfer or cash' } },
      { k: { es: 'Búsqueda', en: 'Search' }, v: { es: 'Comandos rápidos con ⌘K', en: 'Quick commands with ⌘K' } },
    ],
  },

  'food-app': {
    intro: {
      es: 'La app de Food&Co para iOS y Android, construida desde una sola base de código. Las apps de reseñas suelen ser frías, con calificaciones sueltas y poca comunidad; aquí descubrir dónde comer se siente social, cercano y visual, y los restaurantes se dan a conocer a través de la gente que los visita.',
      en: 'The Food&Co app for iOS and Android, built from a single codebase. Review apps tend to be cold, with loose ratings and little community; here discovering where to eat feels social, close and visual, and restaurants get known through the people who visit them.',
    },
    stats: [
      { n: '2', label: { es: 'plataformas: iOS y Android', en: 'platforms: iOS and Android' } },
      { n: '3', label: { es: 'formas de registro: correo, Google y Apple', en: 'sign-up options: email, Google and Apple' } },
      { n: '4', label: { es: 'ejes de la app: Descubre, Comparte, Conecta y Cocina', en: 'app pillars: Discover, Share, Connect and Cook' } },
    ],
    articles: pick('food-co', [0, 1, 2, 3]),
    services: [
      { es: 'App nativa iOS y Android desde una sola base de código', en: 'Native iOS and Android app from a single codebase' },
      { es: 'Diseño de interfaz propio, con modo oscuro y accesibilidad', en: 'Custom interface design with dark mode and accessibility' },
      { es: 'Feed social, perfiles, likes, comentarios, guardados y listas', en: 'Social feed, profiles, likes, comments, saves and lists' },
      { es: 'Editor de fotos integrado y recetas de la comunidad', en: 'Built-in photo editor and community recipes' },
      { es: 'Restaurantes cercanos y mapa interactivo', en: 'Nearby restaurants and interactive map' },
      { es: 'Conexión con servidor, mapas y notificaciones push', en: 'Server, maps and push notifications integration' },
      { es: 'Monitoreo de errores y documentación de configuración', en: 'Error monitoring and setup documentation' },
    ],
    tech: [
      { k: { es: 'Plataformas', en: 'Platforms' }, v: { es: 'iOS y Android (una sola base de código)', en: 'iOS and Android (single codebase)' } },
      { k: { es: 'Acceso', en: 'Sign-in' }, v: { es: 'Correo, Google y Apple', en: 'Email, Google and Apple' } },
      { k: { es: 'Accesibilidad', en: 'Accessibility' }, v: { es: 'Tamaño de texto ajustable, alto contraste, reducción de movimiento y modo oscuro', en: 'Adjustable text size, high contrast, reduced motion and dark mode' } },
    ],
  },

  'food-landing': {
    intro: {
      es: 'Una app nueva necesita una cara pública: explicar qué es, generar confianza y dirigir a las tiendas. La landing de Food&Co es bilingüe, rápida y con identidad propia, explica la app en segundos y además cumple los requisitos legales y de soporte que piden las tiendas para publicar.',
      en: 'A new app needs a public face: explain what it is, build trust and send people to the stores. The Food&Co landing page is bilingual, fast and has its own identity, explains the app in seconds and also meets the legal and support requirements the stores ask for before publishing.',
    },
    stats: [
      { n: '2', label: { es: 'idiomas, con modo claro y oscuro', en: 'languages, with light and dark mode' } },
      { n: '6', label: { es: 'funciones explicadas de un vistazo', en: 'features explained at a glance' } },
      { n: '3', label: { es: 'pasos: Descubre, Comparte, Conecta', en: 'steps: Discover, Share, Connect' } },
    ],
    articles: pick('food-co', [4, 5, 6]),
    services: [
      { es: 'Mensaje y estructura de la página, desde "La comida sabe mejor compartida"', en: 'Messaging and page structure, starting from "Food tastes better shared"' },
      { es: 'Diseño bilingüe ES/EN con modo claro y oscuro', en: 'Bilingual ES/EN design with light and dark mode' },
      { es: 'Páginas públicas para cada publicación, restaurante, receta y perfil', en: 'Public pages for every post, restaurant, recipe and profile' },
      { es: 'Enlaces universales de iOS y Android', en: 'iOS and Android universal links' },
      { es: 'Términos, privacidad, normas de comunidad, aviso y contenido', en: 'Terms, privacy, community guidelines, notice and content' },
      { es: 'Centro de ayuda y página para eliminar la cuenta', en: 'Help center and an account deletion page' },
    ],
    tech: [
      { k: { es: 'Sitio', en: 'Site' }, v: { es: 'foodncompany.com.mx', en: 'foodncompany.com.mx' } },
      { k: { es: 'Idiomas', en: 'Languages' }, v: { es: 'Español e inglés', en: 'Spanish and English' } },
      { k: { es: 'Beneficios', en: 'Benefits' }, v: { es: 'Primera impresión profesional, cumplimiento para publicar en tiendas, cada contenido compartido atrae nuevos usuarios y carga rápida', en: 'Professional first impression, compliance to publish on the stores, every shared item attracts new users and fast loading' } },
    ],
  },

  'food-dashboard': {
    intro: {
      es: 'Una app social crece rápido: miles de fotos, usuarios, reportes y costos de almacenamiento. El equipo de Food&Co necesitaba ver, moderar y decidir desde un solo lugar, así que Infinity construyó un panel web seguro, con acceso solo para administradores, conectado en tiempo real con la app y el servidor.',
      en: 'A social app grows fast: thousands of photos, users, reports and storage costs. The Food&Co team needed to see, moderate and decide from a single place, so Infinity built a secure web panel, admin-only, connected in real time with the app and the server.',
    },
    stats: [
      { n: '9', label: { es: 'módulos de administración', en: 'administration modules' } },
      { n: '7·14·30', label: { es: 'días de rango en la analítica de almacenamiento', en: 'day ranges in the storage analytics' } },
      { n: '⌘K', label: { es: 'buscador global', en: 'global search' } },
    ],
    articles: pick('food-co', [7, 8, 9]),
    services: [
      { es: 'Analítica: panorama general de la plataforma', en: 'Analytics: platform overview' },
      { es: 'Usuarios con estadísticas: ver, buscar y gestionar cuentas', en: 'Users with stats: view, search and manage accounts' },
      { es: 'Administradores: quién tiene acceso al panel', en: 'Administrators: who has access to the panel' },
      { es: 'Publicaciones: revisar y moderar el contenido', en: 'Posts: review and moderate content' },
      { es: 'Recetas: administrar el recetario', en: 'Recipes: manage the recipe book' },
      { es: 'Restaurantes con estadísticas: alta, edición y métricas de cada local', en: 'Restaurants with stats: creation, editing and metrics for each venue' },
      { es: 'Importar desde Google Places en lugar de capturar a mano', en: 'Import from Google Places instead of manual entry' },
      { es: 'Soporte: lista de tickets de ayuda', en: 'Support: help ticket list' },
      { es: 'Servicios · R2 Analytics: costos y uso del almacenamiento de imágenes', en: 'Services · R2 Analytics: image storage cost and usage' },
    ],
    tech: [
      { k: { es: 'Acceso', en: 'Access' }, v: { es: 'Inicio de sesión protegido, solo administradores', en: 'Protected sign-in, administrators only' } },
      { k: { es: 'Interfaz', en: 'Interface' }, v: { es: 'Buscador global, menú lateral colapsable, modo claro y oscuro, tablas, calendarios y mapas', en: 'Global search, collapsible side menu, light and dark mode, tables, calendars and maps' } },
      { k: { es: 'Beneficios', en: 'Benefits' }, v: { es: 'Menos tareas manuales, control del costo de almacenamiento antes de que crezca, moderación y soporte centralizados', en: 'Fewer manual tasks, storage cost control before it grows, centralized moderation and support' } },
    ],
  },

  'sano-app': {
    intro: {
      es: 'La app para consumidores de Sano (iOS). Apuntas la cámara al código de barras y obtienes un score de 0 a 100 con contexto NOM-051, aditivos explicados y alternativas más saludables disponibles en México, calculado según tu perfil de salud. Incluye historial y modo familia.',
      en: 'Sano’s consumer app (iOS). Point the camera at the barcode and get a 0 to 100 score with NOM-051 context, explained additives and healthier alternatives available in Mexico, calculated for your health profile. It includes history and family mode.',
    },
    stats: [
      { n: '0–100', label: { es: 'calificación por producto', en: 'score per product' } },
      { n: '5', label: { es: 'perfiles de salud por cuenta', en: 'health profiles per account' } },
      { n: '$0', label: { es: 'todas las funciones, gratis', en: 'every feature, free' } },
    ],
    articles: pick('sano', [1, 2, 3]),
    services: [
      { es: 'Escaneo de código de barras', en: 'Barcode scanning' },
      { es: 'Score basado en Nutri-Score, ajustado a NOM-051 y al perfil de salud', en: 'Score based on Nutri-Score, adjusted for NOM-051 and the health profile' },
      { es: 'Sellos NOM-051 y aditivos explicados en lenguaje claro', en: 'NOM-051 labels and additives explained in plain language' },
      { es: 'Alternativas mejor calificadas de la misma categoría', en: 'Better-rated alternatives in the same category' },
      { es: 'Historial, perfil personalizado y modo familia', en: 'History, personalized profile and family mode' },
    ],
    tech: [
      { k: { es: 'Plataforma', en: 'Platform' }, v: { es: 'App móvil para iOS', en: 'iOS mobile app' } },
      { k: { es: 'Privacidad', en: 'Privacy' }, v: { es: 'El perfil de salud solo sirve para calcular el score; no se vende ni se usa para publicidad', en: 'The health profile is only used to compute the score; it is never sold or used for ads' } },
      { k: { es: 'Aviso', en: 'Notice' }, v: { es: 'El score es orientativo y no sustituye la consulta con un profesional de la salud', en: 'The score is informative and does not replace a health professional’s advice' } },
    ],
  },

  'sano-landing': {
    intro: {
      es: 'El sitio de lanzamiento de Sano. Explica en un vistazo por qué los sellos negros no bastan y qué hace diferente a la app, con una tarjeta de score en la portada, un comparador de cereales, el modo familia y el reporte semanal. Todo con un estilo oscuro propio que invita a la descarga.',
      en: 'Sano’s launch site. It explains at a glance why the black warning labels are not enough and what makes the app different, with a score card on the hero, a cereal comparator, family mode and the weekly report. All in its own dark style that invites the download.',
    },
    stats: [
      { n: '4', label: { es: 'diferenciadores: score, perfil, aditivos y alternativas', en: 'differentiators: score, profile, additives and alternatives' } },
      { n: '5', label: { es: 'perfiles de salud por cuenta', en: 'health profiles per account' } },
      { n: '$0', label: { es: 'todas las funciones, gratis', en: 'every feature, free' } },
    ],
    articles: pick('sano', [0, 4, 5]),
    services: [
      { es: 'Mensaje y estructura: "Sabe lo que comes antes de meterlo al carrito"', en: 'Messaging and structure: "Know what you eat before it hits the cart"' },
      { es: 'Portada con tarjetas de score, sellos, aditivos y alternativas', en: 'Hero with score, label, additive and alternative cards' },
      { es: 'Sección de funciones y comparador de productos', en: 'Features section and product comparator' },
      { es: 'Modo familia y reporte semanal explicados con ejemplos', en: 'Family mode and weekly report explained with examples' },
      { es: 'Compromiso de privacidad: tus datos, tuyos', en: 'Privacy commitment: your data, yours' },
    ],
    tech: [
      { k: { es: 'Sitio', en: 'Site' }, v: { es: 'sano.infinitydev.agency', en: 'sano.infinitydev.agency' } },
      { k: { es: 'Estilo', en: 'Style' }, v: { es: 'Tema oscuro con acentos azules y verdes, con tarjetas que reproducen la app', en: 'Dark theme with blue and green accents, with cards that reproduce the app' } },
      { k: { es: 'Secciones', en: 'Sections' }, v: { es: 'Portada, funciones, por qué Sano, tu contexto y descarga', en: 'Hero, features, why Sano, your context and download' } },
    ],
  },

  'sano-dashboard': {
    intro: {
      es: 'El panel de operación de Sano para escritorio. El equipo administra el catálogo, los usuarios, las reglas del score, el contenido, los reportes y el soporte sin depender de desarrolladores, y la inteligencia artificial integrada reduce la captura manual de datos desde fotos del empaque.',
      en: 'Sano’s desktop operations panel. The team manages the catalog, users, scoring rules, content, reports and support without depending on developers, and the built-in artificial intelligence reduces manual data entry from package photos.',
    },
    stats: [
      { n: '9,000+', label: { es: 'productos bajo control', en: 'products under control' } },
      { n: '10', label: { es: 'secciones de operación', en: 'operation sections' } },
      { n: '3', label: { es: 'fotos del empaque para prellenar una ficha: frente, lateral y trasera', en: 'package photos to pre-fill a record: front, side and back' } },
    ],
    articles: pick('sano', [6, 7, 8, 9, 10]),
    services: [
      { es: 'Inicio con escaneos, usuarios únicos, productos consultados y score promedio', en: 'Home with scans, unique users, products viewed and average score' },
      { es: 'Catálogo con búsqueda, completitud de cada ficha y revisión de imágenes', en: 'Catalog with search, record completeness and image review' },
      { es: 'Alta y edición con recorte y quitado automático de fondo', en: 'Create and edit with cropping and automatic background removal' },
      { es: '"Analizar con IA": un modelo de visión extrae los datos del empaque y el equipo confirma', en: '"Analyze with AI": a vision model extracts package data and the team confirms' },
      { es: 'Usuarios, Score, Feed, Archivos y Reportes', en: 'Users, Score, Feed, Files and Reports' },
      { es: 'Problemas y sugerencias, y Bugs', en: 'Problems and suggestions, and Bugs' },
      { es: 'Configuración remota de la app', en: 'Remote app configuration' },
    ],
    tech: [
      { k: { es: 'Seguridad', en: 'Security' }, v: { es: 'Sesiones cifradas y control de accesos en el panel', en: 'Encrypted sessions and access control in the panel' } },
      { k: { es: 'IA', en: 'AI' }, v: { es: 'Modelo de visión que corre en la propia computadora para extraer marca, sellos NOM-051, tabla nutrimental y código de barras', en: 'Vision model running on the team’s own computer to extract brand, NOM-051 labels, nutrition table and barcode' } },
      { k: { es: 'Arquitectura', en: 'Architecture' }, v: { es: 'Modular por dominios, preparada para crecer', en: 'Domain-based modular, ready to grow' } },
    ],
  },

  'pixoteria-app': {
    intro: {
      es: 'Pixotería es un juego de lotería mexicana multijugador que se juega en la misma red WiFi: un teléfono crea la partida, los demás la encuentran solos y se unen. Todo ocurre entre los dispositivos; no existe ningún servidor detrás. Nueve barajas ilustradas en pixel art, con voz que canta las cartas.',
      en: 'Pixotería is a multiplayer Mexican lottery game played on the same WiFi network: one phone creates the game, the others find it on their own and join. Everything happens between devices; there is no server behind it. Nine pixel art illustrated decks, with a voice that calls the cards.',
    },
    stats: [
      { n: '9', label: { es: 'barajas con personalidad propia', en: 'decks with their own personality' } },
      { n: '486', label: { es: 'cartas ilustradas (9 × 54)', en: 'illustrated cards (9 × 54)' } },
      { n: '3', label: { es: 'patrones de victoria: tabla llena, línea o esquinas', en: 'winning patterns: full board, line or corners' } },
      { n: '0', label: { es: 'cuentas, anuncios o datos recopilados', en: 'accounts, ads or collected data' } },
    ],
    articles: pick('pixoteria', [0, 1, 2, 3, 4, 5]),
    services: [
      { es: 'Concepto y diseño de producto', en: 'Product concept and design' },
      { es: 'Diseño de interfaz y sistema visual en pixel art', en: 'Interface design and pixel art visual system' },
      { es: 'Ilustración de nueve barajas de 54 cartas', en: 'Illustration of nine 54-card decks' },
      { es: 'Desarrollo móvil para iOS y Android con una sola base de código', en: 'Mobile development for iOS and Android from a single codebase' },
      { es: 'Juego multijugador en red local con descubrimiento automático', en: 'Local-network multiplayer with automatic discovery' },
      { es: 'Español e inglés, escala de fuente para accesibilidad y voz que canta las cartas', en: 'Spanish and English, font scaling for accessibility and a voice that calls the cards' },
      { es: 'Pruebas automatizadas y verificación continua', en: 'Automated testing and continuous verification' },
    ],
    tech: [
      { k: { es: 'Plataformas', en: 'Platforms' }, v: { es: 'iOS y Android', en: 'iOS and Android' } },
      { k: { es: 'Tecnología', en: 'Stack' }, v: { es: 'Expo / React Native (TypeScript), expo-router, Zustand, i18next', en: 'Expo / React Native (TypeScript), expo-router, Zustand, i18next' } },
      { k: { es: 'Red', en: 'Network' }, v: { es: 'TCP en red local y descubrimiento automático (mDNS/Bonjour)', en: 'Local-network TCP and automatic discovery (mDNS/Bonjour)' } },
      { k: { es: 'Modelo', en: 'Model' }, v: { es: 'Anfitrión autoritativo: él decide, los demás reciben', en: 'Authoritative host: the host decides, the others receive' } },
    ],
  },

  'pixoteria-web': {
    intro: {
      es: 'El sitio de lanzamiento de Pixotería. Mantiene la estética pixel art del juego, presenta las nueve barajas con sus personajes, muestra la app en teléfonos y publica la política de privacidad en español e inglés, como piden las tiendas. Su mensaje: el mazo lo elige quien invita.',
      en: 'Pixotería’s launch site. It keeps the game’s pixel art look, presents the nine decks with their characters, shows the app on phones and publishes the privacy policy in Spanish and English, as the stores require. Its message: whoever invites chooses the deck.',
    },
    stats: [
      { n: '9', label: { es: 'barajas presentadas con sus personajes', en: 'decks presented with their characters' } },
      { n: '2', label: { es: 'idiomas en la política de privacidad', en: 'languages in the privacy policy' } },
      { n: '0', label: { es: 'cuentas, anuncios o datos recopilados', en: 'accounts, ads or collected data' } },
    ],
    articles: pick('pixoteria', [6, 7]),
    services: [
      { es: 'Sitio de lanzamiento con la identidad pixel art del juego', en: 'Launch site with the game’s pixel art identity' },
      { es: 'Carrusel y galería de las nueve barajas', en: 'Carousel and gallery of the nine decks' },
      { es: 'Sección "Así se ve" con capturas en teléfonos', en: '"This is how it looks" section with phone screenshots' },
      { es: 'Política de privacidad pública, en español e inglés', en: 'Public privacy policy, in Spanish and English' },
      { es: 'Soporte y despliegue en Cloudflare', en: 'Support and Cloudflare deployment' },
    ],
    tech: [
      { k: { es: 'Tecnología', en: 'Stack' }, v: { es: 'Astro, sitio estático', en: 'Astro, static site' } },
      { k: { es: 'Alojamiento', en: 'Hosting' }, v: { es: 'Cloudflare', en: 'Cloudflare' } },
      { k: { es: 'Secciones', en: 'Sections' }, v: { es: 'Mazos, Barajas, Capturas, Privacidad y Soporte', en: 'Decks, Cards, Screenshots, Privacy and Support' } },
    ],
  },
}

export const productDetail = (product: Product): Detail => {
  const parent = project(product.projectId)
  const detail = own[product.id]

  // Infinity Lens y su landing ya son un proyecto completo cada uno
  if (!detail) return parent

  return {
    tag: kindLabels[product.kind],
    title: product.name,
    tone: parent.tone,
    cover: product.images,
    link: product.link
      ? { href: product.link.href, label: { es: 'Ver el sitio en vivo', en: 'Visit the live site' } }
      : undefined,
    ...detail,
  }
}
