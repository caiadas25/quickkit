import type { Metadata } from "next";
import JsonToYamlClient from "./ToolClient";

export const metadata: Metadata = {
  title: "JSON to YAML — Free Online Tool | QuickKit",
  description: "Convert JSON to clean, readable YAML. Perfect for config files and manifests.",
  openGraph: {
    title: "JSON to YAML — Free Online Tool | QuickKit",
    description: "Convert JSON to clean, readable YAML. Perfect for config files and manifests.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "JSON to YAML — Free Online Tool | QuickKit",
    description: "Convert JSON to clean, readable YAML. Perfect for config files and manifests.",
  },
};

export default function JsonToYamlPage() {
  return <JsonToYamlClient />;
}
