import type { Metadata } from "next";
import YamlToJsonClient from "./ToolClient";

export const metadata: Metadata = {
  title: "YAML to JSON — Free Online Tool | QuickKit",
  description: "Convert YAML data to JSON format. Supports nested objects, arrays, and all YAML types.",
  openGraph: {
    title: "YAML to JSON — Free Online Tool | QuickKit",
    description: "Convert YAML data to JSON format. Supports nested objects, arrays, and all YAML types.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "YAML to JSON — Free Online Tool | QuickKit",
    description: "Convert YAML data to JSON format. Supports nested objects, arrays, and all YAML types.",
  },
};

export default function YamlToJsonPage() {
  return <YamlToJsonClient />;
}
