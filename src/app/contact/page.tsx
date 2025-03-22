import { apexFont } from "@/assets/fonts";
import { headers } from "next/headers";
import MobileDetect from "mobile-detect";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
    title: 'Contact | Applica Corp.',
    description: 'Looking for staff augmentation solutions? Contact Applica Corp to discover the perfect IT talent for your project and drive your success.',
    keywords: ['contact', 'staff augmentation', 'solutions', 'project', 'success', 'information'],
    alternates: {
        canonical: `https://applicacorp.com/contact`,
    }
};

export default function Page() {

    const userAgent = headers().get('user-agent') || '';
    const md = new MobileDetect(userAgent);
    const isMobile = !!md.mobile();  

    const ContactSection = dynamic(() => import('@/app/contact/_sections/contact-section'), { ssr: false });
    const FormSection = dynamic(() => import('@/app/contact/_sections/form-section'), { ssr: false });
    const MobileLetsTalkSection = dynamic(() => import('@/(mobile)/_sections/mobile-lets-talk-section'), { ssr: false });

    return (
        <>
            <div className={`${apexFont.className} flex min-h-screen flex-col items-start justify-between md:px-24 px-48-lg md:mt-10 mt-24 overflow-hidden ${ isMobile && 'mb-16' }`}>

                <ContactSection isMobile = { isMobile } />

                <div className="flex flex-row py-0 md:py-11 px-6 md:px-24 px-48-lg w-full mt-8">
                    <FormSection isMobile = { isMobile } />
                </div>       

            </div>     

            {
                isMobile && <MobileLetsTalkSection></MobileLetsTalkSection>
            }
        </>
    );
}
