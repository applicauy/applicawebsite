'use client'

import MobileButton from "@/app/(mobile)/_components/mobile-button"
import StrongText from "@/app/_components/strong-text"
import Button from "@/components/button"
import { useEffect, useState } from "react";

export default function LookingForCareerSection() {

    const [isMobile, setIsMobile] = useState(false);
    
    const [width, setWidth] = useState(0);
    
    useEffect(() => {
      setWidth(window.innerWidth);
      setIsMobile( window.innerWidth < 800 );
    }, []);

    return (
        <div className="lg:text-4xl text-3xl text-center w-full mt-16 mb-16 lg:mb-20">
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
                <div className="flex flex-row items-center justify-center">
                    <Button
                        href="https://recruitcrm.io/jobs/applica_corp"
                        target="_blank"
                        largeText = { false }
                    >
                        View all jobs opening
                    </Button>
                </div>
            }
        </div>
    )

}