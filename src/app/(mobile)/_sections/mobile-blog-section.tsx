import { avigeaFont } from "@/assets/fonts";
import Section from "@/components/section";
import MobilePostCard from "../_components/mobile-post-card";
import placeholderImg from "@/assets/placeholder-img-2.png";
import MobileH2 from "../_components/mobile-h2";

export default function MobileBlogSection() {
    return (
        <Section className="flex flex-col">
            <MobileH2 className="mb-12">
                Check out our{" "}
                <strong className={`font-normal ${avigeaFont.className} block`}>
                    latest posts
                </strong>
            </MobileH2>

            <div className="flex md:justify-between flex-wrap md:flex-nowrap">
                <MobilePostCard imageSrc={placeholderImg} imageAlt="">
                    The role of Talent Pools: what are the benefits
                </MobilePostCard>

                <MobilePostCard imageSrc={placeholderImg} imageAlt="">
                    The role of Talent Pools: what are the benefits
                </MobilePostCard>

                <MobilePostCard imageSrc={placeholderImg} imageAlt="">
                    The role of Talent Pools: what are the benefits
                </MobilePostCard>
            </div>
        </Section>
    );
}
