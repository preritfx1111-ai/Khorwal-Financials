"use client"

import { motion } from "framer-motion"
import { LogIn, Eye, Headphones, ArrowRight, Divide, Phone, Mail, MapPin } from "lucide-react"
import { companyData } from "@/constants/data"

const quickLinks = [
  {
    icon: LogIn,
    title: "Login & Transact",
    description: "Access your portfolio and manage investments",
    url: "https://ewa.njindiaonline.com/ewa/login"
  },
  {
    icon: Eye,
    title: "View Portfolio",
    description: "Track your investments in real-time",
    url: "https://www.njindiaonline.in/cdesk/login.fin"
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Get help from our expert team",
  },
]

export default function QuickLinksSection() {
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
    <section className="py-20 bg-slate-800/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Portal & Support</h2>
          <p className="text-xl text-slate-400">Manage your investments with ease</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {quickLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card-dark p-6 hover:border-emerald-600/50 transition-all duration-300 group cursor-pointer"
                onClick={() => {
                  if (link.url) {
                    window.open(link.url, "_blank")
                  }
                }}
              >
                <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600/30 transition-colors">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{link.title}</h3>

                <p className="text-slate-400 text-sm mb-4">{link.description}</p>

                {link.title !== "Customer Support" ? (
                  <div className="flex items-center text-emerald-400 font-semibold text-sm group-hover:space-x-2 transition-all">
                    <span>Explore</span>
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ) : (<div>
                  <ul className="space-y-3 text-slate-400 text-sm">
                    <li className="flex space-x-2">
                      <Phone size={16} className="text-emerald-600 flex-shrink-0" />
                      <a href={`tel:${companyData.contact.phone}`} className="hover:text-emerald-400 transition-colors">
                        {companyData.contact.phone}
                      </a>
                    </li>
                    <li className="flex space-x-2">
                      <Mail size={16} className="text-emerald-600 flex-shrink-0" />
                      <a href={`mailto:${companyData.contact.email}`} className="hover:text-emerald-400 transition-colors">
                        {companyData.contact.email}
                      </a>
                    </li>
                  </ul>
                </div>)}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
