import { escapeHtml as e, sectionLabel } from '../html.mjs';

export function about(cv) {
  return `<section class="section container" id="about" aria-labelledby="about-title">
    ${sectionLabel('01', 'About me')}
    <div class="about-grid">
      <div><h2 id="about-title">At the start.<br><span class="muted-heading">Ready for what’s next.</span></h2><p class="section-copy">${e(cv.about)}</p></div>
      <dl class="facts">${cv.personal.map(([label, value]) => `<div><dt>${e(label)}</dt><dd>${e(value)}</dd></div>`).join('')}</dl>
    </div>
  </section>`;
}
