import { defineMiddleware } from 'astro:middleware'

type Lang = 'es' | 'en'

const VOID_TAGS = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'])

/**
 * Quita del HTML todos los elementos marcados con data-es o data-en del idioma que NO
 * corresponde a la página. Los textos se escriben una sola vez como pares
 * <span data-es>…</span><span data-en>…</span> y cada ruta se queda con su idioma,
 * de modo que Google ve una página en español y otra en inglés, sin texto duplicado.
 */
export const keepLanguage = (html: string, keep: Lang): string => {
  const drop: Lang = keep === 'es' ? 'en' : 'es'
  const opening = new RegExp(
    `<([a-zA-Z][a-zA-Z0-9]*)\\b[^>]*?\\sdata-${drop}(?:=(?:"[^"]*"|'[^']*'|[^\\s>]*))?(?=[\\s/>])[^>]*>`,
    'g',
  )

  let out = ''
  let cursor = 0
  let match: RegExpExecArray | null

  while ((match = opening.exec(html))) {
    const tag = match[1].toLowerCase()
    const start = match.index
    let end = start + match[0].length

    if (!VOID_TAGS.has(tag) && !match[0].endsWith('/>')) {
      const scan = new RegExp(`<(/?)${tag}\\b[^>]*>`, 'gi')
      scan.lastIndex = end
      let depth = 1
      let token: RegExpExecArray | null

      while (depth > 0 && (token = scan.exec(html))) {
        if (token[1]) depth -= 1
        else if (!token[0].endsWith('/>')) depth += 1
        end = scan.lastIndex
      }
    }

    out += html.slice(cursor, start)
    cursor = end
    opening.lastIndex = end
  }

  return out + html.slice(cursor)
}

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next()

  if (!response.headers.get('content-type')?.includes('text/html')) return response

  const keep: Lang = /^\/en(\/|$)/.test(context.url.pathname) ? 'en' : 'es'
  const html = keepLanguage(await response.text(), keep)

  const headers = new Headers(response.headers)
  headers.delete('content-length')

  return new Response(html, { status: response.status, statusText: response.statusText, headers })
})
