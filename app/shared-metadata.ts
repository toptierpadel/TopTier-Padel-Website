// Next.js shallow-merges `openGraph` between segments, so a page that sets its own
// `openGraph` (e.g. for `url`) must spread these shared fields back in.
export const openGraphBase = {
  siteName: "TopTier Padel",
  locale: "en_GB",
  type: "website",
  images: [
    {
      url: "/images/toptier-logo-black.png",
      alt: "TopTier Padel Logo",
    },
  ],
};
