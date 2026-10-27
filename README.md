# Daniel Mihaila — personal CV

A responsive CV and portfolio website inspired by the retro scenes and warm palette of paulbakaus.com. Content comes from Daniel's CV and two project websites, with his requested contact information updates. The original pixel artwork uses SVG and Canvas 2D; project cases use local screenshots of the real sites.

## Run

Requires Node.js 22 or newer. No package installation is needed.

```sh
npm run dev
```

Open http://127.0.0.1:4173. This builds once at startup; after editing, run `npm run build` and refresh. Use `npm run build` to produce the deployable `dist/` folder. Any static host can serve it.

## Edit

- `src/content.mjs`: CV facts, GitHub, project links, education, courses, skills, languages.
- `src/components/night-city.mjs`: original city and canal SVG, with a waterfront promenade and ferry.
- `src/components/landscapes.mjs`: coastal-sunset SVG scene.
- `src/components/campus.mjs`: decorative campus, hills, and fireflies for education.
- `src/sections/`: one template per section.
- `src/page.mjs`: document metadata, navigation, section order, footer.
- `src/styles/tokens.css`: palette, type, spacing variables.
- `src/styles/base.css`: shared foundations and accessibility.
- `src/styles/components.css`: navigation, buttons, footer.
- `src/styles/sections.css`: section layouts, responsive rules, print styles.
- `src/styles/projects.css`: project shelf, CD cases, and responsive project layouts.
- `src/styles/motion.css`: city animation and reduced-motion rules.
- `src/styles/worlds.css`: immersive hero, desktop bio, landscape sections, and scene animation.
- `src/styles/education.css`: university-led layout, compact training notes, and campus animation.
- `public/motion.js`: motion toggle, viewport visibility, and page visibility handling.
- `public/scenery.js`: low-resolution Canvas 2D scenery renderer, with cached aurora terrain and a daybreak sailboat.
- `scripts/cv-document.mjs`: `cvDocument()` returns the HTML used for the downloadable PDF. Regenerate using Chromium print-to-PDF after changing CV facts; the regular site build copies the existing PDF.
- `public/assets/`: self-hosted font, original illustration, favicon, and downloadable CV.

To add a section later, create its template, add content as needed, and include it in `src/page.mjs`. Generated files in `dist/` should be rebuilt rather than edited directly.

## Scope and performance

No runtime dependencies, trackers, backend, or third-party requests. The hero canvas renders at reduced resolution and a maximum 30 fps, only while visible in an active tab. CSS scenes pause outside the viewport. The motion control stops all ambient animation and respects the operating system's reduced-motion setting. Without JavaScript, content and links still work with static scenes. CD cases respond to pointer position and keyboard focus, with no idle animation loop. The scenery switch also works with motion disabled, rendering still alternatives.

Native links provide navigation, GitHub and LinkedIn profiles, source repositories, live projects, email, and PDF downloads. One self-hosted Tiny5 WOFF2 font is used for headings; body text uses system fonts. Project screenshots are lazy-loaded. The downloadable CV is regenerated from the current content and excludes the removed contact and workplace-preference details. The original file in Downloads is untouched.

The website is in English, with original course titles preserved. No employment history, projects, or technical proficiency claims have been invented. Age is taken from the supplied CV and should be updated manually. Tiny5 is licensed under SIL OFL 1.1; see `public/assets/tiny5-LICENSE.txt`.
