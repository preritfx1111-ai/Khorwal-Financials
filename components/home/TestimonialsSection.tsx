"use client"

import { testimonials } from "@/constants/data"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = 384 + 24 // w-96 + gap-6
    el.scrollBy({ left: dir === "right" ? cardWidth : -cardWidth, behavior: "smooth" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  return (
    <section ref={sectionRef} className="py-24 bg-slate-800/20 overflow-hidden">
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">Client Stories</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-slate-400 max-w-xl mx-auto">Real experiences from investors who trusted us with their financial future</p>
        </motion.div>

        {/* Scroll container */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-slate-800/20 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-slate-800/20 to-transparent z-10 pointer-events-none" />

          <motion.div
            ref={scrollRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex gap-6 overflow-x-auto pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" as any }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="flex-shrink-0 w-80 sm:w-96 card-dark p-7 hover:border-emerald-600/40 transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle gradient overlay */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

                {/* Stars and quote */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} className="fill-emerald-400 text-emerald-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-emerald-400/30" />
                </div>

                {/* Content */}
                <p className="text-slate-300 mb-7 leading-relaxed text-sm">&ldquo;{testimonial.content}&rdquo;</p>

                {/* Client info */}
                <div className="flex items-center space-x-3 pt-5 border-t border-slate-700/70">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-600/30 flex-shrink-0">
                    <img
                      src={testimonial.image || "/placeholder.svg?height=48&width=48"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{testimonial.designation}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation arrows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-emerald-600 border border-slate-700 hover:border-emerald-600 transition-all duration-200 flex items-center justify-center text-slate-400 hover:text-white"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <p className="text-slate-500 text-sm">Scroll or use arrows</p>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-emerald-600 border border-slate-700 hover:border-emerald-600 transition-all duration-200 flex items-center justify-center text-slate-400 hover:text-white"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </motion.div>
      </div>

      {/* Fix scrollbar hide via inline style */}
      <style>{`
        [data-testimonials-scroll]::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  )
}
