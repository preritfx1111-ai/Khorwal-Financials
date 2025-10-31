import HeroSection from "@/components/home/HeroSection"
import MarqueeSection from "@/components/home/MarqueeSection"
import WelcomeSection from "@/components/home/WelcomeSection"
import ServicesGrid from "@/components/home/ServicesGrid"
import StatsCounter from "@/components/home/StatsCounter"
import QuickLinksSection from "@/components/home/QuickLinksSection"
import PartnersSection from "@/components/home/PartnersSection"
import CTASection from "@/components/home/CTASection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MarqueeSection />
      <WelcomeSection />
      <ServicesGrid />
      <StatsCounter />
      <QuickLinksSection />
      <PartnersSection />
      <CTASection />
    </main>
  )
}
