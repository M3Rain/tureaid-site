// @ts-check
import { defineConfig } from 'astro/config';

// Static output. Pages build to /index.html, /about.html, /how-it-works.html, /contact.html, /waitlist.html.
//
// SITE_URL and BASE_PATH are set by the GitHub Pages workflow (.github/workflows/deploy.yml):
//  - project site:  SITE_URL=https://<user>.github.io  BASE_PATH=/<repo>
//  - custom domain: SITE_URL=https://your-domain       BASE_PATH= (empty)
// Locally neither is set, so the site runs at the root.
export default defineConfig({
  site: process.env.SITE_URL || 'https://tureaid.example',
  base: process.env.BASE_PATH || '/',
  // Keep built HTML unminified; `npm run build` then pretty-prints dist/ with Prettier.
  compressHTML: false,
  build: {
    format: 'file',
    inlineStylesheets: 'never',
  },
});
