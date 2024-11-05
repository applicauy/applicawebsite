'use client'

import algoliasearch from "algoliasearch/lite";
import { Configure, connectHits, InstantSearch } from "react-instantsearch-dom";
import NewsCard from "./news-card";
import { usePathname } from "next/navigation";
import { posts } from "@/utils/mock/posts";
import { Post } from "@/utils/models/Post";

const searchClient = algoliasearch('H2ZWF2VKS3', 'aebfbfe4b81b38ac79feaade2d358ff7');

const Hits = connectHits(({ hits, currentPostId }: { hits: any[], currentPostId: string }) => {
    const filteredHits = hits.filter( hit => hit.objectID !== currentPostId );
    const hitsToShow = filteredHits.slice(0, 3);
    return (
        <div className="grid w-full sm:grid-cols-2 md:grid-cols-3 md:my-10 gap-10 items-stretch justify-center">
            {
                hitsToShow
                    .map(( hit: any ) => (
                        <NewsCard key={hit.objectID} {...hit} fromNews={false} />
                    ))
            }
        </div>
    );
});


export default function LatestPostsClient() {
    const path = usePathname();
    const postName = path.split('/').pop() ?? '';
    
    const postId: number | undefined = posts.find( (post: Post) => post.urlTitle === postName )?.objectID;    
    
    return (
        <InstantSearch
          searchClient={searchClient}
          indexName="posts"
        >
          <Configure hitsPerPage = { 4 } />
          <Hits currentPostId = { postId ? postId.toString() : '' }/>
        </InstantSearch>
    );
}