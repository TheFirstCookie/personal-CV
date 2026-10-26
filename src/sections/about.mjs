import { escapeHtml as e, sectionLabel } from '../html.mjs';

export function about(cv) {
  return `<section class="section about-section motion-scene" data-motion-scene id="about" aria-labelledby="about-title"><div class="container">
    ${sectionLabel('02', 'About me')}
    <div class="desktop-layout"><div class="bio-window"><div class="desktop-titlebar" aria-hidden="true"><span>ABOUT_DANIEL.txt</span><span>− □ ×</span></div><div class="bio-window-content"><p class="desktop-path">~/people/daniel</p><h2 id="about-title">At the start.<br><span class="muted-heading">Ready for what’s next.</span></h2><p class="section-copy">${e(cv.about)}</p><p class="terminal-prompt" aria-hidden="true"><span>daniel@home</span> ~ learning by building<span class="terminal-cursor ambient">▌</span></p></div></div>
      <div class="bio-note"><p class="note-heading">The essentials <span aria-hidden="true">✳</span></p><dl class="facts">${cv.personal.map(([label, value]) => `<div><dt>${e(label)}</dt><dd>${e(value)}</dd></div>`).join('')}</dl><a href="${e(cv.linkedin)}" target="_blank" rel="noopener noreferrer">Let’s connect on LinkedIn ↗<span class="sr-only"> (opens in a new tab)</span></a></div>
    </div>
  </div></section>`;
}
