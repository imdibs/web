import { describe, expect, it } from "vitest";
import { areSEOPreviewPagesEnabled } from "./availability";

describe("SEO preview availability", () => {
  it("keeps unfinished pages available locally and in tests", () => {
    expect(areSEOPreviewPagesEnabled("development")).toBe(true);
    expect(areSEOPreviewPagesEnabled("test")).toBe(true);
  });

  it("hides unfinished pages in production", () => {
    expect(areSEOPreviewPagesEnabled("production")).toBe(false);
  });
});