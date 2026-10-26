import { escapeHtml as e, arrow } from '../html.mjs';
import { nightCity } from '../components/night-city.mjs';

export function hero(cv) {
  return `<section class="hero" id="home" aria-labelledby="hero-title">
    <div class="container hero-grid">
      <div class="hero-copy">
        <p class="eyebrow availability"><span class="status-dot" aria-hidden="true"></span> Open to part-time opportunities</p>
        <h1 id="hero-title">Daniel<span>Mihaila<span class="name-period">.</span></span></h1>
        <p class="hero-role">${e(cv.role)} <span aria-hidden="true">/</span> IT student</p>
        <p class="hero-intro">${e(cv.introduction)}</p>
        <div class="actions"><a class="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↓</span></a><a class="button button-secondary" href="${e(cv.github)}" target="_blank" rel="noopener noreferrer">GitHub ${arrow}<span class="sr-only"> (opens in a new tab)</span></a></div>
      </div>
      <div class="hero-visual motion-scene" data-motion-scene>
        <div class="window-top" aria-hidden="true"><span><i></i><i></i><i></i></span><span>AFTER HOURS / CHIȘINĂU</span><span>01</span></div>
        ${nightCity()}
        <div class="window-bottom"><span aria-hidden="true">SOMEWHERE BETWEEN IDEAS & CODE.</span><button class="motion-toggle" type="button" aria-label="Animations" aria-pressed="true" hidden><span data-motion-label>Motion on</span><span aria-hidden="true" data-motion-icon>Ⅱ</span></button></div>
      </div>
    </div>
    <div class="container hero-foot"><span>Based in ${e(cv.location)}</span><a href="${e(cv.pdf)}" download>Download my CV <span aria-hidden="true">↓</span></a></div>
  </section>`;
}
