# Namabayiislam.com — Astro site

Static Bahasa Melayu site for Islamic baby names (maksud, huruf, tema) aimed at Malaysia SEO + AdSense.

## Quick start

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Structure

- `/` — hub
- `/lelaki/`, `/perempuan/` — gender hubs
- `/huruf/[a-z]/` — letter hubs
- `/makna/[theme]/` — meaning themes
- `/nama/[slug]/` — individual ranking pages
- `/blog/...` — guides

Name data lives in `src/data/names.ts`. Site constants (domain, AdSense) in `src/consts.ts`.

## Domain

See [DOMAIN.md](DOMAIN.md). Canonical host: `https://namabayiislam.com`.

## Deploy & Search Console

See [DEPLOY.md](DEPLOY.md).
