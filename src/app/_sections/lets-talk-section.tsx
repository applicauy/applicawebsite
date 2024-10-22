"use client";
import { apexFont, avigeaFont } from "@/assets/fonts";
import Button from "@/components/button";
import H3 from "@/components/h3";
import { /*onLetsTalkClick,*/ useNavigationHandlers } from "@/lib/helpers";

export default function LetsTalkSection() {
    const { onLetsTalkClick } = useNavigationHandlers();

    return (
        <section className={ `${apexFont.className} flex justify-center items-center min-h-80 w-full gap-8 bg-gradient-to-br lets-talk-background px-0` }>
            <H3>
                Got a{" "}
                <strong className={`font-normal ${avigeaFont.className}`}>
                    project in mind
                </strong>
                ?
            </H3>
            <Button onClick={onLetsTalkClick}>Let&apos;s talk!</Button>
        </section>
    );
}
