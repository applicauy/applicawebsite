import { avigeaFont } from "@/assets/fonts";
import Section from "@/components/section";

export default function BenefitsSection() {
  return (
    <Section>
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

      <div className="flex w-2/4">
        
      </div>
    </Section>
  );
}
