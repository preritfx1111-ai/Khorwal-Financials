"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import StockMarketTicker from "./StockMarketTicker"

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.25,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.85 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <>
      {/*
        The hero section is full-screen height (100svh).
        The ticker is INSIDE the section, pinned to the bottom via flex layout,
        so it is always visible on first load regardless of device.
      */}
      <section className="relative flex flex-col overflow-hidden" style={{ minHeight: "100svh" }}>
        {/* ── Background layers ── */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-slate-900 to-blue-950/30 pointer-events-none" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-emerald-600/6 rounded-full blur-[140px]" />
          <div className="absolute bottom-32 right-1/4 w-[400px] h-[400px] bg-blue-600/6 rounded-full blur-[120px]" />
        </div>

        {/* ── Main content — grows to fill available space ── */}
        <div className="container relative z-10 flex-1 flex items-center pt-20 lg:pt-24 pb-6">
          <div className="w-full grid lg:grid-cols-2 gap-8 xl:gap-10 items-center">

            {/* LEFT: Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="order-2 lg:order-1"
            >
              <motion.div variants={itemVariants} className="mb-6">
                <div className="inline-flex items-center space-x-2 bg-emerald-600/20 border border-emerald-600/40 rounded-full px-4 py-2 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-emerald-400 text-sm font-medium">Trusted by 150+ Happy Investors</span>
                </div>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-7xl font-bold text-white mb-6 leading-[1.08] tracking-tight"
              >
                Grow Your Wealth{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                  with Expert
                </span>{" "}
                Financial Guidance
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl"
              >
                Professional Mutual Fund Advisory • SIP Planning • Wealth Management
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="bg-slate-800/60 border border-slate-700/80 rounded-xl p-4 mb-8 backdrop-blur-sm"
              >
                <div className="flex flex-wrap gap-x-5 gap-y-2 items-center justify-center sm:justify-start">
                  {["Goal-Based Planning", "7+ Years Experience", "AMFI Registered"].map((item, i) => (
                    <span key={item} className="flex items-center gap-2 text-sm">
                      {i > 0 && <span className="text-slate-600 hidden sm:inline">•</span>}
                      <span className="text-emerald-400 font-semibold">{item}</span>
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <a
                  href="http://p.njw.bz/84811"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group flex items-center justify-center space-x-2 text-base"
                >
                  <span>Start SIP Investment</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <a
                  href="https://wa.me/919911186409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center justify-center space-x-2 text-base"
                >
                  <span>Schedule Free Consultation</span>
                  <ArrowRight size={18} />
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT: Hero Image — maximally scaled */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="hidden lg:flex relative order-1 lg:order-2 items-center justify-center"
            >
              {/* Ambient glow */}
              <div className="absolute inset-0 bg-gradient-radial from-emerald-500/15 via-transparent to-transparent blur-3xl scale-110 pointer-events-none" />

              {/* Pulsing ring */}
              <motion.div
                className="absolute w-[110%] h-[110%] rounded-full border border-emerald-500/8"
                animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Floating orb — top right */}
              <motion.div
                className="absolute -top-6 -right-6 w-40 h-40 sm:w-64 sm:h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
                animate={{ y: [0, -22, 0], scale: [1, 1.14, 1] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Floating orb — bottom left */}
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 sm:w-52 sm:h-52 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
                animate={{ y: [0, 22, 0], scale: [1, 1.18, 1] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              />

              {/* Main illustration — fills the full column width */}
              <motion.div
                className="relative z-10 w-full"
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/hero-section-image.png"
                  alt="Khorwal Financials — Investment Portfolio Growth Visualization"
                  width={1400}
                  height={1050}
                  className="w-full h-auto object-contain drop-shadow-[0_40px_80px_rgba(16,185,129,0.28)] scale-105 lg:scale-110"
                  priority
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </motion.div>
            </motion.div>

          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-16 left-0 right-0 h-20 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none z-10" />

        {/* ── Ticker — pinned to the bottom of the hero section, always visible on first load ── */}
        <div className="relative z-20 w-full">
          <StockMarketTicker />
        </div>
      </section>
    </>
  )
}
