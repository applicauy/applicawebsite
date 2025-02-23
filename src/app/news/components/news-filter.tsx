'use client'

import Section from "@/components/section";
import { InstantSearch, connectRefinementList, RefinementList, Hits, Index, Configure, SortBy, connectInfiniteHits } from "react-instantsearch-dom";
import { useEffect, useState } from "react";
import Loading from "@/components/loading";
import { searchClient } from "@/utils/config/algolia-config";
import SearchPosts from "./search-posts";
import { Post } from "@/utils/models/Post";
import NewsCard from "@/app/_components/news-card";
import CategoriesList from "./categories-list";
import { Cateogry } from "@/utils/models/Category";

import arrowDown from "@/assets/icons/arrow-down.webp";
import H4 from "@/components/h4";
import Image from "next/image";

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

    const Hit = ({ hit }: { hit: Post }) => (
        <li className="ais-Hits-item">
            <NewsCard {...hit} handleClick = { handleClick } isMobile = { isMobile }></NewsCard>
        </li>
    );

    const InfiniteHits = ({ hits, hasMore, refineNext }: any) => (
        <>
            <div className="ais-Hits">
                <ul className="ais-Hits-list">
                    {hits.map((hit: Post) => (
                        <Hit key={hit.objectID} hit={hit} />
                    ))}
                </ul>
            </div>
            {hasMore && (
                <div className="flex flex-col w-full items-center mt-10">
                    <button
                        onClick={refineNext}
                        className={`flex content-center pe-2.5 md:pe-4 ps-6 md:ps-9  mt-5 py-2 items-center border border-white rounded-full font-medium w-fit ${ isMobile ? 'text-2xl' : 'text-3xl' } leading-none transition-all duration-300 hover:bg-white hover:text-black`}
                        aria-label="Show more"
                    >
                        <div className="flex flex-col justify-center pb-1">
                            <H4 className={`relative ${ !isMobile && 'translate-y-[2px]' }`}>Show more</H4>
                        </div>

                        <div
                            className={`rounded-full w-fit p-1.5 md:p-3 ms-4 md:ms-9 bg-white image-arrow`}
                        >
                            <Image
                                src={arrowDown}
                                className="h-7 w-7 md:h-10 md:w-10"
                                alt="Arrow Icon"
                                color="transparent"
                                loading="lazy"
                                width={75}
                                height={75}
                            />
            </div>
                    </button>
                </div>
            )}
        </>
    );

    const CustomInfiniteHits = connectInfiniteHits(InfiniteHits);
    return (
        loading ?
        <Loading /> :
        <Section className="pb-20">    
            <InstantSearch
                searchClient={searchClient}
                indexName="production_posts-from-strapi"
            >
                <Configure hitsPerPage={ isMobile ? 4 : 6 } />
                <div className="flex w-full">
                    <CategoriesList />
                    <div className="md:w-4/5 w-full">   
                        {category ? (
                            <>
                                <span className={ `text-3xl text-secondary-text w-full flex justify-center mb-12 md:mb-20 items-stretch font-medium ${ isMobile && 'mt-5' }` } >
                                    {category.name}
                                </span>
                                <Configure filters={`tags.id:${category.objectID}`} />
                            </>
                        ) : (
                            <div className="search-panel w-full flex mb-12 md:mb-20 items-stretch">
                                <SearchPosts />
                            </div>
                        )}
                        <CustomInfiniteHits />
                    </div>
                </div>   
            </InstantSearch>
        </Section>
    );
}