import Section from "@/components/section";
import { avigeaFont } from "@/assets/fonts";
import ProcessItem, { ContentPosition } from "../_components/process-item";
import ProcessItemBody from "../_components/process-item-body";
import icon72Hours from "@/assets/icons/72-hours.svg";
import Image from "next/image";
import H2 from "@/components/h2";
import H3 from "@/components/h3";
import H5 from "@/components/h5";

export default function ProcessSection() {
    return (
        <Section className="flex flex-col items-center w-full">
            <H2 className="mb-9 md:mb-12 text-center">
                Hiring{" "}
                <strong className={`font-normal ${avigeaFont.className}`}>
                    process
                </strong>
            </H2>

            <div className="flex flex-col md:w-4/5">
                <ProcessItem contentPosition={ContentPosition.Left} colored>
                    <ProcessItemBody title="Requirements analysis">
                        Let us know your requirements: role / skills / languages
                        & timezone.
                    </ProcessItemBody>
                </ProcessItem>

                <ProcessItem contentPosition={ContentPosition.Right} colored>
                    <ProcessItemBody title="Screening">
                        +4,000 pre-vetted profiles in the Talent Pool are
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
                    customIcon={<Image src={icon72Hours} alt="" width={250} />}
                    contentPosition={ContentPosition.Right}
                    className="gap-3 md:gap-10"
                >
                    {/* We had to make a custom body because the one that we already builded (ProcessItemBody)
                        doesn't meet our requirements for this situation. */}
                    <div>
                        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-full w-fit py-1 md:py-4 px-4 md:px-6 mb-4">
                            <H3 className="translate-y-[2px] font-normal text-center md:text-left">
                                Candidates deliver
                            </H3>
                        </div>

                        <p className="text-sm md:text-lg leading-tight">
                            Meet a tailor-made group of applicants who are in
                            line with the initial requirements.
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
                    <ProcessItemBody title="On boarding">
                        Support and guidance during induction into the role,
                        project and company culture.
                    </ProcessItemBody>
                </ProcessItem>

                <ProcessItem
                    contentPosition={ContentPosition.Left}
                    customLineHeight="3rem"
                    dashedEndOfLine={true}
                    dashedEndOfLineHeight="3rem"
                >
                    <ProcessItemBody title="EX & monitoring">
                        Performance and sactisfaction tracking of stakeholders.
                    </ProcessItemBody>
                </ProcessItem>
            </div>
        </Section>
    );
}
