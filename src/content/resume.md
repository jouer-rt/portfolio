# 職務経歴書

最終更新日: 2026年8月14日

| 項目 | 内容 |
| --- | --- |
| 氏名 | 田矢 凌太（Ryota Taya） |
| 現在の状況 | 在職中 |
| GitHub | https://github.com/jouer-rt |

---

## 職務要約

Python／Django を中心とした Web バックエンド開発、AWS を利用したインフラ構築・運用、Stripe を利用した決済機能の開発経験があります。

EC サイト・Web サービスの開発において、要件整理、設計、実装、テスト、デプロイ、監視・障害調査まで、幅広い工程に対応してきました。特に、Django を用いた API・業務ロジックの実装、Stripe 決済、AWS Lambda による定期バッチ、CloudWatch を用いたログ調査、GitHub Actions による CI/CD 整備を得意としています。

現在は、Next.js／FastAPI、Swift／SwiftUI、AI コーディングエージェントなどの技術も活用し、Web サービスおよび iOS アプリの個人開発に取り組んでいます。

---

## 活かせる経験・知識・技術

- **Web バックエンド開発**: Python／Django を中心とした Web アプリケーションのバックエンド開発。API、認証、決済、外部サービス連携、バッチ処理などの実装に加え、AWS 上で稼働するシステムの保守・運用、ログ調査、CI/CD 構築。
- **決済機能開発**: Stripe を利用し、PaymentIntent、Invoice、SetupIntent、Subscription、Webhook などを扱った決済機能の設計・実装。クレジットカード決済、コンビニ決済、継続課金、請求書発行、決済失敗時の処理、二重決済対策など、正常系だけでなく異常系・障害対応まで対応。
- **インフラ構築・運用**: EC2、Aurora MySQL、Lambda、EventBridge、CloudWatch、Secrets Manager、GitHub Actions、AWS SAM などを使用した Web アプリケーションおよび定期バッチの構築・運用。
- **テスト・品質管理**: pytest、Selenium、Playwright を利用した自動テスト、ruff／pre-commit を利用したコード品質管理、GitHub Actions を利用した CI/CD の整備。
- **障害調査・ログ解析**: CloudWatch Logs Insights や構造化ログを用いた大量ログの分割取得・原因調査。
- **新技術の活用**: Next.js／FastAPI を利用した Web サービス開発、Swift／SwiftUI を利用した iOS アプリ開発。Claude Code や ChatGPT などの AI 開発支援ツールを活用し、要件定義から実装・テスト・レビューまでの開発プロセス効率化を実践。

---

## 職務経歴

### A社 ｜ 音声創作ソフトウェア業界（従業員 約50名規模）（2021年6月 〜 現在）

- **事業内容**: 音声創作ソフトウェア（デスクトップアプリケーション）の開発・販売、および関連 Web サービスの提供
- **役割・ポジション**: Web エンジニア（Web サイト・API・インフラ担当）

#### プロジェクト A-1: 音声創作ソフトウェアサービスの Web システム開発・運用（2021年6月 〜 現在）

- **概要**: 音声創作ソフトウェアサービスの Web サイト、ソフトウェア本体と連携する認証機能 API・決済機能 API、およびインフラを、ゼロから設計・構築。リリース後は新規プロダクトの Web・インフラ周りの追加実装と保守・運用を担当。
- **担当工程**: 要件整理 ・ 設計 ・ 実装 ・ テスト ・ デプロイ ・ 監視／障害調査
- **担当業務・実績**:
  - Django を用いたバックエンド開発（認証機能 API、決済機能 API、業務ロジック）
  - Stripe を用いた決済機能の設計・実装（クレジットカード・コンビニ決済、継続課金、請求書発行、決済失敗時の処理、二重決済対策）
  - React／Next.js を用いた画面実装、バックエンドとの繋ぎこみ部分の開発
  - 開発用 Docker 環境の構築、AWS 上での本番環境構築
  - AWS Lambda + EventBridge による定期バッチの構築、CloudWatch を用いた監視・ログ調査
  - GitHub Actions による CI/CD 整備、pytest・Selenium・Playwright による自動テスト開発
