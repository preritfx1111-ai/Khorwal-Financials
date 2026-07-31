import type React from "react"
import { buildMetadata, buildBreadcrumbsJsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Lumpsum Investment Planning — Strategic One-Time Advisory",
  description:
    "Invest your lumpsum amount strategically in mutual funds. Expert guidance on fund selection, market timing, and tax optimization by Khorwal Financials. AMFI Registered ARN-154187.",
  path: "/services/lumpsum-investment",
  keywords: [
    "lumpsum investment mutual fund",
    "one-time investment planning",
    "lumpsum fund selection Delhi",
    "invest bonus mutual fund",
    "lumpsum vs SIP",
    "lumpsum advisor Rohini, Delhi",
  ],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = buildBreadcrumbsJsonLd([
    { name: "Home", item: "/" },
    { name: "Services", item: "/#services" },
    { name: "Lumpsum Investment", item: "/services/lumpsum-investment" },
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
