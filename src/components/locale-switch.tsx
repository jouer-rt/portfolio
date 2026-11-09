import {
  localeNames,
  otherLocale,
  paths,
  type Locale,
  type Page,
} from "@/i18n/dictionaries";

/** もう一方の言語の同一ページへのリンク。ルートレイアウトを跨ぐためフルリロードになる */
export function LocaleSwitch({ locale, page }: { locale: Locale; page: Page }) {
  const target = otherLocale(locale);
  return (
    <a
      href={paths[target][page]}
      hrefLang={target}
      rel="alternate"
      className="border border-line px-2.5 py-1 font-mono text-xs hover:border-accent hover:text-accent"
    >
      {localeNames[target]}
    </a>
  );
}
