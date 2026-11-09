import { Geist_Mono, Noto_Sans_JP } from "next/font/google";
import { Analytics } from "@/components/analytics";
import type { Locale } from "@/i18n/dictionaries";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** 言語別ルートレイアウト（(ja)/(en) Route Group）で共有する <html> シェル */
export function RootDocument({
  lang,
  children,
}: {
  lang: Locale;
  children: React.ReactNode;
}) {
  return (
    <html
      lang={lang}
      className={`${notoSansJp.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      {process.env.NEXT_PUBLIC_GA_ID && <Analytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
    </html>
  );
}
