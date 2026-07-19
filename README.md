# Innovation Lab @ NTU CCDS — website

Static site built with [Astro](https://astro.build).

## Run it locally

Tool versions (node, pnpm) are pinned in `mise.toml` and managed with
[mise](https://mise.jdx.dev) — install it once, and it takes care of the rest:

```bash
mise install    # first time only: installs the pinned node + pnpm
pnpm install    # first time only: installs dependencies
pnpm dev        # starts http://localhost:4321
```

There are also mise shortcuts for the common tasks:

```bash
mise run dev        # = pnpm dev
mise run build      # = pnpm build → dist/
mise run preview    # = pnpm preview (serves the production build)
```

No mise? Any node ≥ 26 with pnpm ≥ 11 works: `pnpm install && pnpm dev`.

## Edit content

Almost all text lives in **`src/data/site.ts`** — club name, tagline, email, social links, events, and the pillars. Edit that file and every page updates.

| I want to change… | Edit this file |
| --- | --- |
| Taglines, pillars, committee, events, email, socials | `src/data/site.ts` |
| Colours, font, buttons | `src/styles/global.css` |
| Nav / footer | `src/components/Nav.astro`, `Footer.astro` |
| Page content/layout | `src/pages/*.astro` |
