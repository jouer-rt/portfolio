// ヘッドレス Chrome を使うスクリプト（PDF・OGP 画像の生成）で共有する設定。
// Chrome の場所が異なる場合は CHROME_PATH で指定する（例: CHROME_PATH=/path/to/chrome npm run pdf）。
import { existsSync } from "node:fs";

export const CHROME =
  process.env.CHROME_PATH ??
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

/** Chrome が見つからなければメッセージを出して終了する */
export function assertChromeExists() {
  if (!existsSync(CHROME)) {
    console.error(
      `Google Chrome が見つかりません: ${CHROME}\nCHROME_PATH で場所を指定してください。`,
    );
    process.exit(1);
  }
}
