'use client'

import { MouseEventHandler, PropsWithChildren } from "react";
import Image from "next/image";
import arrowIcon from "@/assets/icons/arrow-right.webp";
import H4 from "./h4";

/**
 * Button component.
 *
 * @component
 * @param {object} props - The component props.
 * @param {string} [props.arrowIconColor="white"] - The color of the arrow icon.
 * @param {function} [props.onClick] - The click event handler.
 * @param {ReactNode} props.children - The content of the button.
 * @param {("button" | "submit" | "reset")} [props.type] - The type of the button.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @returns {JSX.Element} The rendered Button component.
 */
export default function Button({
    highlightedArrow = false,
    href,
    target,
    onClick,
    children,
    type,
    largeText = true,
    disabled = false,
}: PropsWithChildren<{
    highlightedArrow?: boolean;
    href?: string;
    target?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    largeText?: boolean;
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
            onClick={ handleClick }
            className={`flex content-center pe-2.5 md:pe-4 ps-6 md:ps-9 py-2 items-center border ${ highlightedArrow ? 'border-highlight' : 'border-white' } rounded-full font-medium w-fit ${ largeText ? 'text-4xl' : 'text-3xl' } leading-none transition-all duration-300 ${ highlightedArrow ? 'hover:bg-highlight' : 'hover:bg-white' } hover:text-black`}
            type={type}
            disabled={disabled}
            aria-label={typeof children === "string" ? children : undefined}
        >
            <div className="flex flex-col justify-center pb-1">
                <span className={`relative text-2xl md:text-3xl leading-none ${ largeText && 'translate-y-[2px]' }`}>{children}</span>
            </div>

            <div
                className={`rounded-full w-fit p-1.5 md:p-3 ms-4 md:ms-9 ${
                    highlightedArrow ? "bg-highlight" : "bg-white"
                } image-arrow`}
            >
                <Image
                    src={arrowIcon}
                    className="h-7 w-7 md:h-10 md:w-10"
                    alt="Arrow Icon"
                    color="transparent"
                    loading="lazy"
                    width={75}
                    height={75}
                />
            </div>
        </button>
    );
}
