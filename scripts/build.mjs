import { mkdir, readFile, writeFile, cp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { cv } from '../src/content.mjs';
import { page } from '../src/page.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = join(root, 'dist');
await mkdir(output, { recursive: true });
const styles = await Promise.all(['tokens', 'base', 'components', 'sections', 'projects', 'motion', 'worlds', 'education'].map(name => readFile(join(root, `src/styles/${name}.css`), 'utf8')));
await writeFile(join(output, 'styles.css'), styles.join('\n'));
await writeFile(join(output, 'index.html'), page(cv));
await cp(join(root, 'public'), output, { recursive: true });
console.log('Built dist/: static HTML, CSS, local assets, and lightweight motion controls.');
