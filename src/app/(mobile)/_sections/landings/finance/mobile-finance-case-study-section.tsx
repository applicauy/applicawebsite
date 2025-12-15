import FadeIn from "@/app/_components/effects/fade-in";
import '../../../../styles/healthcare.scss';
import '../../../../styles/effects.scss';
import { rubikFont } from '@/assets/fonts';
import jnbank from '@/assets/jnbank.webp';
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Section from "@/components/landings/section";
import { LandingsButton } from "@/components/landings/button";
import { LandingsH2 } from "@/components/landings/h2";
import { LandingsH3 } from "@/components/landings/h3";
import { caseStudyChecks } from "@/utils/data/finance/case-study-checks";
import { MobileCaseStudyCheck } from "@/app/(mobile)/_components/landings/mobile-case-study-check";

const donwload = () => {
    const url = '/pdf/Applica_Case_JN_Bank.pdf';
    const a = document.createElement('a');

    a.href = url;
    a.target = '_blank';
    a.download = 'Applica_Case_JN_Bank.pdf';
    a.click();
}
export const MobileFinanceCaseStudySection = () => {
  return (
    <Section fullWidth className={`${ rubikFont.className } relative left-0 right-0 py-10 px-4 w-screen section-gradient`} >
        <div className='flex flex-row gap-6 justify-start items-center text-white '>
          <FadeIn>
            <div className="flex flex-col gap-6 w-full">
              <LandingsH2
                mobile
                title
                className="text-center"
              >
                Case study:<br/><b>JN Bank</b>
              </LandingsH2>
              <LandingsH3
                mobile
                small
                className="text-center"
              >
                JN Bank needed to modernize its digital ecosystem to maintain leadership in the Caribbean. In 15 months, we achieved:
              </LandingsH3>
              <div className="flex flex-col items-center justify-center gap-8 mt-8">
                  <Image
                      src={jnbank}
                      alt="JN Bank"
                      width={200}
                      height={200}
                      loading="lazy"
                      className="animate-float"
                  />
                <div className="flex flex-col gap-4">
                    {
                      caseStudyChecks.map(
                        ( check, index ) => (
                          <MobileCaseStudyCheck
                            key = { index }
                          >
                            { check }
                          </MobileCaseStudyCheck>
                        )
                      )
                    }
                </div>
                <LandingsButton
                    type = "outline-secondary"
                    onClick={ donwload }
                    download
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
