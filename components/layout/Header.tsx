"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { services } from "@/constants/data"
import * as Icons from "lucide-react"

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

          <div className="relative group">
            <button className="flex items-center space-x-1 text-slate-300 hover:text-emerald-400 transition-colors font-medium text-sm">
              <span>Services</span>
              <ChevronDown size={16} />
            </button>

            {/* Dropdown menu */}
            <div className="absolute left-0 mt-0 w-80 bg-slate-800/95 backdrop-blur-md border border-slate-700 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 shadow-lg">
              {services.map((service) => {
                const IconComponent = getIconComponent(service.icon)
                return (
                  <Link
                    key={service.id}
                    href="#"
                    className="block px-4 py-3 hover:bg-slate-700/50 transition-colors border-b border-slate-700 last:border-b-0"
                  >
                    <div className="flex items-start space-x-3">
                      <IconComponent className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-white text-sm">{service.title}</p>
                        <p className="text-xs text-slate-400 line-clamp-1">{service.description.substring(0, 50)}...</p>
                      </div>
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
          className="lg:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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

            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full flex items-center justify-between text-slate-300 hover:text-emerald-400 transition-colors py-2"
            >
              <span>Services</span>
              <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {isServicesOpen && (
              <div className="pl-4 space-y-3 border-l border-slate-700 py-2">
                {services.map((service) => {
                  const IconComponent = getIconComponent(service.icon)
                  return (
                    <Link
                      key={service.id}
                      href="#"
                      className="flex items-start space-x-2 text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <IconComponent className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{service.title}</span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
