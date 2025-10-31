"use client"

import { motion } from "framer-motion"
import { mutualFunds } from "@/constants/data"

export default function MarqueeSection() {
  const duplicatedFunds = [...mutualFunds, ...mutualFunds]

  return (
    <section className="py-12 bg-slate-800/30 border-y border-slate-700/50 overflow-hidden">
      <div className="container mb-6">
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Featured Funds</h3>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex space-x-4"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {duplicatedFunds.map((fund, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4 py-2 border border-emerald-600/50 bg-emerald-600/10 rounded-full text-slate-300 text-sm font-medium whitespace-nowrap hover:bg-emerald-600/20 transition-colors"
            >
              {fund}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
