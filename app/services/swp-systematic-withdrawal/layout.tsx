import type React from "react"
import { buildMetadata, buildBreadcrumbsJsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "SWP Planning — Systematic Withdrawal Plan for Retirement Income",
  description:
    "Generate regular monthly income in retirement through Systematic Withdrawal Plans (SWP). Expert planning by Khorwal Financials to ensure sustainable cash flow. ARN-154187.",
  path: "/services/swp-systematic-withdrawal",
  keywords: [
    "SWP planning Delhi",
    "systematic withdrawal plan advisor",
    "retirement income mutual fund",
    "monthly income from mutual fund",
    "SWP advisor Rohini, Delhi",
    "retirement planning India",
  ],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = buildBreadcrumbsJsonLd([
    { name: "Home", item: "/" },
    { name: "Services", item: "/#services" },
    { name: "SWP Planning", item: "/services/swp-systematic-withdrawal" },
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
