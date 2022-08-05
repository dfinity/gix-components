import type { ResponseBody } from "@sveltejs/kit";

const url = "https://ipi2f-uqaaa-aaaad-aabza-cai.ic0.app/";

const staticPages: string[] = [];

export const GET = async (): Promise<ResponseBody> => {
  const headers: Record<string, string> = {
    "Cache-Control": "max-age=3600",
    "Content-Type": "application/xml",
  };

  return {
    headers,
    body: `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
    >
      <url>
        <loc>${url}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
      ${staticPages
        .map(
          (path: string) => `<url>
        <loc>${url}${path}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>`
        )
        .join("")}
    </urlset>`,
  };
};
