# Deploy, Analytics & Search Console

## 1. Push to GitHub

Create a repo (e.g. `seo-website` / `namabayiislam`) and push this project.

## 2. Deploy (pick one — both free)

### Option A — Cloudflare Pages (recommended with Cloudflare Registrar)

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) → Workers & Pages → Create → Pages → Connect Git
2. Build command: `npm run build`
3. Output directory: `dist`
4. Node version: `20` or later
5. Add custom domain `namabayiislam.com` after purchase (see [DOMAIN.md](DOMAIN.md))

### Option B — Vercel

1. Import the GitHub repo at [vercel.com](https://vercel.com/)
2. Framework preset: Astro (auto)
3. Add domain `namabayiislam.com`

`vercel.json` is included for clean trailing-slash URLs.

## 3. Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://namabayiislam.com`
3. Verify via DNS TXT (Cloudflare/Vercel) or HTML file upload to `public/`
4. Submit sitemap: `https://namabayiislam.com/sitemap-index.xml`

## 4. Google Analytics (optional but recommended)

1. Create a GA4 property
2. Add the measurement ID via a small script in `BaseLayout.astro` `<head>` when ready

Placeholder: keep using Search Console performance reports first (free, enough for month 1–2).

## 5. Google AdSense (month 3)

1. Apply at [Google AdSense](https://www.google.com/adsense/) after the site is live with substantial content
2. When approved, set your publisher ID in `src/consts.ts`:

```ts
export const ADSENSE_CLIENT = 'ca-pub-xxxxxxxxxxxxxxxx';
```

3. Replace `data-ad-slot="0000000000"` in `src/components/AdSlot.astro` with real ad unit IDs
4. Redeploy

Ad placeholders already render on home, hubs, name pages, and blog posts.
