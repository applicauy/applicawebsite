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
import vr from '@/assets/vr.webp';
import { LandingsH3 } from "@/components/landings/h3";

const donwload = () => {
    const url = '/pdf/Applica_Case_Technology.pdf';
    const a = document.createElement('a');

    a.href = url;
    a.target = '_blank';
    a.download = 'Applica_Case_Technology.pdf';
    a.click();
}

const MobileTechnologyCaseStudySection = () => {
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
                Case study:<br/><b>High-impact tech talent for critical environments</b>
              </LandingsH2>
              <div className="flex flex-col items-center justify-center gap-8 mt-8">
                  <Image
                      src={vr}
                      alt="vr"
                      width={300}
                      height={300}
                      loading="lazy"
                      className="animate-float"
                  />
                <div className="flex flex-row gap-2">
                    <MobileHealthcareCardValue
                      value = { 40 }
                      startSymbol = "↓"
                      endSymbol = "%"
                      duration={ 5 }
                      concept='Critical incidents across support systems'
                    />
                    <MobileHealthcareCardValue
                      value = { 12000 }
                      startSymbol = "+"
                      duration={ 5 }
                      concept='Monthly tickets managed during the first year'
                    />
                </div>
                <MobileHealthcareCardValue
                  value = "Operational stability"
                  startSymbol = "↑"
                  duration={ 5 }
                  concept='Through proactive monitoring and automation'
                  text
                />
                <LandingsH3
                  mobile
                  className="text-center font-bold mt-10"
                >
                  How we did it.
                </LandingsH3>
                <div className="max-w-screen-sm text-md text-white leading-tight text-center flex flex-col gap-4 z-10">
                  <p>
                      Applica integrated specialized Tech Squads to strengthen mission-critical operations, automate repetitive tasks, and improve user experience across multiple platforms.
                  </p>
                </div>
                <LandingsButton
                    type = "outline-secondary"
                    onClick={ donwload }
                    download
                >
                    <span>Read more - download full case study</span>
                    <ArrowDownTrayIcon className="w-6 h-6 text-white group-hover:text-landing-indigo transition-all duration-700" strokeWidth={1.5} />
                </LandingsButton>
              </div>
            </div>
          </FadeIn>
        </div>
    </Section>
  )
}

export default MobileTechnologyCaseStudySection;
