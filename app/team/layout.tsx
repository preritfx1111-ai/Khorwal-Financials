import type React from "react"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Meet Suman Khorwal — AMFI Registered Mutual Fund Advisor",
  description:
    "Meet Suman Khorwal and the expert team at Khorwal Financials. With over 7 years of experience, we've helped 150+ families build wealth through goal-based, transparent investing.",
  path: "/team",
  keywords: [
    "Suman Khorwal advisor",
    "financial advisory team",
    "investment analysts Delhi",
    "mutual fund experts",
    "portfolio management team",
  ],
})

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
