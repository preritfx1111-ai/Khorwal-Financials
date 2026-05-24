"use client"

import { motion } from "framer-motion"
import {
  Wallet,
  CheckCircle,
  ArrowRight,
  TrendingDown,
  ShieldCheck,
  Calendar,
  PiggyBank,
  BarChart2,
} from "lucide-react"
import Link from "next/link"
import PageHeader from "@/components/shared/PageHeader"

const highlights = [
  { label: "Ideal For", value: "Retirees & near-retirees" },
  { label: "Min. Corpus Needed", value: "₹10L+" },
  { label: "Withdrawal Frequency", value: "Monthly / Quarterly" },
  { label: "Tax Advantage", value: "Lower vs. FD interest" },
]

const swpBenefits = [
  {
    icon: ShieldCheck,
    title: "Portfolio Survives, Income Continues",
    description:
      "Unlike an annuity that ends with your death, an SWP-driven portfolio remains your asset. Unused funds continue to grow, beating inflation, and can be inherited by your family.",
  },
  {
    icon: TrendingDown,
    title: "Tax-Efficient Monthly Income",
    description:
      "FD interest is taxed at your slab rate (up to 30%). SWP withdrawals from equity funds held beyond 1 year attract only 10% LTCG tax on gains above ₹1L per year — a massive tax saving that compounds over retirement.",
  },
  {
    icon: BarChart2,
    title: "Inflation-Protected Withdrawals",
    description:
      "We model your withdrawal amount against expected inflation, ensuring your ₹50,000/month today still covers your lifestyle at 70, not just at 60.",
  },
  {
    icon: Calendar,
    title: "Fully Flexible & Reversible",
    description:
      "Need more money one month? Pause, increase, or decrease your SWP at any time. No lock-ins, no penalties, no bank manager approvals.",
  },
]

const retirementScenario = [
  { label: "Retirement Corpus", value: "₹1 Crore" },
  { label: "Monthly Withdrawal", value: "₹40,000" },
  { label: "Expected Fund Return", value: "10–11% p.a." },
  { label: "Corpus Survives For", value: "25+ years" },
]

const swpVsFd = [
  { feature: "Monthly Income", swp: "₹40,000 (from ₹1Cr corpus)", fd: "₹33,000 (at 4% p.a.)" },
  {
    feature: "Tax on Income",
    swp: "10% LTCG on gains only",
    fd: "As per income tax slab (up to 30%)",
  },
  { feature: "Capital Growth", swp: "Corpus continues to grow", fd: "Principal fixed; no growth" },
  { feature: "Flexibility", swp: "Fully flexible, pause anytime", fd: "Penalty on premature withdrawal" },
  { feature: "Inflation Protection", swp: "Yes — equity component grows", fd: "No — fixed interest rate" },
]

export default function SWPPage() {
  return (
    <main>
      <PageHeader
        title="SWP — Systematic Withdrawal Plan"
        subtitle="Generate the retirement income you deserve — without outliving your savings"
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
            <Wallet size={14} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold tracking-wide uppercase">
              Service 4 of 6
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
              The greatest fear of retirement isn't death — it's running out of money while still living. A Systematic
              Withdrawal Plan (SWP) is the intelligent solution to this problem: it converts your mutual fund corpus
              into a reliable, tax-efficient monthly income stream while allowing the remaining corpus to keep growing.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              Most retirees in India default to Fixed Deposits — and slowly watch inflation erode their purchasing
              power over 20+ years. An SWP, structured correctly, keeps your corpus ahead of inflation{" "}
              <em className="text-emerald-400">and</em> pays you every month.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              At Grow Money Investment Services, we design SWP portfolios built for longevity — meaning your money
              should last as long as you do, and ideally leave something meaningful for your family.
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

          {/* Scenario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="card-dark p-6 mb-14 border border-emerald-600/20"
          >
            <h2 className="text-lg font-bold text-white mb-5">A Real Retirement Scenario</h2>
            <div className="grid grid-cols-2 gap-4">
              {retirementScenario.map((r) => (
                <div key={r.label}>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">{r.label}</p>
                  <p className="text-emerald-400 font-bold text-lg">{r.value}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-400 text-xs mt-4 italic">
              * Based on balanced equity-debt portfolio with 10.5% average annual return. Past returns not guaranteed.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-14"
          >
            <h2 className="text-xl font-bold text-white mb-6">Why SWP Beats Every Alternative</h2>
            <div className="space-y-4">
              {swpBenefits.map((b, i) => {
                const Icon = b.icon
                return (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                    className="card-dark p-6 hover:border-emerald-600/40 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-2">{b.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{b.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* SWP vs FD table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-14 overflow-x-auto"
          >
            <h2 className="text-xl font-bold text-white mb-6">SWP vs Fixed Deposit — The Numbers Don't Lie</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 pr-4 text-slate-500 uppercase tracking-wider text-xs font-semibold">Feature</th>
                  <th className="text-left py-3 pr-4 text-emerald-400 uppercase tracking-wider text-xs font-semibold">SWP (Mutual Fund)</th>
                  <th className="text-left py-3 text-slate-400 uppercase tracking-wider text-xs font-semibold">Fixed Deposit</th>
                </tr>
              </thead>
              <tbody>
                {swpVsFd.map((row, i) => (
                  <tr key={i} className="border-b border-slate-800/50">
                    <td className="py-4 pr-4 text-slate-400 font-medium">{row.feature}</td>
                    <td className="py-4 pr-4 text-emerald-300">{row.swp}</td>
                    <td className="py-4 text-slate-500">{row.fd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* What you get */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card-dark p-6 mb-12"
          >
            <h3 className="text-lg font-bold text-white mb-5">Our SWP Planning Service Includes</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Retirement income needs analysis (current & inflation-adjusted)",
                "Corpus adequacy assessment across 20–30 year scenarios",
                "Fund selection balancing growth (equity) & stability (debt)",
                "Monthly SWP setup with preferred bank account linkage",
                "Annual withdrawal rate review to prevent corpus depletion",
                "Estate planning guidance for remaining corpus",
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
              href="https://wa.me/919911186409"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group flex items-center justify-center space-x-2 flex-1"
            >
              <span>Plan My Retirement Income</span>
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
