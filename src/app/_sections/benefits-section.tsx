import { avigeaFont } from "@/assets/fonts";
import Benefit from "../_components/benefit";
import Carousel from "../_components/carousel";
import H2 from "@/components/h2";
import { benefits } from "@/utils/models/Benefits";
import { motion, useInView } from 'framer-motion';
import dynamic from "next/dynamic";
import { BenefitsCard } from "../_components/benefits-card";
import strategicPartner from "@/assets/strategic.webp";
import teamCulture from "@/assets/team-culture.webp";
import scalability from "@/assets/scalability.webp";
import ready from "@/assets/ready.webp";


export default function BenefitsSection() {
    
    const Section = dynamic(() => import('@/components/section'));

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
            <motion.div
                className="flex flex-col mb-6"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
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
            </motion.div>
            <Carousel />
        </Section>
    );
}
