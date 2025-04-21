'use client'

import MobileButton from "@/app/(mobile)/_components/mobile-button"
import StrongText from "@/app/_components/strong-text"
import Button from "@/components/button"

export default function LookingForCareerSection(
    {
        isMobile
    } :
    {
        isMobile : boolean
    }
) {

    return (
        <div className="md:text-4xl text-2xl text-center w-full mt-16 md:mb-20">
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