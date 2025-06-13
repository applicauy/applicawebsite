"use client";
import '../styles/lets-talk.scss';
import { apexFont, avigeaFont } from "@/assets/fonts";
import Button from "@/components/button";
import H2 from '@/components/h2';
import H3 from "@/components/h3";
import { /*onLetsTalkClick,*/ useNavigationHandlers } from "@/lib/helpers";
import { useEffect, useState } from 'react';

export default function LetsTalkSection() {
    const { onLetsTalkClick } = useNavigationHandlers();

    const [width, setWidth] = useState(0);
    
    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);

    return (
        <section className={ `${apexFont.className} flex lg:flex-row flex-col justify-center items-center min-h-64 lg:min-h-80 w-full gap-8 bg-gradient-to-br lets-talk-background px-0` }>
            {
                width > 1024 ?
                    <H3>
                        Got a{" "}
                        <span className={`font-medium ${avigeaFont.className}`}>
                            project in mind
                        </span>
                        ?
                    </H3> :
                    <div className="block">
                        <H2>
                            Got a{" "}
                            <span className={`font-medium ${avigeaFont.className}`}>
                                project in mind
                            </span>
                            ?
                        </H2>
                    </div>
            }
            
            <Button onClick={onLetsTalkClick}>Let&apos;s talk!</Button>
        </section>
    );
}
