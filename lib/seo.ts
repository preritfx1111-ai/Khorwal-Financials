import type { Metadata } from "next"

const BASE_URL = "https://khorwalfinancials.com" // update with actual domain

interface SEOProps {
  title: string
  description: string
  path?: string
  image?: string
  keywords?: string[]
  type?: "website" | "article"
  noIndex?: boolean
}

export function buildMetadata({
  title,
  description,
  path = "",
  image = "/logo.png",
  keywords = [],
  type = "website",
  noIndex = false,
}: SEOProps): Metadata {
  const fullTitle = title.includes("Khorwal Financials")
    ? title
    : `${title} | Khorwal Financials`

  const url = `${BASE_URL}${path}`

  const defaultKeywords = [
    "mutual fund advisor Delhi",
    "AMFI registered distributor",
    "SIP planning",
    "investment advisor Janakpuri",
    "Khorwal Financials",
    "Suman Khorwal",
    "ARN-154187",
    "mutual fund investment India",
    "financial advisor Delhi",
    "wealth management",
  ]

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords].join(", "),
    authors: [{ name: "Suman Khorwal", url: BASE_URL }],
    creator: "Khorwal Financials",
    publisher: "Khorwal Financials",
    robots: noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      siteName: "Khorwal Financials",
      images: [
        {
          url: `${BASE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@MfdSuman",
      images: [`${BASE_URL}${image}`],
    },
  }
}
