"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings as SliderSettings } from "react-slick";
import { StaticImageData } from "next/image";
import TechnologySlide from "./technology-slide";
import angularLogo from "@/assets/technologies/angular.png";
import awsLogo from "@/assets/technologies/aws.png";
import cplusplusLogo from "@/assets/technologies/c++.png";
import csharpLogo from "@/assets/technologies/csharp.png";
import flutterLogo from "@/assets/technologies/flutter.png";
import html5Logo from "@/assets/technologies/html5.png";
import informaticaLogo from "@/assets/technologies/informatica.png";
import javaLogo from "@/assets/technologies/java.png";
import javascriptLogo from "@/assets/technologies/javascript.png";
import mysqlLogo from "@/assets/technologies/mysql.png";
import phpLogo from "@/assets/technologies/php.png";
import pythonLogo from "@/assets/technologies/phyton.png";
import powerautomateLogo from "@/assets/technologies/powerautomate.png";
import reactLogo from "@/assets/technologies/react.png";
import rubionrailsLogo from "@/assets/technologies/rubionrails.png";
import swiftLogo from "@/assets/technologies/swift.png";
import vuejsLogo from "@/assets/technologies/vuejs.png";

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

const CAROUSEL_SETTINGS: SliderSettings = {
  infinite: true,
  speed: 800,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  responsive: [],
};

export default function Carousel() {
  return (
      <Slider {...CAROUSEL_SETTINGS}>
        {TECHNOLOGIES.map((t, index) => (
          <TechnologySlide key={index} src={t.src} alt={t.alt} />
        ))}
      </Slider>
  );
}
