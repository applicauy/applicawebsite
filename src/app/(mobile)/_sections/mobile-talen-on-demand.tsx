"use client"
import Image from "next/image";
import { avigeaFont } from "@/assets/fonts";
import Section from "@/components/section";
import MobileButton from "../_components/mobile-button";
import MobileGradientBall from "../_components/mobile-gradient-ball";
import MobileH2 from "../_components/mobile-h2";
import MobileH3 from "../_components/mobile-h3";
import { onStartNowClick } from "@/lib/helpers";
import mapImg from "@/assets/mapa.png";

/**
 * Renders the About Us section.
 *
 * @returns The JSX element representing the About Us section.
 */
export default function MobileTalenOnDemand() {
    return (
        <Section className="flex flex-col-reverse gap-10">
            <div className="flex flex-col items-center md:items-start md:w-[60%]">
                <MobileH2 className="mb-6 md:mb-12 w-4/5 md:w-full text-center md:text-left">
                    Talent on demand{" "}
                    <strong
                        className={`font-normal ${avigeaFont.className} block`}
                    >
                        ready to be hired.
                    </strong>
                </MobileH2>

                <MobileH3 className="w-4/5 md:w-full text-center md:text-left">
                    Just tell us your requirements and we will find it wherever
                    it is.
                </MobileH3>

                <div className="flex flex-wrap mt-8 md:mt-12 mb-12 md:mb-16 gap-2 md:gap-6 justify-center">
                    <MobileGradientBall title="+5.000" subtitle="IT Talents" />
                    <MobileGradientBall title="80%" subtitle="Senior level" />
                    <MobileGradientBall title="<13%" subtitle="Turnover rate" />
                    <MobileGradientBall title="+60" subtitle="Technologies" />
                </div>

                <MobileButton onClick={onStartNowClick}>
                    Schedule a call
                </MobileButton>
            </div>

            <div>
                <Image
                    src={mapImg}
                    width={400}
                    alt="Applica offices across the world"
                />
            </div>
        </Section>
    );
}
