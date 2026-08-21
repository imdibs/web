import type { Metadata } from "next";
import { LegalHeader } from "@/components/legal-header";
import { SiteFooter } from "@/components/site-footer";
import { createPublicMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPublicMetadata(
  "Company — Dibs",
  "The Dibs company page is under construction.",
  "/company",
);

export default function CompanyPage() {
  return (
    <div className="privacy-page">
      <LegalHeader currentPage="company" />
      <main id="main-content" className="company-main">
        <h1>Building this page rn!</h1>
      </main>
      <SiteFooter currentPage="company" />
    </div>
  );
}