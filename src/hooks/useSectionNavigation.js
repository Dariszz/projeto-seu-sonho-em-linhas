import { useCallback } from 'react'

export function useSectionNavigation() {
  return useCallback((sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])
}
