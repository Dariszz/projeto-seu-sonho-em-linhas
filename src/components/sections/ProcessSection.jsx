import { processSteps } from '../../data/siteContent'
import { SectionKicker } from '../ui/SectionKicker'

export function ProcessSection() {
  return (
    <section className="process section-pad">
      <SectionKicker reveal>04 — Processo</SectionKicker>
      <div className="process-grid">
        <h2 data-reveal>Um caminho claro,<br />construído <em>juntos.</em></h2>
        <ol data-reveal>
          {processSteps.map((step, index) => (
            <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></li>
          ))}
        </ol>
      </div>
    </section>
  )
}
