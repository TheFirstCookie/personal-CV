import { escapeHtml as e, arrow } from '../html.mjs';

export function hero(cv) {
  return `<section class="hero" id="home" aria-labelledby="hero-title">
    <div class="container hero-grid">
      <div class="hero-copy">
        <p class="eyebrow availability"><span class="status-dot" aria-hidden="true"></span> Open to part-time opportunities</p>
        <h1 id="hero-title">Daniel<span>Mihaila<span class="name-period">.</span></span></h1>
        <p class="hero-role">${e(cv.role)} <span aria-hidden="true">/</span> IT student</p>
        <p class="hero-intro">${e(cv.introduction)}</p>
        <div class="actions"><a class="button button-primary" href="#contact">Let’s connect ${arrow}</a><a class="button button-secondary" href="${e(cv.pdf)}" download>Download CV <span aria-hidden="true">↓</span></a></div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="window-top"><span><i></i><i></i><i></i></span><span>CHISINAU, MD</span><span>01</span></div>
        <img src="/assets/workspace.svg" width="480" height="440" alt="" fetchpriority="high">
        <div class="window-bottom"><span>LEARNING. BUILDING. GROWING.</span><span class="pixel-star">✳</span></div>
      </div>
    </div>
    <div class="container hero-foot"><span>Based in ${e(cv.location)}</span><a href="#about">A little about me <span aria-hidden="true">↓</span></a></div>
  </section>`;
}
