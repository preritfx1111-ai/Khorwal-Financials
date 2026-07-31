"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export interface FAQItem {
  q: string
  a: string
}

interface ServiceFAQAccordionProps {
  title?: string
  faqs: FAQItem[]
}

export default function ServiceFAQAccordion({
  title = "Frequently Asked Questions",
  faqs,
}: ServiceFAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mb-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">{title}</h2>

      <div className="border-t border-slate-800/80 divide-y divide-slate-800/80">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div key={index} className="py-5">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <h3 className="text-white font-bold text-base md:text-lg group-hover:text-emerald-400 transition-colors flex items-center gap-3">
                  <span className="text-emerald-400 font-mono text-sm">0{index + 1}</span>
                  <span>{faq.q}</span>
                </h3>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "bg-emerald-600 text-white rotate-180"
                      : "bg-slate-800/80 text-slate-400 group-hover:bg-slate-700 group-hover:text-white"
                  }`}
                >
                  <ChevronDown size={18} />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed pt-3 pb-2 pl-8">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
