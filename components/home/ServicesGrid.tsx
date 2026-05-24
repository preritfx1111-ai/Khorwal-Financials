"use client"

import { motion, useInView } from "framer-motion"
import { services } from "@/constants/data"
import * as Icons from "lucide-react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

const serviceSlugMap: Record<number, string> = {
  1: "/services/mutual-funds",
  2: "/services/sip-planning",
  3: "/services/lumpsum-investment",
  4: "/services/swp-systematic-withdrawal",
  5: "/services/insurance-planning",
  6: "/services/portfolio-review",
}

export default function ServicesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="services" className="py-24 bg-slate-800/20 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/3 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Comprehensive financial solutions tailored to your unique needs and goals
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons] as any || Icons.Zap
            const href = serviceSlugMap[service.id] ?? "#"

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <Link href={href} className="block h-full">
                  <div className="card-dark p-7 h-full hover:border-emerald-600/50 transition-all duration-300 cursor-pointer relative overflow-hidden">
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 to-emerald-600/0 group-hover:from-emerald-600/5 group-hover:to-transparent transition-all duration-500 rounded-lg pointer-events-none" />

                    <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-600/30 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-emerald-400" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-slate-400 mb-6 leading-relaxed text-sm line-clamp-3">{service.description}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/70">
                      <span className="text-emerald-400 font-semibold text-sm flex items-center space-x-2">
                        <span>Learn More</span>
                        <ArrowRight size={15} className="group-hover:translate-x-2 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
