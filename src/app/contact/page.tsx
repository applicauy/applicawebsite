import FormSection from "./_sections/form-section";
import { apexFont } from "@/assets/fonts";
import ContactSection from "./_sections/contact-section";
import { headers } from "next/headers";
import MobileDetect from "mobile-detect";
import MobileLetsTalkSection from "../(mobile)/_sections/mobile-lets-talk-section";

export default function Page() {

    const userAgent = headers().get('user-agent') || '';
    const md = new MobileDetect(userAgent);
    const isMobile = !!md.mobile();  

    return (
        <>
            <div className={`${apexFont.className} flex min-h-screen flex-col items-start justify-between md:px-24 px-48-lg md:mt-10 mt-24 overflow-hidden ${ isMobile && 'mb-16' }`}>

                <ContactSection isMobile = { isMobile } />

                <div className="flex flex-row py-0 md:py-11 px-2 md:px-24 px-48-lg w-full">
                    <FormSection isMobile = { isMobile } />
                </div>       

            </div>     

            {
                isMobile && <MobileLetsTalkSection></MobileLetsTalkSection>
            }
        </>
    );
}
