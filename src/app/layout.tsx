import "./globals.scss";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter } from "next/font/google";
import Script from 'next/script';
import MobileDetect from 'mobile-detect';
import LayoutClientWrapper from "./layout-client-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Applica Corp: IT Staff augmentation services",
    description:
        "We are a software company focused on saving you time and delivering peace of mind. Build your dream team with top nearshore IT talent in only 72 hs.",
    keywords: ['staff augmentation', 'software', 'company', 'team', 'talent']
};

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
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','G-689YV97H3W');
                `,
                }}
                />

                {/* Metricool Tracking Script */}
                <Script 
                    id="metricool-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            function loadScript(callback) {
                                const head = document.getElementsByTagName('head')[0];
                                const script = document.createElement('script');
                                script.type = 'text/javascript';
                                script.src = 'https://tracker.metricool.com/resources/be.js';
                                script.onreadystatechange = callback;
                                script.onload = callback;
                                head.appendChild(script);
                            }
                            loadScript(function () {
                                if (window.beTracker) {
                                    window.beTracker.t({
                                        hash: "1290ec9204a13f1d44c1fae9bed96d16"
                                    });
                                }
                            });
                        `,
                    }}
                />

                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/icon_apple_touch.png" sizes="180x180" />
                <link rel="canonical" href="https://applicacorp.com/" />
            </head>
            
            <LayoutClientWrapper initialIsMobile={isMobile}>{ children }</LayoutClientWrapper>
        </html>
    );
}