import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SEOPage } from "@/components/seo/seo-page";
import { createSEOMetadata } from "@/lib/seo/metadata";
import { getRootSEOPage, publishedSEOPageRegistry } from "@/lib/seo/registry";

export const dynamicParams = false;

interface RootSEOPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return publishedSEOPageRegistry
    .filter(page => page.type !== "sell")
    .map(page => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: RootSEOPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getRootSEOPage(slug);
  if (!page) return {};
  return createSEOMetadata(page);
}

export default async function RootSEOPage({ params }: RootSEOPageProps) {
  const { slug } = await params;
  const page = getRootSEOPage(slug);
  if (!page) notFound();
  return <SEOPage page={page} />;
}