import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 独自ドメインに切り替えるときはここを変更（sitemap・canonical・hreflang に使われます）
export default defineConfig({
  site: 'https://ghw307261305.github.io',
  server: { port: Number(process.env.PORT) || 4321 },
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'zh'],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: true },
  },
  integrations: [sitemap()],
  markdown: { shikiConfig: { theme: 'github-dark-dimmed' } },
});
