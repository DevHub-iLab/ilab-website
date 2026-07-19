# Innovation Lab @ NTU CCDS — website

Static site built with [Astro](https://astro.build).

## Run it locally

```bash
npm install     # first time only
npm run dev     # starts http://localhost:4321
```

## Edit content

Almost all text lives in **`src/data/site.ts`** — club name, tagline, email, social links, events, and the pillars. Edit that file and every page updates.

| I want to change… | Edit this file |
| --- | --- |
| Taglines, pillars, committee, events, email, socials | `src/data/site.js` |
| Colours, font, buttons | `src/styles/global.css` |
| Nav / footer | `src/components/Nav.astro`, `Footer.astro` |
| Page content/layout | `src/pages/*.astro` |

## Deploy (all free)

Push this folder to a GitHub repo first, then:

- **Netlify** — "Add new site → Import from Git". It auto-detects Astro
  (build: `pnpm run build`, publish dir: `dist`). Done.
- **Vercel** — "Add New → Project", import the repo. Also auto-detects Astro.
- **GitHub Pages** — uncomment `site` and `base` in `astro.config.mjs`
  (set them to your username/repo), then follow
  <https://docs.astro.build/en/guides/deploy/github/> to add the
  provided GitHub Actions workflow.

Netlify or Vercel is the easiest: no config changes needed.
