# Deploy, Analytics & Search Console

## 0. Repo

Source: https://github.com/naufalgit/panduanislam  
(temporary current name may still be `namabayiislam` until renamed)

Brand / domain: **Panduan Islam** → `https://panduanislam.my`

## 1. Deploy

### Vercel (current)

Project may still be named `namabayiislam` internally — rename to `panduanislam` in Vercel settings when convenient.

1. Domain: `panduanislam.my` (see [DOMAIN.md](DOMAIN.md))
2. Vercel → Project → Settings → Domains → add `panduanislam.my`
3. Optional: rename the Vercel project to `panduanislam`

### Cloudflare Pages (alternative)

1. Connect the GitHub repo (`naufalgit/panduanislam`)
2. Build: `npm run build` · Output: `dist`
3. Attach `panduanislam.my`

## 2. Google Search Console

1. Add property: `https://panduanislam.my` (after domain is live)
2. Submit sitemap: `https://panduanislam.my/sitemap-index.xml`

See [GSC.md](GSC.md).

## 3. AdSense (after traffic)

Set in `src/consts.ts`:

```ts
export const ADSENSE_CLIENT = 'ca-pub-xxxxxxxxxxxxxxxx';
```

## 1-year content strategy

| Phase | Focus |
|-------|--------|
| Month 1–3 | Nama bayi only (`/nama-bayi/`) — rank long-tails |
| Month 4–6 | Expand names + start doa pillar |
| Month 7–12 | Solat / zakat / more guides; grow AdSense |

Do not launch every pillar at once.
