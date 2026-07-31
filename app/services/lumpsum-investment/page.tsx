"use client"

import { motion } from "framer-motion"
import {
  DollarSign,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Clock,
  Zap,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"
import PageHeader from "@/components/shared/PageHeader"
import ServiceHighlightsStrip from "@/components/shared/ServiceHighlightsStrip"
import ServiceFAQAccordion from "@/components/shared/ServiceFAQAccordion"

const highlights = [
  { label: "Ideal For", value: "Bonus, inheritance, savings" },
  { label: "Min. Investment", value: "₹5,000 onwards" },
  { label: "Deployment Strategy", value: "Systematic / Lump sum" },
  { label: "Risk Level", value: "Customised per fund" },
]

const useCases = [
  {
    icon: Zap,
    title: "Annual Bonus Deployment",
    description:
      "Most salaried professionals receive a year-end bonus and let it sit in savings accounts earning 3.5%. We help you deploy it into a diversified equity or hybrid fund portfolio within days — optimised for your tax bracket and time horizon.",
  },
  {
    icon: TrendingUp,
    title: "Inheritance or Windfall",
    description:
      "A large one-time receipt demands careful, phased deployment to avoid concentration risk. We architect a Systematic Transfer Plan (STP) that moves funds from a liquid foundation into equity over 3–12 months, capturing market volatility as an advantage.",
  },
  {
    icon: ShieldCheck,
    title: "Surplus Savings Optimization",
    description:
      "If your savings account or FD balance is growing idle, we identify the right fund categories to redeploy that capital — balancing liquidity needs with growth ambitions. No capital tied up unnecessarily.",
  },
  {
    icon: Clock,
    title: "Pre-Retirement Consolidation",
    description:
      "Investors 5–10 years from retirement often have scattered investments across policies, FDs, and old MFs. We consolidate, restructure, and rebalance into a unified portfolio with a clear withdrawal roadmap.",
  },
]

const deploymentApproaches = [
  {
    approach: "Immediate Lump Sum",
    best: "When markets are in a clear dip or correction phase",
    risk: "Higher short-term timing risk",
  },
  {
    approach: "Systematic Transfer Plan (STP)",
    best: "When markets are at uncertain levels or near all-time highs",
    risk: "Reduces timing risk; maximizes rupee cost averaging",
  },
  {
    approach: "Phased Sector Allocation",
    best: "Large amounts (₹5L+) going into equity",
    risk: "Diversifies entry points across market cycles",
  },
]

export default function LumpsumInvestmentPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Should I invest my lumpsum amount all at once?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Whether to invest all at once or through a Systematic Transfer Plan (STP) depends on current market conditions and your risk appetite. In volatile markets, phased deployment via STP is usually safer."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum amount for a lumpsum investment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most mutual fund schemes allow lumpsum investments starting from ₹5,000. Some liquid or debt funds may even allow smaller amounts."
        }
      }
    ]
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        title="Lumpsum Investment"
        subtitle="Put your money to work — strategically, safely, and at full potential"
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
            <DollarSign size={14} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold tracking-wide uppercase">
              Service 3 of 6
            </span>
          </motion.div>

          {/* Intro copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              Receiving a large sum — whether it's a bonus, inheritance, sale proceeds, or accumulated savings — is one
              of the most consequential financial moments of your life. Make the wrong decision (or no decision) and
              years of hard-earned money can stagnate in a low-yield account or worse, evaporate in a rushed,
              uninformed investment.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              At Khorwal Financials, we specialize in lumpsum deployment strategies that are tailored to
              <em className="text-emerald-400"> your specific situation</em> — your tax position, your timeline, your
              risk capacity, and the macroeconomic environment at the time of investment.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              There's no one-size-fits-all here. What works for a 35-year-old corporate professional deploying ₹10L
              after a promotion is very different from what works for a 55-year-old business owner deploying ₹50L from
              an asset sale. We calibrate every strategy accordingly.
            </p>
          </motion.div>

          {/* Highlights strip (Non-Card Pattern) */}
          <ServiceHighlightsStrip highlights={highlights} />

          {/* Use cases (Non-Card Pattern) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-14"
          >
            <h2 className="text-xl font-bold text-white mb-6">Who This Is For</h2>
            <div className="border-y border-slate-800/80 divide-y divide-slate-800/80 bg-slate-900/30 rounded-xl overflow-hidden">
              {useCases.map((uc, i) => {
                const Icon = uc.icon
                return (
                  <motion.div
                    key={uc.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                    className="p-6 hover:bg-slate-800/50 transition-all duration-300 relative group overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-emerald-600/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600/25 group-hover:scale-105 transition-all">
                        <Icon size={20} className="text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-2 group-hover:text-emerald-300 transition-colors">{uc.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{uc.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Deployment approaches (Non-Card Pattern) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-14"
          >
            <h2 className="text-xl font-bold text-white mb-6">How We Deploy Your Capital</h2>
            <div className="border-y border-slate-800/80 divide-y divide-slate-800/80 bg-slate-900/30 rounded-xl overflow-hidden">
              {deploymentApproaches.map((d, i) => (
                <motion.div
                  key={d.approach}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 + i * 0.08 }}
                  className="p-6 hover:bg-slate-800/40 transition-all"
                >
                  <p className="text-white font-bold text-base mb-2 text-emerald-300">{d.approach}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Best When</p>
                      <p className="text-slate-300 text-sm">{d.best}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Risk Profile</p>
                      <p className="text-emerald-400 text-sm font-medium">{d.risk}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section (Non-Card Pattern) */}
          <ServiceFAQAccordion
            faqs={[
              {
                q: "Should I invest my lumpsum amount all at once?",
                a: "Investing all at once (Immediate Lumpsum) is great during market corrections. However, in an uncertain or high market, we recommend a Systematic Transfer Plan (STP) — where your money is parked in a liquid fund and moved into equity over 3-12 months to average out the cost.",
              },
              {
                q: "Is lumpsum investing better than SIP?",
                a: "Neither is 'better' — they serve different purposes. SIP is for building wealth from regular income, while lumpsum is for deploying existing capital. Lumpsum allows your money to start compounding immediately, which can be advantageous over long periods.",
              },
              {
                q: "Can I withdraw my lumpsum investment anytime?",
                a: "Yes, most open-ended mutual funds allow you to withdraw your lumpsum investment within 1-2 working days. However, be mindful of exit loads (if any) and capital gains tax implications.",
              },
              {
                q: "What is an STP (Systematic Transfer Plan)?",
                a: "An STP allows you to transfer a fixed amount from one mutual fund scheme (usually a low-risk liquid fund) to another (usually an equity fund) at regular intervals. It's the most disciplined way to deploy a large lumpsum into equity markets.",
              },
            ]}
          />

          {/* Warning box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="border border-amber-500/30 bg-amber-500/5 rounded-lg p-6 mb-12"
          >
            <div className="flex items-start space-x-3">
              <AlertTriangle size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-amber-400 font-semibold text-sm mb-2">A Word of Caution</p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  The biggest mistake lumpsum investors make is investing everything in a trending thematic fund at
                  market highs — driven by recent performance. Past returns don&apos;t predict future performance. Our
                  disciplined approach filters emotion from your investment decisions, every single time.
                </p>
              </div>
            </div>
          </motion.div>

          {/* What you get */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-l-4 border-blue-500 bg-slate-900/40 p-7 rounded-r-2xl mb-12"
          >
            <h3 className="text-lg font-bold text-white mb-5">What You Get With Us</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "In-depth financial situation analysis before recommending anything",
                "Tax-efficient deployment strategy (LTCG / STCG optimized)",
                "Portfolio construction across 5–8 complementary funds",
                "STP setup if phased deployment is recommended",
                "Performance benchmarking every quarter",
                "Exit & switch advisory as goals evolve",
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
              <span>Deploy My Lumpsum Now</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/919911186409"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center space-x-2 flex-1"
            >
              <span>Discuss on WhatsApp</span>
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
