import { getCollection, type CollectionEntry } from 'astro:content';
import { type Lang, type Section, defaultLang } from './index';

export type Article = CollectionEntry<'articles'> & { lang: Lang; key: string; slug: string; fallback: boolean };

function parse(e: CollectionEntry<'articles'>) {
  const [lang, section, slug] = e.id.split('/');
  return { lang: lang as Lang, key: `${section}/${slug}`, slug };
}

/**
 * 指定言語の記事一覧。無い記事は日本語版で埋める（fallback: true）。
 * 英語は「English 版がある記事だけ」ではなく、他言語と同じく日本語で埋める。記事ページ側で注記を出す。
 */
export async function getArticles(lang: Lang, section?: Section): Promise<Article[]> {
  const all = (await getCollection('articles', (e) => !e.data.draft)).map((e) => ({ ...e, ...parse(e), fallback: false }));
  const base = all.filter((a) => a.lang === defaultLang);
  const local = new Map(all.filter((a) => a.lang === lang).map((a) => [a.key, a]));
  const list = base.map((b) => (local.get(b.key) ? { ...local.get(b.key)!, fallback: false } : { ...b, fallback: lang !== defaultLang }));
  return list
    .filter((a) => !section || a.data.section === section)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function readingMinutes(body: string | undefined) {
  const chars = (body ?? '').replace(/\s+/g, '').length;
  return Math.max(1, Math.round(chars / 500));
}
