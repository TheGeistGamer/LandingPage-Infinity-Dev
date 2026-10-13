import type { APIRoute } from 'astro'
import { env } from 'cloudflare:workers'
import { CONTACT_FROM, CONTACT_TO, SEND_CONFIRMATION, SERVICES, type ServiceKey } from '../../data/site'
import { confirmationEmail, ownerEmail } from '../../data/emailTemplates'

// Esta ruta corre en el Worker en cada petición; el resto del sitio es estático
export const prerender = false

type Lang = 'es' | 'en'

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  })

const clean = (value: unknown, max: number) =>
  typeof value === 'string' ? value.replace(/\r\n/g, '\n').trim().slice(0, max) : ''

const EMAIL = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/

const verifyTurnstile = async (token: string, ip: string | null) => {
  const secret = String(env.TURNSTILE_SECRET_KEY ?? '').trim()

  if (!secret) return { success: false, codes: ['missing-secret-in-worker'] }

  const body = new URLSearchParams({ secret, response: token })
  if (ip) body.set('remoteip', ip)

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body })
  const result = (await response.json()) as { success?: boolean; 'error-codes'?: string[] }

  return { success: result.success === true, codes: result['error-codes'] ?? [] }
}

const sendEmail = async (payload: Record<string, unknown>) => {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    console.error('Resend error', response.status, await response.text())
    return false
  }

  return true
}

export const POST: APIRoute = async ({ request }) => {
  let input: Record<string, unknown>

  try {
    input = (await request.json()) as Record<string, unknown>
  } catch {
    return json({ ok: false, error: 'validation' }, 400)
  }

  // Campo trampa: las personas no lo ven ni lo llenan. A los bots se les responde "ok" sin enviar nada.
  if (clean(input.website, 200)) return json({ ok: true })

  const lang: Lang = input.lang === 'en' ? 'en' : 'es'
  const name = clean(input.name, 100)
  const company = clean(input.company, 100)
  const email = clean(input.email, 200)
  const message = clean(input.message, 3000)
  const serviceKey = clean(input.service, 20) as ServiceKey
  const token = clean(input.token, 4096)
  const elapsed = Number(input.elapsed)

  const valid =
    name.length >= 2 &&
    EMAIL.test(email) &&
    message.length >= 10 &&
    serviceKey in SERVICES &&
    // un formulario llenado en menos de 3 segundos es casi seguro un bot
    !(Number.isFinite(elapsed) && elapsed < 3000)

  if (!valid) return json({ ok: false, error: 'validation' }, 400)

  const ip = request.headers.get('cf-connecting-ip')

  const verification = token ? await verifyTurnstile(token, ip) : { success: false, codes: ['missing-token'] }

  if (!verification.success) {
    console.error('Turnstile rechazó la solicitud', verification.codes)
    // Los códigos de error son genéricos (no contienen secretos) y ayudan a diagnosticar la configuración
    return json({ ok: false, error: 'captcha', codes: verification.codes }, 403)
  }

  const service = SERVICES[serviceKey].es
  const owner = ownerEmail({ name, company, email, service, message, lang, receivedAt: new Date() })

  // En desarrollo, sin llave de Resend, solo se registra el mensaje para poder probar el formulario
  if (!env.RESEND_API_KEY && import.meta.env.DEV) {
    console.log('[contacto:dev]', { name, company, email, service, lang, message })
    return json({ ok: true })
  }

  if (!env.RESEND_API_KEY) {
    console.error('Falta el secreto RESEND_API_KEY')
    return json({ ok: false, error: 'server' }, 500)
  }

  const sent = await sendEmail({
    from: CONTACT_FROM,
    to: [CONTACT_TO],
    reply_to: email,
    subject: `Nueva cotización: ${name} (${service})`,
    html: owner.html,
    text: owner.text,
  })

  if (!sent) return json({ ok: false, error: 'server' }, 502)

  if (SEND_CONFIRMATION) {
    const confirmation = confirmationEmail({ name, service: SERVICES[serviceKey][lang], message, lang })
    // Si la confirmación falla no se le avisa al visitante: su solicitud ya llegó
    await sendEmail({
      from: CONTACT_FROM,
      to: [email],
      reply_to: CONTACT_TO,
      subject: confirmation.subject,
      html: confirmation.html,
      text: confirmation.text,
    })
  }

  return json({ ok: true })
}

// Cualquier otro método responde 405
export const ALL: APIRoute = () => json({ ok: false, error: 'method' }, 405)
