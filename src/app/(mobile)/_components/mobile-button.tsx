import { MouseEventHandler, PropsWithChildren } from "react";
import Image from "next/image";
import arrowIcon from "@/assets/icons/arrow-right.svg";

export default function MobileButton({
    highlightedArrow = false,
    onClick,
    children,
    type,
    disabled = false,
}: PropsWithChildren<{
    highlightedArrow?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}>) {
    return (
        <button
            onClick={onClick}
            className={`flex z-20 justify-center px-3 md:px-3 py-2 items-center border rounded-full font-medium w-fit text-sm md:text-base leading-none transition-all duration-300 ${ highlightedArrow ? "border-highlight active:bg-highlight active:text-black" : "border-white active:bg-white active:text-black" }`}
            type={type}
            disabled={disabled}
        >
            <span className="relative top-0.5 pl-2 pr-2 text-2xl pb-1">{children}</span>

            <div
                className={`rounded-full w-10 h-10 md:w-${highlightedArrow ? "10" : "8"} p-1.5 md:p-2.5 ms-2 md:ms-3 ${highlightedArrow ? "bg-highlight" : "bg-white"}`}
            >
                <Image
                    src={arrowIcon}
                    className="h-7 w-7 md:h-7 md:w-7"
                    alt=""
                    color="transparent"
                />
            </div>
        </button>
    );
}
