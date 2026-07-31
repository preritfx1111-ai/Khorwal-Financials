"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { partners } from "@/constants/data"

export default function PartnersSection() {
  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners]

  return (
    <section className="py-20 overflow-hidden relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-2">
            Institutional Ecosystem
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Our Partners & AMCs
          </h2>
          <p className="text-lg text-slate-400">
            Authorized distributor for India&apos;s leading Asset Management Companies
          </p>
        </motion.div>
      </div>

      {/* Streamlined Luminous Partner Track (Non-Card Pattern) */}
      <div className="streamlined-ribbon relative">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 pointer-events-none bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 pointer-events-none bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent" />

        {/* Row 1 - scrolls left */}
        <div className="marquee-track mb-6">
          <div className="marquee-content marquee-animate-left">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 w-[220px] h-[76px] px-6 mx-4 flex items-center justify-center rounded-2xl bg-white/95 hover:bg-white transition-all duration-300 group hover:scale-105 shadow-md"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={56}
                  className="object-contain max-h-[50px] w-full transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - scrolls right */}
        <div className="marquee-track">
          <div className="marquee-content marquee-animate-right">
            {[...duplicatedPartners].reverse().map((partner, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 w-[220px] h-[76px] px-6 mx-4 flex items-center justify-center rounded-2xl bg-white/95 hover:bg-white transition-all duration-300 group hover:scale-105 shadow-md"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={56}
                  className="object-contain max-h-[50px] w-full transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
