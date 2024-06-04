"use client";

import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { isMobile } from "react-device-detect";
import { Inter } from "next/font/google";
import NavBar from "./_components/navbar";
import Footer from "./_components/footer";
import MobileLayout from "./mobile/layout";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const bodyRef = useRef<HTMLBodyElement | null>(null);
    const [isMobileState, setIsMobileState] = useState(false);

    useEffect(() => {
        setIsMobileState(isMobile);
    }, []);

    useLayoutEffect(() => {
        if (bodyRef?.current) bodyRef.current.style.visibility = "visible";
    }, []);

    const LayoutComponent = isMobileState ? MobileLayout : React.Fragment;

    return (
        <html lang="en">
            <body
                className={`${inter.className}`}
                ref={bodyRef}
                style={{ visibility: "hidden" }}
            >
                <NavBar isMobile={isMobileState} />
                <LayoutComponent>{children}</LayoutComponent>
                <Footer isMobile={isMobileState} />
            </body>
        </html>
    );
}
