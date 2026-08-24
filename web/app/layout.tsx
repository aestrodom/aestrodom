import type { Metadata } from "next";
import { Archivo, Martian_Mono, Public_Sans } from "next/font/google";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-display",
  display: "swap",
});

const body = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AESTRODOM",
  description:
    "How much lending collateral on Robinhood Chain can actually exit on-chain. Measured daily against the venues a liquidator contract can call.",
  metadataBase: new URL("https://aestrodom.org"),
  openGraph: {
    title: "AESTRODOM",
    siteName: "AESTRODOM",
    description:
      "How much lending collateral on Robinhood Chain can actually exit on-chain.",
    type: "website",
  },
  twitter: { card: "summary_large_image", site: "@aestrodom" },
  verification: {
    other: { "virtual-protocol-site-verification": "463ddb7fbc2523ceb69773204a5934a7" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
