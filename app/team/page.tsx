"use client"

import { useRef } from "react"
import PageHeader from "@/components/shared/PageHeader"
import { companyData } from "@/constants/data"
import {
  Award,
  BookOpen,
  CheckCircle,
  Shield,
  TrendingUp,
  Star,
  Quote,
  Linkedin,
  ArrowRight,
} from "lucide-react"
import { motion, useInView } from "framer-motion"

const qualifications = [
  {
    icon: Award,
    title: "AMFI Registered",
    desc: "Active Registration ARN-154187 — Authorized Mutual Fund Distributor adhering to SEBI guidelines.",
  },
  {
    icon: Shield,
    title: "NISM Certified",
    desc: "National Institute of Securities Markets certification in Mutual Fund Distribution (Series V-A).",
  },
  {
    icon: BookOpen,
    title: "7+ Years Practice",
    desc: "Extensive hands-on expertise navigating bear and bull market cycles since 2017.",
  },
  {
    icon: TrendingUp,
    title: "₹3.5 Cr+ AUM",
    desc: "Trusted by 150+ families across India with their life savings and wealth creation goals.",
  },
]

const philosophy = [
  {
    title: "Education Over Salesmanship",
    body: "We believe an informed investor is a successful investor. We never recommend a product without ensuring you understand what it is, how it works, and why it fits your plan.",
  },
  {
    title: "Process Over Prediction",
    body: "Nobody can predict short-term market moves. We focus on what can be controlled: asset allocation, SIP discipline, cost efficiency, and emotional composure during volatility.",
  },
  {
    title: "Relationships Over Transactions",
    body: "Financial planning is a lifelong journey. We don't just open your account — we review your portfolio annually, rebalance when needed, and stand by your family through life's milestones.",
  },
]

const milestones = [
  {
    year: "2017",
    event:
      "Suman Khorwal clears NISM certification and receives AMFI Registration (ARN-154187), establishing Khorwal Financials in Rohini, Delhi.",
  },
  {
    year: "2019",
    event:
      "Crossed 50 active family portfolios and ₹1 Crore in Assets Under Management (AUM), entirely through client referrals and trust.",
  },
  {
    year: "2021",
    event:
      "Partnered with NJ India Online to offer 100% paperless, secure digital onboarding, portfolio tracking, and E-SIP execution for clients across India.",
  },
  {
    year: "2023",
    event:
      "Reached ₹3.5+ Crore AUM and 150+ happy families served, with a 99% client retention rate across all market conditions.",
  },
  {
    year: "2025+",
    event:
      "Expanding advisory capabilities with advanced retirement planning tools, automated rebalancing, and enhanced client education programs.",
  },
]

