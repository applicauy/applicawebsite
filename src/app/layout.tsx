import "./styles/globals.scss";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter } from "next/font/google";
import Script from 'next/script';
import MobileDetect from 'mobile-detect';
import LayoutClientWrapper from "./layout-client-wrapper";
import Head from "next/head";

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
            <Head>
                <Script
                    id="gtm-script"
                    src="https://www.googletagmanager.com/gtm.js?id=G-689YV97H3W"
                    strategy="lazyOnload"
                    async
                />

                {/* Metricool Tracking Script */}
                <Script
                    id="metricool-script"
                    src="https://tracker.metricool.com/resources/be.js"
                    strategy="lazyOnload"
                />
                <Script 
                    id="metricool-init" 
                    strategy="lazyOnload">
                    {`
                        if (window.beTracker) {
                        window.beTracker.t({
                            hash: "1290ec9204a13f1d44c1fae9bed96d16"
                        });
                        }
                    `}
                </Script>
                <title>Applica Corp | Tailored software development for your growth</title>
                <meta
                    name="description"
                    content="We are a software company focused on saving you time and delivering peace of mind. Build your dream team with top nearshore IT talent in only 72 hs."
                />
                <meta name="keywords" content="staff augmentation, software, company, team, talent" />

                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/icon_apple_touch.png" sizes="180x180" />
            </Head>
            
            <LayoutClientWrapper initialIsMobile={isMobile}>{ children }</LayoutClientWrapper>
        </html>
    );
}