# ONSITE LAB — 現場の技術ノート

Astro 5 で作った、日本語・中国語の二言語ブログ兼ポートフォリオサイト（英語は当面オフ）。版面は `design/` の設計キャンバスに基づく。

## 使い方

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に静的HTMLを出力
npm run preview  # ビルド結果を確認
```

## 記事を書く

`src/content/articles/<言語>/<セクション>/<slug>.md` に Markdown を置くだけ。

- 言語: `ja`（必須・主言語）/ `zh`。英語は当面オフ（`src/i18n/index.ts` の `langs` と `astro.config.mjs` の `locales` に `en` を戻せば復活）
- セクション: `tech` 技術 / `management` マネジメント / `cases` 案件の記録 / `essays` 随想
- 同じ記事の翻訳は **同じ slug** で別言語フォルダに置く。翻訳が無い言語では日本語版がそのまま表示され、「日本語のみ」の注記が出る。

```markdown
---
title: "記事タイトル"
description: "この記事で解決すること（記事冒頭の枠と一覧の説明文になる）"
section: tech          # tech | management | cases | essays
tag: "Salesforce"      # 一覧に出る小ラベル
date: 2026-09-12
updated: 2026-09-14    # 任意
research: false        # true にすると「研究中」の朱色タグ
startHere: 1           # 任意。1〜3 を付けた記事がトップの「最初に読む」に並ぶ
draft: false           # true で非公開
---

## 1. なぜ …
本文。
```

本文の推奨構成: この記事で解決すること（description）→ なぜ → 手順（コード付き）→ 注意点 → 次に読む（自動生成）。

いまの記事はすべて **仮の本文**（`scripts/gen-placeholder-content.mjs` で生成）。差し替えるときは `.md` を直接編集する。

## 静的ページ・データ

| 内容 | 場所 |
| --- | --- |
| ツール・テンプレート一覧 | `src/data/tools.json`（ダウンロード機能は当面オフ。一覧表示のみ） |
| IT用語対照 | `src/data/glossary.json` |
| About・依頼できること | `src/pages/[lang]/about.astro` 冒頭の `c` オブジェクト |
| 免責事項 / プライバシーポリシー | `src/pages/[lang]/disclaimer.astro`, `privacy.astro` |
| ナビ・共通の文言 | `src/i18n/index.ts` |
| 色・書体・共通スタイル | `src/styles/global.css` |

## 公開前にやること

- [ ] `astro.config.mjs` の `site` と `public/robots.txt` の Sitemap を本番ドメインに変更
- [ ] `src/i18n/index.ts` の `authorName` と About ページの `[メールアドレス]` を埋める
- [ ] About ページの写真（`.photo`）とトップの丸アイコン（`.avatar`）に画像を入れる
- [ ] 免責事項・プライバシーポリシーの日付と内容を確認する
