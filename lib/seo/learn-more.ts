import { getSEOPageByPath } from "./registry";

export type LearnMoreSection =
  | "product"
  | "sell"
  | "buy"
  | "marketplaces"
  | "alternatives"
  | "locations"
  | "guides";

type CuratedLearnMoreGroup = {
  section: LearnMoreSection;
  heading: string;
  links: readonly (readonly [path: string, label: string])[];
};

const curatedLearnMoreGroups: readonly CuratedLearnMoreGroup[] = [
  {
    section: "marketplaces",
    heading: "Buy & sell with Dibs",
    links: [
      ["/buy-with-dibs", "Buy with Dibs"],
      ["/sell-with-dibs", "Sell with Dibs"],
    ],
  },
  {
    section: "sell",
    heading: "Sell",
    links: [
      ["/sell/iphone", "sell an iPhone"],
      ["/sell/macbook", "where to sell a MacBook"],
      ["/sell/ps5", "sell a PS5"],
      ["/sell/camera", "sell a camera"],
      ["/sell/furniture", "best place to sell furniture"],
      ["/sell/clothes", "sell clothes locally"],
    ],
  },
  {
    section: "alternatives",
    heading: "Alternatives",
    links: [
      ["/facebook-marketplace-alternative", "facebook marketplace alternative"],
      ["/craigslist-alternative", "craigslist alternative"],
      ["/offerup-alternative", "offerup alternative"],
      ["/ebay-alternative", "ebay alternative"],
    ],
  },
  {
    section: "locations",
    heading: "Locations",
    links: [
      ["/miami-marketplace", "miami marketplace"],
      ["/new-york-marketplace", "new york marketplace"],
      ["/los-angeles-marketplace", "los angeles marketplace"],
    ],
  },
  {
    section: "product",
    heading: "Dibs",
    links: [
      ["/what-is-dibs", "What is Dibs"],
      ["/how-dibs-works", "How Dibs works"],
      ["/is-dibs-safe", "Is Dibs safe"],
    ],
  },
];

export type LearnMoreLink = {
  href: string;
  label: string;
};

export type LearnMoreLinkGroup = {
  section: LearnMoreSection;
  heading: string;
  links: LearnMoreLink[];
};

export const learnMoreLinkGroups: readonly LearnMoreLinkGroup[] = curatedLearnMoreGroups.map(group => ({
  section: group.section,
  heading: group.heading,
  links: group.links.map(([path, label]) => {
    const page = getSEOPageByPath(path);

    if (!page) {
      throw new Error(`Learn More link is missing from the published SEO registry: ${path}`);
    }

    return { href: page.path, label };
  }),
}));

export function getLearnMoreLinkGroups(currentPath?: string): readonly LearnMoreLinkGroup[] {
  if (!currentPath) return learnMoreLinkGroups;

  if (!getSEOPageByPath(currentPath)) return learnMoreLinkGroups;

  const preferredSection = learnMoreLinkGroups.find(group => (
    group.links.some(link => link.href === currentPath)
  ))?.section;

  return learnMoreLinkGroups
    .map(group => ({
      ...group,
      links: [...group.links].sort(link => link.href === currentPath ? -1 : 0),
    }))
    .sort((groupA, groupB) => {
      const rank = (group: LearnMoreLinkGroup) => {
        if (group.section === "marketplaces") return 0;
        if (group.section === preferredSection) return 1;
        return 2;
      };

      return rank(groupA) - rank(groupB);
    });
}
