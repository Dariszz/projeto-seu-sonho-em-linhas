import { ArrowLeft, ArrowRight } from 'lucide-react'

export function ProjectCard({ project, index, totalProjects, isActive, previousProject, nextProject, onPrevious, onNext }) {
  return (
    <article className={`project-card${isActive ? ' is-active' : ''}`}>
      <div className="project-image">
        <div className="project-image-visual" style={{ backgroundPosition: project.position }} />
        <span>Conteúdo demonstrativo</span>
      </div>
      <div className="project-meta">
        <div className="project-identification">
          <small>{String(index + 1).padStart(2, '0')} / {String(totalProjects).padStart(2, '0')}</small>
          <h3>{project.name}</h3>
          <p>{project.type} · {project.place}</p>
        </div>
        <div className="project-controls" aria-label="Navegação dos projetos">
          <button type="button" onClick={onPrevious} tabIndex={isActive ? 0 : -1} aria-label={`Ver projeto anterior: ${previousProject}`}>
            <ArrowLeft aria-hidden="true" />
          </button>
          <button type="button" onClick={onNext} tabIndex={isActive ? 0 : -1} aria-label={`Ver próximo projeto: ${nextProject}`}>
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  )
}
