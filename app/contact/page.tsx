"use client"

import type React from "react"
import { useState, useCallback } from "react"
import PageHeader from "@/components/shared/PageHeader"
import { companyData } from "@/constants/data"
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Send, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type Status = "idle" | "loading" | "success" | "error"

// ─── Validation helpers ──────────────────────────────────────────────────────
function validateName(v: string) {
  if (!v.trim()) return "Full name is required."
  if (v.trim().length < 2) return "Name must be at least 2 characters."
  if (!/^[a-zA-Z\s'.'-]+$/.test(v.trim())) return "Name can only contain letters, spaces, and apostrophes."
  return ""
}

function validateEmail(v: string) {
  if (!v.trim()) return "Email address is required."
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())) return "Please enter a valid email address."
  return ""
}

function validatePhone(v: string) {
  const digits = v.replace(/\D/g, "")
  if (!digits) return "Phone number is required."
  if (digits.length < 10) return "Please enter a valid 10-digit mobile number."
  if (digits.length > 13) return "Phone number is too long."
  return ""
}

function validateMessage(v: string) {
  if (!v.trim()) return "Message is required."
  if (v.trim().length < 10) return "Please write at least 10 characters."
  return ""
}

// ─── Phone formatting (Indian format: +91 XXXXX XXXXX) ──────────────────────
function formatPhoneDisplay(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 13)

  // Handle country code prefix
  if (digits.startsWith("91") && digits.length > 10) {
    const local = digits.slice(2)
    const p1 = local.slice(0, 5)
    const p2 = local.slice(5, 10)
    return `+91 ${p1}${p2 ? " " + p2 : ""}`
  }

  // Plain 10-digit
  const p1 = digits.slice(0, 5)
  const p2 = digits.slice(5, 10)
  return `${p1}${p2 ? " " + p2 : ""}`
}

