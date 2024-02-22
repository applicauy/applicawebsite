import { avigeaFont } from "@/assets/fonts";
import Section from "@/components/section";
import PostCard from "../_components/post-card";
import placeholderImg from "@/assets/placeholder-img-2.png";

export default function BlogSection() {
    return (
        <Section className="flex flex-col">
            <h2 className="mb-12">
                Check out our{" "}
                <strong className={`font-normal ${avigeaFont.className} block`}>
                    latest posts
                </strong>
            </h2>

            <div className="flex justify-between">
                <PostCard imageSrc={placeholderImg} imageAlt="">
                    The role of Talent Pools: what are the benefits
                </PostCard>

                <PostCard imageSrc={placeholderImg} imageAlt="">
                    The role of Talent Pools: what are the benefits
                </PostCard>

                <PostCard imageSrc={placeholderImg} imageAlt="">
                    The role of Talent Pools: what are the benefits
                </PostCard>
            </div>
        </Section>
    );
}
