"use client"

import { motion } from "framer-motion"
import { services } from "@/constants/data"
import * as Icons from "lucide-react"
import { ArrowRight } from "lucide-react"

export default function ServicesGrid() {
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
    <section className="py-20 bg-slate-800/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Comprehensive financial solutions tailored to your unique needs and goals
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons] || Icons.Zap

            return (
              <motion.div key={service.id} variants={itemVariants} whileHover={{ y: -5 }} className="group">
                <div className="card-dark p-8 h-full hover:border-emerald-600/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600/30 transition-colors">
                    <IconComponent className="w-6 h-6 text-emerald-400" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>

                  <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <a
                      href="#"
                      className="text-emerald-400 font-semibold text-sm hover:text-emerald-300 transition-colors flex items-center space-x-2 group"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
