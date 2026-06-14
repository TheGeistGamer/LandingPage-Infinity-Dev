import '../scripts/image-slot'

export const Work = () => {
  return (
    <section className="sec" id="trabajo">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow"
          ><span data-es>Portafolio</span><span data-en>Selected work</span
          ></span
          >
          <h2>
            <span data-es>Proyectos pensados<br />al detalle.</span><span data-en
            >Projects crafted<br />down to the detail.</span>
          </h2>
          <p>
            <span data-es
            >Una muestra del tipo de productos que construimos. Pronto, casos
              reales aquí.</span
            ><span data-en
            >A taste of the kind of products we build. Real case studies coming
              soon.</span>
          </p>
        </div>
        <div className="work-grid">
          <article className="work reveal">
            <image-slot id="work1" shape="rect" placeholder="Drop project image"
            ></image-slot>
            <div className="work-meta">
              <span className="tag"
              ><span data-es>App web</span><span data-en>Web app</span></span
              >
              <h4>
                <span data-es>Plataforma SaaS</span><span data-en
                >SaaS Platform</span>
              </h4>
              <p>
                <span data-es
                >Producto a medida con panel, pagos y analítica en tiempo real.</span
                ><span data-en
                >Custom product with dashboard, payments and real-time
                  analytics.</span>
              </p>
            </div>
          </article>
          <article className="work reveal d1">
            <image-slot id="work2" shape="rect" placeholder="Drop project image"
            ></image-slot>
            <div className="work-meta">
              <span className="tag"
              ><span data-es>App móvil</span><span data-en>Mobile app</span
              ></span
              >
              <h4>
                <span data-es>App de servicios</span><span data-en
                >Services App</span>
              </h4>
              <p>
                <span data-es
                >Experiencia móvil fluida con diseño propio y back-end
                  escalable.</span
                ><span data-en
                >Smooth mobile experience with custom design and scalable
                  backend.</span>
              </p>
            </div>
          </article>
          <article className="work reveal d2">
            <image-slot id="work3" shape="rect" placeholder="Drop project image"
            ></image-slot>
            <div className="work-meta">
              <span className="tag">Dashboard</span>
              <h4>
                <span data-es>Panel empresarial</span><span data-en
                >Business Panel</span>
              </h4>
              <p>
                <span data-es
                >Visualización de datos y reportes para decidir con claridad.</span
                ><span data-en
                >Data visualization and reports to decide with clarity.</span>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
