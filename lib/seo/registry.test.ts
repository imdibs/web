import { describe, expect, it } from "vitest";
import { seoImages } from "./images";
import { getRootSEOPage, getSellSEOPage, publishedSEOPageRegistry } from "./registry";

describe("SEO page registry", () => {
  it("contains the intentional 18-page launch set with unique routes", () => {
    expect(publishedSEOPageRegistry).toHaveLength(18);
    expect(new Set(publishedSEOPageRegistry.map(page => page.path))).toHaveProperty("size", 18);
    expect(publishedSEOPageRegistry.reduce<Record<string, number>>((counts, page) => {
      counts[page.type] = (counts[page.type] ?? 0) + 1;
      return counts;
    }, {})).toEqual({ product: 5, sell: 6, alternative: 4, location: 3 });
  });

  it("resolves only the appropriate route family", () => {
    expect(getRootSEOPage("what-is-dibs")?.path).toBe("/what-is-dibs");
    expect(getSellSEOPage("iphone")?.path).toBe("/sell/iphone");
    expect(getRootSEOPage("iphone")).toBeUndefined();
  });

  it("uses the NYC and SF live image for the New York marketplace", () => {
    const newYork = publishedSEOPageRegistry.find(page => page.path === "/new-york-marketplace");
    const miami = publishedSEOPageRegistry.find(page => page.path === "/miami-marketplace");

    expect(newYork?.image.hero).toBe("nycsf");
    expect(miami?.image.hero).toBe("marketplace");
    expect(seoImages.nycsf).toMatchObject({
      src: "/branding/nycsf-live.png",
      alt: "San Francisco and New York City — Live on Dibs",
      width: 1774,
      height: 887,
    });
  });

  it("keeps every page complete and contextually linked", () => {
    for (const page of publishedSEOPageRegistry) {
      expect(page.title.length).toBeGreaterThan(20);
      expect(page.description.length).toBeGreaterThan(80);
      expect(page.sections.length).toBeGreaterThanOrEqual(3);
      expect(page.faqs).toHaveLength(3);
      expect(page.relatedPages).toHaveLength(3);
      expect(page.relatedPages.every(link => link.href !== page.path)).toBe(true);
    }
  });
});