import React from 'react'
import { rubikFont } from '@/assets/fonts';
import { menuItems } from '@/utils/menu/menu-items';
import logo from "@/assets/logo/logo-negro.webp";
import Image from 'next/image';
import '../../styles/healthcare.scss';
import '../../styles/globals.scss';

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
  return (
        <nav className={`sticky flex ${rubikFont.className} w-full max-w-[850px] 
            lg:max-w-[1025px]
            xl:max-w-[1280px]
            2xl:max-w-[1441px]`}>
            <div className="flex justify-between py-4 mdplus:py-8 xl:py-12 w-full">
                <div className="logo">
                    <a href="/">
                        <Image
                            alt="Applica's logo"
                            src={logo}
                            className="h-10 w-auto"
                            loading="lazy"
                            width={300}
                            height={100}
                        />
                    </a>
                </div>
                <ul className={`hidden md:flex flex-row gap-6 lg:gap-8 h-fit max-h-fit self-center font-normal`}>
                    {
                        menuItems.map(
                            (item, index) => (
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
                        )
                    }
                </ul>
            
        </div>
    </nav>
  )
}
