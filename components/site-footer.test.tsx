import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { SiteFooter } from "./site-footer";

afterEach(cleanup);

describe("SiteFooter", () => {
  it("shows the legal links side by side", () => {
    render(<SiteFooter />);

    expect(screen.getByRole("link", { name: "Privacy" })).toHaveAttribute("href", "/privacy");
    expect(screen.getByRole("link", { name: "Terms of Service" })).toHaveAttribute("href", "/terms");
    expect(screen.getByRole("link", { name: "Company" })).toHaveAttribute("href", "/company");
  });

  it("builds a curated Learn More section from published SEO pages", () => {
    render(<SiteFooter />);

    expect(screen.getByText("Learn more")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "What is Dibs" })).toHaveAttribute("href", "/what-is-dibs");
    expect(screen.getByRole("link", { name: "Sell an iPhone" })).toHaveAttribute("href", "/sell/iphone");
    expect(screen.getByRole("link", { name: "Facebook Marketplace alternative" })).toHaveAttribute("href", "/facebook-marketplace-alternative");
    expect(screen.getByRole("link", { name: "Miami Marketplace" })).toHaveAttribute("href", "/miami-marketplace");
    expect(screen.getAllByRole("link")).toHaveLength(20);
  });

  it("marks privacy as the current page when requested", () => {
    render(<SiteFooter currentPage="privacy" />);

    expect(screen.getByRole("link", { name: "Privacy" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "Terms of Service" })).not.toHaveAttribute("aria-current");
  });

  it("marks Terms of Service as the current page when requested", () => {
    render(<SiteFooter currentPage="terms" />);

    expect(screen.getByRole("link", { name: "Terms of Service" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "Privacy" })).not.toHaveAttribute("aria-current");
  });

  it("marks Company as the current page when requested", () => {
    render(<SiteFooter currentPage="company" />);

    expect(screen.getByRole("link", { name: "Company" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "Privacy" })).not.toHaveAttribute("aria-current");
    expect(screen.getByRole("link", { name: "Terms of Service" })).not.toHaveAttribute("aria-current");
  });
});