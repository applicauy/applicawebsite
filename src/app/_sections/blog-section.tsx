import { avigeaFont } from "@/assets/fonts";
import placeholderImg from "@/assets/placeholder-img-2.webp";
import H1 from "@/components/h1";
import H2 from "@/components/h2";
import dynamic from "next/dynamic";

export default function BlogSection() {
    
    const Section = dynamic(() => import('@/components/section'));
    const PostCard = dynamic(() => import('@/app/_components/post-card'));

    return (
        <Section className="flex flex-col" >
          <div id="blog-section"/>
            <H2 className="mb-12">
                Check out our{" "}
                <span className={`font-medium ${avigeaFont.className} block`}>
                    latest posts
                </span>
            </H2>

            <div className="flex md:justify-between flex-wrap md:flex-nowrap">
                <PostCard imageSrc={placeholderImg} imageAlt="Header Image">
                    The role of Talent Pools: what are the benefits
                </PostCard>

                <PostCard imageSrc={placeholderImg} imageAlt="Header Image">
                    The role of Talent Pools: what are the benefits
                </PostCard>

                <PostCard imageSrc={placeholderImg} imageAlt="Header Image">
                    The role of Talent Pools: what are the benefits
                </PostCard>
            </div>
        </Section>
    );
}
