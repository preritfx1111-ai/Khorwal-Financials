import type React from "react"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "About Us — Our Story, Mission & Values",
  description:
    "Learn about Khorwal Financials — founded by AMFI-registered advisor Suman Khorwal. Discover our mission to provide transparent, client-first mutual fund advisory to families across India. ARN-154187.",
  path: "/about",
  keywords: [
    "about Khorwal Financials",
    "Suman Khorwal advisor",
    "AMFI registered mutual fund",
    "financial advisory mission",
    "transparent investment advisor Delhi",
    "mutual fund distributor story",
  ],
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
