"use client"

import { motion, useInView } from "framer-motion"
import PageHeader from "@/components/shared/PageHeader"
import { companyData } from "@/constants/data"
import {
  Linkedin,
  Award,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Shield,
  ArrowRight,
  Quote,
} from "lucide-react"
import { useRef } from "react"

const qualifications = [
  {
    icon: Award,
    title: "NISM Certified",
    desc: "National Institute of Securities Markets — Mutual Fund Distributor Certification (NISM-Series-V-A)",
  },
  {
    icon: Shield,
    title: "AMFI Registered",
    desc: "Association of Mutual Funds in India — ARN-154187, authorized to distribute mutual fund products across India",
  },
  {
    icon: TrendingUp,
    title: "7+ Years Experience",
    desc: "Over seven years of hands-on wealth management, portfolio advisory, and investor education across diverse client segments",
  },
  {
    icon: Users,
    title: "150+ Happy Clients",
    desc: "A growing community of satisfied investors — from first-time SIP starters to high-net-worth portfolio holders",
  },
]

const expertise = [
  "Goal-Based Financial Planning",
  "Systematic Investment Plans (SIP)",
  "Portfolio Construction & Rebalancing",
  "Tax-Efficient Fund Selection (ELSS)",
  "Retirement & SWP Planning",
  "Risk Profiling & Asset Allocation",
  "Lumpsum Deployment Strategy",
  "Investor Education & Financial Literacy",
]

const philosophy = [
  {
    title: "Transparency First",
    body:
      "At Khorwal Financials, there are no hidden agendas, no commission-driven recommendations. Every suggestion we make is rooted in your best interest — because your financial well-being is the only metric we track.",
  },
  {
    title: "Education Over Sales",
    body:
      "Suman believes that an informed investor is a successful investor. That's why every client conversation starts with educating you about the product, the risk, and the realistic outcome — before any investment is made.",
  },
  {
    title: "Long-Term Thinking",
    body:
      "Wealth is not built overnight. Suman's approach emphasizes patient, disciplined investing over chasing short-term trends — helping you stay the course when markets get volatile and compound quietly through every cycle.",
  },
]

const milestones = [
  { year: "2017", event: "Founded Khorwal Financials with a mission to democratize financial advisory" },
  { year: "2018", event: "Earned NISM Series V-A certification; onboarded first 20 families" },
  { year: "2020", event: "Crossed 50 active SIP clients; launched investor education workshops" },
  { year: "2022", event: "Expanded portfolio advisory services; hit ₹2Cr+ in AUM" },
  { year: "2024", event: "150+ happy investors; recognized in community for ethical advisory" },
  { year: "2025", event: "Continuing to grow with a client-first, integrity-driven approach" },
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
                {/* Glow behind photo */}
                <div className="absolute inset-0 translate-x-3 translate-y-3 bg-emerald-600/20 rounded-2xl" />
                <div className="absolute inset-0 bg-emerald-600/0 group-hover:bg-emerald-600/10 rounded-2xl blur-2xl transition-all duration-500" />
                <img
                  src={companyData.owner.image}
                  alt="Suman Khorwal — Founder, Khorwal Financials"
                  className="relative z-10 w-full rounded-2xl border border-slate-700/60 object-cover"
                />
                {/* ARN badge */}
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
              <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-2">Founder & Principal Advisor</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-1 leading-tight">Suman Khorwal</h2>
              <p className="text-slate-400 text-lg mb-6">AMFI-Registered Mutual Fund Distributor · ARN-154187</p>

              {/* Star rating */}
              <div className="flex items-center space-x-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-emerald-400 text-emerald-400" />
                ))}
                <span className="text-slate-300 text-sm font-medium ml-1">4.9 / 5 — 150+ client reviews</span>
              </div>

              {/* About copy */}
              <div className="space-y-4 text-slate-300 leading-relaxed mb-8">
                <p>
                  Suman Khorwal founded <strong className="text-white">Khorwal Financials</strong> with one unshakeable belief: that every Indian family deserves access to honest, professional financial advice — not just the wealthy few. In a landscape saturated with commission-chasing distributors, Suman chose a different path — one built on transparency, client education, and long-term relationships.
                </p>
                <p>
                  With over <strong className="text-emerald-400">7 years of hands-on experience</strong> in mutual fund advisory, SIP planning, and portfolio management, Suman has guided 150+ families across India toward meaningful financial milestones — from children's education funds and home purchases to comfortable retirements and legacy planning.
                </p>
                <p>
                  As an <strong className="text-white">NISM-certified and AMFI-registered</strong> distributor, Suman brings the highest level of regulatory compliance and product knowledge to every client engagement. But beyond credentials, what truly sets Suman apart is the ability to translate complex market concepts into simple, actionable strategies that real people can follow and sustain.
                </p>
                <p>
                  Whether you're a first-time investor nervous about market risk, a professional with surplus income to deploy, or a retiree seeking steady monthly income — Suman builds a plan that fits your life, not the other way around.
                </p>
              </div>

              {/* Quote */}
              <div className="border-l-4 border-emerald-500 bg-emerald-600/5 rounded-r-xl p-5 mb-8 relative">
                <Quote className="w-8 h-8 text-emerald-500/30 absolute top-4 right-4" />
                <p className="text-slate-200 italic leading-relaxed text-base">
                  "My goal is not to sell you a fund. My goal is to help you sleep peacefully at night, knowing your money is working towards the life you deserve. That's what I wake up for every morning."
                </p>
                <p className="text-emerald-400 text-sm font-semibold mt-3">— Suman Khorwal</p>
              </div>

              {/* Expertise tags */}
              <div>
                <p className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">Areas of Expertise</p>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((skill) => (
                    <span key={skill} className="bg-slate-800 border border-slate-700 text-slate-300 text-xs px-3 py-1.5 rounded-full hover:border-emerald-600/50 hover:text-emerald-300 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Qualifications ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-800/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">Credentials</p>
            <h2 className="text-4xl font-bold text-white">Qualifications & Credentials</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualifications.map((q, i) => {
              const Icon = q.icon
              return (
                <motion.div
                  key={q.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="card-dark p-6 hover:border-emerald-600/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{q.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{q.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Philosophy ──────────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">Philosophy</p>
            <h2 className="text-4xl font-bold text-white">The Principles That Guide Us</h2>
          </motion.div>

          <div className="space-y-6">
            {philosophy.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="card-dark p-7 hover:border-emerald-600/40 transition-all duration-300 flex items-start space-x-5"
              >
                <div className="w-10 h-10 bg-emerald-600/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey Timeline ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-800/20">
        <div className="container max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">The Journey</p>
            <h2 className="text-4xl font-bold text-white">Building Trust, One Year at a Time</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-700/60" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative flex items-start space-x-6 pl-16"
                >
                  {/* Dot */}
                  <div className="absolute left-[26px] top-1.5 w-5 h-5 rounded-full bg-emerald-600 border-2 border-slate-900 flex items-center justify-center flex-shrink-0 z-10">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="card-dark p-5 flex-1 hover:border-emerald-600/40 transition-colors duration-300">
                    <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">{m.year}</span>
                    <p className="text-slate-300 text-sm mt-1 leading-relaxed">{m.event}</p>
                  </div>
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
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-4">Start Your Journey</p>
            <h2 className="text-4xl font-bold text-white mb-5">Ready to Invest With Confidence?</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Book a free, no-obligation consultation with Suman and discover how a personalized investment plan can transform your financial future.
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
