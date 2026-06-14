import React from 'react'

export const Process = () => {
  return (
    <section className="sec process" id="proceso">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow"
          ><span data-es>Cómo trabajamos</span><span data-en>How we work</span
          ></span
          >
          <h2>
            <span data-es>Un proceso claro,<br />sin sorpresas.</span><span
              data-en>A clear process,<br />no surprises.</span>
          </h2>
          <p>
            <span data-es
            >Te acompañamos en cada paso y mantenemos todo transparente, de
              principio a fin.</span
            ><span data-en
            >We walk with you at every step and keep everything transparent,
              start to finish.</span>
          </p>
        </div>
        <div className="steps">
          <div className="step reveal">
            <span className="step-n">01</span><h4>
              <span data-es>Descubrimiento</span><span data-en>Discovery</span>
            </h4><p>
              <span data-es
              >Escuchamos tu idea, tus metas y a tus clientes para entender el
                reto real.</span
              ><span data-en
              >We listen to your idea, goals and customers to understand the
                real challenge.</span>
            </p>
          </div>
          <div className="step reveal d1">
            <span className="step-n">02</span><h4>
              <span data-es>Diseño</span><span data-en>Design</span>
            </h4><p>
              <span data-es
              >Creamos una interfaz única y prototipos que puedes ver y tocar
                antes de programar.</span
              ><span data-en
              >We craft a unique interface and prototypes you can see and touch
                before code.</span>
            </p>
          </div>
          <div className="step reveal d2">
            <span className="step-n">03</span><h4>
              <span data-es>Desarrollo</span><span data-en>Development</span>
            </h4><p>
              <span data-es
              >Construimos con código limpio y entregas frecuentes para que veas
                avances reales.</span
              ><span data-en
              >We build with clean code and frequent releases so you see real
                progress.</span>
            </p>
          </div>
          <div className="step reveal d3">
            <span className="step-n">04</span><h4>
              <span data-es>Lanzamiento</span><span data-en>Launch</span>
            </h4><p>
              <span data-es
              >Desplegamos en servidores seguros y dejamos todo listo para tus
                usuarios.</span
              ><span data-en
              >We deploy to secure servers and get everything ready for your
                users.</span>
            </p>
          </div>
          <div className="step reveal d4">
            <span className="step-n">05</span><h4>
              <span data-es>Soporte</span><span data-en>Support</span>
            </h4><p>
              <span data-es
              >Seguimos contigo: monitoreo, mejoras y nuevas funciones cuando
                las necesites.</span
              ><span data-en
              >We stay with you: monitoring, improvements and new features when
                you need them.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
