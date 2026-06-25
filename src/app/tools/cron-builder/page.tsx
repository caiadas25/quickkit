import type { Metadata } from "next";
import CronBuilderClient from "./ToolClient";

export const metadata: Metadata = {
  title: "Cron Expression Builder — Free Online Tool | QuickKit",
  description: "Build cron expressions visually with a point-and-click interface and human-readable descriptions.",
  openGraph: {
    title: "Cron Expression Builder — Free Online Tool | QuickKit",
    description: "Build cron expressions visually with a point-and-click interface and human-readable descriptions.",
    type: "website",
    siteName: "QuickKit",
  },
  twitter: {
    card: "summary",
    title: "Cron Expression Builder — Free Online Tool | QuickKit",
    description: "Build cron expressions visually with a point-and-click interface and human-readable descriptions.",
  },
};

export default function CronBuilderPage() {
  return <CronBuilderClient />;
}
