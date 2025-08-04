"use client";
import '../../styles/navbar.scss';
import Image from "next/image";
import logo from "@/assets/logo/logo-menu.webp";
import { useCallback, useEffect, useState } from "react";
import { motion } from 'framer-motion';
import dynamic from "next/dynamic";

const MobileNavBar = (
    {
        onMenuClick,
        handleScrollFromClick
    } :
    {
        onMenuClick: React.MouseEventHandler<HTMLDivElement>,
        handleScrollFromClick: any
    }
) => {
    
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const [width, setWidth] = useState(0);
      
    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);

    const handleScroll = useCallback(() => {
        if (window.scrollY === 0) {
            setShowNavbar(true);
        } else if (window.scrollY > lastScrollY) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }

        setLastScrollY(window.scrollY);
    }, [lastScrollY]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            return () => {
            window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [handleScroll]);

    const variants = {
      hidden: { y: '-100%', opacity: 0 },
      visible: { y: '0%', opacity: 1 },
    };

    const MobileMenu = dynamic(() => import('@/(mobile)/_components/mobile-menu'));
    
    return (
        <motion.header 
            className={`flex justify-between items-center px-4 sm:px-6 md:px-8 py-8 sm:py-16 md:py-24 applica-navbar ${showNavbar ? 'visible' : 'hidden'}`}
            initial="visible"
            animate={showNavbar ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            <div className="max-w-48 md:max-w-60 z-[1100]">
                <a href="/">
                    <Image 
                        alt="Applica's logo" 
                        src={logo} 
                        loading="lazy" 
                        width={ width > 767 ? 400 : 300 } 
                        height={ width > 767 ? 130 : 100}
                    />
                </a>
            </div>
            <MobileMenu onMenuClick = { (event: any) => onMenuClick( event ) } handleScroll = { handleScrollFromClick } />
        </motion.header>
    );
};

export default MobileNavBar;
