"use client"

import { motion } from "framer-motion"
import {
  TrendingUp,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Star,
  BarChart2,
  Landmark,
  Layers,
  BookOpen,
  Target,
} from "lucide-react"
import Link from "next/link"
import PageHeader from "@/components/shared/PageHeader"
import ServiceHighlightsStrip from "@/components/shared/ServiceHighlightsStrip"
import ServiceCategoriesList from "@/components/shared/ServiceCategoriesList"
import ServiceFAQAccordion from "@/components/shared/ServiceFAQAccordion"

const fundCategories = [
  {
    icon: Landmark,
    name: "Large-Cap Equity",
    description: "India's top 100 blue-chip companies. Stable, liquid, lower risk.",
    badge: "Moderate Risk",
    badgeColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
  },
  {
    icon: TrendingUp,
    name: "Mid & Small-Cap Equity",
    description: "High-growth potential with above-average risk. For the patient investor.",
    badge: "High Risk",
    badgeColor: "text-red-400 bg-red-400/10 border-red-400/30",
  },
  {
    icon: BookOpen,
    name: "ELSS (Tax-Saving)",
    description: "Save up to ₹46,800/year in taxes under Section 80C while growing wealth.",
    badge: "80C Benefit",
    badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  },
  {
    icon: ShieldCheck,
    name: "Debt / Liquid Funds",
    description: "Capital protection with steady returns. Ideal for short-term goals & parking surplus.",
    badge: "Low Risk",
    badgeColor: "text-blue-400 bg-blue-400/10 border-blue-400/30",
  },
  {
    icon: Layers,
    name: "Hybrid / Balanced",
    description: "Best of both worlds — equity growth with debt stability in a single fund.",
    badge: "Low–Moderate",
    badgeColor: "text-purple-400 bg-purple-400/10 border-purple-400/30",
  },
]

const highlights = [
  { label: "Ideal For", value: "Long-term wealth creation" },
  { label: "Min. Investment", value: "₹500 onwards" },
  { label: "Risk Level", value: "Low to High (fund-based)" },
  { label: "Returns", value: "Market-linked" },
]

const whyMatters =
  "The real value isn't picking funds — it's keeping you disciplined during market dips and stopping emotional decisions that hurt long-term returns. That's where we come in."

export default function MutualFundsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I choose the right mutual fund?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Choosing the right fund depends on your financial goals, risk appetite, and time horizon. An advisor like Khorwal Financials can help match you to funds that align with your specific objectives."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of investing in mutual funds?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Key benefits include professional management, diversification, liquidity, and potential for higher returns compared to traditional savings like FDs."
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
        title="Mutual Funds Investment"
        subtitle="Grow your wealth through professionally managed, diversified funds"
      />

      <section className="py-16">
        <div className="container max-w-4xl mx-auto">

          {/* Service badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-emerald-600/20 border border-emerald-600/40 rounded-full px-4 py-1.5 mb-8"
          >
            <TrendingUp size={14} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold tracking-wide uppercase">
              Service 1 of 6
            </span>
          </motion.div>

          {/* Intro copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose prose-invert prose-lg max-w-none mb-12"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              Mutual funds pool money from multiple investors to build a diversified portfolio across equities, bonds,
              or both. At Khorwal Financials, we match you to the right fund based on your goals, risk
              appetite, and time horizon — and monitor performance on your behalf so you never have to second-guess
              your money.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mt-4">
              Unlike bank FDs that lock your money at sub-inflation rates, or stock-picking that demands daily
              attention, a well-chosen mutual fund portfolio does the heavy lifting for you. We eliminate distributor
              bias, cut hidden costs, and ensure every rupee works towards your financial freedom.
            </p>
          </motion.div>

          {/* Highlights strip (Non-Card Pattern) */}
          <ServiceHighlightsStrip highlights={highlights} />

          {/* Fund categories (Non-Card Pattern) */}
          <ServiceCategoriesList
            title="Fund Categories We Advise On"
            categories={fundCategories}
          />

          {/* FAQ Section (Non-Card Pattern) */}
          <ServiceFAQAccordion
            faqs={[
              {
                q: "How do I choose the right mutual fund?",
                a: "Choosing the right fund depends on your financial goals, risk appetite, and time horizon. An advisor like Khorwal Financials can help match you to funds that align with your specific objectives, whether it's wealth creation, tax saving, or regular income.",
              },
              {
                q: "What are the benefits of investing in mutual funds?",
                a: "Key benefits include professional management by expert fund managers, instant diversification across multiple stocks/bonds, high liquidity (you can withdraw most funds within 1-2 days), and potential for significantly higher returns compared to traditional savings like FDs.",
              },
              {
                q: "Is there any risk in mutual funds?",
                a: "Yes, mutual fund investments are subject to market risks. The value of your investment can go up or down based on market conditions. However, long-term investing and proper asset allocation can help mitigate these risks.",
              },
            ]}
          />

          {/* Why an advisor matters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border-l-4 border-emerald-500 bg-emerald-600/5 rounded-r-lg p-6 mb-12"
          >
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3 font-semibold">Why an Advisor Matters</p>
            <p className="text-slate-300 text-base leading-relaxed">{whyMatters}</p>
          </motion.div>

          {/* Features checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="card-dark p-6 mb-12"
          >
            <h3 className="text-lg font-bold text-white mb-5">What You Get With Us</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Curated fund selection based on your risk profile",
                "Zero-commission direct plan access",
                "Quarterly portfolio review calls",
                "Tax-efficient fund switching guidance",
                "Goal-tagged portfolio structuring",
                "Ongoing market commentary & alerts",
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
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="http://p.njw.bz/84811"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group flex items-center justify-center space-x-2 flex-1 text-center"
            >
              <span>Start Investing</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/919911186409"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center space-x-2 flex-1"
            >
              <span>Ask a Question on WhatsApp</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Back to services */}
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
