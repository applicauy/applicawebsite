'use client'

import MobileH1 from "@/app/(mobile)/_components/mobile-h1";
import { apexFont } from "@/assets/fonts";
import H2 from "@/components/h2";
import { Post } from "@/utils/models/Post";
import Markdown from "markdown-to-jsx";
import ImageCarousel from "./lightgallery";
import dynamic from "next/dynamic";

const PostSectionClient = (
    {
        post,
        isMobile,
        medias,
        author
    }:
    {   
        post: Post,
        isMobile: boolean,
        medias: any[],
        author: any | undefined
    }
) => {

    const Section = dynamic(() => import('@/components/section'));
    const Badge = dynamic(() => import('@/app/_components/badge'));
    const DecoratedImage = dynamic(() => import('@/app/_components/decorated-image'));
    const MobileDecoratedImage = dynamic(() => import('@/(mobile)/_components/mobile-decorated-image'));
    const MobilePostFooter = dynamic(() => import('@/(mobile)/_components/mobile-post-footer'));
    const PostFooter = dynamic(() => import('@/app/_components/post-footer'));
    const MobileLatestPostsSection = dynamic(() => import('@/(mobile)/_sections/mobile-latest-posts-section'), { ssr: false });
    const LatestPosts = dynamic(() => import('@/sections/latest-posts'), { ssr: false });

    return (
        <div className={`${apexFont.className} flex min-h-screen flex-col items-start justify-between md:px-24 md:mt-10 mt-24 overflow-hidden ${ isMobile && 'mb-16' }`}>
          <Section className="relative flex flex-col mb-4">
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
            {
              isMobile ?
                <MobileH1 className="font-medium text-highlight">
                  { post.title }
                </MobileH1> :
                <H2 className="font-medium text-highlight">
                  { post.title }
                </H2>
            }
            <span className={`md:mt-10 mt-6 text-secondary-text ${isMobile ? 'text-lg' : 'text-xl'}`}>Published at { post.publishedDate }</span>
            <div className="image-container-blog flex items-center justify-center w-full relative mt-10 md:mt-24">
              {
                isMobile ? 
                  <MobileDecoratedImage image = { post.image } alt = { post.title  } fromPost = { true } /> :
                  <DecoratedImage image = { post.image } alt = { post.title  } fromPost = { true }/>
              }
            </div>
            <Markdown className={`${ isMobile ? 'post-content-mobile' : 'post-content' } md:mt-20 mt-10`}>{ post.content }</Markdown>
            {
              ( medias && medias.length > 0 ) &&
              <ImageCarousel images={ medias } />
            }
            
            {
              isMobile ?
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
