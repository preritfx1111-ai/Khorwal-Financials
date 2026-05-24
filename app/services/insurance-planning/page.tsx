"use client"

import { motion } from "framer-motion"
import {
  Shield,
  CheckCircle,
  ArrowRight,
  Heart,
  Users,
  AlertTriangle,
  Umbrella,
  FileText,
  PhoneCall,
} from "lucide-react"
import Link from "next/link"
import PageHeader from "@/components/shared/PageHeader"

const highlights = [
  { label: "Types Covered", value: "Term, Health, ULIP review" },
  { label: "Who It's For", value: "Individuals & families" },
  { label: "Our Role", value: "Advisor, not agent" },
  { label: "Consultation", value: "Free first session" },
]

const insuranceTypes = [
  {
    icon: Shield,
    type: "Pure Term Insurance",
    headline: "The only life insurance product worth having.",
    description:
      "Term plans provide the highest coverage at the lowest premium. A ₹1 crore cover for a 30-year-old nonsmoker can cost as little as ₹9,000/year. If you don't have term insurance and have dependents — this is your most urgent financial priority.",
    tag: "Highly Recommended",
    tagColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  },
  {
    icon: Heart,
    type: "Health / Mediclaim Insurance",
    headline: "One hospitalisation can wipe out years of savings.",
    description:
      "Healthcare inflation in India runs at 14% per year. A ₹5L corporate health plan is inadequate by age 45. We help you evaluate standalone health policies with comprehensive coverage, no room rent sub-limits, and zero copay — for your entire family.",
    tag: "Essential",
    tagColor: "text-blue-400 bg-blue-400/10 border-blue-400/30",
  },
  {
    icon: Umbrella,
    type: "Critical Illness Cover",
    headline: "Your income stops. Your bills don't.",
    description:
      "Cancer, heart attack, stroke — critical illnesses don't just come with medical bills. They come with income loss, caregiver costs, and recovery expenses. A standalone critical illness policy pays a lump sum at diagnosis, giving you financial breathing room when you need it most.",
    tag: "Recommended Add-on",
    tagColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
  },
  {
    icon: FileText,
    type: "Existing Policy Audit",
    headline: "Are your ULIPs and endowment plans silently costing you?",
    description:
      "Most people hold traditional LIC policies or ULIPs from the 2000s and 2010s — products that mix insurance and investment at the cost of both. We audit your existing policies, calculate your true IRR, and advise whether to continue, surrender, or restructure.",
    tag: "Often Overlooked",
    tagColor: "text-purple-400 bg-purple-400/10 border-purple-400/30",
  },
]

const commonMistakes = [
  "Buying insurance to 'save tax' rather than to protect income",
  "Relying solely on employer-provided group health insurance",
  "Choosing endowment plans as investments — they're among the worst performing assets in India",
  "Not disclosing pre-existing conditions, leading to claim rejection at the worst time",
  "Buying inadequate coverage — ₹5L health cover for a family of 4 in a metro city is grossly insufficient",
]

export default function InsurancePlanningPage() {
  return (
    <main>
      <PageHeader
        title="Insurance Planning"
        subtitle="Protect everything you've built — before the unexpected takes it away"
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
            <Shield size={14} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold tracking-wide uppercase">
              Service 5 of 6
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
              You spend years building wealth. A single medical emergency, an untimely death, or a critical illness
              diagnosis without proper coverage can undo decades of disciplined investing — in months.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              Insurance isn't about pessimism. It's about ensuring that your financial plan{" "}
              <em className="text-emerald-400">survives life's unpredictability</em> — so your family's future
              remains secure regardless of what happens to you.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              At Grow Money Investment Services, we approach insurance as a financial planning tool — not a
              commission-driven product sale. We help you identify the gaps in your protection, cut the policies you
              don't need, and build a lean, comprehensive shield that lets your investments grow without risk to your
              downside.
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

          {/* Insurance Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-14"
          >
            <h2 className="text-xl font-bold text-white mb-6">What We Advise On</h2>
            <div className="space-y-5">
              {insuranceTypes.map((ins, i) => {
                const Icon = ins.icon
                return (
                  <motion.div
                    key={ins.type}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="card-dark p-6 hover:border-emerald-600/40 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon size={20} className="text-emerald-400" />
                        </div>
                        <h3 className="text-white font-bold">{ins.type}</h3>
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${ins.tagColor}`}>
                        {ins.tag}
                      </span>
                    </div>
                    <p className="text-emerald-300 font-medium text-sm mb-2 ml-13">{ins.headline}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{ins.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Common mistakes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-14"
          >
            <div className="flex items-start space-x-3 mb-5">
              <AlertTriangle size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <h2 className="text-xl font-bold text-white">5 Insurance Mistakes Most Indians Make</h2>
            </div>
            <div className="space-y-3">
              {commonMistakes.map((mistake, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className="flex items-start space-x-3 card-dark p-4"
                >
                  <span className="text-amber-400 font-bold text-sm flex-shrink-0 w-6">{i + 1}.</span>
                  <p className="text-slate-300 text-sm">{mistake}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Advisor note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-l-4 border-emerald-500 bg-emerald-600/5 rounded-r-lg p-6 mb-12"
          >
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3 font-semibold">Our Commitment</p>
            <p className="text-slate-300 text-base leading-relaxed">
              We do not earn commissions from insurance product sales. Our insurance advisory is fee-based and purely
              in your interest. We will tell you exactly what you need, what you can drop, and why — without any
              sales pressure.
            </p>
          </motion.div>

          {/* What you get */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="card-dark p-6 mb-12"
          >
            <h3 className="text-lg font-bold text-white mb-5">Our Insurance Planning Service</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Complete insurance needs analysis (life, health, critical illness)",
                "Audit of existing policies — keep vs. surrender recommendation",
                "Term plan comparison across top insurers by claim settlement ratio",
                "Health policy shortlisting — room rent, copay, network hospitals",
                "Family floater vs. individual plan advisory",
                "Claims process guidance and support when needed",
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
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/919911186409"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group flex items-center justify-center space-x-2 flex-1"
            >
              <span>Get My Insurance Reviewed</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="http://p.njw.bz/84811"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center space-x-2 flex-1"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
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
