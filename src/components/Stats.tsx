import React from 'react'

export const Stats = () => {
  return (
    <section className="stats">
      <div className="wrap">
        <div className="stats-grid">
          <div className="stat reveal">
            <div className="n" data-count="100" data-suffix="%">
              <span>0</span>
            </div><div className="l">
              <span data-es>Código a medida</span><span data-en
              >Custom-built code</span>
            </div>
          </div>
          <div className="stat reveal d1">
            <div className="n" data-count="4" data-suffix=""><span>0</span></div><div
              className="l"
            >
              <span data-es>Áreas de especialidad</span><span data-en
              >Areas of expertise</span>
            </div>
          </div>
          <div className="stat reveal d2">
            <div className="n" data-count="24" data-suffix="/7">
              <span>0</span>
            </div><div className="l">
              <span data-es>Soporte y monitoreo</span><span data-en
              >Support & monitoring</span>
            </div>
          </div>
          <div className="stat reveal d3">
            <div className="n" data-count="0" data-prefix="∞" data-suffix="">
              <span>0</span>
            </div><div className="l">
              <span data-es>Posibilidades</span><span data-en>Possibilities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
