import Section from "@/components/section";
import Carousel from "../_components/carousel";
import { useInView } from "react-intersection-observer";

export default function TechnologiesSection() {

    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

    return (
        <Section>
            <div
                ref={ref}
                className={`transition-all duration-1000 ease-out transform ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
            >
                <Carousel />
            </div>
        </Section>
    );
}