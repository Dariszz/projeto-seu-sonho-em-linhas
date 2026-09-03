import { services } from '../../data/siteContent'
import { ServiceItem } from '../cards/ServiceItem'
import { SectionKicker } from '../ui/SectionKicker'

export function ServicesSection() {
  return (
    <section className="services section-pad" id="servicos">
      <div className="services-title" data-reveal>
        <SectionKicker>03 — Atuação</SectionKicker>
        <h2>Da ideia ao<br /><em>espaço vivido.</em></h2>
      </div>
      <div className="services-list">
        {services.map((service) => <ServiceItem key={service.number} service={service} />)}
      </div>
    </section>
  )
}
