import { escapeHtml as e } from './html.mjs';
import { hero } from './sections/hero.mjs';
import { projects } from './sections/projects.mjs';
import { about } from './sections/about.mjs';
import { education } from './sections/education.mjs';
import { skills } from './sections/skills.mjs';
import { contact } from './sections/contact.mjs';
import { chapterDivider } from './components/dividers.mjs';

export function page(cv) {
  const description = `${cv.name} — developer and Information Technology student at the Technical University of Moldova. Based in Chișinău. Open to developer and IT opportunities.`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#111210">
  <meta name="description" content="${e(description)}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${e(cv.name)} — Developer & IT Student">
  <meta property="og:description" content="${e(description)}">
  <title>${e(cv.name)} — Developer & IT Student</title>
  <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
  <link rel="preload" href="/assets/tiny5-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/styles.css">
  <script type="module" src="/motion.js"></script>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header"><div class="container header-inner">
    <a class="brand" href="#home" aria-label="Daniel Mihaila, home"><span class="brand-mark" aria-hidden="true">dm<span>.</span></span><span>Daniel Mihaila</span></a>
    <nav aria-label="Main navigation"><a href="#projects"><span>01</span> Work</a><a href="#about"><span>02</span> About</a><a href="#education"><span>03</span> Education</a><a href="#skills"><span>04</span> Skills</a><a href="#contact"><span>05</span> Contact</a></nav>
    <a class="header-cv" href="${e(cv.pdf)}" download>CV <span aria-hidden="true">↓</span><span class="sr-only"> — download PDF</span></a>
  </div></header>
  <main id="main">${hero(cv)}${projects(cv)}${chapterDivider('desk')}${about(cv)}${chapterDivider('campus')}${education(cv)}${chapterDivider('orbit')}${skills(cv)}${chapterDivider('coast')}${contact(cv)}</main>
  <footer class="site-footer container"><a class="footer-brand" href="#home">dm<span>.</span></a><p>© ${new Date().getFullYear()} ${e(cv.name)}</p><a class="back-top" href="#home">Back to top <span aria-hidden="true">↑</span></a></footer>
</body>
</html>`;
}
