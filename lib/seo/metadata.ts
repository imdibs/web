import type { Metadata } from "next";
import { seoImages } from "./images";
import type { SEOPageConfig } from "./types";

export const SITE_URL = "https://dibs.chat";
export const SITE_NAME = "Dibs";

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function createPublicMetadata(title: string, description: string, path: string): Metadata {
  const canonical = absoluteUrl(path);
  const image = absoluteUrl("/opengraph-image");
  return {
    title,
    description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: { type: "website", siteName: SITE_NAME, url: canonical, title, description, images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export function createSEOMetadata(page: SEOPageConfig): Metadata {
  const image = seoImages[page.image.hero];
  const canonical = absoluteUrl(page.path);
  const imageUrl = absoluteUrl(image.src);

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical },
    robots: page.published
      ? { index: true, follow: true, googleBot: { index: true, follow: true } }
      : { index: false, follow: false },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url: canonical,
      title: page.title,
      description: page.description,
      images: [{ url: imageUrl, width: image.width, height: image.height, alt: image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [imageUrl],
    },
  };
}