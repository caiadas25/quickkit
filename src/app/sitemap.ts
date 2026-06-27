import { MetadataRoute } from "next";
import { tools } from "@/lib/tools";

const BASE_URL = "https://quickkit-nine.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages = tools.map((tool) => ({
    url: `${BASE_URL}${tool.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = [
    "git-cheat-sheet",
    "regex-cheat-sheet",
    "what-is-protobuf",
    "how-to-generate-uuids",
    "day2-ai-dev-tools-journey",
    "how-to-format-json",
    "what-is-base64-encoding",
    "cron-expressions-explained",
    "how-to-convert-yaml-to-json",
    "how-to-minify-html-css",
    "how-to-decode-jwt",
    "how-to-minify-javascript",
    "what-is-toml",
    "css-flexbox-cheat-sheet",
    "docker-cheat-sheet",
    "how-to-convert-csv-to-json",
    "how-to-convert-json-to-csv",
    "what-is-markdown",
    "markdown-cheat-sheet",
    "json-cheat-sheet",
  ].map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...toolPages,
    ...blogPages,
  ];
}
