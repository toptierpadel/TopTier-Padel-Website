import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";

// Generated at build time from the app/ folders, so every page is listed automatically.
// lastModified is omitted on purpose: CI builds from a shallow clone, so there is no
// reliable per-page date, and Google ignores lastmod values it finds inaccurate.
export const dynamic = "force-static";

const siteUrl = "https://top-tierpadel.com";

function findRoutes(dir: string, route = "/"): string[] {
  const routes = fs.existsSync(path.join(dir, "page.tsx")) ? [route] : [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    // Skip private (_x), route-group ((x)) and dynamic ([x]) folders.
    if (entry.isDirectory() && !/^[_([]/.test(entry.name)) {
      routes.push(...findRoutes(path.join(dir, entry.name), `${route}${entry.name}/`));
    }
  }
  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return findRoutes(path.join(process.cwd(), "app")).map((route) => ({
    url: `${siteUrl}${route}`,
  }));
}
