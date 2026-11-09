import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

/**
 * Cookie の利用に事前同意が必要な地域（EEA・英国・スイス）。
 * 同意バナーは出さないため、これらの地域では解析 Cookie を使わない（同意は拒否のまま）
 */
const CONSENT_REQUIRED_REGIONS = [
  // EU
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE",
  "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE",
  // EEA（EU 以外）・英国・スイス
  "IS", "LI", "NO", "GB", "CH",
];

/*
 * Consent Mode の既定値。GA の config より前に dataLayer に積む必要がある。
 * 広告は使っていないので広告系は全地域で拒否、解析は上記の地域だけ拒否する
 * （拒否の地域では Cookie を使わない計測になる）
 */
const consentDefaults = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
  analytics_storage: 'denied',
  region: ${JSON.stringify(CONSENT_REQUIRED_REGIONS)}
});
gtag('consent', 'default', {
  ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
  analytics_storage: 'granted'
});
`;

/** Google Analytics 4（Consent Mode の既定値つき）。ルートレイアウトに置く */
export function Analytics({ gaId }: { gaId: string }) {
  return (
    <>
      {/* GA の初期化（afterInteractive）より前に実行させる */}
      <Script id="ga-consent-default" strategy="beforeInteractive">
        {consentDefaults}
      </Script>
      <GoogleAnalytics gaId={gaId} />
    </>
  );
}
