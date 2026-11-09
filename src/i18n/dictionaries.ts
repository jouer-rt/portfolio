export type Locale = "ja" | "en";

export const locales: Locale[] = ["ja", "en"];

export const otherLocale = (locale: Locale): Locale =>
  locale === "ja" ? "en" : "ja";

/** 各ロケールの表示名（言語スイッチャーのリンクラベルに使う） */
export const localeNames: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
};

export type Page = "home" | "resume" | "privacy";

/** ロケールごとのルーティング。日本語は既存 URL を維持し、英語は /en 配下 */
export const paths: Record<Locale, Record<Page, string>> = {
  ja: { home: "/", resume: "/resume", privacy: "/privacy" },
  en: { home: "/en", resume: "/en/resume", privacy: "/en/privacy" },
};

/** ルートレイアウトの metadata（タイトル・説明文・SNS 共有画像）に使う文言 */
export type SiteMetaDictionary = {
  title: string;
  description: string;
  /** Open Graph の locale（ja_JP / en_US） */
  ogLocale: string;
  /** SNS 共有用の画像（npm run og で public/ に生成） */
  ogImage: { url: string; alt: string };
};

export const siteMetaDictionaries: Record<Locale, SiteMetaDictionary> = {
  ja: {
    title: "Ryota Taya | Portfolio",
    description:
      "田矢 凌太（Ryota Taya）のポートフォリオ。Python／Django を中心とした Web バックエンド開発、AWS、Stripe 決済を得意とするエンジニアです。Stripe 決済の導入・不具合調査や Django／AWS の保守などのご依頼を、副業として受け付けています。",
    ogLocale: "ja_JP",
    ogImage: {
      url: "/og.png",
      alt: "田矢 凌太（Ryota Taya）— お仕事のご依頼を受け付けています",
    },
  },
  en: {
    title: "Ryota Taya | Portfolio",
    description:
      "Portfolio of Ryota Taya, a web engineer specializing in Python/Django backends, AWS infrastructure, and Stripe payments. Available for freelance work, including Stripe integration and troubleshooting and Django/AWS maintenance.",
    ogLocale: "en_US",
    ogImage: {
      url: "/og-en.png",
      alt: "Ryota Taya — Available for freelance work",
    },
  },
};

/** 複数のページで共有する文言 */
export const commonDictionaries: Record<
  Locale,
  { backLink: string; privacyLink: string }
> = {
  ja: { backLink: "← ポートフォリオへ戻る", privacyLink: "プライバシーポリシー" },
  en: { backLink: "← Back to portfolio", privacyLink: "Privacy Policy" },
};

export type WorkEntry = {
  title: string;
  subtitle: string;
  url?: string;
  description: string;
  tags: string[];
  /** 公開デモの案内（アカウントと注意書き） */
  demo?: { email: string; password: string; note: string };
  /** デモ動画（public/ 配下のパス） */
  videoSrc?: string;
};

/** お仕事のご依頼：提供メニュー1件分 */
export type ServiceMenu = {
  /** 言語に依存しない識別子（アクセス解析でメニューを区別するのに使う） */
  id: string;
  title: string;
  description: string;
  /** 「こんなご相談に」の例 */
  examples: string[];
  /** 料金の目安（税別） */
  prices: { label: string; value: string }[];
};

/** 依頼メールのテンプレート項目。topic: true の項目にはメニュー名を差し込む */
export type MailField = { label: string; topic?: boolean };

export type ServicesDictionary = {
  sub: string;
  title: string;
  lead: string;
  examplesLabel: string;
  priceLabel: string;
  priceNote: string;
  menuCta: string;
  menus: ServiceMenu[];
  termsTitle: string;
  terms: { label: string; value: string }[];
  flowTitle: string;
  flow: { title: string; description: string }[];
  cta: {
    title: string;
    description: string;
    mailButton: string;
    copyButton: string;
    copiedLabel: string;
    fieldsLabel: string;
    fallback: string;
  };
  mail: {
    /** 件名。メニュー別の場合は `${subject}${subjectSeparator}${メニュー名}` */
    subject: string;
    subjectSeparator: string;
    /** 項目名と記入欄の区切り（「：」/ ": "） */
    fieldSeparator: string;
    fields: MailField[];
  };
};

