import Section from "@/components/section";
import { avigeaFont } from "@/assets/fonts";
import ProcessItem, { ContentPosition } from "./process-item";
import ProcessItemBody from "./process-item-body";

export default function ProcessSection() {
    return (
        <Section classNameInner="w-full">
            <h2 className="mb-12 text-center">
                Hiring{" "}
                <strong className={`font-normal ${avigeaFont.className}`}>
                    process
                </strong>
            </h2>

            <div className="flex flex-col w-full">
                <ProcessItem iconSrc="" contentPosition={ContentPosition.Left}>
                    <ProcessItemBody title="Requirements analysis">
                        Let us know your requirements: role / skills / languages
                        & timezone.
                    </ProcessItemBody>
                </ProcessItem>

                <ProcessItem iconSrc="" contentPosition={ContentPosition.Right}>
                    <ProcessItemBody title="Screening">
                        +4,000 pre-vetted profiles in the Talent Pool are
                        reviewed by our team of recruiters.
                    </ProcessItemBody>
                </ProcessItem>

                <ProcessItem iconSrc="" contentPosition={ContentPosition.Left}>
                    <ProcessItemBody title="Profiles selection">
                        Best fitted to your requirements, ensuring their
                        technical quality.
                    </ProcessItemBody>
                </ProcessItem>

                <ProcessItem iconSrc="" contentPosition={ContentPosition.Right}>
                    <div>
                        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-full w-fit py-4 px-6 mb-4">
                            <h3 className="translate-y-[2px] font-normal">
                                Candidates deliver
                            </h3>
                        </div>

                        <h5>
                            Meet a tailor-made group of applicants who are in
                            line with the initial requirements.
                        </h5>
                    </div>
                </ProcessItem>

                <ProcessItem iconSrc="" contentPosition={ContentPosition.Left}>
                    <ProcessItemBody title="Interview & confirmation">
                        1:1 interviews with the shortlisted profiles for you to
                        decide on the best fit.
                    </ProcessItemBody>
                </ProcessItem>

                <ProcessItem iconSrc="" contentPosition={ContentPosition.Right}>
                    <ProcessItemBody title="On boarding">
                        Support and guidance during induction into the role,
                        project and company culture.
                    </ProcessItemBody>
                </ProcessItem>

                <ProcessItem
                    iconSrc=""
                    contentPosition={ContentPosition.Left}
                    customLineHeight="3rem"
                    dashedEndOfLine={true}
                    dashedEndOfLineHeight="2rem"
                >
                    <ProcessItemBody title="EX & monitoring">
                        Performance and sactisfaction tracking of stakeholders.
                    </ProcessItemBody>
                </ProcessItem>
            </div>
        </Section>
    );
}
