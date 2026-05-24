import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Insurance Planning Delhi — Term, Health & Life Insurance Advisory",
  description:
    "Protect your family's future with comprehensive insurance planning. Expert guidance on term insurance, health coverage, and investment-linked policies. Khorwal Financials — AMFI Registered ARN-154187.",
  keywords:
    "insurance planning Delhi, term insurance advisor, health insurance guidance, life insurance planning, insurance advisor Janakpuri, financial protection planning",
  alternates: { canonical: "https://khorwalfinancials.com/services/insurance-planning" },
  openGraph: {
    title: "Insurance Planning — Protect Your Family's Future | Khorwal Financials",
    description: "Expert term & health insurance guidance. Comprehensive protection planning for every life stage. AMFI Registered ARN-154187.",
    url: "https://khorwalfinancials.com/services/insurance-planning",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
