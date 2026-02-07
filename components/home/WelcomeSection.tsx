"use client";

import { companyData } from "@/constants/data";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function WelcomeSection() {
  const points = [
    "AMFI Registered Mutual Fund Distributor",
    "10+ Years of Proven Experience",
    "Personalized Investment Strategies",
    "Goal-Based Planning Approach",
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
              <img
                src={
                  companyData.owner.image ||
                  "/placeholder.svg?height=400&width=300&query=founder-professional-portrait" ||
                  "/placeholder.svg"
                 || "/placeholder.svg"}
                alt="Suman Khorwal"
                className="rounded-2xl border border-slate-700 w-full relative z-10"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Welcome to Grow Money Investment Services
            </h2>

            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              At Grow Money, we believe that wealth creation is not just about
              making money—it's about building a secure financial future for you
              and your loved ones. Founded by Suman Khorwal, our firm
              has grown from a single-person consultancy to a trusted partner
              for over 150+ happy families across India.
            </p>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Our journey began with a simple mission: to democratize access to
              professional financial advice and make mutual fund investments
              accessible to every Indian. What sets us apart is our unwavering
              commitment to transparency and your interests.
            </p>

            <div className="space-y-4 mb-8">
              {points.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300 font-medium">{point}</span>
                </motion.div>
              ))}
            </div>

            <a href="/about" className="btn-primary inline-block">Know More About Us</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
