import { forwardRef } from 'react'
import { PageContainer } from './PageContainer'

export const SectionFrame = forwardRef(function SectionFrame(
  { as: Component = 'section', contained = true, className = '', children, ...props },
  ref,
) {
  const classes = ['section-frame', className].filter(Boolean).join(' ')

  if (contained) {
    return (
      <PageContainer ref={ref} as={Component} className={classes} {...props}>
        {children}
      </PageContainer>
    )
  }

  return (
    <Component ref={ref} className={classes} {...props}>
      {children}
    </Component>
  )
})
