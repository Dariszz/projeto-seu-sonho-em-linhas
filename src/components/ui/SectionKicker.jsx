export function SectionKicker({ children, reveal = false }) {
  return <p className="section-kicker" data-reveal={reveal ? '' : undefined}>{children}</p>
}
