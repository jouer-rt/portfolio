import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { localeAlternates } from "@/i18n/metadata";

export const metadata: Metadata = {
  alternates: localeAlternates("en", "home"),
};

export default function EnHome() {
  return <HomePage locale="en" />;
}
