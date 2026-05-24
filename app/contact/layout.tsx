import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Contact Us — Free Mutual Fund Consultation",
  description:
    "Get in touch with Khorwal Financials for a free, no-obligation mutual fund consultation. Call +91 9911186409 or visit us at Sagar Tower, Janakpuri, Delhi. AMFI Registered Distributor ARN-154187.",
  keywords:
    "contact Khorwal Financials, mutual fund consultation Delhi, free investment advice, financial advisor contact, Janakpuri investment advisor, Suman Khorwal phone",
  alternates: { canonical: "https://khorwalfinancials.com/contact" },
  openGraph: {
    title: "Contact Khorwal Financials — Free Investment Consultation",
    description:
      "Speak directly with Suman Khorwal, AMFI-registered advisor. Free first consultation. +91 9911186409 | Sagar Tower, Janakpuri, Delhi.",
    url: "https://khorwalfinancials.com/contact",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
