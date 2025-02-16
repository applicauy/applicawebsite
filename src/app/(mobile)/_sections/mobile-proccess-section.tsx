'use client'

import { avigeaFont } from "@/assets/fonts";
import ProcessItem, { ContentPosition } from "@/app/_components/process-item";
import MobileProcessItemBody from "../_components/mobile-proccess-item-body";
import icon72Hours from "@/assets/icons/72-hours.webp";
import Image from "next/image";
import MobileH2 from "../_components/mobile-h2";
import MobileH1 from "../_components/mobile-h1";
import MobileProcessItem from "../_components/mobile-process-item";
import dynamic from "next/dynamic";

export default function MobileProcessSection() {
    const Section = dynamic(() => import('@/components/section'));
    return (
        <Section className={`flex flex-col items-center w-full`}>
            <div id="hiring-process"/>
            <MobileH1 className="mb-16 md:mb-12 text-center">
                Hiring{" "}
                <span className={`font-medium ${avigeaFont.className}`}>
                    process
                </span>
            </MobileH1>

            <div className="flex flex-col md:w-4/5">
                <ProcessItem contentPosition={ContentPosition.Left} colored>
                    <MobileProcessItemBody title="Requirements analysis">
                        Let us know your requirements: role / skills / languages
                        & timezone.
                    </MobileProcessItemBody>
                </ProcessItem>

                <ProcessItem contentPosition={ContentPosition.Right} colored>
                    <MobileProcessItemBody title="Screening">
                        +15,000 pre-vetted profiles in our talent pool are
                        reviewed by our team of recruiters.
                    </MobileProcessItemBody>
                </ProcessItem>

                <ProcessItem
                    contentPosition={ContentPosition.Left}
                    customLineHeight="5rem"
                    className="min-h-[5rem]"
                    colored
                >
                    <MobileProcessItemBody title="Profiles selection">
                        Best fitted to your requirements, ensuring their
                        technical quality.
                    </MobileProcessItemBody>
                </ProcessItem>

                <MobileProcessItem
                    customIcon={<Image src={icon72Hours} alt="72 hours Icon" width={100} loading="lazy"/>}
                    contentPosition={ContentPosition.Right}
                    className="gap-3 md:gap-10"
                >
                    {/* We had to make a custom body because the one that we already builded (MobileProcessItemBody)
                        doesn't meet our requirements for this situation. */}
                    <div>
                        <div className="rounded-full py-4 md:py-4 px-4 md:px-6 mb-4 candidates-background">
                            <MobileH2 className={`translate-y-[2px] text-center font-medium ${avigeaFont.className}`}>
                                Candidates deliver
                            </MobileH2>
                        </div>

                        <p className="text-lg leading-tight text-center mb-5">
                            Meet a tailor-made group of applicants who are in
                            line your initial requirements.
                        </p>
                    </div>
                </MobileProcessItem>

                <ProcessItem contentPosition={ContentPosition.Left}>
                    <MobileProcessItemBody title="Interview & confirmation">
                        1:1 interviews with the shortlisted profiles for you to
                        decide on the best fit.
                    </MobileProcessItemBody>
                </ProcessItem>

                <ProcessItem contentPosition={ContentPosition.Right}>
                    <MobileProcessItemBody title="Onboarding">
                        Support and guidance during induction into the role,
                        project and company culture.
                    </MobileProcessItemBody>
                </ProcessItem>

                <ProcessItem
                    contentPosition={ContentPosition.Left}
                >
                    <MobileProcessItemBody title="EX & monitoring">
                        Tracking of stakeholders performance and satisfaction.
                    </MobileProcessItemBody>
                </ProcessItem>
            </div>
        </Section>
    );
}
