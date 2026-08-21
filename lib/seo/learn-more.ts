import { getSEOPageByPath } from "./registry";

const curatedGroups = [
  [
    ["/what-is-dibs", "What is Dibs"],
    ["/how-dibs-works", "How Dibs works"],
    ["/sell-with-dibs", "Sell with Dibs"],
    ["/buy-with-dibs", "Buy with Dibs"],
    ["/is-dibs-safe", "Is Dibs safe?"],
  ],
  [
    ["/sell/iphone", "Sell an iPhone"],
    ["/sell/macbook", "Sell a MacBook"],
    ["/sell/camera", "Sell a camera"],
    ["/sell/ps5", "Sell a PS5"],
    ["/sell/furniture", "Sell furniture"],
  ],
  [
    ["/facebook-marketplace-alternative", "Facebook Marketplace alternative"],
    ["/craigslist-alternative", "Craigslist alternative"],
    ["/offerup-alternative", "OfferUp alternative"],
    ["/ebay-alternative", "eBay alternative"],
    ["/miami-marketplace", "Miami Marketplace"],
    ["/new-york-marketplace", "New York Marketplace"],
    ["/los-angeles-marketplace", "Los Angeles Marketplace"],
  ],
] as const;

export const learnMoreLinkGroups = curatedGroups.map(group => group.map(([path, label]) => {
  const page = getSEOPageByPath(path);

  if (!page) {
    throw new Error(`Learn More link is missing from the published SEO registry: ${path}`);
  }

  return { href: page.path, label };
}));