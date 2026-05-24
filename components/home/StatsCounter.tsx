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
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">By The Numbers</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Our Track Record</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
          {statistics.map((stat, index) => {
            const IconComponent = Icons[stat.icon as keyof typeof Icons] as any || Icons.TrendingUp

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="text-center group"
              >
                <div className="card-dark p-6 h-full hover:border-emerald-600/40 transition-all duration-300 relative overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/5 transition-all duration-500 rounded-lg" />

                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-600/20 group-hover:bg-emerald-600/30 rounded-full mb-4 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-emerald-400" />
                  </div>

                  <div className="text-3xl lg:text-4xl font-black text-white mb-1 tracking-tight">
                    <AnimatedNumber target={stat.number} suffix={stat.suffix} />
                  </div>

                  <p className="text-slate-400 text-xs font-medium leading-tight">{stat.label}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
