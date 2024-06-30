import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo/logo-menu.svg";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

/**
 * Displays a mobile navigation bar component.
 *
 * @returns The rendered mobile navigation bar component.
 */
const MobileNavBar = () => {
    return (
        <header className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-8 sm:py-16 md:py-24 shadow-md">
            <div className="max-w-40">
                <Link href="/">
                    <Image alt="Applica's logo" src={logo} />
                </Link>
            </div>

            <IconButton edge="start">
                <MenuIcon className="text-white" />
            </IconButton>
        </header>
    );
};

export default MobileNavBar;
