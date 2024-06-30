import Section from "@/components/section";
import { avigeaFont } from "@/assets/fonts";
import ProcessItem, { ContentPosition } from "@/app/_components/process-item";
import MobileProcessItemBody from "../_components/mobile-proccess-item-body";
import icon72Hours from "@/assets/icons/72-hours.svg";
import Image from "next/image";
import MobileH2 from "../_components/mobile-h2";

export default function MobileProcessSection() {
    return (
        <Section className={`flex flex-col items-center w-full`}>
            <MobileH2 className="mb-9 md:mb-12 text-center">
                Hiring{" "}
                <strong className={`font-normal ${avigeaFont.className}`}>
                    process
                </strong>
            </MobileH2>

            <div className="flex flex-col md:w-4/5">
                <ProcessItem contentPosition={ContentPosition.Left} colored>
                    <MobileProcessItemBody title="Requirements analysis">
                        Let us know your requirements: role / skills / languages
                        & timezone.
                    </MobileProcessItemBody>
                </ProcessItem>

                <ProcessItem contentPosition={ContentPosition.Right} colored>
                    <MobileProcessItemBody title="Screening">
                        +4,000 pre-vetted profiles in the Talent Pool are
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

                <ProcessItem
                    customIcon={<Image src={icon72Hours} alt="" width={250} />}
                    contentPosition={ContentPosition.Right}
                    className="gap-3 md:gap-10"
                >
                    {/* We had to make a custom body because the one that we already builded (MobileProcessItemBody)
                        doesn't meet our requirements for this situation. */}
                    <div>
                        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-full w-fit py-1 md:py-2 px-2 md:px-4 mb-4">
                            <h3
                                className={`mb-0 px-0 leading-4 text-sm text-center ${avigeaFont.className}`}
                            >
                                Candidates deliver
                            </h3>
                        </div>

                        <p className="text-xs md:text-sm leading-tight">
                            Meet a tailor-made group of applicants who are in
                            line with the initial requirements.
                        </p>
                    </div>
                </ProcessItem>

                <ProcessItem contentPosition={ContentPosition.Left}>
                    <MobileProcessItemBody title="Interview & confirmation">
                        1:1 interviews with the shortlisted profiles for you to
                        decide on the best fit.
                    </MobileProcessItemBody>
                </ProcessItem>

                <ProcessItem contentPosition={ContentPosition.Right}>
                    <MobileProcessItemBody title="On boarding">
                        Support and guidance during induction into the role,
                        project and company culture.
                    </MobileProcessItemBody>
                </ProcessItem>

                <ProcessItem
                    contentPosition={ContentPosition.Left}
                    customLineHeight="3rem"
                    dashedEndOfLine={true}
                    dashedEndOfLineHeight="3rem"
                >
                    <MobileProcessItemBody title="EX & monitoring">
                        Performance and sactisfaction tracking of stakeholders.
                    </MobileProcessItemBody>
                </ProcessItem>
            </div>
        </Section>
    );
}
