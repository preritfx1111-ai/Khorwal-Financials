import type React from "react"
import { buildMetadata, buildBreadcrumbsJsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Portfolio Review & Rebalancing — Optimize Your Investments",
  description:
    "Get a comprehensive portfolio review by Khorwal Financials. We analyze your current holdings, benchmark performance, and optimize your asset allocation. ARN-154187.",
  path: "/services/portfolio-review",
  keywords: [
    "portfolio review Delhi",
    "portfolio rebalancing service",
    "mutual fund portfolio analysis",
    "investment optimization Rohini, Delhi",
    "portfolio advisor Rohini, Delhi",
    "quarterly portfolio review",
  ],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = buildBreadcrumbsJsonLd([
    { name: "Home", item: "/" },
    { name: "Services", item: "/#services" },
    { name: "Portfolio Review", item: "/services/portfolio-review" },
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
