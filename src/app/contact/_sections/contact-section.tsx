'use client'

import DecoratedImage from "@/app/_components/decorated-image";
import StrongText from "@/app/_components/strong-text";
import Button from "@/components/button";
import H2 from "@/components/h2";
import H4 from "@/components/h4";
import placeholderImg from '@/assets/placeholder-img-2.webp';
import MobileButton from "@/app/(mobile)/_components/mobile-button";
import MobileDecoratedImage from "@/app/(mobile)/_components/mobile-decorated-image";
import H1 from "@/components/h1";
import H3 from "@/components/h3";

export default function ContactSection(
    {
        isMobile
    } :
    {
        isMobile: boolean
    }
) {

    return (
        <>
            
            <h1 className="sr-only">Applica Corp. | Contact</h1>
            <div className="flex flex-col md:flex-row px-2 md:px-0">
                <div className="flex flex-col w-full md:w-1/2">
                    <H2 className="mb-4 text-center md:text-start">
                        Looking for help to{" "}
                        <StrongText content="ramp up your development" />
                    </H2>
                    <H3 className="mb-8 text-highlight text-center md:text-start" subtitle = { true }>Let&apos;s #MakeIThappen</H3>
                    <div className="mb-6">
                        <p className="text-xl md:text-3xl text-center md:text-start">
                            First, we need some information from you. <br />
                            Please, fill the form or just send us an email to{" "}
                            <a
                                href="mailto:info@applicacorp.com"
                                className="text-highlight"
                            >
                                info@applicacorp.com
                            </a>{" "}
                            and we will contact you shortly!
                        </p>
                    </div>
                    <div className="md:text-3xl text-xl text-center md:text-start">
                        <p className="mb-4">
                            Looking for <StrongText content="career?" />{" "}
                        </p>
                        {
                            isMobile ?
                            <div className="flex flex-row items-center justify-center">
                                <MobileButton
                                    href="https://recruitcrm.io/jobs/applica_corp"
                                    target="_blank"
                                >
                                    View all jobs opening
                                </MobileButton>
                            </div>
                            :
                            <Button
                                href="https://recruitcrm.io/jobs/applica_corp"
                                target="_blank"
                                largeText = { false }
                            >
                                View all jobs opening
                            </Button>
                        }
                    </div>
                </div>
                <div className="relative w-full md:w-1/2 px-2 md:px-0 mt-12 md:mt-0">
                    <div className="image-container">  
                        {
                            isMobile ? 
                            <MobileDecoratedImage
                                image = { placeholderImg }
                                alt = "Contact us!"
                            /> :
                            <DecoratedImage 
                                image={placeholderImg}
                                alt = "Contact us!"
                            />
                        }
                    </div>
                </div>
            </div>
        </>
    );

}