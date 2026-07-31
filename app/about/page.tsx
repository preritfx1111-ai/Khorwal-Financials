"use client"

import { motion } from "framer-motion"
import PageHeader from "@/components/shared/PageHeader"
import { companyStory, usps, companyData } from "@/constants/data"
import {
  Award,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  Linkedin,
  Sparkles,
} from "lucide-react"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main>
      <PageHeader
        title="About Khorwal Financials"
        subtitle="Building Trust Through Transparency and Excellence"
      />

      {/* Company Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                <p>
                  Khorwal Financials was founded with a clear purpose: to make
                  professional financial advisory accessible, honest, and truly
                  client-first. What started as a commitment to helping everyday
                  families navigate the complexities of investing has grown into
                  a trusted name for hundreds of households across India.
                </p>
                <p>
                  Our founder saw a financial advisory landscape driven by
                  commissions rather than client outcomes — where the advice
                  given often served the advisor more than the investor.
                  Khorwal Financials was built to be different: a firm where
                  your financial goals come first, always.
                </p>
                <p>
                  Over the years, we have helped families plan for retirement,
                  build education funds, and achieve long-term financial
                  independence through goal-based, disciplined investment
                  strategies. Our success is not measured in AUM alone — it is
                  measured in the peace of mind our clients carry.
                </p>
                <p>
                  Today, Khorwal Financials stands as a beacon of integrity and
                  expertise in the financial advisory space — respected by
                  clients and peers alike for doing things the right way.
                </p>
              </div>
            </motion.div>

            {/* Editorial Left-Accent Panels (Non-Card Pattern) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="border-l-4 border-emerald-500 bg-slate-900/40 p-7 sm:p-8 rounded-r-2xl">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Our Mission
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {companyStory.mission}
                </p>
              </div>

              <div className="border-l-4 border-blue-500 bg-slate-900/40 p-7 sm:p-8 rounded-r-2xl">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Our Vision
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {companyStory.vision}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Founder */}
      <section className="py-20 bg-slate-800/20">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Left Column - Founder Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/30 to-transparent rounded-lg blur-2xl"></div>
                <img
                  src={
                    companyData.owner.image ||
                    "/placeholder.svg?height=400&width=300&query=founder-professional-portrait"
                  }
                  alt={companyData.owner.name}
                  className="relative w-full rounded-2xl border-2 border-emerald-600/50 object-cover"
                />
              </div>
            </motion.div>

            {/* Right Column - Founder Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-3 space-y-6"
            >
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">
                  Meet Our Founder
                </h2>
                <p className="text-emerald-400 font-semibold text-lg">
                  {companyData.owner.designation}
                </p>
              </div>

              <p className="text-slate-300 leading-relaxed text-lg">
                {companyData.owner.bio}
              </p>

              {/* Qualifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                {companyData.owner.qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{qualification}</span>
                  </div>
                ))}
              </div>

              {/* Editorial Left-Accent Panel: Investment Philosophy */}
              <div className="border-l-4 border-emerald-500 bg-slate-900/40 p-7 sm:p-8 rounded-r-2xl">
                <h3 className="text-xl font-bold text-white mb-4">
                  Investment Philosophy
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm mb-3">
                  Suman believes in a goal-based investing approach that
                  emphasizes long-term wealth creation aligned with your life
                  objectives. Her philosophy centers on understanding your
                  financial goals and identifying investments with genuine
                  potential for sustainable growth.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm mb-3">
                  With a client-first mindset, she prioritizes transparency and
                  education, ensuring every client understands their investment
                  strategy and the rationale behind each recommendation. Her
                  goal is not just to manage money, but to empower individuals
                  to make informed financial decisions.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm">
                  Through personalized advisory and consistent portfolio
                  management, Suman has built a track record of helping families
                  achieve financial security and their long-term wealth
                  creation goals with confidence and clarity.
                </p>
              </div>

              {/* Editorial Left-Accent Panel: Expertise & Services */}
              <div className="border-l-4 border-emerald-500 bg-slate-900/40 p-7 sm:p-8 rounded-r-2xl">
                <h3 className="text-xl font-bold text-white mb-4">
                  Expertise & Services
                </h3>
                <ul className="space-y-3">
                  {companyData.owner.services.map((service, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-2.5 text-slate-300"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* LinkedIn Link */}
              <a
                href={companyData.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
              >
                <Linkedin className="w-5 h-5" />
                <span>Connect on LinkedIn</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Core Values (Numbered Value Ladder - Non-Card Pattern) */}
      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-2">
              Guiding Principles
            </p>
            <h2 className="text-4xl font-bold text-white">Our Core Values</h2>
          </div>

          <div className="border-y border-slate-800/80 divide-y divide-slate-800/80 bg-slate-900/30 rounded-2xl overflow-hidden">
            {companyStory.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group hover:bg-slate-800/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-center space-x-6">
                  <span className="font-mono text-2xl md:text-3xl font-black text-slate-600 group-hover:text-emerald-400 transition-colors">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-emerald-300 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>

                <div className="w-10 h-10 bg-emerald-600/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600/25 group-hover:scale-110 transition-all self-end sm:self-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us (Sleek Split Feature Rows - Non-Card Pattern) */}
      <section className="py-20 bg-slate-800/20">
        <div className="container max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-2">
              The Khorwal Advantage
            </p>
            <h2 className="text-4xl font-bold text-white">Why Choose Us</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {usps.map((usp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-7 rounded-2xl bg-slate-900/40 border-l-4 border-emerald-500/80 hover:bg-slate-900/70 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 bg-emerald-600/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600/25 group-hover:scale-105 transition-all">
                    <Award className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {usp.title}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                      {usp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Registrations (Institutional Credentials Horizon Ribbon - Non-Card Pattern) */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-2">
              Regulatory Compliance
            </p>
            <h2 className="text-4xl font-bold text-white">
              Certifications & Registrations
            </h2>
          </div>

          <div className="metric-ribbon grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-700/60 rounded-2xl overflow-hidden">
            {[
              {
                icon: Award,
                label: "AMFI Registration",
                value: companyData.registration.amfi,
              },
              {
                icon: Shield,
                label: "NISM Certified",
                value: "Mutual Fund Distributor",
              },
              {
                icon: TrendingUp,
                label: "Industry Membership",
                value: "IAMAI Member",
              },
              { icon: Users, label: "Happy Clients", value: "150+" },
            ].map((cert, index) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 text-center group hover:bg-emerald-500/[0.03] transition-colors"
                >
                  <Icon className="w-8 h-8 text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-xs uppercase tracking-wider text-slate-400 mb-1.5">
                    {cert.label}
                  </p>
                  <p className="text-lg md:text-xl font-bold text-white">
                    {cert.value}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-800/20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s work together to achieve your financial goals and build
            lasting wealth for your family.
          </p>
          <a
            href="https://wa.me/919911186409"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  )
}
