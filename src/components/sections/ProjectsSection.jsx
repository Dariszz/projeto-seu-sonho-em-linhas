import { ProjectCard } from '../cards/ProjectCard'
import { projects } from '../../data/siteContent'
import { SectionKicker } from '../ui/SectionKicker'

export function ProjectsSection() {
  return (
    <section className="projects" id="projetos">
      <div className="projects-heading section-pad" data-reveal>
        <SectionKicker>02 — Seleção</SectionKicker>
        <h2>Projetos em destaque</h2>
        <p>Uma amostra de escalas, materiais e maneiras de viver.</p>
      </div>
      <div className="project-list">
        {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
      </div>
    </section>
  )
}
