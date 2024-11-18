'use client'

import { Configure, connectHits, InstantSearch } from "react-instantsearch-dom";
import NewsCard from "./news-card";
import { usePathname } from "next/navigation";
import { indexPosts, searchClient } from "@/utils/config/algolia-config";

const Hits = connectHits(({ hits, currentPostId }: { hits: any[], currentPostId: string }) => {
    const filteredHits = hits.filter( hit => hit.objectID !== currentPostId );
    const hitsToShow = filteredHits.slice(0, 3);
    return (
        <div className="grid w-full sm:grid-cols-2 md:grid-cols-3 md:my-10 gap-10 items-stretch">
            {
                hitsToShow
                    .map(( hit: any ) => (
                        <NewsCard key={hit.objectID} {...hit} fromNews={false} />
                    ))
            }
        </div>
    );
});


export default async function LatestPostsClient() {
    const path = usePathname();
    const postName = path.split('/').pop() ?? '';

    const { hits: posts } = await indexPosts.search('', { hitsPerPage: 1000 })
    
    const postId: string | undefined = posts.find( (post: any) => post.slug === postName )?.objectID;    
    
    return (
        <InstantSearch
          searchClient={searchClient}
          indexName="production_posts-from-strapi"
        >
          <Configure hitsPerPage = { 4 } />
          <Hits currentPostId = { postId ? postId : '' }/>
        </InstantSearch>
    );
}