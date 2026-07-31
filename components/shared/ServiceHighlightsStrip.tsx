"use client"

import { motion } from "framer-motion"

export interface HighlightItem {
  label: string
  value: string
}

interface ServiceHighlightsStripProps {
  highlights: HighlightItem[]
}

export default function ServiceHighlightsStrip({ highlights }: ServiceHighlightsStripProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-slate-900/60 border border-slate-700/60 rounded-2xl backdrop-blur-md overflow-hidden my-12 shadow-xl"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-700/60">
        {highlights.map((h) => (
          <div
            key={h.label}
            className="p-6 md:p-7 flex flex-col justify-center group hover:bg-emerald-500/[0.03] transition-colors duration-300"
          >
            <p className="text-xs text-emerald-400 font-semibold uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
              {h.label}
            </p>
            <p className="text-white font-bold text-lg md:text-xl tracking-tight">{h.value}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
