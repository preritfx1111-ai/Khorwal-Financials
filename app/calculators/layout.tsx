import type React from "react"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Mutual Fund SIP & SWP Calculators — Plan Your Wealth",
  description:
    "Free mutual fund calculators from Khorwal Financials. Estimate your returns with our SIP calculator, Lumpsum calculator, and SWP (Systematic Withdrawal Plan) calculator. Plan your financial goals today.",
  path: "/calculators",
  keywords: [
    "SIP calculator",
    "lumpsum calculator",
    "SWP calculator",
    "mutual fund return calculator",
    "investment calculator India",
    "SIP future value",
    "retirement calculator",
  ],
})

export default function CalculatorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
