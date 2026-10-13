import type { L } from '../data/projects'

export const T = ({ t }: { t: L }) => (
  <>
    <span data-es>{t.es}</span>
    <span data-en>{t.en}</span>
  </>
)

export const currentLang = (): keyof L =>
  typeof document !== 'undefined' && document.body.classList.contains('en') ? 'en' : 'es'
