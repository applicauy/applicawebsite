"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings as SliderSettings } from "react-slick";
import { StaticImageData } from "next/image";
import TechnologySlide from "./technology-slide";
import angularLogo from "@/assets/technologies/angular.webp";
import awsLogo from "@/assets/technologies/aws.webp";
import cplusplusLogo from "@/assets/technologies/c++.webp";
import csharpLogo from "@/assets/technologies/csharp.webp";
import flutterLogo from "@/assets/technologies/flutter.webp";
import html5Logo from "@/assets/technologies/html5.webp";
import informaticaLogo from "@/assets/technologies/informatica.webp";
import javaLogo from "@/assets/technologies/java.webp";
import javascriptLogo from "@/assets/technologies/javascript.webp";
import mysqlLogo from "@/assets/technologies/mysql.webp";
import phpLogo from "@/assets/technologies/php.webp";
import pythonLogo from "@/assets/technologies/phyton.webp";
import powerautomateLogo from "@/assets/technologies/powerautomate.webp";
import reactLogo from "@/assets/technologies/react.webp";
import rubionrailsLogo from "@/assets/technologies/rubionrails.webp";
import swiftLogo from "@/assets/technologies/swift.webp";
import vuejsLogo from "@/assets/technologies/vuejs.webp";

/**
 * List of technology slides to be displayed in the carousel.
 */
const TECHNOLOGIES: Array<{ src: StaticImageData; alt: string }> = [
    {
        src: angularLogo,
        alt: "Angular",
    },
    {
        src: awsLogo,
        alt: "AWS",
    },
    {
        src: cplusplusLogo,
        alt: "C++",
    },
    {
        src: csharpLogo,
        alt: "C#",
    },
    {
        src: flutterLogo,
        alt: "Flutter",
    },
    {
        src: html5Logo,
        alt: "HTML5",
    },
    {
        src: informaticaLogo,
        alt: "Informatica",
    },
    {
        src: javaLogo,
        alt: "Java",
    },
    {
        src: javascriptLogo,
        alt: "JavaScript",
    },
    {
        src: mysqlLogo,
        alt: "MySQL",
    },
    {
        src: phpLogo,
        alt: "PHP",
    },
    {
        src: pythonLogo,
        alt: "Python",
    },
    {
        src: powerautomateLogo,
        alt: "Power Automate",
    },
    {
        src: reactLogo,
        alt: "React",
    },
    {
        src: rubionrailsLogo,
        alt: "Ruby on Rails",
    },
    {
        src: swiftLogo,
        alt: "Swift",
    },
    {
        src: vuejsLogo,
        alt: "VueJS",
    },
];

/**
 * Settings for the carousel component.
 */
const CAROUSEL_SETTINGS: SliderSettings = {
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 5,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 5,
            },
        },
    ],
};

/**
 * Renders a carousel component that displays a slider of technology slides.
 */
export default function Carousel() {
    return (
        <Slider {...CAROUSEL_SETTINGS}>
            {TECHNOLOGIES.map((t, index) => (
                <TechnologySlide key={index} src={t.src} alt={t.alt} />
            ))}
        </Slider>
    );
}
