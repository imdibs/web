import { describe, expect, it } from "vitest";
import sitemap from "./sitemap";
import { publishedSEOPageRegistry } from "@/lib/seo/registry";

describe("sitemap", () => {
  it("includes each published SEO route exactly once", () => {
    const urls = sitemap().map(entry => entry.url);
    for (const page of publishedSEOPageRegistry) {
      expect(urls.filter(url => url === `https://dibs.chat${page.path}`)).toHaveLength(1);
    }
    expect(urls).toHaveLength(publishedSEOPageRegistry.length + 4);
  });
});