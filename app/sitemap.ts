import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://top-tierpadel.com";

  const routes = [
    "",
    "/model/",
    "/schools/",
    "/sports-clubs/",
    "/faqs/",
    "/about-us/",
    "/contact/",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
