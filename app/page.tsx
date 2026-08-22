import Image from "next/image";
import { HeroShowcase } from "@/components/hero-showcase";
import { HomeHeader } from "@/components/home-header";
import { SiteFooter } from "@/components/site-footer";
import { createPublicMetadata } from "@/lib/seo/metadata";

export const metadata = createPublicMetadata(
  "Dibs: AI to Buy and Sell Anything",
  "Buy and sell through Dibs, the AI-native marketplace you can text.",
  "/",
);

export default function Home() {
  return (
    <main className="home-page">
      <div className="blank-page">
        <HomeHeader />

        <Image
          className="home-location-badge"
          src="/branding/miami-live.png"
          alt="Miami, Florida — Live"
          width={1774}
          height={887}
          unoptimized
          priority
        />

        <HeroShowcase />
      </div>
      <SiteFooter />
    </main>
  );
}