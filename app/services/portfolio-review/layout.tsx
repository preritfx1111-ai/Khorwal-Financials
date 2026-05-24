import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Portfolio Review & Rebalancing — Optimize Your Investments",
  description:
    "Get a comprehensive portfolio review and strategic rebalancing by Khorwal Financials. We analyze your current holdings, benchmark performance, and optimize your asset allocation for long-term goals. ARN-154187.",
  keywords:
    "portfolio review Delhi, portfolio rebalancing service, mutual fund portfolio analysis, investment optimization, portfolio advisor, asset allocation review, quarterly portfolio review",
  alternates: { canonical: "https://khorwalfinancials.com/services/portfolio-review" },
  openGraph: {
    title: "Portfolio Review & Rebalancing — Khorwal Financials",
    description: "Expert portfolio analysis & rebalancing. Align your investments with your goals. Quarterly reviews included. AMFI Registered ARN-154187.",
    url: "https://khorwalfinancials.com/services/portfolio-review",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
