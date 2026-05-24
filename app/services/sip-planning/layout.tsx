import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "SIP Planning Delhi — Systematic Investment Plan Advisory",
  description:
    "Start a Systematic Investment Plan (SIP) with as little as ₹500/month. Expert SIP planning by Khorwal Financials — goal-based, risk-profiled, regularly monitored. AMFI Registered ARN-154187.",
  keywords:
    "SIP planning Delhi, systematic investment plan, SIP advisor, start SIP online, SIP calculator, SIP returns, monthly investment plan India, SIP mutual fund",
  alternates: { canonical: "https://khorwalfinancials.com/services/sip-planning" },
  openGraph: {
    title: "SIP Planning — Systematic Investment Plan Advisory | Khorwal Financials",
    description: "Start your SIP journey with expert guidance. Goal-based SIP planning from ₹500/month. AMFI registered advisor ARN-154187.",
    url: "https://khorwalfinancials.com/services/sip-planning",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
