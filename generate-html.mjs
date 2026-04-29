import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const clientDir = join(import.meta.dirname, 'dist', 'client', 'assets');
const files = readdirSync(clientDir);

const jsFile = files.find(f => f.startsWith('index-') && f.endsWith('.js'));
const cssFile = files.find(f => f.startsWith('styles-') && f.endsWith('.css'));

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Aaron R Thomas — Graphic Design Portfolio 2026</title>
    <meta name="description" content="Portfolio of Aaron R Thomas — graphic design, branding, logo design, social media, and style guide work." />
    <meta property="og:title" content="Aaron R Thomas — Portfolio 2026" />
    <meta property="og:description" content="Graphic design portfolio: brochures, logos, social media, and style guides." />
    <meta property="og:type" content="website" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="/assets/${cssFile}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${jsFile}"></script>
  </body>
</html>`;

writeFileSync(join(import.meta.dirname, 'dist', 'client', 'index.html'), html);
console.log('✓ Generated index.html for static deployment');
