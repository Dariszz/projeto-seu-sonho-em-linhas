import { ProjectCard } from '../cards/ProjectCard'
import { projects } from '../../data/siteContent'
import { PageContainer } from '../layout/PageContainer'
import { SectionFrame } from '../layout/SectionFrame'
import { SectionKicker } from '../ui/SectionKicker'

export function ProjectsSection() {
  return (
    <SectionFrame contained={false} className="projects" id="projetos">
      <PageContainer className="projects-heading section-pad" data-reveal>
        <SectionKicker>02 — Seleção</SectionKicker>
        <h2>Projetos em destaque</h2>
        <p>Uma amostra de escalas, materiais e maneiras de viver.</p>
      </PageContainer>
      <PageContainer className="project-track-frame">
        <div className="project-list">
          {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
        </div>
      </PageContainer>
    </SectionFrame>
  )
}
