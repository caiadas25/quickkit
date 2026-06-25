import type { Metadata } from "next";
import TomlToJsonClient from "./ToolClient";

export const metadata: Metadata = {
  title: "TOML to JSON Converter — Free Online Tool | QuickKit",
  description: "Convert TOML configuration files to JSON. Supports tables, arrays, and nested sections.",
  openGraph: {
    title: "TOML to JSON Converter — Free Online Tool | QuickKit",
    description: "Convert TOML configuration files to JSON. Supports tables, arrays, and nested sections.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "TOML to JSON Converter — Free Online Tool | QuickKit",
    description: "Convert TOML configuration files to JSON. Supports tables, arrays, and nested sections.",
  },
};

export default function TomlToJsonPage() {
  return <TomlToJsonClient />;
}
