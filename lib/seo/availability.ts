/**
 * SEO landing pages are still being reviewed and are only available through
 * the local development server. Keep this server-side so production cannot
 * accidentally expose preview routes through a public environment variable.
 */
export function areSEOPreviewPagesEnabled(environment = process.env.NODE_ENV) {
  return environment !== "production";
}