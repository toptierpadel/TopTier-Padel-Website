import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Note: If you are deploying to a repository subpath (e.g. https://<username>.github.io/top-tier-padel/),
  // you must uncomment the line below and set it to your repository name:
  // basePath: "/top-tier-padel",
};

export default nextConfig;
