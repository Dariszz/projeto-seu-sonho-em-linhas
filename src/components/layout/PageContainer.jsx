export function PageContainer({ as: Component = 'div', className = '', children, ...props }) {
  const classes = ['page-container', className].filter(Boolean).join(' ')

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}
