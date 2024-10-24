import { apexFont } from "@/assets/fonts"
import H2 from "@/components/h2"
import Markdown from 'markdown-to-jsx';

import boxImg from '@/assets/shapes/box-benefits.svg';

import rightLineImg from '@/assets/shapes/right-line.svg';
import Image from "next/image";
import Badge from "@/app/_components/badge";
import LatestPosts from "@/app/_sections/latest-posts";
import Section from "@/components/section";
import personImg from '@/assets/person.jpg';
import ShareButtons from "@/app/_components/share-buttons";
import { Post } from "@/utils/models/Post";
import { posts } from "@/utils/mock/posts";
import { headers } from "next/headers";
import MobileDetect from "mobile-detect";
import MobileH1 from "@/app/(mobile)/_components/mobile-h1";
import DecoratedImage from "@/app/_components/decorated-image";
import MobileDecoratedImage from "@/app/(mobile)/_components/mobile-decorated-image";
import PostFooter from "@/app/_components/post-footer";
import MobilePostFooter from "@/app/(mobile)/_components/mobile-post-footer";
import MobileLatestPostsSection from "@/app/(mobile)/_sections/mobile-latest-posts-section";
import MobileLetsTalkSection from "@/app/(mobile)/_sections/mobile-lets-talk-section";

interface Props {
  params: { id: string }
}

const page = ( { params } : Props ) => {

  const post: Post | undefined = posts.find( post => post.objectID === Number( params.id ) );

  if (!post) {
    throw new Error("Post not found");
  }

  const userAgent = headers().get('user-agent') || '';
  const md = new MobileDetect(userAgent);
  const isMobile = !!md.mobile();  

  return (
      <>
      
        <div className={`${apexFont.className} flex min-h-screen flex-col items-start justify-between md:px-24 md:mt-10 mt-24 mb-16 overflow-hidden`}>
          <Section className="relative flex flex-col mb-4">
            <div className="flex flex-wrap gap-2 mb-5">
              {
                post.tags.map(
                  tag => (
                    <Badge key = { tag } category = { tag } className="md:font-medium text-sm"/>
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
        <MobileLetsTalkSection></MobileLetsTalkSection>
      </>
  )
}

export default page