- **技術環境**:
  - 言語: Python, JavaScript, HTML／CSS
  - フレームワーク: Django, Django REST Framework, React, Next.js
  - DB: MySQL / Amazon Aurora MySQL
  - インフラ: AWS（EC2, RDS/Aurora, Lambda, EventBridge, CloudWatch, Secrets Manager, SES, VPC, ALB, IAM, SAM）
  - 決済: Stripe
  - CI/CD: GitHub Actions, AWS SAM, Docker
  - その他: Nginx, uWSGI, Amazon Linux 2

### B社 ｜ SES・受託開発業界（2020年3月 〜 2021年5月）

- **事業内容**: SES・受託での Web サービス開発
- **役割・ポジション**: エンジニア（一部プロジェクトで PL を担当）

#### プロジェクト B-1: EC サイトプラットフォームの開発（2020年10月 〜 2021年5月）

- **概要**: EC サイトプラットフォームのフロントエンド・バックエンド開発
- **担当工程**: 実装 ・ テスト
- **担当業務・実績**:
  - ログイン機能、決済機能、検索機能の開発
  - 画面の実装、バックエンドとの繋ぎこみ部分の開発
  - 開発用 Docker 環境の構築、テスト開発
- **技術環境**: PHP（Laravel）, Vue.js, Sass, JavaScript, HTML／CSS, MySQL, Docker, GCE（Google Compute Engine）

#### プロジェクト B-2: ライブストリーミングサイトの開発（2020年7月 〜 2020年9月）

- **概要**: ライブストリーミングサイトのフロントエンド開発
- **担当工程**: 実装
- **担当業務・実績**:
  - React を用いた画面の実装、バックエンドとの繋ぎこみ部分の開発
- **技術環境**: React, JavaScript, HTML／CSS

#### プロジェクト B-3: 遊技機情報サイトの開発（2020年3月 〜 2020年6月）

- **概要**: 遊技機情報サイトの新規開発（PL として担当）
- **担当工程**: 設計 ・ 実装 ・ テスト
- **担当業務・実績**:
  - SNS ログイン認証、会員情報の登録・変更・削除機能の実装
  - 外部 API からの情報取得機能の実装
  - Flutter によるスマートフォンアプリのプロトタイプ実装
- **技術環境**: PHP, JavaScript, HTML／CSS, Dart（Flutter）, MySQL

#### プロジェクト B-4: 自社コーポレートサイトの改修（2020年3月 〜）

- **概要**: 既存コーポレートサイトの改修（PL として担当）
- **担当業務・実績**: ステージング環境構築、WordPress プラグイン選定・テーマ修正、Basic 認証導入
- **技術環境**: WordPress, PHP, JavaScript, HTML／CSS, MySQL

### C社 ｜ プログラミング教育業界（従業員 約30名規模）（2018年5月 〜 2020年2月）

- **事業内容**: マンツーマン形式のプログラミング学習サービスの運営
- **役割・ポジション**: プログラミング講師 → 製品開発部（データ分析エンジニア）→ システム開発部（顧客管理システム開発責任者）

#### プロジェクト C-1: 自社顧客管理システム（CRM）の保守・運用・データ分析基盤開発（2018年12月 〜 2020年2月）

- **概要**: Salesforce で管理しているサービス業務フローの見直し・改修、顧客データ分析基盤の開発（開発責任者として担当）
- **担当工程**: 要件整理 ・ 設計 ・ 実装 ・ 保守／運用
- **担当業務・実績**:
  - 各部署との定期的な業務フロー確認と、フローの見直し・改修
  - Salesforce のシステムエラー対応
  - Salesforce のデータベースを Google スプレッドシートと連携させたデータ分析基盤の開発
- **技術環境**: Salesforce（Apex）, Python, Google Apps Script, AWS Lambda, Amazon API Gateway

#### プロジェクト C-2: 顧客と講師のマッチングシステムの開発（2018年9月 〜 2018年11月）

- **概要**: 手動で行っていた顧客と講師のマッチングをシステム化し、あわせてデータ分析可能なデータ構造へ刷新（PL・PJ 規模 3人月）
- **担当工程**: 設計 ・ 実装 ・ テスト ・ 保守
- **担当業務・実績**:
  - プロトタイプを開発してシステム化を提案し、設計書作成・ツール選定から実施
  - 講師へのマッチング結果通達の自動化プログラム、分析結果のドキュメント化プログラムを作成
  - 手動マッチングにかかっていた工数を削減
- **技術環境**: Python, Google Apps Script, AWS Lambda, Amazon API Gateway

