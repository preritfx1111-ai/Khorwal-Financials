"use client"

import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { statistics } from "@/constants/data"
import * as Icons from "lucide-react"

function AnimatedNumber({
  target,
  prefix = "",
  suffix = "",
  duration = 2,
}: { target: number; prefix?: string; suffix?: string; duration?: number }) {
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
      {prefix}
      {count.toLocaleString("en-IN", { maximumFractionDigits: 1 })}
      {suffix}
    </span>
  )
}

export default function StatsCounter() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600/10 via-blue-600/10 to-emerald-600/10">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {statistics.map((stat, index) => {
            const IconComponent = Icons[stat.icon as keyof typeof Icons] || Icons.TrendingUp

            return (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600/20 rounded-full mb-4">
                  <IconComponent className="w-8 h-8 text-emerald-400" />
                </div>

                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedNumber target={stat.number} prefix={stat.prefix} suffix={stat.suffix} />
                </div>

                <p className="text-slate-400 font-medium">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
