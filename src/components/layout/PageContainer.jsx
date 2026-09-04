import { forwardRef } from 'react'

export const PageContainer = forwardRef(function PageContainer(
  { as: Component = 'div', className = '', children, ...props },
  ref,
) {
  const classes = ['page-container', className].filter(Boolean).join(' ')

  return (
    <Component ref={ref} className={classes} {...props}>
      {children}
    </Component>
  )
})
