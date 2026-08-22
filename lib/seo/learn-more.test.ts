import { describe, expect, it } from "vitest";
import { getLearnMoreLinkGroups, learnMoreLinkGroups } from "./learn-more";
import { publishedSEOPageRegistry } from "./registry";

describe("Learn More registry", () => {
  it("exposes every published SEO route exactly once", () => {
    const links = learnMoreLinkGroups.flatMap(group => group.links);
    const publishedPaths = publishedSEOPageRegistry.map(page => page.path).sort();

    expect(links).toHaveLength(18);
    expect(new Set(links.map(link => link.href)).size).toBe(18);
    expect(links.map(link => link.href).sort()).toEqual(publishedPaths);
  });

  it("uses concise search-intent labels in structured groups", () => {
    expect(learnMoreLinkGroups.map(group => group.heading)).toEqual([
      "Buy & sell with Dibs",
      "Sell",
      "Alternatives",
      "Locations",
      "Dibs",
    ]);
    expect(learnMoreLinkGroups.flatMap(group => group.links).map(link => link.label)).toContain("where to sell a MacBook");

    for (const section of ["alternatives", "locations"]) {
      const group = learnMoreLinkGroups.find(candidate => candidate.section === section);

      expect(group?.links.every(link => link.label === link.label.toLowerCase())).toBe(true);
    }

    for (const section of ["marketplaces", "product"]) {
      const group = learnMoreLinkGroups.find(candidate => candidate.section === section);

      expect(group?.links.every(link => /^[A-Z]/.test(link.label))).toBe(true);
    }
  });

  it("prioritizes a current route while preserving the complete unique set", () => {
    const groups = getLearnMoreLinkGroups("/sell/iphone");
    const links = groups.flatMap(group => group.links);

    expect(groups[0].section).toBe("marketplaces");
    expect(groups[1].section).toBe("sell");
    expect(groups[1].links[0].href).toBe("/sell/iphone");
    expect(links).toHaveLength(18);
    expect(new Set(links.map(link => link.href)).size).toBe(18);
  });
});