import { escapeHtml as e, arrow } from '../html.mjs';
import { nightCity } from '../components/night-city.mjs';

export function hero(cv) {
  return `<section class="hero motion-scene" data-motion-scene data-sky="city" id="home" aria-labelledby="hero-title">
    <div class="hero-world" aria-hidden="true"><canvas class="world-canvas" width="960" height="480"></canvas><div class="hero-city">${nightCity()}</div><div class="world-scrim"></div></div>
    <div class="container hero-grid">
      <div class="hero-copy">
        <p class="eyebrow availability"><span class="status-dot" aria-hidden="true"></span> Open to opportunities · Remote preferred</p>
        <h1 id="hero-title">Daniel<span>Mihaila<span class="name-period">.</span></span></h1>
        <p class="hero-role">${e(cv.role)} <span aria-hidden="true">/</span> IT student</p>
        <p class="hero-intro">${e(cv.introduction)}</p>
        <div class="actions"><a class="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↓</span></a><a class="button button-secondary" href="${e(cv.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn ${arrow}<span class="sr-only"> (opens in a new tab)</span></a></div>
      </div>
      <div class="world-caption"><span class="world-coordinates">47.01° N &nbsp; 28.86° E</span><span class="world-name" data-world-name>After hours</span></div>
    </div>
    <div class="container hero-foot"><span>Based in ${e(cv.location)}</span><div class="scene-controls"><button class="scene-switch" type="button" hidden>Change scenery <span aria-hidden="true">↻</span></button><button class="motion-toggle" type="button" aria-label="Animations" aria-pressed="true" hidden><span data-motion-label>Motion on</span><span aria-hidden="true" data-motion-icon>Ⅱ</span></button></div></div>
    <p class="sr-only" data-world-announcement aria-live="polite"></p>
  </section>`;
}