// ─── FieldError helper ───────────────────────────────────────────────────────
function FieldError({ msg }: { msg: string }) {
  if (!msg) return null
  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.15 }}
      className="mt-1.5 text-xs text-red-400 flex items-center gap-1"
    >
      <span className="inline-block w-1 h-1 rounded-full bg-red-400 flex-shrink-0" />
      {msg}
    </motion.p>
  )
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Mutual Funds",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [status, setStatus] = useState<Status>("idle")
  const [statusMessage, setStatusMessage] = useState("")

  // Live validation on blur
  const handleBlur = useCallback(
    (field: string) => {
      setTouched((prev) => ({ ...prev, [field]: true }))
      let err = ""
      if (field === "name") err = validateName(formData.name)
      if (field === "email") err = validateEmail(formData.email)
      if (field === "phone") err = validatePhone(formData.phone)
      if (field === "message") err = validateMessage(formData.message)
      setErrors((prev) => ({ ...prev, [field]: err }))
    },
    [formData]
  )

  // Phone input handler — auto-format
  const handlePhoneChange = (raw: string) => {
    const formatted = formatPhoneDisplay(raw)
    setFormData((prev) => ({ ...prev, phone: formatted }))
    if (touched.phone) {
      setErrors((prev) => ({ ...prev, phone: validatePhone(formatted) }))
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (touched[field]) {
      let err = ""
      if (field === "name") err = validateName(value)
      if (field === "email") err = validateEmail(value)
      if (field === "message") err = validateMessage(value)
      setErrors((prev) => ({ ...prev, [field]: err }))
    }
  }

  const validateAll = () => {
    const e: Record<string, string> = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      message: validateMessage(formData.message),
    }
    setErrors(e)
    setTouched({ name: true, email: true, phone: true, message: true })
    return Object.values(e).every((v) => v === "")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateAll()) return

    setStatus("loading")
    setStatusMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const result = await response.json()

      if (result.success) {
        setStatus("success")
        setStatusMessage(result.message)
        setFormData({ name: "", email: "", phone: "", service: "Mutual Funds", message: "" })
        setTouched({})
        setErrors({})
      } else {
        setStatus("error")
        setStatusMessage(result.message || "Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setStatusMessage("Network error. Please check your connection and try again.")
    }
  }

  const inputBase =
    "w-full px-4 py-3 bg-slate-900/80 border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all duration-200 text-sm"
  const inputNormal = `${inputBase} border-slate-700 focus:border-emerald-500 focus:ring-emerald-500/50`
  const inputError = `${inputBase} border-red-500/60 focus:border-red-500 focus:ring-red-500/30 bg-red-950/10`

  const getInputClass = (field: string) =>
    touched[field] && errors[field] ? inputError : inputNormal

  return (
    <main>
      <PageHeader title="Get in Touch" subtitle="We're here to help with any questions or investment needs" />

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* ── Contact Form ── */}
            <div className="lg:col-span-2">
              <div className="card-dark p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

                <h2 className="text-2xl font-bold text-white mb-2">Send us a Message</h2>
                <p className="text-slate-400 text-sm mb-8">
                  Looking for a trusted <strong className="text-slate-300">mutual fund advisor in Janakpuri, Delhi</strong>? 
                  Fill in your details below and we'll get back to you within 24 hours to discuss your financial goals.
                </p>

                {/* Status banners */}
                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: -10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-start space-x-3 bg-emerald-600/10 border border-emerald-600/30 rounded-xl p-4 mb-6"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-emerald-400 font-semibold text-sm">Message sent successfully!</p>
                        <p className="text-emerald-300/80 text-sm mt-0.5">{statusMessage}</p>
                      </div>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: -10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-start space-x-3 bg-red-600/10 border border-red-600/30 rounded-xl p-4 mb-6"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-red-400 font-semibold text-sm">Unable to send message</p>
                        <p className="text-red-300/80 text-sm mt-0.5">{statusMessage}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Full Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        onBlur={() => handleBlur("name")}
                        className={getInputClass("name")}
                        placeholder="Your full name"
                      />
                      <AnimatePresence><FieldError msg={touched.name ? errors.name || "" : ""} /></AnimatePresence>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Email Address <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        className={getInputClass("email")}
                        placeholder="your@email.com"
                      />
                      <AnimatePresence><FieldError msg={touched.email ? errors.email || "" : ""} /></AnimatePresence>
                    </div>
                  </div>

                  {/* Phone + Service */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Phone — with country code prefix */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Phone Number <span className="text-emerald-400">*</span>
                      </label>
                      <div className="relative">
                        {/* Country code badge */}
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center space-x-2 select-none pointer-events-none z-10">
                          <span className="text-lg leading-none">🇮🇳</span>
                          <span className="text-slate-300 font-semibold text-sm">+91</span>
                          <span className="w-px h-4 bg-slate-600" />
                        </div>
                        <input
                          type="tel"
                          autoComplete="tel"
                          inputMode="numeric"
                          value={formData.phone.replace(/^\+91\s?/, "").replace(/^91/, "")}
                          onChange={(e) => {
                            const raw = e.target.value.replace(/\D/g, "").slice(0, 10)
                            const digits = raw.replace(/\D/g, "")
                            const p1 = digits.slice(0, 5)
                            const p2 = digits.slice(5, 10)
                            const formatted = `+91 ${p1}${p2 ? " " + p2 : ""}`
                            setFormData((prev) => ({ ...prev, phone: formatted.trim() }))
                            if (touched.phone) {
                              setErrors((prev) => ({ ...prev, phone: validatePhone(formatted) }))
                            }
                          }}
                          onBlur={() => handleBlur("phone")}
                          className={`${getInputClass("phone")} pl-20`}
                          placeholder="98765 43210"
                          maxLength={12}
                        />
                      </div>
                      {/* Phone hints */}
                      {!errors.phone && (
                        <p className="mt-1.5 text-xs text-slate-500">Enter your 10-digit mobile number</p>
                      )}
                      <AnimatePresence><FieldError msg={touched.phone ? errors.phone || "" : ""} /></AnimatePresence>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Service of Interest <span className="text-emerald-400">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className={`${inputNormal} appearance-none cursor-pointer`}
                      >
                        <option value="Mutual Funds">Mutual Funds</option>
                        <option value="SIP Planning">SIP Planning</option>
                        <option value="Lumpsum Investment">Lumpsum Investment</option>
                        <option value="SWP Planning">SWP Planning</option>
                        <option value="Insurance">Insurance</option>
                        <option value="Portfolio Review">Portfolio Review</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Message <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      rows={5}
                      className={`${getInputClass("message")} resize-none`}
                      placeholder="Tell us about your investment goals or any questions you have…"
                    />
                    <div className="flex items-center justify-between mt-1">
                      <AnimatePresence>
                        <FieldError msg={touched.message ? errors.message || "" : ""} />
                      </AnimatePresence>
                      <span className={`text-xs ml-auto ${formData.message.length > 450 ? "text-amber-400" : "text-slate-600"}`}>
                        {formData.message.length}/500
                      </span>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed text-base py-3.5"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Sending…</span>
                      </>
                    ) : (
                      <>
                        <Send size={17} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    By submitting, you agree to be contacted by Khorwal Financials regarding your enquiry.
                    Your data is safe and never shared.
                  </p>
                </form>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-4">
              {[
                { icon: MapPin, title: "Our Office", content: companyData.contact.address, link: null },
                { icon: Phone, title: "Phone", content: companyData.contact.phone, link: `tel:${companyData.contact.phone}` },
                { icon: Mail, title: "Email", content: companyData.contact.email, link: `mailto:${companyData.contact.email}` },
                { icon: Clock, title: "Working Hours", content: companyData.workingHours, link: null },
              ].map(({ icon: Icon, title, content, link }) => (
                <motion.div
                  key={title}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                  className="card-dark p-5 hover:border-emerald-600/40 transition-colors duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm mb-1">{title}</h3>
                      {link ? (
                        <a href={link} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors leading-relaxed">
                          {content}
                        </a>
                      ) : (
                        <p className="text-sm text-slate-400 leading-relaxed">{content}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              <a
                href="https://wa.me/919911186409"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center space-x-2 w-full text-sm py-3.5"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-slate-800/20">
        <div className="container">
          <h2 className="text-2xl font-bold text-white mb-6">Find Us Here</h2>
          <div className="rounded-xl overflow-hidden border border-slate-700/60 h-80 md:h-96">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3844166097276!2d77.08070012346942!3d28.517773874549666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdf8c8c8c8c8d%3A0x8c8c8c8c8c8c8c8c!2sSagar%20Tower%2C%20Janakpuri%2C%20Delhi!5e0!3m2!1sen!2sin!4v1707396000000"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Khorwal Financials Office — Sagar Tower, Janakpuri, Delhi"
            />
          </div>
          <p className="text-slate-500 text-sm mt-4 text-center">
            Sagar Tower, 6th Floor, Above SBI, Near Gate No. 3 of Janakpuri Metro Station, District Centre, Janakpuri, Delhi - 110058
          </p>
        </div>
      </section>
    </main>
  )
}
