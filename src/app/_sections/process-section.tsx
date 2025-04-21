'use client'

import '../styles/process.scss';
import { avigeaFont } from "@/assets/fonts";
import ProcessItem, { ContentPosition } from "../_components/process-item";
import ProcessItemBody from "../_components/process-item-body";
import icon72Hours from "@/assets/icons/72-hours.webp";
import Image from "next/image";
import H2 from "@/components/h2";
import H3 from "@/components/h3";
import { motion } from 'framer-motion';
import dynamic from "next/dynamic";

export default function ProcessSection() {
    
    const Section = dynamic(() => import('@/components/section'));

    return (
        <Section className="flex flex-col items-center w-full">
            
            <motion.div
                className="flex flex-col gap-8 items-center"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                id="hiring-process"
            >
                <H2 className="mb-9 md:mb-12 text-center">
                    Hiring{" "}
                    <span className={`font-medium ${avigeaFont.className}`}>
                        process
                    </span>
                </H2>

                <div className="flex flex-col w-full">
                    <ProcessItem contentPosition={ContentPosition.Left} colored>
                        <ProcessItemBody title="Requirements analysis">
                            Let us know your requirements: role / skills / languages
                            & timezone.
                        </ProcessItemBody>
                    </ProcessItem>

                    <ProcessItem contentPosition={ContentPosition.Right} colored>
                        <ProcessItemBody title="Screening">
                            +15,000 pre-vetted profiles in our talent pool are
                            reviewed by our team of recruiters.
                        </ProcessItemBody>
                    </ProcessItem>

                    <ProcessItem
                        contentPosition={ContentPosition.Left}
                        customLineHeight="5rem"
                        className="min-h-[5rem]"
                        colored
                    >
                        <ProcessItemBody title="Profiles selection">
                            Best fitted to your requirements, ensuring their
                            technical quality.
                        </ProcessItemBody>
                    </ProcessItem>

                    <ProcessItem
                        customIcon={<Image src={icon72Hours} alt="72 hours Icon" width={250} height={250} loading="lazy"/>}
                        contentPosition={ContentPosition.Right}
                        className="gap-3 md:gap-10"
                    >
                        {/* We had to make a custom body because the one that we already builded (ProcessItemBody)
                            doesn't meet our requirements for this situation. */}
                        <div>
                            <div className="rounded-full py-1 md:py-4 px-4 md:px-6 mb-4 candidates-background">
                                <H3 className="translate-y-[2px] text-center font-medium">
                                    Candidates deliver
                                </H3>
                            </div>

                            <p className="text-sm md:text-lg leading-tight">
                                Meet a tailor-made group of applicants who are in
                                line your initial requirements.
                            </p>
                        </div>
                    </ProcessItem>

                    <ProcessItem contentPosition={ContentPosition.Left}>
                        <ProcessItemBody title="Interview & confirmation">
                            1:1 interviews with the shortlisted profiles for you to
                            decide on the best fit.
                        </ProcessItemBody>
                    </ProcessItem>

                    <ProcessItem contentPosition={ContentPosition.Right}>
                        <ProcessItemBody title="Onboarding">
                            Support and guidance during induction into the role,
                            project and company culture.
                        </ProcessItemBody>
                    </ProcessItem>

                    <ProcessItem
                        contentPosition={ContentPosition.Left}
                    >
                        <ProcessItemBody title="EX & monitoring">
                        Tracking of stakeholders performance and satisfaction.
                        </ProcessItemBody>
                    </ProcessItem>
                </div>
            </motion.div>
        </Section>
    );
}
