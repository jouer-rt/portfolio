import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { localeAlternates } from "@/i18n/metadata";

export const metadata: Metadata = {
  alternates: localeAlternates("ja", "home"),
};

export default function Home() {
  return <HomePage locale="ja" />;
}
