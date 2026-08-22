import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SEOPage } from "@/components/seo/seo-page";
import { areSEOPreviewPagesEnabled } from "@/lib/seo/availability";
import { createSEOMetadata } from "@/lib/seo/metadata";
import { getRootSEOPage, publishedSEOPageRegistry } from "@/lib/seo/registry";

interface RootSEOPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  if (!areSEOPreviewPagesEnabled()) return [];

  return publishedSEOPageRegistry
    .filter(page => page.type !== "sell")
    .map(page => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: RootSEOPageProps): Promise<Metadata> {
  if (!areSEOPreviewPagesEnabled()) return {};

  const { slug } = await params;
  const page = getRootSEOPage(slug);
  if (!page) return {};
  return createSEOMetadata(page);
}

export default async function RootSEOPage({ params }: RootSEOPageProps) {
  if (!areSEOPreviewPagesEnabled()) notFound();

  const { slug } = await params;
  const page = getRootSEOPage(slug);
  if (!page) notFound();
  return <SEOPage page={page} />;
}