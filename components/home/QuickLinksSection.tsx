"use client"

import { motion, useInView } from "framer-motion"
import { LogIn, Eye, Headphones, ArrowRight, Phone, Mail } from "lucide-react"
import { companyData } from "@/constants/data"
import { useRef } from "react"

const quickLinks = [
  {
    icon: LogIn,
    title: "Login & Transact",
    description: "Access your portfolio and manage your investments securely online",
    url: "https://ewa.njindiaonline.com/ewa/login",
    cta: "Go to Portal",
  },
  {
    icon: Eye,
    title: "View Portfolio",
    description: "Track your investment performance and holdings in real-time",
    url: "https://www.njindiaonline.in/cdesk/login.fin",
    cta: "View Now",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Get expert help from our advisory team — we're just a call away",
  },
]

export default function QuickLinksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="py-24 bg-slate-800/20 relative overflow-hidden" ref={ref}>
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
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">Client Access</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Portal & Support</h2>
          <p className="text-xl text-slate-400">Manage your investments with complete ease</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="card-dark p-7 hover:border-emerald-600/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                onClick={() => { if (link.url) window.open(link.url, "_blank") }}
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/5 transition-all duration-500 rounded-lg pointer-events-none" />

                <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-600/35 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">{link.title}</h3>
                <p className="text-slate-400 text-sm mb-5 leading-relaxed">{link.description}</p>

                {link.url ? (
                  <div className="flex items-center text-emerald-400 font-semibold text-sm space-x-2">
                    <span>{link.cta}</span>
                    <ArrowRight size={15} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                ) : (
                  <ul className="space-y-3 text-slate-400 text-sm">
                    <li className="flex items-center space-x-2">
                      <Phone size={15} className="text-emerald-500 flex-shrink-0" />
                      <a href={`tel:${companyData.contact.phone}`} className="hover:text-emerald-400 transition-colors" onClick={e => e.stopPropagation()}>
                        {companyData.contact.phone}
                      </a>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Mail size={15} className="text-emerald-500 flex-shrink-0" />
                      <a href={`mailto:${companyData.contact.email}`} className="hover:text-emerald-400 transition-colors break-all" onClick={e => e.stopPropagation()}>
                        {companyData.contact.email}
                      </a>
                    </li>
                  </ul>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
