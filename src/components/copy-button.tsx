"use client";

import { useEffect, useRef, useState } from "react";
import { trackContactClick, type ContactClickParams } from "@/lib/analytics";

/** 「コピーしました」を表示しておく時間 */
const COPIED_LABEL_MS = 2000;

/** テキストをクリップボードにコピーするボタン（mailto が使えない閲覧環境向け） */
export function CopyButton({
  text,
  label,
  copiedLabel,
  className,
  track,
}: {
  text: string;
  label: string;
  copiedLabel: string;
  className?: string;
  /** 指定するとコピー成功時に GA4 へ記録する */
  track?: ContactClickParams;
}) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | undefined>(undefined);

  // アンマウント後に setState しないようタイマーを止める
  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (track) trackContactClick(track);
      // 連続で押されたら表示時間を延長する（前のタイマーで早く戻らないようにする）
      window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(() => setCopied(false), COPIED_LABEL_MS);
    } catch {
      // クリップボード API が使えない環境ではアドレスが画面に表示されているので何もしない
    }
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}
