import type { SEOPageType } from "./types";

export type SEOEventName = "seo_page_viewed" | "seo_cta_clicked";

export interface SEOEventDetail {
  event: SEOEventName;
  sourcePage: string;
  pageType: SEOPageType;
  category?: string;
  location?: string;
}

declare global {
  interface WindowEventMap {
    "dibs:analytics": CustomEvent<SEOEventDetail>;
  }
}

export function trackSEOEvent(detail: SEOEventDetail) {
  window.dispatchEvent(new CustomEvent("dibs:analytics", { detail }));
}