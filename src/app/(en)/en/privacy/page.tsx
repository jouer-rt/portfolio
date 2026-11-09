import type { Metadata } from "next";
import { MarkdownPage } from "@/components/markdown-page";
import { localeAlternates } from "@/i18n/metadata";

export const metadata: Metadata = {
  title: "Privacy Policy | Ryota Taya",
  description:
    "How Ryota Taya's portfolio site handles analytics data and information sent through inquiries",
  alternates: localeAlternates("en", "privacy"),
};

export default function EnPrivacyPage() {
  return <MarkdownPage locale="en" page="privacy" sourceFile="privacy.en.md" />;
}
