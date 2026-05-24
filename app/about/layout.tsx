import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "About Khorwal Financials — Our Story, Mission & Values",
  description:
    "Learn about Khorwal Financials — founded by AMFI-registered advisor Suman Khorwal. Discover our mission to provide transparent, client-first mutual fund advisory to families across India. ARN-154187.",
  keywords:
    "about Khorwal Financials, Suman Khorwal advisor, AMFI registered mutual fund, financial advisory mission, transparent investment advisor Delhi, mutual fund distributor story",
  alternates: { canonical: "https://khorwalfinancials.com/about" },
  openGraph: {
    title: "About Khorwal Financials — Mission, Values & Our Story",
    description:
      "Founded on transparency and integrity. Khorwal Financials helps 150+ Indian families build wealth through disciplined, goal-based investing. AMFI Registered ARN-154187.",
    url: "https://khorwalfinancials.com/about",
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
