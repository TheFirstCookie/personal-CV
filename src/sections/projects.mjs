import { escapeHtml as e, sectionLabel, arrow } from '../html.mjs';

export function projects(cv) {
  return `<section class="section projects-section motion-scene" data-motion-scene id="projects" aria-labelledby="projects-title"><div class="shelf-atmosphere" aria-hidden="true"><div class="shelf-grid ambient"></div></div><div class="container">
    ${sectionLabel('01', 'Selected projects')}
    <div class="section-heading"><div><h2 id="projects-title">On the shelf<span class="accent">.</span></h2><p class="projects-intro">Two websites. Ready to explore.</p></div><a class="text-link" href="${e(cv.github)}" target="_blank" rel="noopener noreferrer">More on GitHub ${arrow}<span class="sr-only"> (opens in a new tab)</span></a></div>
    <div class="project-grid">${cv.projects.map((project, index) => `<article class="project project-${e(project.id)}" aria-labelledby="project-${e(project.id)}-title">
      <a class="project-art" href="${e(project.url)}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${e(project.name)} (opens in a new tab)">
        <span class="shelf-number" aria-hidden="true">VOL. 0${index + 1}</span>
        <span class="cd-assembly" aria-hidden="true">
          <span class="compact-disc"><span class="disc-print">${e(project.label)}<span>DM / WEB COLLECTION</span></span><span class="disc-hub"></span></span>
          <span class="jewel-case"><span class="case-spine">DM — 00${index + 1}</span><span class="case-cover"><span class="cover-topline"><span>PERSONAL PROJECT</span><span>0${index + 1}</span></span><span class="cover-title">${e(project.label)}<span>${index === 0 ? 'AUTOCHECK' : 'SUPPLY'}</span></span><img src="${e(project.image)}" width="1120" height="760" alt="" loading="lazy" decoding="async"><span class="cover-bottomline"><span>${index === 0 ? 'INSPECT. KNOW. DRIVE.' : 'BUILT FOR THE ROOM.'}</span><span>↗</span></span></span></span>
        </span><span class="project-shelf" aria-hidden="true"></span>
        <span class="project-launch" aria-hidden="true">Open project ↗</span>
      </a>
      <div class="project-details"><p class="overline">${e(project.category)}</p><h3 id="project-${e(project.id)}-title">${e(project.name)}</h3><p class="project-description">${e(project.description)}</p><ul class="project-tags" aria-label="Project features">${project.tags.map(tag => `<li>${e(tag)}</li>`).join('')}</ul><div class="project-links"><a href="${e(project.url)}" target="_blank" rel="noopener noreferrer">Visit website ${arrow}<span class="sr-only"> (opens in a new tab)</span></a><a href="${e(project.source)}" target="_blank" rel="noopener noreferrer">Source code ${arrow}<span class="sr-only"> (opens in a new tab)</span></a></div></div>
    </article>`).join('')}</div>
  </div></section>`;
}
