import { processSteps } from '../../data/siteContent'
import { useProcessJourney } from '../../hooks/useProcessJourney'
import { SectionFrame } from '../layout/SectionFrame'
import { SectionKicker } from '../ui/SectionKicker'

export function ProcessSection() {
  const { sectionRef, activeStage, setActiveStage } = useProcessJourney(processSteps.length)

  return (
    <SectionFrame ref={sectionRef} className="process section-pad">
      <SectionKicker reveal>04 — Processo</SectionKicker>
      <div className="process-heading">
        <h2 data-reveal>Um caminho claro,<br />construído <em>juntos.</em></h2>
        <p data-reveal>Do gesto inicial à experiência construída, cada etapa aproxima intenção, técnica e realidade.</p>
      </div>

      <div className="process-journey" data-reveal>
        <div className="process-stage" aria-live="polite">
          {processSteps.map((step, index) => (
            <img
              key={step.title}
              className={index === activeStage ? 'is-active' : ''}
              src={step.image}
              alt={index === activeStage ? step.alt : ''}
              aria-hidden={index !== activeStage}
            />
          ))}
          <span className="process-stage-number">0{activeStage + 1} / 04</span>
          <span className="process-stage-label">{processSteps[activeStage].title}</span>
        </div>

        <ol className="process-timeline">
          {processSteps.map((step, index) => (
            <li key={step.title} className={index === activeStage ? 'is-active' : ''}>
              <button type="button" onClick={() => setActiveStage(index)} aria-current={index === activeStage ? 'step' : undefined}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step.title}</strong>
                <small>{step.description}</small>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </SectionFrame>
  )
}
