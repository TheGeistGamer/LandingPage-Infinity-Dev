import React from 'react'

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <span className="blob b1"></span><span className="blob b2"></span>
      </div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow reveal"
          ><span data-es>Desarrollo de software a medida</span><span data-en
          >Custom software studio</span
            ></span
          >
          <h1 className="reveal d1">
            <span data-es
            >Software único,<br />hecho para <span className="grad-text"
            >tu historia</span
              >.</span
            >
            <span data-en
            >Unique software,<br />built for <span className="grad-text"
            >your story</span
              >.</span
            >
          </h1>
          <p className="hero-sub reveal d2">
            <span data-es
            >Diseñamos y construimos apps web, móviles, servidores y dashboards
              a la medida de tu negocio. Nada de plantillas — pensamos cada
              detalle en ti y en tus clientes.</span
            >
            <span data-en
            >We design and build custom web apps, mobile apps, servers and
              dashboards tailored to your business. No templates — every detail
              thought around you and your customers.</span
            >
          </p>
          <div className="hero-cta reveal d3">
            <a href="#contacto" className="btn btn-primary btn-lg">
              <span data-es>Cotiza tu proyecto</span><span data-en
              >Quote your project</span
              >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ><path d="M5 12h14M13 6l6 6-6 6"></path></svg
              >
            </a>
            <a href="#trabajo" className="btn btn-ghost btn-lg">
              <span data-es>Ver portafolio</span><span data-en>See our work</span>
            </a>
          </div>
          <div className="hero-trust reveal d4">
            <div className="dots"><i></i><i></i><i></i><i></i></div>
            <span data-es>Confían en nosotros equipos que quieren crecer</span>
            <span data-en>Trusted by teams ready to grow</span>
          </div>
        </div>

        {/* hero mock */}
        <div className="hero-visual reveal d2">
          <div className="mock-wrap" style={{ position: 'relative' }}>
            <div className="float-card fc1">
              <span className="ic"
              ><svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"><path d="M5 13l4 4L19 7"></path></svg
                ></span
              >
              <span data-es>Deploy exitoso</span><span data-en
              >Deploy successful</span
              >
            </div>
            <div className="float-card fc2">
              <span className="ic"
              ><svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"><path d="M12 2v20M2 12h20"></path></svg
                ></span
              >
              <span data-es>+38% conversión</span><span data-en
              >+38% conversion</span
              >
            </div>
            <div className="mock">
              <div className="mock-bar">
                <i></i><i></i><i></i><span className="mock-url"
                >app.infinitydev.io</span>
              </div>
              <div className="mock-body">
                <div className="mock-row">
                  <h4>
                    <span data-es>Panel de control</span><span data-en
                    >Dashboard</span>
                  </h4>
                  <span className="mock-pill"
                  ><span data-es>En vivo</span><span data-en>Live</span></span
                  >
                </div>
                <div className="mock-kpis">
                  <div className="kpi">
                    <div className="n" data-count="2.4" data-suffix="k">0</div><div
                      className="l"
                    >
                      <span data-es>Usuarios</span><span data-en>Users</span>
                    </div>
                  </div>
                  <div className="kpi">
                    <div className="n" data-count="99.9" data-suffix="%">0</div><div
                      className="l"
                    >
                      Uptime
                    </div>
                  </div>
                  <div className="kpi">
                    <div className="n" data-count="148" data-suffix="ms">0</div><div
                      className="l"
                    >
                      <span data-es>Latencia</span><span data-en>Latency</span>
                    </div>
                  </div>
                </div>
                <div className="chart">
                  <b style={{ height: '40%' }}></b><b style={{ height: '62%' }}></b><b
                    style={{ height: '48%' }}></b><b style={{ height: '78%' }}></b><b
                      style={{ height: '58%' }}></b><b style={{ height: '90%' }}></b><b
                        style={{ height: '70%' }}></b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
