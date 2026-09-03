import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/sections/ContactSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProcessSection } from './components/sections/ProcessSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { useReveal } from './hooks/useReveal'
import { useSectionNavigation } from './hooks/useSectionNavigation'

function App() {
  useReveal()
  const scrollToSection = useSectionNavigation()

  return (
    <main>
      <SiteHeader onNavigate={scrollToSection} />
      <HeroSection onNavigate={scrollToSection} />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}

export default App
