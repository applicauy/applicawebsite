'use client'

import '../../styles/images.scss';
import '../../styles/post.scss';
import MobileH1 from "@/app/(mobile)/_components/mobile-h1";
import { apexFont } from "@/assets/fonts";
import H2 from "@/components/h2";
import { Post } from "@/utils/models/Post";
import Markdown from "markdown-to-jsx";
import ImageCarousel from "./lightgallery";
import dynamic from "next/dynamic";
import H1 from '@/components/h1';
import { useEffect, useState } from 'react';

const PostSectionClient = (
    {
        post,
        medias,
        author
    }:
    {   
        post: Post,
        medias: any[],
        author: any | undefined
    }
) => {

    const [isMobile, setIsMobile] = useState(false);
    
    const [width, setWidth] = useState(0);

    useEffect(() => {
      setWidth(window.innerWidth);
      setIsMobile( window.innerWidth <= 800 );
    }, []);

    const Section = dynamic(() => import('@/components/section'));
    const Badge = dynamic(() => import('@/app/_components/badge'));
    const DecoratedImage = dynamic(() => import('@/app/_components/decorated-image'));
    const MobileDecoratedImage = dynamic(() => import('@/(mobile)/_components/mobile-decorated-image'));
    const MobilePostFooter = dynamic(() => import('@/(mobile)/_components/mobile-post-footer'));
    const PostFooter = dynamic(() => import('@/app/_components/post-footer'));
    const MobileLatestPostsSection = dynamic(() => import('@/(mobile)/_sections/mobile-latest-posts-section'), { ssr: false });
    const LatestPosts = dynamic(() => import('@/sections/latest-posts'), { ssr: false });


    return (
        <div className={`${apexFont.className} flex min-h-screen flex-col items-start justify-between px-4 lg:px-24 lg:mt-10 mt-24 overflow-hidden ${ isMobile && 'mb-16' }`}>
          <Section className="relative flex flex-col mb-4">
            {/* <h1 className="sr-only">{ post.title }</h1> */}
            <div className="flex flex-wrap gap-2 mb-5">
              {
                post.tags.map(
                  tag => (
                    <Badge 
                      key = { tag.id } 
                      category = { tag.name } 
                      className="md:font-medium text-sm md:text-lg" 
                      url = { tag.url }
                    />
                  )
                )
              }
            </div>
            <H1 className="font-medium text-highlight">
              { post.title }
            </H1>
            <span className={`md:mt-10 mt-6 text-secondary-text ${isMobile ? 'text-lg' : 'text-xl'}`}>Published at { post.publishedDate }</span>
            <div className="image-container-blog flex items-center justify-center w-full relative mt-10 md:mt-24">
              {
                ( width <= 1024 ) ? 
                  <MobileDecoratedImage image = { post.image } alt = { post.title  } fromPost = { true } /> :
                  <DecoratedImage image = { post.image } alt = { post.title  } fromPost = { true }/>
              }
            </div>
            <Markdown className={`${ isMobile ? 'post-content-mobile' : 'post-content' } md:mt-20 mt-10`}>{ String( post.content ) }</Markdown>
            {
              ( medias && medias.length > 0 ) &&
              <ImageCarousel images={ medias } />
            }
            
            {
              ( width <= 1024 ) ?
                <MobilePostFooter { ...post } author = { author }/> :
                <PostFooter { ...post } author = { author }/>
            }
            
          </Section>
          {
            isMobile ? 
            <MobileLatestPostsSection fromPost = { true }></MobileLatestPostsSection> :
            <LatestPosts />
          }
        </div>
    );
}

export default PostSectionClient
