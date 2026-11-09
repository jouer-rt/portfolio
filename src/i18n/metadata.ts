import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { paths, siteMetaDictionaries, type Locale, type Page } from "./dictionaries";

/** 言語別ルートレイアウトの metadata（タイトル・説明文・SNS 共有設定） */
export function buildRootMetadata(locale: Locale): Metadata {
  const { title, description, ogLocale, ogImage } = siteMetaDictionaries[locale];
  const image = { ...ogImage, width: 1200, height: 630 };
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    openGraph: {
      type: "website",
      siteName: title,
      locale: ogLocale,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/** canonical と、もう一方の言語版への hreflang。x-default は日本語版 */
export function localeAlternates(locale: Locale, page: Page): Metadata["alternates"] {
  return {
    canonical: paths[locale][page],
    languages: { ja: paths.ja[page], en: paths.en[page], "x-default": paths.ja[page] },
  };
}
