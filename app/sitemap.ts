import type { MetadataRoute } from "next";
import { tracks } from "@/src/data/tracks";
import { siteUrl } from "@/src/lib/utils";

const staticRoutes = ["", "/music", "/videos", "/about", "/contact", "/copyright"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: siteUrl(route),
      lastModified: now,
      changeFrequency: route === "" || route === "/music" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.7,
    })),
    ...tracks.map((track) => ({
      url: siteUrl(`/music/${track.slug}`),
      lastModified: track.releaseDate ? new Date(track.releaseDate) : now,
      changeFrequency: "monthly" as const,
      priority: track.featured ? 0.8 : 0.6,
    })),
  ];
}
