"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo/logo-menu.svg";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import MobileSideMenu from "@/app/(mobile)/_components/mobile-side-menu";
import { useEffect, useState } from "react";
import MobileMenu from "./mobile-menu";
import { motion } from 'framer-motion';

const MobileNavBar = () => {
    
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (window.scrollY === 0) {
          setShowNavbar(true);
        } else if (window.scrollY > lastScrollY) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [lastScrollY]);

    const variants = {
      hidden: { y: '-100%', opacity: 0 },
      visible: { y: '0%', opacity: 1 },
    };
    
    return (
        <motion.header 
            className={`flex justify-between items-center px-4 sm:px-6 md:px-8 py-8 sm:py-16 md:py-24 applica-navbar ${showNavbar ? 'visible' : 'hidden'}`}
            initial="visible"
            animate={showNavbar ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            <div className="max-w-48 z-[1100]">
                <Link href="/">
                    <Image alt="Applica's logo" src={logo} />
                </Link>
            </div>
            <MobileMenu />
        </motion.header>
    );
};

export default MobileNavBar;
