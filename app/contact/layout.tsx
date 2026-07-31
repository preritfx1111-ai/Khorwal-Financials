import type React from "react"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Contact Us — Expert Mutual Fund Advisory in Delhi",
  description:
    "Get in touch with Khorwal Financials for expert SIP planning and mutual fund advisory. Visit our office in Rohini, Delhi, or call us at +91-9911186409. AMFI Registered ARN-154187.",
  path: "/contact",
  keywords: [
    "contact Khorwal Financials",
    "financial advisor Delhi phone number",
    "mutual fund distributor Rohini address",
    "SIP planning consultation",
    "Suman Khorwal contact",
  ],
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
