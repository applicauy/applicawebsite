"use client";

import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the props interface for the MobileBlogCarousel component
interface MobileBlogCarouselProps {
    children: React.ReactNode;
}

// Custom component for the next arrow in the carousel
const SampleNextArrow: React.FC<{
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
};

// Custom component for the previous arrow in the carousel
const SamplePrevArrow: React.FC<{
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
};

/**
 * Component responsible for displaying a mobile blog carousel.
 * Uses the react-slick carousel library for a slick mobile carousel experience.
 * @param {MobileBlogCarouselProps} children Children elements to be displayed in the carousel
 * @returns {JSX.Element} Returns a React element of the MobileBlogCarousel component
 */
const MobileBlogCarousel: React.FC<MobileBlogCarouselProps> = ({
    children,
}: MobileBlogCarouselProps): JSX.Element => {
    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div style={{ width: "96%" }}>
            <Slider {...settings}>{children}</Slider>
        </div>
    );
};

export default MobileBlogCarousel;
