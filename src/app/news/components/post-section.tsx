import { apexFont } from "@/assets/fonts";
import Section from "@/components/section";
import { Post } from '../../../utils/models/Post';
import MobileH1 from "@/app/(mobile)/_components/mobile-h1";
import H2 from "@/components/h2";
import MobileDecoratedImage from "@/app/(mobile)/_components/mobile-decorated-image";
import DecoratedImage from "@/app/_components/decorated-image";
import Markdown from "markdown-to-jsx";
import Badge from "@/app/_components/badge";
import ImageCarousel from "./lightgallery";
import MobilePostFooter from "@/app/(mobile)/_components/mobile-post-footer";
import PostFooter from "@/app/_components/post-footer";
import { indexAuthors, indexPostMedias, searchClient } from "@/utils/config/algolia-config";
import MobileLatestPostsSection from "@/app/(mobile)/_sections/mobile-latest-posts-section";
import LatestPosts from "@/app/_sections/latest-posts";
import { useNavigationHandlers } from "@/lib/helpers";
import PostSectionClient from "./post-section-client";

export default async function PostSection( 
    {
        post,
        isMobile
    }:
    {   
        post: Post,
        isMobile: boolean
    }
) {
    
    const { hits: hitsAuthor } = await indexAuthors.search<any>( post.author.id,
      {
        filters: `id:"${ post.author.id }"`
      }
    )
    
    const author: any | undefined = hitsAuthor[0];

    const queries = post.medias?.map(media => ({
      indexName: 'production_post-medias-from-strapi',
      query: '',
      params: {
          filters: `id:${media.id}`
      }
    })) || [];

    let medias: any[] = [];

    if (queries && queries.length > 0) {
      const { results } = await searchClient.multipleQueries(queries);

      const mediaData = results.map(( result: any )=> result.hits[0]);

      medias = mediaData;
    }

    const formatDate = (dateString : string) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-CA');
    };

    return (
        <PostSectionClient
          post = { post }
          isMobile = { isMobile }
          medias = { medias }
          author = { author } 
        ></PostSectionClient>
    );

}