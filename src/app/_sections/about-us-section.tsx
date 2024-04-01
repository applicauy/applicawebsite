import { avigeaFont } from "@/assets/fonts";
import Section from "@/components/section";
import Button from "../../components/button";
import GradientBall from "../_components/gradient-ball";
import H2 from "@/components/h2";
import H3 from "@/components/h3";

/**
 * Renders the About Us section.
 *
 * @returns The JSX element representing the About Us section.
 */
export default function AboutUsSection() {
    return (
        <Section className="flex">
            <div className="flex flex-col w-[60%]">
                <H2 className="mb-12">
                    Talent on demand{" "}
                    <strong
                        className={`font-normal ${avigeaFont.className} block`}
                    >
                        ready to be hired.
                    </strong>
                </H2>

                <H3>
                    Just tell us your requirements and we will find it wherever
                    it is.
                </H3>

                <div className="flex flex-wrap my-12 gap-6">
                    <GradientBall title="+5.000" subtitle="IT Talents" />
                    <GradientBall title="80%" subtitle="Senior level" />
                    <GradientBall title="<13%" subtitle="Turnover rate" />
                    <GradientBall title="+60" subtitle="Technologies" />
                </div>

                <Button>Schedule a call</Button>
            </div>

            <div></div>
        </Section>
    );
}
