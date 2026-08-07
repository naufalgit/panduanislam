# Domain setup — Nama Bayi Islam

## Primary domain

**Target:** `namabayiislam.com`

RDAP lookup (Verisign) returned **404 Not Found**, which usually means the `.com` is **available to register**. Confirm and buy before someone else does.

## Buy (cheap route)

1. Register at [Namecheap](https://www.namecheap.com/), [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/), or [Porkbun](https://porkbun.com/) (~RM40–60/year).
2. Prefer **Cloudflare Registrar** if you will host on Cloudflare Pages (simpler DNS).
3. Fallbacks if taken: `maknanamabayi.com`, `namaislambayi.com`.

## DNS → host

After buying, point the domain to your host:

### Cloudflare Pages

1. Add site in Cloudflare Pages (connect this GitHub repo).
2. Pages → Custom domains → add `namabayiislam.com` and `www`.
3. Cloudflare will set the required DNS records automatically if the domain is on Cloudflare.

### Vercel

1. Project → Settings → Domains → add `namabayiislam.com`.
2. At your registrar, set:
   - **A** `@` → `76.76.21.21`
   - **CNAME** `www` → `cname.vercel-dns.com`

## Site config

Canonical URL is set in `src/consts.ts` as `https://namabayiislam.com`. Update it if you buy a fallback domain.
