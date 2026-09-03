import { ArrowDown } from 'lucide-react'

export function HeroSection({ onNavigate }) {
  return (
    <section className="hero" id="inicio">
      <img className="hero-image" src="/assets/casa-conceito-hero.png" alt="Casa contemporânea integrada à paisagem — imagem conceitual" />
      <div className="hero-shade" />
      <div className="blueprint" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="hero-copy">
        <p className="eyebrow">Arquitetura residencial · Interiores · Comercial</p>
        <h1>Seu sonho<br />em <em>linhas.</em></h1>
        <div className="hero-bottom">
          <p>Espaços autorais que aproximam arquitetura, natureza e a história de quem vai habitá-los.</p>
          <button className="round-button" onClick={() => onNavigate('projetos')} aria-label="Conhecer projetos"><ArrowDown /></button>
        </div>
      </div>
      <span className="demo-label">Imagem conceitual para apresentação</span>
    </section>
  )
}
