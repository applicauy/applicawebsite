'use client'

import Section from "@/components/section";
import NewsCard from '../../_components/news-card';
import { Post } from "@/utils/models/Post";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, connectRefinementList, connectHits, RefinementList } from 'react-instantsearch-dom';
import H4 from "@/components/h4";
import H5 from "@/components/h5";
import { useSearchParams } from "next/navigation";
import SearchPosts from "./search-posts";
import { useEffect, useState } from "react";
import Loading from "@/components/loading";
import isMobile from 'react-device-detect';

const searchClient = algoliasearch('H2ZWF2VKS3', 'aebfbfe4b81b38ac79feaade2d358ff7');

const CustomRefinementList = connectRefinementList(RefinementList);


export default function NewsFilter(
    {
        isMobile
    } :
    {
        isMobile: boolean
    }
) {
    const searchParams = useSearchParams();
    const tag = searchParams.get('tag');

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
                indexName="posts"
            >
                <div className="flex w-full">
                    <div className="hidden md:block md:w-1/5">
                        <H4 className="text-highlight">Filters</H4>
                        <H5 className="mt-5 mb-4 text-secondary-text">Tags</H5>
                        <CustomRefinementList 
                            attribute="tags" 
                            defaultRefinement={tag ? [tag] : []}
                            limit={100}
                            transformItems={(items: any) => 
                                items.sort((a: any, b: any) => a.label.localeCompare(b.label))
                            }
                        />
                    </div>    
                    <div className="md:w-4/5 w-full">    
                        <div className="search-panel w-full flex mb-12 md:mb-20 items-stretch">
                            <SearchPosts />
                        </div>
                        <Hits hitComponent={Hit}/>
                    </div>
                </div>   
            </InstantSearch>
        </Section>
    );
}