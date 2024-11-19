import { Post } from "@/utils/models/Post";
import { headers } from "next/headers";
import MobileDetect from "mobile-detect";
import MobileLetsTalkSection from "@/app/(mobile)/_sections/mobile-lets-talk-section";
import PostSection from "../components/post-section";
import { indexPosts, searchClient } from "@/utils/config/algolia-config";

interface Props {
  params: { id: string }
}

const page = async ( { params } : Props ) => {
  
  const { hits } = await indexPosts.search<Post>( params.id,
    {
      filters: `slug:"${ params.id }"`
    }
  );
  
  const post: Post | undefined = hits[0];

  if (!post) {
    throw new Error("Post not found");
  }

  const userAgent = headers().get('user-agent') || '';
  const md = new MobileDetect(userAgent);
  const isMobile = !!md.mobile();  

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
