import React from 'react'

export const CTA = () => {
  return (
    <section className="cta" id="contacto">
      <div className="wrap">
        <div className="cta-card reveal">
          <span className="blob b1"></span><span className="blob b2"></span>
          <div className="cta-left">
            <span className="eyebrow" style={{ color: '#c8a8ff' }}
            ><span data-es>Hablemos</span><span data-en>Let's talk</span></span
            >
            <h2 style={{ marginTop: '16px' }}>
              <span data-es>Cuéntanos tu idea.<br />Te respondemos en 24 h.</span
              ><span data-en>Tell us your idea.<br />We reply within 24 h.</span>
            </h2>
            <p>
              <span data-es
              >Sin compromiso. Recibe una cotización clara y honesta para tu
                proyecto.</span
              ><span data-en
              >No commitment. Get a clear, honest quote for your project.</span>
            </p>
            <ul className="cta-points">
              <li>
                <span className="ck"
                ><svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.6"><path d="M5 13l4 4L19 7"></path></svg
                  ></span
                ><span data-es>Primera asesoría gratuita</span><span data-en
                >Free first consultation</span>
              </li>
              <li>
                <span className="ck"
                ><svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.6"><path d="M5 13l4 4L19 7"></path></svg
                  ></span
                ><span data-es>Diseño 100% a la medida</span><span data-en
                >100% custom design</span>
              </li>
              <li>
                <span className="ck"
                ><svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.6"><path d="M5 13l4 4L19 7"></path></svg
                  ></span
                ><span data-es>Acompañamiento de principio a fin</span><span
                  data-en>End-to-end guidance</span>
              </li>
            </ul>
          </div>
          <div className="form">
            <form id="quoteForm">
              <h3>
                <span data-es>Solicita tu cotización</span><span data-en
                >Request your quote</span>
              </h3>
              <p className="fsub">
                <span data-es>Cuéntanos lo esencial y te contactamos.</span><span
                  data-en>Give us the essentials and we'll reach out.</span>
              </p>
              <div className="field-row">
                <div className="field">
                  <label
                  ><span data-es>Nombre</span><span data-en>Name</span></label
                  ><input type="text" required placeholder="Ana Pérez" />
                </div>
                <div className="field">
                  <label
                  ><span data-es>Empresa</span><span data-en>Company</span
                  ></label
                  ><input type="text" placeholder="Acme Inc." />
                </div>
              </div>
              <div className="field">
                <label
                ><span data-es>Correo</span><span data-en>Email</span></label
                ><input type="email" required placeholder="ana@empresa.com" />
              </div>
              <div className="field">
                <label
                ><span data-es>¿Qué necesitas?</span><span data-en
                >What do you need?</span
                  ></label
                >
                <select required>
                  <option
                    value=""
                    data-es-text="Selecciona un servicio"
                    data-en-text="Select a service"></option>
                  <option
                    data-es-text="Aplicación web"
                    data-en-text="Web application"></option>
                  <option data-es-text="App móvil" data-en-text="Mobile app"
                  ></option>
                  <option
                    data-es-text="Servidores / backend"
                    data-en-text="Servers / backend"></option>
                  <option
                    data-es-text="Dashboard empresarial"
                    data-en-text="Business dashboard"></option>
                  <option
                    data-es-text="Varios / no estoy seguro"
                    data-en-text="Several / not sure"></option>
                </select>
              </div>
              <div className="field">
                <label
                ><span data-es>Cuéntanos tu idea</span><span data-en
                >Tell us your idea</span
                  ></label
                ><textarea placeholder="..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                <span data-es>Enviar solicitud</span><span data-en
                >Send request</span
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
              </button>
              <p className="form-note">
                <span data-es>Te respondemos en menos de 24 horas hábiles.</span
                ><span data-en>We reply within 24 business hours.</span>
              </p>
            </form>
            <div className="form-success" id="formSuccess">
              <div className="ico">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.4"><path d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3>
                <span data-es>¡Solicitud enviada!</span><span data-en
                >Request sent!</span>
              </h3>
              <p>
                <span data-es>Gracias. Te contactaremos muy pronto.</span><span
                  data-en>Thanks. We'll be in touch very soon.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
