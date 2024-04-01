import { avigeaFont } from "@/assets/fonts";
import Section from "@/components/section";
import placeholderImg from "@/assets/placeholder-img-2.png";
import Benefit from "../_components/benefit";
import Carousel from "../_components/carousel";

// Benefits to be displayed in the section.
const BENEFITS = [
    {
        image: placeholderImg,
        description: "Improved cost-effectiveness",
        alt: "",
    },
    {
        image: placeholderImg,
        description: "Time saving",
        alt: "",
    },
    {
        image: placeholderImg,
        description: "Focused strategy",
        alt: "",
    },
    {
        image: placeholderImg,
        description: "Flexibility & fast replacement",
        alt: "",
    },
];

export default function BenefitsSection() {
    return (
        <Section className="flex flex-col gap-36">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex flex-col md:w-2/4 gap-12">
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
                        2015, Applica Corp&apos;s has been dedicated to helping
                        companies scale their business and take it to the next
                        level.
                    </H3>
                </div>

                <div className="md:w-2/4 grid grid-cols-2">
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