export type HomeDictionary = {
  nav: { skills: string; works: string; services: string; contact: string };
  hero: {
    role: string;
    name: string;
    nameSub: string;
    intro: string;
    servicesCta: string;
    resumeCta: string;
  };
  skills: {
    sub: string;
    title: string;
    items: string[];
    note: { before: string; link: string; after: string };
  };
  works: {
    sub: string;
    title: string;
    entries: WorkEntry[];
    demoLabel: string;
    demoSeparator: string;
    videoFallback: string;
    note: { before: string; link: string; after: string };
  };
  services: ServicesDictionary;
  contact: {
    sub: string;
    title: string;
    emailLabel: string;
    githubLabel: string;
    resumeLabel: string;
    resumeLinkText: string;
  };
};

export type ResumeDictionary = {
  pdfLink: string;
  /** PDF の配信パス（npm run pdf で public/ に生成） */
  pdfPath: string;
  pdfDownloadName: string;
  /** レンダリングする Markdown ファイル（src/content/ 配下） */
  sourceFile: string;
};

/*
 * 言語に依存しない作品データ（URL・技術タグ・デモアカウント・動画）。
 * 日英の entries から展開して使うので、変更はここだけで両言語に反映される。
 */
const SOLOOPS = {
  url: "https://solops.jouerworld.com/",
  tags: [
    "Django REST Framework",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "AWS Lambda",
    "Aurora Serverless v2",
    "CloudFront",
    "Terraform",
    "Playwright",
  ],
  videoSrc: "/videos/soloops-demo.mp4",
};

const SOLOOPS_DEMO_ACCOUNT = {
  email: "demo@soloops.example.com",
  password: "DemoPassw0rd!",
};

const OSHIBELL = {
  url: "https://oshibell.jouerworld.com/",
  tags: ["Swift", "SwiftUI", "SwiftData", "WidgetKit", "Firebase Analytics / Crashlytics"],
};

