import fs from 'node:fs';
const A = [
  // section, slug, tag, date, title, description, research, startHere, zhTitle, zhDesc, zhTag
  ['tech','apex-test-coverage-75','Salesforce','2026-09-12','Apex テストクラスのカバレッジを 75% に届かせる、現場の手順','デプロイ直前に「Code coverage 68%」で止まったとき、どのクラスから手を付ければ最短で 75% を超えるかを、判断する順番で書きます。対象は、すでに動いている本番組織に追加開発を入れるケースです。',false,1,'把 Apex 测试类覆盖率做到 75% 的一线步骤','部署前一刻卡在「Code coverage 68%」时，从哪个类下手能最快超过 75%，按判断顺序写。对象是往已上线的生产组织里加功能的场景。','Salesforce'],
  ['tech','powerbi-refresh-vs-batch','Fabric','2026-09-05','Power BI のリフレッシュが夜間バッチと衝突するときの切り分け','朝いちばんのレポートが古いまま、あるいは空になる。原因がリフレッシュのスケジュールなのか、基幹側のバッチなのかを、ログの見方から順に切り分けます。',false,null,'Power BI 刷新和夜间批处理冲突时的排查','早上第一份报表还是旧数据，或者干脆是空的。原因在刷新计划还是核心系统的批处理，从看日志开始一步步切分。','Fabric'],
  ['tech','agentforce-before-service-cloud','研究中','2026-08-28','Agentforce を既存の Service Cloud に載せる前に確認する 7 点','検証中の内容です。既存のケース管理にエージェントを載せるとき、権限・データ・運用のどこで詰まりやすいかを、確認した範囲でまとめます。',true,null,null,null,null],
  ['management','weekly-report-three-parts','客先報告','2026-09-09','週次報告は「予定・実績・課題」の三段で書く。テンプレと記入例','客先の担当者が 3 分で読めて、上司に転送できる週次報告の形。書く順番と、書いてはいけない表現を、実際の記入例つきで示します。',false,null,'周报按「计划・实绩・课题」三段写。模板和填写示例','客户负责人 3 分钟能读完、能直接转发给上司的周报格式。写的顺序、不能出现的表达，附真实填写示例。','客户报告'],
  ['management','spec-handoff-to-china-team','日中チーム','2026-09-01','中国側の開発チームに仕様を渡すとき、日本語のまま渡してはいけない箇所','仕様書を丸ごと翻訳する必要はありません。ただし、日本語のまま渡すと確実に誤解される箇所が決まっています。その箇所と、どう書き直すかを示します。',false,2,'把需求交给中国开发团队时，哪些地方不能原样用日语交过去','不需要把整份规格书都翻译。但有几处原样用日语交过去一定会被误解。指出这些地方，以及怎么改写。','中日团队'],
  ['management','estimate-protect-test-effort','見積','2026-08-20','二次請けの見積で、テスト工数を削られないための出し方','見積の交渉で最初に削られるのはテスト工数です。削られた結果どうなるかではなく、削られない見積の書き方を、項目の分け方から説明します。',false,null,'二包报价时，怎么写才不会被砍掉测试工时','报价谈判里最先被砍的是测试工时。这里不讲被砍之后会怎样，讲怎么从拆分项目开始写一份砍不动的报价。','报价'],
  ['cases','sales-mgmt-sfdc-migration','製造業','2026-09-07','販売管理の Salesforce 移行、要件定義で決め切れなかった 3 つの判断','中堅の製造業。既存の販売管理を Salesforce へ移す案件で、要件定義の段階では決められず、設計に入ってから決めざるを得なかった判断を 3 つ記録します。',false,null,'销售管理迁移到 Salesforce：需求定义阶段没能定下来的 3 个决策','中型制造业。把既有销售管理系统迁到 Salesforce 的项目里，需求定义阶段定不下来、进了设计才不得不定的 3 个决策。','制造业'],
  ['cases','batch-recovery-anyone-can-run','金融','2026-08-25','夜間バッチのリカバリ手順を「誰でも実行できる」形にした話','担当者しか復旧できないバッチが、その担当者の休暇中に落ちた。復旧のあと、手順書をどう書き直して、誰でも実行できる形にしたかを記録します。',false,null,null,null,null],
  ['cases','bi-rollout-stalled-six-months','小売','2026-08-11','半年で止まった BI 導入、何が最初から無理だったか','小売業の BI 導入が半年で止まった案件。ツールの問題ではなく、最初の設計時点で決まっていた「無理」を、あとから見て整理します。',false,3,'半年就停摆的 BI 导入，从一开始就注定不行的是什么','零售业的 BI 导入项目半年就停了。不是工具的问题，而是最初设计时就已经注定的「不可能」，事后回头整理。','零售'],
  ['essays','monthly-2026-08','月刊','2026-09-02','2026年8月、日本企業の案件に本当に影響があった新しいもの','毎月、発表された新機能や新製品のうち、日本企業の案件の現場に実際に影響があったものだけを選んで書きます。影響がなかったものは書きません。',false,null,'2026年8月，真正影响到日本企业案件的新东西','每个月，从发布的新功能、新产品里，只挑对日本企业项目一线真正有影响的写。没影响的不写。','月刊'],
  ['essays','working-after-fifty','働き方','2026-08-18','50歳からの働き方を、案件の現場から考える','客先常駐という働き方を続けるのか、変えるのか。案件の現場で見えている現実から、自分の場合を考えます。',false,null,'从项目一线思考 50 岁以后怎么工作','驻场这种工作方式是继续，还是改变。从项目一线看到的现实出发，想想自己的情况。','工作方式'],
  ['essays','knowledge-off-client-pc','書くこと','2026-08-04','「客先PCでしか分からない」知識を、どう外に持ち出すか','客先のPCの前でしか再現できない知識は、案件が終わると消えます。情報を持ち出さずに、知識だけを外に残す方法を考えます。',false,null,null,null,null],
];
const jaBody = (t) => `
## 1. なぜこの問題が起きるのか

（仮の本文です。ここに、問題の背景と「なぜそうなるのか」を書きます。）

この記事は版面と導線を確認するための仮記事です。本文は後から差し替えます。段落は 2〜3 つ、読者が「自分のケースに当てはまるか」を判断できる情報を先に置きます。

## 2. 手順

### 手順 1：現状を確認する

（仮の本文。確認に使うコマンドやクエリをここに置きます。）

\`\`\`sql
SELECT Id, Name FROM Account WHERE LastModifiedDate = TODAY LIMIT 10
\`\`\`

### 手順 2：対処する

（仮の本文。実際に手を動かす手順を、番号つきで書きます。）

1. 対象を絞り込む
2. 検証環境で試す
3. 本番に反映する

## 3. 注意点

- 仮の注意点。本番環境での操作は、必ず検証環境で確認してから行う。
- 仮の注意点。製品仕様は更新されるため、公式ドキュメントの日付を確認する。
`;
const zhBody = () => `
## 1. 为什么会出现这个问题

（占位正文。这里写问题的背景和「为什么会这样」。）

这是一篇用来确认版面和导航的占位文章，正文之后会替换。段落 2〜3 个，先放读者判断「是否符合自己情况」所需的信息。

## 2. 步骤

### 步骤 1：确认现状

（占位正文。这里放用来确认的命令或查询。）

\`\`\`sql
SELECT Id, Name FROM Account WHERE LastModifiedDate = TODAY LIMIT 10
\`\`\`

### 步骤 2：处理

（占位正文。实际动手的步骤，按编号写。）

1. 缩小对象范围
2. 在验证环境试
3. 反映到生产

## 3. 注意点

- 占位注意点。生产环境的操作，一定先在验证环境确认。
- 占位注意点。产品规格会更新，注意官方文档的日期。
`;
const apexJa = `
## 1. なぜ 75% で止まるのか

組織全体のカバレッジは、すべての Apex クラスとトリガーの行数を合計して計算されます。自分の追加分が 100% でも、過去に放置されたバッチやトリガーが分母を押し下げていれば、デプロイは通りません。最初に見るべきは自分のコードではなく、分母の大きいクラスです。

もうひとつ多いのが、Sandbox では通るのに本番で落ちるケースです。本番にだけ残っている古いクラスが原因なので、必ず本番組織の数字で確認します。

## 2. 手順

### 手順 1：未カバー行数の多いクラスを上から並べる

Developer Console ではなく Tooling API で取ります。ここで並べ替えができるかどうかで、作業時間が半日変わります。

\`\`\`sql
-- Tooling API（Query Editor で「Use Tooling API」にチェック）
SELECT ApexClassOrTrigger.Name, NumLinesCovered, NumLinesUncovered
FROM ApexCodeCoverageAggregate
ORDER BY NumLinesUncovered DESC
\`\`\`

### 手順 2：上位 3 クラスに「通るだけ」のテストを足す

この段階では正しさを検証しません。目的は分母を埋めることです。例外系まで書くのは 75% を超えてからで構いません。

\`\`\`java
@isTest
private class LegacyBatchTest {
    @isTest static void runBatch() {
        Test.startTest();
        Database.executeBatch(new LegacyBatch(), 200);
        Test.stopTest();
        // アサーションは後で足す。まず分母を埋める
    }
}
\`\`\`

### 手順 3：対象クラスだけ実行して数字を確認する

Run All Tests は本番組織だと数十分かかります。足したクラスだけ回して、集計値が動いたかを見ます。

\`\`\`bash
sf apex run test --class-names LegacyBatchTest --code-coverage --result-format human
\`\`\`

### 手順 4：デプロイ時のテストレベルを RunLocalTests に固定する

管理パッケージのテストまで走ると、自分では直せない失敗で止まります。デプロイ設定で明示しておくと、次の人も迷いません。

## 3. 注意点

- 「通るだけ」のテストは、必ずチケットに残す。後で例外系を足す前提であることを、レビュアーにも見える形にしておく。
- トリガーはカバレッジが 0% だとデプロイが止まる。放置されたトリガーは最優先で確認する。
- 本番組織の集計値は、テスト実行後すぐには更新されないことがある。数分待ってから再取得する。
`;
const fm = (o) => '---\n' + Object.entries(o).filter(([, v]) => v !== null && v !== undefined && v !== false).map(([k, v]) => `${k}: ${typeof v === 'string' ? JSON.stringify(v) : v}`).join('\n') + '\n---\n';
for (const [sec, slug, tag, date, title, desc, research, start, zhT, zhD, zhTag] of A) {
  const base = { title, description: desc, section: sec, tag, date, research, startHere: start };
  if (slug === 'apex-test-coverage-75') base.updated = '2026-09-14';
  fs.writeFileSync(`src/content/articles/ja/${sec}/${slug}.md`, fm(base) + (slug === 'apex-test-coverage-75' ? apexJa : jaBody(title)));
  if (zhT) fs.writeFileSync(`src/content/articles/zh/${sec}/${slug}.md`, fm({ ...base, title: zhT, description: zhD, tag: zhTag }) + zhBody());
}
console.log('articles written');
