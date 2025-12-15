import FadeUp from "@/app/_components/effects/fade-up";
import { rubikFont } from "@/assets/fonts";
import '../../../../styles/healthcare.scss';
import '../../../../styles/effects.scss';
import { LandingsButton } from "@/components/landings/button";
import { LandingsH2 } from "@/components/landings/h2";
import { motion } from 'framer-motion';
import { startupServices } from "@/utils/data/technology/startup-services";
import { MobileGradientCard } from "@/app/(mobile)/_components/landings/mobile-gradient-card";
import { LandingsH3 } from "@/components/landings/h3";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const MobileTechnologyProductChallengeSection = () => {

  const onRedirectClick = () => {
    window.location.href = "/contact";
  };

  return (
    <div className={`${rubikFont.className} relative left-0 right-0 px-4 py-10 w-screen challenge-gradient overflow-hidden`}>
      <FadeUp>
        <div className="relative z-10 flex flex-col gap-6 justify-center items-center text-white">
          <LandingsH2
              mobile
              title
              className='max-w-screen-xs leading-tight w-full font-bold text-center'
          >
              Startup & tech<br />development services
          </LandingsH2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`columns-1 gap-6 xl:gap-12 w-4/5 xl:w-3/4 mx-auto mt-4 xl:mt-16`}
          >
            {startupServices.map(({ title, concept }, index) => (
              <motion.div
                key={index}
                variants={item}
                className="mb-6 break-inside-avoid"
              >
                <MobileGradientCard title={title} gradient={false}>
                  {concept}
                </MobileGradientCard>
              </motion.div>
            ))}

          </motion.div>
          <LandingsH3
              mobile
              className='w-full text-center font-bold'
          >
              Every product challenge is unique.
          </LandingsH3>
          <div className="max-w-screen-sm text-md text-white leading-tight text-center flex flex-col gap-4 mb-4">
              <p>
                  Schedule a discovery call and let&apos;s build the right solution for yours.
              </p>
          </div>
          <LandingsButton
              type = "secondary"
              href='/contact'
              redirect
          >
              <span>Contact our team</span>
          </LandingsButton>
        </div>
      </FadeUp>
    </div>
  );
};

export default MobileTechnologyProductChallengeSection;
