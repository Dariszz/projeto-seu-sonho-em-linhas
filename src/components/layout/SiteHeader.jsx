import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navigationItems } from '../../data/siteContent'
import { PageContainer } from './PageContainer'

export function SiteHeader({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = (sectionId) => {
    onNavigate(sectionId)
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <PageContainer className="site-header__inner">
        <button className="brand" onClick={() => navigate('inicio')} aria-label="Voltar ao início">
          <img src="/assets/logo-white.png" alt="Victor Muller Arquitetura" />
        </button>
        <nav className={menuOpen ? 'nav is-open' : 'nav'} aria-label="Navegação principal">
          {navigationItems.map((item) => (
            <button key={item.sectionId} onClick={() => navigate(item.sectionId)}>{item.label}</button>
          ))}
          <button className="nav-contact" onClick={() => navigate('contato')}>Iniciar projeto</button>
        </nav>
        <button
          className="menu-button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </PageContainer>
    </header>
  )
}
