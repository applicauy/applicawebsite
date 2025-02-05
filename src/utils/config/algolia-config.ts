import algoliasearch from "algoliasearch";

export const BASE_URL = 'http://localhost:1337';

export const searchClient = algoliasearch('H2ZWF2VKS3', 'aebfbfe4b81b38ac79feaade2d358ff7');

export const indexPosts = searchClient.initIndex('production_posts-from-strapi');
export const indexAuthors = searchClient.initIndex('production_authors-from-strapi');
export const indexPostMedias = searchClient.initIndex('production_post-medias-from-strapi');
export const indexTags = searchClient.initIndex('production_tags-from-strapi');