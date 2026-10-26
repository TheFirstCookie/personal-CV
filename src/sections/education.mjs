import { escapeHtml as e, sectionLabel } from '../html.mjs';
import { journey } from '../components/landscapes.mjs';

export function education(cv) {
  const study = cv.education;
  return `<section class="section education-section motion-scene" data-motion-scene id="education" aria-labelledby="education-title"><div class="container">
    ${sectionLabel('03', 'Education & courses')}
    <div class="section-heading"><h2 id="education-title">The story so far<span class="accent">.</span></h2><span class="small-note">A foundation in IT</span></div>
    ${journey()}
    <div class="education-entry" id="university"><div class="timeline-label"><span class="status-dot" aria-hidden="true"></span>${e(study.status)}</div><div class="education-body"><p class="overline">${e(study.note)}</p><h3>${e(study.institution)}</h3><p class="qualification">${e(study.qualification)}</p><p class="muted">${e(study.faculty)}</p></div><span class="entry-mark" aria-hidden="true">↗</span></div>
    <h3 class="courses-heading">Courses & training</h3>
    <div class="course-list">${cv.courses.map(course => `<article class="course" id="course-${e(course.year)}"><p class="course-year">${e(course.year)}</p><div><h4>${e(course.title)}</h4>${course.subtitle ? `<p class="course-subtitle">${e(course.subtitle)}</p>` : ''}<p class="course-provider">${e(course.provider)}</p></div><span class="completed">Completed <span aria-hidden="true">✓</span></span></article>`).join('')}</div>
  </div></section>`;
}
