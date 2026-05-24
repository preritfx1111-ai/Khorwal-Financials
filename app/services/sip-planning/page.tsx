"use client"

import { motion } from "framer-motion"
import {
  BarChart3,
  CheckCircle,
  ArrowRight,
  Calendar,
  TrendingUp,
  Target,
  Clock,
  Repeat,
  PiggyBank,
} from "lucide-react"
import Link from "next/link"
import PageHeader from "@/components/shared/PageHeader"

const highlights = [
  { label: "Minimum SIP Amount", value: "₹500 / month" },
  { label: "Ideal Tenure", value: "5 – 30 years" },
  { label: "Risk Profile", value: "Customised to goal" },
  { label: "Returns (Historical)", value: "10–16% p.a. (equity)" },
]

const goalExamples = [
  {
    icon: Target,
    goal: "Child's Higher Education",
    amount: "₹25L in 15 years",
    sip: "₹4,500/month @ 12%",
    note: "Start today. Every year delayed costs ₹1,000+ more per month.",
  },
  {
    icon: PiggyBank,
    goal: "Retirement Corpus",
    amount: "₹2 Cr in 25 years",
    sip: "₹9,500/month @ 12%",
    note: "The same corpus requires ₹27,000/month if you start 10 years late.",
  },
  {
    icon: Clock,
    goal: "Dream Home Down-Payment",
    amount: "₹15L in 7 years",
    sip: "₹11,000/month @ 10%",
    note: "Consistent SIP beats bank savings plans 3:1 over 7 years.",
  },
]

const sipMythVsFact = [
  {
    myth: "I need a large lump sum to start investing.",
    fact: "You can start a SIP with just ₹500 a month. Time in the market matters more than the amount.",
  },
  {
    myth: "SIPs only work in bull markets.",
    fact: "SIPs actually buy more units when markets dip — a phenomenon called rupee cost averaging that benefits long-term investors.",
  },
  {
    myth: "I should wait for the market to correct before starting.",
    fact: "Timing the market consistently is impossible even for professionals. SIP removes that burden entirely.",
  },
]

export default function SIPPlanningPage() {
  return (
    <main>
      <PageHeader
        title="SIP Planning"
        subtitle="Build real, lasting wealth — one systematic investment at a time"
      />

      <section className="py-16">
        <div className="container max-w-4xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-emerald-600/20 border border-emerald-600/40 rounded-full px-4 py-1.5 mb-8"
          >
            <BarChart3 size={14} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold tracking-wide uppercase">
              Service 2 of 6
            </span>
          </motion.div>

          {/* Hero copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              A Systematic Investment Plan (SIP) is the single most powerful investing habit you can build. Instead of
              trying to time the market — a game that even the sharpest fund managers lose — SIPs let you invest a
              fixed amount every month, rain or shine.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              The compounding math is staggering: ₹10,000/month invested over 20 years at a 12% average return
              doesn't give you ₹24L — it gives you <span className="text-emerald-400 font-bold">₹99.9L</span>. That's
              the power of time, discipline, and the right fund selection working together.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              At Grow Money Investment Services, we don't just set up your SIP and disappear. We engineer your entire
              SIP portfolio — mapped to specific life goals, reviewed quarterly, and adjusted as your income and
              priorities evolve.
            </p>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 mb-14"
          >
            {highlights.map((h) => (
              <div key={h.label} className="card-dark p-5">
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">{h.label}</p>
                <p className="text-white font-semibold text-base">{h.value}</p>
              </div>
            ))}
          </motion.div>

          {/* Goal examples */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-14"
          >
            <h2 className="text-xl font-bold text-white mb-6">
              Real Goals, Real Numbers
            </h2>
            <div className="space-y-4">
              {goalExamples.map((ex, i) => {
                const Icon = ex.icon
                return (
                  <motion.div
                    key={ex.goal}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="card-dark p-6 hover:border-emerald-600/40 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-white font-bold">{ex.goal}</h3>
                          <span className="text-emerald-400 text-sm font-semibold">{ex.amount}</span>
                        </div>
                        <p className="text-slate-300 text-sm mb-2">
                          <span className="text-white font-semibold">Required SIP:</span> {ex.sip}
                        </p>
                        <p className="text-slate-500 text-xs italic">{ex.note}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Myths vs Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-14"
          >
            <h2 className="text-xl font-bold text-white mb-6">Myths That Are Costing You Money</h2>
            <div className="space-y-4">
              {sipMythVsFact.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 + i * 0.1 }}
                  className="card-dark p-6"
                >
                  <p className="text-xs uppercase tracking-widest text-red-400 mb-1 font-semibold">Myth</p>
                  <p className="text-slate-300 text-sm mb-4 line-through decoration-red-400/50">{item.myth}</p>
                  <p className="text-xs uppercase tracking-widest text-emerald-400 mb-1 font-semibold">Fact</p>
                  <p className="text-slate-200 text-sm">{item.fact}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why advisor matters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="border-l-4 border-emerald-500 bg-emerald-600/5 rounded-r-lg p-6 mb-12"
          >
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3 font-semibold">The Advisor Edge</p>
            <p className="text-slate-300 text-base leading-relaxed">
              Studies show investors who work with advisors earn 2–3% more per year on average — not because of fund
              selection, but because advisors prevent panic-selling during downturns. That 2–3% difference compounds
              into lakhs over a decade. That's the Grow Money difference.
            </p>
          </motion.div>

          {/* What you get */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card-dark p-6 mb-12"
          >
            <h3 className="text-lg font-bold text-white mb-5">Our SIP Planning Process</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Goal discovery session — we map your dreams to numbers",
                "Risk profiling via structured assessment",
                "Fund selection across categories (equity, hybrid, debt)",
                "SIP amount calculation using inflation-adjusted projections",
                "Automated SIP setup with tracking dashboard",
                "Annual SIP top-up reminders as your income grows",
              ].map((f) => (
                <div key={f} className="flex items-start space-x-3">
                  <CheckCircle size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="http://p.njw.bz/84811"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group flex items-center justify-center space-x-2 flex-1"
            >
              <span>Start My SIP Today</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/919911186409"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center space-x-2 flex-1"
            >
              <span>Calculate My SIP on WhatsApp</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-10 pt-8 border-t border-slate-800"
          >
            <Link
              href="/#services"
              className="inline-flex items-center space-x-2 text-slate-400 hover:text-emerald-400 transition-colors text-sm"
            >
              <ArrowRight size={14} className="rotate-180" />
              <span>Back to All Services</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
