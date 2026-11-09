import { MarkdownPage } from "./markdown-page";
import { resumeDictionaries, type Locale } from "@/i18n/dictionaries";

/** 職務経歴書（src/content/resume*.md）。ヘッダーに PDF のダウンロードリンクを出す */
export function ResumePage({ locale }: { locale: Locale }) {
  const dict = resumeDictionaries[locale];
  return (
    <MarkdownPage
      locale={locale}
      page="resume"
      sourceFile={dict.sourceFile}
      actions={
        <a href={dict.pdfPath} download={dict.pdfDownloadName} className="hover:text-accent">
          {dict.pdfLink}
        </a>
      }
    />
  );
}
