import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes = [
    "",
    "/about",
    "/team",
    "/contact",
    "/calculators",
    "/services/mutual-funds",
    "/services/sip-planning",
    "/services/lumpsum-investment",
    "/services/swp-systematic-withdrawal",
    "/services/insurance-planning",
    "/services/portfolio-review",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly" as any,
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.9 : 0.8,
  }))

  return routes
}
