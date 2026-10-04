// Rebuilds the four church PDFs in ../forms/ from the .dc.html files in this folder.
// Run from this folder:  npm i playwright  (once), then  node build-forms.js
// Needs ../fonts/IvyMode-Regular.woff2 (kept out of the public repository) and ../logo.jpg.
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const b64 = f => fs.readFileSync(f).toString('base64');
const ivyPath = path.join(__dirname, '..', 'fonts', 'IvyMode-Regular.woff2');
const ivy = fs.existsSync(ivyPath) ? b64(ivyPath) : null;
if (!ivy) console.warn('IvyMode-Regular.woff2 not found in ../fonts: headings will use a fallback font.');
const metro = [400, 500, 600, 700].map(w => `@font-face{font-family:Metropolis;font-weight:${w};src:url(data:font/woff2;base64,${b64(path.join(__dirname, 'fonts', `metropolis-latin-${w}-normal.woff2`))}) format("woff2");}`).join('\n');
const logo = 'data:image/jpeg;base64,' + b64(path.join(__dirname, '..', 'logo.jpg'));
(async () => {
  const browser = await chromium.launch();
  for (const f of fs.readdirSync(__dirname).filter(n => n.endsWith('.dc.html'))) {
    const name = f.replace('.dc.html', '');
    const t = fs.readFileSync(path.join(__dirname, f), 'utf8');
    const m = t.match(/<doc-page size="a4" style="([^"]*)">([\s\S]*)<\/doc-page>/);
    const inner = m[2].replace('src="assets/echunga-logo.jpg"', `src="${logo}"`);
    const html = `<!doctype html><html lang="en-AU"><head><meta charset="utf-8"><title>${name}</title><style>
${metro}
${ivy ? `@font-face{font-family:IvyMode;src:url(data:font/woff2;base64,${ivy}) format("woff2");}` : ''}
@page{size:A4;margin:0}
:root{--space-1:4px;--space-2:8px;--space-3:12px;--space-4:16px;--space-5:22px;--space-6:32px;--space-7:30px}
html,body{margin:0;padding:0}
.doc{letter-spacing:.02em}
/* defaults the Claude Design stylesheet normally supplies (inline styles override these) */
.doc p{margin:0 0 12px;line-height:1.55}
.doc h1{margin:0 0 12px}
.doc h2,.doc h3{margin:18px 0 10px}
.doc ul,.doc ol{margin:0 0 14px}
.doc div:has(> h2){margin-bottom:14px}
.page{width:210mm;height:297mm;box-sizing:border-box;overflow:hidden;break-after:page;position:relative}
.page:last-child{break-after:auto}
</style></head><body><div class="doc" style="${m[1]}">${inner}</div></body></html>`;
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'load' });
    await page.waitForTimeout(500);
    const over = await page.evaluate(() => [...document.querySelectorAll('.page')].filter(e => e.scrollHeight > e.clientHeight + 1).length);
    if (over) console.warn(`${name}: ${over} page(s) overflow; check the layout`);
    const out = path.join(__dirname, '..', 'forms', name + '.pdf');
    await page.pdf({ path: out, preferCSSPageSize: true, printBackground: true, tagged: true, outline: true });
    console.log('wrote', out);
  }
  await browser.close();
})();
