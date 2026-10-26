import { escapeHtml as e, sectionLabel } from '../html.mjs';

export function skills(cv) {
  return `<section class="section skills-section motion-scene" data-motion-scene id="skills" aria-labelledby="skills-title"><div class="constellation" aria-hidden="true"><span class="orbit orbit-one ambient"></span><span class="orbit orbit-two ambient"></span><span class="orbit-core">✳</span></div><div class="container">
    ${sectionLabel('04', 'Skills & languages')}
    <h2 id="skills-title">What I bring<span class="accent">.</span></h2>
    <div class="skills-grid"><div><h3 class="list-heading">Skills</h3><ul class="skill-list">${cv.skills.map((skill, index) => `<li><span class="list-index" aria-hidden="true">0${index + 1}</span>${e(skill)}<span class="skill-plus" aria-hidden="true">+</span></li>`).join('')}</ul></div>
    <div><h3 class="list-heading">Languages</h3><ul class="language-list">${cv.languages.map(language => `<li><span class="language-code" aria-hidden="true">${e(language.code)}</span><span>${e(language.name)}</span><span class="language-level">${e(language.level)}</span></li>`).join('')}</ul></div></div>
  </div></section>`;
}
