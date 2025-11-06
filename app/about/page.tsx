"use client"

import { motion } from "framer-motion"
import PageHeader from "@/components/shared/PageHeader"
import { companyStory, usps, companyData } from "@/constants/data"
import { Award, Shield, TrendingUp, Users, CheckCircle, Linkedin } from "lucide-react"

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
        title="About Grow Money Investment Services"
        subtitle="Building Trust Through Transparency and Excellence"
      />

      {/* Company Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                <p>
                  Grow Money Investment Services was founded in 2015 with a singular vision: to revolutionize financial
                  advisory services in India. What began as a passionate endeavor to democratize access to professional
                  financial guidance has grown into a trusted partner for over 1,500 families across the country.
                </p>
                <p>
                  Our founder, {companyData.owner.name}, recognized a critical gap in the financial advisory space.
                  While many distributors focused on commissions, there was a shortage of truly client-centric advisors
                  who prioritized your interests above all else. This realization sparked the creation of Grow Money.
                </p>
                <p>
                  Over the past decade, we've managed over ₹250 crores in assets and helped thousands of families
                  achieve their financial goals. But our true measure of success isn't the numbers—it's the trust our
                  clients place in us and the financial security we've helped create for their families.
                </p>
                <p>
                  Today, Grow Money stands as a beacon of transparency and integrity in the financial advisory industry,
                  recognized and respected by clients and industry peers alike.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="card-dark p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
                <p className="text-slate-300 leading-relaxed">{companyStory.mission}</p>
              </div>

              <div className="card-dark p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
                <p className="text-slate-300 leading-relaxed">{companyStory.vision}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
                    "/placeholder.svg?height=400&width=300&query=founder-professional-portrait" ||
                    "/placeholder.svg"
                  }
                  alt={companyData.owner.name}
                  className="relative w-full rounded-lg border-2 border-emerald-600/50 object-cover"
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
                <h2 className="text-4xl font-bold text-white mb-2">Meet Our Founder</h2>
                <p className="text-emerald-400 font-semibold text-lg">{companyData.owner.designation}</p>
              </div>

              <p className="text-slate-300 leading-relaxed text-lg">{companyData.owner.bio}</p>

              {/* Qualifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                {companyData.owner.qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{qualification}</span>
                  </div>
                ))}
              </div>

              {/* Investment Philosophy */}
              <div className="card-dark p-6 border border-emerald-600/30">
                <h3 className="text-xl font-bold text-white mb-4">Investment Philosophy</h3>
                <p className="text-slate-300 leading-relaxed text-sm mb-3">
                  Prerit believes in a value investing approach that emphasizes long-term wealth creation over
                  short-term gains. His philosophy centers on understanding market fundamentals and identifying
                  investments with genuine potential for sustainable growth.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm mb-3">
                  With a client-first mindset, he prioritizes transparency and education, ensuring every client
                  understands their investment strategy and the rationale behind each recommendation. His goal is not
                  just to manage money, but to empower individuals to make informed financial decisions.
                </p>
                <p className="text-slate-300 leading-relaxed text-sm">
                  Through personalized advisory and consistent portfolio management, Prerit has built a track record of
                  helping families achieve financial security and achieve their long-term wealth creation goals with
                  confidence and clarity.
                </p>
              </div>

              {/* Expertise & Services */}
              <div className="card-dark p-6 border border-emerald-600/30">
                <h3 className="text-xl font-bold text-white mb-4">Expertise & Services</h3>
                <ul className="space-y-3">
                  {companyData.owner.services.map((service, index) => (
                    <li key={index} className="flex items-start space-x-2 text-slate-300">
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

      {/* Values */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Core Values</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {companyStory.values.map((value, index) => (
              <motion.div key={index} variants={itemVariants} className="card-dark p-6 text-center">
                <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-800/20">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Choose Us</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {usps.map((usp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-dark p-8 hover:border-emerald-600/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{usp.title}</h3>
                <p className="text-slate-400 leading-relaxed">{usp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Certifications & Registrations</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: "SEBI Registered", value: companyData.registration.sebi },
              { icon: Award, label: "AMFI Registration", value: companyData.registration.amfi },
              { icon: TrendingUp, label: "Industry Membership", value: "IAMAI Member" },
              { icon: Users, label: "Active Clients", value: "1,500+" },
            ].map((cert, index) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-dark p-8 text-center"
                >
                  <Icon className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                  <p className="text-sm text-slate-400 mb-2">{cert.label}</p>
                  <p className="text-lg font-bold text-white">{cert.value}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-800/20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's work together to achieve your financial goals and build lasting wealth for your family.
          </p>
          <button className="btn-primary">Schedule a Consultation</button>
        </div>
      </section>
    </main>
  )
}
