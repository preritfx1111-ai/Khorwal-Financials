"use client"

import { motion, useInView } from "framer-motion"
import {
  LogIn,
  Eye,
  ArrowRight,
  Phone,
  Mail,
  ShieldCheck,
  MessageSquare,
} from "lucide-react"
import { companyData } from "@/constants/data"
import { useRef } from "react"

export default function QuickLinksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      className="py-24 bg-slate-800/20 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-96 h-48 bg-emerald-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Client Access
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Portal & Support
          </h2>
          <p className="text-xl text-slate-400">
            Manage your investments with complete ease and instant advisory access
          </p>
        </motion.div>

        {/* Client VIP Console & Direct Concierge Panel (Non-Card Pattern) */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Zone: Investment Portal Access Console (8 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 spotlight-panel flex flex-col justify-between"
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
                <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                    NJ Wealth Verified Client Access
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Secure 256-bit SSL Portal Active</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Online Investment Dashboard
              </h3>
              <p className="text-slate-300 text-base md:text-lg mb-8 max-w-2xl">
                Access your mutual fund portfolio, execute SIP/Lumpsum
                transactions, and monitor real-time NAV growth securely through
                our integrated NJ India Online portal.
              </p>

              {/* Two Streamlined Launchpad Strips */}
              <div className="space-y-4">
                {/* Strip 1: Login & Transact */}
                <a
                  href="https://ewa.njindiaonline.com/ewa/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-700/80 group-hover:border-emerald-500/50 group-hover:bg-slate-900/90 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600/35 group-hover:scale-105 transition-all">
                        <LogIn className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg group-hover:text-emerald-300 transition-colors">
                          Login & Transact
                        </h4>
                        <p className="text-slate-400 text-sm mt-0.5">
                          Access your account to start, modify, or pause SIPs
                          and execute transactions
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center space-x-2 text-emerald-400 font-semibold text-sm self-start sm:self-center">
                      <span>Go to Portal</span>
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1.5 transition-transform duration-300"
                      />
                    </span>
                  </div>
                </a>

                {/* Strip 2: View Portfolio */}
                <a
                  href="https://www.njindiaonline.in/cdesk/login.fin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-700/80 group-hover:border-emerald-500/50 group-hover:bg-slate-900/90 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/35 group-hover:scale-105 transition-all">
                        <Eye className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg group-hover:text-blue-300 transition-colors">
                          View Portfolio Desk
                        </h4>
                        <p className="text-slate-400 text-sm mt-0.5">
                          Track your investment performance, capital gains, and
                          asset distribution
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center space-x-2 text-blue-400 font-semibold text-sm self-start sm:self-center">
                      <span>View Now</span>
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1.5 transition-transform duration-300"
                      />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Zone: Direct Advisory Concierge Panel (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-4 bg-slate-900/60 border border-slate-700/70 rounded-2xl p-8 backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-2">
                Concierge Assistance
              </p>
              <h3 className="text-2xl font-bold text-white mb-3">
                Need Support?
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Get priority assistance from Suman Khorwal and our wealth advisory
                team — we are just a tap away.
              </p>

              {/* Streamlined Glowing Rows */}
              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919911186409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-5 h-5 text-emerald-400" />
                    <div>
                      <p className="text-white font-bold text-sm">
                        WhatsApp Concierge
                      </p>
                      <p className="text-xs text-emerald-300">
                        Instant chat response
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-emerald-400 group-hover:translate-x-1 transition-transform"
                  />
                </a>

                {/* Phone */}
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 hover:border-emerald-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-emerald-400" />
                    <div>
                      <p className="text-white font-bold text-sm">Direct Line</p>
                      <p className="text-xs text-slate-400">
                        {companyData.contact.phone}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform"
                  />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 hover:border-emerald-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-emerald-400" />
                    <div>
                      <p className="text-white font-bold text-sm">
                        Email Advisory
                      </p>
                      <p className="text-xs text-slate-400 break-all">
                        {companyData.contact.email}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 text-center">
              <p className="text-xs text-slate-500">
                Working Hours: Mon–Sat, 9:30 AM – 6:30 PM
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
