# Domain setup — Panduan Islam

## Primary domain

**Target:** `panduanislam.my`

1-year brand for an Islamic guides hub (Malaysia). First pillar: **Nama Bayi Islam**.

## Buy

1. Register `.my` via [exabytes](https://www.exabytes.my/), [Namecheap](https://www.namecheap.com/), or [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) if available for `.my`.
2. Expect higher cost/process than `.com` (MYNIC rules may apply for `.my`).
3. Fallback if blocked: `panduanislam.com` (then update `src/consts.ts`).

## DNS → Vercel

1. Vercel project → Settings → Domains → add `panduanislam.my` and `www.panduanislam.my`
2. At registrar, set the DNS records Vercel shows (usually A/CNAME)

## Site config

Canonical URL is `https://panduanislam.my` in `src/consts.ts` and `astro.config.mjs`.
