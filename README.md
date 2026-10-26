# Daniel Mihaila — personal CV

A responsive, static CV website inspired by the retro typography and warm palette of paulbakaus.com. Content comes from the supplied Rabota.md CV. The pixel workspace illustration is original SVG.

## Run

Requires Node.js 22 or newer. No package installation is needed.

```sh
npm run dev
```

Open http://127.0.0.1:4173. This builds once at startup; after editing, run `npm run build` and refresh. Use `npm run build` to produce the deployable `dist/` folder. Any static host can serve it.

## Edit

- `src/content.mjs`: CV facts, contact details, education, courses, skills, languages.
- `src/sections/`: one template per section.
- `src/page.mjs`: document metadata, navigation, section order, footer.
- `src/styles/tokens.css`: palette, type, spacing variables.
- `src/styles/base.css`: shared foundations and accessibility.
- `src/styles/components.css`: navigation, buttons, footer.
- `src/styles/sections.css`: section layouts, responsive rules, print styles.
- `public/assets/`: self-hosted font, original illustration, favicon, and downloadable CV.

To add a section later, create its template, add content as needed, and include it in `src/page.mjs`. Generated files in `dist/` should be rebuilt rather than edited directly.

## Scope and performance

No runtime dependencies, browser JavaScript, trackers, canvas loops, background animation, backend, or third-party requests. Native links provide section navigation, email, phone, and PDF downloads. One self-hosted Tiny5 WOFF2 font is used for headings; body text uses system fonts. The PDF loads only when requested.

The website is in English, with original course titles preserved. No employment history, projects, or technical proficiency claims have been invented. Age is taken from the supplied CV and should be updated manually. Tiny5 is licensed under SIL OFL 1.1; see `public/assets/tiny5-LICENSE.txt`.
