import { Inter } from "next/font/google";
import "./styles/mobile-layout.scss";
import MobileNavbar from "./_components/mobile-navbar";
import MobileFooter from "./_components/mobile-footer";

const inter = Inter({ subsets: ["latin"] });

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className={`mobile-layout ${inter.className}`}>
                <MobileNavbar />
                {children}
                <MobileFooter />
            </body>
        </html>
    );
};

export default MobileLayout;
