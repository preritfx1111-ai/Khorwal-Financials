import HeroSection from "@/components/home/HeroSection"
import StockMarketTicker from "@/components/home/StockMarketTicker"
import WelcomeSection from "@/components/home/WelcomeSection"
import ServicesGrid from "@/components/home/ServicesGrid"
import StatsCounter from "@/components/home/StatsCounter"
import QuickLinksSection from "@/components/home/QuickLinksSection"
import PartnersSection from "@/components/home/PartnersSection"
import TestimonialsSection from "@/components/home/TestimonialsSection"
import CTASection from "@/components/home/CTASection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StockMarketTicker />
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
