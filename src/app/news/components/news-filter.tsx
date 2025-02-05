'use client'

import Section from "@/components/section";
import { InstantSearch, connectRefinementList, RefinementList, Hits, Index, Configure, SortBy } from "react-instantsearch-dom";
import { useEffect, useState } from "react";
import Loading from "@/components/loading";
import { searchClient } from "@/utils/config/algolia-config";
import SearchPosts from "./search-posts";
import { Post } from "@/utils/models/Post";
import NewsCard from "@/app/_components/news-card";
import CategoriesList from "./categories-list";
import { Cateogry } from "@/utils/models/Category";

export default function NewsFilter(
    {
        isMobile,
        category
    } :
    {
        isMobile: boolean;
        category?: Cateogry | null
    }
) {
    const [loading, setLoading] = useState( false );

    useEffect(() => {
        if (loading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [loading]);

    const handleClick = () => {
        setLoading(true);

        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

        setTimeout(() => {
            setLoading(false); 
        }, 3000);
    };

    const Hit = ( { hit }: { hit: Post } ) => (
        <div className="w-full flex items-stretch">
            <NewsCard {...hit} handleClick = { handleClick } isMobile = { isMobile }></NewsCard>
        </div>
    );

    return (
        loading ?
        <Loading /> :
        <Section className="pb-20">    
            <InstantSearch
                searchClient={searchClient}
                indexName="production_posts-from-strapi"
            >
                <div className="flex w-full">
                    <CategoriesList />
                    <div className="md:w-4/5 w-full">   
                        {category ? (
                            <>
                                <span className={ `text-3xl text-secondary-text w-full flex justify-center mb-12 md:mb-20 items-stretch font-medium ${ isMobile && 'mt-5' }` } >
                                    {category.name}
                                </span>
                                <Configure filters={`tags.name:${category.name}`} />
                            </>
                        ) : (
                            <div className="search-panel w-full flex mb-12 md:mb-20 items-stretch">
                                <SearchPosts />
                            </div>
                        )}
                        <Hits hitComponent={Hit}/>
                    </div>
                </div>   
            </InstantSearch>
        </Section>
    );
}