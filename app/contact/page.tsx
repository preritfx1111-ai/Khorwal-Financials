"use client"

import type React from "react"

import { useState } from "react"
import PageHeader from "@/components/shared/PageHeader"
import { companyData } from "@/constants/data"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Mutual Funds",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoading(false)
    setFormData({ name: "", email: "", phone: "", service: "Mutual Funds", message: "" })
    alert("Thank you for your message. We will contact you soon!")
  }

  return (
    <main>
      <PageHeader title="Get in Touch" subtitle="We're here to help you with any questions or investment needs" />

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Form */}
            <div className="md:col-span-2">
              <div className="card-dark p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-emerald-600 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-emerald-600 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-emerald-600 focus:outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Service Interest *</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-emerald-600 focus:outline-none transition-colors"
                    >
                      <option>Mutual Funds</option>
                      <option>SIP Planning</option>
                      <option>Lumpsum Investment</option>
                      <option>SWP Planning</option>
                      <option>Insurance</option>
                      <option>Portfolio Review</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Message *</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-emerald-600 focus:outline-none transition-colors resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="card-dark p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Address</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{companyData.contact.address}</p>
                  </div>
                </div>
              </div>

              <div className="card-dark p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <a
                      href={`tel:${companyData.contact.phone}`}
                      className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      {companyData.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-dark p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <a
                      href={`mailto:${companyData.contact.email}`}
                      className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      {companyData.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-dark p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Working Hours</h3>
                    <p className="text-sm text-slate-400">{companyData.workingHours}</p>
                  </div>
                </div>
              </div>

              <div className="card-dark p-6">
                <a
                  href={`https://wa.me/919911186409`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-slate-800/20">
        <div className="container">
          <h2 className="text-2xl font-bold text-white mb-6">Find Us Here</h2>
          <div className="rounded-lg overflow-hidden border border-slate-700 h-96">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3844166097276!2d77.08070012346942!3d28.517773874549666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdf8c8c8c8c8d%3A0x8c8c8c8c8c8c8c8c!2sSagar%20Tower%2C%20Janakpuri%2C%20Delhi!5e0!3m2!1sen!2sin!4v1707396000000"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Grow Money Investment Services Location"
            ></iframe>
          </div>
          <p className="text-slate-400 text-sm mt-4 text-center">
            Sagar Tower, 6th Floor, Above SBI, Near Gate No. 3 of Janakpuri Metro Station, District Centre, Janakpuri, Delhi - 110058
          </p>
        </div>
      </section>
    </main>
  )
}
