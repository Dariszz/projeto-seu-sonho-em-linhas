import { ArrowDown } from 'lucide-react'
import { PageContainer } from '../layout/PageContainer'

export function HeroSection({ onNavigate }) {
  return (
    <section className="hero" id="inicio">
      <img className="hero-image" src="/assets/casa-conceito-hero.png" alt="Casa contemporânea integrada à paisagem — imagem conceitual" />
      <div className="hero-shade" />
      <div className="hero-intro" aria-hidden="true">
        <span className="hero-intro-line hero-intro-line--horizontal" />
        <span className="hero-intro-line hero-intro-line--vertical" />
        <div className="hero-logo-drawing">
          <img src="/assets/logo-white.png" alt="" />
          <span />
        </div>
      </div>
      <div className="blueprint" aria-hidden="true"><i /><i /><i /><i /></div>
      <PageContainer className="hero-copy">
        <p className="eyebrow">Arquitetura residencial · Interiores · Comercial</p>
        <h1>Seu sonho<br />em <em>linhas.</em></h1>
        <div className="hero-bottom">
          <p>Espaços autorais que aproximam arquitetura, natureza e a história de quem vai habitá-los.</p>
          <button className="round-button" onClick={() => onNavigate('projetos')} aria-label="Conhecer projetos"><ArrowDown /></button>
        </div>
      </PageContainer>
      <span className="demo-label">Imagem conceitual para apresentação</span>
    </section>
  )
}
