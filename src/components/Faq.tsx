import React from 'react'

export const Faq = () => {
  return (
    <section className="sec" id="faq" style={{ background: 'var(--bg-soft)' }}>
      <div className="wrap">
        <div className="faq-wrap">
          <div className="sec-head reveal" style={{ margin: 0 }}>
            <span className="eyebrow">FAQ</span>
            <h2>
              <span data-es>Preguntas<br />frecuentes</span><span data-en
              >Frequently<br />asked</span>
            </h2>
            <p>
              <span data-es
              >¿Tienes otra duda? Escríbenos y te respondemos rápido.</span
              ><span data-en
              >Have another question? Write us and we'll reply fast.</span>
            </p>
          </div>
          <div className="faq-list reveal d1">
            <div className="faq-item">
              <button className="faq-q"
              ><span
              ><span data-es>¿Trabajan con proyectos desde cero?</span><span
                data-en>Do you work on projects from scratch?</span
                  ></span
                ><span className="pm"></span></button
              >
              <div className="faq-a">
                <p>
                  <span data-es
                  >Sí. Tomamos tu idea desde la primera conversación y la
                    convertimos en un producto completo, con diseño y desarrollo a
                    la medida. También mejoramos proyectos existentes.</span
                  ><span data-en
                  >Yes. We take your idea from the first conversation and turn
                    it into a complete product, with custom design and
                    development. We also improve existing projects.</span>
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-q"
              ><span
              ><span data-es>¿Cuánto cuesta y cuánto tarda?</span><span
                data-en>How much does it cost and how long?</span
                  ></span
                ><span className="pm"></span></button
              >
              <div className="faq-a">
                <p>
                  <span data-es
                  >Cada proyecto es único, así que el costo y el tiempo dependen
                    de su alcance. Tras una primera charla te enviamos una
                    cotización clara y un cronograma realista, sin letra pequeña.</span
                  ><span data-en
                  >Every project is unique, so cost and time depend on scope.
                    After a first chat we send you a clear quote and a realistic
                    timeline, no fine print.</span>
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-q"
              ><span
              ><span data-es>¿El diseño es realmente propio?</span><span
                data-en>Is the design really custom?</span
                  ></span
                ><span className="pm"></span></button
              >
              <div className="faq-a">
                <p>
                  <span data-es
                  >Totalmente. No usamos plantillas: diseñamos una interfaz
                    pensada para tu marca, tu público y tus objetivos. Tu producto
                    se ve y se siente único.</span
                  ><span data-en
                  >Absolutely. We don't use templates: we design an interface
                    made for your brand, audience and goals. Your product looks
                    and feels unique.</span>
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-q"
              ><span
              ><span data-es>¿Qué pasa después del lanzamiento?</span><span
                data-en>What happens after launch?</span
                  ></span
                ><span className="pm"></span></button
              >
              <div className="faq-a">
                <p>
                  <span data-es
                  >Seguimos contigo. Ofrecemos soporte, monitoreo de servidores
                    y mejoras continuas para que tu producto crezca sin
                    preocupaciones.</span
                  ><span data-en
                  >We stay with you. We offer support, server monitoring and
                    continuous improvements so your product grows worry-free.</span>
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-q"
              ><span
              ><span data-es>¿Son tu equipo de tecnología?</span><span data-en
              >Can you be our tech team?</span
                  ></span
                ><span className="pm"></span></button
              >
              <div className="faq-a">
                <p>
                  <span data-es
                  >Sí. Muchos clientes nos ven como su área de desarrollo: web,
                    móvil, servidores y dashboards, todo bajo un mismo equipo de
                    confianza.</span
                  ><span data-en
                  >Yes. Many clients see us as their dev department: web,
                    mobile, servers and dashboards, all under one trusted team.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
