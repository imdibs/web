import type { SEOImageKey } from "./types";

export interface SEOImageConfig {
  src: string;
  alt: string;
  width: number;
  height: number;
  position?: string;
}

export const seoImages: Record<SEOImageKey, SEOImageConfig> = {
  phone: {
    src: "/mockups/white-smartphone.png",
    alt: "A text conversation with Dibs on a phone",
    width: 2400,
    height: 4600,
  },
  ps5: {
    src: "/popups/featured-ps5.jpg",
    alt: "PlayStation 5 console in its box",
    width: 1024,
    height: 796,
  },
  macbook: {
    src: "/popups/mock-macbook.jpg",
    alt: "An open MacBook laptop",
    width: 720,
    height: 960,
  },
  camera: {
    src: "/popups/mock-camera.jpg",
    alt: "A camera ready to be listed for sale",
    width: 720,
    height: 960,
  },
  clothes: {
    src: "/popups/mock-jordans.jpg",
    alt: "Red and white sneakers ready to be listed",
    width: 720,
    height: 960,
  },
  furniture: {
    src: "/popups/mock-bike.jpg",
    alt: "A local item photographed for a marketplace listing",
    width: 720,
    height: 960,
  },
  iphone: {
    src: "/mockups/iphone-x-black.png",
    alt: "An iPhone showing a conversation with Dibs",
    width: 726,
    height: 1444,
  },
  marketplace: {
    src: "/popups/mock-tickets.jpg",
    alt: "A local marketplace item discovered through Dibs",
    width: 900,
    height: 900,
  },
  nycsf: {
    src: "/branding/nycsf-live.png",
    alt: "San Francisco and New York City — Live on Dibs",
    width: 1774,
    height: 887,
  },
};