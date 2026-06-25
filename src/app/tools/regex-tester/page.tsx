import type { Metadata } from "next";
import RegexTesterClient from "./ToolClient";

export const metadata: Metadata = {
  title: "Regex Tester — Free Online Tool | QuickKit",
  description: "Test regular expressions with live highlighting, match details, and common presets.",
  openGraph: {
    title: "Regex Tester — Free Online Tool | QuickKit",
    description: "Test regular expressions with live highlighting, match details, and common presets.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "Regex Tester — Free Online Tool | QuickKit",
    description: "Test regular expressions with live highlighting, match details, and common presets.",
  },
};

export default function RegexTesterPage() {
  return <RegexTesterClient />;
}
