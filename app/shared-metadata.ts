// Next.js shallow-merges `openGraph` between segments, so a page that sets its own
// `openGraph` (e.g. for `url`) must spread these shared fields back in.
export const shareImage = {
  url: "/images/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "TopTier Padel: aerial view of padel courts with the headline Transform unused space into a professionally managed padel facility.",
};

export const openGraphBase = {
  siteName: "TopTier Padel",
  locale: "en_GB",
  type: "website" as const,
  images: [shareImage],
};
