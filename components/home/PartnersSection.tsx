"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { partners } from "@/constants/data"

export default function PartnersSection() {
  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners]

  return (
    <section className="py-20 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Partners</h2>
          <p className="text-xl text-slate-400">Trusted by India&apos;s leading AMCs</p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-slate-900 to-transparent" />
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-slate-900 to-transparent" />

        {/* Row 1 - scrolls left */}
        <div className="marquee-track mb-4">
          <div className="marquee-content marquee-animate-left">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`row1-${index}`}
                className="marquee-item-logo group"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={220}
                  height={70}
                  className="object-contain max-h-[70px] w-full transition-transform duration-300 group-hover:scale-110"
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
                className="marquee-item-logo group"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={220}
                  height={70}
                  className="object-contain max-h-[70px] w-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
