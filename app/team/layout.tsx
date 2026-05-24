import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Meet Suman Khorwal — AMFI Registered Mutual Fund Advisor",
  description:
    "Meet Suman Khorwal, founder of Khorwal Financials and AMFI-registered mutual fund distributor (ARN-154187). 7+ years of experience helping 150+ families achieve financial independence through disciplined investing.",
  keywords:
    "Suman Khorwal, AMFI registered advisor, mutual fund distributor Delhi, ARN-154187, financial advisor Janakpuri, NISM certified, investment advisor profile",
  alternates: { canonical: "https://khorwalfinancials.com/team" },
  openGraph: {
    title: "Suman Khorwal — AMFI Registered Mutual Fund Distributor ARN-154187",
    description:
      "7+ years of experience. NISM certified. AMFI registered. Helping 150+ families build wealth through goal-based, transparent investing.",
    url: "https://khorwalfinancials.com/team",
  },
}

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
