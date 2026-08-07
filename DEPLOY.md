# Deploy, Analytics & Search Console

## 0. Repo

Source: https://github.com/naufalrazman/namabayiislam

## 1. Deploy (pick one — both free)

### Option A — Vercel (fastest)

1. Open: https://vercel.com/new/clone?repository-url=https://github.com/naufalrazman/namabayiislam
2. Import the repo (Astro is auto-detected)
3. Deploy
4. Add custom domain `namabayiislam.com` after purchase (see [DOMAIN.md](DOMAIN.md))

### Option B — Cloudflare Pages

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) → Workers & Pages → Create → Pages → Connect Git
2. Select `naufalrazman/namabayiislam`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Node version: `20` or later
6. Add custom domain `namabayiislam.com`

`vercel.json` and `wrangler.toml` are included.

## 2. Google Search Console

See [GSC.md](GSC.md). Sitemap after go-live: `https://namabayiislam.com/sitemap-index.xml`

## 3. Google Analytics (optional)

Add GA4 measurement ID in `BaseLayout.astro` `<head>` when ready. Search Console alone is enough for month 1–2.

## 4. Google AdSense (month 3)

1. Apply at [Google AdSense](https://www.google.com/adsense/) after the site is live
2. Set publisher ID in `src/consts.ts`:

```ts
export const ADSENSE_CLIENT = 'ca-pub-xxxxxxxxxxxxxxxx';
```

3. Replace `data-ad-slot="0000000000"` in `src/components/AdSlot.astro` with real ad unit IDs
4. Redeploy

Ad + affiliate placeholders are already on home, hubs, name pages, and blog guides.
