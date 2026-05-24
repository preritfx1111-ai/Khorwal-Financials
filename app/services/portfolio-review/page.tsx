"use client"

import { motion } from "framer-motion"
import {
  RefreshCw,
  CheckCircle,
  ArrowRight,
  BarChart2,
  TrendingUp,
  AlertTriangle,
  Clock,
  Target,
  Sliders,
} from "lucide-react"
import Link from "next/link"
import PageHeader from "@/components/shared/PageHeader"

const highlights = [
  { label: "Review Frequency", value: "Quarterly + Ad hoc" },
  { label: "Ideal For", value: "All investors with existing MF portfolio" },
  { label: "Typical Improvement", value: "0.5–2% better annual returns" },
  { label: "Tax-Smart", value: "Harvest losses, optimise gains" },
]

const reviewProcess = [
  {
    step: "01",
    title: "Portfolio X-Ray",
    description:
      "We analyse every fund in your portfolio — performance vs. benchmark, expense ratio, fund manager track record, category ranking, and overlap with other funds you hold. Most investors are surprised to find they've been paying for duplication.",
  },
  {
    step: "02",
    title: "Goal Alignment Check",
    description:
      "Has your equity allocation drifted from 60% to 80% after a bull run? Are your 'short-term' debt funds still there from 5 years ago? We realign your portfolio to your current goals, not the goals you had when you first invested.",
  },
  {
    step: "03",
    title: "Rebalancing Recommendation",
    description:
      "We recommend specific switches — which funds to exit, which to reduce, and where to redeploy — with full tax impact analysis. No generic advice; every recommendation is specific to your portfolio and tax situation.",
  },
  {
    step: "04",
    title: "Implementation & Tracking",
    description:
      "We guide execution of the rebalancing plan, confirm all changes, and set up tracking so you always know where your portfolio stands vs. your goals. No more wondering if your money is working.",
  },
]

const reviewTriggers = [
  "Annual salary increment — time to increase SIP amounts",
  "Market has moved 20%+ in either direction — check asset allocation",
  "A fund has underperformed its benchmark for 3+ consecutive quarters",
  "Life event: marriage, child, job change, inheritance, or approaching retirement",
  "Tax year-end — harvest losses and plan gain booking before March 31",
  "Your financial goals have changed in scope, timeline, or priority",
]

const portfolioProblems = [
  {
    icon: BarChart2,
    problem: "Overlap & Redundancy",
    description:
      "Holding 8 large-cap funds when 2 would suffice. The 6 extra funds add zero diversification but cost you in tracking complexity and potentially higher expenses.",
  },
  {
    icon: TrendingUp,
    problem: "Performance Drift",
    description:
      "A fund that was in the top quartile 3 years ago may now be in the bottom. Fund manager changes, style drift, and AUM bloat happen silently — until they don't.",
  },
  {
    icon: Sliders,
    problem: "Allocation Drift",
    description:
      "After a strong equity rally, your 60:40 portfolio might be sitting at 75:25 — taking more risk than you intended. Rebalancing locks in gains and restores your intended risk profile.",
  },
]

export default function PortfolioReviewPage() {
  return (
    <main>
      <PageHeader
        title="Portfolio Review & Rebalancing"
        subtitle="Your portfolio grows fastest when it's aligned, optimised, and actively managed"
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
            <RefreshCw size={14} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold tracking-wide uppercase">
              Service 6 of 6
            </span>
          </motion.div>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              A portfolio review isn't a luxury for the wealthy — it's a necessity for every serious investor. Markets
              change, life changes, and funds change. A portfolio that was perfectly structured 3 years ago can be
              significantly misaligned today — without a single wrong decision on your part.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              Research consistently shows that investors who actively review and rebalance their portfolios outperform
              those who don't — not by picking better funds, but by{" "}
              <em className="text-emerald-400">maintaining discipline and alignment over time</em>. The "set and
              forget" approach is a myth that costs Indian investors crores every year.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              At Grow Money Investment Services, we provide structured quarterly reviews that go beyond a performance
              snapshot. We assess your portfolio's health across 15+ parameters and deliver actionable recommendations
              — not a generic report.
            </p>
          </motion.div>

          {/* Highlights */}
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

          {/* Common portfolio problems */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-14"
          >
            <h2 className="text-xl font-bold text-white mb-6">What Happens When Portfolios Aren't Reviewed</h2>
            <div className="space-y-4">
              {portfolioProblems.map((p, i) => {
                const Icon = p.icon
                return (
                  <motion.div
                    key={p.problem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                    className="card-dark p-6 border-l-4 border-red-500/40 hover:border-l-red-500/70 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-red-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-2">{p.problem}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Our process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-14"
          >
            <h2 className="text-xl font-bold text-white mb-6">Our 4-Step Review Process</h2>
            <div className="space-y-4">
              {reviewProcess.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="card-dark p-6 hover:border-emerald-600/40 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl font-black text-emerald-600/30 leading-none flex-shrink-0 w-10">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-2">{step.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* When to review */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mb-14"
          >
            <h2 className="text-xl font-bold text-white mb-6">When to Trigger an Immediate Review</h2>
            <div className="space-y-3">
              {reviewTriggers.map((trigger, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.55 + i * 0.07 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0 mt-2" />
                  <p className="text-slate-300 text-sm">{trigger}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Advisor note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="border-l-4 border-emerald-500 bg-emerald-600/5 rounded-r-lg p-6 mb-12"
          >
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3 font-semibold">The Uncomfortable Truth</p>
            <p className="text-slate-300 text-base leading-relaxed">
              Most investors review their portfolio only when it hurts — after it has underperformed. By then, the
              damage is done. The best time to review is when everything seems fine. That's when complacency creates
              risk, and we catch it before it costs you.
            </p>
          </motion.div>

          {/* What you get */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="card-dark p-6 mb-12"
          >
            <h3 className="text-lg font-bold text-white mb-5">What Our Review Service Delivers</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Complete portfolio diagnostic across all 15+ analysis parameters",
                "Fund ranking vs. category peers and benchmark indices",
                "Overlap analysis — remove redundancy, improve diversification",
                "Tax-optimised rebalancing plan (LTCG, STCG, loss harvesting)",
                "Written review report with specific fund-level action items",
                "Implementation support — execute switches and transfers",
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
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/919911186409"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group flex items-center justify-center space-x-2 flex-1"
            >
              <span>Review My Portfolio Now</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="http://p.njw.bz/84811"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center space-x-2 flex-1"
            >
              <span>Get Started Online</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
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
