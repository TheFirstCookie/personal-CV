import { escapeHtml as e, sectionLabel, arrow } from '../html.mjs';

function recordRoom() {
  const spines = Array.from({ length: 42 }, (_, i) => {
    const x = 20 + i * 39, height = 58 + i * 17 % 48;
    return `<g><path fill="${['#755b58', '#546964', '#77705b', '#565368'][i % 4]}" d="M${x} ${330 - height}h${16 + i % 3 * 5}v${height}h-${16 + i % 3 * 5}z"/><path stroke="#bcaa86" stroke-opacity=".3" d="M${x + 5} ${340 - height}v${height - 24}"/></g>`;
  }).join('');
  return `<svg class="record-room" viewBox="0 0 1600 620" preserveAspectRatio="xMidYMid slice" fill="none" shape-rendering="crispEdges">
    <path fill="#24212d" d="M0 0h1600v620H0z"/>
    <path stroke="#4a3d49" stroke-width="2" d="M0 72h1600M0 160h1600M0 248h1600M160 0v330m320-330v330m320-330v330m320-330v330m320-330v330"/>
    <g opacity=".48">${spines}<path fill="#866650" d="M0 330h1600v7H0z"/><path fill="#392f32" d="M0 337h1600v13H0z"/></g>
    <path fill="#171c26" d="M0 352h1600v268H0z"/>
    <path stroke="#35404a" stroke-width="2" d="M0 426h1600M0 500h1600M0 574h1600M90 352v268m160-268v268m160-268v268m160-268v268m160-268v268m160-268v268m160-268v268m160-268v268m160-268v268m160-268v268"/>
    <g transform="translate(1360 44)"><path fill="#5a4b4b" d="M0 0h142v170H0z"/><path fill="#272b38" d="M5 5h132v160H5z"/><circle cx="71" cy="77" r="48" fill="#424653"/><circle cx="71" cy="77" r="35" stroke="#a89170" stroke-opacity=".4"/><circle cx="71" cy="77" r="15" fill="#b58a69"/><circle cx="71" cy="77" r="4" fill="#272b38"/><path fill="#7a7871" d="M26 139h90v3H26zm20 9h50v2H46z"/></g>
    <g transform="translate(18 415)"><path fill="#4a4044" d="M0 0h90v190H0z"/><path fill="#242633" d="M5 5h80v180H5z"/><circle cx="45" cy="49" r="23" fill="#41434d"/><circle cx="45" cy="126" r="33" fill="#41434d"/><circle cx="45" cy="126" r="14" fill="#202530"/></g>
    <g class="room-light ambient" fill="#e8bc82" opacity=".06"><path d="M300 0h55l170 620H120zM1120 0h55l240 620H950z"/></g>
  </svg><div class="shelf-dust">${Array.from({ length: 9 }, (_, i) => `<i class="ambient" style="--x:${9 + i * 10}%;--y:${16 + i * 29 % 72}%;--delay:-${i * 1.7}s"></i>`).join('')}</div>`;
}

function displayCabinet(warm) {
  return `<svg class="display-cabinet" viewBox="0 0 720 390" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true" shape-rendering="crispEdges">
    <path fill="${warm ? '#32292c' : '#253033'}" d="M0 0h720v390H0z"/>
    <path stroke="${warm ? '#504044' : '#3c4d4e'}" stroke-width="2" d="M0 90h720M0 185h720M0 280h720M90 0v350M630 0v350"/>
    <g opacity=".72">${Array.from({ length: 8 }, (_, i) => `<path fill="${['#7b6656', '#6b7870', '#625f75', '#956f5e'][i % 4]}" d="M${23 + i * 13} ${296 - i % 3 * 7}h9v${45 + i % 3 * 7}h-9z"/>`).join('')}<path fill="#9d8063" d="M17 341h120v5H17z"/><path fill="#564535" d="M17 346h120v8H17z"/></g>
    <g opacity=".65"><circle cx="642" cy="294" r="39" fill="#182329"/><circle cx="642" cy="294" r="29" stroke="#9ca28e" stroke-opacity=".3"/><circle cx="642" cy="294" r="11" fill="${warm ? '#bc926c' : '#90aaa0'}"/><circle cx="642" cy="294" r="3" fill="#1c292c"/><path fill="#92775d" d="M590 339h108v6H590z"/></g>
    <path fill="#192127" d="M357 0h5v39h-5zM334 39h52v8h-52z"/>
    <path fill="#efcd99" d="M341 47h38v4h-38z"/>
    <path class="display-light ambient" fill="#eacb95" opacity=".11" d="M341 51h38l155 295H186z"/>
    <path stroke="#9c8166" stroke-opacity=".4" d="M0 354h720"/>
  </svg>`;
}

export function projects(cv) {
  return `<section class="section projects-section motion-scene" data-motion-scene id="projects" aria-labelledby="projects-title"><div class="shelf-atmosphere" aria-hidden="true">${recordRoom()}</div><div class="container">
    ${sectionLabel('01', 'Selected projects')}
    <div class="section-heading"><div><h2 id="projects-title">On the shelf<span class="accent">.</span></h2><p class="projects-intro">Two websites. Ready to explore.</p></div><a class="text-link" href="${e(cv.github)}" target="_blank" rel="noopener noreferrer">More on GitHub ${arrow}<span class="sr-only"> (opens in a new tab)</span></a></div>
    <div class="project-grid">${cv.projects.map((project, index) => `<article class="project project-${e(project.id)}" aria-labelledby="project-${e(project.id)}-title">
      <a class="project-art" href="${e(project.url)}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${e(project.name)} (opens in a new tab)">
        ${displayCabinet(index === 1)}
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
