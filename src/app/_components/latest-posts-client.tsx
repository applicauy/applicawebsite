'use client'

import { Configure, connectHits, InstantSearch } from "react-instantsearch-dom";
import NewsCard from "./news-card";
import { usePathname } from "next/navigation";
import { indexPosts, searchClient } from "@/utils/config/algolia-config";
import { useEffect, useState } from "react";

const Hits = connectHits(({ hits, currentPostId }: { hits: any[], currentPostId: string }) => {
        
    const [width, setWidth] = useState(0);

    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);

    const filteredHits = hits.filter( hit => hit.objectID !== currentPostId );
    const hitsToShow = filteredHits.slice(0, 3);
    return  ( width > 1024 || width < 767 ) ?
                <div className="grid w-full sm:grid-cols-2 lg:grid-cols-3 md:my-10 gap-10 items-stretch">
                    {
                        hitsToShow
                            .map(( hit: any ) => (
                                <NewsCard key={hit.objectID} {...hit} fromNews={false} />
                            ))
                    }
                </div>
                :
                <div className="flex flex-row gap-8 items-stretch overflow-x-auto scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]">
                    {
                        hitsToShow
                            .map(( hit: any ) => (
                                <NewsCard key={hit.objectID} {...hit} fromNews={false} fromLanding = { true } />
                            ))
                    }
                </div>;
        
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