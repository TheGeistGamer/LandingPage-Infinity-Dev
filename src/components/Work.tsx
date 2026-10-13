import { useCallback, useState } from 'react'
import { projects, type Project } from '../data/projects'
import { ProjectModal } from './ProjectModal'
import { T } from './i18n'

const CardCover = ({ project }: { project: Project }) => (
  <div className={`work-cover ${project.cover[0].kind}`} aria-hidden="true">
    {project.cover.map((img, i) => (
      <img
        key={img.src}
        src={img.src}
        alt=""
        loading="lazy"
        decoding="async"
        className={`cv cv${i + 1} ${img.kind}`}
      />
    ))}
  </div>
)

export const Work = () => {
  const [openId, setOpenId] = useState<string | null>(null)
  const close = useCallback(() => setOpenId(null), [])
  const active = projects.find((p) => p.id === openId)

  return (
    <section className="sec" id="trabajo">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">
            <span data-es>Portafolio</span><span data-en>Selected work</span>
          </span>
          <h2>
            <span data-es>Proyectos pensados<br />al detalle.</span>
            <span data-en>Projects crafted<br />down to the detail.</span>
          </h2>
          <p>
            <span data-es>Una muestra de lo que construimos. Toca un proyecto para ver cómo lo hicimos.</span>
            <span data-en>A sample of what we build. Tap a project to see how we did it.</span>
          </p>
        </div>

        <div className="bento">
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              className={`work bento-${p.size} reveal${i ? ` d${Math.min(i, 3)}` : ''}`}
              style={{ background: p.tone }}
              onClick={() => setOpenId(p.id)}
              aria-haspopup="dialog"
            >
              <div className="work-meta">
                <span className="tag"><T t={p.tag} /></span>
                <h4><T t={p.title} /></h4>
                <p><T t={p.summary} /></p>
                <span className="work-more">
                  <span data-es>Ver proyecto</span><span data-en>View project</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
              <CardCover project={p} />
            </button>
          ))}

          <a href="#contacto" className="work bento-banner work-cta reveal d2">
            <div className="work-meta">
              <span className="tag"><span data-es>Tu proyecto</span><span data-en>Your project</span></span>
              <h4><span data-es>El siguiente podría ser el tuyo.</span><span data-en>The next one could be yours.</span></h4>
              <span className="work-more">
                <span data-es>Hablemos</span><span data-en>Let’s talk</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>
          </a>
        </div>

        <div className="work-all reveal">
          <a href="/trabajos" className="btn btn-ghost btn-lg">
            <span data-es>Ver todos los trabajos</span><span data-en>View all work</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={close} />}
    </section>
  )
}
