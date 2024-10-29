'use client'
import { apexFont } from "@/assets/fonts";
import Section from "@/components/section";
import { Post } from '../../../utils/models/Post';
import Badge from "@/app/_components/badge";
import MobileH1 from "@/app/(mobile)/_components/mobile-h1";
import H2 from "@/components/h2";
import MobileDecoratedImage from "@/app/(mobile)/_components/mobile-decorated-image";
import DecoratedImage from "@/app/_components/decorated-image";
import Markdown from "markdown-to-jsx";
import MobilePostFooter from "@/app/(mobile)/_components/mobile-post-footer";
import PostFooter from "@/app/_components/post-footer";
import MobileLatestPostsSection from "@/app/(mobile)/_sections/mobile-latest-posts-section";
import LatestPosts from "@/app/_sections/latest-posts";
import ImagesSlide from "./image-slide";
import { LightGallery } from "lightgallery/lightgallery";
import ImageCarousel from "./lightgallery";

export default function PostSection( 
    {
        post,
        isMobile
    }:
    {   
        post: Post,
        isMobile: boolean
    }
) {

    return (
        <div className={`${apexFont.className} flex min-h-screen flex-col items-start justify-between md:px-24 md:mt-10 mt-24 overflow-hidden ${ isMobile && 'mb-16' }`}>
          <Section className="relative flex flex-col mb-4">
            <div className="flex flex-wrap gap-2 mb-5">
              {
                post.tags.map(
                  tag => (
                    <Badge key = { tag } category = { tag } className="md:font-medium text-sm md:text-lg"/>
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
            <span className={`md:mt-10 mt-6 text-secondary-text ${isMobile ? 'text-md' : 'text-xl'}`}>Published at { post.publishedAt }</span>
            <div className="image-container-blog flex items-center justify-center w-full relative mt-10 md:mt-24">
              {
                isMobile ? 
                  <MobileDecoratedImage image = { post.image } alt = { post.title  } fromPost = { true } /> :
                  <DecoratedImage image = { post.image } alt = { post.title  } fromPost = { true }/>
              }
            </div> 
            <Markdown className={`${ isMobile ? 'post-content-mobile' : 'post-content' } md:mt-20 mt-10`}>{ post.content }</Markdown>
            {
              post.slide &&
              <ImageCarousel images={ post.slide } />
            }
            
            {
              isMobile ?
                <MobilePostFooter { ...post } /> :
                <PostFooter { ...post } />
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