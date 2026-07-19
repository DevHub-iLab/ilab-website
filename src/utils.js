// Base path for links and assets: '/' locally; changes only if you set
// `base` in astro.config.mjs for GitHub Pages. Trailing slash stripped so
// callers can write `${base}/path` without doubling slashes.
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