export const homeDictionaries: Record<Locale, HomeDictionary> = {
  ja: {
    nav: { skills: "Skills", works: "Works", services: "Services", contact: "Contact" },
    hero: {
      role: "Web Engineer — Backend / Infrastructure",
      name: "田矢 凌太",
      nameSub: "Ryota Taya",
      intro:
        "Python／Django を中心とした Web バックエンド開発、AWS を利用したインフラ構築・運用、Stripe を利用した決済機能の開発を得意とするエンジニアです。現在は Next.js や SwiftUI、AI コーディングエージェントも活用し、Web サービスと iOS アプリの個人開発にも取り組んでいます。",
      servicesCta: "お仕事のご依頼",
      resumeCta: "職務経歴書を見る",
    },
    skills: {
      sub: "Skills",
      title: "テクニカルスキル",
      items: [
        "Python",
        "Django / Django REST Framework",
        "AWS",
        "Stripe",
        "Docker",
        "GitHub Actions (CI/CD)",
        "Next.js / TypeScript",
        "Swift / SwiftUI",
        "pytest / Playwright",
        "AI コーディングエージェント",
      ],
      note: {
        before: "スキルの一覧と詳細な経験区分は",
        link: "職務経歴書",
        after: "を参照してください。",
      },
    },
    works: {
      sub: "Works",
      title: "個人開発",
      demoLabel: "デモアカウント：",
      demoSeparator: "／",
      videoFallback: "お使いのブラウザは動画再生に対応していません。",
      note: {
        before: "各作品の担当工程・実装内容の詳細は",
        link: "職務経歴書",
        after: "を参照してください。",
      },
      entries: [
        {
          ...SOLOOPS,
          title: "SoloOps",
          subtitle: "個人事業者向け 案件・請求管理 Web サービス（公開デモ）",
          description:
            "副業・フリーランスのクライアント、案件、稼働時間、請求書、入金を一元管理する Web サービス。要件定義から実装、AWS サーバーレス構成の構築・運用まで、全工程を個人で担当しています。",
          demo: {
            ...SOLOOPS_DEMO_ACCOUNT,
            note: "サンプルデータ入りのデモアカウントです。コスト最適化のためサーバーを自動停止しており、初回アクセスには 15 秒ほどかかります。",
          },
        },
        {
          ...OSHIBELL,
          title: "推しベル",
          subtitle: "カウントダウン iOS アプリ（開発中）",
          description:
            "VTuber・歌い手・配信者ファン向けのカウントダウン iOS アプリ。バックエンドを持たない MVP として、UI 実装からデータ管理、ローカル通知、ウィジェット、SNS 共有画像生成までを個人で設計・実装しています。",
        },
      ],
    },
    services: {
      sub: "Services",
      title: "お仕事のご依頼",
      lead: "副業として、Web バックエンド・決済・インフラまわりのご依頼をお受けしています。実務で設計から運用まで担当してきた Stripe 決済、Django、AWS を中心に対応します。",
      examplesLabel: "こんなご相談に",
      priceLabel: "料金の目安",
      priceNote:
        "金額は税別の目安です。内容を伺ったうえで、正式にお見積もりします。",
      menuCta: "この内容で相談する",
      menus: [
        {
          id: "stripe",
          title: "Stripe 決済の導入・不具合調査",
          description:
            "カード決済・継続課金（サブスクリプション）・請求書発行などの導入と、既存の決済処理の不具合調査・改修を行います。Webhook の取りこぼし、二重決済、決済失敗時の再試行など、異常系の対応を得意としています。",
          examples: [
            "サブスクリプションを導入したい",
            "Webhook の処理がときどき失敗する",
            "二重決済や決済失敗時の処理を見直したい",
          ],
          prices: [
            { label: "調査・改修", value: "5万円〜" },
            { label: "新規導入", value: "15万円〜" },
          ],
        },
        {
          id: "django-aws",
          title: "Django／AWS の保守・改善",
          description:
            "既存の Django アプリケーションの機能追加・不具合修正と、AWS 上のシステムの運用改善を行います。ログからの障害調査、定期バッチの Lambda 化、テストや GitHub Actions による自動デプロイの導入にも対応します。",
          examples: [
            "保守する人がいなくなった Django アプリを引き継いでほしい",
            "障害の原因をログから調べてほしい",
            "手作業のデプロイを自動化したい",
          ],
          prices: [
            { label: "月額保守（月10時間程度）", value: "5万円〜／月" },
            { label: "スポット対応", value: "5,000円〜／時間" },
          ],
        },
        {
          id: "web-dev",
          title: "小規模 Web サービスの開発",
          description:
            "会員登録・予約・決済などを含む小規模な Web サービスや管理画面を、要件整理から設計・実装・AWS へのデプロイまで一人で担当します。個人開発の SoloOps と同じ構成（Django REST Framework＋Next.js）で開発できます。",
          examples: [
            "決済付きの小さな Web サービスを立ち上げたい",
            "社内向けの管理画面を作りたい",
            "アイデアを MVP として形にしたい",
          ],
          prices: [{ label: "開発一式", value: "30万円〜" }],
        },
      ],
      termsTitle: "稼働・進め方",
      terms: [
        { label: "稼働", value: "週 10 時間程度（平日夜・土日）" },
        {
          label: "進め方",
          value: "フルリモート。打ち合わせは平日夜・土日にオンラインで行います",
        },
        {
          label: "契約形態",
          value: "準委任（時間単価・月額）または請負（成果物単位）",
        },
        { label: "お見積もり", value: "無料" },
      ],
      flowTitle: "ご依頼の流れ",
      flow: [
        { title: "お問い合わせ", description: "メールでご相談内容をお送りください" },
        { title: "ヒアリング", description: "内容を伺い、お見積もりをお出しします" },
        { title: "ご契約", description: "範囲・金額・期間に合意のうえ契約します" },
        { title: "着手", description: "作業を進め、進捗を随時ご報告します" },
      ],
      cta: {
        title: "まずはメールでご相談ください",
        description:
          "ボタンを押すと、ご依頼内容の記入欄が入ったメールが開きます。分かる範囲のご記入で構いません。通常 2 日以内にご返信します。",
        mailButton: "メールで相談する",
        copyButton: "アドレスをコピー",
        copiedLabel: "コピーしました",
        fieldsLabel: "記入いただく内容",
        fallback:
          "メールソフトが開かない場合は、上記のアドレス宛てに直接お送りください。",
      },
      mail: {
        subject: "お仕事のご相談",
        subjectSeparator: "：",
        fieldSeparator: "：",
        fields: [
          { label: "お名前／会社名" },
          { label: "ご依頼内容", topic: true },
          { label: "現在の状況・お困りごと" },
          { label: "使用中の技術・サービス（分かる範囲で）" },
          { label: "ご予算" },
          { label: "ご希望の時期" },
        ],
      },
    },
    contact: {
      sub: "Contact",
      title: "連絡先・リンク",
      emailLabel: "Email",
      githubLabel: "GitHub",
      resumeLabel: "職務経歴書",
      resumeLinkText: "職務経歴書を見る",
    },
  },
  en: {
    nav: { skills: "Skills", works: "Works", services: "Services", contact: "Contact" },
    hero: {
      role: "Web Engineer — Backend / Infrastructure",
      name: "Ryota Taya",
      nameSub: "田矢 凌太",
      intro:
        "I am a web engineer specializing in backend development with Python and Django, building and operating infrastructure on AWS, and implementing payment features with Stripe. I also build web services and iOS apps on my own, working with Next.js, SwiftUI, and AI coding agents.",
      servicesCta: "Work with me",
      resumeCta: "View resume",
    },
    skills: {
      sub: "Skills",
      title: "Technical Skills",
      items: [
        "Python",
        "Django / Django REST Framework",
        "AWS",
        "Stripe",
        "Docker",
        "GitHub Actions (CI/CD)",
        "Next.js / TypeScript",
        "Swift / SwiftUI",
        "pytest / Playwright",
        "AI coding agents",
      ],
      note: {
        before: "See the",
        link: "resume",
        after: "for the full list of skills and experience levels.",
      },
    },
    works: {
      sub: "Works",
      title: "Personal Projects",
      demoLabel: "Demo account: ",
      demoSeparator: "/",
      videoFallback: "Your browser does not support video playback.",
      note: {
        before: "See the",
        link: "resume",
        after: "for details on my role and implementation work in each project.",
      },
      entries: [
        {
          ...SOLOOPS,
          title: "SoloOps",
          subtitle:
            "Project & invoicing management web service for solo businesses (public demo)",
          description:
            "A web service that centralizes clients, projects, tracked hours, invoices, and payments for freelancers and side businesses. I handle every stage on my own, from requirements definition through implementation to building and operating the AWS serverless infrastructure.",
          demo: {
            ...SOLOOPS_DEMO_ACCOUNT,
            note: "A demo account preloaded with sample data. The server is stopped automatically to optimize costs, so the first access takes about 15 seconds.",
          },
        },
        {
          ...OSHIBELL,
          title: "Oshibell",
          subtitle: "Countdown iOS app (in development)",
          description:
            "A countdown iOS app for fans of VTubers, cover singers, and streamers. Built as a backend-less MVP; I design and implement everything on my own, from the UI and data management to local notifications, widgets, and social-share image generation.",
        },
      ],
    },
    services: {
      sub: "Services",
      title: "Work with Me",
      lead: "Alongside my full-time role, I take on freelance work in web backends, payments, and infrastructure, focusing on Stripe, Django, and AWS: the areas I have designed and operated in production.",
      examplesLabel: "Typical requests",
      priceLabel: "Estimated price",
      priceNote:
        "Prices are estimates in Japanese yen, excluding tax. I will send a formal quote once I understand your needs.",
      menuCta: "Ask about this",
      menus: [
        {
          id: "stripe",
          title: "Stripe payments: integration & troubleshooting",
          description:
            "I integrate card payments, subscriptions, and invoicing, and investigate and fix issues in existing payment flows. I specialize in failure cases such as missed webhooks, duplicate charges, and retries after failed payments.",
          examples: [
            "Add subscription billing",
            "Webhook handling fails from time to time",
            "Review how duplicate or failed payments are handled",
          ],
          prices: [
            { label: "Troubleshooting & fixes", value: "From ¥50,000" },
            { label: "New integration", value: "From ¥150,000" },
          ],
        },
        {
          id: "django-aws",
          title: "Django / AWS maintenance & improvements",
          description:
            "I add features to and fix bugs in existing Django applications, and improve how systems run on AWS. This includes tracing incidents through logs, moving scheduled jobs to Lambda, and introducing tests and automated deployment with GitHub Actions.",
          examples: [
            "Take over a Django app nobody is maintaining",
            "Find the cause of an incident from the logs",
            "Automate manual deployments",
          ],
          prices: [
            { label: "Monthly retainer (about 10 h)", value: "From ¥50,000 / month" },
            { label: "Ad hoc work", value: "From ¥5,000 / hour" },
          ],
        },
        {
          id: "web-dev",
          title: "Small web service development",
          description:
            "I build small web services and admin tools with sign-up, booking, or payments, handling everything from requirements and design to implementation and deployment on AWS. I can use the same stack as my SoloOps project (Django REST Framework + Next.js).",
          examples: [
            "Launch a small web service with payments",
            "Build an internal admin dashboard",
            "Turn an idea into an MVP",
          ],
          prices: [{ label: "Full project", value: "From ¥300,000" }],
        },
      ],
      termsTitle: "Availability & Working Style",
      terms: [
        {
          label: "Availability",
          value: "About 10 hours a week (weekday evenings and weekends)",
        },
        {
          label: "Working style",
          value: "Fully remote; meetings online on weekday evenings or weekends",
        },
        {
          label: "Contract",
          value: "Time-based (hourly or monthly) or fixed-price per deliverable",
        },
        { label: "Quotes", value: "Free" },
      ],
      flowTitle: "How It Works",
      flow: [
        { title: "Inquiry", description: "Email me what you need" },
        { title: "Discussion", description: "I review the details and send a quote" },
        { title: "Agreement", description: "We agree on scope, price, and timeline" },
        { title: "Work begins", description: "I start and keep you updated on progress" },
      ],
      cta: {
        title: "Start with an email",
        description:
          "The button opens an email with fields for the details of your request. Fill in whatever you can. I usually reply within 2 days.",
        mailButton: "Email me",
        copyButton: "Copy address",
        copiedLabel: "Copied",
        fieldsLabel: "What to include",
        fallback:
          "If no mail app opens, please send your message directly to the address above.",
      },
      mail: {
        subject: "Work inquiry",
        subjectSeparator: ": ",
        fieldSeparator: ": ",
        fields: [
          { label: "Name / Company" },
          { label: "Request", topic: true },
          { label: "Current situation or issue" },
          { label: "Technologies and services in use (if known)" },
          { label: "Budget" },
          { label: "Preferred timeline" },
        ],
      },
    },
    contact: {
      sub: "Contact",
      title: "Contact & Links",
      emailLabel: "Email",
      githubLabel: "GitHub",
      resumeLabel: "Resume",
      resumeLinkText: "View resume",
    },
  },
};

export const resumeDictionaries: Record<Locale, ResumeDictionary> = {
  ja: {
    pdfLink: "PDF をダウンロード",
    pdfPath: "/resume.pdf",
    pdfDownloadName: "職務経歴書_田矢凌太.pdf",
    sourceFile: "resume.md",
  },
  en: {
    pdfLink: "Download PDF",
    pdfPath: "/resume-en.pdf",
    pdfDownloadName: "Resume_Ryota_Taya.pdf",
    sourceFile: "resume.en.md",
  },
};
