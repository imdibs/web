export type SEOPageType = "product" | "sell" | "alternative" | "location";

export type SEOImageKey =
  | "phone"
  | "ps5"
  | "macbook"
  | "camera"
  | "clothes"
  | "furniture"
  | "iphone"
  | "marketplace"
  | "miami";

export interface SEOSection {
  title: string;
  body: string;
  items?: string[];
}

export interface SEOFaq {
  question: string;
  answer: string;
}

export interface SEORelatedPage {
  href: string;
  label: string;
  description: string;
}

export interface SEOPageConfig {
  slug: string;
  path: string;
  type: SEOPageType;
  published: boolean;
  title: string;
  description: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  image: {
    hero: SEOImageKey;
    supporting?: SEOImageKey;
  };
  intro: string;
  sections: SEOSection[];
  faqs: SEOFaq[];
  relatedPages: SEORelatedPage[];
  cta: {
    label: string;
    heading: string;
    body: string;
    href: string;
  };
  category?: string;
  location?: string;
  competitor?: string;
}