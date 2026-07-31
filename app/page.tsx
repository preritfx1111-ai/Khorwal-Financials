import type { Metadata } from "next"
import HeroSection from "@/components/home/HeroSection"
import WelcomeSection from "@/components/home/WelcomeSection"
import ServicesGrid from "@/components/home/ServicesGrid"
import StatsCounter from "@/components/home/StatsCounter"
import QuickLinksSection from "@/components/home/QuickLinksSection"
import PartnersSection from "@/components/home/PartnersSection"
import TestimonialsSection from "@/components/home/TestimonialsSection"
import CTASection from "@/components/home/CTASection"

export const metadata: Metadata = {
  title: "Khorwal Financials — Trusted Mutual Fund Advisor in Delhi | ARN-154187",
  description:
    "Khorwal Financials is an AMFI-registered mutual fund distributor (ARN-154187) based in Rohini, Delhi. Expert SIP planning, lumpsum investment, portfolio review, and wealth management. Trusted by 150+ happy investors. Start your SIP from ₹500/month.",
  alternates: { canonical: "https://khorwalfinancials.com" },
  openGraph: {
    title: "Khorwal Financials — Expert Mutual Fund Advisory in Delhi",
    description:
      "AMFI-registered advisor. Expert SIP planning, mutual fund investment & portfolio management in Delhi. ARN-154187. 150+ happy clients.",
    url: "https://khorwalfinancials.com",
  },
}

export default function Home() {
  return (
    <main>
      {/* HeroSection includes the StockMarketTicker pinned at its bottom */}
      <HeroSection />
      <WelcomeSection />
      <ServicesGrid />
      <StatsCounter />
      <QuickLinksSection />
      <PartnersSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
