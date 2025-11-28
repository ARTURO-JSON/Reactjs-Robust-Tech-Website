import { useState, useEffect } from 'react'

/**
 * Custom hook for typewriter animation effect
 * Types out text, then deletes it, and loops continuously
 * 
 * @param {string} text - The text to type out
 * @param {number} typingSpeed - Speed of typing (ms per character)
 * @param {number} deletingSpeed - Speed of deleting (ms per character)
 * @param {number} pauseDuration - How long to pause before deleting (ms)
 * @returns {string} - The current displayed text
 */
export function useTypewriter(text, typingSpeed = 50, deletingSpeed = 30, pauseDuration = 2000) {
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    let timeout

    if (!isDeleting && charIndex < text.length) {
      // Typing phase - use requestAnimationFrame for smoother updates
      timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, typingSpeed)
    } else if (!isDeleting && charIndex === text.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, pauseDuration)
    } else if (isDeleting && charIndex > 0) {
      // Deleting phase - faster for smoother feel
      timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, deletingSpeed)
    } else if (isDeleting && charIndex === 0) {
      // Reset to start typing again - shorter pause for smoother loop
      timeout = setTimeout(() => {
        setIsDeleting(false)
      }, 300)
    }

    return () => clearTimeout(timeout)
  }, [text, charIndex, isDeleting, typingSpeed, deletingSpeed, pauseDuration])

  return displayedText
}

