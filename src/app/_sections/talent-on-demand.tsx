"use client"
import { avigeaFont } from "@/assets/fonts";
import Section from "@/components/section";
import Button from "@/components/button";
import GradientBall from "../_components/gradient-ball";
import H2 from "@/components/h2";
import H3 from "@/components/h3";

/**
 * Renders the Talent on demand.
 *
 * @returns The JSX element representing the About Us section.
 */
export default function TalentOnDemand() {
    const onStartNowClick = () => {
        window.location.href = "/contact";
    };
    
    return (
        <Section className="flex">
            <div className="flex flex-col items-center md:items-start md:w-[60%]">
                <H2 className="mb-6 md:mb-12 w-4/5 md:w-full text-center md:text-left">
                    Talent on demand{" "}
                    <strong
                        className={`font-normal ${avigeaFont.className} block`}
                    >
                        ready to be hired.
                    </strong>
                </H2>

                <H3 className="w-4/5 md:w-full text-center md:text-left">
                    Just tell us your requirements and we will find it wherever
                    it is.
                </H3>

                <div className="flex flex-wrap mt-8 md:mt-12 mb-12 md:mb-16 gap-6 justify-center">
                    <GradientBall title="+5.000" subtitle="IT Talents" />
                    <GradientBall title="80%" subtitle="Senior level" />
                    <GradientBall title="<13%" subtitle="Turnover rate" />
                    <GradientBall title="+60" subtitle="Technologies" />
                </div>

                <Button onClick={onStartNowClick}>Schedule a call</Button>
            </div>

            <div>{/* TODO Interactive map */}</div>
        </Section>
    );
}
