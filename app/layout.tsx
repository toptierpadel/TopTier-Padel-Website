import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "TopTier Padel | Padel Courts for Education & Sport",
  description:
    "TopTier Padel helps schools, universities and sports clubs fund, construct, and manage high-quality padel facilities.",
  openGraph: {
    siteName: "TopTier Padel",
    title: "TopTier Padel | Padel Courts for Education & Sport",
    description: "TopTier Padel helps schools, universities and sports clubs fund, construct, and manage high-quality padel facilities.",
    url: "https://top-tierpadel.com",
    images: [
      {
        url: "https://top-tierpadel.com/images/toptier-logo-black.png",
        alt: "TopTier Padel Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "TopTier Padel | Padel Courts for Education & Sport",
    description: "TopTier Padel helps schools, universities and sports clubs fund, construct, and manage high-quality padel facilities.",
    images: ["https://top-tierpadel.com/images/toptier-logo-black.png"],
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "TopTier Padel",
              "url": "https://top-tierpadel.com",
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}