import { avigeaFont } from "@/assets/fonts";
import Section from "@/components/section";
import costEffectiveness from "@/assets/cost-efectiveness.png";
import timeSaving from "@/assets/timesaving.png";
import flexibility from "@/assets/flexibility.png";
import focused from "@/assets/focused.png";
import Benefit from "../_components/benefit";
import Carousel from "../_components/carousel";
import H2 from "@/components/h2";
import H3 from "@/components/h3";

// Benefits to be displayed in the section.
const BENEFITS = [
    {
        image: costEffectiveness,
        description: "Improved cost-effectiveness",
        alt: "",
    },
    {
        image: timeSaving,
        description: "Time saving",
        alt: "",
    },
    {
        image: focused,
        description: "Focused strategy",
        alt: "",
    },
    {
        image: flexibility,
        description: "Flexibility & fast replacement",
        alt: "",
    },
];

export default function BenefitsSection() {
    return (
        <Section className="flex flex-col gap-12 md:gap-36">
            <div
                className="flex flex-col md:flex-row gap-8 items-center"
                id="benefits"
            >
                <div className="flex flex-col md:w-2/4 gap-12 text-center md:text-left">
                    <H2 className="md:max-w-[80%]">
                        Let&apos;s find your next{" "}
                        <strong
                            className={`font-normal ${avigeaFont.className}`}
                        >
                            most valuable player.
                        </strong>
                    </H2>

                    <H3>
                        Long-term partnership requires flexible service. Since
                        2015, Applica Corp. has been dedicated to helping
                        companies scale their business and take it to the next
                        level.
                    </H3>
                </div>

                <div className="md:w-2/4 grid grid-cols-2 gap-4">
                    {BENEFITS.map((b, index) => (
                        <Benefit
                            key={index}
                            imageSrc={b.image}
                            imageAlt={b.alt}
                        >
                            {b.description}
                        </Benefit>
                    ))}
                </div>
            </div>

            <Carousel />
        </Section>
    );
}
