import FadeIn from "@/app/_components/effects/fade-in";
import '../../../../styles/healthcare.scss';
import '../../../../styles/effects.scss';
import { rubikFont } from '@/assets/fonts';
import curantis from '@/assets/curantis.webp';
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import MobileHealthcareCardValue from "../../../_components/landings/mobile-card-value";
import Section from "@/components/landings/section";
import { LandingsButton } from "@/components/landings/button";
import { LandingsH2 } from "@/components/landings/h2";
import { LandingsH3 } from "@/components/landings/h3";

const donwload = () => {
    const url = '/pdf/Applica_Case_Curantis.pdf';
    const a = document.createElement('a');

    a.href = url;
    a.target = '_blank';
    a.download = 'Applica_Case_Curantis.pdf';
    a.click();
}

const MobileHealthcareCaseStudySection = () => {
  return (
    <Section fullWidth className={`${ rubikFont.className } relative left-0 right-0 py-10 px-4 w-screen section-gradient`} >
        <div className='flex flex-row gap-6 justify-start items-center text-white '>
          <FadeIn>
            <div className="flex flex-col gap-6 w-full justify-center items-center">
              <LandingsH2
                mobile
                title
                className="text-center"
              >
                Case study:<br/><b>Curantis</b>
              </LandingsH2>
              <LandingsH3
                mobile
                small
                className="text-center max-w-[70%]"
              >
                Redesigning the clinical experience in palliative care
              </LandingsH3>
              <div className="flex flex-col items-center justify-center gap-8 mt-8">
                  <Image
                      src={curantis}
                      alt="Curantis"
                      width={200}
                      height={200}
                      loading="lazy"
                      className="animate-float"
                  />
                <div className="flex flex-row gap-2">
                    <MobileHealthcareCardValue
                      value = { 45 }
                      startSymbol = "↓"
                      endSymbol = "%"
                      duration={ 5 }
                      concept='Average time to complete a report'
                    />
                    <MobileHealthcareCardValue
                      value = { 30 }
                      endSymbol = "%"
                      duration={ 5 }
                      concept='Improved interface loading speed'
                    />
                </div>
                <LandingsButton
                    type = "outline-secondary"
                    onClick={ donwload }
                >
                    <span>Read more</span>
                    <ArrowDownTrayIcon className="w-6 h-6 text-white group-hover:text-landing-indigo transition-all duration-700" strokeWidth={1.5} />
                </LandingsButton>
              </div>
            </div>
          </FadeIn>
        </div>
    </Section>
  )
}

export default MobileHealthcareCaseStudySection;