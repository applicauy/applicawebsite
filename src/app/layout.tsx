import "./globals.scss";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter } from "next/font/google";
import NavBar from "./_components/navbar";
import Footer from "./_components/footer";
import MobileLayout from "./(mobile)/layout";
import { GoogleTagManager } from "@next/third-parties/google";
import TrackPageView from "../components/track-page-view";

const GTM_ID = "GTM-PQ3DNDZ";

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
            <body className={`${inter.className}`}>
                <NavBar />
                {children}
                <Footer />

                <GoogleTagManager gtmId={GTM_ID} />
                <TrackPageView />
            </body>
        </html>
    );
}
