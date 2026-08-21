import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo/metadata";
import { publishedSEOPageRegistry } from "@/lib/seo/registry";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/company"), changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/privacy"), changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl("/terms"), changeFrequency: "yearly", priority: 0.2 },
  ];

  return [
    ...staticPages,
    ...publishedSEOPageRegistry.map(page => ({
      url: absoluteUrl(page.path),
      changeFrequency: "monthly" as const,
      priority: page.type === "product" ? 0.8 : 0.7,
    })),
  ];
}