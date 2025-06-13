'use client'

import '../../styles/news.scss';
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
import ShowMoreButton from "./show-more-button";
import { usePathname, useSearchParams } from "next/navigation";

export default function NewsFilter(
    {
        category
    } :
    {
        category?: Cateogry | null
    }
) {
    const [loading, setLoading] = useState( false );

    const [isMobile, setIsMobile] = useState(false);

    const [width, setWidth] = useState(0);

    useEffect(() => {
      setWidth(window.innerWidth);
      setIsMobile( window.innerWidth <= 800 );
    }, []);

    const searchParams = useSearchParams();
    const pageParam = searchParams.get('page');
    const currentPage = parseInt(pageParam || '1');

    const pathname = usePathname();

    const isFromCategory = pathname.includes('category');

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
                <ul id="posts-section" className="ais-Hits-list">
                    {hits.map((hit: Post) => (
                        <Hit key={hit.objectID} hit={hit} />
                    ))}
                </ul>
            </div>
            {hasMore && (
                <ShowMoreButton
                    isMobile = { isMobile }
                    currentPage = { currentPage }
                    fromCategory = { isFromCategory }
                    category={ isFromCategory ? category : null }
                >
                </ShowMoreButton>
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
                <Configure hitsPerPage={ isMobile ? currentPage * 4 : currentPage * 6 } page = { currentPage }/>
                <div className="flex w-full">
                    <CategoriesList />
                    <div className="lg:w-4/5 w-full">   
                        {category ? (
                            <>
                                <span className={ `text-3xl text-secondary-text w-full flex justify-center mb-12 md:mb-20 items-stretch font-medium` } >
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