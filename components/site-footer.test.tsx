import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { SiteFooter } from "./site-footer";

afterEach(cleanup);

describe("SiteFooter", () => {
  it("shows categorized legal links without a bottom brand row", () => {
    render(<SiteFooter />);

    expect(screen.queryByRole("link", { name: "Dibs home" })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Privacy" })).toHaveAttribute("href", "/privacy");
    expect(screen.getByRole("link", { name: "Terms of Service" })).toHaveAttribute("href", "/terms");
    expect(screen.getByRole("link", { name: "Company" })).toHaveAttribute("href", "/company");
    expect(screen.getByRole("heading", { name: "Legal" }).parentElement).toHaveClass(
      "site-footer__link-group--legal",
    );
  });

  it("renders categorized Learn More links in normal document flow", () => {
    render(<SiteFooter />);

    expect(screen.getByText("Learn more")).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Explore Dibs" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Buy & sell with Dibs" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Sell" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Alternatives" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Locations" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Dibs" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Legal" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Buy & sell with Dibs" }).parentElement).toHaveClass(
      "site-footer__link-group--marketplaces",
    );
    expect(screen.getByRole("heading", { name: "Dibs" }).parentElement).toHaveClass(
      "site-footer__link-group--product",
    );
    expect(screen.getByRole("link", { name: "What is Dibs" })).toHaveAttribute("href", "/what-is-dibs");
    expect(screen.getByRole("link", { name: "sell an iPhone" })).toHaveAttribute("href", "/sell/iphone");
    expect(screen.getByRole("link", { name: "facebook marketplace alternative" })).toHaveAttribute("href", "/facebook-marketplace-alternative");
    expect(screen.getByRole("link", { name: "miami marketplace" })).toHaveAttribute("href", "/miami-marketplace");
    expect(screen.getAllByRole("link")).toHaveLength(21);
    expect(document.querySelector("details")).not.toBeInTheDocument();
  });

  it("prioritizes the current SEO topic without duplicating links", () => {
    render(<SiteFooter currentPage="seo" currentPath="/sell/iphone" />);

    const discovery = screen.getByRole("navigation", { name: "Explore Dibs" });
    const groups = discovery.querySelectorAll(".site-footer__link-group");
    const links = within(discovery).getAllByRole("link");

    expect(groups[0]).toHaveTextContent("Buy & sell with Dibs");
    expect(groups[0]).toHaveClass("site-footer__link-group--featured");
    expect(groups[1]).toHaveTextContent("Sell");
    expect(within(groups[1] as HTMLElement).getAllByRole("link")[0]).toHaveTextContent("sell an iPhone");
    expect(screen.getByRole("link", { name: "sell an iPhone" })).toHaveAttribute("aria-current", "page");
    expect(links).toHaveLength(21);
    expect(new Set(links.map(link => link.getAttribute("href"))).size).toBe(21);
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