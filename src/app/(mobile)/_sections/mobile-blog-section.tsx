import React from "react";
import { avigeaFont } from "@/assets/fonts";
import Section from "@/components/section";
import MobileBlogCarousel from "../_components/mobile-blog-carousel";
import MobilePostCard from "../_components/mobile-post-card";
import placeholderImg from "@/assets/placeholder-img-2.png";
import MobileH2 from "../_components/mobile-h2";

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
    return (
        <Section className="flex flex-col items-center">
            <MobileH2 className="mb-6 text-center">
                Check out our{" "}
                <strong className={`font-normal ${avigeaFont.className}`}>
                    latest posts
                </strong>
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
