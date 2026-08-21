import { describe, expect, it } from "vitest";
import { createSEOMetadata } from "./metadata";
import { publishedSEOPageRegistry } from "./registry";
import { createPageSchema } from "./schema";

describe("SEO metadata", () => {
  it("generates canonical, social, and indexable metadata for every published page", () => {
    for (const page of publishedSEOPageRegistry) {
      const metadata = createSEOMetadata(page);
      expect(metadata.title).toBe(page.title);
      expect(metadata.description).toBe(page.description);
      expect(metadata.alternates).toEqual({ canonical: `https://dibs.chat${page.path}` });
      expect(metadata.robots).toMatchObject({ index: true, follow: true });
      expect(metadata.openGraph).toMatchObject({ title: page.title, description: page.description });
      expect(metadata.twitter).toMatchObject({ title: page.title, description: page.description });
    }
  });

  it("emits WebPage, BreadcrumbList, and matching FAQPage schema", () => {
    const page = publishedSEOPageRegistry[0];
    const schemas = createPageSchema(page);
    expect(schemas.map(schema => schema["@type"])).toEqual(["WebPage", "BreadcrumbList", "FAQPage"]);
    expect((schemas[2].mainEntity as unknown[])).toHaveLength(page.faqs.length);
  });
});