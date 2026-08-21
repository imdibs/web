import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { publishedSEOPageRegistry } from "@/lib/seo/registry";
import { SEOPage } from "./seo-page";

afterEach(cleanup);

describe("SEOPage", () => {
  it("renders authored content, FAQs, and a small related-link set", () => {
    const page = publishedSEOPageRegistry.find(entry => entry.path === "/sell/iphone")!;
    render(<SEOPage page={page} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(page.headline);
    expect(screen.getByText("Battery health and carrier lock status")).toBeInTheDocument();
    const relatedPages = screen.getByRole("complementary", { name: "The next useful page." });
    expect(within(relatedPages).getAllByRole("link", { name: /Sell a MacBook/ })).toHaveLength(1);
    expect(document.querySelectorAll('script[type="application/ld+json"]')).toHaveLength(3);
  });

  it("emits isolated first-party view and CTA events", () => {
    const page = publishedSEOPageRegistry[0];
    const listener = vi.fn();
    window.addEventListener("dibs:analytics", listener);
    render(<SEOPage page={page} />);
    expect(listener).toHaveBeenCalledWith(expect.objectContaining({ detail: expect.objectContaining({ event: "seo_page_viewed", sourcePage: page.path, pageType: page.type }) }));
    fireEvent.click(document.querySelector(".seo-button")!);
    expect(listener).toHaveBeenCalledWith(expect.objectContaining({ detail: expect.objectContaining({ event: "seo_cta_clicked", sourcePage: page.path }) }));
    window.removeEventListener("dibs:analytics", listener);
  });
});