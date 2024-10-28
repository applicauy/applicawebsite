import FormSection from "./_sections/form-section";
import H2 from "@/components/h2";
import H4 from "@/components/h4";
import StrongText from "@/app/_components/strong-text";
import placeholderImg from "@/assets/placeholder-img-2.png";
import { apexFont } from "@/assets/fonts";
import DecoratedImage from "../_components/decorated-image";
import Button from "@/components/button";
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
            <main className={`${apexFont.className} container mx-auto min-h-screen flex flex-col gap-8 contact-section md:px-24 md:mt-12 overflow-x-hidden mt-24 ${ isMobile && 'mb-12' }`}>

                <ContactSection isMobile = { isMobile } />

                <div className="flex flex-row px-2 py-0 md:px-24 md:py-11">
                    <FormSection isMobile = { isMobile } />
                </div>
            </main>
            

            {
                isMobile && <MobileLetsTalkSection></MobileLetsTalkSection>
            }
        </>
    );
}
