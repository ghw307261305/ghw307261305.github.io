import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.enum(['tech', 'management', 'cases', 'essays']),
    tag: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    research: z.boolean().default(false),
    draft: z.boolean().default(false),
    startHere: z.number().optional(),
  }),
});

const tools = defineCollection({
  loader: file('./src/data/tools.json'),
  schema: z.object({
    id: z.string(),
    name: z.object({ ja: z.string(), zh: z.string(), en: z.string() }),
    description: z.object({ ja: z.string(), zh: z.string(), en: z.string() }),
    format: z.string(),
    langs: z.array(z.enum(['ja', 'zh', 'en'])),
    category: z.string(),
    updated: z.coerce.date(),
    file: z.string(),
  }),
});

const glossary = defineCollection({
  loader: file('./src/data/glossary.json'),
  schema: z.object({
    id: z.string(),
    ja: z.string(),
    zh: z.string(),
    en: z.string(),
    memo: z.object({ ja: z.string(), zh: z.string() }),
    category: z.enum(['process', 'contract', 'ops', 'salesforce']),
  }),
});

export const collections = { articles, tools, glossary };
