export type Lang = 'ja' | 'zh' | 'en';
export const langs: Lang[] = ['ja', 'zh', 'en'];
export const defaultLang: Lang = 'ja';
export type Section = 'tech' | 'management' | 'cases' | 'essays';
export const sections: Section[] = ['tech', 'management', 'cases', 'essays'];

/** 英語版があるページ。それ以外は日本語へフォールバック（本文に注記を出す） */
export const enPages = new Set(['home', 'about', 'tools']);

export const ui = {
  ja: {
    siteName: 'ONSITE LAB',
    siteSub: '現場の技術ノート',
    siteDescription: '日本企業のIT案件の現場で、実際に起きたことと効いた対処を、再現できる手順として残しています。',
    nav: { tech: '技術', management: 'マネジメント', cases: '案件の記録', essays: '随想' },
    sectionDesc: {
      tech: 'Salesforce · Fabric / Power BI · AI導入',
      management: '案件の進め方 · 日中チーム · 客先報告',
      cases: '匿名化した実案件の判断と進め方',
      essays: '考えたこと · 月刊「今月、案件に本当に効いたもの」',
    },
    tools: 'ツール・テンプレート', glossary: '日中IT用語対照', about: 'About', aboutFull: 'About・依頼できること',
    contact: 'お問い合わせ', disclaimer: '免責事項', privacy: 'プライバシーポリシー', operator: '運営者情報', changelog: '更新履歴',
    heroEyebrow: 'Salesforce · Fabric / Power BI · AI導入 · 日中バイリンガルPM',
    heroTitle: '「客先のPCでしか分からなかったこと」を、再現できる手順にして残す。',
    heroLead: '日本企業のIT案件を現場で動かしている、日中バイリンガルの開発者／PMの技術ノートです。実際に起きた問題と、そのとき効いた対処だけを書いています。抽象論はありません。',
    ctaStart: '最初に読む3本', ctaAbout: '依頼できること',
    startHere: '最初に読む', seeAll: 'すべて見る', more: '続きを読む',
    author: '運営者', authorName: '[著者名]', authorRole: 'ITエンジニア / PM · 東京',
    authorBio: 'IT業界 16 年、日中で 40 件超の案件を担当。金融・保険、物流、CRM、ERP。Salesforce・ServiceNow からクラウド設計・構築、AI 導入まで、開発と PM の両面で対応します。',
    glossaryCard: '「要件定義」「二次請け」「客先常駐」。日本の案件でしか通じない言葉を、中国語・英語と並べた対照表。',
    openGlossary: '対照表を開く',
    toolsBand: '案件でそのまま使えるファイル。日・中・英',
    published: '公開', updatedLabel: '更新', readTime: (m: number) => `読了 ${m} 分`,
    solves: 'この記事で解決すること', toc: '本文目次', chapterToc: '章の目次を見る', next: '次に読む',
    fallbackNotice: 'この記事は日本語のみで公開しています。',
    footerContent: 'コンテンツ', footerPages: 'ページ', footerSite: 'サイトについて',
    footerNote: '案件の記録は、すべて匿名化のうえ掲載しています。',
    articlesCount: (n: number) => `${n} 本の記事`,
    home: 'トップ',
  },
  zh: {
    siteName: 'ONSITE LAB',
    siteSub: '一线技术笔记',
    siteDescription: '把在日本企业IT项目现场真实发生过的问题和有效的处理方法，整理成可以照着做的步骤。',
    nav: { tech: '技术', management: '管理', cases: '案件复盘', essays: '随笔' },
    sectionDesc: {
      tech: 'Salesforce · Fabric / Power BI · AI导入',
      management: '项目推进 · 中日团队 · 客户报告',
      cases: '匿名化后的真实案件：决策与推进方式',
      essays: '一些思考 · 月刊「这个月真正影响日本企业案件的新东西」',
    },
    tools: '工具与模板', glossary: '中日IT用语对照', about: '关于我', aboutFull: '关于我 · 可以委托的事',
    contact: '联系', disclaimer: '免责声明', privacy: '隐私政策', operator: '运营者信息', changelog: '更新记录',
    heroEyebrow: 'Salesforce · Fabric / Power BI · AI导入 · 中日双语PM',
    heroTitle: '把「只有在客户电脑上才知道的事」，整理成可以复现的步骤。',
    heroLead: '这是一个在日本企业IT项目一线工作的中日双语开发者／PM的技术笔记。只写真实发生过的问题，和当时真正有效的处理方法。没有空话。',
    ctaStart: '先读这三篇', ctaAbout: '可以委托的事',
    startHere: '先读这几篇', seeAll: '查看全部', more: '阅读全文',
    author: '运营者', authorName: '[作者名]', authorRole: 'IT工程师 / PM · 东京',
    authorBio: 'IT 行业 16 年，中日两地 40 余个项目。金融保险、物流、CRM、ERP。从 Salesforce、ServiceNow 到云架构、AI 导入，开发与 PM 两种角色都能承担。',
    glossaryCard: '「要件定義」「二次請け」「客先常駐」。只在日本项目里通用的词，和中文、英文并排对照。',
    openGlossary: '打开对照表',
    toolsBand: '项目里可以直接用的文件。日・中・英',
    published: '发布', updatedLabel: '更新', readTime: (m: number) => `阅读 ${m} 分钟`,
    solves: '这篇文章解决什么', toc: '目录', chapterToc: '查看本章目录', next: '接着读',
    fallbackNotice: '这篇文章目前只有日语版。',
    footerContent: '内容', footerPages: '页面', footerSite: '关于本站',
    footerNote: '案件复盘均经过匿名化处理。',
    articlesCount: (n: number) => `${n} 篇文章`,
    home: '首页',
  },
  en: {
    siteName: 'ONSITE LAB',
    siteSub: 'Field notes from Japanese IT projects',
    siteDescription: 'Reproducible procedures from real IT projects at Japanese companies: what actually happened and what actually worked.',
    nav: { tech: 'Tech', management: 'Management', cases: 'Case Notes', essays: 'Essays' },
    sectionDesc: {
      tech: 'Salesforce · Fabric / Power BI · AI adoption',
      management: 'Running projects · JP–CN teams · Client reporting',
      cases: 'Anonymized real projects: decisions and how they were run',
      essays: 'Reflections · Monthly: what actually mattered this month',
    },
    tools: 'Tools & Templates', glossary: 'JA–ZH IT Glossary', about: 'About', aboutFull: 'About · What I can help with',
    contact: 'Contact', disclaimer: 'Disclaimer', privacy: 'Privacy Policy', operator: 'Site Operator', changelog: 'Changelog',
    heroEyebrow: 'Salesforce · Fabric / Power BI · AI adoption · Bilingual JA/ZH PM',
    heroTitle: 'Turning what you could only learn on the client’s PC into procedures anyone can repeat.',
    heroLead: 'Notes from a bilingual (Japanese/Chinese) developer and PM working on-site at Japanese companies. Only real problems and the fixes that actually worked. No abstractions.',
    ctaStart: 'Start with these three', ctaAbout: 'What I can help with',
    startHere: 'Start here', seeAll: 'See all', more: 'Read more',
    author: 'Author', authorName: '[Author name]', authorRole: 'IT engineer / PM · Tokyo',
    authorBio: '16 years in IT, 40+ projects across Japan and China. Finance & insurance, logistics, CRM, ERP. Salesforce and ServiceNow through to cloud architecture and AI adoption, as both developer and PM.',
    glossaryCard: 'Terms that only make sense inside Japanese IT projects, side by side with Chinese and English.',
    openGlossary: 'Open the glossary',
    toolsBand: 'Files you can use in a project as-is. JA · ZH · EN',
    published: 'Published', updatedLabel: 'Updated', readTime: (m: number) => `${m} min read`,
    solves: 'What this article solves', toc: 'On this page', chapterToc: 'Chapter contents', next: 'Read next',
    fallbackNotice: 'This article is available in Japanese only.',
    footerContent: 'Content', footerPages: 'Pages', footerSite: 'About this site',
    footerNote: 'All case notes are anonymized.',
    articlesCount: (n: number) => `${n} articles`,
    home: 'Home',
  },
} as const;

export function t(lang: Lang) { return ui[lang]; }
export function path(lang: Lang, p = '') { return `/${lang}/${p}`.replace(/\/+$/, '/') ; }
export function langLabel(l: Lang) { return { ja: '日本語', zh: '中文', en: 'English' }[l]; }
export function langShort(l: Lang) { return { ja: 'JA', zh: 'ZH', en: 'EN' }[l]; }
export function fmtDate(d: Date, lang: Lang) {
  const y = d.getFullYear(), m = String(d.getMonth() + 1).padStart(2, '0'), day = String(d.getDate()).padStart(2, '0');
  return lang === 'en' ? `${y}-${m}-${day}` : `${y}.${m}.${day}`;
}
export function fmtShort(d: Date) {
  return `${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
}
