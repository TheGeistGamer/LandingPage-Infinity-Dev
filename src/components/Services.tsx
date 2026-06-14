import React from 'react'

export const Services = () => {
  return (
    <section className="sec" id="servicios">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow"
          ><span data-es>Lo que hacemos</span><span data-en>What we do</span
          ></span
          >
          <h2>
            <span data-es
            >Cuatro especialidades,<br />una sola obsesión: <span
              className="grad-text">tu producto</span
              >.</span
            ><span data-en
            >Four specialties,<br />one obsession: <span className="grad-text"
            >your product</span
              >.</span>
          </h2>
          <p>
            <span data-es
            >Cubrimos todo el ciclo, desde la idea hasta el servidor en
              producción.</span
            ><span data-en
            >We cover the full cycle, from idea to production server.</span>
          </p>
        </div>
        <div className="services-grid">
          <article className="svc reveal">
            <div className="svc-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              ><rect x="3" y="4" width="18" height="14" rx="2"></rect><path
                d="M3 9h18M8 21h8"></path></svg>
            </div>
            <h3>
              <span data-es>Aplicaciones web</span><span data-en
              >Web applications</span>
            </h3>
            <p>
              <span data-es
              >Plataformas y sitios rápidos, escalables y con diseños únicos.
                Experiencias hechas para convertir y para durar.</span
              ><span data-en
              >Fast, scalable platforms and sites with one-of-a-kind designs.
                Experiences built to convert and to last.</span>
            </p>
            <div className="svc-tags">
              <span>React</span><span>Next.js</span><span>UI/UX</span><span
              >E-commerce</span>
            </div>
          </article>

          <article className="svc reveal d1">
            <div className="svc-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              ><rect x="7" y="2" width="10" height="20" rx="2.5"></rect><path
                d="M11 18h2"></path></svg>
            </div>
            <h3>
              <span data-es>Apps móviles</span><span data-en>Mobile apps</span>
            </h3>
            <p>
              <span data-es
              >Aplicaciones iOS y Android fluidas, intuitivas y con tu
                identidad. Tu marca en el bolsillo de tus clientes.</span
              ><span data-en
              >Smooth, intuitive iOS and Android apps with your identity. Your
                brand in your customers' pocket.</span>
            </p>
            <div className="svc-tags">
              <span>iOS</span><span>Android</span><span>React Native</span><span
              >Flutter</span>
            </div>
          </article>

          <article className="svc reveal">
            <div className="svc-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              ><rect x="3" y="4" width="18" height="6" rx="1.5"></rect><rect
                x="3"
                y="14"
                width="18"
                height="6"
                rx="1.5"></rect><path d="M7 7h.01M7 17h.01"></path></svg>
            </div>
            <h3>
              <span data-es>Servidores &amp; backend</span><span data-en
              >Servers &amp; backend</span>
            </h3>
            <p>
              <span data-es
              >Infraestructura sólida, APIs seguras y arquitectura que aguanta
                el crecimiento. Cimientos en los que confiar.</span
              ><span data-en
              >Solid infrastructure, secure APIs and architecture that scales.
                Foundations you can trust.</span>
            </p>
            <div className="svc-tags">
              <span>Node</span><span>Cloud</span><span>APIs</span><span
              >DevOps</span>
            </div>
          </article>

          <article className="svc reveal d1">
            <div className="svc-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              ><path d="M3 3v18h18"></path><path d="M7 14l3-3 3 3 5-6"
              ></path></svg>
            </div>
            <h3>
              <span data-es>Dashboards empresariales</span><span data-en
              >Business dashboards</span>
            </h3>
            <p>
              <span data-es
              >Paneles a la medida para visualizar tus datos y decidir con
                claridad. Toda tu operación en una sola pantalla.</span
              ><span data-en
              >Tailored panels to visualize your data and decide with clarity.
                Your whole operation on one screen.</span>
            </p>
            <div className="svc-tags">
              <span>Analytics</span><span>BI</span><span>Real-time</span><span
              >Reportes</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
