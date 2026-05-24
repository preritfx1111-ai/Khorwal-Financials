import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Lumpsum Investment Planning Delhi — One-Time Mutual Fund Advisory",
  description:
    "Invest your lumpsum amount strategically in mutual funds. Expert guidance on fund selection, market timing, and tax optimization. Khorwal Financials — AMFI Registered ARN-154187.",
  keywords:
    "lumpsum investment mutual fund, one-time investment planning, lumpsum fund selection, invest bonus mutual fund, lumpsum vs SIP, lumpsum advisor Delhi",
  alternates: { canonical: "https://khorwalfinancials.com/services/lumpsum-investment" },
  openGraph: {
    title: "Lumpsum Investment Advisory — Khorwal Financials",
    description: "Deploy your lumpsum strategically. Expert mutual fund selection & tax optimization. AMFI Registered ARN-154187.",
    url: "https://khorwalfinancials.com/services/lumpsum-investment",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
