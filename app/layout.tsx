import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Geist } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })

export const metadata: Metadata = {
  metadataBase: new URL("https://khorwalfinancials.com"),
  title: {
    default: "Khorwal Financials — Expert Mutual Fund Advisory in Delhi",
    template: "%s | Khorwal Financials",
  },
  description:
    "Khorwal Financials is an AMFI-registered mutual fund distributor (ARN-154187) offering expert SIP planning, portfolio advisory, lumpsum investment, SWP planning, and insurance services in Delhi. Trusted by 150+ families.",
  keywords:
    "mutual fund advisor Delhi, AMFI registered distributor ARN-154187, SIP planning Delhi, investment advisor Janakpuri, Khorwal Financials, Suman Khorwal, mutual fund investment India, financial advisor Delhi, wealth management, ELSS tax saving, lumpsum investment, SWP planning, portfolio review",
  authors: [{ name: "Suman Khorwal", url: "https://khorwalfinancials.com" }],
  creator: "Khorwal Financials",
  publisher: "Khorwal Financials",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://khorwalfinancials.com",
    siteName: "Khorwal Financials",
    title: "Khorwal Financials — Expert Mutual Fund Advisory in Delhi",
    description:
      "AMFI-registered mutual fund advisory. Expert SIP planning, portfolio management & wealth advisory. ARN-154187. Serving 150+ happy investors.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Khorwal Financials — Mutual Fund Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MfdSuman",
    creator: "@MfdSuman",
    title: "Khorwal Financials — Expert Mutual Fund Advisory",
    description: "AMFI-registered mutual fund advisor. SIP planning, portfolio management & wealth advisory in Delhi. ARN-154187.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/favicon.png", type: "image/png", sizes: "512x512" }],
    shortcut: "/favicon.png",
  },
  alternates: {
    canonical: "https://khorwalfinancials.com",
  },
  verification: {
    // google: "your-google-search-console-verification-token",
  },
  category: "finance",
}

// JSON-LD Structured Data for local business + financial advisor
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://khorwalfinancials.com/#business",
      name: "Khorwal Financials",
      description:
        "AMFI-registered mutual fund distributor offering expert SIP planning, portfolio advisory, and wealth management services in Delhi.",
      url: "https://khorwalfinancials.com",
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
        "https://www.facebook.com/share/18FVpxAQLT/",
        "https://x.com/MfdSuman",
        "https://www.instagram.com/khorwal_financials",
        "https://www.linkedin.com/in/suman-khorwal-751659237/",
      ],
      priceRange: "₹₹",
      servesCuisine: undefined,
      image: "https://khorwalfinancials.com/logo.png",
    },
    {
      "@type": "FinancialService",
      "@id": "https://khorwalfinancials.com/#service",
      name: "Khorwal Financials — Mutual Fund Advisory",
      description:
        "Expert mutual fund distribution, SIP planning, lumpsum investment, SWP planning, insurance advisory, and portfolio review services.",
      provider: {
        "@id": "https://khorwalfinancials.com/#business",
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
      "@id": "https://khorwalfinancials.com/#founder",
      name: "Suman Khorwal",
      jobTitle: "AMFI-Registered Mutual Fund Distributor",
      description:
        "Suman Khorwal is an AMFI-registered mutual fund distributor (ARN-154187) with 7+ years of experience in financial advisory and SIP planning.",
      url: "https://khorwalfinancials.com/team",
      sameAs: ["https://www.linkedin.com/in/suman-khorwal-751659237/"],
      worksFor: { "@id": "https://khorwalfinancials.com/#business" },
    },
    {
      "@type": "WebSite",
      "@id": "https://khorwalfinancials.com/#website",
      url: "https://khorwalfinancials.com",
      name: "Khorwal Financials",
      publisher: { "@id": "https://khorwalfinancials.com/#business" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://khorwalfinancials.com/?q={search_term_string}",
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
