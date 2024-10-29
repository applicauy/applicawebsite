import { Post } from "@/utils/models/Post";
import { headers } from "next/headers";
import MobileDetect from "mobile-detect";
import MobileLetsTalkSection from "@/app/(mobile)/_sections/mobile-lets-talk-section";
import PostSection from "../components/post-section";
import { posts } from "@/utils/mock/posts";

interface Props {
  params: { id: string }
}

const page = ( { params } : Props ) => {

  const post: Post | undefined = posts.find( (post: Post) => post.urlTitle === params.id );

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
