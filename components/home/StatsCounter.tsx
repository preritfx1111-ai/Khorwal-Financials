"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { statistics } from "@/constants/data"
import * as Icons from "lucide-react"

function AnimatedNumber({
  target,
  suffix = "",
  duration = 2,
}: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const increment = target / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start * 10) / 10)
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isInView, target, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString("en-IN", { maximumFractionDigits: 1 })}
      {suffix}
    </span>
  )
}

export default function StatsCounter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/40 via-slate-900/80 to-blue-950/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.08)_0%,_transparent_70%)]" />

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
            By The Numbers
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Track Record
          </h2>
        </motion.div>

        {/* Integrated Horizon Metric Bar (Non-Card Pattern) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="bg-slate-900/70 border border-slate-700/70 rounded-3xl backdrop-blur-xl overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-700/60">
            {statistics.map((stat, index) => {
              const IconComponent =
                (Icons[stat.icon as keyof typeof Icons] as any) ||
                Icons.TrendingUp

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="p-6 md:p-8 flex flex-col items-center justify-center text-center group hover:bg-emerald-500/[0.04] transition-colors duration-300 relative"
                >
                  {/* Subtle top indicator on hover */}
                  <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="inline-flex items-center justify-center w-11 h-11 bg-emerald-600/15 group-hover:bg-emerald-600/25 rounded-2xl mb-4 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-5 h-5 text-emerald-400" />
                  </div>

                  <div className="text-3xl lg:text-4xl font-black text-white mb-1 tracking-tight">
                    <AnimatedNumber
                      target={stat.number}
                      suffix={stat.suffix}
                    />
                  </div>

                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider leading-tight">
                    {stat.label}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
