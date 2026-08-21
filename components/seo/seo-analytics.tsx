"use client";

import { useEffect } from "react";
import { trackSEOEvent } from "@/lib/seo/analytics";
import type { SEOPageType } from "@/lib/seo/types";

interface SEOAnalyticsProps {
  sourcePage: string;
  pageType: SEOPageType;
  category?: string;
  location?: string;
}

export function SEOAnalytics(props: SEOAnalyticsProps) {
  const { sourcePage, pageType, category, location } = props;
  useEffect(() => {
    trackSEOEvent({ event: "seo_page_viewed", sourcePage, pageType, category, location });
  }, [sourcePage, pageType, category, location]);

  return null;
}

export function SEOTrackedCTA({
  href,
  className,
  children,
  ...context
}: SEOAnalyticsProps & { href: string; className?: string; children: React.ReactNode }) {
  return (
    <a
      className={className}
      href={href}
      onClick={() => trackSEOEvent({ event: "seo_cta_clicked", ...context })}
    >
      {children}
    </a>
  );
}