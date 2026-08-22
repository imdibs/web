import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { createWebsiteSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/metadata";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-poppins",
});

const neueMontreal = localFont({
  src: "../public/fonts/NeueMontreal-Medium.otf",
  weight: "500",
  style: "normal",
  variable: "--font-neue-montreal",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Dibs: AI to Buy and Sell Anything",
  description: "Buy and sell through Dibs, the AI-native marketplace you can text.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${neueMontreal.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(createWebsiteSchema()).replace(/</g, "\\u003c") }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}