import type React from "react"
import { buildMetadata, buildBreadcrumbsJsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "SIP Planning Delhi — Systematic Investment Plan Advisory",
  description:
    "Build wealth systematically through expert SIP planning. Determine the right investment amount and fund selection based on your life goals. Start investing from ₹500/month. ARN-154187.",
  path: "/services/sip-planning",
  keywords: [
    "SIP planning Delhi",
    "systematic investment plan advisor",
    "start SIP Rohini, Delhi",
    "power of compounding India",
    "goal-based SIP planning",
    "best SIP for retirement",
  ],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = buildBreadcrumbsJsonLd([
    { name: "Home", item: "/" },
    { name: "Services", item: "/#services" },
    { name: "SIP Planning", item: "/services/sip-planning" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
