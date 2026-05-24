import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react"
import { companyData } from "@/constants/data"

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80">
      <div className="container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo — image only, no text */}
            <Link href="/" className="block mb-5 w-fit" aria-label="Khorwal Financials">
              <div className="relative h-14 w-52 hover:opacity-90 transition-opacity duration-300">
                <Image
                  src="/logo.png"
                  alt="Khorwal Financials"
                  fill
                  className="object-cover object-left"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed max-w-xs">
              Your trusted partner in wealth creation. Professional mutual fund advisory with integrity, transparency, and a client-first approach.
            </p>
            <div className="flex space-x-2">
              {[
                { icon: Facebook, href: companyData.socialMedia.facebook, label: "Facebook" },
                { icon: Twitter, href: companyData.socialMedia.twitter, label: "Twitter" },
                { icon: Instagram, href: companyData.socialMedia.instagram, label: "Instagram" },
                { icon: Linkedin, href: companyData.socialMedia.linkedin, label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-all duration-200 text-slate-400 hover:text-white hover:scale-105"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-slate-400 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Team", href: "/team" },
                { name: "Contact", href: "/contact" },
                { name: "Calculators", href: "/calculators" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-emerald-400 group-hover:w-3 transition-all duration-300 inline-block" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-slate-400 text-sm">
              {[
                { name: "Mutual Funds", href: "/services/mutual-funds" },
                { name: "SIP Planning", href: "/services/sip-planning" },
                { name: "Lumpsum Investment", href: "/services/lumpsum-investment" },
                { name: "SWP Planning", href: "/services/swp-systematic-withdrawal" },
                { name: "Insurance", href: "/services/insurance-planning" },
                { name: "Portfolio Review", href: "/services/portfolio-review" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-emerald-400 group-hover:w-3 transition-all duration-300 inline-block" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={15} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{companyData.contact.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={15} className="text-emerald-500 flex-shrink-0" />
                <a href={`tel:${companyData.contact.phone}`} className="hover:text-emerald-400 transition-colors">
                  {companyData.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={15} className="text-emerald-500 flex-shrink-0" />
                <a href={`mailto:${companyData.contact.email}`} className="hover:text-emerald-400 transition-colors break-all">
                  {companyData.contact.email}
                </a>
              </li>
            </ul>
            <div className="mt-4 text-xs text-slate-600">
              <p>{companyData.workingHours}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/80 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 text-xs text-center md:text-left">
              © {new Date().getFullYear()} Khorwal Financials. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-slate-500 text-xs">
              <Link href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-emerald-400 transition-colors">Disclaimer</Link>
            </div>
            <div className="text-slate-600 text-xs font-medium">AMFI Registration: {companyData.registration.amfi}</div>
          </div>
          <p className="text-slate-700 text-xs mt-4 text-center leading-relaxed max-w-3xl mx-auto">
            Mutual fund investments are subject to market risks. Please read all scheme related documents carefully before investing. Past performance is not indicative of future returns.
          </p>
        </div>
      </div>
    </footer>
  )
}
