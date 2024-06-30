import React from "react";
import { avigeaFont } from "@/assets/fonts";
import Section from "@/components/section";
import MobileBlogCarousel from "../_components/mobile-blog-carousel";
import MobilePostCard from "../_components/mobile-post-card";
import placeholderImg from "@/assets/placeholder-img-2.png";
import MobileH2 from "../_components/mobile-h2";

/**
 * Array of post card objects to be displayed in the carousel.
 * Each card includes an image source, alt text, and description.
 */
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

/**
 * MobileBlogSection - A section component that showcases the latest blog posts
 * using a carousel format. The section includes a title and multiple post cards.
 *
 * @returns {JSX.Element} The JSX element representing the Blog section for mobile.
 */
export default function MobileBlogSection(): JSX.Element {
    return (
        <Section className="flex flex-col items-center">
            {/* Section header */}
            <MobileH2 className="mb-6 text-center">
                Check out our{" "}
                <strong className={`font-normal ${avigeaFont.className}`}>
                    latest posts
                </strong>
            </MobileH2>

            {/* Blog carousel */}
            <MobileBlogCarousel>
                {cards.map((card, index) => (
                    <div key={index}>
                        <MobilePostCard
                            imageSrc={card.imageSrc}
                            imageAlt={card.imageAlt}
                        >
                            {card.description}
                        </MobilePostCard>
                    </div>
                ))}
            </MobileBlogCarousel>
        </Section>
    );
}
