import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Geist } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })

import { buildMetadata, siteConfig } from "@/lib/seo"

export const metadata = buildMetadata()

// JSON-LD Structured Data for local business + financial advisor
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      telephone: "+91-9911186409",
      email: "growmoney1709@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No. 601-604, Sagar Tower, 6th Floor, Above SBI, Near Gate No. 3 of Janakpuri Metro Station, District Centre",
        addressLocality: "Janakpuri",
        addressRegion: "Delhi",
        postalCode: "110058",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "28.517773",
        longitude: "77.080700",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "10:00",
          closes: "18:00",
        },
      ],
      sameAs: [
        siteConfig.links.facebook,
        siteConfig.links.twitter,
        siteConfig.links.instagram,
        siteConfig.links.linkedin,
      ],
      priceRange: "₹₹",
      image: `${siteConfig.url}/logo.png`,
    },
    {
      "@type": "FinancialService",
      "@id": `${siteConfig.url}/#service`,
      name: `${siteConfig.name} — Mutual Fund Advisory`,
      description:
        "Expert mutual fund distribution, SIP planning, lumpsum investment, SWP planning, insurance advisory, and portfolio review services.",
      provider: {
        "@id": `${siteConfig.url}/#business`,
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Financial Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mutual Fund Investment Advisory" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SIP Planning" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lumpsum Investment Planning" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SWP Systematic Withdrawal Planning" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Insurance Planning" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Portfolio Review & Rebalancing" } },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#founder`,
      name: siteConfig.author,
      jobTitle: "AMFI-Registered Mutual Fund Distributor",
      description:
        `${siteConfig.author} is an AMFI-registered mutual fund distributor (ARN-154187) with 7+ years of experience in financial advisory and SIP planning.`,
      url: `${siteConfig.url}/team`,
      sameAs: [siteConfig.links.linkedin],
      worksFor: { "@id": `${siteConfig.url}/#business` },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: { "@id": `${siteConfig.url}/#business` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteConfig.url}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Geo meta tags for local SEO */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Janakpuri, Delhi" />
        <meta name="geo.position" content="28.517773;77.080700" />
        <meta name="ICBM" content="28.517773, 77.080700" />
        {/* Business meta */}
        <meta name="classification" content="Finance, Investment, Mutual Funds" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
      </head>
      <body className={`${geist.variable} font-sans antialiased bg-slate-900 text-slate-50`}>
        <SmoothScrollProvider>
          <Header />
          {children}
          <Footer />
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
