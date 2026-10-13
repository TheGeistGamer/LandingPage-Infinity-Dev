import type { APIRoute } from 'astro'
import { env } from 'cloudflare:workers'
import { CONTACT_FROM, CONTACT_TO, SEND_CONFIRMATION, SERVICES, type ServiceKey } from '../../data/site'

// Esta ruta corre en el Worker en cada petición; el resto del sitio es estático
export const prerender = false

type Lang = 'es' | 'en'

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  })

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char] as string)

const clean = (value: unknown, max: number) =>
  typeof value === 'string' ? value.replace(/\r\n/g, '\n').trim().slice(0, max) : ''

const EMAIL = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/

const verifyTurnstile = async (token: string, ip: string | null) => {
  const body = new URLSearchParams({ secret: String(env.TURNSTILE_SECRET_KEY ?? ''), response: token })
  if (ip) body.set('remoteip', ip)

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body })
  const result = (await response.json()) as { success?: boolean }

  return result.success === true
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

const ownerEmail = (data: { name: string; company: string; email: string; service: string; message: string; lang: Lang }) => {
  const rows: [string, string][] = [
    ['Nombre', data.name],
    ['Empresa', data.company || '—'],
    ['Correo', data.email],
    ['Servicio', data.service],
    ['Idioma del sitio', data.lang === 'en' ? 'Inglés' : 'Español'],
  ]

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:560px;color:#171b24">
      <h2 style="margin:0 0 16px">Nueva solicitud de cotización</h2>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="padding:6px 12px 6px 0;color:#697586;white-space:nowrap">${label}</td><td style="padding:6px 0"><strong>${escapeHtml(value)}</strong></td></tr>`,
          )
          .join('')}
      </table>
      <p style="margin:20px 0 6px;color:#697586">Mensaje</p>
      <p style="white-space:pre-wrap;background:#f7f8fb;padding:14px;border-radius:12px;margin:0">${escapeHtml(data.message)}</p>
    </div>`

  const text = `${rows.map(([label, value]) => `${label}: ${value}`).join('\n')}\n\nMensaje:\n${data.message}`

  return { html, text }
}

const confirmationEmail = (name: string, lang: Lang) => {
  const copy =
    lang === 'en'
      ? {
          subject: 'We received your request — Infinity Dev',
          hello: `Hi ${name},`,
          body: 'Thanks for writing to us. We received your request and we will get back to you within 24 business hours.',
          close: 'Talk soon,',
        }
      : {
          subject: 'Recibimos tu solicitud — Infinity Dev',
          hello: `Hola ${name},`,
          body: 'Gracias por escribirnos. Recibimos tu solicitud y te responderemos en menos de 24 horas hábiles.',
          close: 'Hablamos pronto,',
        }

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:520px;color:#171b24;line-height:1.6">
      <p>${escapeHtml(copy.hello)}</p>
      <p>${copy.body}</p>
      <p style="margin-top:24px">${copy.close}<br /><strong>Infinity Dev</strong><br /><a href="https://infinitydev.agency">infinitydev.agency</a></p>
    </div>`

  return { subject: copy.subject, html, text: `${copy.hello}\n\n${copy.body}\n\n${copy.close}\nInfinity Dev` }
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

  if (!token || !(await verifyTurnstile(token, ip))) return json({ ok: false, error: 'captcha' }, 403)

  const service = SERVICES[serviceKey].es
  const owner = ownerEmail({ name, company, email, service, message, lang })

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
    const confirmation = confirmationEmail(name, lang)
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
