import React, { useEffect, useState } from 'react'
import { rubikFont } from '@/assets/fonts';
import { menuItems } from '@/utils/menu/menu-items';
import logo from "@/assets/logo/logo-negro.webp";
import Image from 'next/image';
import '../../styles/healthcare.scss';
import '../../styles/globals.scss';
import { industryItems } from '@/utils/menu/industry-items';

export default function LandingsNavbar (
    {
        onMenuClick,
        handleScroll
    } :
    {
        onMenuClick: any,
        handleScroll: any
    }
) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className={`sticky flex ${rubikFont.className} 
            w-full max-w-[850px] 
            lg:max-w-[1025px]
            xl:max-w-[1280px]
            2xl:max-w-[1441px]`}>
            <div className="flex justify-between py-4 mdplus:py-8 xl:py-12 w-full">
                <div className="logo">
                    <a href="/">
                        <Image
                            alt="Applica's logo"
                            src={logo}
                            className="h-7 lg:h-10 w-auto"
                            loading="lazy"
                            width={300}
                            height={100}
                        />
                    </a>
                </div>
                <ul className={`hidden md:flex flex-row gap-6 lg:gap-8 h-fit max-h-fit self-center font-normal`}>
                    {
                        menuItems.map(
                            (item, index) => {
                                if (index === 1) {
                                    return (
                                        <React.Fragment key={index}>
                                        <li>
                                            <a
                                                href={item.url}
                                                onClick={(e) => {
                                                e.preventDefault();
                                                handleScroll(item.url.slice(1));
                                                }}
                                                className="text-md lg:text-xl hover:text-landing-violet text-black transition-all duration-300 flex items-center justify-center"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                        <li
                                            className="relative group z-[9999]"
                                            onMouseEnter={() => setIsDropdownOpen(true)}
                                            onMouseLeave={() => setIsDropdownOpen(false)}
                                        >
                                            <button className="text-md lg:text-xl hover:text-landing-violet text-black transition-all duration-300 flex items-center justify-center">
                                            industries
                                            <svg
                                                className={`ml-2 w-4 h-4 transform transition-transform ${
                                                isDropdownOpen ? "rotate-180" : ""
                                                }`}
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                            </button>
        
                                            <ul
                                                className={`absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg transition-all duration-300 ${
                                                    isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                                                } z-[9999]`}
                                            >
                                            {industryItems.map((subItem, idx) => (
                                                <li key={idx}>
                                                <a
                                                    href={subItem.url}
                                                    className="block px-5 py-3 hover:text-landing-violet text-black transition-all duration-300 text-md lg:text-xl"
                                                >
                                                    {subItem.name}
                                                </a>
                                                </li>
                                            ))}
                                            </ul>
                                        </li>
                                        </React.Fragment>
                                    );
                                }
                                return ( 
                                    <li key={index}>
                                        {item.url.startsWith('#') ? (
                                            <a
                                                href={item.url}
                                                onClick={
                                                    (e) => {
                                                        e.preventDefault();
                                                        handleScroll(item.url.slice(1));
                                                    }
                                                }
                                                className="text-md lg:text-xl text-black hover:text-landing-violet transition-all duration-300 flex items-center justify-center"
                                            >
                                                {item.name}
                                            </a>
                                        ) : (
                                            <a
                                                href={item.url}
                                                className="text-md lg:text-xl text-black hover:text-landing-violet transition-all duration-300 flex items-center justify-center"
                                                target={item.target ?? ''}
                                                onClick={ (event) => onMenuClick( event ) }
                                            >
                                                {item.name}
                                            </a>
                                        )}
                                    </li> 
                                )
                            }
                        )
                    }
                </ul>
            
        </div>
    </nav>
  )
}
