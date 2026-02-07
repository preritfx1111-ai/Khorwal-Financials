"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative min-h-screen pt-24 pb-12 flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-transparent to-blue-600/10 pointer-events-none" />

      <div className="container relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center space-x-2 bg-emerald-600/20 border border-emerald-600/50 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-sm font-medium">Trusted by 150+ Happy Investors</span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance"
          >
            Grow Your Wealth with Expert Financial Guidance
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-slate-300 mb-8 leading-relaxed text-balance">
            Professional Mutual Fund Advisory • SIP Planning • Wealth Management
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-8 backdrop-blur-sm"
          >
            <p className="text-slate-300 text-center md:text-left">
              <span className="text-emerald-400 font-semibold">Goal-Based Planning</span>
              <span className="mx-2 text-slate-600">•</span>
              <span className="text-emerald-400 font-semibold">10+ Years Experience</span>
              <span className="mx-2 text-slate-600">•</span>
              <span className="text-emerald-400 font-semibold">AMFI Registered</span>
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <a
              href="http://p.njw.bz/84811"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group flex items-center justify-center space-x-2"
            >
              <span>Start SIP Investment</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/919911186409"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute right-0 top-20 w-40 h-40 bg-emerald-600/20 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </div>
    </section>
  )
}
