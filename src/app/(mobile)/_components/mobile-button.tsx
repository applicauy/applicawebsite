import { MouseEventHandler, PropsWithChildren } from "react";
import Image from "next/image";
import arrowIcon from "@/assets/icons/arrow-right.svg";
import MobileH4 from "./mobile-h4";

export default function MobileButton({
    highlightedArrow = false,
    href,
    target,
    onClick,
    children,
    type,
    disabled = false,
}: PropsWithChildren<{
    highlightedArrow?: boolean;
    href?: string;
    target?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}>) {
    const handleClick = ( e: React.MouseEvent<HTMLButtonElement> ) => {
        if( onClick )
            onClick( e );
        else if( href ) {
            if( target && target.toLowerCase() === '_blank' ){
                window.open( href, target );
            }
            else {
                window.location.href = href;
            }
        }
    }

    return (
        <button
            onClick={handleClick}
            className={`flex z-20 justify-center px-3 md:px-3 py-2 items-center border rounded-full font-medium w-fit text-sm md:text-base leading-none transition-all duration-300 ${ highlightedArrow ? "border-highlight active:bg-highlight active:text-black" : "border-white active:bg-white active:text-black" }`}
            type={type}
            disabled={disabled}
        >
            <MobileH4 className="relative top-0.5 pl-2 pr-2 text-2xl pb-1">{children}</MobileH4>

            <div
                className={`rounded-full w-10 h-10 md:w-${highlightedArrow ? "10" : "8"} p-1.5 md:p-2.5 ms-2 md:ms-3 ${highlightedArrow ? "bg-highlight" : "bg-white"}`}
            >
                <Image
                    src={arrowIcon}
                    className="h-7 w-7 md:h-7 md:w-7"
                    alt="Arrow Icon"
                    color="transparent"
                />
            </div>
        </button>
    );
}
