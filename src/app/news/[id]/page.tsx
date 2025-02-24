import { Post } from "@/utils/models/Post";
import { headers } from "next/headers";
import MobileDetect from "mobile-detect";
import MobileLetsTalkSection from "@/app/(mobile)/_sections/mobile-lets-talk-section";
import PostSection from "../components/post-section";
import { indexPosts, searchClient } from "@/utils/config/algolia-config";
import { Metadata } from "next";
import dynamic from "next/dynamic";

interface Props {
  params: { id: string }
}

export async function generateMetadata( { params }: Props ): Promise<Metadata> {
    
  const post: Post | undefined = await findPost( params.id );
  return {
    title: `${ post ? post?.meta_title + ' | Applica Corp.' : '' }`,
    description: `${ post ? post?.meta_description : '' }`,
    keywords: []
  }
}

const findPost:any = async( id: string ) => {
  const { hits } = await indexPosts.search<Post>( id,
    {
      filters: `slug:"${ id }"`
    }
  );
  
  return hits[0];
}

const page = async ( { params } : Props ) => {
  
  const post: Post | undefined = await findPost( params.id ); 

  if (!post) {
    throw new Error("Post not found");
  }

  const userAgent = headers().get('user-agent') || '';
  const md = new MobileDetect(userAgent);
  const isMobile = !!md.mobile();  

  const PostSection = dynamic(() => import('@/app/news/components/post-section'), { ssr: false });
  const MobileLetsTalkSection = dynamic(() => import('@/(mobile)/_sections/mobile-lets-talk-section'), { ssr: false });

  return (
      <>
        <PostSection post = { post } isMobile = { isMobile }></PostSection>
        {
          isMobile && <MobileLetsTalkSection />
        }
        
      </>
  )
}

export default page
