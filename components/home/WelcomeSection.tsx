"use client"

import { companyData } from "@/constants/data"
import { motion, useInView } from "framer-motion"
import { CheckCircle, ArrowRight } from "lucide-react"
import { useRef } from "react"

export default function WelcomeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const points = [
    "AMFI Registered Mutual Fund Distributor",
    "7+ Years of Proven Experience",
    "Personalized Investment Strategies",
    "Goal-Based Planning Approach",
  ]

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative group">
              {/* Decorative border offset */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-emerald-600/20 rounded-2xl" />
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl blur-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-500" />
              <img
                src={companyData.owner.image || "/placeholder.svg"}
                alt="Suman Khorwal — Founder, Khorwal Financials"
                className="rounded-2xl border border-slate-700/60 w-full relative z-10 group-hover:border-emerald-600/40 transition-colors duration-300"
              />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-emerald-900/50 z-20"
              >
                ARN-154187
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          >
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Welcome to Khorwal Financials
            </h2>

            <p className="text-base text-slate-300 mb-5 leading-relaxed">
              At Khorwal Financials, we believe that wealth creation is not just about
              making money — it's about building a secure financial future for you
              and your loved ones. Founded by <span className="text-emerald-400 font-semibold">Suman Khorwal</span>, our firm
              has grown into a trusted partner for 150+ happy families across India.
            </p>

            <p className="text-base text-slate-300 mb-8 leading-relaxed">
              Our mission is simple: to democratize access to professional financial advice
              and make mutual fund investments accessible to every Indian — with complete
              transparency and zero hidden agendas.
            </p>

            <div className="space-y-3 mb-8">
              {points.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-3 group"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-slate-300 font-medium text-sm">{point}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/about"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="btn-primary inline-flex items-center space-x-2 group"
            >
              <span>Know More About Us</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
