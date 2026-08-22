import Link from "next/link";

type SiteFooterProps = {
  currentPage?: "privacy" | "terms" | "company";
};

export function SiteFooter({ currentPage }: SiteFooterProps) {
  return (
    <footer className={`site-footer${currentPage ? " site-footer--legal-page" : ""}`}>
      <nav aria-label="Legal">
        <Link href="/privacy" aria-current={currentPage === "privacy" ? "page" : undefined}>Privacy</Link>
        <Link href="/terms" aria-current={currentPage === "terms" ? "page" : undefined}>Terms of Service</Link>
        <Link href="/company" aria-current={currentPage === "company" ? "page" : undefined}>Company</Link>
      </nav>
    </footer>
  );
}
