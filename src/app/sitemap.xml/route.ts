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

const getCategoriesWithPosts = async () => {
  const results = await indexTags.search('', {
    attributesToRetrieve: ['url', 'objectID'],
  });

  const categories = results.hits;

  const categoriesWithPosts = await Promise.all(
    categories.map(async (cat: any) => {
      const postsResult = await indexPosts.search('', {
        filters: `tags.id:${cat.objectID}`,
        hitsPerPage: 0, // IMPORTANTE: no traemos posts
      });

      return postsResult.nbHits > 0 ? cat : null;
    })
  );

  return categoriesWithPosts.filter(Boolean);
};

export async function GET() {
  const baseUrl = 'https://applicacorp.com';

  const posts = await getAllPosts();
  const categories = await getCategoriesWithPosts();

  const staticUrls = [
    '/news',
    '/contact'
  ];

  const blockUrls = [
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
    ...blockUrls.map(path => `
      <url>
        <loc>${baseUrl}${path}</loc>
        <lastmod>2024-12-04</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.7</priority>
      </url>
    `),
    ...posts.map(post => `
      <url>
        <loc>${baseUrl}/news/${post.slug}</loc>
        <lastmod>2024-12-04</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.6</priority>
      </url>
    `),
    ...categories.map(cat => `
      <url>
        <loc>${baseUrl}/news/category/${cat.url}</loc>
        <lastmod>2024-12-04</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.5</priority>
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
