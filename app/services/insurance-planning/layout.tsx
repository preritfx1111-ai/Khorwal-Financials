import type React from "react"
import { buildMetadata, buildBreadcrumbsJsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Insurance Planning — Term, Health & Life Insurance Advisory",
  description:
    "Protect your family's future with comprehensive insurance planning. Expert guidance on term insurance, health coverage, and investment-linked policies in Delhi. ARN-154187.",
  path: "/services/insurance-planning",
  keywords: [
    "insurance planning Delhi",
    "term insurance advisor Janakpuri",
    "health insurance guidance",
    "life insurance planning",
    "insurance advisor West Delhi",
    "financial protection planning",
  ],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = buildBreadcrumbsJsonLd([
    { name: "Home", item: "/" },
    { name: "Services", item: "/#services" },
    { name: "Insurance Planning", item: "/services/insurance-planning" },
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
