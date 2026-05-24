"use client"

import { ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden border-y border-slate-700/40"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/50 via-slate-900 to-blue-950/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.12)_0%,_transparent_65%)]" />

      {/* Floating orbs */}
      <motion.div
        className="absolute -top-16 -left-16 w-48 h-48 bg-emerald-600/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-16 -right-16 w-64 h-64 bg-blue-600/8 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      <div className="container relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-4"
        >
          Get Started Today
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight max-w-3xl mx-auto"
        >
          Ready to Start Your Investment Journey?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
        >
          Schedule a free consultation with Khorwal Financials and take the first step towards financial freedom.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="http://p.njw.bz/84811"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group flex items-center justify-center space-x-2 text-base px-8 py-3.5"
          >
            <span>Get Started</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="https://wa.me/919911186409"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center justify-center space-x-2 text-base px-8 py-3.5"
          >
            <span>Contact Us on WhatsApp</span>
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
