import { escapeHtml as e, sectionLabel } from '../html.mjs';
import { campus } from '../components/campus.mjs';

export function education(cv) {
  const study = cv.education;
  return `<section class="section education-section motion-scene" data-motion-scene id="education" aria-labelledby="education-title">
    ${campus()}
    <div class="container education-content">
      ${sectionLabel('03', 'Education')}
      <div class="section-heading"><h2 id="education-title">The story so far<span class="accent">.</span></h2><span class="education-chapter">Still writing the next chapter</span></div>
      <div class="study-layout">
        <article class="university-feature" id="university" aria-labelledby="university-title">
          <p class="study-status"><span class="status-dot" aria-hidden="true"></span>${e(study.status)}<span class="study-location">Chișinău, Moldova</span></p>
          <p class="study-subject">${e(study.qualification)}</p>
          <h3 id="university-title">${e(study.institution)}</h3>
          <p class="study-faculty">${e(study.faculty)}</p>
          <p class="study-perspective">Learning the foundations.<br><span>Applying them in code.</span></p>
          <p class="study-description">University is where I’m building my foundation in IT. Personal web projects are where I put that learning into practice, explore ideas, and keep improving.</p>
          <a class="study-link" href="#projects">See what I’m building <span aria-hidden="true">↗</span></a>
        </article>
        <aside class="training-notes" aria-labelledby="training-title">
          <p class="overline">Beyond university</p>
          <h3 id="training-title">Along the way<span>.</span></h3>
          <p class="training-intro">Earlier steps that sparked my interest in technology.</p>
          <ol class="training-list">${cv.courses.map(course => `<li id="course-${e(course.year)}"><span class="training-year">${e(course.year)}</span><div><h4>${e(course.title)}</h4>${course.subtitle ? `<p class="training-subtitle">${e(course.subtitle)}</p>` : ''}<p class="training-provider">${e(course.provider)}</p><span class="training-completed">Completed <span aria-hidden="true">✓</span></span></div></li>`).join('')}</ol>
        </aside>
      </div>
      <div class="study-footnote"><span class="study-coordinate">47.01° N / 28.86° E</span><span>Rooted in curiosity. Always growing.</span><span aria-hidden="true">✳</span></div>
    </div>
  </section>`;
}
