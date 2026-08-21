import Image from "next/image";
import Link from "next/link";
import logo from "@/public/branding/legal-header-logo.png";

export function SEOHeader() {
  return (
    <header className="seo-header">
      <Link className="seo-header__brand" href="/" aria-label="Dibs home">
        <Image src={logo} alt="" width={48} height={48} priority />
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/how-dibs-works">How it works</Link>
        <Link href="/buy-with-dibs">Buy</Link>
        <Link href="/sell-with-dibs">Sell</Link>
      </nav>
      <Link className="seo-header__cta" href="/#hero-phone">Text Dibs <span aria-hidden="true">→</span></Link>
    </header>
  );
}