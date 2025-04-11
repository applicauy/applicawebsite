import dynamic from 'next/dynamic';
import MobileH1 from '../_components/mobile-h1';
import { avigeaFont } from '@/assets/fonts';
import { motion } from 'framer-motion';

export default function MobileYourVisionSection() {
    const Section = dynamic(() => import('@/components/section'));
    return (
        <Section className={`flex flex-col items-center w-full`}>
            <motion.div
                className="flex flex-col items-center md:items-start md:w-[60%] w-full z-20"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                id='your-vision'
            >
                <MobileH1 className="mb-12 md:mb-12 text-center">
                    Your vision,{" "}
                    <span className={`font-medium ${avigeaFont.className}`}>
                        your way
                    </span>
                </MobileH1>

                <div className="w-full flex justify-center mb-8">
                    <p className="text-2xl md:text-3smt text-center">
                        <span className="font-bold">Custom solutions</span> or{" "}
                        <span className="font-bold">expert teams.</span><br/>You choose.
                    </p>
                </div>

                <div className="flex flex-col gap-12">
                    <div className="box-your-vision-mobile rounded-3xl box-your-vision-1 px-4 py-6 flex flex-col gap-6">
                        <p className={`font-medium ${avigeaFont.className} text-3xl text-white text-center`}>Tailored development</p>
                        <p className='text-xl text-white text-center'>From ideation to deployment, our expert teams ensure scalable, high-performance end to end solutions that drive innovation and long-term success.</p>
                        <p className='text-xl text-white text-center'>Our commitment to innovation and quality empowers businesses to stay ahead in an ever-evolving digital landscape.</p>
                    </div>
                    <div className="box-your-vision-mobile rounded-3xl box-your-vision-2 px-4 py-6 flex flex-col gap-6">
                        <p className={`font-medium ${avigeaFont.className} text-3xl text-white text-center`}>Tech squad</p>
                        <p className='text-xl text-white text-center'>We provide top-tier tech talent to accelerate projects and seamlessly adapt to your evolving business needs.</p>
                        <p className='text-xl text-white text-center'>Beyond technical expertise, we emphasize soft skills and a human-centered approach to drive collaboration, spark innovation, and ensure lasting success.</p>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}