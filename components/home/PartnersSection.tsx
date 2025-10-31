"use client"

import { motion } from "framer-motion"
import { partners } from "@/constants/data"

export default function PartnersSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Partners</h2>
          <p className="text-xl text-slate-400">Trusted by India's leading AMCs</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="card-dark p-6 flex items-center justify-center hover:border-emerald-600/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center mb-2 group-hover:shadow-lg group-hover:shadow-emerald-600/50 transition-shadow">
                  <span className="text-white font-bold text-xs text-center px-1">{partner.initials}</span>
                </div>
                <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors line-clamp-2">
                  {partner.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
