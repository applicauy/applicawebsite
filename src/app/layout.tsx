import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter } from "next/font/google";
import "./globals.scss";
import NavBar from "./_components/navbar";
import Footer from "./_components/footer";
import MobileLayout from "./(mobile)/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Applica Corp: IT Staff augmentation services",
    description:
        "We are a software company focused on saving you time and delivering peace of mind. Build your dream team with top nearshore IT talent in only 72 hs.",
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
            {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-689YV97H3W"></script>
                <script>
                    window.dataLayer: object[] = window.dataLayer || [];
                    function gtag(){
                    // @ts-ignore
                    dataLayer.push(arguments)}
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    gtag('js', new Date());
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                    gtag('config', 'G-689YV97H3W');
                </script>
            </head>
            <body className={`${inter.className}`}>
                <NavBar />

                {children}

                <Footer />
            </body>
        </html>
    );
}
