import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { SiteFooter } from "./site-footer";

afterEach(cleanup);

describe("SiteFooter", () => {
  it("shows only the public legal and company links", () => {
    render(<SiteFooter />);

    const navigation = screen.getByRole("navigation", { name: "Legal" });
    const links = within(navigation).getAllByRole("link");

    expect(links).toHaveLength(3);
    expect(links.map(link => [link.textContent, link.getAttribute("href")])).toEqual([
      ["Privacy", "/privacy"],
      ["Terms of Service", "/terms"],
      ["Company", "/company"],
    ]);
    expect(screen.queryByText("Learn more")).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "What is Dibs" })).not.toBeInTheDocument();
  });

  it.each([
    ["privacy", "Privacy"],
    ["terms", "Terms of Service"],
    ["company", "Company"],
  ] as const)("marks %s as the current page", (currentPage, label) => {
    render(<SiteFooter currentPage={currentPage} />);

    expect(screen.getByRole("link", { name: label })).toHaveAttribute("aria-current", "page");
    expect(
      screen.getAllByRole("link").filter(link => link.getAttribute("aria-current") === "page"),
    ).toHaveLength(1);
  });
});
