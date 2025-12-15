import { Post } from "@/utils/models/Post";
import { headers } from "next/headers";
import MobileDetect from "mobile-detect";
import MobileLetsTalkSection from "@/app/(mobile)/_sections/mobile-lets-talk-section";
import PostSection from "../components/post-section";
import { indexPosts, searchClient } from "@/utils/config/algolia-config";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { redirect } from 'next/navigation';


interface Props {
  params: { id: string }
}

export async function generateMetadata( { params }: Props ): Promise<Metadata> {
    
  const post: Post | undefined = await findPost( params.id );
  return {
    title: `${ post ? post?.meta_title + ' | Applica Corp.' : '' }`,
    description: `${ post ? post?.meta_description : '' }`,
    keywords: [],
    alternates: {
      canonical: `https://applicacorp.com/news/${ post?.slug }`,
    }
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
    redirect('/news');
    return null;
  }

  const PostSection = dynamic(() => import('@/app/news/components/post-section'), { ssr: false });

  return (
      <PostSection post = { post } ></PostSection>
  )
}

export default page
