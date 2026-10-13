import { faqs } from '../data/faq'
import { T } from './i18n'

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
            {faqs.map((item) => (
              <div className="faq-item" key={item.q.es}>
                <button className="faq-q" type="button">
                  <span><T t={item.q} /></span>
                  <span className="pm"></span>
                </button>
                <div className="faq-a">
                  <p><T t={item.a} /></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
