/** サイト全体で共有する定数。URL やアカウントが変わったらここだけを直す */

export const SITE_URL = "https://portfolio.jouerworld.com";

export const EMAIL = "ryota.taya@jouerworld.com";

export const GITHUB_URL = "https://github.com/jouer-rt";

/** 画面表示用に URL からスキームと末尾のスラッシュを除く（https://example.com/ → example.com） */
export function displayUrl(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}
