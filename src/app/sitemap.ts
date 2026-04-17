import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bridgetogrants.se";

  const staticPages = [
    "",
    "/tjanster",
    "/program",
    "/matcha",
    "/case",
    "/om-oss",
    "/team",
    "/kunskap",
    "/kontakt",
    "/verktyg/checklista",
    "/verktyg/kalkylator",
  ];

  const programSlugs = [
    "horizon-europe",
    "eurostars",
    "life",
    "interreg",
    "innovation-fund",
    "vinnova",
    "energimyndigheten",
    "tillvaxtverket",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...programSlugs.map((slug) => ({
      url: `${baseUrl}/program/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
