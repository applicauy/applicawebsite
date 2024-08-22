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
    description: "We are a software company focused on saving your time and delivering peace of mind. Build your dream team with top nearshore IT talent in only 72 hs.",
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
            </body>
        </html>
    );
}
