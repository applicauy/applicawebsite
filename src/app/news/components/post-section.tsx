
import { Post } from '../../../utils/models/Post';
import { indexAuthors, indexPostMedias, searchClient } from "@/utils/config/algolia-config";
import dynamic from "next/dynamic";

export default async function PostSection( 
    {
        post
    }:
    {   
        post: Post
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

    const PostSectionClient = dynamic(() => import('@/app/news/components/post-section-client'), { ssr: false });

    return (
        <PostSectionClient
          post = { post }
          medias = { medias }
          author = { author } 
        ></PostSectionClient>
    );

}