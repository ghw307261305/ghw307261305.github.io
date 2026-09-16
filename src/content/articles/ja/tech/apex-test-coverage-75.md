---
title: "Apex テストクラスのカバレッジを 75% に届かせる、現場の手順"
description: "デプロイ直前に「Code coverage 68%」で止まったとき、どのクラスから手を付ければ最短で 75% を超えるかを、判断する順番で書きます。対象は、すでに動いている本番組織に追加開発を入れるケースです。"
section: "tech"
tag: "Salesforce"
date: "2026-09-12"
startHere: 1
updated: "2026-09-14"
---

## 1. なぜ 75% で止まるのか

組織全体のカバレッジは、すべての Apex クラスとトリガーの行数を合計して計算されます。自分の追加分が 100% でも、過去に放置されたバッチやトリガーが分母を押し下げていれば、デプロイは通りません。最初に見るべきは自分のコードではなく、分母の大きいクラスです。

もうひとつ多いのが、Sandbox では通るのに本番で落ちるケースです。本番にだけ残っている古いクラスが原因なので、必ず本番組織の数字で確認します。

## 2. 手順

### 手順 1：未カバー行数の多いクラスを上から並べる

Developer Console ではなく Tooling API で取ります。ここで並べ替えができるかどうかで、作業時間が半日変わります。

```sql
-- Tooling API（Query Editor で「Use Tooling API」にチェック）
SELECT ApexClassOrTrigger.Name, NumLinesCovered, NumLinesUncovered
FROM ApexCodeCoverageAggregate
ORDER BY NumLinesUncovered DESC
```

### 手順 2：上位 3 クラスに「通るだけ」のテストを足す

この段階では正しさを検証しません。目的は分母を埋めることです。例外系まで書くのは 75% を超えてからで構いません。

```java
@isTest
private class LegacyBatchTest {
    @isTest static void runBatch() {
        Test.startTest();
        Database.executeBatch(new LegacyBatch(), 200);
        Test.stopTest();
        // アサーションは後で足す。まず分母を埋める
    }
}
```

### 手順 3：対象クラスだけ実行して数字を確認する

Run All Tests は本番組織だと数十分かかります。足したクラスだけ回して、集計値が動いたかを見ます。

```bash
sf apex run test --class-names LegacyBatchTest --code-coverage --result-format human
```

### 手順 4：デプロイ時のテストレベルを RunLocalTests に固定する

管理パッケージのテストまで走ると、自分では直せない失敗で止まります。デプロイ設定で明示しておくと、次の人も迷いません。

## 3. 注意点

- 「通るだけ」のテストは、必ずチケットに残す。後で例外系を足す前提であることを、レビュアーにも見える形にしておく。
- トリガーはカバレッジが 0% だとデプロイが止まる。放置されたトリガーは最優先で確認する。
- 本番組織の集計値は、テスト実行後すぐには更新されないことがある。数分待ってから再取得する。
