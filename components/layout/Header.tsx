"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { companyData } from "@/constants/data"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
    { name: "Calculators", href: "/calculators" },
  ]

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
            <span className="text-white font-bold text-lg">GM</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-bold text-white text-sm leading-tight">Grow Money</h1>
            <p className="text-xs text-emerald-400">Investment Services</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-slate-300 hover:text-emerald-400 transition-colors font-medium text-sm"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <a
            href={`tel:${companyData.contact.phone}`}
            className="hidden md:flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <Phone size={18} />
            <span className="text-sm font-medium">{companyData.contact.phone}</span>
          </a>

          {/* Desktop CTA Button */}
          <button className="hidden md:block btn-primary">Start Investing</button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-800/95 backdrop-blur-md border-b border-slate-700 py-4">
          <div className="container space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-slate-300 hover:text-emerald-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-700 space-y-3">
              <a href={`tel:${companyData.contact.phone}`} className="block btn-primary text-center">
                Call Now
              </a>
              <button className="w-full btn-secondary">Start Investing</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
