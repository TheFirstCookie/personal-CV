# Daniel Mihaila — personal CV

A responsive, static CV and portfolio website inspired by the retro typography and warm palette of paulbakaus.com. Content comes from the supplied Rabota.md CV and Daniel's two project websites. The animated pixel city is original SVG, and the project cases use local screenshots of the real sites.

## Run

Requires Node.js 22 or newer. No package installation is needed.

```sh
npm run dev
```

Open http://127.0.0.1:4173. This builds once at startup; after editing, run `npm run build` and refresh. Use `npm run build` to produce the deployable `dist/` folder. Any static host can serve it.

## Edit

- `src/content.mjs`: CV facts, GitHub, project links, education, courses, skills, languages.
- `src/components/night-city.mjs`: original skyline SVG generated at build time.
- `src/sections/`: one template per section.
- `src/page.mjs`: document metadata, navigation, section order, footer.
- `src/styles/tokens.css`: palette, type, spacing variables.
- `src/styles/base.css`: shared foundations and accessibility.
- `src/styles/components.css`: navigation, buttons, footer.
- `src/styles/sections.css`: section layouts, responsive rules, print styles.
- `src/styles/projects.css`: project shelf, CD cases, and responsive project layouts.
- `src/styles/motion.css`: city animation and reduced-motion rules.
- `public/motion.js`: motion toggle, viewport visibility, and page visibility handling.
- `public/assets/`: self-hosted font, original illustration, favicon, and downloadable CV.

To add a section later, create its template, add content as needed, and include it in `src/page.mjs`. Generated files in `dist/` should be rebuilt rather than edited directly.

## Scope and performance

No runtime dependencies, trackers, canvas loops, backend, or third-party requests. A small JavaScript module enables CSS animations only while the city is visible and the tab is active. Motion can be paused and respects the operating system's reduced-motion setting. Without JavaScript, the content and links still work and the city stays static. CD cases react to hover and keyboard focus using transforms, with no continuous animation.

Native links provide navigation, GitHub profiles and repositories, live projects, email, phone, and PDF downloads. One self-hosted Tiny5 WOFF2 font is used for headings; body text uses system fonts. Project screenshots are lazy-loaded. The PDF loads only when requested.

The website is in English, with original course titles preserved. No employment history, projects, or technical proficiency claims have been invented. Age is taken from the supplied CV and should be updated manually. Tiny5 is licensed under SIL OFL 1.1; see `public/assets/tiny5-LICENSE.txt`.
