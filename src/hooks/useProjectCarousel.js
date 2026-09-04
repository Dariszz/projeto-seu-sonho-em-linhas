import { useEffect, useRef, useState } from 'react'

export function useProjectCarousel(totalProjects) {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToProject = (index) => {
    const nextIndex = (index + totalProjects) % totalProjects
    const target = trackRef.current?.children[nextIndex]

    target?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    setActiveIndex(nextIndex)
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined
    let animationFrame

    const updateActiveProject = () => {
      const cards = [...track.children]
      const closestIndex = cards.reduce((closest, card, index) => {
        const currentDistance = Math.abs(card.offsetLeft - track.scrollLeft)
        const closestDistance = Math.abs(cards[closest].offsetLeft - track.scrollLeft)
        return currentDistance < closestDistance ? index : closest
      }, 0)

      setActiveIndex(closestIndex)
    }

    const handleScroll = () => {
      window.cancelAnimationFrame(animationFrame)
      animationFrame = window.requestAnimationFrame(updateActiveProject)
    }

    track.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.cancelAnimationFrame(animationFrame)
      track.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return {
    trackRef,
    activeIndex,
    goPrevious: () => scrollToProject(activeIndex - 1),
    goNext: () => scrollToProject(activeIndex + 1),
  }
}
