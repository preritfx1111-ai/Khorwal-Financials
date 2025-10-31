"use client"

import { testimonials } from "@/constants/data"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-800/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-slate-400">Real experiences from satisfied investors</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-dark p-8 hover:border-emerald-600/50 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-emerald-400 mb-6 opacity-50" />

              <p className="text-slate-300 mb-6 leading-relaxed text-base">"{testimonial.content}"</p>

              <div className="flex items-center space-x-4 pt-4 border-t border-slate-700">
                <img
                  src={testimonial.image || "/placeholder.svg?height=56&width=56&query=professional-testimonial"}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-emerald-600/30"
                />
                <div>
                  <p className="text-white font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.designation}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
