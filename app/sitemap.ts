import type { MetadataRoute } from "next";

const base = "https://perrinsgrading.com";
const routes = ["", "/about", "/services", "/before-after", "/gallery", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
