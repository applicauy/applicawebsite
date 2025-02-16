import React from "react";
import { avigeaFont } from "@/assets/fonts";
import MobileBlogCarousel from "../_components/mobile-blog-carousel";
import MobilePostCard from "../_components/mobile-post-card";
import placeholderImg from "@/assets/placeholder-img-2.webp";
import MobileH2 from "../_components/mobile-h2";
import dynamic from "next/dynamic";

const cards = [
    {
        imageSrc: placeholderImg,
        imageAlt: "",
        description: `The role of Talent Pools: what are the benefits`,
    },
    {
        imageSrc: placeholderImg,
        imageAlt: "",
        description: `The role of Talent Pools: what are the benefits`,
    },
    {
        imageSrc: placeholderImg,
        imageAlt: "",
        description: `The role of Talent Pools: what are the benefits`,
    },
    {
        imageSrc: placeholderImg,
        imageAlt: "",
        description: `The role of Talent Pools: what are the benefits`,
    },
    {
        imageSrc: placeholderImg,
        imageAlt: "",
        description: `The role of Talent Pools: what are the benefits`,
    },
    {
        imageSrc: placeholderImg,
        imageAlt: "",
        description: `The role of Talent Pools: what are the benefits`,
    },
];

export default function MobileBlogSection() {
    const Section = dynamic(() => import('@/components/section'));
    return (
        <Section className="flex flex-col items-center">
            <MobileH2 className="mb-6 text-center">
                Check out our{" "}
                <span className={`font-medium ${avigeaFont.className}`}>
                    latest posts
                </span>
            </MobileH2>

            <MobileBlogCarousel>
                {cards.map((card, index) => {
                    return (
                        <div key={index}>
                            <MobilePostCard
                                imageSrc={card.imageSrc}
                                imageAlt={card.imageAlt}
                            >
                                {card.description}
                            </MobilePostCard>
                        </div>
                    );
                })}
            </MobileBlogCarousel>
        </Section>
    );
}
