import { indexPosts, indexTags } from "@/utils/config/algolia-config";

const getAllPosts = async() => {
    const results = await indexPosts.search('', {
        attributesToRetrieve: ['slug'],
    });

    return results.hits.map((hit: any) => ({
      slug: hit.slug,
    }));
}

const getAllCategories = async() => {
    const results = await indexTags.search('', {
        attributesToRetrieve: ['url'],
    });

    return results.hits.map((hit: any) => ({
      url: hit.url,
    }));
}

export async function GET() {
  const baseUrl = 'https://applicacorp.com';

  const posts = await getAllPosts();
  const categories = await getAllCategories();

  const staticUrls = [
    '/news',
    '/contact',
    '/#about-us',
    '/#services',
    '/#benefits'
  ];

  const urls = [
    `<url>
        <loc>https://applicacorp.com/</loc>
        <lastmod>2024-12-04</lastmod>
        <changefreq>yearly</changefreq>
        <priority>1.0</priority>
    </url>`,
    ...staticUrls.map(path => `
      <url>
        <loc>${baseUrl}${path}</loc>
        <lastmod>2024-12-04</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.8</priority>
      </url>
    `),
    ...posts.map(post => `
      <url>
        <loc>${baseUrl}/news/${post.slug}</loc>
        <lastmod>2024-12-04</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.8</priority>
      </url>
    `),
    ...categories.map(cat => `
      <url>
        <loc>${baseUrl}/news/category/${cat.url}</loc>
        <lastmod>2024-12-04</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.8</priority>
      </url>
    `)
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join('')}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
