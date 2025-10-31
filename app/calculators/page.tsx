"use client"

import PageHeader from "@/components/shared/PageHeader"
import { calculators } from "@/constants/data"
import * as Icons from "lucide-react"
import { motion } from "framer-motion"
import { Bell } from "lucide-react"

export default function Calculators() {
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
    <main>
      <PageHeader title="Financial Calculators" subtitle="Powerful tools to plan your investments" />

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We're building comprehensive financial calculators to help you make informed investment decisions. These
              tools will help you visualize your financial goals and investment strategies.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {calculators.map((calc) => {
              const IconComponent = Icons[calc.icon as keyof typeof Icons] || Icons.Zap

              return (
                <motion.div key={calc.id} variants={itemVariants} className="group">
                  <div className="card-dark p-8 h-full opacity-60 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-transparent opacity-50" />

                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-emerald-400" />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">{calc.title}</h3>

                      <p className="text-slate-400 mb-6 leading-relaxed">{calc.description}</p>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                        <span className="inline-flex items-center space-x-1 px-3 py-1 bg-slate-700/50 rounded-full text-xs font-semibold text-slate-300">
                          <span>Coming Soon</span>
                        </span>
                        <button className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center space-x-1">
                          <Bell size={16} />
                          <span className="text-xs font-semibold">Notify</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-800/20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need Help with Calculations?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Our expert advisors can help you with personalized calculations and investment planning tailored to your
            specific goals and financial situation.
          </p>
          <button className="btn-primary">Contact Our Advisors</button>
        </div>
      </section>
    </main>
  )
}
