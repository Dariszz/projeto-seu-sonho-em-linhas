export function ServiceItem({ service }) {
  return (
    <article data-reveal>
      <span>{service.number}</span>
      <h3>{service.title}</h3>
      <p>{service.text}</p>
    </article>
  )
}
