"use client";
import '../../styles/lets-talk.scss';
import { apexFont, avigeaFont } from "@/assets/fonts";
import MobileButton from "../_components/mobile-button";
import { /*onLetsTalkClick,*/ useNavigationHandlers } from "@/lib/helpers";
import MobileH1 from "../_components/mobile-h1";

export default function MobileLetsTalkSection() {
    const { onLetsTalkClick } = useNavigationHandlers();

    return (
        <section className={`${ apexFont.className } flex justify-center items-center w-full`}>
            <div className="flex flex-col text-center items-center w-full">
                <div className="w-full flex flex-col justify-center items-center py-8 px-4 lets-talk-background">
                    <MobileH1 className={`font-normal ${apexFont.className}`}>
                        Got a{" "}
                        <span
                            className={`font-medium ${avigeaFont.className}`}
                        >
                            project in mind
                        </span>
                        ?
                    </MobileH1>

                    <br />

                    <MobileButton onClick={onLetsTalkClick}>
                        Let&apos;s talk!
                    </MobileButton>
                </div>
            </div>
        </section>
    );
}
