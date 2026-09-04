import { useEffect, useRef, useState } from 'react'

export function useProcessJourney(totalStages, interval = 1900) {
  const sectionRef = useRef(null)
  const [activeStage, setActiveStage] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActiveStage(totalStages - 1)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true)
      },
      { threshold: 0.35 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [totalStages])

  useEffect(() => {
    if (!hasStarted || activeStage >= totalStages - 1) return undefined
    const timer = window.setTimeout(() => setActiveStage((stage) => stage + 1), interval)
    return () => window.clearTimeout(timer)
  }, [activeStage, hasStarted, interval, totalStages])

  return { sectionRef, activeStage, setActiveStage }
}
