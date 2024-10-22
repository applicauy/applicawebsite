import "./globals.scss";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter } from "next/font/google";
import NavBar from "./_components/navbar";
import Footer from "./_components/footer";
import MobileLayout from "./(mobile)/layout";
import Script from 'next/script';
import Image from "next/image";

import backgroundImg from '@/assets/background/gradient.svg';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Applica Corp: IT Staff augmentation services",
    description:
        "We are a software company focused on saving you time and delivering peace of mind. Build your dream team with top nearshore IT talent in only 72 hs."
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = cookies();
    const isMobile = cookieStore.get("isMobile")?.value === "true";

    if (isMobile) {
        return <MobileLayout>{children}</MobileLayout>;
    }

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
            </head>
            
            <body className={`${inter.className} overflow-x-hidden`}>

                <div className="absolute top-0 right-0 w-[60%] z-[-1]">
                    <Image
                        src={backgroundImg}
                        alt = "Background Image"
                        className="w-full object-cover"
                    />
                </div>
                
                <NavBar />

                {children}

                <Footer />

                

            </body>
        </html>
    );
}
