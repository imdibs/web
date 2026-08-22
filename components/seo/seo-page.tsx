import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { createPageSchema } from "@/lib/seo/schema";
import type { SEOPageConfig, SEOSection } from "@/lib/seo/types";
import { SEOAnalytics, SEOTrackedCTA } from "./seo-analytics";
import { SEOHeader } from "./seo-header";
import { SEOImage } from "./seo-image";

function Section({ section, number }: { section: SEOSection; number: number }) {
  return (
    <section className="seo-content-section">
      <p className="seo-section-number">0{number}</p>
      <div>
        <h2>{section.title}</h2>
        <p>{section.body}</p>
        {section.items && <ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul>}
      </div>
    </section>
  );
}

function FAQ({ page }: { page: SEOPageConfig }) {
  return (
    <section className="seo-faq" aria-labelledby="seo-faq-heading">
      <p className="seo-kicker">Questions, answered</p>
      <h2 id="seo-faq-heading">A few useful details.</h2>
      <div className="seo-faq__list">
        {page.faqs.map(faq => (
          <details key={faq.question}>
            <summary>{faq.question}<span aria-hidden="true">+</span></summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function RelatedPages({ page }: { page: SEOPageConfig }) {
  return (
    <aside className="seo-related" aria-labelledby="seo-related-heading">
      <p className="seo-kicker">Keep exploring</p>
      <h2 id="seo-related-heading">The next useful page.</h2>
      <div className="seo-related__links">
        {page.relatedPages.map(related => (
          <Link href={related.href} key={related.href}>
            <span>{related.label}</span>
            <small>{related.description}</small>
            <b aria-hidden="true">↗</b>
          </Link>
        ))}
      </div>
    </aside>
  );
}

function PageShell({ page, children }: { page: SEOPageConfig; children: React.ReactNode }) {
  const eventContext = {
    sourcePage: page.path,
    pageType: page.type,
    category: page.category,
    location: page.location,
  };

  return (
    <div className={`seo-page seo-page--${page.type}`}>
      <SEOAnalytics {...eventContext} />
      {createPageSchema(page).map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      ))}
      <SEOHeader />
      <main>
        <div className="seo-article">
          <section className="seo-hero">
            <div className="seo-hero__copy">
              <p className="seo-kicker">{page.eyebrow}</p>
              <h1>{page.headline}</h1>
              <p className="seo-hero__subheadline">{page.subheadline}</p>
              <SEOTrackedCTA className="seo-button" href={page.cta.href} {...eventContext}>
                {page.cta.label} <span aria-hidden="true">→</span>
              </SEOTrackedCTA>
            </div>
            <SEOImage imageKey={page.image.hero} priority />
          </section>
          {children}
          <FAQ page={page} />
          <RelatedPages page={page} />
          <section className="seo-final-cta">
            <p className="seo-kicker">Buy and sell through Dibs</p>
            <h2>{page.cta.heading}</h2>
            <p>{page.cta.body}</p>
            <SEOTrackedCTA className="seo-button" href={page.cta.href} {...eventContext}>
              {page.cta.label} <span aria-hidden="true">→</span>
            </SEOTrackedCTA>
          </section>
        </div>
      </main>
      <SiteFooter currentPage="seo" currentPath={page.path} />
    </div>
  );
}

export function ProductTemplate({ page }: { page: SEOPageConfig }) {
  return (
    <PageShell page={page}>
      <section className="seo-intro"><p>{page.intro}</p></section>
      {page.image.supporting && <section className="seo-supporting-visual"><SEOImage imageKey={page.image.supporting} /></section>}
      <div className="seo-sections">{page.sections.map((section, index) => <Section section={section} number={index + 1} key={section.title} />)}</div>
    </PageShell>
  );
}

export function SellTemplate({ page }: { page: SEOPageConfig }) {
  return (
    <PageShell page={page}>
      <section className="seo-intro"><p>{page.intro}</p></section>
      {page.image.supporting && <section className="seo-supporting-visual"><SEOImage imageKey={page.image.supporting} /></section>}
      <div className="seo-sections">{page.sections.map((section, index) => <Section section={section} number={index + 1} key={section.title} />)}</div>
    </PageShell>
  );
}

export function AlternativeTemplate({ page }: { page: SEOPageConfig }) {
  return (
    <PageShell page={page}>
      <section className="seo-intro seo-intro--comparison"><p>{page.intro}</p><span>Dibs is a separate service. Product names belong to their respective owners.</span></section>
      <div className="seo-sections">{page.sections.map((section, index) => <Section section={section} number={index + 1} key={section.title} />)}</div>
    </PageShell>
  );
}

export function LocationTemplate({ page }: { page: SEOPageConfig }) {
  return (
    <PageShell page={page}>
      <section className="seo-intro"><p>{page.intro}</p></section>
      {page.image.supporting && <section className="seo-supporting-visual"><SEOImage imageKey={page.image.supporting} /></section>}
      <div className="seo-sections">{page.sections.map((section, index) => <Section section={section} number={index + 1} key={section.title} />)}</div>
    </PageShell>
  );
}

export function SEOPage({ page }: { page: SEOPageConfig }) {
  switch (page.type) {
    case "product": return <ProductTemplate page={page} />;
    case "sell": return <SellTemplate page={page} />;
    case "alternative": return <AlternativeTemplate page={page} />;
    case "location": return <LocationTemplate page={page} />;
  }
}