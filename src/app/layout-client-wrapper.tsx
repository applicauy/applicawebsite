'use client';
import MobileDetect from "mobile-detect";
import { useEffect, useState } from "react";
import MobileNavBar from "./(mobile)/_components/mobile-navbar";
import NavBar from "./_components/navbar";
import MobileFooter from "./(mobile)/_components/mobile-footer";
import Footer from "./_components/footer";
import Image from "next/image";
import backgroundImg from '@/assets/background/gradient.svg';


import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


export default function LayoutClientWrapper({ children, initialIsMobile }: { children: React.ReactNode, initialIsMobile: boolean }) {
    const [isMobile, setIsMobile] = useState(initialIsMobile);

    // Solo ejecutamos la detección en el cliente si no fue determinada en el servidor
    useEffect(() => {
        if (!initialIsMobile) {
            const md = new MobileDetect(window.navigator.userAgent);
            setIsMobile(!!md.mobile());
        }
    }, [initialIsMobile]);
    
    return (
        <body className={`${inter.className} overflow-x-hidden ${ isMobile && 'mobile-layout' }`}>

            {
                !isMobile &&
                <div className="absolute top-0 right-0 w-[60%] z-[-1]">
                    <Image
                        src={backgroundImg}
                        alt = "Background Image"
                        className="w-full object-cover"
                    />
                </div>
            }

            { isMobile ? <MobileNavBar /> : <NavBar /> }
            
            {children}
            
            { isMobile ? <MobileFooter /> : <Footer /> }

        </body>
    );
}