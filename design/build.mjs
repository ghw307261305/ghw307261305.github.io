import fs from 'node:fs';
const r = (f) => fs.readFileSync(`parts/${f}`, 'utf8');
const head = r('head.html'), header = r('header.html'), footer = r('footer.html'), tail = r('tail.html');
const pages = { Main: 'top.html', Article: 'article.html', About: 'about.html', Tools: 'tools.html', Glossary: 'glossary.html', Mobile: 'mobile.html' };
for (const [name, part] of Object.entries(pages)) {
  const langs = ['Article','Glossary'].includes(name) ? '<span class="lang"><span class="on">JA</span><span>ZH</span></span>' : '<span class="lang"><span class="on">JA</span><span>ZH</span><span>EN</span></span>';
  const body = r(part).replace('{{HEADER}}', header).replace('{{FOOTER}}', footer).replace('{{LANGS}}', langs);
  fs.writeFileSync(`${name}.dc.html`, head + body + tail);
}
console.log('built', Object.keys(pages).join(', '));
