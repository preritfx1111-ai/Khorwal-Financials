"use client"

import { motion } from "framer-motion"
import type React from "react"

export interface ServiceCategoryItem {
  icon: React.ComponentType<{ size?: number; className?: string }>
  name: string
  description: string
  badge: string
  badgeColor: string
}

interface ServiceCategoriesListProps {
  title?: string
  categories: ServiceCategoryItem[]
}

export default function ServiceCategoriesList({
  title = "What We Advise On",
  categories,
}: ServiceCategoriesListProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mb-14"
    >
      {title && (
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>{title}</span>
        </h2>
      )}

      <div className="border-y border-slate-800/80 divide-y divide-slate-800/80 bg-slate-900/30 rounded-xl overflow-hidden">
        {categories.map((cat, i) => {
          const Icon = cat.icon
          return (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
              className="p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-slate-800/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Left luminous accent bar on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start sm:items-center space-x-4">
                <div className="w-10 h-10 bg-emerald-600/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600/25 group-hover:scale-105 transition-all duration-300">
                  <Icon size={20} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base group-hover:text-emerald-300 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-slate-400 text-sm mt-0.5 leading-relaxed">{cat.description}</p>
                </div>
              </div>

              <span
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border self-start sm:self-center flex-shrink-0 ${cat.badgeColor}`}
              >
                {cat.badge}
              </span>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
