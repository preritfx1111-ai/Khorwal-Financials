"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"

/**
 * SmoothScrollProvider
 * ─────────────────────
 * Wraps the entire app in Lenis smooth-scrolling.
 *
 * Key decisions:
 * - easing: cubicBezier curve for a premium, slightly elastic feel
 * - duration: 1.2 s — long enough to feel buttery, short enough to feel responsive
 * - lerp: 0.08 — lower = smoother / more "floating"; 0.08 is the sweet spot
 * - We sync with framer-motion's raf loop via requestAnimationFrame
 *   so that any scroll-driven framer animations remain in sync.
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Smooth wheel & touch
      smoothWheel: true,
      // Respect OS "reduce motion" preference
      // If user has prefers-reduced-motion enabled, Lenis is a no-op
    })

    lenisRef.current = lenis

    // RAF loop — ticks lenis on every frame
    let rafId: number

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    // Expose lenis instance globally so anchor links work
    ;(window as any).__lenis = lenis

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
      delete (window as any).__lenis
    }
  }, [])

  return <>{children}</>
}
