import { SectionKicker } from '../ui/SectionKicker'
import { PageContainer } from '../layout/PageContainer'

export function AboutSection() {
  return (
    <PageContainer as="section" className="intro section-pad" id="sobre">
      <SectionKicker reveal>01 — O escritório</SectionKicker>
      <div className="intro-grid">
        <h2 data-reveal>O projeto começa<br />antes do primeiro <em>traço.</em></h2>
        <div className="intro-copy" data-reveal>
          <p>Começa na escuta. Na leitura da rotina, do terreno e das possibilidades que ainda não ganharam forma.</p>
          <p>Victor Muller desenvolve projetos contemporâneos com atenção ao contexto, à funcionalidade e aos detalhes que tornam cada espaço único.</p>
          <span>Juiz de Fora · Minas Gerais</span>
        </div>
      </div>
    </PageContainer>
  )
}
