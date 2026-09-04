import { PageContainer } from './PageContainer'

export function SiteFooter() {
  return (
    <footer>
      <PageContainer className="footer-inner">
        <img src="/assets/logo-white.png" alt="Victor Muller Arquitetura" />
        <div><p>Juiz de Fora · MG</p><p>victormullerarquitetura@gmail.com</p></div>
        <p>© {new Date().getFullYear()} Victor Muller Arquitetura</p>
      </PageContainer>
    </footer>
  )
}
