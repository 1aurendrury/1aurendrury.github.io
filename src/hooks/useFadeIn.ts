import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function useFadeIn(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: threshold })
  return { ref, inView }
}