const expertise = [
  "Mutual Fund Advisory",
  "SIP & Step-Up Planning",
  "Retirement Corpus Building",
  "Children's Education Planning",
  "Tax Saving (ELSS 80C)",
  "SWP Regular Income Plans",
  "Portfolio Audit & Rebalancing",
  "Term & Health Insurance",
]

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <main>
      <PageHeader
        title="Meet Suman Khorwal"
        subtitle="The mind, mission, and commitment behind Khorwal Financials"
      />

      {/* ── Hero Profile ─────────────────────────────────────────────────────── */}
      <section className="py-20" ref={ref}>
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 xl:gap-16 items-start">
            {/* Photo column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="lg:col-span-2"
            >
              <div className="relative">
                <div className="absolute inset-0 translate-x-3 translate-y-3 bg-emerald-600/20 rounded-2xl" />
                <div className="absolute inset-0 bg-emerald-600/0 group-hover:bg-emerald-600/10 rounded-2xl blur-2xl transition-all duration-500" />
                <img
                  src={companyData.owner.image}
                  alt="Suman Khorwal — Founder, Khorwal Financials"
                  className="relative z-10 w-full rounded-2xl border border-slate-700/60 object-cover"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-4 -right-4 bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-emerald-900/50 z-20"
                >
                  ARN-154187
                </motion.div>
              </div>

              {/* Social + CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="mt-8 space-y-3"
              >
                <a
                  href={companyData.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center space-x-2 w-full"
                >
                  <Linkedin size={17} />
                  <span>Connect on LinkedIn</span>
                </a>
                <a
                  href="https://wa.me/919911186409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center justify-center space-x-2 w-full"
                >
                  <span>Schedule a Free Call</span>
                  <ArrowRight size={17} />
                </a>
              </motion.div>
            </motion.div>

            {/* Content column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
              className="lg:col-span-3"
            >
              <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-2">
                Founder & Principal Advisor
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-1 leading-tight">
                Suman Khorwal
              </h2>
              <p className="text-slate-400 text-lg mb-6">
                AMFI-Registered Mutual Fund Distributor · ARN-154187
              </p>

              {/* Star rating */}
              <div className="flex items-center space-x-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-emerald-400 text-emerald-400"
                  />
                ))}
                <span className="text-slate-300 text-sm font-medium ml-1">
                  4.9 / 5 — 150+ client reviews
                </span>
              </div>

              {/* About copy */}
              <div className="space-y-4 text-slate-300 leading-relaxed mb-8">
                <p>
                  Suman Khorwal founded{" "}
                  <strong className="text-white">Khorwal Financials</strong>{" "}
                  with one unshakeable belief: that every Indian family deserves
                  access to honest, professional financial advice — not just the
                  wealthy few. In a landscape saturated with commission-chasing
                  distributors, Suman chose a different path — one built on
                  transparency, client education, and long-term relationships.
                </p>
                <p>
                  With over{" "}
                  <strong className="text-emerald-400">
                    7 years of hands-on experience
                  </strong>{" "}
                  in mutual fund advisory, SIP planning, and portfolio
                  management, Suman has guided 150+ families across India toward
                  meaningful financial milestones — from children&apos;s
                  education funds and home purchases to comfortable retirements
                  and legacy planning.
                </p>
                <p>
                  As an{" "}
                  <strong className="text-white">
                    NISM-certified and AMFI-registered
                  </strong>{" "}
                  distributor, Suman brings the highest level of regulatory
                  compliance and product knowledge to every client engagement.
                  But beyond credentials, what truly sets Suman apart is the
                  ability to translate complex market concepts into simple,
                  actionable strategies that real people can follow and sustain.
                </p>
                <p>
                  Whether you&apos;re a first-time investor nervous about market
                  risk, a professional with surplus income to deploy, or a
                  retiree seeking steady monthly income — Suman builds a plan
                  that fits your life, not the other way around.
                </p>
              </div>

              {/* Quote */}
              <div className="border-l-4 border-emerald-500 bg-emerald-600/5 rounded-r-xl p-5 mb-8 relative">
                <Quote className="w-8 h-8 text-emerald-500/30 absolute top-4 right-4" />
                <p className="text-slate-200 italic leading-relaxed text-base">
                  &ldquo;My goal is not to sell you a fund. My goal is to help
                  you sleep peacefully at night, knowing your money is working
                  towards the life you deserve. That&apos;s what I wake up for
                  every morning.&rdquo;
                </p>
                <p className="text-emerald-400 text-sm font-semibold mt-3">
                  — Suman Khorwal
                </p>
              </div>

              {/* Expertise tags */}
              <div>
                <p className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">
                  Areas of Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((skill) => (
                    <span
                      key={skill}
                      className="bg-slate-800 border border-slate-700 text-slate-300 text-xs px-3 py-1.5 rounded-full hover:border-emerald-600/50 hover:text-emerald-300 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Qualifications (Institutional Horizon Credentials Ribbon - Non-Card Pattern) ── */}
      <section className="py-20 bg-slate-800/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Credentials
            </p>
            <h2 className="text-4xl font-bold text-white">
              Qualifications & Credentials
            </h2>
          </motion.div>

          <div className="metric-ribbon grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-700/60 rounded-2xl overflow-hidden shadow-xl">
            {qualifications.map((q, i) => {
              const Icon = q.icon
              return (
                <motion.div
                  key={q.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-8 group hover:bg-emerald-500/[0.03] transition-colors"
                >
                  <div className="w-12 h-12 bg-emerald-600/15 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-emerald-600/25 transition-all">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {q.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {q.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Philosophy (Editorial Numbered Principles - Non-Card Pattern) ── */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Philosophy
            </p>
            <h2 className="text-4xl font-bold text-white">
              The Principles That Guide Us
            </h2>
          </motion.div>

          <div className="border-y border-slate-800/80 divide-y divide-slate-800/80 bg-slate-900/30 rounded-2xl overflow-hidden">
            {philosophy.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-7 md:p-9 flex items-start space-x-6 group hover:bg-slate-800/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="font-mono text-2xl md:text-3xl font-black text-slate-600 group-hover:text-emerald-400 transition-colors flex-shrink-0">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-emerald-300 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-base">
                    {p.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey Timeline (Minimalist Illuminated Timeline - Non-Card Pattern) ── */}
      <section className="py-20 bg-slate-800/20">
        <div className="container max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
              The Journey
            </p>
            <h2 className="text-4xl font-bold text-white">
              Building Trust, One Year at a Time
            </h2>
          </motion.div>

          <div className="relative">
            {/* Sleek luminous vertical timeline bar */}
            <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-0.5 bg-gradient-to-b from-emerald-500/80 via-slate-700 to-transparent" />

            <div className="space-y-8 pl-12 sm:pl-16">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pb-6 border-b border-slate-800/80 last:border-0 last:pb-0 group"
                >
                  {/* Glowing Node */}
                  <div className="absolute -left-12 sm:-left-16 top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center flex-shrink-0 z-10 group-hover:scale-125 group-hover:bg-emerald-600 transition-all">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:bg-white transition-colors" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
                    <span className="text-emerald-400 text-base font-extrabold font-mono tracking-wider">
                      {m.year}
                    </span>
                  </div>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {m.event}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Start Your Journey
            </p>
            <h2 className="text-4xl font-bold text-white mb-5">
              Ready to Invest With Confidence?
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Book a free, no-obligation consultation with Suman and discover
              how a personalized investment plan can transform your financial
              future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919911186409"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>Book Free Consultation</span>
                <ArrowRight size={17} />
              </a>
              <a
                href="http://p.njw.bz/84811"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <span>Start SIP Online</span>
                <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
