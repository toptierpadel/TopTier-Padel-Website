import type { Metadata } from "next";
import "./globals.css";
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
  openGraph: {
    siteName: "TopTier Padel",
    locale: "en_GB",
    type: "website",
    url: "https://top-tierpadel.com",
    images: [
      {
        url: "/images/toptier-logo-black.png",
        alt: "TopTier Padel Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Fully Funded Padel Courts for UK Schools & Clubs | TopTier Padel",
    description:
      "We fund, build and run padel courts at schools, universities and sports clubs across the UK — at no capital cost to you.",
    images: ["/images/toptier-logo-black.png"],
  },
  alternates: {
    canonical: "/",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://top-tierpadel.com/#website",
                  "name": "TopTier Padel",
                  "alternateName": [
                    "Top Tier Padel",
                    "TopTier Padel Ltd"
                  ],
                  "url": "https://top-tierpadel.com",
                },
                {
                  "@type": "Organization",
                  "@id": "https://top-tierpadel.com/#organization",
                  "name": "TopTier Padel Ltd",
                  "legalName": "TopTier Padel Ltd",
                  "url": "https://top-tierpadel.com",
                  "logo": "https://top-tierpadel.com/images/toptier-logo-black.png",
                  "areaServed": "GB",
                  "identifier": "15614210",
                  "sameAs": [
                    "https://www.linkedin.com/company/toptier-padel/"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "Customer Support",
                    "email": "info@top-tierpadel.com"
                  }
                }
              ]
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