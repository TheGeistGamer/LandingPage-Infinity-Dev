import { createContext, useContext, type ReactNode } from 'react'
import type { L } from '../data/projects'

export type Lang = 'es' | 'en'

/**
 * Idioma activo. Los componentes interactivos lo reciben como prop y lo proveen aquí,
 * así renderizan un solo idioma tanto en el servidor como en el navegador.
 * Sin proveedor (componentes estáticos) se emiten ambos idiomas y el middleware
 * deja solo el de la ruta al generar el HTML.
 */
export const LangContext = createContext<Lang | undefined>(undefined)

export const useLang = () => useContext(LangContext)

/** Prefijo de ruta de cada idioma: el español vive en la raíz y el inglés en /en */
export const langPrefix = (lang: Lang | undefined) => (lang === 'en' ? '/en' : '')

export const Lx = ({ es, en }: { es: ReactNode; en: ReactNode }) => {
  const lang = useLang()

  if (!lang) {
    return (
      <>
        <span data-es>{es}</span>
        <span data-en>{en}</span>
      </>
    )
  }

  return <>{lang === 'en' ? en : es}</>
}

export const T = ({ t }: { t: L }) => <Lx es={t.es} en={t.en} />