#### プロジェクト C-3: その他の社内開発・業務（2018年5月 〜 2020年2月）

- プログラミング講師として 2ヵ月で計 4名の顧客を担当（Ruby, PHP, C++）。オリジナルカリキュラムの作成、カリキュラム標準化への協力（2018年5月 〜 2018年8月）
- 技術 QA サイトの開発（WordPress, Amazon EC2。PL・PJ 規模 1人月）。利用率計測プログラム、Slack 通知プログラムの作成（2018年8月）
- コーポレートサイトの LP 制作（HTML, CSS, JavaScript）（2019年12月 〜 2020年1月）
- Google スプレッドシートを用いた経費精算自動化システムの開発（Google Apps Script）（2020年2月）

---

## 保有資格

- 特になし

---

## テクニカルスキル

凡例 — **実務**: 業務でコード実装・運用した経験あり／**個人開発**: 個人開発で使用中／**検証**: 導入・検証・学習経験あり（構成検討・PoC 含む）

| 分類 | 技術 | 経験区分 |
| --- | --- | --- |
| 言語 | Python, PHP, JavaScript, SQL, HTML, CSS, Shell Script | 実務 |
| 言語 | Swift | 個人開発 |
| バックエンド | Django, Django REST Framework, Django ORM, Django Signals, Django Cache Framework, Django Middleware, Django Authentication | 実務 |
| バックエンド | REST API 設計・開発, JWT 認証, HMAC 署名認証, バッチ処理, 非同期・定期実行処理, 外部 API 連携, Webhook 実装 | 実務 |
| バックエンド | FastAPI | 個人開発／検証 |
| フロントエンド | JavaScript, HTML／CSS, Django Template | 実務 |
| フロントエンド | Next.js, React | 実務 |
| フロントエンド | SwiftUI | 個人開発 |
| データベース | MySQL, Amazon Aurora MySQL, Django ORM（SQL を用いたデータ抽出・調査、インデックス／照合順序の設定調査、トランザクション設計） | 実務 |
| データベース | PostgreSQL, pgvector | 個人開発／検証 |
| データベース | SwiftData | 個人開発 |
| クラウド（AWS） | EC2, RDS, Aurora MySQL, Lambda, EventBridge, CloudWatch, CloudWatch Logs / Logs Insights, Secrets Manager, SES, VPC, ALB, IAM, SAM, Lambda Layers, NAT Gateway, OIDC 認証 | 実務 |
| Web／AP サーバー | Nginx, uWSGI, Linux, Amazon Linux 2（プロセス数・スレッド数などの性能設定含む） | 実務 |
| コンテナ | Docker, Docker Compose（ローカル開発・CI・SAM ビルド） | 実務 |
| CI/CD | Git, GitHub, GitHub Actions, AWS SAM, OIDC デプロイ, Makefile, pre-commit, ruff（静的解析・フォーマット・型チェック・自動テスト・デプロイ自動化） | 実務 |
| 決済 | Stripe（PaymentIntent, SetupIntent, Invoice, InvoiceItem, Subscription, Payment Element, Webhook）／クレジットカード・コンビニ・Alipay・Link、継続課金、請求書・領収書、決済失敗／再試行、二重決済対策 | 実務 |
| テスト | pytest, Django Test Framework, Selenium, Playwright（単体・結合・E2E・API テスト、Page Object Pattern, Fixture, スクリーンショット／トレース保存） | 実務 |
| 監視・運用 | CloudWatch, CloudWatch Logs Insights, 構造化ログ, リクエスト ID を用いたログ追跡, Slack 通知, 障害調査, 本番環境保守運用 | 実務 |
| モバイル（iOS） | Swift, SwiftUI, SwiftData, UserDefaults, FileManager, ローカル通知, WidgetKit, Firebase Analytics/Crashlytics, App Store Connect Analytics | 個人開発 |
| Google Cloud | Cloud Run, Cloud Functions, Cloud Logging, Cloud Monitoring, Pub/Sub, Cloud Tasks, Firebase Hosting/Analytics/Crashlytics | 個人開発／検証 |
| AI・LLM | OpenAI API, Claude, Claude Code, ChatGPT, Codex, GitHub Copilot, Cursor, Devin, OpenHands, LangChain, LangGraph, RAG, ベクトル検索, pgvector, MCP 調査・検証 | 個人開発／実務（開発支援） |

