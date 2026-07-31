"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { services } from "@/constants/data"
import * as Icons from "lucide-react"
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck, Zap } from "lucide-react"
import Link from "next/link"

const serviceSlugMap: Record<number, string> = {
  1: "/services/mutual-funds",
  2: "/services/sip-planning",
  3: "/services/lumpsum-investment",
  4: "/services/swp-systematic-withdrawal",
  5: "/services/insurance-planning",
  6: "/services/portfolio-review",
}

const serviceDomainBadgeMap: Record<number, string> = {
  1: "AMFI Registered • Direct Plans",
  2: "Wealth Compounding • From ₹500",
  3: "Capital Deployment • STP Strategy",
  4: "Retirement Cashflow • Tax-Efficient",
  5: "Risk Shield • Zero-Commission",
  6: "Quarterly Audit • Overlap Check",
}

const serviceHighlightsMap: Record<number, string[]> = {
  1: [
    "Personalized fund matching",
    "Zero hidden distributor fees",
    "Active portfolio monitoring",
    "AMFI-registered advisory",
  ],
  2: [
    "Start from just ₹500/month",
    "Automated rupee cost averaging",
    "Goal-aligned step-up SIPs",
    "Flexible pause & modify",
  ],
  3: [
    "Market valuation timing",
    "Systematic Transfer Plan (STP) options",
    "High-growth equity deployment",
    "Dedicated risk assessment",
  ],
  4: [
    "Predictable monthly cash flow",
    "Tax-efficient capital appreciation",
    "Retirement income security",
    "Inflation-protected withdrawal",
  ],
  5: [
    "Term life protection analysis",
    "Comprehensive health coverage",
    "Zero commission-driven policies",
    "Claim settlement assistance",
  ],
  6: [
    "Free existing portfolio audit",
    "Weed out underperforming funds",
    "Rebalance asset allocation",
    "Consolidated portfolio report",
  ],
}

export default function ServicesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="services"
      className="py-24 bg-slate-800/20 relative overflow-hidden"
      ref={ref}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl" />
        <div className="absolute left-1/4 bottom-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs font-semibold text-emerald-300 uppercase tracking-widest">
              Editorial Wealth Ledger
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Advisory Services
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive spectrum of wealth management and mutual fund advisory domains — structured for transparency, performance, and tax efficiency.
          </p>
        </motion.div>

        {/* Magazine-Style Editorial Ledger (All 6 Services Visible Simultaneously) */}
        <div className="border-y border-slate-800/80 divide-y divide-slate-800/80 bg-slate-900/30 rounded-2xl overflow-hidden shadow-2xl">
          {services.map((service, index) => {
            const IconComponent =
              (Icons[service.icon as keyof typeof Icons] as any) || Icons.Zap
            const indexStr = `0${index + 1}`
            const href = serviceSlugMap[service.id] ?? "#"
            const domainBadge =
              serviceDomainBadgeMap[service.id] || "AMFI Registered • Wealth Strategy"
            const highlights =
              serviceHighlightsMap[service.id] || [
                "Customized financial strategy",
                "Goal-based investment tracking",
                "Expert advisor consultation",
                "Regular performance review",
              ]
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="p-7 sm:p-10 lg:p-14 transition-all duration-500 hover:bg-slate-900/60 group relative overflow-hidden"
              >
                {/* Luminous Edge Accent Line */}
                <div
                  className={`absolute top-0 bottom-0 w-1.5 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isEven ? "left-0" : "right-0"
                  }`}
                />

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Column 1: Number, Title & Domain Badge */}
                  <div
                    className={`lg:col-span-4 ${
                      isEven ? "lg:order-1 order-1" : "lg:order-2 order-1 lg:text-right flex flex-col lg:items-end"
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="font-mono text-4xl sm:text-5xl font-black text-slate-700 group-hover:text-emerald-500/50 transition-colors tracking-tighter">
                        {indexStr}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-emerald-600/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600/25 group-hover:scale-105 transition-all">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <span className="inline-block text-xs font-semibold text-emerald-400/90 uppercase tracking-widest mb-2">
                      {domainBadge}
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Column 2: Editorial Narrative, Highlights & CTA */}
                  <div
                    className={`lg:col-span-8 ${
                      isEven ? "lg:order-2 order-2" : "lg:order-1 order-2"
                    }`}
                  >
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>

                    {/* Highlights 2-Column Grid */}
                    <div className="grid sm:grid-cols-2 gap-3.5 pt-5 border-t border-slate-800/80 mb-7">
                      {highlights.map((point) => (
                        <div
                          key={point}
                          className="flex items-center space-x-2.5"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span className="text-sm font-medium text-slate-300 group-hover:text-slate-200 transition-colors">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-800/60">
                      <div className="flex items-center space-x-2 text-xs text-slate-400">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>
                          Fiduciary guidance • Zero distributor commission
                        </span>
                      </div>
                      <Link
                        href={href}
                        className="btn-primary inline-flex items-center justify-center space-x-2 text-sm px-6 py-2.5 group/btn"
                      >
                        <span>Explore Strategy</span>
                        <ArrowRight
                          size={16}
                          className="group-hover/btn:translate-x-1.5 transition-transform duration-200"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
