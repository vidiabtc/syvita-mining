export async function get() {
  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml',
  }
  return {
    headers,
    body: `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
    
    <url>
<loc>https://syvitamining.com/</loc>
<lastmod>2022-01-13T14:57:43+00:00</lastmod>
<priority>1.00</priority>
</url>
<url>
<loc>https://syvitamining.com/pool/mia</loc>
<lastmod>2022-01-13T14:57:43+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://syvitamining.com/pool/nyc</loc>
<lastmod>2022-01-13T14:57:43+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://syvitamining.com/pool/stx</loc>
<lastmod>2022-01-13T14:57:43+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://syvitamining.com/stack</loc>
<lastmod>2022-01-13T14:57:43+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://syvitamining.com/mine</loc>
<lastmod>2022-01-13T14:57:43+00:00</lastmod>
<priority>0.80</priority>
</url>
    
    </urlset>`,
  }
}