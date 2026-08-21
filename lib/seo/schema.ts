import { absoluteUrl, SITE_NAME, SITE_URL } from "./metadata";
import type { SEOPageConfig } from "./types";

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: "Dibs is an AI-native marketplace for buying and selling through text.",
  };
}

export function createPageSchema(page: SEOPageConfig) {
  const url = absoluteUrl(page.path);
  const pageName = page.type === "sell" && page.category
    ? `Sell ${page.category}`
    : page.type === "location" && page.location
      ? `${page.eyebrow}`
      : page.eyebrow;

  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Dibs", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: pageName, item: url },
      ],
    },
  ];

  if (page.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  return schemas;
}