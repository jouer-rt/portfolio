// out/ の職務経歴書ページ（日英）をヘッドレス Chrome で PDF 化して public/ に出力する。
// 使い方: npm run pdf（next build → PDF 生成の順に実行される）
// resume.md / resume.en.md を更新したら再実行して public/ の PDF をコミットし直すこと。
import { copyFile, mkdtemp, rm, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { spawn } from "node:child_process";
import { tmpdir } from "node:os";
import path from "node:path";
import { CHROME, assertChromeExists } from "./lib/chrome.mjs";
import { startStaticServer } from "./lib/static-server.mjs";

const root = path.join(process.cwd(), "out");

// route: out/ 内のページ、pdf: public/ に出力するファイル名
const TARGETS = [
  { route: "/resume", html: "resume.html", pdf: "resume.pdf" },
  { route: "/en/resume", html: "en/resume.html", pdf: "resume-en.pdf" },
];

for (const { html } of TARGETS) {
  if (!existsSync(path.join(root, html))) {
    console.error(`out/${html} がありません。先に next build を実行してください。`);
    process.exit(1);
  }
}
assertChromeExists();

const { server, port } = await startStaticServer(root);

async function generatePdf(route, pdfPath) {
  // 旧 PDF が残っていると下の「サイズ安定 = 完了」判定が誤爆するため必ず消してから生成する
  await rm(pdfPath, { force: true });

  // 起動中の Chrome とプロファイルが衝突しないよう使い捨ての user-data-dir を使う
  const profile = await mkdtemp(path.join(tmpdir(), "resume-pdf-"));
  const args = [
    "--headless",
    "--disable-gpu",
    "--no-first-run",
    // GoogleUpdater などの子プロセスが起動して待ち続けるのを防ぐ
    "--disable-component-update",
    "--disable-background-networking",
    `--user-data-dir=${profile}`,
    "--no-pdf-header-footer",
    `--print-to-pdf=${pdfPath}`,
    "--virtual-time-budget=10000",
    `http://127.0.0.1:${port}${route}`,
  ];

  // Chrome (macOS) は --print-to-pdf 完了後もプロセスが残り続けることがあるため、
  // 終了は待たず、PDF ファイルのサイズが安定したことをもって完了とみなして kill する
  const ok = await new Promise((resolve) => {
    const chrome = spawn(CHROME, args, { stdio: "ignore" });
    let lastSize = -1;
    const startedAt = Date.now();
    const timer = setInterval(async () => {
      const size = await stat(pdfPath).then((s) => s.size).catch(() => -1);
      if (size > 0 && size === lastSize) {
        clearInterval(timer);
        chrome.kill();
        resolve(true);
      } else if (Date.now() - startedAt > 60_000) {
        clearInterval(timer);
        chrome.kill();
        resolve(false);
      }
      lastSize = size;
    }, 1000);
    chrome.on("exit", () => {
      clearInterval(timer);
      resolve(existsSync(pdfPath));
    });
    chrome.on("error", () => {
      clearInterval(timer);
      resolve(false);
    });
  });
  // kill 直後は Chrome がまだプロファイルへ書き込み中のことがあるため削除はベストエフォート
  await rm(profile, { recursive: true, force: true }).catch(() => {});
  return ok;
}

let failed = false;
for (const { route, pdf } of TARGETS) {
  const pdfPath = path.join(process.cwd(), "public", pdf);
  const ok = await generatePdf(route, pdfPath);
  if (!ok) {
    console.error(`PDF 生成に失敗しました: ${route}（60 秒以内に出力が完了しませんでした）`);
    failed = true;
    continue;
  }
  // ローカルの out/ からも配信できるようコピーしておく（Vercel では public/ 経由で配信される）
  await copyFile(pdfPath, path.join(root, pdf));
  const { size } = await stat(pdfPath);
  console.log(`生成完了: public/${pdf} (${(size / 1024).toFixed(0)} KB)`);
}

server.closeAllConnections?.();
server.close();
process.exit(failed ? 1 : 0);
