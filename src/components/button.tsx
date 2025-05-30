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
    isLoading = false
}: PropsWithChildren<{
    highlightedArrow?: boolean;
    href?: string;
    target?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    largeText?: boolean;
    disabled?: boolean;
    isLoading?: boolean
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
                className={`rounded-full w-fit ${ isLoading ? 'p-2' : 'p-1.5 md:p-3' } ms-4 md:ms-9 
                    ${ ( highlightedArrow && !isLoading ) && "bg-highlight" } 
                    ${ ( !highlightedArrow && !isLoading ) && "bg-white" } 
                    image-arrow`}
            >
                {
                    isLoading ?
                        <svg role="status" className="inline h-12 w-12 animate-spin text-gray-200 dark:text-gray-600 fill-highlight"
                            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor" />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill" />
                        </svg> :
                        <Image
                            src={arrowIcon}
                            className="h-7 w-7 md:h-10 md:w-10"
                            alt="Arrow Icon"
                            color="transparent"
                            loading="lazy"
                            width={75}
                            height={75}
                        />
                }
                
            </div>
            
        </button>
    );
}
