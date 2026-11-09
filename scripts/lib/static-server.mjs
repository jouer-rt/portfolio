// next build の出力（out/）を配信する最小限のローカルサーバー。PDF 生成時に Chrome から読ませる。
import { createServer } from "node:http";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";

const MIME = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".txt": "text/plain",
  ".woff2": "font/woff2",
  ".json": "application/json",
};

/** child が root の内側にあるか（root 自身を含む） */
function isInside(root, child) {
  const relative = path.relative(root, child);
  return relative !== ".." && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative);
}

/**
 * URL のパスを root 配下のファイルに解決する（/resume → resume.html、/ → index.html）。
 * %2F などで root の外を指すパスは null を返す
 */
function resolveFile(root, pathname) {
  let file = path.join(root, pathname);
  if (!isInside(root, file)) return null;
  if (pathname.endsWith("/")) file = path.join(file, "index.html");
  else if (!path.extname(file) && existsSync(`${file}.html`)) file = `${file}.html`;
  return file;
}

/** root を 127.0.0.1 の空きポートで配信し、{ server, port } を返す */
export async function startStaticServer(root) {
  const server = createServer(async (req, res) => {
    let file = null;
    try {
      file = resolveFile(root, decodeURIComponent(new URL(req.url, "http://localhost").pathname));
    } catch {
      // 不正なパーセントエンコーディングは 404 として扱う
    }
    try {
      if (!file) throw new Error("outside of root");
      const body = await readFile(file);
      res.setHeader("content-type", MIME[path.extname(file)] ?? "application/octet-stream");
      res.end(body);
    } catch {
      res.statusCode = 404;
      res.end("not found");
    }
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  return { server, port: server.address().port };
}
