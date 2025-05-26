'use client'

import '../styles/animations.scss';
import { avigeaFont } from "@/assets/fonts";
import Carousel from "../_components/carousel";
import H2 from "@/components/h2";
import dynamic from "next/dynamic";
import { BenefitsCard } from "../_components/benefits-card";
import strategicPartner from "@/assets/strategic.webp";
import teamCulture from "@/assets/team-culture.webp";
import scalability from "@/assets/scalability.webp";
import ready from "@/assets/ready.webp";
import { useInView } from 'react-intersection-observer';
import Section from '@/components/section';


export default function BenefitsSection() {
    
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

    const BENEFITS = [
        {
            image: strategicPartner,
            imageAlt: "Strategic partner",
            title: "Strategic partner",
            description: "More than just execution, we act as a single ally throughout the entire process -consulting, development, and support-guiding technological decisions."
        },
        {
            image: teamCulture,
            imageAlt: "Team culture",
            title: "Team culture",
            description: "We value and care for our people. We cultivate a collaborative environment, fostering strong and lasting connections over time."
        },
        {
            image: scalability,
            imageAlt: "Scalability",
            title: "Scalability",
            description: "We can grow or adapt projects or teams according to your needs."
        },
        {
            image: ready,
            imageAlt: "Ready when you are",
            title: "Ready when you are",
            description: "Our nearshore teams align seamlessly with your time zone and communication style, making collaboration smooth and efficient from day one."
        },
    ];   

    return (
        <Section className="flex flex-col gap-12 md:gap-36">
            <div
                ref={ref}
                className={`flex flex-col mb-6 transition-all duration-1000 ease-out transform ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                id="benefits"
            >
                <div className="flex flex-col gap-12 text-center md:text-left">
                    <H2 className="md:max-w-[70%]">
                        Why{" "}
                        <span
                            className={`font-medium ${avigeaFont.className}`}
                        >
                            us
                        </span>?
                    </H2>

                    <div className="md:max-w-[80%] text-xl md:text-4xl leading-tight">
                        <span className="font-bold text-highlight">Seamless</span> collaboration,{" "} 
                        <span className="font-bold text-highlight">smarter</span> technology.
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 w-full mt-8">
                        {
                            BENEFITS.map(
                                ( b, index ) => (
                                    <BenefitsCard 
                                        key = { index }
                                        image = { b.image }
                                        imageAlt = { b.imageAlt }
                                        title = { b.title }
                                        description = { b.description }
                                    />
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </Section>
    );
}
