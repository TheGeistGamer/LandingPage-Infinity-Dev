
export const NavBar = () => {
  return (
    <header className="nav" id="nav">
      <div className="nav-inner">
        <a href="#top" className="brand">
          <img src="/logo_basic.webp" alt="Infinity Dev" />
          <span className="brand-name">INFINITY <b className="grad-text">DEV</b></span>
        </a>
        <nav className="nav-links">
          <a href="#servicios"
          ><span data-es>Servicios</span><span data-en>Services</span></a
          >
          <a href="#proceso"
          ><span data-es>Proceso</span><span data-en>Process</span></a
          >
          <a href="#trabajo"
          ><span data-es>Portafolio</span><span data-en>Work</span></a
          >
          <a href="#faq">FAQ</a>
        </nav>
        <div className="nav-right">
          <div className="lang" id="lang">
            <button data-lang="es" className="active">ES</button>
            <button data-lang="en">EN</button>
          </div>
          <a href="#contacto" className="btn btn-primary nav-cta">
            <span data-es>Cotizar</span><span data-en>Get a quote</span>
          </a>
          <button className="burger" id="burger" aria-label="menu"
          ><span></span></button
          >
        </div>
      </div>
    </header>
  )
}
