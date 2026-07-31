"use client"

import { useState, useRef } from "react"
import { testimonials } from "@/constants/data"
import { Quote, Star, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  const current = testimonials[activeIndex] || testimonials[0]

  const nextStory = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevStory = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={sectionRef} className="py-24 bg-slate-800/20 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Client Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-400 max-w-xl mx-auto">
            Real experiences from investors who trusted us with their long-term financial future
          </p>
        </motion.div>

        {/* Editorial Client Spotlight Stage (Non-Card Pattern) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="editorial-quote overflow-hidden shadow-2xl mb-12"
        >
          <Quote className="w-16 h-16 text-emerald-500/20 absolute top-6 right-8 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="relative z-10"
            >
              {/* Header: Stars + Verification badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-emerald-400 text-emerald-400"
                    />
                  ))}
                </div>
                <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3.5 py-1 text-xs font-semibold text-emerald-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>AMFI Verified Investor Story</span>
                </div>
              </div>

              {/* Editorial Quote Body */}
              <p className="text-xl sm:text-2xl md:text-3xl text-slate-100 font-medium leading-relaxed mb-10 tracking-tight">
                &ldquo;{current.content}&rdquo;
              </p>

              {/* Investor Identity & Designation */}
              <div className="flex items-center space-x-4 pt-6 border-t border-slate-700/60">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-500/50 flex-shrink-0 shadow-lg">
                  <img
                    src={
                      current.image || "/placeholder.svg?height=56&width=56"
                    }
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg md:text-xl">
                    {current.name}
                  </h4>
                  <p className="text-emerald-400 font-medium text-sm mt-0.5">
                    {current.designation}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Interactive Pill Carousel Selector (Non-Card Pattern) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            {testimonials.map((t, idx) => {
              const isSelected = idx === activeIndex
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105"
                      : "bg-slate-800/80 text-slate-400 hover:bg-slate-700 hover:text-white"
                  }`}
                >
                  {t.name}
                </button>
              )
            })}
          </div>

          {/* Prev/Next arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevStory}
              className="w-11 h-11 rounded-full bg-slate-800 hover:bg-emerald-600 border border-slate-700 hover:border-emerald-600 transition-all duration-200 flex items-center justify-center text-slate-400 hover:text-white cursor-pointer"
              aria-label="Previous story"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-xs text-slate-500 font-mono">
              0{activeIndex + 1} / 0{testimonials.length}
            </span>
            <button
              onClick={nextStory}
              className="w-11 h-11 rounded-full bg-slate-800 hover:bg-emerald-600 border border-slate-700 hover:border-emerald-600 transition-all duration-200 flex items-center justify-center text-slate-400 hover:text-white cursor-pointer"
              aria-label="Next story"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
