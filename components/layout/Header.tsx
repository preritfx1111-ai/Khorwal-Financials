"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { services } from "@/constants/data"
import * as Icons from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Service route mapping
const serviceRoutes: Record<number, string> = {
  1: "/services/mutual-funds",
  2: "/services/sip-planning",
  3: "/services/lumpsum-investment",
  4: "/services/swp-systematic-withdrawal",
  5: "/services/insurance-planning",
  6: "/services/portfolio-review",
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
    setIsServicesOpen(false)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
    { name: "Calculators", href: "/calculators" },
  ]

  const getIconComponent = (iconName: string) => {
    return (Icons as any)[iconName] || Icons.TrendingUp
  }

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-slate-700/50"
        : "bg-transparent"
        }`}
    >
      <div className="container flex items-center justify-between h-24 mt-2">
        {/* Logo — image only, no text */}
        {/* <Link href="/" className="flex items-center group" aria-label="Khorwal Financials — Home">
          <div className="relative h-24 w-40 sm:h-20 sm:w-88 overflow-hidden group-hover:opacity-90 transition-opacity duration-300">
            <Image
              src="/logo.png"
              alt="Khorwal Financials"
              fill
              // className="object-contain scale-175"
              className="object-contain"
              priority
            />
          </div>
        </Link> */}
        <Link href="/" className="flex items-center mt-2">
          <Image
            src="/logo.png"
            alt="Khorwal Financials"
            width={220}
            height={100}
            // className="h-auto w-auto"
            priority
          />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-slate-300 hover:text-emerald-400 transition-colors font-medium text-sm group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}

          {/* Services dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 text-slate-300 hover:text-emerald-400 transition-colors font-medium text-sm">
              <span>Services</span>
              <ChevronDown size={15} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>

            {/* Dropdown */}
            <div className="absolute right-0 mt-2 w-80 bg-slate-800/98 backdrop-blur-xl border border-slate-700/80 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 shadow-2xl shadow-black/40 translate-y-1 group-hover:translate-y-0">
              {services.map((service, i) => {
                const IconComponent = getIconComponent(service.icon)
                return (
                  <Link
                    key={service.id}
                    href={serviceRoutes[service.id] ?? "#"}
                    className="flex items-start space-x-3 px-4 py-3 hover:bg-slate-700/60 transition-colors border-b border-slate-700/50 last:border-b-0"
                  >
                    <div className="w-8 h-8 bg-emerald-600/15 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{service.title}</p>
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{service.description.substring(0, 55)}…</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 hover:bg-slate-800/80 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X size={24} className="text-white" />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Menu size={24} className="text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-b border-slate-700/60 overflow-hidden"
          >
            <div className="container py-4 space-y-1">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="block text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60 transition-colors py-3 px-3 rounded-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Services accordion */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navigation.length * 0.05 }}
              >
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex items-center justify-between text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60 transition-colors py-3 px-3 rounded-lg font-medium"
                >
                  <span>Services</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180 text-emerald-400" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-3 pl-3 border-l border-slate-700 space-y-1 py-2">
                        {services.map((service) => {
                          const IconComponent = getIconComponent(service.icon)
                          return (
                            <Link
                              key={service.id}
                              href={serviceRoutes[service.id] ?? "#"}
                              className="flex items-center space-x-3 text-slate-400 hover:text-emerald-400 transition-colors text-sm py-2 px-2 rounded-lg hover:bg-slate-800/60"
                              onClick={() => { setIsOpen(false); setIsServicesOpen(false) }}
                            >
                              <IconComponent className="w-4 h-4 flex-shrink-0 text-emerald-500/70" />
                              <span>{service.title}</span>
                            </Link>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
