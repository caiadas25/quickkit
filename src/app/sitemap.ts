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
    "git-commands-cheat-sheet",
    "how-to-convert-json-to-xml",
    "javascript-regex-cheat-sheet",
    "css-selectors-cheat-sheet",
    "npm-cheat-sheet",
    "javascript-array-methods-cheat-sheet",
    "unix-timestamp-converter",
    "bash-cheat-sheet",
    "sql-cheat-sheet",
    "html-cheat-sheet",
    "python-cheat-sheet",
    "typescript-cheat-sheet",
    "html-entities-cheat-sheet",
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
    "css-grid-cheat-sheet",
    "docker-cheat-sheet",
    "how-to-convert-csv-to-json",
    "how-to-convert-json-to-csv",
    "what-is-markdown",
    "markdown-cheat-sheet",
    "json-cheat-sheet",
    "react-hooks-cheat-sheet",
    "react-cheat-sheet",
    "nodejs-cheat-sheet",
    "kubernetes-cheat-sheet",
    "rest-api-cheat-sheet",
    "http-status-codes-explained",
    "css-flexbox-vs-grid",
    "css-variables-cheat-sheet",
    "git-branching-cheat-sheet",
    "tailwind-css-cheat-sheet",
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