---

## 自己PR・得意領域

### 1. Django を利用した Web バックエンド開発

Django／Django REST Framework を利用し、API、認証、決済、業務ロジック、キャッシュ、外部サービス連携などを実装できます。既存システムの仕様や影響範囲を確認しながら、機能追加・不具合修正・リファクタリングを行うことが可能です。

### 2. Stripe を利用した決済機能開発

PaymentIntent、Invoice、SetupIntent、Subscription、Webhook などを利用した決済機能の設計・実装経験があります。正常系だけでなく、決済失敗、重複処理、再試行、非同期イベント、レート制限、オブジェクト競合などを考慮した実装・障害対応が可能です。

### 3. AWS を利用したシステム運用・自動化

EC2、Aurora MySQL、Lambda、EventBridge、CloudWatch、Secrets Manager、GitHub Actions などを組み合わせたシステム構築・運用に対応できます。定期バッチのサーバーレス化、CI/CD 構築、ログ調査、監視通知、権限設定、ネットワーク構成の検討が可能です。

### 4. 障害調査・ログ解析

CloudWatch Logs Insights やアプリケーションログを利用し、エラー発生箇所やリクエストの流れを特定できます。大量ログの分割取得、構造化ログの分析、外部 API エラー、決済エラー、Django の例外など、複数の情報を組み合わせた原因調査を行えます。

### 5. テスト・CI/CD の整備

pytest、Selenium、Playwright、GitHub Actions などを利用し、単体テスト、API テスト、E2E テスト、自動デプロイの仕組みを整備できます。既存プロジェクトに対して、段階的に Lint、フォーマット、テスト、デプロイ自動化を導入することが可能です。

### 6. AI ツールを活用した開発効率化

Claude Code、ChatGPT、Codex、GitHub Copilot などを利用し、要件整理、実装指示の作成、コードレビュー、テスト設計、不具合調査を効率化しています。AI が生成したコードをそのまま採用するのではなく、仕様との整合性、保守性、セキュリティ、テスト結果を確認しながら開発を進めています。

---

## 個人開発

### SoloOps（個人事業者向け 案件・請求管理 Web サービス）

副業・フリーランスのクライアント、案件、稼働時間、請求書、入金を一元管理する Web サービス「SoloOps」を開発・運用しています。要件定義書・画面仕様・データモデル・ADR の作成から、実装、インフラ構築、運用まで全工程を個人で担当しています。

- **公開デモ**: https://solops.jouerworld.com/
- **担当工程**: 要件定義 ・ 設計 ・ 実装 ・ テスト ・ インフラ構築 ・ デプロイ ・ 運用
- **主な実装内容**:
  - Django REST Framework によるバックエンド開発（Session 認証、マルチテナントによるデータ分離、楽観的ロック、請求書 PDF 生成、監査ログ）
  - Next.js／TypeScript によるフロントエンド開発
  - Terraform を用いた AWS サーバーレス構成（CloudFront + Lambda + Aurora Serverless v2）の構築・運用
  - バックエンド 600 件超・フロントエンド 430 件超の自動テストと、Playwright による E2E テストの整備
- **技術**: Python, Django REST Framework, TypeScript, Next.js, PostgreSQL, AWS（Lambda, Aurora Serverless v2, CloudFront）, Terraform, Playwright

### 推しベル（カウントダウン iOS アプリ・開発中）

VTuber・歌い手・配信者ファン向けのカウントダウン iOS アプリ「推しベル」を開発しています。バックエンドを持たない MVP として、UI 実装からデータ管理、通知、ウィジェット、SNS 共有まで、設計・実装を個人で進めています。

- **公式サイト**: https://oshibell.jouerworld.com/
- **担当工程**: 企画 ・ 設計 ・ 実装 ・ テスト
- **主な実装内容**:
  - SwiftUI による UI 実装と SwiftData によるデータ管理
  - ローカル通知・WidgetKit によるウィジェット
  - SNS 共有画像の生成
  - Firebase Analytics／Crashlytics・App Store Connect Analytics による利用状況・クラッシュの計測
- **技術**: Swift, SwiftUI, SwiftData, UserDefaults, FileManager, iOS ローカル通知, WidgetKit, Firebase Analytics, Firebase Crashlytics, App Store Connect Analytics
