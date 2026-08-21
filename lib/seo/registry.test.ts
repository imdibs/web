import { describe, expect, it } from "vitest";
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