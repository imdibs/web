import Link from "next/link";
import { learnMoreLinkGroups } from "@/lib/seo/learn-more";

type SiteFooterProps = {
  currentPage?: "privacy" | "terms" | "company" | "seo";
  compact?: boolean;
};

function LearnMoreLinks() {
  return (
    <div className="site-footer__learn-more-links">
      {learnMoreLinkGroups.map((group, index) => (
        <div className="site-footer__link-group" key={index}>
          {group.map(link => <Link href={link.href} key={link.href}>{link.label}</Link>)}
        </div>
      ))}
    </div>
  );
}

export function SiteFooter({ currentPage, compact = false }: SiteFooterProps) {
  return (
    <footer className={`site-footer${currentPage ? " site-footer--legal-page" : ""}${compact ? " site-footer--compact" : ""}`}>
      {compact ? (
        <details className="site-footer__learn-more site-footer__learn-more--compact">
          <summary>Learn more</summary>
          <LearnMoreLinks />
        </details>
      ) : (
        <section className="site-footer__learn-more" aria-labelledby="learn-more-heading">
          <p id="learn-more-heading">Learn more</p>
          <LearnMoreLinks />
        </section>
      )}
      <div className="site-footer__legal-row">
        <span>Dibs</span>
        <nav aria-label="Legal">
          <Link href="/privacy" aria-current={currentPage === "privacy" ? "page" : undefined}>Privacy</Link>
          <Link href="/terms" aria-current={currentPage === "terms" ? "page" : undefined}>Terms of Service</Link>
          <Link href="/company" aria-current={currentPage === "company" ? "page" : undefined}>Company</Link>
        </nav>
      </div>
    </footer>
  );
}