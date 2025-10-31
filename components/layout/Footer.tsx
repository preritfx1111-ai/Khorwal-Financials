import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react"
import { companyData } from "@/constants/data"

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GM</span>
              </div>
              <h3 className="text-white font-bold text-lg">Grow Money</h3>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Your trusted partner in wealth creation. Professional financial advisory services for long-term
              prosperity.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Facebook, href: companyData.socialMedia.facebook },
                { icon: Twitter, href: companyData.socialMedia.twitter },
                { icon: Instagram, href: companyData.socialMedia.instagram },
                { icon: Linkedin, href: companyData.socialMedia.linkedin },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors text-slate-300 hover:text-white"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Team", href: "/team" },
                { name: "Contact", href: "/contact" },
                { name: "Calculators", href: "/calculators" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-emerald-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {[
                "Mutual Funds",
                "SIP Planning",
                "Lumpsum Investment",
                "SWP Planning",
                "Insurance",
                "Portfolio Review",
              ].map((service) => (
                <li key={service} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex space-x-2">
                <MapPin size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{companyData.contact.address}</span>
              </li>
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
            <div className="mt-4 text-xs text-slate-500">
              <p>Working Hours: {companyData.workingHours}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-500 text-sm text-center md:text-left">
              © 2025 Grow Money Investment Services. All rights reserved.
            </div>
            <div className="flex space-x-6 text-slate-500 text-sm">
              <Link href="#" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-emerald-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-emerald-400 transition-colors">
                Disclaimer
              </Link>
            </div>
            <div className="text-slate-500 text-xs">AMFI Registration: {companyData.registration.amfi}</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
