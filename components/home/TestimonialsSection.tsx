"use client"

import { testimonials } from "@/constants/data"
import { Quote, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-20 bg-slate-800/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-slate-400">Real experiences from satisfied investors</p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Left gradient overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-800/20 to-transparent z-10 pointer-events-none"></div>

          {/* Right gradient overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-800/20 to-transparent z-10 pointer-events-none"></div>

          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-96 card-dark p-8 hover:border-emerald-600/50 transition-all duration-300"
              >
                {/* Rating stars and quote icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-emerald-400 text-emerald-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-emerald-400/40" />
                </div>

                {/* Testimonial content */}
                <p className="text-slate-300 mb-8 leading-relaxed text-base">"{testimonial.content}"</p>

                {/* Client info */}
                <div className="flex items-center space-x-4 pt-6 border-t border-slate-700">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-600/30 flex-shrink-0"
                  >
                    <img
                      src={testimonial.image || "/placeholder.svg?height=56&width=56&query=professional-testimonial"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">{testimonial.designation}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-8">
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex items-center space-x-2 text-slate-400"
          >
            <span className="text-sm">Scroll to see more</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
