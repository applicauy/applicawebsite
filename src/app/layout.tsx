import "./styles/globals.scss";
import { headers } from "next/headers";
import { Inter } from "next/font/google";
import Script from 'next/script';
import MobileDetect from 'mobile-detect';
import LayoutClientWrapper from "./layout-client-wrapper";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    const userAgent = headers().get('user-agent') || '';
    const md = new MobileDetect(userAgent);
    const isMobile = !!md.mobile();
    return (
        <html lang="en">
            <head>
                <Script
                    id="gtm-script"
                    src="https://www.googletagmanager.com/gtm.js?id=G-689YV97H3W"
                    strategy="lazyOnload"
                    async
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/icon_apple_touch.png" sizes="180x180" />
            </head>
            
            <LayoutClientWrapper initialIsMobile={isMobile}>{ children }</LayoutClientWrapper>
        </html>
    );
}