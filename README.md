# Ture Aid website

Static marketing site for Ture Aid, built with [Astro](https://astro.build).

Pages: Home, How it works, About us, Contact, Waitlist.

## Run

Needs Node 22.23 or later (required by Astro 7).

```
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/ (unminified, formatted with Prettier; CSS in dist/_astro/)
npm run preview   # serve dist/ locally
```

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.

1. Create a GitHub repository and push this folder to its `main` branch:
   ```
   git init -b main
   git add .
   git commit -m "Ture Aid website"
   git remote add origin https://github.com/<user>/<repo>.git
   git push -u origin main
   ```
2. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The **Actions** tab shows the deploy. When it finishes, the site is at `https://<user>.github.io/<repo>/`.
   To redeploy without changing anything, run the workflow by hand from the Actions tab.

The workflow sets the site address and base path for you, so links and images work under `/<repo>/`.
In page code, write internal links as `url('/about')` (from `src/site.ts`), not a bare `/about`,
or they will break under the project subfolder.

**Custom domain (optional):** in Settings → Pages, enter the domain and follow GitHub's DNS steps.
The next deploy then serves from the domain root automatically. No code change is needed.

Pages build as `about.html` etc. and links use clean paths (`/about`); GitHub Pages resolves those.
The output also deploys unchanged to Netlify, Cloudflare Pages or Vercel.

## Before going live

- `src/site.ts`: set the real contact email (currently `hello@tureaid.example`) and check the GitHub links.
- `src/pages/about.astro`: replace the placeholder team bios.
- `src/site.ts`: set `waitlistEndpoint` (e.g. a Formspree form URL) to collect waitlist sign-ups directly.
  While it is empty, the waitlist form opens a pre-filled email to `email` instead.
- Fonts (Inter Tight, Newsreader) and photos are self-hosted, so the site makes no third-party requests.

## Brand

- Logo: `src/components/Logo.astro` (fern A, curl-up version). Favicon: `public/favicon.svg`.
- Palette A, in `src/styles/global.css`:
  turquoise `#3DD6C3`, soft aqua `#A0D9D2`, petrol `#00606B`, coral `#FF5A3D`, ink `#0B1F2A`, white.
  Coral is used only on ink or white backgrounds; it does not have enough contrast on turquoise or petrol.

- Type: Newsreader (serif) for headings, Inter Tight for body. Warm off-white `#F6F4EF` background; turquoise is an accent only.
- Photos: `public/images/*.webp`, free to use under the Unsplash licence (no attribution required).
