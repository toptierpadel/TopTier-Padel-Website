import type { Metadata } from "next";
import { JsonLd, siteGraph } from "./structured-data";
import "./globals.css";
import { openGraphBase, shareImage } from "./shared-metadata";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://top-tierpadel.com"),
  title: {
    default: "Fully Funded Padel Courts for UK Schools & Clubs | TopTier Padel",
    template: "%s | TopTier Padel",
  },
  description:
    "We fund, build and run padel courts at schools, universities and sports clubs across the UK — at no capital cost to you. See how the partnership works.",
  openGraph: openGraphBase,
  // Title and description fall back to each page's own values.
  twitter: {
    card: "summary_large_image",
    images: [shareImage],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <JsonLd data={siteGraph} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only rounded-full bg-white text-sm font-bold text-slate-950 shadow-xl focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:px-5 focus:py-3"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}