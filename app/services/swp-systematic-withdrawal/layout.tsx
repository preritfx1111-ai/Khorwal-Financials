import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "SWP Planning — Systematic Withdrawal Plan for Retirement Income",
  description:
    "Generate regular monthly income in retirement through Systematic Withdrawal Plans (SWP). Expert SWP planning by Khorwal Financials to sustain your corpus while ensuring consistent cash flow. ARN-154187.",
  keywords:
    "SWP planning, systematic withdrawal plan, retirement income mutual fund, monthly income from mutual fund, SWP advisor Delhi, retirement planning mutual fund",
  alternates: { canonical: "https://khorwalfinancials.com/services/swp-systematic-withdrawal" },
  openGraph: {
    title: "SWP Planning — Retirement Income from Mutual Funds | Khorwal Financials",
    description: "Generate regular monthly retirement income through SWP. Expert planning to preserve your corpus. AMFI Registered ARN-154187.",
    url: "https://khorwalfinancials.com/services/swp-systematic-withdrawal",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
