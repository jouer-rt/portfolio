import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// output: "export" ではビルド時に静的ファイルとして書き出す指定が必要
export const dynamic = "force-static";

/**
 * 全ページのクロールを許可する。職務経歴書は検索結果から除外するが、
 * noindex を読ませるためにクロール自体は許可する（HTML は meta、PDF 等は vercel.json の X-Robots-Tag）
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
