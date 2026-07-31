import type React from "react"
import { buildMetadata, buildBreadcrumbsJsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Mutual Fund Advisory — Expert Fund Selection & Management",
  description:
    "Invest in a diversified portfolio of top-performing mutual funds tailored to your risk profile. Khorwal Financials provides expert guidance on fund selection and portfolio management. ARN-154187.",
  path: "/services/mutual-funds",
  keywords: [
    "mutual fund advisory Delhi",
    "best mutual funds for long term",
    "equity mutual fund selection",
    "debt fund guidance",
    "mutual fund distributor Rohini, Delhi",
    "goal-based mutual fund investing",
  ],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = buildBreadcrumbsJsonLd([
    { name: "Home", item: "/" },
    { name: "Services", item: "/#services" },
    { name: "Mutual Funds", item: "/services/mutual-funds" },
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
