import type { Metadata } from "next";
import { MarkdownPage } from "@/components/markdown-page";
import { localeAlternates } from "@/i18n/metadata";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Ryota Taya",
  description:
    "田矢 凌太（Ryota Taya）のポートフォリオサイトにおける、アクセス解析とお問い合わせ情報の取り扱いについて",
  alternates: localeAlternates("ja", "privacy"),
};

export default function JaPrivacyPage() {
  return <MarkdownPage locale="ja" page="privacy" sourceFile="privacy.md" />;
}
