import Link from "next/link";
import { getLearnMoreLinkGroups } from "@/lib/seo/learn-more";

type SiteFooterProps = {
  currentPage?: "privacy" | "terms" | "company" | "seo";
  currentPath?: string;
};

function LearnMoreLinks({ currentPage, currentPath }: SiteFooterProps) {
  const groups = getLearnMoreLinkGroups(currentPath);

  return (
    <div className="site-footer__learn-more-links">
      {groups.map(group => (
        <div
          className={`site-footer__link-group site-footer__link-group--${group.section}${group.section === "marketplaces" ? " site-footer__link-group--featured" : ""}`}
          key={group.section}
        >
          <h3>{group.heading}</h3>
          {group.links.map(link => (
            <Link href={link.href} aria-current={link.href === currentPath ? "page" : undefined} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      ))}
      <div className="site-footer__link-group site-footer__link-group--legal">
        <h3>Legal</h3>
        <Link href="/privacy" aria-current={currentPage === "privacy" ? "page" : undefined}>Privacy</Link>
        <Link href="/terms" aria-current={currentPage === "terms" ? "page" : undefined}>Terms of Service</Link>
        <Link href="/company" aria-current={currentPage === "company" ? "page" : undefined}>Company</Link>
      </div>
    </div>
  );
}

export function SiteFooter({ currentPage, currentPath }: SiteFooterProps) {
  return (
    <footer className={`site-footer${currentPage ? " site-footer--legal-page" : ""}`}>
      <section className="site-footer__learn-more" aria-labelledby="learn-more-heading">
        <p id="learn-more-heading">Learn more</p>
        <nav aria-label="Explore Dibs">
          <LearnMoreLinks currentPage={currentPage} currentPath={currentPath} />
        </nav>
      </section>
    </footer>
  );
}