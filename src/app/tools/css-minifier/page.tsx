import type { Metadata } from "next";
import CssMinifierClient from "./ToolClient";

export const metadata: Metadata = {
  title: "CSS Minifier — Free Online Tool | QuickKit",
  description: "Minify CSS by removing comments, whitespace, and redundant characters.",
  openGraph: {
    title: "CSS Minifier — Free Online Tool | QuickKit",
    description: "Minify CSS by removing comments, whitespace, and redundant characters.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "CSS Minifier — Free Online Tool | QuickKit",
    description: "Minify CSS by removing comments, whitespace, and redundant characters.",
  },
};

export default function CssMinifierPage() {
  return <CssMinifierClient />;
}
