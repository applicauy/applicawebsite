import { MouseEventHandler, PropsWithChildren } from "react";
import Image from "next/image";
import arrowIcon from "@/assets/icons/arrow-right.svg";

/**
 * MobileButton component for rendering a customized button in mobile view.
 * @param {PropsWithChildren<{
 * highlightedArrow?: boolean;
 * onClick?: MouseEventHandler<HTMLButtonElement>;
 * type?: "button" | "submit" | "reset";
 * disabled?: boolean;
 * }>} Props for the MobileButton component
 * @returns {JSX.Element} Returns a React element of the MobileButton component
 */
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
            className="flex justify-center px-2 md:px-3 py-1.5 items-center border border-white rounded-full font-medium w-fit text-sm md:text-base leading-none" /* Modificar el tamaño de la fuente y padding */
            type={type}
            disabled={disabled}
        >
            <span className="relative top-0.5 pl-2 pr-1">{children}</span>

            <div
                className={`rounded-full w-${highlightedArrow ? "8" : "6"} md:w-${highlightedArrow ? "10" : "7"} p-1.5 md:p-2.5 ms-2 md:ms-3 ${highlightedArrow ? "bg-highlight" : "bg-white"}`}
            >
                <Image
                    src={arrowIcon}
                    className="h-5 w-5 md:h-7 md:w-7"
                    alt=""
                    color="transparent"
                />
            </div>
        </button>
    );
}
