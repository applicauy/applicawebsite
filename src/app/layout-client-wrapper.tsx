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
import Loading from "@/components/loading";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });


export default function LayoutClientWrapper({ children, initialIsMobile }: { children: React.ReactNode, initialIsMobile: boolean }) {
    const [isMobile, setIsMobile] = useState(initialIsMobile);

    const [loading, setLoading] = useState(false);

    const pathname = usePathname();

    const handleMenuClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setLoading(isMobile ? true : false);
        isMobile &&
            setTimeout(() => {
                setLoading(false); 
            }, 3000);
    };  

    const handleScroll = (id: any) => {
        localStorage.setItem('scrollToId', id);
        
        
        if( pathname != '/' ){
            window.location.href = '/';
        }
        else {
            const element = document.getElementById(id);
            const headerOffset = 80;
            
            if (element) {
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
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
        if (!initialIsMobile) {
            const md = new MobileDetect(window.navigator.userAgent);
            setIsMobile(!!md.mobile());
        }
    }, [initialIsMobile]);

    useEffect(() => {
        
        // Obtén el ID de localStorage
        const scrollToId = localStorage.getItem('scrollToId');
        
        if (scrollToId) {
            const element = document.getElementById(scrollToId);
            const headerOffset = 80;
            
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
    }, []); 
    
    return (
        <body className={`${inter.className} overflow-x-hidden ${ isMobile && 'mobile-layout' }`}>
            { loading && <Loading /> }
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
            { 
                isMobile ? 
                    <MobileNavBar onMenuClick={handleMenuClick} handleScrollFromClick = { handleScroll } /> : 
                    <NavBar onMenuClick={handleMenuClick} handleScroll = { handleScroll }/> 
            }
            
            {children}
            
            { 
                isMobile ? 
                    <MobileFooter handleScroll = { handleScroll }/> : 
                    <Footer handleScroll = { handleScroll }/> 
            }
        </body>   
    );
}