'use client'

import { avigeaFont } from "@/assets/fonts";
import MobileH1 from "../_components/mobile-h1";
import strategicPartner from "@/assets/strategic.webp";
import teamCulture from "@/assets/team-culture.webp";
import scalability from "@/assets/scalability.webp";
import ready from "@/assets/ready.webp";
import { BenefitsCard } from "@/app/_components/benefits-card";
import Section from "@/components/section";
import { useInView } from "react-intersection-observer";

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

export default function MobileBenefitsSection() {

    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

    return (
        <Section className="flex flex-col gap-12 md:gap-36  overflow-hidden">
            <div
                ref={ref}
                className={`md:max-w-[66%] relative transition-all duration-1000 ease-out transform ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                }`}
            >

                <div className="flex flex-col md:flex-row gap-8 items-center" id="benefits">
                    <div className="flex flex-col md:w-2/4 gap-6 text-center">
                        <div className="w-full flex justify-center">
                            <MobileH1>
                                Why{" "}
                                <span
                                    className={`font-medium ${avigeaFont.className}`}
                                >
                                    us
                                </span>?
                            </MobileH1>
                        </div>

                        <div className="w-full flex justify-center">
                            <p className="text-2xl md:text-3smt">
                                <span className="font-bold text-highlight">Seamless</span> collaboration,<br />
                                <span className="font-bold text-highlight">smarter</span> technology.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-12">

                        {BENEFITS.map((b, index) => (
                            <div className="px-2" key={index}>
                                <BenefitsCard
                                    image={b.image}
                                    imageAlt={b.imageAlt}
                                    title={b.title}
                                    description={b.description}
                                >                                
                                </BenefitsCard>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
