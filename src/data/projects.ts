export type L = { es: string; en: string }

export type Article = {
  title: L
  /** Párrafo introductorio opcional */
  text?: L
  bullets?: L[]
  image: string
  alt: L
  /** phone = captura vertical de iPhone, wide = captura de navegador */
  kind: 'phone' | 'wide'
}

export type Project = {
  id: string
  tag: L
  title: L
  summary: L
  /** Tamaño dentro de la cuadrícula tipo bento */
  size: 'feature' | 'wide' | 'tall' | 'banner' | 'small'
  /** Fondo de la tarjeta y de la cabecera del modal */
  tone: string
  /** Imágenes de la tarjeta y de la cabecera del modal */
  cover: { src: string; kind: 'phone' | 'wide' }[]
  intro: L
  stats: { n: string; label: L }[]
  articles: Article[]
  services: L[]
  tech: { k: L; v: L }[]
  link?: { href: string; label: L }
}

/** Lo mínimo que necesita el modal, sirve tanto para un proyecto como para un producto */
export type Detail = Pick<Project, 'tag' | 'title' | 'tone' | 'cover' | 'intro' | 'stats' | 'articles' | 'services' | 'tech' | 'link'>

const lens = (f: string) => `/projects/lens/${f}.webp`
const land = (f: string) => `/projects/lens-landing/${f}.webp`
const cj = (f: string) => `/projects/cj-store/${f}.webp`
const fc = (f: string) => `/projects/food-co/${f}.webp`
const sn = (f: string) => `/projects/sano/${f}.webp`
const px = (f: string) => `/projects/pixoteria/${f}.webp`

