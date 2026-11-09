import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import Markdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { BlockLogo } from "./block-logo";
import { LocaleSwitch } from "./locale-switch";
import { SiteFooter } from "./site-footer";
import { commonDictionaries, paths, type Locale, type Page } from "@/i18n/dictionaries";

const markdownComponents: Components = {
  // 横に長いスキル表がモバイルでページごと溢れないようにする
  table: ({ children }) => (
    <div className="overflow-x-auto">
      <table>{children}</table>
    </div>
  ),
  // 外部サイトだけ別タブで開く（サイト内リンクと mailto は同じタブのまま）
  a: ({ href, children }) =>
    /^https?:\/\//.test(href ?? "") ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <a href={href}>{children}</a>
    ),
};

/**
 * src/content/ の Markdown を、共通のヘッダー・フッター付きの1ページとして表示する。
 * 職務経歴書・プライバシーポリシーで使う。actions はヘッダー右側に追加するリンク
 */
export async function MarkdownPage({
  locale,
  page,
  sourceFile,
  actions,
}: {
  locale: Locale;
  page: Page;
  /** src/content/ 配下のファイル名 */
  sourceFile: string;
  actions?: React.ReactNode;
}) {
  const source = await fs.readFile(
    path.join(process.cwd(), "src/content", sourceFile),
    "utf8",
  );

  return (
    <div className="mx-auto w-full max-w-4xl px-6">
      <header className="sticky top-0 z-10 -mx-6 border-b border-line bg-[var(--background)]/85 px-6 py-4 backdrop-blur print:hidden">
        <nav className="flex items-center justify-between">
          <Link
            href={paths[locale].home}
            className="flex items-center gap-2 font-bold tracking-wide text-heading"
          >
            <BlockLogo size={18} />
            Ryota Taya
          </Link>
          <div className="flex items-center gap-5 text-sm text-muted">
            {actions}
            <Link href={paths[locale].home} className="hover:text-accent">
              {commonDictionaries[locale].backLink}
            </Link>
            <LocaleSwitch locale={locale} page={page} />
          </div>
        </nav>
      </header>

      <main
        className="prose max-w-none py-12 print:py-0
          prose-headings:font-bold prose-headings:text-heading
          prose-p:text-foreground prose-li:text-foreground
          prose-strong:text-heading prose-code:text-foreground
          prose-th:text-heading prose-td:text-foreground
          prose-h1:text-3xl sm:prose-h1:text-4xl
          prose-h2:mt-14 prose-h2:border-b prose-h2:border-line prose-h2:pb-2
          prose-h4:text-accent
          prose-a:text-accent
          prose-table:text-sm
          prose-th:whitespace-nowrap
          prose-hr:border-line"
      >
        <Markdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {source}
        </Markdown>
      </main>

      <SiteFooter locale={locale} className="print:hidden" />
    </div>
  );
}
