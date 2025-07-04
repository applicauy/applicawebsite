'use client';
import MobileDetect from "mobile-detect";
import { useEffect, useState } from "react";

import { GoogleTagManager } from "@next/third-parties/google";
import TrackPageView from "../components/track-page-view";

const GTM_ID = "GTM-PQ3DNDZ";

import { Inter } from "next/font/google";
import Loading from "@/components/loading";
import dynamic from "next/dynamic";
const inter = Inter({ subsets: ["latin"] });

export default function LayoutClientWrapper({ children }: { children: React.ReactNode }) {
    const [isMobile, setIsMobile] = useState(false);

    const [loading, setLoading] = useState(false);

    const [width, setWidth] = useState(0);

    useEffect(() => {
      setWidth(window.innerWidth);
      setIsMobile( window.innerWidth <= 800 );
    }, []);

    const handleMenuClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setLoading(isMobile ? true : false);
        isMobile &&
            setTimeout(() => {
                setLoading(false); 
            }, 3000);
    };  

    const handleScroll = (id: any) => {
        const element = document.getElementById(id);
        setTimeout(
            () => {
                const headerOffset = 50;
                if (element) {
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth',
                    });

                    const newUrl = `/#${id}`;
                    window.history.pushState(null, "", newUrl);
                    localStorage.setItem("scrollToId", id);
                } else {
                    window.location.href = `/#${id}`;
                    localStorage.setItem("scrollToId", id);
                }
            },
            100
        )
    };
    
    useEffect(() => {
        if (loading) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('no-scroll');
        } else {
            document.body.style.overflow = '';
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.style.overflow = ''; 
        };
    }, [loading]);

    useEffect(() => {

        if( window.location.href.includes('/#') ) {

            
            setTimeout(
                () => {
                    const scrollToId = localStorage.getItem('scrollToId');
                    if (scrollToId) {
                        const element = document.getElementById(scrollToId);
                        const headerOffset = 200;
                        
                        if (element) {
                            const elementPosition = element.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            
                            window.scrollTo({
                                top: offsetPosition,
                                behavior: 'smooth'
                            });
                        }
            
                        localStorage.removeItem('scrollToId');
                    }
                },
                1000
            )
            
        }
    }, []); 

    const MobileNavBar = dynamic(() => import('@/(mobile)/_components/mobile-navbar'), { ssr: false });
    const MobileFooter = dynamic(() => import('@/(mobile)/_components/mobile-footer'));

    
    const NavBar = dynamic(() => import('@/app/_components/navbar'), { ssr: false });
    const Footer = dynamic(() => import('@/app/_components/footer'));
    
    
    return (
        <body className={`${inter.className} overflow-x-hidden ${ isMobile && 'mobile-layout' }`}>
            { loading && <Loading /> }
            { 
                isMobile ? 
                    <MobileNavBar onMenuClick={handleMenuClick} handleScrollFromClick = { handleScroll } /> : 
                    <NavBar onMenuClick={handleMenuClick} handleScroll = { handleScroll }/> 
            }
            
            {children}
            
            { 
                width < 1025 ? 
                    <MobileFooter handleScroll = { handleScroll }/> : 
                    <Footer handleScroll = { handleScroll }/> 
            }
            <GoogleTagManager gtmId={GTM_ID} />
            <TrackPageView />
        </body>   
    );
}