export const projects: Project[] = [
  {
    id: 'infinity-lens',
    tag: { es: 'App iPhone', en: 'iPhone app' },
    title: { es: 'Infinity Lens', en: 'Infinity Lens' },
    summary: {
      es: 'Fotografía un ticket y la app lee el total, la fecha y el comercio. Todo se queda en tu iPhone.',
      en: 'Snap a receipt and the app reads the total, date and merchant. Everything stays on your iPhone.',
    },
    size: 'feature',
    tone: 'linear-gradient(150deg,#15151a 0%,#2a2a33 100%)',
    cover: [
      { src: lens('tienda-02-escanear'), kind: 'phone' },
      { src: lens('tienda-05-resumen'), kind: 'phone' },
    ],
    intro: {
      es: 'Infinity Lens convierte la foto de un ticket en un gasto ordenado: total, fecha, comercio y categoría. Además te avisa cuándo vence la luz, cuánto gastas en suscripciones y si te pasaste del presupuesto. Tú siempre confirmas antes de guardar. Diseñada, desarrollada, traducida y preparada para publicar de principio a fin por Infinity.',
      en: 'Infinity Lens turns a photo of a receipt into a tidy expense: total, date, merchant and category. It also warns you when the electricity bill is due, how much you spend on subscriptions and whether you went over budget. You always confirm before saving. Designed, built, translated and prepared for release end to end by Infinity.',
    },
    stats: [
      { n: '6', label: { es: 'idiomas', en: 'languages' } },
      { n: '318', label: { es: 'pruebas automáticas', en: 'automated tests' } },
      { n: '15', label: { es: 'monedas', en: 'currencies' } },
      { n: '0', label: { es: 'cuentas, anuncios o datos recopilados', en: 'accounts, ads or collected data' } },
    ],
    articles: [
      {
        title: { es: 'Un ticket en tres pasos', en: 'A receipt in three steps' },
        text: {
          es: 'Escanear no debería ser un trámite. La app propone los datos y tú decides.',
          en: 'Scanning should not be a chore. The app suggests the data and you decide.',
        },
        bullets: [
          {
            es: 'Escanea: con la cámara (varias hojas si es largo), desde una foto, un PDF o a mano.',
            en: 'Scan: with the camera (several sheets if it is long), from a photo, a PDF or by hand.',
          },
          {
            es: 'Confirma: propone total, fecha, comercio y categoría, y dice qué tan segura está.',
            en: 'Confirm: it proposes total, date, merchant and category, and says how sure it is.',
          },
          {
            es: 'Encuéntralo: busca por comercio, monto, nota, etiqueta o hasta por un producto del ticket.',
            en: 'Find it: search by merchant, amount, note, tag or even a product on the receipt.',
          },
        ],
        image: lens('tienda-01-lista'),
        alt: { es: 'Lista de gastos con búsqueda y filtros', en: 'Expense list with search and filters' },
        kind: 'phone',
      },
      {
        title: { es: 'Prefiere dejar un campo vacío antes que equivocarse', en: 'It would rather leave a field blank than get it wrong' },
        text: {
          es: 'Si dos lecturas se contradicen, la app no adivina: te avisa. Cuando coinciden, lo dice ("Confirmado: coincide con el importe con letra"). Un PDF que descargas de tu compañía de luz se lee directo, sin cámara; uno escaneado pasa por el OCR hoja por hoja.',
          en: 'If two readings contradict each other, the app does not guess: it tells you. When they match, it says so ("Confirmed: matches the amount in words"). A PDF downloaded from your utility is read directly, no camera needed; a scanned one goes through OCR sheet by sheet.',
        },
        image: lens('confirmar-gasto'),
        alt: { es: 'Pantalla para confirmar un gasto', en: 'Expense confirmation screen' },
        kind: 'phone',
      },
      {
        title: { es: 'Que no se te pase pagar la luz', en: 'Never miss a bill again' },
        bullets: [
          {
            es: 'Lee la fecha límite de pago del recibo y propone el vencimiento, con recordatorios el mismo día o 1, 3 o 7 días antes.',
            en: 'Reads the payment deadline from the bill and proposes a due date, with reminders on the day or 1, 3 or 7 days before.',
          },
          {
            es: 'Al marcar un recibo como pagado, crea solo el del siguiente periodo.',
            en: 'When you mark a bill as paid, it creates the next period’s bill for you.',
          },
          {
            es: 'Calendario de pagos con puntos de color: rojo vencido, naranja por pagar, verde pagado.',
            en: 'Payment calendar with colored dots: red overdue, orange due, green paid.',
          },
          {
            es: 'Widgets de pantalla de inicio y de pantalla bloqueada con el próximo pago.',
            en: 'Home and lock screen widgets with your next payment.',
          },
        ],
        image: lens('tienda-03-calendario'),
        alt: { es: 'Calendario de pagos', en: 'Payment calendar' },
        kind: 'phone',
      },
      {
        title: { es: 'Suscripciones y presupuestos', en: 'Subscriptions and budgets' },
        bullets: [
          {
            es: '"Gastas $X al año" en Netflix, Spotify, iCloud… un renglón por moneda, sin conversiones sorpresa.',
            en: '"You spend $X a year" on Netflix, Spotify, iCloud… one line per currency, no surprise conversions.',
          },
          {
            es: 'Cancelar sin borrar: lo cancelado se queda en el historial con su pastilla "Cancelada".',
            en: 'Cancel without deleting: cancelled items stay in your history with a "Cancelled" pill.',
          },
          {
            es: 'Un límite al mes por categoría: barra verde, naranja desde el 80 % y roja al pasarte.',
            en: 'A monthly limit per category: green bar, orange from 80% and red when you go over.',
          },
        ],
        image: lens('tienda-06-presupuestos'),
        alt: { es: 'Presupuestos por categoría', en: 'Budgets by category' },
        kind: 'phone',
      },
      {
        title: { es: 'Privacidad que se puede comprobar', en: 'Privacy you can verify' },
        bullets: [
          {
            es: 'El texto se lee con la tecnología de Apple dentro del iPhone: las fotos nunca salen. Sin servidor, sin cuenta, sin anuncios.',
            en: 'Text is read with Apple’s on-device technology: photos never leave the phone. No server, no account, no ads.',
          },
          {
            es: 'En la ficha de App Store, la privacidad dice "datos no recopilados", y es verdad.',
            en: 'On the App Store listing, privacy says "data not collected", and it is true.',
          },
          {
            es: 'Respaldo cifrado con tu contraseña (AES-256) y bloqueo opcional con Face ID.',
            en: 'Encrypted backup with your password (AES-256) and optional Face ID lock.',
          },
        ],
        image: lens('privacidad'),
        alt: { es: 'Pantalla de privacidad de la app', en: 'In-app privacy screen' },
        kind: 'phone',
      },
      {
        title: { es: 'Para trabajar y para guardar', en: 'For work and for keeping' },
        bullets: [
          {
            es: 'Gastos de trabajo y "por reembolsar": cuánto te deben.',
            en: 'Work expenses and "to be reimbursed": how much you are owed.',
          },
          {
            es: 'Facturas (PDF/XML) y garantías, con aviso 30 días antes de que terminen.',
            en: 'Invoices (PDF/XML) and warranties, with a notice 30 days before they end.',
          },
          {
            es: '15 monedas con tipo de cambio escrito por ti, para viajes. Categorías propias, reporte mensual en PDF y exportación a CSV.',
            en: '15 currencies with an exchange rate you type in, for trips. Custom categories, monthly PDF report and CSV export.',
          },
        ],
        image: lens('calendario-garantia'),
        alt: { es: 'Calendario con fin de garantía', en: 'Calendar showing a warranty end' },
        kind: 'phone',
      },
    ],
    services: [
      { es: 'Concepto y diseño de producto, con modelo de negocio (gratis vs. Pro)', en: 'Product concept and design, with business model (free vs. Pro)' },
      { es: 'Diseño de interfaz y sistema visual, claro y oscuro', en: 'Interface and visual system design, light and dark' },
      { es: 'Diseño del ícono de la app', en: 'App icon design' },
      { es: 'Desarrollo nativo para iPhone', en: 'Native iPhone development' },
      { es: 'Lectura de tickets con OCR en el dispositivo y reglas propias', en: 'On-device receipt OCR with custom rules' },
      { es: 'Widgets, recordatorios locales, Face ID y respaldo cifrado', en: 'Widgets, local reminders, Face ID and encrypted backup' },
      { es: 'Compra única con StoreKit 2, sin servidor', en: 'One-time purchase with StoreKit 2, no server' },
      { es: 'Traducción a 6 idiomas y ficha de App Store en 11 variantes regionales', en: '6-language translation and App Store listing in 11 regional variants' },
      { es: 'Accesibilidad: letra grande, VoiceOver y contraste medido', en: 'Accessibility: large text, VoiceOver and measured contrast' },
      { es: 'Pruebas automatizadas y preparación de la publicación', en: 'Automated tests and release preparation' },
    ],
    tech: [
      { k: { es: 'Plataforma', en: 'Platform' }, v: { es: 'iPhone, iOS 18 o superior', en: 'iPhone, iOS 18 or later' } },
      { k: { es: 'Tecnología', en: 'Stack' }, v: { es: 'Swift 6, SwiftUI, SwiftData, Swift Charts, Vision, VisionKit, PDFKit, WidgetKit, StoreKit 2', en: 'Swift 6, SwiftUI, SwiftData, Swift Charts, Vision, VisionKit, PDFKit, WidgetKit, StoreKit 2' } },
      { k: { es: 'Lógica', en: 'Logic' }, v: { es: 'Paquete propio TicketKit, separado de la pantalla, con 318 pruebas automáticas', en: 'In-house TicketKit package, separate from the UI, with 318 automated tests' } },
      { k: { es: 'Inteligencia', en: 'Intelligence' }, v: { es: 'Sin modelos de IA ni servidores: OCR de Apple + reglas en Swift', en: 'No AI models or servers: Apple OCR + Swift rules' } },
      { k: { es: 'Cifrado', en: 'Encryption' }, v: { es: 'PBKDF2-HMAC-SHA256 (600 000 vueltas) + AES-256-GCM', en: 'PBKDF2-HMAC-SHA256 (600,000 rounds) + AES-256-GCM' } },
      { k: { es: 'Idiomas', en: 'Languages' }, v: { es: 'Español, inglés, portugués (Brasil), francés, alemán, italiano', en: 'Spanish, English, Portuguese (Brazil), French, German, Italian' } },
    ],
  },
  {
    id: 'infinity-lens-landing',
    tag: { es: 'Sitio web', en: 'Website' },
    title: { es: 'Landing de Infinity Lens', en: 'Infinity Lens landing' },
    summary: {
      es: 'El sitio de lanzamiento de una app: seis idiomas, SEO listo y carga al instante.',
      en: 'A launch site for an app: six languages, SEO-ready and instant loading.',
    },
    size: 'wide',
    tone: 'linear-gradient(150deg,#5b21b6 0%,#2563eb 100%)',
    cover: [
      { src: land('desktop-01-portada'), kind: 'wide' },
      { src: land('movil-01-portada'), kind: 'phone' },
    ],
    intro: {
      es: 'Una página de producto para una app de iPhone: portada con la propuesta de valor, cómo funciona, funciones, privacidad, preguntas frecuentes, política de privacidad, términos y soporte, todo en español, inglés, portugués, francés, alemán e italiano. Diseñada, desarrollada, traducida y desplegada por Infinity.',
      en: 'A product page for an iPhone app: a home with the value proposition, how it works, features, privacy, FAQ, privacy policy, terms and support, all in Spanish, English, Portuguese, French, German and Italian. Designed, built, translated and deployed by Infinity.',
    },
    stats: [
      { n: '6', label: { es: 'idiomas', en: 'languages' } },
      { n: '100', label: { es: 'Rendimiento y SEO (Lighthouse)', en: 'Performance and SEO (Lighthouse)' } },
      { n: '0.6 s', label: { es: 'al primer contenido visible', en: 'to first contentful paint' } },
      { n: '0', label: { es: 'cookies de seguimiento', en: 'tracking cookies' } },
    ],
    articles: [
      {
        title: { es: 'Una portada que se entiende sola', en: 'A home page that explains itself' },
        bullets: [
          {
            es: 'Titular en tres líneas, la última con degradado para dar jerarquía.',
            en: 'A three-line headline, the last line with a gradient for hierarchy.',
          },
          {
            es: 'Tarjetas flotantes ("Leído del ticket", "Servidores: 0") que cuentan la historia sin leer nada.',
            en: 'Floating cards ("Read from receipt", "Servers: 0") that tell the story without reading.',
          },
          {
            es: 'Tres garantías bajo el botón: sin cuentas, sin anuncios, funciona sin internet.',
            en: 'Three guarantees under the button: no accounts, no ads, works offline.',
          },
          {
            es: 'Una sola acción principal: el botón de App Store.',
            en: 'A single main action: the App Store button.',
          },
        ],
        image: land('desktop-01-portada'),
        alt: { es: 'Portada del sitio de Infinity Lens', en: 'Infinity Lens site home page' },
        kind: 'wide',
      },
      {
        title: { es: 'Del móvil al escritorio, sin rehacer nada', en: 'From mobile to desktop, nothing redone' },
        text: {
          es: 'Pensado primero para pantallas pequeñas, porque la mayoría de las visitas a una app llegan de un teléfono. Las nueve funciones pasan de una cuadrícula irregular en escritorio a una columna en móvil, las preguntas se abren como acordeón y el selector de idioma siempre está a la mano.',
          en: 'Designed for small screens first, because most visits to an app site come from a phone. The nine features go from an irregular grid on desktop to a single column on mobile, FAQs open as an accordion and the language switcher is always at hand.',
        },
        image: land('movil-04-funciones'),
        alt: { es: 'Funciones en versión móvil', en: 'Features on mobile' },
        kind: 'phone',
      },
      {
        title: { es: 'Seis idiomas, un solo sitio', en: 'Six languages, one site' },
        bullets: [
          {
            es: 'Español como idioma principal y /en, /pt, /fr, /de e /it, cada uno con su propia URL.',
            en: 'Spanish as the main language plus /en, /pt, /fr, /de and /it, each with its own URL.',
          },
          {
            es: 'Los textos legales no se traducen con un botón: están escritos completos por idioma.',
            en: 'Legal texts are not machine-switched: they are written in full for every language.',
          },
          {
            es: 'Cada página avisa a los buscadores de sus versiones en otros idiomas.',
            en: 'Each page tells search engines about its versions in other languages.',
          },
        ],
        image: land('idioma-pt-portada'),
        alt: { es: 'Portada en portugués', en: 'Home page in Portuguese' },
        kind: 'wide',
      },
      {
        title: { es: 'Para que te encuentren', en: 'Built to be found' },
        bullets: [
          {
            es: 'Título y descripción propios por página e idioma, enlace canónico y mapa del sitio.',
            en: 'Own title and description per page and language, canonical link and sitemap.',
          },
          {
            es: 'Imagen al compartir: al pegar el enlace en WhatsApp, iMessage o redes sale una tarjeta con logo y titular.',
            en: 'Share image: pasting the link in WhatsApp, iMessage or social media shows a card with logo and headline.',
          },
          {
            es: 'Datos estructurados que describen la página como aplicación móvil.',
            en: 'Structured data describing the page as a mobile application.',
          },
        ],
        image: land('lighthouse-cifras'),
        alt: { es: 'Medición de Lighthouse', en: 'Lighthouse measurement' },
        kind: 'wide',
      },
      {
        title: { es: 'Privacidad, también al publicar', en: 'Privacy, also at launch' },
        text: {
          es: 'Política de privacidad, términos y soporte publicados en cada idioma, requisito de App Store. Se actualizan junto con la app: cuando una función cambia lo que se hace con los datos, la política cambia en el mismo trabajo.',
          en: 'Privacy policy, terms and support published in every language, an App Store requirement. They are updated together with the app: when a feature changes what happens to data, the policy changes in the same piece of work.',
        },
        image: land('pagina-privacidad'),
        alt: { es: 'Página de política de privacidad', en: 'Privacy policy page' },
        kind: 'wide',
      },
    ],
    services: [
      { es: 'Estrategia de mensaje y estructura de la página', en: 'Messaging strategy and page structure' },
      { es: 'Diseño visual y paleta de marca (negro y grafito)', en: 'Visual design and brand palette (black and graphite)' },
      { es: 'Logotipo y variantes para web y pantalla de inicio', en: 'Logo and variants for web and home screen' },
      { es: 'Desarrollo de la página responsive', en: 'Responsive page development' },
      { es: 'Traducción a seis idiomas y selector', en: 'Six-language translation and switcher' },
      { es: 'SEO técnico e imagen para compartir', en: 'Technical SEO and share image' },
      { es: 'Política de privacidad, términos y soporte', en: 'Privacy policy, terms and support' },
      { es: 'Despliegue en Cloudflare con dominio propio', en: 'Cloudflare deployment on a custom domain' },
      { es: 'Documentación para mantenerlo', en: 'Documentation to maintain it' },
    ],
    tech: [
      { k: { es: 'Tecnología', en: 'Stack' }, v: { es: 'Astro 5 (sitio estático), React 19 solo donde hay interacción, Tailwind CSS 4', en: 'Astro 5 (static site), React 19 only where interactive, Tailwind CSS 4' } },
      { k: { es: 'Idiomas', en: 'Languages' }, v: { es: 'es, en, pt-BR, fr, de, it', en: 'es, en, pt-BR, fr, de, it' } },
      { k: { es: 'Alojamiento', en: 'Hosting' }, v: { es: 'Cloudflare Workers con archivos estáticos', en: 'Cloudflare Workers with static assets' } },
      { k: { es: 'SEO', en: 'SEO' }, v: { es: 'canonical, hreflang, Open Graph, JSON-LD, sitemap', en: 'canonical, hreflang, Open Graph, JSON-LD, sitemap' } },
      { k: { es: 'Medición', en: 'Measured' }, v: { es: 'Lighthouse (escritorio, 2026-10-13): 100 rendimiento · 96 accesibilidad · 96 buenas prácticas · 100 SEO', en: 'Lighthouse (desktop, 2026-10-13): 100 performance · 96 accessibility · 96 best practices · 100 SEO' } },
    ],
    link: {
      href: 'https://lens.infinitydev.agency',
      label: { es: 'Ver el sitio en vivo', en: 'Visit the live site' },
    },
  },
  {
    id: 'cj-store',
    tag: { es: 'Web · App · Dashboard', en: 'Web · App · Dashboard' },
    title: { es: 'CJ Store', en: 'CJ Store' },
    summary: {
      es: 'Tienda, servicios con agenda y academia para un negocio de detallado automotriz: sitio, app y panel de control.',
      en: 'Store, bookable services and academy for an auto-detailing business: website, app and control panel.',
    },
    size: 'wide',
    tone: 'linear-gradient(150deg,#1c0a0a 0%,#8a1c1c 100%)',
    cover: [
      { src: cj('web-inicio'), kind: 'wide' },
      { src: cj('m-03-home-tienda'), kind: 'phone' },
    ],
    intro: {
      es: 'Un solo sistema donde el cliente compra productos, agenda servicios y se inscribe a seminarios, sin llamadas ni mensajes de ida y vuelta. Incluye el sitio web, la app móvil y un dashboard para que el negocio administre todo sin pedirle nada a un programador. Los tres se mantienen sincronizados.',
      en: 'A single system where customers buy products, book services and sign up for seminars, with no back-and-forth calls or messages. It includes the website, the mobile app and a dashboard so the business can manage everything without asking a developer. All three stay in sync.',
    },
    stats: [
      { n: '3', label: { es: 'plataformas conectadas: web, app y dashboard', en: 'connected platforms: web, app and dashboard' } },
      { n: '100+', label: { es: 'productos en el catálogo', en: 'products in the catalog' } },
      { n: '4', label: { es: 'pasos para agendar un servicio', en: 'steps to book a service' } },
      { n: '24/7', label: { es: 'ventas y reservas disponibles', en: 'sales and bookings available' } },
    ],
    articles: [
      {
        title: { es: 'Una tienda en línea con catálogo completo', en: 'An online store with a full catalog' },
        text: {
          es: 'Los negocios de detallado suelen vender por WhatsApp: se pierden citas, precios y pedidos. Aquí todo vive en un solo lugar.',
          en: 'Detailing shops often sell over WhatsApp: appointments, prices and orders get lost. Here everything lives in one place.',
        },
        bullets: [
          { es: 'Más de 100 productos con foto, precio y disponibilidad.', en: 'Over 100 products with photo, price and availability.' },
          { es: 'Destacados en carrusel, favoritos y secciones temáticas como "Fiebre de Pad’s".', en: 'Featured carousels, favorites and themed sections like "Pad Fever".' },
          { es: 'Carrito claro con cantidades, código de descuento y resumen del pedido.', en: 'Clear cart with quantities, discount code and order summary.' },
        ],
        image: cj('web-carrusel'),
        alt: { es: 'Carrusel de productos de la tienda', en: 'Store product carousel' },
        kind: 'wide',
      },
      {
        title: { es: 'Búsqueda que ayuda a comprar', en: 'Search that helps people buy' },
        bullets: [
          { es: 'Sugerencias mientras escribes.', en: 'Suggestions as you type.' },
          { es: 'Filtros por categoría, marca, disponibilidad, ofertas y precio.', en: 'Filters by category, brand, availability, deals and price.' },
          { es: 'Ficha de producto con descripción, estado y productos relacionados para aumentar el ticket.', en: 'Product page with description, status and related products to raise the order value.' },
        ],
        image: cj('web-filtros'),
        alt: { es: 'Filtros de productos', en: 'Product filters' },
        kind: 'wide',
      },
      {
        title: { es: 'Servicios con agenda en línea', en: 'Services with online booking' },
        text: {
          es: 'Paquetes claros con precio por tipo de vehículo y un asistente de cuatro pasos: paquete, horario, pago y confirmación, con el resumen de la reserva siempre visible.',
          en: 'Clear packages priced by vehicle type and a four-step assistant: package, time, payment and confirmation, with the booking summary always visible.',
        },
        image: cj('web-agendar'),
        alt: { es: 'Asistente para agendar un servicio', en: 'Service booking assistant' },
        kind: 'wide',
      },
      {
        title: { es: 'Una academia con inscripción y cupos', en: 'An academy with enrollment and seats' },
        text: {
          es: 'Cada seminario muestra fechas, horario, sede, instructor, precio y cupos disponibles. La inscripción y el pago se hacen desde el mismo sitio.',
          en: 'Each seminar shows dates, schedule, venue, instructor, price and available seats. Enrollment and payment happen on the same site.',
        },
        image: cj('web-academy-lista'),
        alt: { es: 'Página de Master Academy', en: 'Master Academy page' },
        kind: 'wide',
      },
      {
        title: { es: 'Contenido que educa para vender', en: 'Content that educates to sell' },
        text: {
          es: 'Una guía de PPF y Wrap ayuda al cliente a decidir qué servicio necesita, antes de preguntar.',
          en: 'A PPF and Wrap guide helps customers decide which service they need before they even ask.',
        },
        image: cj('web-ppf'),
        alt: { es: 'Guía para elegir entre PPF y Wrap', en: 'Guide to choosing between PPF and Wrap' },
        kind: 'wide',
      },
      {
        title: { es: 'Tu tienda y tus citas en el bolsillo', en: 'Your store and appointments in their pocket' },
        text: {
          es: 'La app móvil da presencia permanente en el teléfono del cliente. Compra, agenda y se inscribe desde ahí, y el negocio puede avisarle con notificaciones de promociones y recordatorios de citas.',
          en: 'The mobile app gives permanent presence on the customer’s phone. They buy, book and enroll from it, and the business can reach them with promotion notifications and appointment reminders.',
        },
        bullets: [
          { es: 'Catálogo con buscador, filtros, ofertas, favoritos y checkout en una sola pantalla.', en: 'Catalog with search, filters, deals, favorites and one-screen checkout.' },
          { es: 'Servicios en un panel que se desliza desde abajo: paquete, vehículo, fecha, hora, pago y confirmación.', en: 'Services in a bottom sheet: package, vehicle, date, time, payment and confirmation.' },
        ],
        image: cj('m-26-servicio-calendario-hora'),
        alt: { es: 'Calendario y horarios en la app', en: 'Calendar and time slots in the app' },
        kind: 'phone',
      },
      {
        title: { es: 'Mis registros, academia y perfil', en: 'My records, academy and profile' },
        bullets: [
          { es: 'Estado de cada servicio con vehículo, precio, factura y botón directo a la dirección del taller.', en: 'Status of every service with vehicle, price, invoice and a direct button to the shop’s address.' },
          { es: 'Seminarios con detalle e inscripción, y solicitud para ser distribuidor.', en: 'Seminars with details and enrollment, plus a distributor application.' },
          { es: 'Direcciones, esquema de color, ayuda y control de sesiones por dispositivo.', en: 'Addresses, color scheme, help and per-device session control.' },
        ],
        image: cj('m-31-servicios-mis-registros'),
        alt: { es: 'Pantalla Mis registros de la app', en: 'My records screen in the app' },
        kind: 'phone',
      },
      {
        title: { es: 'Un dashboard para ver tu negocio de un vistazo', en: 'A dashboard to see your business at a glance' },
        text: {
          es: 'Clientes, productos, usuarios nuevos y activos, crecimiento por mes y pedidos recientes en la pantalla de inicio. Decisiones con datos, no con intuición.',
          en: 'Customers, products, new and active users, monthly growth and recent orders on the home screen. Decisions backed by data, not gut feeling.',
        },
        image: cj('dash-inicio'),
        alt: { es: 'Pantalla principal del dashboard', en: 'Dashboard home screen' },
        kind: 'wide',
      },
      {
        title: { es: 'Control total, sin pedirle nada a un programador', en: 'Full control, without asking a developer' },
        bullets: [
          { es: 'Enciende y apaga Servicios, Master Academy, Distribuidor y Tienda con un interruptor; la app y el sitio se actualizan, e incluso puedes dejar un mensaje para el cliente.', en: 'Switch Services, Master Academy, Distributor and Store on or off; the app and site update, and you can even leave a message for customers.' },
          { es: 'Habilita tarjeta (Stripe), depósito, Mercado Pago, PayPal, transferencia o efectivo, global o por área.', en: 'Enable card (Stripe), deposit, Mercado Pago, PayPal, transfer or cash, globally or per area.' },
          { es: 'Catálogo con categoría, marca, precio, inventario y disponibilidad, más cupones, órdenes, usuarios y boletos de soporte. Búsqueda rápida con ⌘K.', en: 'Catalog with category, brand, price, inventory and availability, plus coupons, orders, users and support tickets. Quick search with ⌘K.' },
        ],
        image: cj('dash-productos'),
        alt: { es: 'Lista de productos en el dashboard', en: 'Product list in the dashboard' },
        kind: 'wide',
      },
    ],
    services: [
      { es: 'Sitio web comercial con tienda, servicios y academia', en: 'Commercial website with store, services and academy' },
      { es: 'App móvil para compras, citas e inscripciones', en: 'Mobile app for purchases, appointments and enrollments' },
      { es: 'Dashboard administrativo propio', en: 'Custom admin dashboard' },
      { es: 'Agenda en línea con paquetes por tipo de vehículo', en: 'Online booking with packages by vehicle type' },
      { es: 'Pagos: tarjeta (Stripe), efectivo, transferencia y depósito', en: 'Payments: card (Stripe), cash, transfer and deposit' },
      { es: 'Notificaciones de promociones y recordatorios de citas', en: 'Promotion notifications and appointment reminders' },
      { es: 'Cuentas de cliente con seguridad y modo oscuro', en: 'Customer accounts with security and dark mode' },
      { es: 'Información sincronizada entre sitio, app y dashboard', en: 'Data kept in sync across site, app and dashboard' },
    ],
    tech: [
      { k: { es: 'Plataformas', en: 'Platforms' }, v: { es: 'Sitio web, app móvil y dashboard administrativo', en: 'Website, mobile app and admin dashboard' } },
      { k: { es: 'Pagos', en: 'Payments' }, v: { es: 'Stripe, efectivo, transferencia, depósito; el dashboard también permite Mercado Pago y PayPal', en: 'Stripe, cash, transfer, deposit; the dashboard also supports Mercado Pago and PayPal' } },
      { k: { es: 'Administración', en: 'Admin' }, v: { es: 'Tienda, órdenes, servicios, usuarios, aplicación y boletos de soporte', en: 'Store, orders, services, users, app and support tickets' } },
    ],
  },
  {
    id: 'food-co',
    tag: { es: 'App · Web · Panel', en: 'App · Web · Admin' },
    title: { es: 'Food&Co', en: 'Food&Co' },
    summary: {
      es: 'Una red social para quienes viven para comer: app iOS y Android, landing bilingüe y panel de administración.',
      en: 'A social network for people who live to eat: iOS and Android app, bilingual landing page and admin panel.',
    },
    size: 'wide',
    tone: 'linear-gradient(150deg,#7c2d12 0%,#ea580c 100%)',
    cover: [
      { src: fc('app-feed-1'), kind: 'phone' },
      { src: fc('app-receta'), kind: 'phone' },
    ],
    intro: {
      es: 'Food&Co convierte cada platillo en una recomendación: fotos reales, reseñas honestas y restaurantes a un toque de distancia. Las apps de reseñas suelen ser frías, con calificaciones sueltas y poca comunidad; aquí descubrir dónde comer se siente social, cercano y visual, y los restaurantes se dan a conocer a través de la gente que los visita. Infinity diseñó y desarrolló todo de principio a fin: la app, el sitio y el panel.',
      en: 'Food&Co turns every dish into a recommendation: real photos, honest reviews and restaurants a tap away. Review apps tend to be cold, with loose ratings and little community; here discovering where to eat feels social, close and visual, and restaurants get known through the people who visit them. Infinity designed and built everything end to end: the app, the site and the admin panel.',
    },
    stats: [
      { n: '3', label: { es: 'piezas conectadas: app, sitio y panel', en: 'connected pieces: app, site and panel' } },
      { n: '2', label: { es: 'tiendas, iOS y Android, desde una sola base de código', en: 'stores, iOS and Android, from a single codebase' } },
      { n: '9', label: { es: 'módulos en el panel de administración', en: 'modules in the admin panel' } },
      { n: 'ES · EN', label: { es: 'sitio bilingüe, claro y oscuro', en: 'bilingual site, light and dark' } },
    ],
    articles: [
      {
        title: { es: 'Descubre: del antojo al lugar', en: 'Discover: from craving to place' },
        text: {
          es: 'Un feed de publicaciones con fotos en carrusel, descripción y una tarjeta del restaurante (nombre, tipo de lugar y zona) que lleva directo al local. Cada post enlaza al restaurante.',
          en: 'A feed of posts with photo carousels, descriptions and a restaurant card (name, type of place and area) that leads straight to the venue. Every post links to the restaurant.',
        },
        bullets: [
          { es: 'Restaurantes cercanos y mapa interactivo.', en: 'Nearby restaurants and interactive map.' },
          { es: 'Likes, comentarios, guardados y listas.', en: 'Likes, comments, saves and lists.' },
        ],
        image: fc('app-feed-1'),
        alt: { es: 'Feed de la app con una publicación de restaurante', en: 'App feed with a restaurant post' },
        kind: 'phone',
      },
      {
        title: { es: 'Comparte con un editor de fotos integrado', en: 'Share with a built-in photo editor' },
        text: {
          es: 'Publicar es rápido: eliges varias fotos, recortas, aplicas filtros, giras o volteas y publicas, sin salir de la app.',
          en: 'Posting is fast: pick several photos, crop, apply filters, rotate or flip and publish, without leaving the app.',
        },
        image: fc('app-publicar'),
        alt: { es: 'Pantalla de nueva publicación con herramientas de edición', en: 'New post screen with editing tools' },
        kind: 'phone',
      },
      {
        title: { es: 'Cocina: de la mesa del restaurante a tu casa', en: 'Cook: from the restaurant table to your kitchen' },
        text: {
          es: 'Recetas de la comunidad con ingredientes tipo checklist, tiempos de preparación, cocción y reposo, porciones ajustables y cambio entre unidades métrico y US.',
          en: 'Community recipes with checklist ingredients, prep, cook and rest times, adjustable servings and a metric/US units switch.',
        },
        image: fc('app-receta'),
        alt: { es: 'Receta con ingredientes y porciones', en: 'Recipe with ingredients and servings' },
        kind: 'phone',
      },
      {
        title: { es: 'Hecha para todas las personas', en: 'Built for everyone' },
        bullets: [
          { es: 'Tamaño de texto ajustable, alto contraste y reducción de movimiento.', en: 'Adjustable text size, high contrast and reduced motion.' },
          { es: 'Modo oscuro.', en: 'Dark mode.' },
          { es: 'Registro con correo, Google y Apple, y notificaciones push.', en: 'Sign-up with email, Google and Apple, plus push notifications.' },
        ],
        image: fc('app-accesibilidad'),
        alt: { es: 'Pantalla de accesibilidad de la app', en: 'App accessibility screen' },
        kind: 'phone',
      },
      {
        title: { es: 'El sitio que presenta Food&Co al mundo', en: 'The site that introduces Food&Co to the world' },
        text: {
          es: 'Una landing bilingüe, rápida y con identidad propia que explica la app en segundos y lleva a la descarga. Su mensaje es claro desde el primer scroll: "La comida sabe mejor compartida".',
          en: 'A bilingual, fast landing page with its own identity that explains the app in seconds and leads to the download. Its message is clear from the first scroll: "Food tastes better shared".',
        },
        bullets: [
          { es: 'Modo claro y oscuro.', en: 'Light and dark mode.' },
          { es: 'Enlaces compartibles: cada publicación, restaurante, receta o perfil tiene su página pública que invita a abrir la app.', en: 'Shareable links: every post, restaurant, recipe or profile has a public page that invites people to open the app.' },
          { es: 'Enlaces universales de iOS y Android para abrir el contenido directo en la app.', en: 'iOS and Android universal links to open content directly in the app.' },
        ],
        image: fc('web-hero'),
        alt: { es: 'Portada de la landing de Food&Co', en: 'Food&Co landing page hero' },
        kind: 'wide',
      },
      {
        title: { es: 'Todo lo que necesitas para comer mejor', en: 'Everything you need to eat better' },
        text: {
          es: 'Seis funciones explicadas de un vistazo: buscar restaurantes, compartir platillos, reseñar, ver distancias en tiempo real, likes, guardados y listas, y comentarios. Y tres pasos: Descubre, Comparte, Conecta.',
          en: 'Six features at a glance: find restaurants, share dishes, write reviews, see real-time distances, likes, saves and lists, and comments. And three steps: Discover, Share, Connect.',
        },
        image: fc('web-funciones'),
        alt: { es: 'Sección de características de la landing', en: 'Features section of the landing page' },
        kind: 'wide',
      },
      {
        title: { es: 'Listo para publicar en las tiendas', en: 'Ready to publish in the app stores' },
        bullets: [
          { es: 'Páginas legales: términos, privacidad, normas de comunidad, aviso y contenido.', en: 'Legal pages: terms, privacy, community guidelines, notice and content.' },
          { es: 'Centro de ayuda y página para eliminar la cuenta, requisito de las tiendas de apps.', en: 'Help center and an account deletion page, an app store requirement.' },
          { es: 'Una sección de comunidad en modo oscuro que presenta el feed, el perfil, las reacciones y la moderación.', en: 'A dark-mode community section showing the feed, profile, reactions and moderation.' },
        ],
        image: fc('web-comunidad'),
        alt: { es: 'Sección de comunidad de la landing', en: 'Community section of the landing page' },
        kind: 'wide',
      },
      {
        title: { es: 'Todo tu negocio, en una sola pantalla', en: 'Your whole business on one screen' },
        text: {
          es: 'Una app social crece rápido: miles de fotos, usuarios, reportes y costos. El panel web, con acceso solo para administradores y conectado con la app y el servidor, permite al equipo ver, moderar y decidir desde un solo lugar, sin depender de un programador.',
          en: 'A social app grows fast: thousands of photos, users, reports and costs. The web panel, admin-only and connected to the app and server, lets the team see, moderate and decide from one place, without relying on a developer.',
        },
        bullets: [
          { es: 'Analítica, usuarios con estadísticas, administradores, publicaciones, recetas y restaurantes con métricas.', en: 'Analytics, users with stats, administrators, posts, recipes and restaurants with metrics.' },
          { es: 'Soporte con lista de tickets de ayuda.', en: 'Support with a help ticket list.' },
          { es: 'Buscador global, menú lateral colapsable y modo claro u oscuro.', en: 'Global search, collapsible side menu and light or dark mode.' },
        ],
        image: fc('dash-r2'),
        alt: { es: 'Panel de analítica de almacenamiento', en: 'Storage analytics panel' },
        kind: 'wide',
      },
      {
        title: { es: 'Importar restaurantes desde Google', en: 'Import restaurants from Google' },
        text: {
          es: 'En lugar de capturar cada local a mano, el equipo marca una zona en el mapa, elige qué tan densa es y carga los restaurantes desde Google Places. El panel muestra el costo estimado antes de importar. Menos tiempo en tareas manuales.',
          en: 'Instead of entering each venue by hand, the team marks an area on the map, chooses how dense it is and loads restaurants from Google Places. The panel shows the estimated cost before importing. Less time on manual tasks.',
        },
        image: fc('dash-importar'),
        alt: { es: 'Pantalla de importar restaurantes desde Google', en: 'Import restaurants from Google screen' },
        kind: 'wide',
      },
      {
        title: { es: 'Control del costo antes de que crezca', en: 'Cost control before it grows' },
        text: {
          es: 'Gráficas de tendencia de almacenamiento y objetos, tasa de éxito frente a error, subidas diarias y operaciones por tipo, con rangos de 7, 14 o 30 días. Visibilidad total del consumo de recursos.',
          en: 'Trend charts for storage and objects, success versus error rate, daily uploads and operations by type, with 7, 14 or 30-day ranges. Full visibility of resource usage.',
        },
        image: fc('dash-r2-detalle'),
        alt: { es: 'Subidas diarias y operaciones por acción', en: 'Daily uploads and operations by action' },
        kind: 'wide',
      },
    ],
    services: [
      { es: 'App nativa iOS y Android desde una sola base de código', en: 'Native iOS and Android app from a single codebase' },
      { es: 'Diseño de interfaz propio', en: 'Custom interface design' },
      { es: 'Conexión con servidor, mapas y notificaciones', en: 'Server, maps and notifications integration' },
      { es: 'Monitoreo de errores', en: 'Error monitoring' },
      { es: 'Landing bilingüe con enlaces compartibles y universales', en: 'Bilingual landing page with shareable and universal links' },
      { es: 'Páginas legales, centro de ayuda y eliminación de cuenta', en: 'Legal pages, help center and account deletion' },
      { es: 'Panel web de administración desplegado en la nube', en: 'Cloud-deployed web admin panel' },
      { es: 'Importación de restaurantes desde Google Places', en: 'Restaurant import from Google Places' },
      { es: 'Documentación de configuración para el cliente', en: 'Setup documentation for the client' },
    ],
    tech: [
      { k: { es: 'Plataformas', en: 'Platforms' }, v: { es: 'iOS y Android (una sola base de código), sitio web y panel web', en: 'iOS and Android (single codebase), website and web panel' } },
      { k: { es: 'Acceso', en: 'Sign-in' }, v: { es: 'Correo, Google y Apple', en: 'Email, Google and Apple' } },
      { k: { es: 'Servicios', en: 'Services' }, v: { es: 'Mapas interactivos, notificaciones push, Google Places para importar restaurantes', en: 'Interactive maps, push notifications, Google Places to import restaurants' } },
      { k: { es: 'Almacenamiento', en: 'Storage' }, v: { es: 'Imágenes en Cloudflare R2, con analítica de uso en el panel', en: 'Images on Cloudflare R2, with usage analytics in the panel' } },
      { k: { es: 'Sitio', en: 'Site' }, v: { es: 'Español e inglés, modo claro y oscuro', en: 'Spanish and English, light and dark mode' } },
    ],
    link: {
      href: 'https://foodncompany.com.mx/',
      label: { es: 'Ver el sitio en vivo', en: 'Visit the live site' },
    },
  },
  {
    id: 'sano',
    tag: { es: 'App · Panel · Servidor', en: 'App · Admin · Backend' },
    title: { es: 'Sano', en: 'Sano' },
    summary: {
      es: 'Escanea el código de barras de un producto y recibe una calificación de 0 a 100, con sellos NOM-051 y alternativas más sanas.',
      en: 'Scan a product barcode and get a 0 to 100 score, with NOM-051 warning labels and healthier alternatives.',
    },
    size: 'wide',
    tone: 'linear-gradient(150deg,#06284a 0%,#0e86bd 100%)',
    cover: [
      { src: sn('m-05-producto-detalle'), kind: 'phone' },
      { src: sn('m-04-home'), kind: 'phone' },
    ],
    intro: {
      es: 'México tiene uno de los sistemas de etiquetado más estrictos del mundo, pero los sellos negros solo dicen qué está mal, no qué tan mal ni qué elegir en su lugar. Sano convierte esa información en una decisión simple en el momento en que importa: apuntas la cámara al código de barras y obtienes un score del 0 al 100, con contexto NOM-051 y alternativas más saludables. Infinity lo construyó de principio a fin: app móvil, panel administrativo, servidor y sitio de lanzamiento.',
      en: 'Mexico has one of the strictest labeling systems in the world, but the black warning labels only say what is wrong, not how wrong or what to choose instead. Sano turns that information into a simple decision at the moment it matters: point the camera at the barcode and get a 0 to 100 score, with NOM-051 context and healthier alternatives. Infinity built it end to end: mobile app, admin panel, backend and launch site.',
    },
    stats: [
      { n: '5', label: { es: 'componentes entregados: app, panel, servidor, sitio e IA', en: 'delivered components: app, panel, backend, site and AI' } },
      { n: '9,000+', label: { es: 'productos en el catálogo', en: 'products in the catalog' } },
      { n: '0–100', label: { es: 'calificación por producto', en: 'score per product' } },
      { n: '$0', label: { es: 'todas las funciones, gratis para el usuario', en: 'every feature, free for the user' } },
    ],
    articles: [
      {
        title: { es: 'Un sitio que explica qué hace diferente a Sano', en: 'A site that explains what makes Sano different' },
        text: {
          es: 'Un refresco y un yogur pueden tener el mismo sello de azúcares con cantidades muy distintas, y los sellos no comparan, no recomiendan ni consideran a la persona. La landing de lanzamiento lo cuenta en un vistazo, con una tarjeta de score en el hero.',
          en: 'A soda and a yogurt can carry the same sugar label with very different amounts, and labels do not compare, recommend or consider the person. The launch landing page explains it at a glance, with a score card in the hero.',
        },
        bullets: [
          { es: 'Score de 0 a 100, basado en Nutri-Score y ajustado a los sellos NOM-051.', en: 'A 0 to 100 score, based on Nutri-Score and adjusted for NOM-051 labels.' },
          { es: 'Personalizado a tu salud: diabetes, hipertensión, gluten, lactosa o perfil infantil.', en: 'Personalized to your health: diabetes, hypertension, gluten, lactose or child profile.' },
          { es: 'Aditivos explicados, cada uno con su semáforo.', en: 'Additives explained, each with its own traffic light.' },
          { es: 'Alternativas mejor calificadas de la misma categoría, disponibles en súpers de México.', en: 'Better-rated alternatives in the same category, available in Mexican supermarkets.' },
        ],
        image: sn('landing-hero'),
        alt: { es: 'Portada de la landing de Sano', en: 'Sano landing page hero' },
        kind: 'wide',
      },
      {
        title: { es: 'Escanea, entiende, elige mejor', en: 'Scan, understand, choose better' },
        bullets: [
          { es: 'Escanea: apunta la cámara al código de barras.', en: 'Scan: point the camera at the barcode.' },
          { es: 'Entiende: recibe el score, el Nutri-Score, el grupo NOVA y los sellos NOM-051 de un vistazo.', en: 'Understand: get the score, Nutri-Score, NOVA group and NOM-051 labels at a glance.' },
          { es: 'Elige mejor: compara y descubre alternativas disponibles en México.', en: 'Choose better: compare and discover alternatives available in Mexico.' },
        ],
        image: sn('m-05-producto-detalle'),
        alt: { es: 'Resultado de un producto con su score', en: 'Product result with its score' },
        kind: 'phone',
      },
      {
        title: { es: 'Sellos NOM-051 que sí se entienden', en: 'NOM-051 labels you can actually understand' },
        text: {
          es: 'La tabla nutrimental por porción y por 100 g, y cada sello con su significado y a quién afecta, por ejemplo "no recomendable en niñas y niños".',
          en: 'The nutrition table per serving and per 100 g, and every label with its meaning and who it affects, for example "not recommended for children".',
        },
        image: sn('m-06-producto-nutrimental'),
        alt: { es: 'Tabla nutrimental y sellos NOM-051', en: 'Nutrition table and NOM-051 labels' },
        kind: 'phone',
      },
      {
        title: { es: 'Aditivos explicados y alternativas más sanas', en: 'Explained additives and healthier alternatives' },
        bullets: [
          { es: 'Cada aditivo se explica en lenguaje que se entiende, según criterios de EFSA y COFEPRIS.', en: 'Each additive is explained in plain language, based on EFSA and COFEPRIS criteria.' },
          { es: 'Alternativas: mejores opciones de la misma categoría.', en: 'Alternatives: better options in the same category.' },
          { es: '"Personaliza tu resultado": agrega tus datos de salud para recibir alertas y un score personal.', en: '"Personalize your result": add your health data to get alerts and a personal score.' },
          { es: 'Un aviso claro: el score es orientativo y no sustituye la consulta con un profesional de la salud.', en: 'A clear notice: the score is informative and does not replace a health professional’s advice.' },
        ],
        image: sn('m-07-producto-aditivos'),
        alt: { es: 'Aditivos y alternativas de un producto', en: 'Additives and alternatives for a product' },
        kind: 'phone',
      },
      {
        title: { es: 'Hecho en México, para el súper de México', en: 'Made in Mexico, for Mexican supermarkets' },
        text: {
          es: 'Las apps europeas no conocen los sellos NOM-051 ni los productos de aquí. Sano nace con ambos integrados desde el primer escaneo, y su comparador y su modo familia cambian el resultado según quién va a comer.',
          en: 'European apps do not know NOM-051 labels or local products. Sano is born with both built in from the first scan, and its comparator and family mode change the result depending on who will eat.',
        },
        image: sn('landing-comparador'),
        alt: { es: 'Comparador de cereales y modo familia', en: 'Cereal comparator and family mode' },
        kind: 'wide',
      },
      {
        title: { es: 'Diseñada para decidir sin leer la letra chica', en: 'Designed to decide without reading the fine print' },
        bullets: [
          { es: 'Historial con tu evolución: ve la tendencia semana a semana.', en: 'History with your progress: see the trend week by week.' },
          { es: 'Modo familia: un perfil para ti, otro para tus hijos, otro para tus papás; el score se recalcula al cambiar.', en: 'Family mode: one profile for you, another for your kids, another for your parents; the score recalculates when you switch.' },
          { es: 'Reporte semanal con score promedio, lo más escaneado y cuánto azúcar o sodio dejaste fuera.', en: 'Weekly report with average score, most scanned items and how much sugar or sodium you left out.' },
          { es: 'Tus datos, tuyos: el perfil de salud solo sirve para calcular tu score, sin venta ni publicidad.', en: 'Your data, yours: the health profile is only used to compute your score, never sold or used for ads.' },
        ],
        image: sn('landing-reporte'),
        alt: { es: 'Reporte semanal de Sano', en: 'Sano weekly report' },
        kind: 'wide',
      },
      {
        title: { es: 'El negocio en una sola mirada', en: 'The business at a glance' },
        text: {
          es: 'El panel de control reúne escaneos, usuarios únicos, productos consultados y score promedio, con filtros de histórico, 30 y 7 días y una tendencia diaria que cruza volumen contra usuarios activos. El equipo opera sin depender de desarrolladores.',
          en: 'The control panel gathers scans, unique users, products viewed and average score, with all-time, 30 and 7-day filters and a daily trend that crosses volume against active users. The team operates without depending on developers.',
        },
        image: sn('dash-inicio'),
        alt: { es: 'Inicio del panel de control', en: 'Control panel home' },
        kind: 'wide',
      },
      {
        title: { es: 'Más de 9,000 productos bajo control', en: 'Over 9,000 products under control' },
        bullets: [
          { es: 'Búsqueda por nombre, marca o código de barras, y filtro por categoría.', en: 'Search by name, brand or barcode, and filter by category.' },
          { es: 'Porcentaje de completitud de cada ficha, estado de revisión de imágenes y acciones rápidas por fila.', en: 'Completeness percentage for each record, image review status and quick actions per row.' },
          { es: 'Alta y edición con carga de imágenes, recorte y quitado automático de fondo.', en: 'Create and edit with image upload, cropping and automatic background removal.' },
          { es: '"Analizar con IA": se suben fotos del empaque y un modelo de visión extrae marca, sellos, tabla nutrimental y código de barras para prellenar el formulario; el equipo revisa y confirma.', en: '"Analyze with AI": upload photos of the package and a vision model extracts brand, labels, nutrition table and barcode to pre-fill the form; the team reviews and confirms.' },
        ],
        image: sn('dash-productos'),
        alt: { es: 'Lista de productos del catálogo', en: 'Catalog product list' },
        kind: 'wide',
      },
      {
        title: { es: 'La salud del catálogo, a la vista', en: 'Catalog health, at a glance' },
        text: {
          es: 'Gráficas de crecimiento del catálogo, origen de los datos, huecos por completar (sin marca, sin imagen, sin nutrición, sin ingredientes), completitud por rango, sellos NOM-051 más frecuentes y riesgo de aditivos. Además, un módulo propio para revisar la cobertura y la distribución del score.',
          en: 'Catalog growth charts, data sources, gaps to fill (no brand, no image, no nutrition, no ingredients), completeness by range, most frequent NOM-051 labels and additive risk. Plus a dedicated module to review score coverage and distribution.',
        },
        image: sn('dash-catalogo-salud'),
        alt: { es: 'Salud y composición del catálogo', en: 'Catalog health and composition' },
        kind: 'wide',
      },
      {
        title: { es: 'Moderación y voz del usuario', en: 'Moderation and user voice' },
        text: {
          es: 'Una cola de moderación para revisar productos reportados, documentar decisiones y dar seguimiento al cierre de cada caso, con tasa de resolución y filtros por estado, motivo y tipo. Los usuarios también pueden escribir desde la app fallas, ideas y datos incorrectos, y el equipo los atiende desde "Problemas y sugerencias".',
          en: 'A moderation queue to review reported products, document decisions and follow each case to closure, with resolution rate and filters by status, reason and type. Users can also send failures, ideas and incorrect data from the app, and the team handles them under "Problems and suggestions".',
        },
        image: sn('dash-reportes'),
        alt: { es: 'Cola de moderación de reportes', en: 'Report moderation queue' },
        kind: 'wide',
      },
      {
        title: { es: 'Control remoto de la app', en: 'Remote control of the app' },
        text: {
          es: 'Desde el panel se controla el estado global de la app, un modo de mantenimiento con mensaje para los usuarios, las versiones mínimas y más recientes de iOS, Android y web, y las URLs de las tiendas.',
          en: 'From the panel you control the app’s global status, a maintenance mode with a message for users, the minimum and latest versions for iOS, Android and web, and the store URLs.',
        },
        image: sn('dash-config'),
        alt: { es: 'Configuración remota de la aplicación', en: 'Remote app configuration' },
        kind: 'wide',
      },
    ],
    services: [
      { es: 'App móvil para consumidores (iOS): escaneo, score, historial y perfil personalizado', en: 'Consumer mobile app (iOS): scanning, score, history and personalized profile' },
      { es: 'Dashboard de operación: catálogo, usuarios, score, reportes y soporte', en: 'Operations dashboard: catalog, users, score, reports and support' },
      { es: 'Servidor y API: autenticación, catálogo, almacenamiento de imágenes y lógica de score', en: 'Backend and API: authentication, catalog, image storage and scoring logic' },
      { es: 'Sitio web de lanzamiento', en: 'Launch website' },
      { es: 'Inteligencia artificial para capturar datos desde fotos del empaque', en: 'Artificial intelligence to capture data from package photos' },
      { es: 'Sesiones cifradas y control de accesos en el panel', en: 'Encrypted sessions and access control in the panel' },
      { es: 'Arquitectura modular por dominios, preparada para crecer', en: 'Domain-based modular architecture, ready to grow' },
    ],
    tech: [
      { k: { es: 'Componentes', en: 'Components' }, v: { es: 'App iOS, dashboard de escritorio, servidor/API, sitio web e IA integrada', en: 'iOS app, desktop dashboard, backend/API, website and integrated AI' } },
      { k: { es: 'Score', en: 'Score' }, v: { es: 'Basado en Nutri-Score, ajustado a los sellos NOM-051 y al perfil de salud', en: 'Based on Nutri-Score, adjusted for NOM-051 labels and the health profile' } },
      { k: { es: 'IA', en: 'AI' }, v: { es: 'Modelo de visión que corre en la propia computadora para extraer datos del empaque', en: 'Vision model running on the team’s own computer to extract package data' } },
      { k: { es: 'Seguridad', en: 'Security' }, v: { es: 'Sesiones cifradas y control de accesos en el panel', en: 'Encrypted sessions and access control in the panel' } },
      { k: { es: 'Arquitectura', en: 'Architecture' }, v: { es: 'Modular por dominios', en: 'Domain-based modular' } },
    ],
    link: {
      href: 'https://sano.infinitydev.agency/',
      label: { es: 'Ver el sitio en vivo', en: 'Visit the live site' },
    },
  },
  {
    id: 'pixoteria',
    tag: { es: 'App · Juego', en: 'App · Game' },
    title: { es: 'Pixotería', en: 'Pixotería' },
    summary: {
      es: 'La lotería mexicana de toda la vida, para jugar con tu mesa: multijugador por WiFi, sin cuentas ni servidores.',
      en: 'The classic Mexican lottery, for playing with your table: local WiFi multiplayer, no accounts, no servers.',
    },
    size: 'wide',
    tone: 'linear-gradient(150deg,#1d3527 0%,#527f3f 100%)',
    cover: [
      { src: px('app-menu'), kind: 'phone' },
      { src: px('app-muertos'), kind: 'phone' },
    ],
    intro: {
      es: 'Pixotería es un juego de lotería mexicana multijugador que se juega en la misma red WiFi: un teléfono crea la partida, los demás la encuentran solos y se unen. Todo ocurre entre los dispositivos; no existe ningún servidor detrás. Diseñado, desarrollado, ilustrado y publicado de principio a fin por Infinity.',
      en: 'Pixotería is a multiplayer Mexican lottery game played on the same WiFi network: one phone creates the game, the others find it on their own and join. Everything happens between devices; there is no server behind it. Designed, built, illustrated and released end to end by Infinity.',
    },
    stats: [
      { n: '9', label: { es: 'barajas con personalidad propia', en: 'decks with their own personality' } },
      { n: '486', label: { es: 'cartas ilustradas (9 × 54)', en: 'illustrated cards (9 × 54)' } },
      { n: '3', label: { es: 'patrones de victoria', en: 'winning patterns' } },
      { n: '0', label: { es: 'cuentas, anuncios o datos recopilados', en: 'accounts, ads or collected data' } },
    ],
    articles: [
      {
        title: { es: 'Se juega en mesa, no en la nube', en: 'Played at the table, not in the cloud' },
        text: {
          es: 'Creas la partida y tus amigos aparecen en su pantalla, sin códigos ni direcciones. En la sala de espera los jugadores van apareciendo; el anfitrión elige baraja y patrón, y cada quien escoge su tabla.',
          en: 'You create the game and your friends show up on their screens, with no codes or addresses. In the waiting room players appear one by one; the host chooses the deck and pattern, and everyone picks their board.',
        },
        image: px('app-sala'),
        alt: { es: 'Sala de espera con la selección de tablas', en: 'Waiting room with board selection' },
        kind: 'phone',
      },
      {
        title: { es: 'Cómo se juega', en: 'How to play' },
        bullets: [
          { es: 'Reúne a tu mesa: todos conectados a la misma red WiFi, o al hotspot de uno de los jugadores.', en: 'Gather your table: everyone on the same WiFi network, or on one player’s hotspot.' },
          { es: 'El anfitrión crea la partida y elige baraja y patrón de victoria: tabla llena, línea o esquinas.', en: 'The host creates the game and chooses the deck and winning pattern: full board, line or corners.' },
          { es: 'Cada quien recibe su tabla.', en: 'Everyone gets their board.' },
          { es: 'Se cantan las cartas: la app lo hace en voz alta, con el ritmo que se elija.', en: 'The cards are called: the app does it out loud, at the pace you choose.' },
          { es: '¡Lotería! Al completar el patrón, se grita y el anfitrión lo valida.', en: 'Lotería! When the pattern is complete, you shout and the host validates it.' },
        ],
        image: px('app-menu'),
        alt: { es: 'Menú para crear una partida o unirse a una', en: 'Menu to create or join a game' },
        kind: 'phone',
      },
      {
        title: { es: 'Un juego, nueve mundos', en: 'One game, nine worlds' },
        text: {
          es: 'Del clásico a Día de Muertos, Terror, Piratas, Cyberpunk, Mitología griega, Nórdico, Lewis Carroll y Grimm. Cada baraja tiene 54 cartas con ilustración propia en pixel art, no un filtro de color sobre el mismo dibujo.',
          en: 'From the classic to Day of the Dead, Horror, Pirates, Cyberpunk, Greek mythology, Norse, Lewis Carroll and Grimm. Every deck has 54 cards with its own pixel art illustration, not a color filter over the same drawing.',
        },
        image: px('app-muertos'),
        alt: { es: 'Baraja de Día de Muertos', en: 'Day of the Dead deck' },
        kind: 'phone',
      },
      {
        title: { es: 'Terror clásico, para la noche de Halloween', en: 'Classic horror, for Halloween night' },
        image: px('app-terror'),
        alt: { es: 'Baraja de Terror clásico', en: 'Classic horror deck' },
        kind: 'phone',
        text: {
          es: 'El vampiro, el hombre lobo y la casa embrujada se unen a la mesa.',
          en: 'The vampire, the werewolf and the haunted house join the table.',
        },
      },
      {
        title: { es: 'El País de las Maravillas, en 54 cartas', en: 'Wonderland, in 54 cards' },
        text: {
          es: 'La baraja de Lewis Carroll: el Conejo Blanco, el Sombrerero Loco, el Gato de Cheshire y más.',
          en: 'The Lewis Carroll deck: the White Rabbit, the Mad Hatter, the Cheshire Cat and more.',
        },
        image: px('app-carroll'),
        alt: { es: 'Baraja de Lewis Carroll', en: 'Lewis Carroll deck' },
        kind: 'phone',
      },
      {
        title: { es: 'Cuentos de hadas con la estética del juego', en: 'Fairy tales in the game’s own style' },
        text: {
          es: 'La baraja Grimm: Hansel y Gretel, Blancanieves, Rapunzel y más.',
          en: 'The Grimm deck: Hansel and Gretel, Snow White, Rapunzel and more.',
        },
        image: px('app-grimm'),
        alt: { es: 'Baraja de los hermanos Grimm', en: 'Brothers Grimm deck' },
        kind: 'phone',
      },
      {
        title: { es: 'Un sitio del juego con la misma identidad', en: 'A game website with the same identity' },
        text: {
          es: 'El sitio de lanzamiento mantiene la estética pixel art del juego y presenta el mensaje en una frase: el mazo lo elige quien invita. Nueve barajas, cero cuentas, cero internet: solo tu WiFi y tu gente.',
          en: 'The launch site keeps the game’s pixel art look and delivers the message in one line: whoever invites chooses the deck. Nine decks, zero accounts, zero internet: just your WiFi and your people.',
        },
        image: px('web-inicio'),
        alt: { es: 'Portada del sitio de Pixotería', en: 'Pixotería website home' },
        kind: 'wide',
      },
      {
        title: { es: 'Privacidad por diseño', en: 'Privacy by design' },
        bullets: [
          { es: 'No hay servidor, así que no hay nada que filtrar.', en: 'There is no server, so there is nothing to leak.' },
          { es: 'Las tiendas piden declarar qué datos recopilas: aquí cada casilla dice "no", y es verdad.', en: 'The stores ask you to declare what data you collect: here every box says "no", and it is true.' },
          { es: 'Política de privacidad pública, en español e inglés, enlazada desde la ficha de tienda.', en: 'Public privacy policy, in Spanish and English, linked from the store listing.' },
          { es: 'Sin cuentas, sin anuncios y sin compras en esta versión.', en: 'No accounts, no ads and no purchases in this version.' },
        ],
        image: px('web-barajas'),
        alt: { es: 'Las nueve barajas explicadas en el sitio', en: 'The nine decks explained on the website' },
        kind: 'wide',
      },
    ],
    services: [
      { es: 'Concepto y diseño de producto', en: 'Product concept and design' },
      { es: 'Diseño de interfaz y sistema visual en pixel art', en: 'Interface design and pixel art visual system' },
      { es: 'Ilustración de nueve barajas de 54 cartas', en: 'Illustration of nine 54-card decks' },
      { es: 'Desarrollo móvil para iOS y Android con una sola base de código', en: 'Mobile development for iOS and Android from a single codebase' },
      { es: 'Juego multijugador en red local con descubrimiento automático', en: 'Local-network multiplayer with automatic discovery' },
      { es: 'Internacionalización (ES / EN) y accesibilidad', en: 'Internationalization (ES / EN) and accessibility' },
      { es: 'Pruebas automatizadas y verificación continua', en: 'Automated testing and continuous verification' },
      { es: 'Sitio web de lanzamiento y política de privacidad', en: 'Launch website and privacy policy' },
      { es: 'Preparación y publicación en App Store y Google Play', en: 'Preparation and release on the App Store and Google Play' },
    ],
    tech: [
      { k: { es: 'Plataformas', en: 'Platforms' }, v: { es: 'iOS y Android', en: 'iOS and Android' } },
      { k: { es: 'Tecnología', en: 'Stack' }, v: { es: 'Expo / React Native (TypeScript), expo-router, Zustand, i18next', en: 'Expo / React Native (TypeScript), expo-router, Zustand, i18next' } },
      { k: { es: 'Red', en: 'Network' }, v: { es: 'TCP en red local y descubrimiento automático (mDNS/Bonjour)', en: 'Local-network TCP and automatic discovery (mDNS/Bonjour)' } },
      { k: { es: 'Modelo', en: 'Model' }, v: { es: 'Anfitrión autoritativo: él decide, los demás reciben', en: 'Authoritative host: the host decides, the others receive' } },
      { k: { es: 'Sitio web', en: 'Website' }, v: { es: 'Astro, estático, desplegado en Cloudflare', en: 'Astro, static, deployed on Cloudflare' } },
      { k: { es: 'Idiomas', en: 'Languages' }, v: { es: 'Español, inglés', en: 'Spanish, English' } },
    ],
    link: {
      href: 'https://pixoteria-landing.fgsh-mcfly.workers.dev/',
      label: { es: 'Ver el sitio en vivo', en: 'Visit the live site' },
    },
  },
]
