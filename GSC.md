# Google Search Console verification

1. Open https://search.google.com/search-console
2. Add URL prefix property: https://namabayiislam.com
3. Choose HTML file verification (or DNS TXT if domain is on Cloudflare)
4. If HTML file: download the google*.html file and place it in /public/, then redeploy
5. Submit sitemap: https://namabayiislam.com/sitemap-index.xml

## Analytics (optional)

Add GA4 snippet to BaseLayout.astro head when you have a Measurement ID.
