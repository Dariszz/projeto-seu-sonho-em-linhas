import { ArrowUpRight } from 'lucide-react'

export function ProjectCard({ project, index }) {
  return (
    <article className="project-card" data-reveal>
      <div className="project-image" style={{ backgroundPosition: project.position }}>
        <span>Conteúdo demonstrativo</span>
      </div>
      <div className="project-meta">
        <div><small>{String(index + 1).padStart(2, '0')}</small><h3>{project.name}</h3></div>
        <div><p>{project.type}</p><p>{project.place}</p></div>
        <ArrowUpRight aria-hidden="true" />
      </div>
    </article>
  )
}
