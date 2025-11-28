import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

/**
 * LazySection component that wraps sections and applies fade-in animation when they come into view
 * @param {React.ReactNode} children - Content to wrap
 * @param {string} className - Additional CSS classes
 * @param {string} animationDelay - CSS animation delay (e.g., '0.1s', '0.2s')
 * @param {number} threshold - Intersection Observer threshold (0-1)
 */
function LazySection({ children, className = '', animationDelay = '0s', threshold = 0.1 }) {
  const [ref, isVisible, hasBeenVisible] = useIntersectionObserver({
    threshold,
    rootMargin: '50px', // Start animation slightly before element enters viewport
  })

  // Once visible, keep the animation class applied
  const shouldAnimate = hasBeenVisible || isVisible

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        shouldAnimate
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: shouldAnimate ? animationDelay : '0s' }}
    >
      {children}
    </div>
  )
}

export default LazySection

