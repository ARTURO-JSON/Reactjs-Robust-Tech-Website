import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook that uses Intersection Observer to detect when an element enters the viewport
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Threshold for triggering (0-1)
 * @param {string} options.rootMargin - Root margin for the observer
 * @returns {[React.RefObject, boolean]} - Ref to attach to element and visibility state
 */
export function useIntersectionObserver(options = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)
  const elementRef = useRef(null)

  const { threshold = 0.1, rootMargin = '0px' } = options

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            setHasBeenVisible(true)
            // Once visible, we can optionally disconnect to improve performance
            // observer.unobserve(element)
          } else {
            setIsVisible(false)
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin])

  return [elementRef, isVisible, hasBeenVisible]
}

