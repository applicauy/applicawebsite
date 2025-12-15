"use client";
import Image from "next/image";
import logo from "@/assets/logo/logo-menu.webp";
import { apexFont } from "@/assets/fonts";
import { menuItems } from "@/utils/menu/menu-items";
import React, { useState } from "react";
import { industryItems } from "@/utils/menu/industry-items";

// Navbar used across the website.
export default function NavBar(
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
        <nav className={`sticky flex justify-center ${apexFont.className} px-4 lg:px-24`}>
            <div className="flex justify-between content-center container md:px-0 py-4 lg:py-8">
                <div className="logo">
                    <a href="/">
                        <Image
                            alt="Applica's logo"
                            src={logo}
                            className="h-14 lg:h-20 md:h-16 w-auto"
                            loading="lazy"
                            width={300}
                            height={100}
                        />
                    </a>
                </div>

                <ul className={`hidden md:flex flex-row gap-4 lg:gap-6 xl:gap-10 h-fit max-h-fit self-center`}>
                    {menuItems.map((item, index) => {
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
                                        className="text-xl hover:text-highlight transition-all duration-300 flex items-center justify-center"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                                <li
                                    className="relative group z-[9999]"
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    onMouseLeave={() => setIsDropdownOpen(false)}
                                >
                                    <button className="text-xl hover:text-highlight transition-all duration-300 flex items-center justify-center">
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
                                        className={`absolute left-0 mt-2 w-48 bg-black text-white rounded-lg shadow-lg transition-all duration-300 ${
                                            isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                                        } z-[9999]`}
                                    >
                                    {industryItems.map((subItem, idx) => (
                                        <li key={idx}>
                                        <a
                                            href={subItem.url}
                                            className="block px-5 py-3 hover:text-highlight transition-all duration-300 text-xl"
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
                            {item.url.startsWith("#") ? (
                            <a
                                href={item.url}
                                onClick={(e) => {
                                e.preventDefault();
                                handleScroll(item.url.slice(1));
                                }}
                                className="text-xl hover:text-highlight transition-all duration-300 flex items-center justify-center"
                            >
                                {item.name}
                            </a>
                            ) : (
                            <a
                                href={item.url}
                                className="text-xl hover:text-highlight transition-all duration-300 flex items-center justify-center"
                                target={item.target ?? ""}
                                onClick={(event) => onMenuClick(event)}
                            >
                                {item.name}
                            </a>
                            )}
                        </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
