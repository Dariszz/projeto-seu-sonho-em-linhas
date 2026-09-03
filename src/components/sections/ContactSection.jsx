import { ArrowUpRight } from 'lucide-react'
import { SectionKicker } from '../ui/SectionKicker'

export function ContactSection() {
  return (
    <section className="contact" id="contato">
      <div className="contact-mark" aria-hidden="true"><img src="/assets/symbol-primary.png" alt="" /></div>
      <div className="contact-copy" data-reveal>
        <SectionKicker>05 — Vamos conversar</SectionKicker>
        <h2>Todo projeto começa<br />com uma boa <em>conversa.</em></h2>
        <p>Conte um pouco sobre o espaço que você deseja transformar.</p>
        <button type="button">Iniciar um projeto <ArrowUpRight /></button>
        <small>Botão demonstrativo · integração na próxima etapa</small>
      </div>
    </section>
  )
}
