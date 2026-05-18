"use client"

import { motion } from "framer-motion"
import PageHeader from "@/components/shared/PageHeader"
import { teamMembers } from "@/constants/data"
import { Linkedin } from "lucide-react"

export default function Team() {
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
      <PageHeader title="Meet Our Team" subtitle="Experienced professionals dedicated to your financial success" />

      <section className="py-20">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {teamMembers.map((member) => (
              <motion.div key={member.id} variants={itemVariants} whileHover={{ y: -10 }} className="group">
                <div className="card-dark p-8 h-full hover:border-emerald-600/50 transition-all duration-300">
                  <div className="mb-6 relative overflow-hidden rounded-lg">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>

                  <p className="text-emerald-400 font-semibold mb-4">{member.designation}</p>

                  <p className="text-slate-400 mb-4 leading-relaxed">{member.bio}</p>

                  <div className="mb-6 border-t border-slate-700 pt-4">
                    <p className="text-sm font-semibold text-slate-300 mb-2">Qualifications:</p>
                    <ul className="space-y-1">
                      {member.qualifications.map((qual, idx) => (
                        <li key={idx} className="text-xs text-slate-400">
                          • {qual}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-center">
                    <a
                      href={member.linkedIn}
                      className="inline-flex items-center justify-center w-10 h-10 bg-emerald-600/20 rounded-lg hover:bg-emerald-600 text-emerald-400 hover:text-white transition-all duration-300"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-20 bg-slate-800/20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Growing Team</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented professionals passionate about financial services and client success. If
            you share our values, we'd love to hear from you!
          </p>
          <a href="https://wa.me/919911186409"
            target="_blank"
            rel="noopener noreferrer" className="btn-primary">View Career Opportunities</a>
        </div>
      </section>
    </main>
  )
}
