import type { MetadataRoute } from "next";
import { locales, paths, type Page } from "@/i18n/dictionaries";
import { SITE_URL } from "@/lib/site";

// output: "export" ではビルド時に静的ファイルとして書き出す指定が必要
export const dynamic = "force-static";

/** 検索エンジンに載せるページ。職務経歴書は noindex のため載せない */
const INDEXED_PAGES: Page[] = ["home", "privacy"];

/** 検索エンジン向けのサイトマップ */
export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXED_PAGES.flatMap((page) => {
    const languages = Object.fromEntries(
      locales.map((locale) => [locale, `${SITE_URL}${paths[locale][page]}`]),
    );
    return locales.map((locale) => ({
      url: `${SITE_URL}${paths[locale][page]}`,
      lastModified: new Date(),
      alternates: { languages },
    }));
  });
}
