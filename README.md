# portfolio

田矢 凌太（Ryota Taya）のポートフォリオサイト。本番: https://portfolio.jouerworld.com

Next.js（App Router）の静的エクスポート（`output: "export"`）で `out/` に HTML を書き出し、Vercel から配信しています。`main` へのマージで自動デプロイされます。

## ページ

| パス | 内容 | 検索エンジン |
| --- | --- | --- |
| `/`・`/en` | トップ（スキル・作品・お仕事のご依頼・連絡先） | 掲載 |
| `/resume`・`/en/resume` | 職務経歴書（PDF もダウンロード可） | noindex |
| `/privacy`・`/en/privacy` | プライバシーポリシー | 掲載 |

日本語は `src/app/(ja)`、英語は `src/app/(en)` の Route Group に分かれ、それぞれが `<html lang>` の異なるルートレイアウトを持ちます。

## 文言・コンテンツの置き場所

- `src/i18n/dictionaries.ts` — 画面の文言（日英）、ページのパス、作品データ
- `src/content/resume.md`・`resume.en.md` — 職務経歴書
- `src/content/privacy.md`・`privacy.en.md` — プライバシーポリシー
- `src/lib/site.ts` — サイト URL・メールアドレス・GitHub URL

## 開発

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # out/ に静的ファイルを出力
```

## 生成物の更新

PDF と OGP 画像はヘッドレス Chrome で生成し、`public/` にコミットします。Chrome の場所が標準と異なる場合は `CHROME_PATH` で指定します。

```bash
npm run pdf     # 職務経歴書を更新したら: public/resume.pdf・resume-en.pdf
npm run og      # 共有画像の文言を変えたら: public/og.png・og-en.png（scripts/og-image.html）
```

## 環境変数

| 変数 | 用途 |
| --- | --- |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 の測定 ID。未設定ならアクセス解析を読み込まない。Consent Mode の既定値（EEA・英国・スイスは解析 Cookie を使わない）は `src/components/analytics.tsx` |

## セキュリティ・配信設定

- 静的エクスポートでは `next.config` の `headers()` が使えないため、レスポンスヘッダーは `vercel.json` で付けています（`X-Frame-Options` などのセキュリティヘッダーと、職務経歴書の PDF・RSC ペイロードを検索から外す `X-Robots-Tag`）。
- CSP は、ページを壊さない項目（`frame-ancestors` など）だけを強制しています。スクリプトの読み込み元を含む全体のポリシーは `Content-Security-Policy-Report-Only` で入れているので、ブラウザのコンソールに違反が出ていないか確認してから強制に切り替えてください。
- GitHub Actions（`.github/workflows/ci.yml`）が PR ごとに lint とビルドを実行し、Dependabot が依存パッケージを週次で更新します。
