import type { Metadata } from "next";
import CsvToJsonClient from "./ToolClient";

export const metadata: Metadata = {
  title: "CSV to JSON — Free Online Tool | QuickKit",
  description: "Convert CSV data to JSON arrays with configurable delimiters and header options.",
  openGraph: {
    title: "CSV to JSON — Free Online Tool | QuickKit",
    description: "Convert CSV data to JSON arrays with configurable delimiters and header options.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "CSV to JSON — Free Online Tool | QuickKit",
    description: "Convert CSV data to JSON arrays with configurable delimiters and header options.",
  },
};

export default function CsvToJsonPage() {
  return <CsvToJsonClient />;
}
