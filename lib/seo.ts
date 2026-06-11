import type { Metadata } from "next"

export const siteConfig = {
  name: "Khorwal Financials",
  description:
    "Khorwal Financials is an AMFI-registered mutual fund distributor (ARN-154187) offering expert SIP planning, portfolio advisory, lumpsum investment, SWP planning, and insurance services in Delhi. Trusted by 150+ families.",
  url: "https://khorwalfinancials.com",
  ogImage: "https://khorwalfinancials.com/logo.png",
  links: {
    twitter: "https://x.com/MfdSuman",
    facebook: "https://www.facebook.com/share/18FVpxAQLT/",
    linkedin: "https://www.linkedin.com/in/suman-khorwal-751659237/",
    instagram: "https://www.instagram.com/khorwal_financials",
  },
  author: "Suman Khorwal",
  mainNav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Team", href: "/team" },
    { title: "Services", href: "/#services" },
    { title: "Calculators", href: "/calculators" },
    { title: "Contact", href: "/contact" },
  ],
}

interface SEOProps {
  title?: string
  description?: string
  path?: string
  image?: string
  keywords?: string[]
  type?: "website" | "article"
  noIndex?: boolean
}

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "",
  image = "/logo.png",
  keywords = [],
  type = "website",
  noIndex = false,
}: SEOProps = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.name

  const url = `${siteConfig.url}${path}`

  const defaultKeywords = [
    "mutual fund advisor Delhi",
    "AMFI registered distributor",
    "SIP planning Delhi",
    "investment advisor Janakpuri",
    "Khorwal Financials",
    "Suman Khorwal",
    "ARN-154187",
    "mutual fund investment India",
    "financial advisor Delhi",
    "wealth management",
    "ELSS tax saving",
    "lumpsum investment",
    "SWP planning",
    "portfolio review",
  ]

  return {
    title: {
      default: fullTitle,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: [...defaultKeywords, ...keywords].join(", "),
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: "en_IN",
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
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
      site: "@MfdSuman",
      creator: "@MfdSuman",
      images: [image],
    },
    icons: {
      icon: [{ url: "/favicon.png", type: "image/png", sizes: "512x512" }],
      apple: [{ url: "/favicon.png", type: "image/png", sizes: "512x512" }],
      shortcut: "/favicon.png",
    },
  }
}

export function buildBreadcrumbsJsonLd(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.item}`,
    })),
  }
}
