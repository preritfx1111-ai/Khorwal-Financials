import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Mutual Fund Investment Advisory Delhi — Direct Plans & Portfolio Management",
  description:
    "Expert mutual fund investment advisory by Khorwal Financials. Access direct plans, ELSS tax saving, equity, debt, and hybrid funds. AMFI registered ARN-154187. Start with ₹500 SIP.",
  keywords:
    "mutual fund investment Delhi, direct mutual fund plans, ELSS tax saving, equity mutual fund, debt fund, hybrid fund, mutual fund advisor ARN-154187, portfolio management",
  alternates: { canonical: "https://khorwalfinancials.com/services/mutual-funds" },
  openGraph: {
    title: "Mutual Fund Investment Advisory — Khorwal Financials",
    description: "Direct mutual fund plans, zero commission, ELSS, equity & debt funds. Expert advisory by AMFI-registered distributor. Start with ₹500.",
    url: "https://khorwalfinancials.com/services/mutual-funds",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
