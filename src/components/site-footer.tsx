import Link from "next/link";
import { commonDictionaries, paths, type Locale } from "@/i18n/dictionaries";

/** 全ページ共通のフッター。className で印刷時の非表示などを追加する */
export function SiteFooter({ locale, className }: { locale: Locale; className?: string }) {
  return (
    <footer
      className={[
        "flex flex-col items-center gap-2 border-t border-line py-8 text-sm text-muted sm:flex-row sm:justify-center sm:gap-6",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span>© 2026 Ryota Taya</span>
      <Link href={paths[locale].privacy} className="hover:text-accent">
        {commonDictionaries[locale].privacyLink}
      </Link>
    </footer>
  );
}
