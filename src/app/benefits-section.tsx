import { avigeaFont } from "@/assets/fonts";
import Section from "@/components/section";
import Image from "next/image";
import placeholderImg from "@/assets/placeholder-img-2.png";
import Benefit from "./benefit";

export default function BenefitsSection() {
  return (
    <Section classNameInner="flex gap-8 items-center">
      <div className="flex flex-col w-2/4 gap-12">
        <h2 className="md:max-w-[80%]">
          Let&apos;s find your next{" "}
          <strong className={`font-normal ${avigeaFont.className}`}>
            most valuable player.
          </strong>
        </h2>

        <h3>
          Long-term partnership requires flexible service. Since 2015, Applica
          Corp&apos;s has been dedicated to helping companies scale their
          business and take it to the next level.
        </h3>
      </div>

      <div className="w-2/4 grid grid-cols-2">
        <Benefit imageSrc={placeholderImg}>Improved cost-effectiveness</Benefit>

        <Benefit imageSrc={placeholderImg}>Time saving</Benefit>

        <Benefit imageSrc={placeholderImg}>Focused strategy</Benefit>

        <Benefit imageSrc={placeholderImg}>
          Flexibility & fast replacement
        </Benefit>
      </div>
    </Section>
  );
}