import Section from "@/components/section";
import { avigeaFont } from '@/assets/fonts';

export default function ProcessSection() {
    return (
      <Section>
        <h2>
          Hiring{" "}
          <strong className={`font-normal ${avigeaFont.className}`}>
            process
          </strong>
        </h2>
      </Section>
    );
}