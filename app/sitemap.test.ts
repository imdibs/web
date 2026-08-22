import { describe, expect, it } from "vitest";
import sitemap from "./sitemap";

describe("sitemap", () => {
  it("includes only the homepage, legal pages, and company page", () => {
    const urls = sitemap().map(entry => entry.url);

    expect(urls).toEqual([
      "https://dibs.chat/",
      "https://dibs.chat/company",
      "https://dibs.chat/privacy",
      "https://dibs.chat/terms",
    ]);
  });
});